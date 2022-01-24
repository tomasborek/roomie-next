const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();



exports.contactUs = functions.https.onCall((data, context) => {
    data = JSON.parse(data);
    const name = data.name;
    const email = data.email;
    const category = data.category;
    const message = data.message;
    return db.collection("issues").add({
        name,
        email,
        category,
        message
    })
})

exports.reportUser = functions.https.onCall((data, context) => {
    data = JSON.parse(data);
    const uid = data.uid;
    const username = data.username;
    const message = data.message;
    const listingId = data.listingId;
    const senderUid = data.senderUid;
    let senderUsername = "anon";
    if(senderUid){
        senderUsername = data.senderUsername;
    }
    return db.collection("reports").add({
        uid,
        username,
        message,
        listingId,
        senderUid,
        senderUsername,
    })
})