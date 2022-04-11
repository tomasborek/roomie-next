"use strict";
exports.id = 978;
exports.ids = [978];
exports.modules = {

/***/ 476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_SnackBarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7503);
/* harmony import */ var _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1614);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_3__]);
_contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


//COntexts


//Components
//MUI

const ContactForm = ({ open , setOpen  })=>{
    //COntexts
    const { snackBar  } = (0,_contexts_SnackBarContext__WEBPACK_IMPORTED_MODULE_2__/* .useSnackBar */ .i)();
    const { callable  } = (0,_contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_3__/* .useFunctions */ .d)();
    const { 0: category , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    //Refs
    const name = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const email = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const message = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const contactUs = callable("feedback-contactUs");
    const handleContact = ()=>{
        const contactInfo = {
            category,
            name: name.current.value,
            email: email.current.value,
            message: message.current.value
        };
        if (!contactInfo.category) {
            setError("Pros\xedm vyplňte všechny položky");
            return;
        }
        if (!contactInfo.name) {
            setError("Pros\xedm vyplňte všechny položky");
            return;
        }
        if (!contactInfo.email) {
            setError("Pros\xedm vyplňte všechny položky");
            return;
        }
        if (!contactInfo.message) {
            setError("Pros\xedm vyplňte všechny položky");
            return;
        }
        contactUs(JSON.stringify(contactInfo));
        setOpen(false);
        snackBar("Děkujeme za zasl\xe1n\xed zpětn\xe9 vazby.", "success");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (error) {
            snackBar(error, "error");
        }
    }, [
        error
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Backdrop, {
        sx: {
            color: '#fff',
            zIndex: (theme)=>theme.zIndex.drawer + 1
        },
        open: open,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "home-contact-form",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-header",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "void-fill"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            onClick: ()=>setOpen(false)
                            ,
                            className: "fas fa-times"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-content",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "content-heading",
                            children: "Kontaktujte n\xe1s"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content-form",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    ref: name,
                                    maxLength: 30,
                                    placeholder: "Vaše jm\xe9no...",
                                    className: "form-item",
                                    type: "text"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    ref: email,
                                    maxLength: 60,
                                    placeholder: "V\xe1š e-mail...",
                                    className: "form-item",
                                    type: "text"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                                    className: "form-select form-item",
                                    size: "small",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.InputLabel, {
                                            children: "Typ zpr\xe1vy"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Select, {
                                            defaultValue: "",
                                            value: category ? category : "",
                                            onChange: (e)=>setCategory(e.target.value)
                                            ,
                                            label: "Typ zpr\xe1vy",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                    value: "Technick\xfd probl\xe9m",
                                                    children: "Technick\xfd probl\xe9m"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                    value: "St\xedžnost",
                                                    children: "St\xedžnost"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                    value: "Dotaz",
                                                    children: "Dotaz"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    ref: message,
                                    maxLength: 2000,
                                    placeholder: "Obsah zpr\xe1vy...",
                                    className: "form-item form-textarea"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: handleContact,
                                    className: "acc-btn form-button",
                                    children: "Odeslat"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

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