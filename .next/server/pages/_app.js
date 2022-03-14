"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8418);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1018);
/* harmony import */ var _contexts_DbContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6934);
/* harmony import */ var _contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5182);
/* harmony import */ var _contexts_NavOverlayContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7595);
/* harmony import */ var _contexts_RegisterContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5691);
/* harmony import */ var _contexts_NotificationsContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4823);
/* harmony import */ var _contexts_SnackBarContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7503);
/* harmony import */ var _contexts_ExploreDialogContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2690);
/* harmony import */ var _NavOverlay_NavOverlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1245);
/* harmony import */ var _LoadingOverlay_LoadingOverlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9905);
/* harmony import */ var _CustomDialog_CustomDialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9029);
/* harmony import */ var _UnderConstruction_UnderConstruction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7688);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LoadingOverlay_LoadingOverlay__WEBPACK_IMPORTED_MODULE_13__, _NavOverlay_NavOverlay__WEBPACK_IMPORTED_MODULE_12__, _contexts_NotificationsContext__WEBPACK_IMPORTED_MODULE_9__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_5__]);
([_LoadingOverlay_LoadingOverlay__WEBPACK_IMPORTED_MODULE_13__, _NavOverlay_NavOverlay__WEBPACK_IMPORTED_MODULE_12__, _contexts_NotificationsContext__WEBPACK_IMPORTED_MODULE_9__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//Next


//Contexts






//use Contexts




//Components




//MUI


const Layout = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { currentUser  } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();
    const { 0: underCon , 1: setUnderCon  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { isSnackBarOpen , snackBarSeverity , snackBarMsg  } = (0,_contexts_SnackBarContext__WEBPACK_IMPORTED_MODULE_10__/* .useSnackBar */ .i)();
    const [loading, setLoading] = (0,_contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_6__/* .useLoading */ .r)();
    const [exploreDialog, setExploreDialog] = (0,_contexts_ExploreDialogContext__WEBPACK_IMPORTED_MODULE_11__/* .useExploreDialog */ .t)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentUser || router.asPath === "/login/") {
            setUnderCon(false);
        }
    }, [
        currentUser
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !underCon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_6__/* .LoadingProvider */ .P, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_NotificationsContext__WEBPACK_IMPORTED_MODULE_9__/* .NotificationsProvider */ .N, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_NavOverlayContext__WEBPACK_IMPORTED_MODULE_7__/* .NavOverlayProvider */ .F, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_contexts_RegisterContext__WEBPACK_IMPORTED_MODULE_8__/* .RegisterProvider */ .l, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavOverlay_NavOverlay__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoadingOverlay_LoadingOverlay__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_16__.Snackbar, {
                                open: isSnackBarOpen,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_16__.Alert, {
                                    sx: {
                                        width: "100%"
                                    },
                                    severity: snackBarSeverity ? snackBarSeverity : "error",
                                    children: snackBarMsg
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_CustomDialog_CustomDialog__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                image: "/img/dialogs/welcome-dialog.png",
                                heading: "Co v\xe1m roomie může nab\xeddnout?",
                                open: exploreDialog,
                                setOpen: setExploreDialog,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "dialog-body",
                                        children: [
                                            "Zde si můžete prohl\xe9dnout existuj\xedc\xed inzer\xe1ty, pokud však chcete uživatele kontaktovat a založit si vlastn\xed inzer\xe1t, je nutn\xe9 se ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_dist_client_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                href: "/register",
                                                children: "zaregistrovat"
                                            }),
                                            " nebo",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_dist_client_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                href: "/login",
                                                children: "přihl\xe1sit."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "dialog-action",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>setExploreDialog(false)
                                                ,
                                                className: "main-btn",
                                                children: "Jen se d\xedv\xe1m"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>{
                                                    setExploreDialog(false);
                                                    router.push("/register");
                                                },
                                                className: "acc-btn",
                                                children: "Registrovat"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            children
                        ]
                    })
                })
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UnderConstruction_UnderConstruction__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

});

/***/ }),

/***/ 9905:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5182);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5074);
/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


//Framer motion

//Contexts

//Components
//MUI components


const LoadingOverlay = ()=>{
    const [loading, setLoading] = (0,_contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_3__/* .useLoading */ .r)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_4___default()), {
        sx: {
            color: '#fff',
            zIndex: (theme)=>theme.zIndex.drawer + 1
        },
        open: loading,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_5___default()), {
            color: "inherit"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingOverlay);

});

/***/ }),

/***/ 1245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(387);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1018);
/* harmony import */ var _contexts_DbContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6934);
/* harmony import */ var _contexts_NavOverlayContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7595);
/* harmony import */ var _contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5182);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_6__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_6__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//Next


//Framer motion

//Contexts




const NavOverlay = ()=>{
    //Variable
    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { currentUser , currentUserInfo , logOut  } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();
    const [navOverlay, setNavOverlay] = (0,_contexts_NavOverlayContext__WEBPACK_IMPORTED_MODULE_7__/* .useNavOverlay */ .A)();
    const { getUser  } = (0,_contexts_DbContext__WEBPACK_IMPORTED_MODULE_6__/* .useDb */ .s)();
    const [loading, setLoading] = (0,_contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_8__/* .useLoading */ .r)();
    //Functions
    const handleMyListing = ()=>{
        router.push(`/${currentUserInfo.mainInfo.type === "offerer" ? "flat" : currentUserInfo.mainInfo.type === "flatmate" ? "flatmate" : ""}/${currentUserInfo.listing.id}`);
    };
    const handleLogOut = ()=>{
        setLoading(true);
        setNavOverlay(false);
        logOut().then((res)=>{
            router.push("/");
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
            setLoading(false);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (navOverlay) {
            window.scrollTo(0, 0);
            document.body.classList.add("lock-scroll");
        } else {
            document.body.classList.remove("lock-scroll");
        }
    }, [
        navOverlay
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        animate: navOverlay ? {
            y: 0,
            opacity: 1,
            display: "flex",
            pointerEvents: "all"
        } : "",
        initial: {
            y: "-100px",
            opacity: 0,
            display: "none",
            pointerEvents: "none"
        },
        transition: {
            duration: 0.5
        },
        className: "nav-overlay",
        children: !currentUser ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "overlay-nav",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    onClick: ()=>{
                        router.push("/login");
                        setNavOverlay(false);
                    },
                    children: "Přihl\xe1sit se"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    onClick: ()=>{
                        router.push("/register");
                        setNavOverlay(false);
                    },
                    children: "Registrovat"
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "overlay-nav-logged",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    onClick: ()=>{
                        handleMyListing();
                        setNavOverlay(false);
                    },
                    className: "nav-logged-item",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "item-icon fas fa-home"
                        }),
                        "Můj inzer\xe1t"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    onClick: ()=>{
                        setNavOverlay(false);
                        router.push("/friends");
                    },
                    className: "nav-logged-item",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-users item-icon"
                        }),
                        " Př\xe1tel\xe9"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    onClick: ()=>{
                        setNavOverlay(false);
                        router.push("/requests/recieved");
                    },
                    className: "nav-logged-item",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-envelope item-icon"
                        }),
                        " Ž\xe1dosti"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    onClick: ()=>{
                        setNavOverlay(false);
                        router.push("/liked");
                    },
                    className: "nav-logged-item",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-heart"
                        }),
                        " Obl\xedben\xe9"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "nav-logged-item",
                    onClick: ()=>{
                        router.push("/edit-profile");
                        setNavOverlay(false);
                    },
                    children: [
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "item-icon fas fa-pen"
                        }),
                        " \xdačet a soukrom\xed"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    onClick: ()=>{
                        handleLogOut();
                    },
                    className: "nav-logged-item",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "item-icon fas fa-sign-out-alt"
                        }),
                        "Odhl\xe1sit"
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavOverlay);

});

/***/ }),

/***/ 7688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


//next

const UnderConstruction = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Roomie - port\xe1l pro hled\xe1n\xed spolubydlen\xed"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "under-construction",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Roomie"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Nejlepš\xed port\xe1l pro spolubydlen\xed"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Již brzy"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/img/bad-results/under-con.png",
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "wip-socials",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>window.location.href = "https://instagram.com/roomiecz"
                                ,
                                className: "socials-social",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fab fa-instagram"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>window.location.href = "https://www.facebook.com/roomiecz/"
                                ,
                                className: "socials-social",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fab fa-facebook"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>window.location.href = "https://www.linkedin.com/company/roomie-cz/about/"
                                ,
                                className: "socials-social",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fab fa-linkedin"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnderConstruction);


/***/ }),

/***/ 2690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useExploreDialog),
/* harmony export */   "I": () => (/* binding */ ExploreDialogProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ExploreDialogContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useExploreDialog = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ExploreDialogContext);
};
const ExploreDialogProvider = ({ children  })=>{
    const { 0: exploreDialog , 1: setExploreDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExploreDialogContext.Provider, {
        value: [
            exploreDialog,
            setExploreDialog
        ],
        children: children
    }));
};


/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9486);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_cookiebot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(675);
/* harmony import */ var react_cookiebot__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_cookiebot__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5451);
/* harmony import */ var _contexts_SnackBarContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7503);
/* harmony import */ var _contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5182);
/* harmony import */ var _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1614);
/* harmony import */ var _contexts_StorageContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(742);
/* harmony import */ var _contexts_ExploreDialogContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2690);
/* harmony import */ var _contexts_ExploreContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6155);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1018);
/* harmony import */ var _contexts_DbContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6934);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _contexts_StorageContext__WEBPACK_IMPORTED_MODULE_12__, _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_11__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_15__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_16__, _Firebase__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__, _contexts_StorageContext__WEBPACK_IMPORTED_MODULE_12__, _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_11__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_15__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_16__, _Firebase__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//Layouts

//next


//Nprogress

// import "nprogress/nprogress.css";



//Componentns
//Context








//Styles

nprogress__WEBPACK_IMPORTED_MODULE_5___default().configure({
    minimum: 0.3,
    easing: "ease",
    speed: 800,
    showSpinner: false
});
next_router__WEBPACK_IMPORTED_MODULE_6___default().events.on("routeChangeStart", ()=>nprogress__WEBPACK_IMPORTED_MODULE_5___default().start()
);
next_router__WEBPACK_IMPORTED_MODULE_6___default().events.on("routeChangeComplete", ()=>nprogress__WEBPACK_IMPORTED_MODULE_5___default().done()
);
next_router__WEBPACK_IMPORTED_MODULE_6___default().events.on("routeChangeError", ()=>nprogress__WEBPACK_IMPORTED_MODULE_5___default().done()
);
function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (true) {
            (0,_Firebase__WEBPACK_IMPORTED_MODULE_8__/* .analytics */ .co)();
        }
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "google-site-verification",
                        content: "3KNnGjbrFKY2McWJDSNTsaSfH5hTx6wJfTjhxCWs8og"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css",
                        integrity: "sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==",
                        crossOrigin: "anonymous",
                        referrerPolicy: "no-referrer"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        href: "/img/logos/logo-small.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:site_name",
                        content: "Roomie"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: "/img/poster/poster-mobile.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:image",
                        content: "/img/poster/poster-mobile.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Port\xe1l Roomie se zaměřuje na zprostředkov\xe1n\xed modern\xed platformy pro hled\xe1n\xed spolubydl\xedc\xedch či bytů ke spolubydlen\xed. Hledejte spolubydlen\xed a spolubydl\xedc\xed jednoduše a podle vašich představ. Jsme soci\xe1ln\xed s\xedt\xed pro spolubydlen\xed."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: "https://roomie.cz/"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: "Port\xe1l Roomie se zaměřuje na zprostředkov\xe1n\xed modern\xed platformy pro hled\xe1n\xed spolubydl\xedc\xedch či bytů ke spolubydlen\xed. Hledejte spolubydlen\xed a spolubydl\xedc\xed jednoduše a podle vašich představ. Jsme soci\xe1ln\xed s\xedt\xed pro spolubydlen\xed."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: "https://roomie.cz/img/poster/poster-mobile.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:url",
                        content: "https://roomie.cz/"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:description",
                        content: "Port\xe1l Roomie se zaměřuje na zprostředkov\xe1n\xed modern\xed platformy pro hled\xe1n\xed spolubydl\xedc\xedch či bytů ke spolubydlen\xed. Hledejte spolubydlen\xed a spolubydl\xedc\xed jednoduše a podle vašich představ. Jsme soci\xe1ln\xed s\xedt\xed pro spolubydlen\xed."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "twitter:image",
                        content: "https://roomie.cz/img/poster/poster-mobile.png"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                id: "Cookiebot",
                src: "https://consent.cookiebot.com/uc.js",
                "data-cbid": "3d818e39-653d-4a0d-b674-7e1099e97f24",
                "data-blockingmode": "auto",
                type: "text/javascript"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_DbContext__WEBPACK_IMPORTED_MODULE_16__/* .DbProvider */ .W, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_15__/* .AuthProvider */ .H, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_10__/* .LoadingProvider */ .P, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_SnackBarContext__WEBPACK_IMPORTED_MODULE_9__/* .SnackBarProvider */ .J, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_StorageContext__WEBPACK_IMPORTED_MODULE_12__/* .StorageProvider */ .X, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_ExploreDialogContext__WEBPACK_IMPORTED_MODULE_13__/* .ExploreDialogProvider */ .I, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_ExploreContext__WEBPACK_IMPORTED_MODULE_14__/* .ExploreProvider */ .Q, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                    ...pageProps
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

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

/***/ 9048:
/***/ ((module) => {

module.exports = require("@mui/material/CircularProgress");

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

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 675:
/***/ ((module) => {

module.exports = require("react-cookiebot");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,451,18,457,475,29,742,155,691], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();