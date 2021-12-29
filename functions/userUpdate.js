const functions = require("firebase-functions");
const admin = require("firebase-admin");
// Every function that handles update that user made

exports.updateProfile = functions.https.onCall((data, context) => {
    // Parse incoming data
    data = JSON.parse(data);

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
    
    const db = admin.firestore();
    const listingId = data.listingId;
    const params = data.params;
    return db.collection("listings").doc(listingId).update(params);
});