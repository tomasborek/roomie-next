const functions = require("firebase-functions");
const admin = require("firebase-admin");
/* Every function related to images
 and storage (except for storage delete at user delete, that's in onDeletedUser)*/

// Writing images to storage takes place at client side, not in cloud functions

exports.addImgs = functions.storage.bucket().object().onFinalize((object) => {
    // File path is users/{uid}/{imageType}/{imageName}.png
    const filePath = object.name;
    // The folder it's in. Either pfps or listingImgs
    const imageType = filePath.split("/")[2];
    // The image name with it's format
    const imageName = filePath.split("/")[3];
    console.log("Checking if the image is resized...");
    /* We check x because if the
    image is resized it includes {size}x{size} in it's name*/
    if (!filePath.includes("500x500")) {
      return console.log("The image is not resized, ignoring.");
    }
    console.log("The image is the resized version.");
    const uid = filePath.split("/")[1];
    const url = `https://storage.googleapis.com/${object.bucket}/${filePath}`;
    const db = admin.firestore();
    const usersRef = db.collection("users");
    const listingsRef = db.collection("listings");

    if (imageType == "pfps") {
        console.log("Writing the pfp's url into firestore...");
        return usersRef.doc(uid).update({
          "mainInfo.pfp": url,
        }).then((response) => {
          return listingsRef.where("userInfo.uid", "==", uid).get();
        }).then((docs) => {
          return listingsRef.doc(docs.docs[0].id).update({
            "userInfo.images.pfp": url,
          });
        }).then((response) => {
          return usersRef.doc(uid).collection("friends").get();
        }).then((friends) => {
          return Promise.all(
            friends.docs.map((friend) => {
              return usersRef.doc(friend.id).collection("friends").doc(uid).update({
                pfp: url,
              })
            })
          );
        }).then((response) => {
          return usersRef.doc(uid).collection("recievedRequests").get();
        }).then((recievedRequests) => {
          return Promise.all(
            recievedRequests.docs.map((request) => {
              return usersRef.doc(request.id).collection("sentRequests").doc(uid).update({
                pfp: url,
              })
            })
          );
        }).then((response) => {
          return usersRef.doc(uid).collection("sentRequests").get();
        }).then((sentRequests) => {
          return Promise.all(
            sentRequests.docs.map((request) => {
              return usersRef.doc(request.id).collection("recievedRequests").doc(uid).update({
                pfp: url,
              })
            })
          );
        })
    } else if (imageType == "listingImgs") {
        console.log("Writing the image's url into firestore...");
        const index = filePath.split("/")[3].split(".")[0].split("_")[0];
        return db.collection("listings").where("userInfo.uid", "==", uid).get()
            .then((docs) => {
              const listingImgs = docs.docs[0].data().userInfo.images.listingImgs;
              for (let i = 0; i <= index; i++) {
                if (i == index) {
                  listingImgs[i] = url;
                } else if (!listingImgs[i]) {
                  listingImgs[i] = "";
                }
              }
              return db.collection("listings").doc(docs.docs[0].id).update({
                "userInfo.images.listingImgs": listingImgs,
              });
            })
    }
});

exports.deleteImgs = functions.https.onCall((data, context) => {
    data = JSON.parse(data); // URL, uid, listingId
    // https://storage.googleapis.com/{bucket[1]}/users[2]/{UID[3]}/{imageType[4]}/{image[5]}
    const imageUrl = data.url.replace("https://", ""); // Delete https://
    const uid = data.uid;
    const listingId = data.listingId;
    const imageType = imageUrl.split("/")[4];
    const imageName = imageUrl.split("/")[5];
    const db = admin.firestore();
    const storage = admin.storage().bucket();
    
    if (imageType == "pfps") {
        return db.collection("users").doc(uid).update({
          "mainInfo.pfp": "",
        }).then((response) => {
          return db.collection("listings").doc(listingId).update({
            "userInfo.images.pfp": "",
          });
        }).then((response) => {
          storage.deleteFiles(
              {prefix: `users/${uid}/${imageType}/${imageName}`}
          );
        })
    }
    if (imageType === "listingImgs") {
        // Image name = index_500x500.png
        const imageIndex = imageName.split("_")[0];
        return db.collection("listings").doc(listingId).get().then((listing) => {
          const listingImgs = listing.data().userInfo.images.listingImgs;
          listingImgs[imageIndex] = "";
          return db.collection("listings").doc(listingId).update({
            "userInfo.images.listingImgs": listingImgs,
          });
        }).then((response) => {
          return storage.deleteFiles(
              {prefix: `users/${uid}/${imageType}/${imageName}`}
          );
        })
    }
});

exports.cleanImgs = functions.storage.bucket().object().onDelete((object) => {
  const db = admin.firestore();
  // File path is users/{uid}/{imageType}/{imageName}.png
  const filePath = object.name;
  const imageType = filePath.split("/")[2];
  if(imageType != "pfps") return;
  /* We check x because if the
    image is resized it includes {size}x{size} in it's name*/
    if (!filePath.includes("500x500")) {
      return console.log("The image is not resized, ignoring.");
    }
  const uid = filePath.split("/")[1];
  const usersRef = db.collection("users");
  const recievedSnaps = usersRef.doc(uid).collection("recievedRequests");
  const sentSnaps = usersRef.doc(uid).collection("sentRequests");
  const friendsSnaps = usersRef.doc(uid).collection("friends");

  return friendsSnaps.get().then((friends) => {
      return Promise.all(
        friends.docs.map((friend) => {
          return usersRef.doc(friend.id).collection("friends").doc(uid).update({
            pfp: "",
          })
        })
      );
    }).then((response) => {
      return recievedSnaps.get()
    }).then((recievedRequests) => {
    return Promise.all(
      recievedRequests.docs.map((request) => {
        return usersRef.doc(request.id).collection("sentRequests").doc(uid).update({
          pfp: "",
        });
      })
    );
  }).then((response) => {
    return sentSnaps.get();
  }).then((sentRequests) => {
    return Promise.all(
        sentRequests.docs.map((request) => {
          return usersRef.doc(request.id).collection("recievedRequests").doc(uid).update({
            pfp: "",
          })
        })
      );
  })
})