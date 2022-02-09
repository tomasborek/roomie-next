"use strict";
exports.id = 475;
exports.ids = [475];
exports.modules = {

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

/***/ }),

/***/ 7503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useSnackBar),
/* harmony export */   "J": () => (/* binding */ SnackBarProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SnackBarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useSnackBar = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SnackBarContext);
};
function SnackBarProvider(props) {
    const { 0: isSnackBarOpen , 1: setIsSnackBarOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: snackBarMsg , 1: setSnackBarMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: snackBarSeverity , 1: setSnackBarSeverity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const snackBar = (message, severity)=>{
        setIsSnackBarOpen(true);
        setSnackBarMsg(message);
        setSnackBarSeverity(severity);
        setTimeout(()=>{
            setIsSnackBarOpen(false);
        }, 2000);
    };
    const value = {
        isSnackBarOpen,
        snackBar,
        snackBarMsg,
        snackBarSeverity
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SnackBarContext.Provider, {
        value: value,
        children: props.children
    }));
}


/***/ })

};
;