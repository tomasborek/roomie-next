const functions = require("firebase-functions");
const admin = require("firebase-admin");
// Every function that happens on deleted user, either called or triggered by auth

//Triggered

// Delete user's db record when his auth is deleted
exports.deleteUser = functions.auth.user().onDelete((user) => {
    const doc = admin.firestore().collection("users").doc(user.uid);
    return doc.delete();
});

// Delte user's listing's db record when his auth is deleted
exports.deleteListing = functions.auth.user().onDelete((user) => {
    const collectionRef = admin.firestore().collection("listings");
    const query = collectionRef.where("userInfo.uid", "==", user.uid);
    return query.get().then((listings) => {
      return collectionRef.doc(listings.docs[0].id).delete();
    });
});

// Delete storage record of a user
exports.deleteStorage = functions.auth.user().onDelete((user) => {
    const storage = admin.storage().bucket();
    return storage.deleteFiles({prefix: `users/${user.uid}`});
});