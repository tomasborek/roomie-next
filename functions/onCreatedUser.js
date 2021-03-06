const functions = require("firebase-functions");
const admin = require("firebase-admin");
// Every function that happens on created user, either called or triggered by auth

// Callable

// Create users databse after he logs in
exports.createUser = functions.https.onCall((data, context) => {
  const birthday = new Date(data.birthday);
  const userInfo = {
    mainInfo: {
      username: data.username,
      age: data.age,
      gender: data.gender,
      birthday: admin.firestore.Timestamp.fromDate(birthday),
      location: data.location,
      type: data.type,
      pfp: "",
      premium: false,
    },
    emailVerified: false,
    hiddenListing: false,
    sendEmails: data.sendEmails,
    contact: {
      email: data.email,
      phone: data.phone,
      hidden: "",
      socials: {
        ig: "",
        fb: "",
        tt: "",
      },
    },
    listing: {
      id: data.listingId,
    },
  };
  return admin.firestore().collection("users").doc(data.uid).set(userInfo);
});

// Create listing database record
exports.createListing = functions.https.onCall((data, context) => {
  let listingInfo;
  if (data.type == "flatmate") {
    listingInfo = {
      userInfo: {
        username: data.username,
        gender: data.gender,
        age: data.age,
        uid: data.uid,
        emailVerified: false,
        images: {
          pfp: "",
          listingImgs: [],
        },
        premium: false,
      },
      mainInfo: {
        budget: data.money,
        startTime: "",
        stayTime: "",
      },
      personTags: {},
      flatTags: {
        location: data.location,
      },
      personBoxes: {},
      queryInfo: {
        gender: {
          male: data.gender === "male",
          female: data.gender === "female",
          other: data.gender === "other",
        },
        age: {
          firstRange: data.age <= 25,
          secondRange: data.age > 25 && data.age < 35,
          thirdRange: data.age >= 35,
        },
        prague: data.location.includes("Praha"),
      },
      bio: "",
      type: "flatmate",
      friends: [],
      requests: [],
      sentRequests: [],
      likedBy: [],
      visible: false,
      hiddenByUser: false,
      timeStamp: admin.firestore.FieldValue.serverTimestamp(),
    };
  } else if (data.type == "offerer") {
    listingInfo = {
      userInfo: {
        username: data.username,
        gender: data.gender,
        age: data.age,
        contact: data.contact,
        uid: data.uid,
        emailVerified: false,
        images: {
          pfp: "",
          listingImgs: [],
        },
        premium: false,
      },
      mainInfo: {
        price: data.money,
        startTime: "",
        stayTime: "",
      },
      personTags: {},
      flatBoxes: {
        location: data.location,
      },
      personBoxes: {},
      queryInfo: {
        gender: {
          male: data.gender === "male",
          female: data.gender === "female",
          other: data.gender === "other",
        },
        age: {
          firstRange: data.age <= 25,
          secondRange: data.age > 25 && data.age < 35,
          thirdRange: data.age >= 35,
        },
        prague: data.location.includes("Praha"),
      },
      flatBio: "",
      personBio: "",
      type: "flat",
      friends: [],
      requests: [],
      sentRequests: [],
      likedBy: [],
      visible: false,
      hiddenByUser: false,
      timeStamp: admin.firestore.FieldValue.serverTimestamp(),
    };
  }
  const doc = admin.firestore().collection("listings").doc(data.listingId);
  return doc.set(listingInfo).then((response) => {
    const contact = data.contact;
    contact.hidden = "";
    return doc.collection("contact").add(contact);
  });
});

exports.generateToken = functions.auth.user().onCreate((user) => {
  const db = admin.firestore();
  const token = Math.random().toString(20).substring(2, 20);
  return db.collection("tokens").doc(token).set({
    uid: user.uid,
    state: "unverified",
    email: user.email,
  });
});
