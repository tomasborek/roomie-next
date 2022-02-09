"use strict";
exports.id = 457;
exports.ids = [457];
exports.modules = {

/***/ 5182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useLoading),
/* harmony export */   "P": () => (/* binding */ LoadingProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LoadingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useLoading = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LoadingContext);
};
function LoadingProvider(props) {
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingContext.Provider, {
        value: [
            loading,
            setLoading
        ],
        children: props.children
    }));
}


/***/ }),

/***/ 7595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useNavOverlay),
/* harmony export */   "F": () => (/* binding */ NavOverlayProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const NavOverlayContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useNavOverlay = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavOverlayContext);
};
function NavOverlayProvider(props) {
    const { 0: navOverlay , 1: setNavOverlay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavOverlayContext.Provider, {
        value: [
            navOverlay,
            setNavOverlay
        ],
        children: props.children
    }));
}


/***/ }),

/***/ 4823:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useNotifications),
/* harmony export */   "N": () => (/* binding */ NotificationsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5451);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1018);
/* harmony import */ var _DbContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6934);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DbContext__WEBPACK_IMPORTED_MODULE_5__, _AuthContext__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _Firebase__WEBPACK_IMPORTED_MODULE_2__]);
([_DbContext__WEBPACK_IMPORTED_MODULE_5__, _AuthContext__WEBPACK_IMPORTED_MODULE_4__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _Firebase__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




//COntexts


const NotificationsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useNotifications = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NotificationsContext);
};
const NotificationsProvider = ({ children  })=>{
    const { currentUser  } = (0,_AuthContext__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();
    const { getNotifications  } = (0,_DbContext__WEBPACK_IMPORTED_MODULE_5__/* .useDb */ .s)();
    const { 0: notifications , 1: setNotifications  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentUser) {
            let newNotifications = [];
            getNotifications(currentUser.uid).then((docs)=>{
                docs.docs.forEach((doc)=>{
                    newNotifications.push(doc.data());
                });
                setNotifications(newNotifications);
            });
        } else {
            setNotifications(null);
        }
    }, [
        currentUser
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotificationsContext.Provider, {
        value: [
            notifications,
            setNotifications
        ],
        children: children
    }));
};

});

/***/ })

};
;