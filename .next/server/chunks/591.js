"use strict";
exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 2417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(387);
/* harmony import */ var _RecievedReqFull_RecievedReqFull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6581);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RecievedReqFull_RecievedReqFull__WEBPACK_IMPORTED_MODULE_3__]);
_RecievedReqFull_RecievedReqFull__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



//Components

//MUI


const RecievedReq = ({ reqInfo , id  })=>{
    const { 0: fullReq , 1: setFullReq  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: reqLoading , 1: setReqLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: reqResolved , 1: setReqResolved  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        state: false,
        type: ""
    });
    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Backdrop, {
                sx: {
                    color: '#fff',
                    zIndex: (theme)=>theme.zIndex.drawer + 1
                },
                open: fullReq,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RecievedReqFull_RecievedReqFull__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    reqInfo: reqInfo,
                    id: id,
                    setOpen: setFullReq,
                    setRequestLoading: setReqLoading,
                    setReqResolved: setReqResolved
                })
            }),
            !reqLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: reqResolved.state ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "rec-req-resolved",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: `fas fa-${reqResolved.type && "check"} ${reqResolved.type === "accepted" ? "accepted" : "rejected"}`
                    })
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>setFullReq(true)
                    ,
                    className: `rec-req ${reqInfo.premium && "premium"}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "req-pfp-container",
                            children: reqInfo.pfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: reqInfo.pfp,
                                className: "container-pfp"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `/img/pfps/${reqInfo.gender === "male" ? "radek" : "radka"}-pfp.png`,
                                className: "container-pfp"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>setFullReq(true)
                            ,
                            className: "req-content",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "content-name",
                                    children: [
                                        reqInfo.username,
                                        ", ",
                                        reqInfo.age,
                                        " ",
                                        reqInfo.premium && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-circle-check"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "content-msg",
                                    children: "V\xe1s ž\xe1d\xe1 o kontaktn\xed \xfadaje."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "req-status",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: `fas fa-hourglass-half`
                            })
                        })
                    ]
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "rec-req-loading",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CircularProgress, {})
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecievedReq);

});

/***/ }),

/***/ 6581:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_DbContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6934);
/* harmony import */ var _contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5182);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1018);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1401);
/* harmony import */ var _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1614);
/* harmony import */ var _contexts_SnackBarContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7503);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_8__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_6__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_4__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_7__]);
([_contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_8__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_6__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_4__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//next


//Context






const RecievedReqFull = ({ reqInfo , id , setOpen , setRequestLoading , setReqResolved ,  })=>{
    //Variables---
    //Contexts
    const { updateUser , getUser , updateListing , addNotification , deleteNotification ,  } = (0,_contexts_DbContext__WEBPACK_IMPORTED_MODULE_4__/* .useDb */ .s)();
    const [loading, setLoading] = (0,_contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_5__/* .useLoading */ .r)();
    const { currentUser  } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_6__/* .useAuth */ .a)();
    const { callable  } = (0,_contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_8__/* .useFunctions */ .d)();
    const { snackBar  } = (0,_contexts_SnackBarContext__WEBPACK_IMPORTED_MODULE_9__/* .useSnackBar */ .i)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    //Functions
    const handleAction = (action)=>{
        let reciever;
        setRequestLoading(true);
        setOpen(false);
        const resolveRequest = callable("requests-resolveRequest");
        getUser(currentUser.uid).then((user)=>{
            setReqResolved({
                state: true,
                type: action
            });
            setRequestLoading(false);
            reciever = user;
            const resolvingInfo = {
                senderUid: id,
                senderListing: reqInfo.listingId,
                recieverUid: currentUser.uid,
                recieverListing: reciever.data().listing.id
            };
            resolveRequest(JSON.stringify(resolvingInfo));
            if (action === "accepted") {
                handleFriendship(reciever);
            }
        });
    };
    const handleFriendship = (user)=>{
        const createFriend = callable("requests-createFriend");
        const friendInfo = {
            reciever: user.data(),
            recieverUid: user.id,
            recieverListing: user.data().listing.id,
            sender: reqInfo,
            senderUid: id,
            senderListing: reqInfo.listingId
        };
        createFriend(JSON.stringify(friendInfo));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `recieved-req-full ${reqInfo.premium && "premium"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                onClick: ()=>setOpen(false)
                ,
                className: "fas fa-times full-close-icon"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "full-pfp-container",
                children: reqInfo.pfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: reqInfo.pfp,
                    className: "container-pfp"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: `img/pfps/${reqInfo.gender === "male" ? "radek-pfp.png" : "radka-pfp.png"}`,
                    className: "container-pfp"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "full-name",
                children: [
                    reqInfo.username,
                    " ",
                    reqInfo.premium && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fas fa-circle-check"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "full-description",
                children: [
                    reqInfo.gender === "male" ? "Muž" : reqInfo.gender === "female" ? "Žena" : reqInfo.gender === "other" ? "Jin\xe9" : "",
                    ", ",
                    reqInfo.age
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "full-message",
                children: reqInfo.message
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "full-actions",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>handleAction("rejected")
                        ,
                        className: "acc-btn",
                        children: "Odm\xedtnout"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>handleAction("accepted")
                        ,
                        className: "main-btn",
                        children: "Přijmout"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: `/${reqInfo.type}/${reqInfo.listingId}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "full-profile-link",
                    children: "Zobrazit inzer\xe1t..."
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecievedReqFull);

});

/***/ }),

/***/ 2591:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1018);
/* harmony import */ var _contexts_DbContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6934);
/* harmony import */ var _RecievedReq_RecievedReq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2417);
/* harmony import */ var _SentReq_SentReq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1547);
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1739);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SentReq_SentReq__WEBPACK_IMPORTED_MODULE_5__, _RecievedReq_RecievedReq__WEBPACK_IMPORTED_MODULE_4__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_3__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);
([_SentReq_SentReq__WEBPACK_IMPORTED_MODULE_5__, _RecievedReq_RecievedReq__WEBPACK_IMPORTED_MODULE_4__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_3__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//next
//Contexts


//Components



//MUI

const ReqFeed = ({ type: type1  })=>{
    const { currentUser  } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    const { getRequests  } = (0,_contexts_DbContext__WEBPACK_IMPORTED_MODULE_3__/* .useDb */ .s)();
    //State
    //Recieved requests
    const { 0: recievedRequests , 1: setRecievedRequests  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    //Recieved requests snapshots (for pagination)
    const { 0: recievedSnaps , 1: setRecievedSnaps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: premiumRecievedSnaps , 1: setPremiumRecievedSnaps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    //Sent requests
    const { 0: sentRequests , 1: setSentRequests  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    //Sent requests snapshots (for pagination)
    const { 0: sentSnaps , 1: setSentSnaps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: premiumSentSnaps , 1: setPremiumSentSnaps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    //Page of pagination
    const { 0: page1 , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    //Pagination loading???
    const { 0: paginationDisabled , 1: setPaginationDisabled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //Getting reqs initial
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentUser && type1 === "recieved") {
            fetchRequests("recievedRequests", currentUser.uid, "first", null, null);
        }
        if (currentUser && type1 === "sent") {
            fetchRequests("sentRequests", currentUser.uid, "first", null, null);
        }
    }, [
        currentUser
    ]);
    //Get reqs on page
    const handlePagination = (page)=>{
        if (type1 === "recieved") {
            if (page === "next") {
                fetchRequests("recievedRequests", currentUser.uid, page, recievedSnaps, premiumRecievedSnaps);
            }
            if (page === "prev") {
                fetchRequests("recievedRequests", currentUser.uid, page, recievedSnaps, premiumRecievedSnaps);
            }
        }
        if (type1 === "sent") {
            if (page === "next") {
                fetchRequests("sentRequests", currentUser.uid, page, sentSnaps, premiumSentSnaps);
            }
            if (page === "prev") {
                fetchRequests("sentRequests", currentUser.uid, page, sentSnaps, premiumSentSnaps);
            }
        }
    };
    const fetchRequests = (type, uid, page, snaps, premiumSnaps)=>{
        if (type === "recievedRequests") {
            let recievedRequestsObject = {};
            if (page === "first") {
                getRequests(type, uid, page, null, null).then((docs)=>{
                    const requests = docs.newPremiumRequests.concat(docs.newRequests);
                    setRecievedSnaps(docs.newRequests);
                    setPremiumRecievedSnaps(docs.newPremiumRequests);
                    //
                    requests.forEach((req)=>{
                        recievedRequestsObject = {
                            ...recievedRequestsObject,
                            [req.id]: req.data()
                        };
                    });
                    setRecievedRequests(recievedRequestsObject);
                });
            }
            if (page === "next") {
                setPaginationDisabled(true);
                getRequests(type, uid, page, snaps, premiumSnaps).then((docs)=>{
                    const requests = docs.newPremiumRequests.concat(docs.newRequests);
                    if (listings.length > 0) {
                        setPage((prevState)=>prevState + 1
                        );
                        setRecievedSnaps(docs.newRequests);
                        setPremiumRecievedSnaps(docs.newPremiumRequests);
                        requests.forEach((req)=>{
                            recievedRequestsObject = {
                                ...recievedRequestsObject,
                                [req.id]: req.data()
                            };
                        });
                        setRecievedRequests(recievedRequestsObject);
                    }
                    setPaginationDisabled(false);
                });
            }
            if (page === "prev") {
                setPaginationDisabled(true);
                getRequests(type, uid, page, snaps, premiumSnaps).then((docs)=>{
                    const requests = docs.newPremiumRequests.concat(docs.newRequests);
                    if (requests.length > 0) {
                        setPage((prevState)=>prevState - 1
                        );
                        setRecievedSnaps(docs.newRequests);
                        setPremiumRecievedSnaps(docs.newPremiumRequests);
                        requests.forEach((req)=>{
                            recievedRequestsObject = {
                                ...recievedRequestsObject,
                                [req.id]: req.data()
                            };
                        });
                        setRecievedRequests(recievedRequestsObject);
                        setPaginationDisabled(false);
                    } else {
                        setPaginationDisabled(false);
                    }
                });
            }
        }
        if (type === "sentRequests") {
            let sentRequestsObject = {};
            if (page === "first") {
                getRequests(type, uid, currentUser.uid, "first", null, null).then((docs)=>{
                    const requests = docs.newPremiumRequests.concat(docs.newRequests);
                    setSentSnaps(docs.newRequests);
                    setPremiumSentSnaps(docs.newPremiumRequests);
                    requests.forEach((req)=>{
                        sentRequestsObject = {
                            ...sentRequestsObject,
                            [req.id]: req.data()
                        };
                    });
                    setSentRequests(sentRequestsObject);
                });
            }
            if (page === "next") {
                setPaginationDisabled(true);
                getRequests(type, uid, page, snaps, premiumSnaps).then((docs)=>{
                    const requests = docs.newPremiumRequests.concat(docs.newRequests);
                    if (requests.length > 0) {
                        setPage((prevState)=>prevState + 1
                        );
                        setSentSnaps(docs.newRequests);
                        setPremiumSentSnaps(docs.newPremiumRequests);
                        requests.forEach((req)=>{
                            sentRequestsObject = {
                                ...sentRequestsObject,
                                [req.id]: req.data()
                            };
                        });
                        setSentRequests(recievedRequestsObject);
                        setPaginationDisabled(false);
                    } else {
                        setPaginationDisabled(false);
                    }
                });
            }
            if (page === "prev") {
                setPaginationDisabled(true);
                getRequests(type, uid, page, snaps, premiumSnaps).then((docs)=>{
                    const requests = docs.newPremiumRequests.concat(docs.newRequests);
                    if (requests.length > 0) {
                        setPage((prevState)=>prevState - 1
                        );
                        setSentSnaps(docs.newRequests);
                        setPremiumSentSnaps(docs.newPremiumRequests);
                        requests.forEach((req)=>{
                            sentRequestsObject = {
                                ...sentRequestsObject,
                                [req.id]: req.data()
                            };
                        });
                        setSentRequests(recievedRequestsObject);
                        setPaginationDisabled(false);
                    } else {
                        setPaginationDisabled(false);
                    }
                });
            }
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            type1 === "recieved" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: recievedRequests ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: Object.keys(recievedRequests).length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "reqs-feed-recieved",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "pending-heading",
                                children: "Nevyřešen\xe9 ž\xe1dosti"
                            }),
                            Object.keys(recievedRequests).map((req, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RecievedReq_RecievedReq__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    reqInfo: recievedRequests[req],
                                    id: req
                                }, id)
                            ),
                            Object.keys(recievedRequests).length > 9 || page1 != 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                setPage: setPage,
                                page: page1,
                                handlePagination: handlePagination,
                                isDisabled: paginationDisabled
                            }) : ""
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "reqs-feed-empty",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/img/bad-results/notfound.png",
                                width: 184,
                                height: 208
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Nebyly nalezen\xe9 ž\xe1dn\xe9 nevyřešen\xe9 ž\xe1dosti."
                            })
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "reqs-feed-loading",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CircularProgress, {})
                })
            }),
            type1 === "sent" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: sentRequests ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: Object.keys(sentRequests).length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "reqs-feed-sent",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "sent-heading",
                                children: "Odeslan\xe9 ž\xe1dosti"
                            }),
                            Object.keys(sentRequests).map((req, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SentReq_SentReq__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    name: sentRequests[req].username,
                                    age: sentRequests[req].age,
                                    pfp: sentRequests[req].pfp,
                                    premium: sentRequests[req].premium,
                                    listingId: sentRequests[req].listingId,
                                    type: sentRequests[req].type,
                                    id: req
                                }, id)
                            ),
                            Object.keys(sentRequests).length > 9 || page1 != 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                setPage: setPage,
                                page: page1,
                                handlePagination: handlePagination,
                                isDisabled: paginationDisabled
                            }) : ""
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "reqs-feed-empty",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/img/bad-results/notfound.png",
                                width: 184,
                                height: 208
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Nebyly nalezen\xe9 ž\xe1dn\xe9 nevyřešen\xe9 ž\xe1dosti."
                            })
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "reqs-feed-loading",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CircularProgress, {})
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReqFeed);

});

/***/ }),

/***/ 1547:
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
/* harmony import */ var _contexts_DbContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6934);
/* harmony import */ var _contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5182);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_DbContext__WEBPACK_IMPORTED_MODULE_3__]);
_contexts_DbContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


//next

//Contexts


const SentReq = ({ name , age , pfp , premium , listingId , type , id  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { getUser  } = (0,_contexts_DbContext__WEBPACK_IMPORTED_MODULE_3__/* .useDb */ .s)();
    const [loading, setLoading] = (0,_contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_4__/* .useLoading */ .r)();
    //Functions
    const handleShowListing = ()=>{
        router.push(`/${type}/${listingId}`);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: handleShowListing,
        className: `sent-req ${premium && "premium"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "req-pfp-container",
                children: pfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: pfp,
                    className: "container-pfp"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-pfp"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "req-content",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "content-user",
                        children: [
                            name,
                            ", ",
                            age,
                            " ",
                            premium && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-circle-check"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "content-status",
                        children: "Ž\xe1dost ček\xe1 na vyř\xedzen\xed."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "req-status",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fas fa-hourglass-half"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SentReq);

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