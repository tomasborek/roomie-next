const functions = require("firebase-functions");
const admin = require("firebase-admin");


exports.verifyToken = functions.https.onCall((data, context) => {
    data = JSON.parse(data);
    const token = data.token;
    const db = admin.firestore();
    let uid;
    let listingId;
    return new Promise((resolve, reject) => {
        db.collection("tokens").doc(token).get().then((doc) => {
            if(!doc){
               reject("Něco se nepodařilo");
               return;
            }else if (doc.data().state === "unverified") {
                uid = doc.data().uid;
                return db.collection("tokens").doc(token).update({
                    state: "verified",
                })
            }
        }).then((response) => {
            return db.collection("users").doc(uid).get();
        }).then((doc) => {
            listingId = doc.data().listing.id;
            return db.collection("users").doc(uid).update({
                emailVerified: true,
            })
        }).then((response) => {
            return db.collection("listings").doc(listingId).update({
                "userInfo.emailVerified": true,
            })
        }).then((response) => {
            return db.collection("tokens").doc(token).delete();
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    });
});

exports.sendVerifyEmail = functions.firestore.document("/tokens/{token}").onCreate((snap, context) => {
    const email = snap.data().email;
    const db = admin.firestore();
    return db.collection("newUserMail").add({
        to: email,
        message: {
            subject: "Ověřte svůj email",
            html: `
                    <h1>Ověřte svůj email</h1> </br>
                    <p>Vítejte na Roomie, děkujeme za registraci. Prosím ověřte svůj e-mail kliknutím na odkaz níže.Pokud jste účet nevytvořili vy, můžete tento email ignorovat.
                    https://roomie-5241.rostiapp.cz/auth/user/token/${snap.id}</p>
                `,
        },
    })
})