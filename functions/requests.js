const functions = require("firebase-functions");
const admin = require("firebase-admin");
// Every function related to requests or friends and notifications

// Requests - create and resolve

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
        pfp: sender.mainInfo.pfp,
        message: data.message,
        timeStamp: admin.firestore.FieldValue.serverTimestamp(),
      }).then((result) => {
        return users.doc(senderUid).collection("sentRequests").doc(recieverUid)
            .set({
              username: reciever.username,
              age: reciever.age,
              listingId: recieverListingId,
              pfp: reciever.images.pfp,
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

// Friends

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

// Notifications

exports.recievedNotification = functions.firestore
    .document("users/{userUid}/recievedRequests/{senderUid}")
    .onCreate((snap, context) => {
      const db = admin.firestore();
      const colRef = db.collection("users").doc(snap.ref.parent.parent.id)
          .collection("notifications");
      return colRef.doc(snap.id).set({
        message: `Uživatel ${snap.data().username} vám zaslal žádost o kontakt`,
        type: "recievedRequest",
        timeStamp: admin.firestore.FieldValue.serverTimestamp(),
      });
    });

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

exports.deleteRecievedNotification = functions.firestore
    .document("users/{userId}/recievedRequests/{senderUid}")
    .onDelete((snap, context) => {
      const db = admin.firestore();
      return db.collection("users")
          .doc(snap.ref.parent.parent.id)
          .collection("notifications")
          .doc(snap.id).delete();
    });

exports.deleteAcceptedNotifications = functions
    .https.onCall((data, context) => {
      data = JSON.parse(data);
      const db = admin.firestore();
      const uid = data.uid;
      return new Promise((resolve, reject) => {
        db.collection("users").doc(uid).collection("notifications")
            .where("type", "==", "acceptedRequest").get().then((docs) => {
              Promise.all(
                  docs.docs.map((doc) => {
                    return db.collection("users")
                        .doc(uid)
                        .collection("notifications")
                        .doc(doc.id)
                        .delete();
                  })
              ).then((response) => {
                resolve(response);
              }).catch((error) => {
                reject(error);
              });
            });
      });
    });