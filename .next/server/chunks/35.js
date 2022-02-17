"use strict";
exports.id = 35;
exports.ids = [35];
exports.modules = {

/***/ 4770:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3300);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2824);
/* harmony import */ var _SubHeader_SubHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2303);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header_Header__WEBPACK_IMPORTED_MODULE_3__]);
_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


//Components



const Explore = ({ children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "Explore",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                variant: "gradient"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SubHeader_SubHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Explore);

});

/***/ }),

/***/ 4196:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(387);
/* harmony import */ var _contexts_DbContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6934);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1018);
/* harmony import */ var _contexts_ExploreContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6155);
/* harmony import */ var _contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5182);
/* harmony import */ var _ExploreListings_ExploreFlatmate_ExploreFlatmate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1573);
/* harmony import */ var _ExploreListings_ExploreFlat_ExploreFlat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6822);
/* harmony import */ var _Pagination_Pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1739);
/* harmony import */ var _Filter_Filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4433);
/* harmony import */ var _CustomDialog_CustomDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9029);
/* harmony import */ var _ExplorePremium_ExplorePremium__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9298);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Filter_Filter__WEBPACK_IMPORTED_MODULE_11__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_4__]);
([_Filter_Filter__WEBPACK_IMPORTED_MODULE_11__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__, _contexts_DbContext__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//Next


//Contexts




//Components






//MUI


//Img
const ExploreFeed = ({ variant  })=>{
    //Variables
    //Contexts
    const { getListings , getListingsFilter , getListing  } = (0,_contexts_DbContext__WEBPACK_IMPORTED_MODULE_4__/* .useDb */ .s)();
    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { currentUser , currentUserInfo  } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();
    const [loading, setLoading] = (0,_contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_7__/* .useLoading */ .r)();
    const { flatListingsValue , flatmateListingsValue , flatSnapsValue , flatmateSnapsValue , premiumFlatSnapsValue , premiumFlatmateSnapsValue , activeFiltersValue , flatmatePageValue , flatPageValue , currentVariantValue ,  } = (0,_contexts_ExploreContext__WEBPACK_IMPORTED_MODULE_6__/* .useExplore */ .M)();
    const [flatListings, setFlatListings] = flatListingsValue;
    const [flatmateListings, setFlatmateListings] = flatmateListingsValue;
    const [flatSnaps, setFlatSnaps] = flatSnapsValue;
    const [flatmateSnaps, setFlatmateSnaps] = flatmateSnapsValue;
    const [premiumFlatSnaps, setPremiumFlatSnaps] = premiumFlatSnapsValue;
    const [premiumFlatmateSnaps, setPremiumFlatmateSnaps] = premiumFlatmateSnapsValue;
    const [activeFilters, setActiveFilters] = activeFiltersValue;
    const [flatmatePage, setFlatmatePage] = flatmatePageValue;
    const [flatPage, setFlatPage] = flatPageValue;
    const [currentVariant, setCurrentVariant] = currentVariantValue;
    //State
    const { 0: filterOpen , 1: setFilterOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: limitedPaginationDialog , 1: setLimitedPaginationDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: premiumPaginationDialog , 1: setPremiumPaginationDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // const [activeFilters, setActiveFilters] = useState({});
    const { 0: matching , 1: setMatching  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Is user connected to internet
    const { 0: connectionDown , 1: setConnectionDown  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //Pagination disabled?
    const { 0: isPaginationDisabled , 1: setIsPaginationDisabled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Initial first page fetch
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (variant === "flatmate") {
            if (flatmateListings) return;
            fetchListings("flatmate", "first", null, null, activeFilters);
        }
        if (variant === "flat") {
            if (flatListings) return;
            fetchListings("flat", "first", null, null, activeFilters);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!currentVariant) {
            setCurrentVariant(variant);
        } else if (currentVariant != variant) {
            if (Object.keys(activeFilters).length) {
                setActiveFilters({});
                if (currentVariant === "flatmate") {
                    setFlatmateListings(null);
                }
                if (currentVariant === "flat") {
                    setFlatListings(null);
                }
            }
            setCurrentVariant(variant);
        } else {
            return;
        }
    }, [
        variant
    ]);
    const fetchListings = (type, page, listings1, premiumListings, filter)=>{
        console.log(premiumFlatmateSnaps && premiumFlatmateSnaps.map((snap)=>snap.data().userInfo.username
        ));
        if (type === "flatmate") {
            if (page === "first") {
                let flatmateListingsArray = [];
                getListings("flatmate", "first", null, null, filter).then((docs)=>{
                    const listings = docs.newPremiumListings.concat(docs.newListings);
                    setFlatmateSnaps(docs.newListings);
                    setPremiumFlatmateSnaps(docs.newPremiumListings);
                    listings.forEach((listing)=>{
                        //Insert all the listings into empty array
                        flatmateListingsArray = [
                            ...flatmateListingsArray,
                            listing
                        ];
                    });
                    // Insert the array into state
                    setFlatmateListings(flatmateListingsArray);
                    setIsPaginationDisabled(false);
                }).catch((error)=>{
                    if (error.message === "network-failed") {
                        setConnectionDown(true);
                    }
                    console.log(error);
                });
            } else if (page === "next") {
                let flatmateListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flatmate", "next", listings1, premiumListings, filter).then((docs)=>{
                    const listings = docs.newPremiumListings.concat(docs.newListings);
                    if (listings.length > 0) {
                        setFlatmatePage((prevState)=>prevState + 1
                        );
                        setFlatmateSnaps(docs.newListings);
                        setPremiumFlatmateSnaps(docs.newPremiumListings);
                        listings.forEach((listing)=>{
                            flatmateListingsArray = [
                                ...flatmateListingsArray,
                                listing
                            ];
                        });
                        setFlatmateListings(flatmateListingsArray);
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    }
                    setIsPaginationDisabled(false);
                });
            } else if (page === "prev") {
                let flatmateListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flatmate", "prev", listings1, premiumListings, filter).then((docs)=>{
                    const listings = docs.newPremiumListings.concat(docs.newListings);
                    if (listings.length > 0) {
                        setFlatmatePage((prevState)=>prevState - 1
                        );
                        setFlatmateSnaps(docs.newListings);
                        setPremiumFlatmateSnaps(docs.newPremiumListings);
                        listings.forEach((listing)=>{
                            flatmateListingsArray = [
                                ...flatmateListingsArray,
                                listing
                            ];
                        });
                        setFlatmateListings(flatmateListingsArray);
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    }
                    setIsPaginationDisabled(false);
                });
            }
        }
        if (type === "flat") {
            if (page === "first") {
                let flatListingsArray = [];
                //Check if we already have listings
                getListings("flat", page, null, null, filter).then((docs)=>{
                    const listings = docs.newPremiumListings.concat(docs.newListings);
                    setFlatSnaps(docs.newListings);
                    setPremiumFlatSnaps(docs.newPremiumListings);
                    listings.forEach((listing)=>{
                        //Insert all the listings into empty array
                        flatListingsArray = [
                            ...flatListingsArray,
                            listing
                        ];
                    });
                    // Insert the array into state
                    setFlatListings(flatListingsArray);
                    setIsPaginationDisabled(false);
                }).catch((error)=>{
                    if (error.message === "network-failed") {
                        setConnectionDown(true);
                    }
                });
            } else if (page === "next") {
                let flatListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flat", "next", listings1, premiumListings, filter).then((docs)=>{
                    const listings = docs.newPremiumListings.concat(docs.newListings);
                    if (listings.length > 0) {
                        setFlatSnaps(docs.newListings);
                        setPremiumFlatSnaps(docs.newPremiumListings);
                        setFlatPage((prevState)=>prevState + 1
                        );
                        listings.forEach((listing)=>{
                            flatListingsArray = [
                                ...flatListingsArray,
                                listing
                            ];
                        });
                        setFlatListings(flatListingsArray);
                    }
                    setIsPaginationDisabled(false);
                });
            } else if (page === "prev") {
                let flatListingsArray = [];
                setIsPaginationDisabled(true);
                getListings("flat", "prev", listings1, premiumListings, filter).then((docs)=>{
                    const listings = docs.newPremiumListings.concat(docs.newListings);
                    if (listings.length > 0) {
                        setFlatSnaps(docs.newListings);
                        setPremiumFlatSnaps(docs.newPremiumListings);
                        setFlatPage((prevState)=>prevState - 1
                        );
                        listings.forEach((listing)=>{
                            flatListingsArray = [
                                ...flatListingsArray,
                                listing
                            ];
                        });
                        setFlatListings(flatListingsArray);
                    }
                    setIsPaginationDisabled(false);
                });
            }
        }
    };
    const handleMatching = ()=>{
        if (currentUserInfo.mainInfo.type === "flatmate" && variant === "flatmate") {
            return;
        }
        if (currentUserInfo.mainInfo.type === "offerer" && variant === "flat") {
            return;
        }
        if (matching) {
            setActiveFilters({});
            applyFilters({});
            setMatching((prevState)=>!prevState
            );
            return;
        }
        setMatching((prevState)=>!prevState
        );
        getListing(currentUserInfo.listing.id).then((doc)=>{
            if (variant === "flatmate") {
                const filters = {
                    location: doc.data().flatBoxes.location ? doc.data().flatBoxes.location : null,
                    gender: doc.data().personTags.gender ? doc.data().personTags.gender : null,
                    age: doc.data().personTags.age ? doc.data().personTags.age : null,
                    smoking: doc.data().personTags.smoking ? doc.data().personTags.smoking : null,
                    job: doc.data().personTags.job ? doc.data().personTags.job : null
                };
                setActiveFilters(filters);
                applyFilters(filters);
            }
            if (variant === "flat") {
                const filters = {
                    location: doc.data().flatTags.location ? doc.data().flatTags.location : null,
                    layout: doc.data().flatTags.layout ? doc.data().flatTags.layout : null,
                    elevator: doc.data().flatTags.elevator ? doc.data().flatTags.elevator : null,
                    internet: doc.data().flatTags.internet ? doc.data().flatTags.internet : null,
                    petAllowed: doc.data().flatTags.petAllowed ? doc.data().flatTags.petAllowed : null,
                    smokingAllowed: doc.data().flatTags.smokingAllowed ? doc.data().flatTags.smokingAllowed : null
                };
                setActiveFilters(filters);
                applyFilters(filters);
            }
        }).catch((error)=>{
            console.log(error);
        });
    };
    const applyFilters = (filter)=>{
        if (variant === "flatmate") {
            setFlatmateListings(null);
            setFlatmatePage(1);
            fetchListings("flatmate", "first", null, null, filter);
        }
        if (variant === "flat") {
            setFlatListings(null);
            setFlatPage(1);
            fetchListings("flat", "first", null, null, filter);
        }
    };
    // Hadnles pagination (next or prev)
    const handlePagination = (page)=>{
        if (!currentUser) {
            setLimitedPaginationDialog(true);
            return;
        }
        // if(currentUser && (flatmatePage == 3 || flatPage == 3) && page === "next"){
        //     setPremiumPaginationDialog(true);
        //     return;
        // }
        if (variant === "flatmate") {
            if (page === "next") {
                fetchListings("flatmate", "next", flatmateSnaps, premiumFlatmateSnaps, activeFilters);
            }
            if (page === "prev") {
                fetchListings("flatmate", "prev", flatmateSnaps, premiumFlatmateSnaps, activeFilters);
            }
        }
        if (variant === "flat") {
            if (page === "next") {
                fetchListings("flat", "next", flatSnaps, premiumFlatSnaps, activeFilters);
            }
            if (page === "prev") {
                fetchListings("flat", "prev", flatSnaps, premiumFlatSnaps, activeFilters);
            }
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Backdrop, {
                sx: {
                    zIndex: (theme)=>theme.zIndex.drawer + 1
                },
                open: limitedPaginationDialog,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_CustomDialog_CustomDialog__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    image: "/img/dialogs/login-dialog.png",
                    heading: "Pro pokračov\xe1n\xed je nutn\xe9 se přihl\xe1sit.",
                    setOpen: setLimitedPaginationDialog,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "dialog-body",
                            children: "Pro pokračov\xe1n\xed a zobrazen\xed dalš\xedch inzer\xe1tů je nutn\xe9 se zaregistrovat nebo přihl\xe1sit do \xfačtu Roomie."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "dialog-action",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>router.push("/register")
                                    ,
                                    className: "acc-btn",
                                    children: "Registrovat"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>router.push("/login")
                                    ,
                                    className: "main-btn",
                                    children: "Přihl\xe1sit"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Backdrop, {
                sx: {
                    zIndex: (theme)=>theme.zIndex.drawer + 1
                },
                open: premiumPaginationDialog,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_CustomDialog_CustomDialog__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    image: "/img/dialogs/login-dialog.png",
                    heading: "Pro pokračov\xe1n\xed je nutn\xe9 m\xedt premium",
                    setOpen: setPremiumPaginationDialog,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "dialog-body",
                            children: "Pro pokračov\xe1n\xed a zobrazen\xed dalš\xedch inzer\xe1tů je nutn\xe9 m\xed premium \xfačet Roomie."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "dialog-action",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>router.push("/premium")
                                ,
                                className: "main-btn",
                                children: "Z\xedskat premium"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "explore-feed",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Backdrop, {
                        sx: {
                            zIndex: (theme)=>theme.zIndex.drawer + 1
                        },
                        open: filterOpen,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Filter_Filter__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            variant: variant,
                            setOpen: setFilterOpen,
                            activeFilters: activeFilters,
                            setActiveFilters: setActiveFilters,
                            applyFilters: applyFilters
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "feed-header",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "header-title",
                                children: variant === "flatmate" ? "Prohl\xedžet spolubydl\xedc\xed" : "Prohl\xedžet byty"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "header-filters",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `filters-filter ${Object.keys(activeFilters).length && !matching && "active"} ${matching && "disabled"}`,
                                        onClick: ()=>{
                                            if (currentUser) {
                                                setFilterOpen(true);
                                                setMatching(false);
                                            } else {
                                                setLimitedPaginationDialog(true);
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Filtry"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fas fa-chevron-down"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: `filters-match ${matching && "active"} ${!currentUserInfo ? "disabled" : variant === "flat" && currentUserInfo.mainInfo.type === "offerer" ? "disabled" : variant === currentUserInfo.mainInfo.type ? "disabled" : ""}`,
                                        onClick: ()=>handleMatching()
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Př\xedmo pro v\xe1s"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fas fa-puzzle-piece"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    variant === "flatmate" && !connectionDown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: flatmateListings ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: flatmateListings && flatmateListings.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    flatmateListings.map((listing, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ExploreListings_ExploreFlatmate_ExploreFlatmate__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            name: listing.data().userInfo.username,
                                            age: listing.data().userInfo.age,
                                            gender: listing.data().userInfo.gender,
                                            location: listing.data().flatTags.location,
                                            money: listing.data().mainInfo.budget,
                                            available: listing.data().mainInfo.startTime,
                                            bio: listing.data().bio,
                                            id: listing.id,
                                            pfp: listing.data().userInfo.images.pfp,
                                            premium: listing.data().userInfo.premium
                                        }, id)
                                    ),
                                    flatmateListings.length > 7 || flatmatePage != 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        page: flatmatePage,
                                        setPage: setFlatmatePage,
                                        handlePagination: handlePagination,
                                        isDisabled: isPaginationDisabled
                                    }) : ""
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "feed-not-found",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/img/bad-results/notfound.png",
                                        width: 184,
                                        height: 208
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "not-found-description",
                                        children: "Omlouv\xe1me se, ale vaš\xedm požadavkům neodpov\xeddaj\xed ž\xe1dn\xe9 inzer\xe1ty. Zkuste upravit sv\xe9 filtry."
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "loading",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.CircularProgress, {})
                        })
                    }),
                    variant === "flat" && !connectionDown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: flatListings ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: flatListings.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    flatListings.map((listing, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ExploreListings_ExploreFlat_ExploreFlat__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            name: `Byt ${listing.data().flatBoxes.layout ? listing.data().flatBoxes.layout : ""} ${listing.data().flatBoxes.location}`,
                                            bio: listing.data().flatBio,
                                            price: listing.data().mainInfo.price,
                                            startTime: listing.data().mainInfo.startTime,
                                            stayTime: listing.data().mainInfo.stayTime,
                                            mainImg: listing.data().userInfo.images.listingImgs[0],
                                            premium: listing.data().userInfo.premium,
                                            size: listing.data().flatBoxes.size,
                                            id: listing.id
                                        }, id)
                                    ),
                                    (flatListings.length > 7 || flatPage != 1) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        page: flatPage,
                                        setPage: setFlatPage,
                                        handlePagination: handlePagination,
                                        isDisabled: isPaginationDisabled
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "feed-not-found",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/img/bad-results/notfound.png",
                                        width: 184,
                                        height: 208
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "not-found-description",
                                        children: "Omlouv\xe1me se, ale vaš\xedm požadavkům neodpov\xeddaj\xed ž\xe1dn\xe9 inzer\xe1ty. Zkuste upravit sv\xe9 filtry."
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "loading",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.CircularProgress, {})
                        })
                    }),
                    connectionDown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "feed-connection-lost",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "lost-description",
                                children: "Vaše připojen\xed bylo ztraceno."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>router.reload(`explore/${variant}`)
                                ,
                                className: "acc-btn",
                                children: "Opakovat"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreFeed);

});

/***/ }),

/***/ 6822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);


//next

const ExploreFlat = ({ name , bio , price , size , startTime , stayTime , mainImg , premium , id  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: `/flat/${id}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `explore-flat ${premium && "premium"}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "listing-pfp-container",
                    children: mainImg ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: mainImg,
                        className: "listing-pfp"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/img/listing/default-byt.jpg",
                        className: "listing-pfp"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "listing-content",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content-header",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: name
                                }),
                                " ",
                                premium && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fas fa-check-circle"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "content-bio",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    bio.substr(0, 75),
                                    "..."
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "content-more",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "",
                                children: "V\xedce..."
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content-info",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "info-row",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info-budget row-col",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Cena: "
                                                }),
                                                price >= 10000 ? price.toString().substr(0, 2) + " " + price.toString().substr(2, 6) : price.toString().substr(0, 1) + " " + price.toString().substr(1, 5),
                                                ",-"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info-locations row-col",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Smlouva:"
                                                }),
                                                " ",
                                                stayTime
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "info-row",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info-gender row-col",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Plocha:"
                                                }),
                                                " ",
                                                size ? size : "",
                                                "m",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                                    children: "2"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info-available row-col",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Dostupnost:"
                                                }),
                                                " ",
                                                startTime.substr(0, 5),
                                                "."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreFlat);


/***/ }),

/***/ 1573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);


//next

const ExploreFlatmate = ({ name , age , gender , location , money , available , bio , pfp , premium , id  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: `/flatmate/${id}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `explore-flatmate ${premium && "premium"}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "listing-pfp-container",
                    children: gender ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: pfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "listing-pfp",
                            src: pfp,
                            alt: ""
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: gender === "male" ? "/img/pfps/radek-pfp.png" : "/img/pfps/radka-pfp.png",
                            className: "listing-pfp",
                            alt: ""
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "listing-pfp"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "listing-content",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content-header",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: name
                                }),
                                ", ",
                                age,
                                " ",
                                premium && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fas fa-check-circle"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "content-bio",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    bio.substr(0, 70),
                                    "..."
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "content-more",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "",
                                children: "V\xedce..."
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "content-info",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "info-row",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info-budget row-col",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Rozpočet: "
                                                }),
                                                money >= 10000 ? money.toString().substr(0, 2) + " " + money.toString().substr(2, 6) : money.toString().substr(0, 1) + " " + money.toString().substr(1, 5),
                                                ",-"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info-locations row-col",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Lokace:"
                                                }),
                                                " ",
                                                location.substr(0, 7),
                                                location.length > 7 && "..."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "info-row",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info-gender row-col",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Pohlav\xed:"
                                                }),
                                                " ",
                                                gender == "female" ? "Žena" : gender == "male" ? "Muž" : "Jin\xe9"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info-available row-col",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Dostupnost:"
                                                }),
                                                " ",
                                                available
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreFlatmate);


/***/ }),

/***/ 9298:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(387);


//next

const ExplorePremium = ()=>{
    const router = useRouter();
    return(/*#__PURE__*/ _jsxs("div", {
        className: "explore-premium",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "premium-main-text",
                children: [
                    /*#__PURE__*/ _jsx("p", {
                        className: "text-name-paragraph",
                        children: "Z\xedskejte v\xfdhody"
                    }),
                    /*#__PURE__*/ _jsx("h3", {
                        className: "text-name-heading",
                        children: "Roomie premium"
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "text-description",
                        children: "Premium \xfačet zajist\xed efektivnějš\xed a rychlejš\xed hled\xe1n\xed pomoc\xed řady benefitů."
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("button", {
                onClick: ()=>router.push("/premium")
                ,
                className: "acc-btn",
                children: "Z\xedskat Premium"
            })
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ExplorePremium)));


/***/ }),

/***/ 4433:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tag_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9918);
/* harmony import */ var _LocationDropdown_LocationDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4900);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LocationDropdown_LocationDropdown__WEBPACK_IMPORTED_MODULE_3__]);
_LocationDropdown_LocationDropdown__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


//Axios
//Components


//Mui components

const Filter = ({ variant , setOpen , activeFilters , setActiveFilters , applyFilters  })=>{
    //Person state tags
    const { 0: genderTag , 1: setGenderTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: ageTag , 1: setAgeTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: smokingTag , 1: setSmokingTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: jobTag , 1: setJobTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    //Flat state tags
    const { 0: layoutTag , 1: setLayoutTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: petAllowedTag , 1: setPetAllowedTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: smokingAllowedTag , 1: setSmokingAllowedTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: locationTag , 1: setLocationTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: elevatorTag , 1: setElevatorTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: internetTag , 1: setInternetTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fillExistingFilters();
    }, [
        activeFilters
    ]);
    //Functions
    const fillExistingFilters = ()=>{
        if (variant === "flatmate") {
            setGenderTag(activeFilters.gender ? activeFilters.gender : []);
            setAgeTag(activeFilters.age ? activeFilters.age : []);
            setSmokingTag(activeFilters.smoking ? activeFilters.smoking : "");
            setJobTag(activeFilters.job ? activeFilters.job : []);
            setLocationTag(activeFilters.location ? activeFilters.location : "");
        }
        if (variant === "flat") {
            setLocationTag(activeFilters.location ? activeFilters.location : "");
            setLayoutTag(activeFilters.layout ? activeFilters.layout : "");
            setInternetTag(activeFilters.internet ? activeFilters.internet : "");
            setElevatorTag(activeFilters.elevator ? activeFilters.elevator : "");
            setPetAllowedTag(activeFilters.petAllowed ? activeFilters.petAllowed : "");
            setSmokingAllowedTag(activeFilters.smokingAllowed ? activeFilters.smokingAllowed : "");
        }
    };
    const handleAdd = ()=>{
        if (variant === "flatmate") {
            let addObject = {};
            genderTag.length ? addObject.gender = genderTag : "";
            ageTag.length ? addObject.age = ageTag : "";
            smokingTag ? addObject.smoking = smokingTag : "";
            jobTag.length ? addObject.job = jobTag : "";
            locationTag ? addObject.location = locationTag : "";
            setActiveFilters(addObject);
            applyFilters(addObject);
        }
        if (variant === "flat") {
            let addObject = {};
            locationTag ? addObject.location = locationTag : "";
            layoutTag ? addObject.layout = layoutTag : "";
            elevatorTag ? addObject.elevator = elevatorTag : "";
            internetTag ? addObject.internet = internetTag : "";
            petAllowedTag ? addObject.petAllowed = petAllowedTag : "";
            smokingAllowedTag ? addObject.smokingAllowed = smokingAllowedTag : "";
            setActiveFilters(addObject);
            applyFilters(addObject);
        }
        setOpen(false);
    };
    const handleRemove = ()=>{
        setGenderTag([]);
        setAgeTag([]);
        setSmokingTag("");
        setJobTag([]);
        setLayoutTag("");
        setPetAllowedTag("");
        setSmokingAllowedTag("");
        applyFilters({});
        setActiveFilters({});
        setOpen(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "filter",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                onClick: ()=>setOpen(false)
                ,
                className: "filter-close fas fa-times"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "filter-header",
                children: variant === "flatmate" ? "Filtrovat lidi" : "Filtrovat byty"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "filter-description",
                children: [
                    "Zde můžete zadat vaše preference",
                    variant === "flatmate" ? " ide\xe1ln\xedho spolubydl\xedc\xedho." : " ide\xe1ln\xedho bydlen\xed.",
                    " Zaklikejte hodnoty, podle kter\xfdch chcete filtrovat, ostatn\xed můžete nechat pr\xe1zdn\xe9."
                ]
            }),
            variant === "flatmate" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "filter-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Lokace"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-tags",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LocationDropdown_LocationDropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    location: locationTag,
                                    setLocation: setLocationTag
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "filter-section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "section-tags",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                active: locationTag,
                                children: locationTag ? locationTag : "Vyberte lokaci"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "filter-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "section-header",
                                children: "Pohlav\xed"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-tags",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: genderTag.includes("Muž"),
                                        onClick: ()=>{
                                            let value = "Muž";
                                            if (genderTag.includes(value)) {
                                                setGenderTag((prevState)=>prevState.filter((item)=>item != value
                                                    )
                                                );
                                            } else {
                                                if (genderTag.length === 2) {
                                                    setGenderTag([]);
                                                } else {
                                                    setGenderTag((prevState)=>[
                                                            ...prevState,
                                                            value
                                                        ]
                                                    );
                                                }
                                            }
                                        },
                                        children: "Muž"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: genderTag.includes("Žena"),
                                        onClick: ()=>{
                                            let value = "Žena";
                                            if (genderTag.includes(value)) {
                                                setGenderTag((prevState)=>prevState.filter((item)=>item != value
                                                    )
                                                );
                                            } else {
                                                if (genderTag.length === 2) {
                                                    setGenderTag([]);
                                                } else {
                                                    setGenderTag((prevState)=>[
                                                            ...prevState,
                                                            value
                                                        ]
                                                    );
                                                }
                                            }
                                        },
                                        children: "Žena"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: genderTag.includes("Jin\xe9"),
                                        onClick: ()=>{
                                            let value = "Jin\xe9";
                                            if (genderTag.includes(value)) {
                                                setGenderTag((prevState)=>prevState.filter((item)=>item != value
                                                    )
                                                );
                                            } else {
                                                if (genderTag.length === 2) {
                                                    setGenderTag([]);
                                                } else {
                                                    setGenderTag((prevState)=>[
                                                            ...prevState,
                                                            value
                                                        ]
                                                    );
                                                }
                                            }
                                        },
                                        children: "Jin\xe9"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "filter-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "section-header",
                                children: "Věk"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-tags",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: ageTag.includes("18-25"),
                                        onClick: ()=>{
                                            let value = "18-25";
                                            if (ageTag.includes(value)) {
                                                setAgeTag((prevState)=>prevState.filter((item)=>item != value
                                                    )
                                                );
                                            } else {
                                                if (ageTag.length === 2) {
                                                    setAgeTag([]);
                                                } else {
                                                    setAgeTag((prevState)=>[
                                                            ...prevState,
                                                            value
                                                        ]
                                                    );
                                                }
                                            }
                                        },
                                        children: "18-25"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: ageTag.includes("25-35"),
                                        onClick: ()=>{
                                            let value = "25-35";
                                            if (ageTag.includes(value)) {
                                                setAgeTag((prevState)=>prevState.filter((item)=>item != value
                                                    )
                                                );
                                            } else {
                                                if (ageTag.length === 2) {
                                                    setAgeTag([]);
                                                } else {
                                                    setAgeTag((prevState)=>[
                                                            ...prevState,
                                                            value
                                                        ]
                                                    );
                                                }
                                            }
                                        },
                                        children: "25-35"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: ageTag.includes("35+"),
                                        onClick: ()=>{
                                            let value = "35+";
                                            if (ageTag.includes(value)) {
                                                setAgeTag((prevState)=>prevState.filter((item)=>item != value
                                                    )
                                                );
                                            } else {
                                                if (ageTag.length === 2) {
                                                    setAgeTag([]);
                                                } else {
                                                    setAgeTag((prevState)=>[
                                                            ...prevState,
                                                            value
                                                        ]
                                                    );
                                                }
                                            }
                                        },
                                        children: "35+"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "filter-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "section-header",
                                children: "Kouřen\xed"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-tags",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: smokingTag === "Kuř\xe1k",
                                        onClick: ()=>setSmokingTag(smokingTag === "Kuř\xe1k" ? "" : "Kuř\xe1k")
                                        ,
                                        children: "Kuř\xe1k"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: smokingTag === "Nekuř\xe1k",
                                        onClick: ()=>setSmokingTag(smokingTag === "Nekuř\xe1k" ? "" : "Nekuř\xe1k")
                                        ,
                                        children: "Nekuř\xe1k"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "filter-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "section-header",
                                children: "Zaměstn\xe1n\xed"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-tags",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: jobTag.includes("Zaměstnan\xfd"),
                                        onClick: ()=>{
                                            let value = "Zaměstnan\xfd";
                                            if (jobTag.includes(value)) {
                                                setJobTag((prevState)=>prevState.filter((item)=>item != value
                                                    )
                                                );
                                            } else {
                                                if (jobTag.length === 2) {
                                                    setJobTag([]);
                                                } else {
                                                    setJobTag((prevState)=>[
                                                            ...prevState,
                                                            value
                                                        ]
                                                    );
                                                }
                                            }
                                        },
                                        children: "Zaměstnan\xfd"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: jobTag.includes("Nezaměstnan\xfd"),
                                        onClick: ()=>{
                                            let value = "Nezaměstnan\xfd";
                                            if (jobTag.includes(value)) {
                                                setJobTag((prevState)=>prevState.filter((item)=>item != value
                                                    )
                                                );
                                            } else {
                                                if (jobTag.length === 2) {
                                                    setJobTag([]);
                                                } else {
                                                    setJobTag((prevState)=>[
                                                            ...prevState,
                                                            value
                                                        ]
                                                    );
                                                }
                                            }
                                        },
                                        children: "Nezaměstnan\xfd"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: jobTag.includes("Student"),
                                        onClick: ()=>{
                                            let value = "Student";
                                            if (jobTag.includes(value)) {
                                                setJobTag((prevState)=>prevState.filter((item)=>item != value
                                                    )
                                                );
                                            } else {
                                                if (jobTag.length === 2) {
                                                    setJobTag([]);
                                                } else {
                                                    setJobTag((prevState)=>[
                                                            ...prevState,
                                                            value
                                                        ]
                                                    );
                                                }
                                            }
                                        },
                                        children: "Student"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            variant === "flat" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "filter-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Lokace"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-tags",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LocationDropdown_LocationDropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    location: locationTag,
                                    setLocation: setLocationTag
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "filter-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Dispozice"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-tags",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                                    fullWidth: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.InputLabel, {
                                            id: "demo-simple-select-label",
                                            children: "Dispozice"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Select, {
                                            label: "Dispozice",
                                            onChange: (e)=>setLayoutTag(e.target.value === "none" ? "" : e.target.value)
                                            ,
                                            value: layoutTag ? layoutTag : "none",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                    value: "none",
                                                    children: "Libovoln\xe9"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                    value: "1+1",
                                                    children: "1+1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                    value: "1+kk",
                                                    children: "1+kk"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                    value: "2+1",
                                                    children: "2+1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                    value: "2+kk",
                                                    children: "2+kk"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                    value: "3+1",
                                                    children: "3+1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                    value: "3+kk",
                                                    children: "3+kk"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                    value: "4+1",
                                                    children: "4+1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                    value: "4+kk",
                                                    children: "4+kk"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "filter-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "V\xfdtah"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-tags",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: elevatorTag === "V\xfdtah",
                                        onClick: ()=>setElevatorTag(elevatorTag === "V\xfdtah" ? "" : "V\xfdtah")
                                        ,
                                        variant: "box",
                                        icon: "caret-square-up",
                                        children: "Ano"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: elevatorTag === "Bez v\xfdtahu",
                                        onClick: ()=>setElevatorTag(elevatorTag === "Bez v\xfdtahu" ? "" : "Bez v\xfdtahu")
                                        ,
                                        variant: "box",
                                        icon: "caret-square-up",
                                        children: "Ne"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "filter-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Internet"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-tags",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: internetTag === "Internet",
                                        onClick: ()=>setInternetTag(internetTag === "Internet" ? "" : "Internet")
                                        ,
                                        variant: "box",
                                        icon: "wifi",
                                        children: "Ano"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: internetTag === "Bez internetu",
                                        onClick: ()=>setInternetTag(internetTag === "Bez internetu" ? "" : "Bez internetu")
                                        ,
                                        variant: "box",
                                        icon: "wifi",
                                        children: "Ne"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "filter-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Mazl\xedčci"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-tags",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: petAllowedTag === "Mazl\xedčci povoleno",
                                        onClick: ()=>setPetAllowedTag(petAllowedTag === "Mazl\xedčci povoleno" ? "" : "Mazl\xedčci povoleno")
                                        ,
                                        variant: "box",
                                        icon: "dog",
                                        children: "Povoleno"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: petAllowedTag === "Mazl\xedčci nepovoleno",
                                        onClick: ()=>setPetAllowedTag(petAllowedTag === "Mazl\xedčci nepovoleno" ? "" : "Mazl\xedčci nepovoleno")
                                        ,
                                        variant: "box",
                                        icon: "dog",
                                        children: "Nepovoleno"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "filter-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Kouřen\xed"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-tags",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: smokingAllowedTag === "Kouřen\xed povoleno",
                                        onClick: ()=>setSmokingAllowedTag(smokingAllowedTag === "Kouřen\xed povoleno" ? "" : "Kouřen\xed povoleno")
                                        ,
                                        variant: "box",
                                        icon: "smoking",
                                        children: "Povoleno"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: smokingAllowedTag === "Kouřen\xed nepovoleno",
                                        onClick: ()=>setSmokingAllowedTag(smokingAllowedTag === "Kouřen\xed nepovoleno" ? "" : "Kouřen\xed nepovoleno")
                                        ,
                                        variant: "box",
                                        icon: "smoking",
                                        children: "Nepovoleno"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "filter-buttons",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>handleAdd()
                        ,
                        className: "main-btn",
                        children: "Přidat filtry"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>handleRemove()
                        ,
                        className: "general-btn",
                        children: "Odebrat filtry"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

});

/***/ }),

/***/ 2303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(387);


//next


const SubHeader = ()=>{
    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "sub-header",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: "/explore/flatmates",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `sub-header-link ${router.pathname === "/explore/flatmates" && "active"}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fas fa-users"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: "/explore/flats",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `sub-header-link ${router.pathname === "/explore/flats" && "active"}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fas fa-home"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubHeader);


/***/ })

};
;