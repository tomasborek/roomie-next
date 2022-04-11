"use strict";
exports.id = 614;
exports.ids = [614];
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
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);
const functions = (0,firebase_functions__WEBPACK_IMPORTED_MODULE_3__.getFunctions)(app);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(app);
const analytics = firebase_analytics__WEBPACK_IMPORTED_MODULE_5__.getAnalytics;

});

/***/ }),

/***/ 1614:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useFunctions),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5451);
/* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1546);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase__WEBPACK_IMPORTED_MODULE_2__, _firebase_functions__WEBPACK_IMPORTED_MODULE_3__]);
([_Firebase__WEBPACK_IMPORTED_MODULE_2__, _firebase_functions__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//Firebase


const FunctionsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useFunctions = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FunctionsContext);
};
const FunctionsProvider = ({ children  })=>{
    const callable = (name)=>{
        return (0,_firebase_functions__WEBPACK_IMPORTED_MODULE_3__.httpsCallable)(_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .functions */ .wk, name);
    };
    const value = {
        callable
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FunctionsContext.Provider, {
        value: value,
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FunctionsProvider);

});

/***/ })

};
;