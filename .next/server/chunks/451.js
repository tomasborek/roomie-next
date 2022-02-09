"use strict";
exports.id = 451;
exports.ids = [451];
exports.modules = {

/***/ 5451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "wk": () => (/* binding */ functions),
/* harmony export */   "tO": () => (/* binding */ storage),
/* harmony export */   "co": () => (/* binding */ analytics)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8937);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3392);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9500);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_analytics__WEBPACK_IMPORTED_MODULE_5__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__, firebase_functions__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__]);
([firebase_analytics__WEBPACK_IMPORTED_MODULE_5__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__, firebase_functions__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






//Dev
// const firebaseConfig = {
//   apiKey: "AIzaSyApkkvvAikniIoAl9BixkWqPcdSi97RFKg",
//   authDomain: "roomie-dev-41f4d.firebaseapp.com",
//   projectId: "roomie-dev-41f4d",
//   storageBucket: "roomie-dev-41f4d.appspot.com",
//   messagingSenderId: "1001182466564",
//   appId: "1:1001182466564:web:8807fcd61318670d35db51"
// };
//Prod
const firebaseConfig = {
    apiKey: "AIzaSyDCG8Ji829VHGrhGGImrMk8B0QZoA8uY60",
    authDomain: "roomie-prod-24d36.firebaseapp.com",
    projectId: "roomie-prod-24d36",
    storageBucket: "roomie-prod-24d36.appspot.com",
    messagingSenderId: "901977154768",
    appId: "1:901977154768:web:deafa61833a6055f27ead5",
    measurementId: "G-S8Q9W3DW20"
};
// Initialize Firebase
(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();
const functions = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_3__.getFunctions)();
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)();
const analytics = firebase_analytics__WEBPACK_IMPORTED_MODULE_5__.getAnalytics;

});

/***/ })

};
;