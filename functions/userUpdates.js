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
  return db
    .collection("users")
    .doc(uid)
    .update(userParams)
    .then((response) => {
      return db
        .collection("listings")
        .doc(listingId)
        .collection("contact")
        .get();
    })
    .then((doc) => {
      return db
        .collection("listings")
        .doc(listingId)
        .collection("contact")
        .doc(doc.docs[0].id)
        .update({
          email: listingParams.email,
          phone: listingParams.phone,
          fb: listingParams.fb,
          ig: listingParams.ig,
          hidden: listingParams.hiddenContact,
        });
    })
    .then((response) => {
      return db.collection("listings").doc(listingId).update({
        hiddenByUser: listingParams.hiddenByUser,
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

exports.likeListing = functions.https.onCall((data, context) => {
  data = JSON.parse(data);
  const db = admin.firestore();
  const fanUid = data.fanUid;
  const listingId = data.listingId;
  const listingInfo = data.listingInfo;
  listingInfo.timeStamp = admin.firestore.FieldValue.serverTimestamp();
  return db
    .collection("listings")
    .doc(listingId)
    .update({
      likedBy: admin.firestore.FieldValue.arrayUnion(fanUid),
    })
    .then((response) => {
      return db
        .collection("users")
        .doc(fanUid)
        .collection("likedListings")
        .doc(listingId)
        .set(listingInfo);
    });
});

exports.unlikeListing = functions.https.onCall((data, context) => {
  data = JSON.parse(data);
  const db = admin.firestore();
  const fanUid = data.fanUid;
  const listingId = data.listingId;
  return db
    .collection("listings")
    .doc(listingId)
    .update({
      likedBy: admin.firestore.FieldValue.arrayRemove(fanUid),
    })
    .then((response) => {
      return db
        .collection("users")
        .doc(fanUid)
        .collection("likedListings")
        .doc(listingId)
        .delete();
    });
});

exports.resetPasswordEmail = functions.https.onCall((data, context) => {
  data = JSON.parse(data);
  const db = admin.firestore();
  const emailCol = db.collection("newUserMail");
  const email = data.email;
  const token = Math.random().toString(20).substring(2, 20);
  let uid;

  return db
    .collection("users")
    .where("contact.email", "==", email)
    .get()
    .then((user) => {
      uid = user.docs[0].id;
      return emailCol.add({
        to: email,
        message: {
          subject: "Obnoven?? hesla",
          text: `Pro zm??nu sv??ho hesla pros??m nav??tivte https://roomie.cz/reset-password/${token}`,
        },
      });
    })
    .then((response) => {
      return db.collection("passwordTokens").doc(token).set({
        uid,
        email,
      });
    });
});

exports.resetPassword = functions.https.onCall((data, context) => {
  data = JSON.parse(data);
  const db = admin.firestore();
  const id = data.id;
  const password = data.password;
  let uid;
  return db
    .collection("passwordTokens")
    .doc(id)
    .get()
    .then((userToken) => {
      uid = userToken.data().uid;
      return admin.auth().updateUser(uid, {
        password,
      });
    })
    .then((response) => {
      return db.collection("passwordTokens").doc(id).delete();
    });
});

exports.updateActivity = functions.https.onCall((data, context) => {
  data = JSON.parse(data);
  const listingId = data.listingId;
  const db = admin.firestore();
  return db.collection("listings").doc(listingId).update({
    "userInfo.lastActive": admin.firestore.FieldValue.serverTimestamp(),
  });
});
