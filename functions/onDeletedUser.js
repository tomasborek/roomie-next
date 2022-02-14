const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { db } = require("../Firebase");
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
    let listingId;
    return query.get().then((listings) => {
        listingId = listings.docs[0].id;
      return collectionRef.doc(listingId).delete();
    }).then((response) => {
        return collectionRef.doc(listingId).collection("contact").get();
    }).then((docs) => {
        return collectionRef.doc(listingId).collection("contact").doc(docs.docs[0].id).delete();
    })
});

exports.deleteFriends = functions.firestore.document("users/{userId}/friends/{friendId}").onDelete((snap, context) => {
    const db = admin.firestore();
    const usersCollection = db.collection("users");
    const friendId = snap.id;
    const uid = snap.ref.parent.parent.id;
    return usersCollection.doc(friendId).collection("friends").doc(uid).delete();

})

exports.deleteRequests = functions.auth.user().onDelete((user) => {
    return db.collection("users").doc(user.uid).collection("sentRequests").get().then((sentRequests) => {
        return Promise.all(
            sentRequests.docs.map((sentRequest) => {
                return db.collection("users").doc(user.uid).collection("sentRequests").doc(sentRequest.id).delete();
            })
        )
    }).then((response) => {
        return db.collection("users").doc(user.uid).collection("recievedRequests").get();
    }).then((recievedRequests) => {
        return Promise.all(
            recievedRequests.docs.map((recievedRequest) => {
                return db.collection("users").doc(user.uid).collection("recievedRequests").doc(recievedRequest.id).delete();
            })
        )
    })
})

// Delete storage record of a user
exports.deleteStorage = functions.auth.user().onDelete((user) => {
    const storage = admin.storage().bucket();
    return storage.deleteFiles({prefix: `users/${user.uid}`});
});