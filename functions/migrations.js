const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.createMigration = functions.https.onCall((data, context) => {
  data = JSON.parse(data);
  const db = admin.firestore();
  const email = context.auth.token.email;
  if (email != "roomieback@gmail.com") {
    return null;
  }
  const method = data.method;
  const col = db.collection(data.collection);
  const fieldName = data.fieldName;
  const fieldValue = data.fieldValue;
  return col.get().then((allDocs) => {
    return Promise.all(
      allDocs.docs.map((oneDoc) => {
        return col.doc(oneDoc.id).update({
          [fieldName]:
            method === "add" ? fieldValue : admin.firestore.FieldValue.delete(),
        });
      })
    );
  });
});

exports.pragueMigration = functions.https.onRequest((req, res) => {
  const db = admin.firestore();
  db.collection("listings")
    .get()
    .then((allListings) => {
      return Promise.all(
        allListings.docs.map((listing) => {
          let location;
          if (listing.data().type === "flatmate") {
            location = listing.data().flatTags.location;
          } else {
            location = listing.data().flatBoxes.location;
          }
          const isPrague = location.includes("Praha");
          return db.collection("listings").doc(listing.id).update({
            "queryInfo.prague": isPrague,
          });
        })
      );
    })
    .then((response) => {
      res.status(200).send("Success");
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
