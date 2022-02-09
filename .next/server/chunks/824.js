"use strict";
exports.id = 824;
exports.ids = [824];
exports.modules = {

/***/ 4:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


//Handle click outside

const Dropdown = ({ open , setOpen , children , ...rootDOMAttributes })=>{
    const { 0: clickOutside , 1: setClickOutside  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dropDownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (open) {
            setTimeout(()=>{
                document.addEventListener("click", handleClick);
            }, 300);
        } else if (!open) {
            document.removeEventListener("click", handleClick);
        }
        return ()=>document.removeEventListener("click", handleClick)
        ;
    }, [
        open
    ]);
    //Functions
    const handleClick = (e)=>{
        if (dropDownRef.current != e.target) {
            setOpen(false);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            ref: dropDownRef,
            ...rootDOMAttributes,
            animate: open ? {
                height: "auto",
                opacity: 1
            } : "",
            initial: {
                opacity: 0,
                height: 0
            },
            tranisition: {
                duration: 0.4
            },
            className: "dropdown",
            children: children
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

});

/***/ }),

/***/ 2824:
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
/* harmony import */ var _contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5182);
/* harmony import */ var _contexts_NavOverlayContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7595);
/* harmony import */ var _contexts_NotificationsContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4823);
/* harmony import */ var _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_10__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _contexts_NotificationsContext__WEBPACK_IMPORTED_MODULE_9__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_6__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__]);
([_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_10__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _contexts_NotificationsContext__WEBPACK_IMPORTED_MODULE_9__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_6__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//next


//Framer

//Contexts





//Components

//MUI

const Header = ({ variant  })=>{
    //Variables
    //Contexts
    const { currentUser , currentUserInfo , logOut , userLoaded  } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();
    const { getUser , getRequests , getNotifications  } = (0,_contexts_DbContext__WEBPACK_IMPORTED_MODULE_6__/* .useDb */ .s)();
    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [loading, setLoading] = (0,_contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_7__/* .useLoading */ .r)();
    const [navOverlay, setNavOverlay] = (0,_contexts_NavOverlayContext__WEBPACK_IMPORTED_MODULE_8__/* .useNavOverlay */ .A)();
    //State
    const { 0: isDropdownActive , 1: setIsDropdownActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: notificationDropdown , 1: setNotificationDropdown  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [notifications, setNotifications] = (0,_contexts_NotificationsContext__WEBPACK_IMPORTED_MODULE_9__/* .useNotifications */ .z)();
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
            setLoading(false);
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: `main-header ${variant}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "brand",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "brand-logo",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: variant === "gradient" ? "/img/logos/logo-white-small.png" : "/img/logos/logo-small.png",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        onClick: ()=>{
                            setNavOverlay(false);
                            currentUser ? router.push(`/explore/flatmates`) : router.push("/");
                        },
                        children: "Roomie"
                    })
                ]
            }),
            userLoaded ? currentUser ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "navbar navbar-logged",
                children: [
                    notifications && notifications.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Badge, {
                        badgeContent: notifications.length == 9 ? "9+" : notifications.length,
                        color: "secondary",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            onClick: ()=>{
                                setNotificationDropdown((prevState)=>!prevState
                                );
                                setNavOverlay(false);
                            },
                            className: `fa${notificationDropdown ? "s" : "r"} fa-bell navbar-notifications`
                        })
                    }) : (!notifications || !notifications.length) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        onClick: ()=>{
                            setNotificationDropdown((prevState)=>!prevState
                            );
                            setNavOverlay(false);
                        },
                        className: `fa${notificationDropdown ? "s" : "r"} fa-bell navbar-notifications`
                    }),
                    currentUserInfo && currentUserInfo.mainInfo.pfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        onClick: handleMyListing,
                        className: "navbar-profile",
                        src: currentUserInfo.mainInfo.pfp,
                        alt: ""
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: handleMyListing,
                        className: "navbar-profile"
                    }),
                    currentUserInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        onClick: handleMyListing,
                        className: "navbar-name",
                        children: currentUserInfo.mainInfo.username
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.i, {
                        onClick: ()=>setIsDropdownActive((prevState)=>!prevState
                            )
                        ,
                        animate: isDropdownActive ? {
                            rotate: -180
                        } : "",
                        initial: {
                            rotate: 0
                        },
                        transition: {
                            duration: 0.4
                        },
                        tabIndex: 0,
                        className: "fas fa-chevron-down navbar-dropdown-icon"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        className: "main-header-dropdown",
                        open: isDropdownActive,
                        setOpen: setIsDropdownActive,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "dropdown-list",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    onClick: ()=>router.push("/edit-profile")
                                    ,
                                    className: "list-item",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-pen item-icon"
                                        }),
                                        " Upravit \xfačet"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    onClick: handleMyListing,
                                    className: "list-item",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-home item-icon"
                                        }),
                                        " Můj inzer\xe1t"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    onClick: ()=>router.push("/friends")
                                    ,
                                    className: "list-item",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-users item-icon"
                                        }),
                                        " Př\xe1tel\xe9"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    onClick: ()=>router.push("/requests/recieved")
                                    ,
                                    className: "list-item",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-envelope item-icon"
                                        }),
                                        " Ž\xe1dosti"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    onClick: ()=>router.push("/liked")
                                    ,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-heart"
                                        }),
                                        " Obl\xedben\xe9"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    onClick: ()=>handleLogOut()
                                    ,
                                    className: "list-item",
                                    style: {
                                        color: "red"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-sign-out-alt item-icon"
                                        }),
                                        " Odhl\xe1sit"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        open: notificationDropdown,
                        setOpen: setNotificationDropdown,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "notifications-dropdown",
                            children: notifications ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: Object.keys(notifications).length > 0 ? Object.keys(notifications).map((not, id)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        onClick: ()=>notifications[not].type === "recievedRequest" ? router.push("/requests/recieved") : router.push("/friends")
                                        ,
                                        children: [
                                            " ",
                                            notifications[not].message
                                        ]
                                    }, id)
                                ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: "Ž\xe1dn\xe1 ozn\xe1men\xed"
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "dropdown-loading",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.CircularProgress, {})
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "navbar",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "navbar-login",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/login",
                            children: "Přihl\xe1sit se"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "navbar-login",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/register",
                            children: "Registrovat"
                        })
                    })
                ]
            }) : "",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                onClick: ()=>setNavOverlay(!navOverlay)
                ,
                className: `fas fa-${navOverlay ? "times" : "bars"} hamburger`
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

});

/***/ })

};
;