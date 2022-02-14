const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();

exports.birthdayCallable = functions.https.onRequest((req, res) => {
    let now = admin.firestore.Timestamp.now();
    now = now.toDate();
    return db.collection("users").get().then((allUsers) => {
        return Promise.all(
            allUsers.docs.map((user) => {
                let birthday = user.data().mainInfo.birthday;
                birthday = birthday.toDate();
                const diff = now - birthday;
                const ageDate = new Date(diff);
                const age = Math.abs(ageDate.getFullYear() - 1970);
                return db.collection("users").doc(user.id).update({
                    "mainInfo.age": age,
                }).then((response) => {
                    db.collection("listings").doc(user.data().listing.id).update({
                        "userInfo.age": age,
                    })
                }) 
            })
        )
    }).then((response) => {
        res.status(200).send("Success");
    }).catch((error) => {
        res.status(500).send(error.message);
    })
})



