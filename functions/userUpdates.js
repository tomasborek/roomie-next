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
      db.collection("users").doc(uid).update(userParams).then((response) => {
        return db.collection("listings").doc(listingId).update(listingParams);
      })
});

exports.updateListing = functions.https.onCall((data, context) => {
    // Parse incoming data
    data = JSON.parse(data);
    
    const db = admin.firestore();
    const listingId = data.listingId;
    const params = data.params;
    return db.collection("listings").doc(listingId).update(params);
});

exports.likeListing = functions.https.onCall((data, context) => {
  data = JSON.parse(data);
  const db = admin.firestore();
  const fanUid = data.fanUid;
  const listingId = data.listingId;
  const listingInfo = data.listingInfo;
  listingInfo.timeStamp = admin.firestore.FieldValue.serverTimestamp();
  return db.collection("listings").doc(listingId).update({
    likedBy: admin.firestore.FieldValue.arrayUnion(fanUid),
  }).then((response) => {
    return db.collection("users").doc(fanUid).collection("likedListings").doc(listingId).set(listingInfo);
  })
})

exports.unlikeListing = functions.https.onCall((data, context) => {
  data = JSON.parse(data);
  const db = admin.firestore();
  const fanUid = data.fanUid;
  const listingId = data.listingId;
  return db.collection("listings").doc(listingId).update({
    likedBy: admin.firestore.FieldValue.arrayRemove(fanUid),
  }).then((response) => {
    return db.collection("users").doc(fanUid).collection("likedListings").doc(listingId).delete();
  })
})