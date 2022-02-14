const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();

exports.birthday = functions.pubsub.schedule("0 1 * * *").timeZone("Europe/Prague").onRun((context) => {
        const now = admin.firestore.Timestamp.now();
        return db.collection("users").where("mainInfo.birthday", "<=", now).get().then((users) => {
            console.log("Found " + users.docs.length + " users with outdated age.");
            return Promise.all(
                users.docs.map((user) => {
                    const currentAge = user.data().mainInfo.age;
                    const newAge = currentAge + 1;
                    const listingId = user.data().listing.id;
                    return db.collection("users").doc(user.id).update({
                        "mainInfo.age": newAge,
                    }).then((response) => {
                        return db.collection("listings").doc(listingId).update({
                            "userInfo.age": newAge,
                        })
                    })
                })
            )
        })
})

exports.birthdayCallable = functions.https.onRequest((req, res) => {
    const now = admin.firestore.Timestamp.now();
    return db.collection("users").where("mainInfo.birthday", "<=", now).get().then((users) => {
        console.log("Found " + users.docs.length + " with outdated birthday.");
        return Promise.all(
            users.docs.map((user) => {
                const currentAge = user.data().mainInfo.age;
                const newAge = currentAge + 1;
                const listingId = user.data().listing.id;
                return db.collection("users").doc(user.id).update({
                    "mainInfo.age": newAge,
                }).then((response) => {
                    return db.collection("listings").doc(listingId).update({
                        "userInfo.age": newAge,
                    })
                })
            })
        )
    }).then((response) => {
        res.status(200).send("Success");
    }).catch((error) => {
        res.status(500).send(error);
    })
})


