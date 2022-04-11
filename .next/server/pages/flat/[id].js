"use strict";
(() => {
var exports = {};
exports.id = 39;
exports.ids = [39];
exports.modules = {

/***/ 6686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Listing_Listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1720);
/* harmony import */ var _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2882);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5451);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _components_Listing_Listing__WEBPACK_IMPORTED_MODULE_2__, _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_3__]);
([_Firebase__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _components_Listing_Listing__WEBPACK_IMPORTED_MODULE_2__, _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//COmponents

//Context

//Firebase


const FlatListing = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_3__/* .ListingProvider */ .a, {
        cr: false,
        type: "flat",
        ssrProps: {
            ...props
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Listing_Listing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatListing);
async function getServerSideProps(context) {
    const { id  } = context.params;
    try {
        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_Firebase__WEBPACK_IMPORTED_MODULE_4__.db, "listings", id));
        const listingLayout = docRef.data().flatBoxes.layout;
        const listingLocation = docRef.data().flatBoxes.location;
        //Name
        const listingName = `${listingLayout ? listingLayout : ""}${listingLayout ? " " : ""}${listingLocation}`;
        //Basic user info
        const listingUsername = docRef.data().userInfo.username;
        const listingAge = docRef.data().userInfo.age;
        const listingGender = docRef.data().userInfo.gender;
        let listingPfp = null;
        if (docRef.data().userInfo.images.pfp) listingPfp = docRef.data().userInfo.images.pfp;
        let listingImgs = [];
        if (docRef.data().userInfo.images.listingImgs) listingImgs = docRef.data().userInfo.images.listingImgs;
        //Bio(s)
        const listingPersonBio = docRef.data().personBio;
        const listingFlatBio = docRef.data().flatBio;
        //Boxes
        const listingPersonBoxes = JSON.stringify(docRef.data().personBoxes);
        const listingFlatBoxes = JSON.stringify(docRef.data().flatBoxes);
        //Tags
        const listingPersonTags = JSON.stringify(docRef.data().personTags);
        //Listing info
        const listingPremium = docRef.data().userInfo.premium;
        let listingFans = [];
        if (docRef.data().likedBy) {
            listingFans = docRef.data().likedBy;
        }
        const listingFriends = docRef.data().friends;
        const uid = docRef.data().userInfo.uid;
        const listingInfo = JSON.stringify(docRef.data());
        if (!docRef.data().visible || !docRef.data().userInfo.emailVerified || docRef.data().hiddenByUser) {
            throw {
                message: "client-side"
            };
        }
        const status = "success";
        return {
            props: {
                listingName,
                listingUsername,
                listingAge,
                listingGender,
                listingPfp,
                listingImgs,
                listingPersonBio,
                listingFlatBio,
                listingPersonBoxes,
                listingPersonTags,
                listingFlatBoxes,
                listingPremium,
                listingFans,
                listingFriends,
                uid,
                listingInfo,
                status
            }
        };
    } catch (error) {
        const listingName = null;
        const listingUsername = null;
        const listingAge = null;
        const listingGender = null;
        const listingPfp = null;
        const listingImgs = [];
        const listingPersonBio = null;
        const listingFlatBio = null;
        const listingPersonBoxes = null;
        const listingPersonTags = null;
        const listingFlatBoxes = null;
        const listingPremium = null;
        const listingFans = null;
        const listingFriends = null;
        const listingInfo = null;
        const uid = null;
        const status = error.message;
        return {
            props: {
                listingName,
                listingUsername,
                listingAge,
                listingGender,
                listingPfp,
                listingImgs,
                listingPersonBio,
                listingFlatBio,
                listingPersonBoxes,
                listingPersonTags,
                listingFlatBoxes,
                listingPremium,
                listingFans,
                listingFriends,
                uid,
                listingInfo,
                status
            }
        };
    }
}

});

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 5074:
/***/ ((module) => {

module.exports = require("@mui/material/Backdrop");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 61:
/***/ ((module) => {

module.exports = import("@firebase/auth");;

/***/ }),

/***/ 1401:
/***/ ((module) => {

module.exports = import("@firebase/firestore");;

/***/ }),

/***/ 1546:
/***/ ((module) => {

module.exports = import("@firebase/functions");;

/***/ }),

/***/ 9500:
/***/ ((module) => {

module.exports = import("firebase/analytics");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 8937:
/***/ ((module) => {

module.exports = import("firebase/functions");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,614,18,300,457,824,900,29,523,378,720], () => (__webpack_exec__(6686)));
module.exports = __webpack_exports__;

})();