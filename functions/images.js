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
    if (imageType == "pfps") {
      return new Promise((resolve, reject) => {
        console.log("Writing the pfp's url into firestore...");
        db.collection("users").doc(uid).update({
          "mainInfo.pfp": url,
        }).then((response) => {
          return db.collection("listings").where("userInfo.uid", "==", uid).get();
        }).then((docs) => {
          return db.collection("listings").doc(docs.docs[0].id).update({
            "userInfo.images.pfp": url,
          });
        }).then((response) => {
          console.log(`New pfp ${imageName} 
              has been succesfully written into firestore.`);
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    } else if (imageType == "listingImgs") {
      return new Promise((resolve, reject) => {
        console.log("Writing the image's url into firestore...");
        const index = filePath.split("/")[3].split(".")[0].split("_")[0];
        db.collection("listings").where("userInfo.uid", "==", uid).get()
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
            }).then((response) => {
              console.log(`New image ${imageName} 
                  has been succesfully written into firestore.`);
              resolve(response);
            }).catch((error) => {
              reject(error);
            });
      });
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
      return new Promise((resolve, reject) => {
        db.collection("users").doc(uid).update({
          "mainInfo.pfp": "",
        }).then((response) => {
          return db.collection("listings").doc(listingId).update({
            "userInfo.images.pfp": "",
          });
        }).then((response) => {
          storage.deleteFiles(
              {prefix: `users/${uid}/${imageType}/${imageName}`}
          );
        }).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    }
    if (imageType === "listingImgs") {
      return new Promise((resolve, reject) => {
        // Image name = index_500x500.png
        const imageIndex = imageName.split("_")[0];
        db.collection("listings").doc(listingId).get().then((listing) => {
          const listingImgs = listing.data().userInfo.images.listingImgs;
          listingImgs[imageIndex] = "";
          return db.collection("listings").doc(listingId).update({
            "userInfo.images.listingImgs": listingImgs,
          });
        }).then((response) => {
          return storage.deleteFiles(
              {prefix: `users/${uid}/${imageType}/${imageName}`}
          );
        }).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    }
});