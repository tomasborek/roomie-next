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
