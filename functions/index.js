const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();
// Callable---
// Create user's database record
exports.createUser = functions.https.onCall((data, context) => {
  const userInfo = {
    mainInfo: {
      username: data.username,
      age: data.age,
      gender: data.gender,
      birthday: data.birthday,
      location: data.location,
      type: data.type,
      pfp: "",
    },
    contact: {
      email: data.email,
      phone: data.phone,
      socials: {
        ig: "",
        fb: "",
        tt: "",
      },
    },
    listing: {
      id: data.listingId,
    },
  };
  return admin.firestore().collection("users").doc(data.uid).set(userInfo);
});
// Create user's listing db record
exports.createListing = functions.https.onCall((data, context) => {
  let listingInfo;
  if (data.type == "flatmate") {
    listingInfo = {
      userInfo: {
        username: data.username,
        gender: data.gender,
        age: data.age,
        contact: data.contact,
        uid: data.uid,
        images: {
          pfp: "",
          listingImgs: [],
        },
      },
      mainInfo: {
        budget: data.money,
        startTime: "",
        stayTime: "",
      },
      personTags: {},
      flatTags: {
        location: [data.location],
      },
      personBoxes: {},
      bio: "",
      type: "flatmate",
      friends: [],
      requests: [],
      sentRequests: [],
      visible: false,
      timeStamp: admin.firestore.FieldValue.serverTimestamp(),
    };
  } else if (data.type == "offerer") {
    listingInfo = {
      userInfo: {
        username: data.username,
        gender: data.gender,
        age: data.age,
        contact: data.contact,
        uid: data.uid,
        images: {
          pfp: "",
          listingImgs: [],
        },
      },
      mainInfo: {
        price: data.money,
        startTime: "",
        stayTime: "",
      },
      personTags: {},
      flatBoxes: {
        location: data.location,
      },
      personBoxes: {},
      flatBio: "",
      personBio: "",
      type: "flat",
      friends: [],
      requests: [],
      sentRequests: [],
      visible: false,
      timeStamp: admin.firestore.FieldValue.serverTimestamp(),
    };
  }
  const doc = admin.firestore().collection("listings").doc(data.listingId);
  return doc.set(listingInfo);
});
// Create both requests
exports.createRequest = functions.https.onCall((data, context) => {
  data = JSON.parse(data);
  const db = admin.firestore();
  // Two people involved vars
  // Sender is user.data()
  const sender = data.sender;
  const senderUid = data.senderUid;
  // Reciever is userInfo in listing
  const reciever = data.reciever;
  const recieverListingId = data.recieverListingId;
  const recieverUid = data.recieverUid;
  // Doc and collection references
  const users = db.collection("users");
  const listings = db.collection("listings");
  return new Promise((resolve, reject) => {
    users.doc(recieverUid).collection("recievedRequests").doc(senderUid).set({
      username: sender.mainInfo.username,
      age: sender.mainInfo.age,
      gender: sender.mainInfo.gender,
      listingId: sender.listing.id,
      type: sender.mainInfo.type,
      message: data.message,
      timeStamp: admin.firestore.FieldValue.serverTimestamp(),
    }).then((result) => {
      return users.doc(senderUid).collection("sentRequests").doc(recieverUid)
          .set({
            username: reciever.username,
            age: reciever.age,
            listingId: recieverListingId,
            timeStamp: admin.firestore.FieldValue.serverTimestamp(),
          });
    }).then((response) => {
      return listings.doc(recieverListingId).update({
        requests: admin.firestore.FieldValue.arrayUnion(senderUid),
      });
    }).then((response) => {
      return listings.doc(sender.listing.id).update({
        sentRequests: admin.firestore.FieldValue.arrayUnion(recieverUid),
      });
    }).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
});
// Delete requests after resolving
exports.resolveRequest = functions.https.onCall((data, context) => {
  // Parse incoming data
  data = JSON.parse(data);
  // admin sdk reference
  const db = admin.firestore();
  // Variables
  const senderUid = data.senderUid;
  const recieverUid = data.recieverUid;
  const senderListing = data.senderListing;
  const recieverListing = data.recieverListing;
  const recieverColRef = db.collection("users")
      .doc(recieverUid)
      .collection("recievedRequests");
  const recieverListingDoc = db.collection("listings")
      .doc(recieverListing);
  const senderColRef = db.collection("users")
      .doc(senderUid)
      .collection("sentRequests");
  const senderListingDoc = db.collection("listings")
      .doc(senderListing);
  // Returning promise
  return new Promise((resolve, reject) => {
    // Delete recieved request from reciever's subcollection
    recieverColRef.doc(senderUid).delete().then((response) => {
      return senderColRef.doc(recieverUid).delete();
    }).then((response) => {
      // Then, remove request from reciever's listing
      return recieverListingDoc.update({
        requests: admin.firestore.FieldValue.arrayRemove(senderUid),
      });
    }).then((response) => {
      // Then remove sent request from sender's listing
      return senderListingDoc.update({
        sentRequests: admin.firestore.FieldValue.arrayRemove(recieverUid),
      });
    }).then((response) => {
      // The final then, and resolve whole promise
      resolve(response);
    });
  });
});
// Creates friends
exports.createFriend = functions.https.onCall((data, context) => {
  // Parse incoming data
  data = JSON.parse(data);
  // Admin sdk shortcut
  const db = admin.firestore();
  // Variables
  // Reciever is user.data()
  const reciever = data.reciever;
  const recieverUid = data.recieverUid;
  const recieverListing = data.recieverListing;
  // Sender is request info
  const sender = data.sender;
  const senderUid = data.senderUid;
  const senderListing = data.senderListing;
  const recieverFriends = db.collection("users")
      .doc(recieverUid)
      .collection("friends");
  const recieverListingDoc = db.collection("listings")
      .doc(recieverListing);
  const senderFriends = db.collection("users")
      .doc(senderUid)
      .collection("friends");
  const senderListingDoc = db.collection("listings")
      .doc(senderListing);
  // Returning promise
  return new Promise((resolve, reject) => {
    // Add friend (sender) to reciever's subcollection
    recieverFriends.doc(senderUid).set({
      username: sender.username,
      age: sender.age,
      type: sender.type,
      gender: sender.gender,
      listingId: senderListing,
      timeStamp: admin.firestore.FieldValue.serverTimestamp(),
    }).then((response) => {
      // Then, add friend (reciever) to sender's subcollection
      return senderFriends.doc(recieverUid).set({
        username: reciever.mainInfo.username,
        age: reciever.mainInfo.age,
        type: reciever.mainInfo.type,
        gender: reciever.mainInfo.gender,
        listingId: recieverListing,
        timeStamp: admin.firestore.FieldValue.serverTimestamp(),
      });
    }).then((response) => {
      // Then, add friend (sender) to reciever's listing
      return recieverListingDoc.update({
        friends: admin.firestore.FieldValue.arrayUnion(senderUid),
      });
    }).then((response) => {
      // Then, add friend (reciever) to sender's listing
      return senderListingDoc.update({
        friends: admin.firestore.FieldValue.arrayUnion(recieverUid),
      });
    }).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
});
exports.updateProfile = functions.https.onCall((data, context) => {
  // Parse incoming data
  data = JSON.parse(data);
  // Shortcut
  const db = admin.firestore();
  const uid = data.uid;
  const listingId = data.listingId;
  const userParams = data.userParams;
  const listingParams = data.listingParams;
  return new Promise((resolve, reject) => {
    db.collection("users").doc(uid).update(userParams).then((response) => {
      return db.collection("listings").doc(listingId).update(listingParams);
    }).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
});
exports.updateListing = functions.https.onCall((data, context) => {
  // Parse incoming data
  data = JSON.parse(data);
  // Shortcut
  const db = admin.firestore();
  const listingId = data.listingId;
  const params = data.params;
  return db.collection("listings").doc(listingId).update(params);
});
// Trigger functions---
// Delete user's db record when his auth is deleted
exports.deleteUser = functions.auth.user().onDelete((user) => {
  const doc = admin.firestore().collection("users").doc(user.uid);
  return doc.delete();
});
// Delte user's listing's db record when his auth is deleted
exports.deleteListing = functions.auth.user().onDelete((user) => {
  const collectionRef = admin.firestore().collection("listings");
  const query = collectionRef.where("userInfo.uid", "==", user.uid);
  return new Promise((resolve, reject) => {
    query.get().then((listings) => {
      return collectionRef.doc(listings.docs[0].id).delete();
    }).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
});
// Notifications
// Recieved Requests
exports.recievedNotification = functions.firestore
    .document("users/{userUid}/recievedRequests/{senderUid}")
    .onCreate((snap, context) => {
      const db = admin.firestore();
      console.log(snap.ref.parent.parent.id);
      const colRef = db.collection("users").doc(snap.ref.parent.parent.id)
          .collection("notifications");
      return colRef.doc(snap.id).set({
        message: `Uživatel ${snap.data().username} vám zaslal žádost o kontakt`,
        type: "recievedRequest",
        timeStamp: admin.firestore.FieldValue.serverTimestamp(),
      });
    });
// Delete notification when request is resolved
exports.deleteRecievedNotification = functions.firestore
    .document("users/{userId}/recievedRequests/{senderUid}")
    .onDelete((snap, context) => {
      const db = admin.firestore();
      return db.collection("users")
          .doc(snap.ref.parent.parent.id)
          .collection("notifications")
          .doc(snap.id).delete();
    });
// Send notification to sender when request gets accepted
exports.acceptedNotification = functions.firestore
    .document("users/{userId}/friends/{friendId}")
    .onCreate((snap, context) => {
      const db = admin.firestore();
      return db.collection("users")
          .doc(snap.ref.parent.parent.id)
          .collection("notifications")
          .doc(snap.id).set({
            message: `Uživatel ${snap.data().username} přijal vaší žádost.`,
            type: "acceptedRequest",
            timeStamp: admin.firestore.FieldValue.serverTimestamp(),
          });
    });
// Writes new pfp to a user's db
exports.addImgs = functions.storage.bucket().object().onFinalize((object) => {
  const filePath = object.name;
  const imageType = filePath.split("/")[2];
  const uid = filePath.split("/")[1];
  const url = `https://storage.googleapis.com/${object.bucket}/${object.name}`;
  const db = admin.firestore();
  if (imageType == "pfps") {
    return new Promise((resolve, reject) => {
      db.collection("users").doc(uid).update({
        "mainInfo.pfp": url,
      }).then((response) => {
        return db.collection("listings").where("userInfo.uid", "==", uid).get();
      }).then((docs) => {
        return db.collection("listings").doc(docs.docs[0].id).update({
          "userInfo.images.pfp": url,
        });
      }).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  } else if (imageType == "listingImgs") {
    return new Promise((resolve, reject) => {
      const index = filePath.split("/")[3].split(".")[0];
      db.collection("listings").where("userInfo.uid", "==", uid).get()
          .then((docs) => {
            const listingImgs = docs.docs[0].data().userInfo.images.listingImgs;
            listingImgs[index] = url;
            return db.collection("listings").doc(docs.docs[0].id).update({
              "userInfo.images.listingImgs": listingImgs,
            });
          }).then((response) => {
            resolve(response);
          }).catch((error) => {
            reject(error);
          });
    });
  }
});
// When pfp is deleted from storage, it gets deleted from user's db
exports.deleteImgs = functions.storage.bucket().object().onDelete((object) => {
  const filePath = object.name;
  const imageType = filePath.split("/")[2];
  const uid = filePath.split("/")[1];
  "users/uid/pfp/pfp.png";
  const db = admin.firestore();
  // const url = `https://storage.googleapis.com/${object.bucket}/${object.name}`;
  if (imageType === "pfps") {
    return new Promise((resolve, reject) => {
      db.collection("users").doc(uid).update({
        "mainInfo.pfp": "",
      }).then((response) => {
        return db.collection("listings").where("userInfo.uid", "==", uid).get();
      }).then((docs) => {
        return db.collection("listings").doc(docs.docs[0].id).update({
          "userInfo.images.pfp": "",
        });
      }).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  } else if (imageType === "listingImgs") {
    return new Promise((resolve, reject) => {
      const index = filePath.split("/")[3].split(".")[0];
      db.collection("listings").where("userInfo.uid", "==", uid).get()
          .then((docs) => {
            const listingImgs = docs.docs[0].data().userInfo.images.listingImgs;
            listingImgs[index] = "";
            return db.collection("listings").doc(docs.docs[0].id).update({
              "userInfo.images.listingImgs": listingImgs,
            });
          }).then((response) => {
            resolve(response);
          }).catch((error) => {
            reject(error);
          });
    });
  }
});
