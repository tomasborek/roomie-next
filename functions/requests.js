const functions = require("firebase-functions");
const admin = require("firebase-admin");
// Every function related to requests or friends and notifications

// Requests - create and resolve

exports.createRequest = functions.https.onCall((data, context) => {
  data = JSON.parse(data);
  const db = admin.firestore();
  // Two people involved vars
  // Sender is user.data() in user db
  const sender = data.sender;
  const senderUid = data.senderUid;
  const senderUsername = sender.mainInfo.username;
  const senderAge = sender.mainInfo.age;
  const senderGender = sender.mainInfo.gender;
  const senderListingId = sender.listing.id;
  const senderType = sender.mainInfo.type;
  const senderPfp = sender.mainInfo.pfp;
  const senderPremium = sender.mainInfo.premium;
  const message = data.message;
  const senderInfo = {
    username: senderUsername,
    age: senderAge,
    gender: senderGender,
    listingId: senderListingId,
    type: senderType,
    pfp: senderPfp,
    premium: senderPremium,
    message: message,
    timeStamp: admin.firestore.FieldValue.serverTimestamp(),
  };
  // Reciever is userInfo in listing
  const reciever = data.reciever;
  const recieverUid = data.recieverUid;
  const recieverUsername = reciever.username;
  const recieverAge = reciever.age;
  const recieverListingId = data.recieverListingId;
  const recieverPremium = reciever.premium;
  const recieverPfp = reciever.images.pfp;
  const recieverType = data.recieverType;
  const recieverInfo = {
    username: recieverUsername,
    age: recieverAge,
    listingId: recieverListingId,
    premium: recieverPremium,
    type: recieverType,
    pfp: recieverPfp,
    timeStamp: admin.firestore.FieldValue.serverTimestamp(),
  };
  // Doc and collection references
  const users = db.collection("users");
  const listings = db.collection("listings");
  return users
    .doc(recieverUid)
    .collection("recievedRequests")
    .doc(senderUid)
    .set(senderInfo)
    .then((result) => {
      return users
        .doc(senderUid)
        .collection("sentRequests")
        .doc(recieverUid)
        .set(recieverInfo);
    })
    .then((response) => {
      return listings.doc(recieverListingId).update({
        requests: admin.firestore.FieldValue.arrayUnion(senderUid),
      });
    })
    .then((response) => {
      return listings.doc(sender.listing.id).update({
        sentRequests: admin.firestore.FieldValue.arrayUnion(recieverUid),
      });
    });
});

exports.resolveRequest = functions.https.onCall((data, context) => {
  // Parse incoming data
  data = JSON.parse(data);
  // admin sdk reference
  const db = admin.firestore();
  // Variables
  const senderUid = data.senderUid;
  const recieverUid = data.recieverUid;
  const senderListing = data.senderListing;
  const recieverListing = data.recieverListing;
  const recieverColRef = db
    .collection("users")
    .doc(recieverUid)
    .collection("recievedRequests");
  const recieverListingDoc = db.collection("listings").doc(recieverListing);
  const senderColRef = db
    .collection("users")
    .doc(senderUid)
    .collection("sentRequests");
  const senderListingDoc = db.collection("listings").doc(senderListing);

  // Delete recieved request from reciever's subcollection
  return recieverColRef
    .doc(senderUid)
    .delete()
    .then((response) => {
      return senderColRef.doc(recieverUid).delete();
    })
    .then((response) => {
      // Then, remove request from reciever's listing
      return recieverListingDoc.update({
        requests: admin.firestore.FieldValue.arrayRemove(senderUid),
      });
    })
    .then((response) => {
      // Then remove sent request from sender's listing
      return senderListingDoc.update({
        sentRequests: admin.firestore.FieldValue.arrayRemove(recieverUid),
      });
    });
});

// Friends

exports.createFriend = functions.https.onCall((data, context) => {
  // Parse incoming data
  data = JSON.parse(data);
  // Admin sdk shortcut
  const db = admin.firestore();
  // Variables
  // Reciever is user.data()
  const reciever = data.reciever;
  const recieverUid = data.recieverUid;
  const recieverListing = data.recieverListing;
  // Sender is request info
  const sender = data.sender;
  const senderUid = data.senderUid;
  const senderListing = data.senderListing;
  const recieverFriends = db
    .collection("users")
    .doc(recieverUid)
    .collection("friends");
  const recieverListingDoc = db.collection("listings").doc(recieverListing);
  const senderFriends = db
    .collection("users")
    .doc(senderUid)
    .collection("friends");
  const senderListingDoc = db.collection("listings").doc(senderListing);
  // Add friend (sender) to reciever's subcollection
  return recieverFriends
    .doc(senderUid)
    .set({
      username: sender.username,
      age: sender.age,
      type: sender.type,
      gender: sender.gender,
      originalSender: senderUid,
      pfp: sender.pfp,
      premium: sender.premium,
      listingId: senderListing,
      timeStamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then((response) => {
      // Then, add friend (reciever) to sender's subcollection
      return senderFriends.doc(recieverUid).set({
        username: reciever.mainInfo.username,
        age: reciever.mainInfo.age,
        type: reciever.mainInfo.type,
        gender: reciever.mainInfo.gender,
        originalSender: senderUid,
        pfp: reciever.mainInfo.pfp,
        premium: reciever.mainInfo.premium,
        listingId: recieverListing,
        timeStamp: admin.firestore.FieldValue.serverTimestamp(),
      });
    })
    .then((response) => {
      // Then, add friend (sender) to reciever's listing
      return recieverListingDoc.update({
        friends: admin.firestore.FieldValue.arrayUnion(senderUid),
      });
    })
    .then((response) => {
      // Then, add friend (reciever) to sender's listing
      return senderListingDoc.update({
        friends: admin.firestore.FieldValue.arrayUnion(recieverUid),
      });
    });
});

// Notifications

exports.recievedNotification = functions.firestore
  .document("users/{userUid}/recievedRequests/{senderUid}")
  .onCreate((snap, context) => {
    const db = admin.firestore();
    const colRef = db
      .collection("users")
      .doc(snap.ref.parent.parent.id)
      .collection("notifications");
    return colRef.doc(snap.id).set({
      message: `Uživatel ${snap.data().username} vám zaslal žádost o kontakt`,
      type: "recievedRequest",
      timeStamp: admin.firestore.FieldValue.serverTimestamp(),
    });
  });

exports.acceptedNotification = functions.firestore
  .document("users/{userId}/friends/{friendId}")
  .onCreate((snap, context) => {
    if (snap.ref.parent.parent.id != snap.data().originalSender)
      return Promise.resolve("Not sender");
    const db = admin.firestore();
    return db
      .collection("users")
      .doc(snap.ref.parent.parent.id)
      .collection("notifications")
      .doc(snap.id)
      .set({
        message: `Uživatel ${snap.data().username} přijal vaší žádost.`,
        type: "acceptedRequest",
        timeStamp: admin.firestore.FieldValue.serverTimestamp(),
      });
  });

exports.deleteRecievedNotification = functions.firestore
  .document("users/{userId}/recievedRequests/{senderUid}")
  .onDelete((snap, context) => {
    const db = admin.firestore();
    return db
      .collection("users")
      .doc(snap.ref.parent.parent.id)
      .collection("notifications")
      .doc(snap.id)
      .delete();
  });

exports.deleteRecievedNotifications = functions.https.onCall(
  (data, context) => {
    const db = admin.firestore();
    return db
      .collection("users")
      .doc(data.uid)
      .collection("notifications")
      .where("type", "==", "recievedRequest")
      .get()
      .then((recievedNotifications) => {
        return Promise.all(
          recievedNotifications.docs.map((oneNotification) => {
            return db
              .collection("users")
              .doc(data.uid)
              .collection("notifications")
              .doc(oneNotification.id)
              .delete();
          })
        );
      });
  }
);

exports.deleteAcceptedNotifications = functions.https.onCall(
  (data, context) => {
    data = JSON.parse(data);
    const db = admin.firestore();
    const uid = data.uid;
    return db
      .collection("users")
      .doc(uid)
      .collection("notifications")
      .where("type", "==", "acceptedRequest")
      .get()
      .then((docs) => {
        return Promise.all(
          docs.docs.map((doc) => {
            return db
              .collection("users")
              .doc(uid)
              .collection("notifications")
              .doc(doc.id)
              .delete();
          })
        );
      });
  }
);

//emails

exports.recievedRequestEmail = functions.firestore
  .document("users/{userId}/recievedRequests/{senderUid}")
  .onCreate((snap, context) => {
    const emailTemplate = `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
   
      <head>
        <!--[if gte mso 9]>
   <xml>
     <o:OfficeDocumentSettings>
       <o:AllowPNG/>
       <o:PixelsPerInch>96</o:PixelsPerInch>
     </o:OfficeDocumentSettings>
   </xml>
   <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <title></title>
   
        <style type="text/css">
          table,
          td {
            color: #000000;
          }
   
          a {
            color: #0000ee;
            text-decoration: underline;
          }
   
          @media only screen and (min-width: 620px) {
            .u-row {
              width: 600px !important;
            }
   
            .u-row .u-col {
              vertical-align: top;
            }
   
            .u-row .u-col-100 {
              width: 600px !important;
            }
          }
   
          @media (max-width: 620px) {
            .u-row-container {
              max-width: 100% !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
            }
   
            .u-row .u-col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
            }
   
            .u-row {
              width: calc(100% - 40px) !important;
            }
   
            .u-col {
              width: 100% !important;
            }
   
            .u-col>div {
              margin: 0 auto;
            }
          }
   
          body {
            margin: 0;
            padding: 0;
          }
   
          table,
          tr,
          td {
            vertical-align: top;
            border-collapse: collapse;
          }
   
          p {
            margin: 0;
          }
   
          .ie-container table,
          .mso-container table {
            table-layout: fixed;
          }
   
          * {
            line-height: inherit;
          }
   
          a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
          }
   
        </style>
   
   
   
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">
        <!--<![endif]-->
   
      </head>
   
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
          <tbody>
            <tr style="vertical-align: top">
              <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
   
   
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
   
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                            <!--<![endif]-->
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
   
   
   
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
   
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                            <!--<![endif]-->
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                      <tr>
                                        <td style="padding-right: 0px;padding-left: 0px;" align="center">
   
                                          <img align="center" border="0" src="https://s3.amazonaws.com/unroll-images-production/projects%2F56874%2F1641273255820-logo-small.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 6%;max-width: 33.6px;" width="33.6" />
   
                                        </td>
                                      </tr>
                                    </table>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
   
   
   
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #309eab;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #309eab;"><![endif]-->
   
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                            <!--<![endif]-->
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                      <p style="font-size: 14px; line-height: 140%;"><strong>NĚKDO O VÁS MÁ ZÁJEM</strong></p>
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 31px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 28px; line-height: 39.2px;"><strong><span style="line-height: 39.2px; font-size: 28px;">Přišla vám žádost o kontaktní údaje</span></strong>
                                        </span>
                                      </p>
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
   
   
   
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
   
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                            <!--<![endif]-->
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                      <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 18px; line-height: 28.8px;">Dobr&yacute; den, váš profil pravděpodobně někoho oslovil a odeslal vám žádost o spojení. Podívejte se, o koho se jedná a pokud si padnete do oka, můžete žádost přijmout a začít spolu komunikovat.</span></p>
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div align="center">
                                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:'Cabin',sans-serif;"><tr><td style="font-family:'Cabin',sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://roomie-5241.rostiapp.cz/auth/user/token/" style="height:46px; v-text-anchor:middle; width:198px;" arcsize="8.5%" stroke="f" fillcolor="#e14949"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Cabin',sans-serif;"><![endif]-->
                                      <a href="https://roomie.cz/requests/recieved" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #e14949; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                        <span style="display:block;padding:14px 44px 13px;line-height:120%;"><span style="font-size: 16px; line-height: 19.2px;"><strong><span style="line-height: 19.2px; font-size: 16px;">ZOBRAZIT ŽÁDOST</span></strong>
                                          </span>
                                        </span>
                                      </a>
                                      <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
   
                             
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
   
   
   
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #e5eaf5;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #e5eaf5;"><![endif]-->
   
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                            <!--<![endif]-->
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:41px 55px 18px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div style="color: #003399; line-height: 160%; text-align: center; word-wrap: break-word;">
                                      <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 20px; line-height: 32px;"><strong>Kontaktujte n&aacute;s</strong></span></p>
                                      <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 16px; line-height: 25.6px; color: #000000;">roomiepodpora@roomie.cz</span></p>
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 33px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div align="center">
                                      <div style="display: table; max-width:244px;">
                                        <!--[if (mso)|(IE)]><table width="244" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:244px;"><tr><![endif]-->
   
   
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 17px;" valign="top"><![endif]-->
                                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 17px">
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                <a href="https://www.facebook.com/roomiecz" title="Facebook" target="_blank">
                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
   
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 17px;" valign="top"><![endif]-->
                                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 17px">
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                <a href="https://www.linkedin.com/company/roomie-cz/about/" title="LinkedIn" target="_blank">
                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
   
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 17px;" valign="top"><![endif]-->
                                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 17px">
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                <a href="https://instagram.com/roomiecz" title="Instagram" target="_blank">
                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                      </div>
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
   
   
   
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #309eab;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #309eab;"><![endif]-->
   
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                            <!--<![endif]-->
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div style="color: #fafafa; line-height: 180%; text-align: center; word-wrap: break-word;">
                                      <p style="font-size: 14px; line-height: 180%;"><span style="font-size: 16px; line-height: 28.8px;">&copy; Roomie 2022</span></p>
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
   
   
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
      </body>
   
    </html>
   `;
    const db = admin.firestore();
    const uid = snap.ref.parent.parent.id;
    return db
      .collection("users")
      .doc(uid)
      .get()
      .then((user) => {
        const email = user.data().contact.email;
        return db.collection("newUserMail").add({
          to: email,
          message: {
            subject: "Někdo vám odeslal žádost",
            html: emailTemplate,
          },
        });
      });
  });

exports.acceptedRequestEmail = functions.firestore
  .document("users/{userId}/friends/{friendUid}")
  .onCreate((snap, context) => {
    if (snap.ref.parent.parent.id != snap.data().originalSender) {
      return Promise.resolve("Not sender");
    }
    const emailTemplate = `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
   
      <head>
        <!--[if gte mso 9]>
   <xml>
     <o:OfficeDocumentSettings>
       <o:AllowPNG/>
       <o:PixelsPerInch>96</o:PixelsPerInch>
     </o:OfficeDocumentSettings>
   </xml>
   <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <title></title>
   
        <style type="text/css">
          table,
          td {
            color: #000000;
          }
   
          a {
            color: #0000ee;
            text-decoration: underline;
          }
   
          @media only screen and (min-width: 620px) {
            .u-row {
              width: 600px !important;
            }
   
            .u-row .u-col {
              vertical-align: top;
            }
   
            .u-row .u-col-100 {
              width: 600px !important;
            }
          }
   
          @media (max-width: 620px) {
            .u-row-container {
              max-width: 100% !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
            }
   
            .u-row .u-col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
            }
   
            .u-row {
              width: calc(100% - 40px) !important;
            }
   
            .u-col {
              width: 100% !important;
            }
   
            .u-col>div {
              margin: 0 auto;
            }
          }
   
          body {
            margin: 0;
            padding: 0;
          }
   
          table,
          tr,
          td {
            vertical-align: top;
            border-collapse: collapse;
          }
   
          p {
            margin: 0;
          }
   
          .ie-container table,
          .mso-container table {
            table-layout: fixed;
          }
   
          * {
            line-height: inherit;
          }
   
          a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
          }
   
        </style>
   
   
   
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">
        <!--<![endif]-->
   
      </head>
   
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
          <tbody>
            <tr style="vertical-align: top">
              <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
   
   
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
   
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                            <!--<![endif]-->
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
   
   
   
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
   
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                            <!--<![endif]-->
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                      <tr>
                                        <td style="padding-right: 0px;padding-left: 0px;" align="center">
   
                                          <img align="center" border="0" src="https://s3.amazonaws.com/unroll-images-production/projects%2F56874%2F1641273255820-logo-small.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 6%;max-width: 33.6px;" width="33.6" />
   
                                        </td>
                                      </tr>
                                    </table>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
   
   
   
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #309eab;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #309eab;"><![endif]-->
   
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                            <!--<![endif]-->
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                      <p style="font-size: 14px; line-height: 140%;"><strong>NĚKDO O VÁS MÁ ZÁJEM</strong></p>
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 31px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 28px; line-height: 39.2px;"><strong><span style="line-height: 39.2px; font-size: 28px;">Vaše žádost o kontaktní údaje byla přijata</span></strong>
                                        </span>
                                      </p>
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
   
   
   
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
   
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                            <!--<![endif]-->
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                      <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 18px; line-height: 28.8px;">Dobr&yacute; den, někdo o koho jste měli zájem přijal vaší žádost. Podívejte se o koho se jedná a kontaktujte ho přes nově odkryté kontaktní údaje.</span></p>
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div align="center">
                                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:'Cabin',sans-serif;"><tr><td style="font-family:'Cabin',sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://roomie-5241.rostiapp.cz/auth/user/token/" style="height:46px; v-text-anchor:middle; width:198px;" arcsize="8.5%" stroke="f" fillcolor="#e14949"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Cabin',sans-serif;"><![endif]-->
                                      <a href="https://roomie.cz/friends" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #e14949; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                        <span style="display:block;padding:14px 44px 13px;line-height:120%;"><span style="font-size: 16px; line-height: 19.2px;"><strong><span style="line-height: 19.2px; font-size: 16px;">ZOBRAZIT KONTAKT</span></strong>
                                          </span>
                                        </span>
                                      </a>
                                      <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
   
                             
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
   
   
   
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #e5eaf5;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #e5eaf5;"><![endif]-->
   
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                            <!--<![endif]-->
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:41px 55px 18px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div style="color: #003399; line-height: 160%; text-align: center; word-wrap: break-word;">
                                      <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 20px; line-height: 32px;"><strong>Kontaktujte n&aacute;s</strong></span></p>
                                      <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 16px; line-height: 25.6px; color: #000000;">roomiepodpora@roomie.cz</span></p>
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 33px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div align="center">
                                      <div style="display: table; max-width:244px;">
                                        <!--[if (mso)|(IE)]><table width="244" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:244px;"><tr><![endif]-->
   
   
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 17px;" valign="top"><![endif]-->
                                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 17px">
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                <a href="https://www.facebook.com/roomiecz" title="Facebook" target="_blank">
                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
   
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 17px;" valign="top"><![endif]-->
                                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 17px">
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                <a href="https://www.linkedin.com/company/roomie-cz/about/" title="LinkedIn" target="_blank">
                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
   
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 17px;" valign="top"><![endif]-->
                                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 17px">
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                <a href="https://instagram.com/roomiecz" title="Instagram" target="_blank">
                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                      </div>
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
   
   
   
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #309eab;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #309eab;"><![endif]-->
   
                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="width: 100% !important;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                            <!--<![endif]-->
   
                            <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody>
                                <tr>
                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;" align="left">
   
                                    <div style="color: #fafafa; line-height: 180%; text-align: center; word-wrap: break-word;">
                                      <p style="font-size: 14px; line-height: 180%;"><span style="font-size: 16px; line-height: 28.8px;">&copy; Roomie 2022</span></p>
                                    </div>
   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
   
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
   
   
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
      </body>
   
    </html>
    `;
    const db = admin.firestore();
    const uid = snap.ref.parent.parent.id;
    return db
      .collection("users")
      .doc(uid)
      .get()
      .then((user) => {
        const email = user.data().contact.email;
        return db.collection("newUserMail").add({
          to: email,
          message: {
            subject: "Někdo přijal vaší žádost",
            html: emailTemplate,
          },
        });
      });
  });
