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

exports.emailVerifiedField = functions.https.onRequest((req, res) => {
  const db = admin.firestore();
  db.collection("listings").get().then((docs) => {
    return Promise.all(
      docs.docs.map(listing => {
        return db.collection("listings").doc(listing.id).update({
          "userInfo.emailVerified": true,
        });
      })
    )
  }).then((response) => {
    return db.collection("users").get();
  }).then((docs) => {
    return Promise.all(
      docs.docs.map((user) => {
        return db.collection("users").doc(user.id).update({
          emailVerified: true,
        });
      })
    )
  }).then((response) => {
    res.status(200).send("We've been succesful");
  }).catch((error) => {
    res.status(500).send(error);
  })
})

exports.dateIntoTimeStamp = functions.https.onRequest((req, res) => {
  const db = admin.firestore();
  db.collection("users").get().then((docs) => {
    return Promise.all(
      docs.docs.map((user) => {
        const birthdayString = user.data().mainInfo.birthday;
        const birthday = new Date(birthdayString);
        const bDayTimeStamp = admin.firestore.Timestamp.fromDate(birthday);
        return db.collection("users").doc(user.id).update({
          "mainInfo.birthday": bDayTimeStamp,
        });
      })
    );
  }).then((response) => {
    res.status(200).send("We've been succesful");
  }).catch((error) => {
    res.status(500).send(error);
  })
})


exports.resetFriends = functions.https.onRequest((req, res) => {
  const db = admin.firestore();
  db.collection("listings").get().then((docs) => {
    return Promise.all(
      docs.docs.map((listing) => {
        return db.collection("listings").doc(listing.id).update({
          friends: [],
        })
      })
    )
  }).then((response) => {
    res.status(200).send("Success");
  }).catch((error) => {
    res.status(500).send(error);
  })
})

exports.addPremiumField = functions.https.onRequest((req, res) => {
  const db = admin.firestore();
  return db.collection("users").get().then((docs) => {
    return Promise.all(
      docs.docs.map((user) => {
        return db.collection("users").doc(user.id).update({
          "mainInfo.premium": false,
        })
      })
    );
  }).then((response) => {
    return db.collection("listings").get();
  }).then((docs) => {
    return Promise.all(
      docs.docs.map((listing) => {
        return db.collection("listings").doc(listing.id).update({
          "userInfo.premium": false,
        })
      })
    );
  }).then((response) => {
    res.status(200).send("Success");
  }).catch((error) => {
    res.status(500).send(error.message);
  })
})

exports.addHideField = functions.https.onRequest((req, res) => {
  const db = admin.firestore();
  return db.collection("users").get().then((docs) => {
    return Promise.all(
      docs.docs.map((user) => {
        return db.collection("users").doc(user.id).update({
          hiddenListing: false,
        })
      })
    );
  }).then((response) => {
    return db.collection("listings").get();
  }).then((docs) => {
    return Promise.all(
      docs.docs.map((listing) => {
        return db.collection("listings").doc(listing.id).update({
          hiddenByUser: false,
        })
      })
    );
  }).then((response) => {
    res.status(200).send("Success");
  }).catch((error) => {
    res.status(500).send(error.message);
  })
})