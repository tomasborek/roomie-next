const functions = require("firebase-functions");
const admin = require("firebase-admin");
// One time functions

exports.addQueryInfo = functions.https.onCall((data, context) => {
    const db = admin.firestore();
    return new Promise((resolve, reject) => {
      db.collection("listings").get().then((docs) => {
        return Promise.all(
            docs.docs.map((listing) => {
              const age = listing.data().userInfo.age;
              const ageQuery = {
                firstRange: age <= 25,
                secondRange: age > 25 && age < 35,
                thirdRange: age >= 35,
              };
              return db.collection("listings").doc(listing.id)
                  .update({"queryInfo.age": ageQuery});
            })
        );
      }).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  });

