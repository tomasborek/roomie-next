const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();

exports.hiddenContactMigration = functions.https.onRequest((req, res) => {
    const listings = db.collection("listings");
    return listings.get().then((docs) => {
        return Promise.all(
            docs.docs.map((doc) => {
                return listings.doc(doc.id).collection("contact").get().then((contactDocs) => {
                    listings.doc(doc.id).collection("contact").doc(contactDocs.docs[0].id).update({
                        hidden: "",
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

exports.hiddenContactUserMigration = functions.https.onRequest((req, res) => {
    const users = db.collection("users");
    return users.get().then((docs) => {
        return Promise.all(
            docs.docs.map((doc) => {
                return users.doc(doc.id).update({
                    "contact.hidden": ""
                })
            })
        )
    }).then((response) => {
        res.status(200).send("Success");
    }).catch((error) => {
        res.status(500).send(error);
    })
})