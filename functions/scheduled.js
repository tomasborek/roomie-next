const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();

exports.birthday = functions.pubsub.schedule("0 1 * * *")
    .timeZone("Europe/Prague")
    .onRun((context) => {
        const now = admin.firestore.Timestamp.now();
        return db.collection("users").where("birthday", "<=", now).get().then((users) => {
            return Promise.all(
                users.docs.map((user) => {
                    const currentAge = user.data().mainInfo.age;
                    const age = currentAge + 1;
                    const listingId = user.data().listing.id;
                    return new Promise((resolve, reject) => {
                        db.collection("users").doc(user.id).update({
                            "mainInfo.age": age,
                        }).then((response) => {
                            return db.collection("listings").doc(listingId).update({
                                "userInfo.age": age,
                            })
                        }).then((response) => {
                            resolve(response);
                        }).catch((error) => {
                            reject(error);
                        })
                    })
                })
            )
        })
    })