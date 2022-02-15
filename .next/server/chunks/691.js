"use strict";
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 5691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useRegister),
/* harmony export */   "l": () => (/* binding */ RegisterProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const RegisterContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useRegister = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RegisterContext);
};
function RegisterProvider(props) {
    const usernameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const phoneRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const phoneCodeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const passwordCheckRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const monthRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const dayRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const yearRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const termsAgreementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const emailMarketingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const value = {
        usernameState: {
            username,
            setUsername
        },
        emailRef,
        phoneRef,
        phoneCodeRef,
        passwordRef,
        passwordCheckRef,
        dayRef,
        monthRef,
        yearRef,
        termsAgreementRef,
        emailMarketingRef
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RegisterContext.Provider, {
        value: value,
        children: props.children
    }));
}


/***/ })

};
;