"use strict";
exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2882);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_2__]);
_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


//contexts

//MUI

const GalleryInput = ({ object , setObject , listingImgs , addedListingImgs , setAddedListingImgs , addedPfp , setAddedPfp , pfp  })=>{
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const inputFileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleImgUpload = (e)=>{
        setImage(e.target.files[0]);
    };
    // Setting the addedListingImgs state in the listing
    const handleAdd = ()=>{
        // If the object index is -1 it means it's the main image
        if (object.index === -1 && image) {
            setAddedPfp(image);
        }
        if (object.index > -1) {
            let addedImgs = [
                ...addedListingImgs
            ];
            addedImgs[object.index] = image;
            setAddedListingImgs(addedImgs);
        }
        setObject({
            open: false,
            index: -1
        });
        setImage(null);
        inputFileRef.current.value = "";
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Backdrop, {
        sx: {
            color: '#fff',
            zIndex: (theme)=>theme.zIndex.drawer + 1
        },
        open: object.open,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "gallery-input",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    onClick: ()=>{
                        setObject({
                            open: false,
                            index: 0
                        });
                        setImage(null);
                        inputFileRef.current.value = "";
                    },
                    className: "input-close fas fa-times"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "input-heading",
                    children: "Vložit novou fotografii"
                }),
                image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "input-img",
                    src: URL.createObjectURL(image),
                    alt: ""
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        object.index === -1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: pfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: pfp,
                                className: "input-img"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "input-img"
                            })
                        }),
                        object.index > -1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: listingImgs && listingImgs[object.index] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: listingImgs[object.index],
                                className: "input-img"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "input-img"
                            })
                        })
                    ]
                }),
                image && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "input-status",
                    children: [
                        "Soubor byl nahr\xe1n! (",
                        image.name.substring(0, 10),
                        ")"
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    accept: ".png, .jpg",
                    ref: inputFileRef,
                    type: "file",
                    onChange: handleImgUpload
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    disabled: !image,
                    onClick: ()=>handleAdd()
                    ,
                    className: `main-btn input-btn ${!image && "disabled"}`,
                    children: "Hotovo"
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryInput);

});

/***/ }),

/***/ 2882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ useListing),
/* harmony export */   "a": () => (/* binding */ ListingProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(387);
/* harmony import */ var _DbContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6934);
/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1018);
/* harmony import */ var _LoadingContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5182);
/* harmony import */ var _SnackBarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7503);
/* harmony import */ var _FunctionsContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1614);
/* harmony import */ var _StorageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(742);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StorageContext__WEBPACK_IMPORTED_MODULE_8__, _FunctionsContext__WEBPACK_IMPORTED_MODULE_7__, _AuthContext__WEBPACK_IMPORTED_MODULE_4__, _DbContext__WEBPACK_IMPORTED_MODULE_3__]);
([_StorageContext__WEBPACK_IMPORTED_MODULE_8__, _FunctionsContext__WEBPACK_IMPORTED_MODULE_7__, _AuthContext__WEBPACK_IMPORTED_MODULE_4__, _DbContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//next

//Contexts






const ListingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useListing = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ListingContext);
};
const ListingProvider = ({ type: type1 , ssrProps , cr , children  })=>{
    //Variables---
    //Contexts
    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { id  } = router.query;
    const { getListing , getUser , getListingContact  } = (0,_DbContext__WEBPACK_IMPORTED_MODULE_3__/* .useDb */ .s)();
    const { currentUser , currentUserInfo , userLoaded  } = (0,_AuthContext__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();
    const [loading, setLoading] = (0,_LoadingContext__WEBPACK_IMPORTED_MODULE_5__/* .useLoading */ .r)();
    const { snackBar  } = (0,_SnackBarContext__WEBPACK_IMPORTED_MODULE_6__/* .useSnackBar */ .i)();
    const { callable  } = (0,_FunctionsContext__WEBPACK_IMPORTED_MODULE_7__/* .useFunctions */ .d)();
    const { uploadImg  } = (0,_StorageContext__WEBPACK_IMPORTED_MODULE_8__/* .useStorage */ .y)();
    //States
    //Listing data obj
    //Listing info
    const { 0: listingInfo , 1: setListingInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    //Edit mode
    const { 0: editListing , 1: setEditListing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(cr);
    //ListingId
    const { 0: listingId , 1: setListingId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(id);
    //imgs
    const { 0: listingImgs , 1: setListingImgs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ssrProps.listingImgs);
    const { 0: pfp , 1: setPfp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ssrProps.listingPfp);
    //Listing info states
    const { 0: listingName , 1: setListingName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ssrProps.listingName);
    const { 0: listingUsername , 1: setListingUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ssrProps.listingUsername);
    const { 0: listingAge , 1: setListingAge  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ssrProps.listingAge);
    const { 0: listingGender , 1: setListingGender  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ssrProps.listingGender);
    const { 0: listingBio , 1: setListingBio  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(type1 === "flatmate" ? ssrProps.listingBio : null);
    const { 0: listingFlatBio , 1: setListingFlatBio  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(type1 === "flat" ? ssrProps.listingFlatBio : null);
    const { 0: listingPersonBio , 1: setListingPersonBio  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(type1 === "flat" ? ssrProps.listingPersonBio : null);
    const { 0: listingPersonBoxes , 1: setListingPersonBoxes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.parse(ssrProps.listingPersonBoxes));
    const { 0: listingPersonTags , 1: setListingPersonTags  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.parse(ssrProps.listingPersonTags));
    const { 0: listingFlatBoxes , 1: setListingFlatBoxes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(type1 === "flat" ? JSON.parse(ssrProps.listingFlatBoxes) : null);
    const { 0: listingFlatTags , 1: setListingFlatTags  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(type1 === "flatmate" ? JSON.parse(ssrProps.listingFlatTags) : null);
    const { 0: listingPremium , 1: setListingPremium  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ssrProps.listingPremium);
    const { 0: listingFans , 1: setListingFans  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ssrProps.listingFans ? ssrProps.listingFans : []);
    const { 0: listingLiked , 1: setListingLiked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: listingContact , 1: setListingContact  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    //Edit mode info storage
    const { 0: stayTime , 1: setStayTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: startTime , 1: setStartTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: budget , 1: setBudget  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    //Dialogs and overlays
    const { 0: personTagOverlay , 1: setPersonTagOverlay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: flatTagOverlay , 1: setFlatTagOverlay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: flatBoxerOverlay , 1: setFlatBoxerOverlay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: personBoxerOverlay , 1: setPersonBoxerOverlay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: reqDialogOpen , 1: setReqDialogOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: reportDialog , 1: setReportDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: sliderDialog , 1: setSliderDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: welcomeDialog , 1: setWelcomeDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: requestMessage , 1: setRequestMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: reportMessage , 1: setReportMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: contactLoading , 1: setContactLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: galleryInput , 1: setGalleryInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        open: false,
        type: "none",
        img: null,
        index: 0
    });
    //Added values
    const { 0: addedListingImgs , 1: setAddedListingImgs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        "",
        "",
        "",
        "",
        "",
        "", 
    ]);
    const { 0: addedPfp , 1: setAddedPfp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: addedPersonTags , 1: setAddedPersonTags  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: addedFlatTags , 1: setAddedFlatTags  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: addedPersonBoxes , 1: setAddedPersonBoxes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: addedFlatBoxes , 1: setAddedFlatBoxes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    //Added bios
    const { 0: bio , 1: setBio  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: flatBio , 1: setFlatBio  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: personBio , 1: setPersonBio  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    //Callable functions
    const updateListing = callable("userUpdates-updateListing");
    const createRequest = callable("requests-createRequest");
    const deleteImgs = callable("images-deleteImgs");
    const likeListing = callable("userUpdates-likeListing");
    const unlikeListing = callable("userUpdates-unlikeListing");
    const reportUser = callable("feedback-reportUser");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!router.isReady) return;
        if (!userLoaded) return;
        listingLoad();
    }, [
        router.isReady,
        id,
        currentUser,
        userLoaded
    ]);
    // If ssr props aren't null but their coresponding state is, it means it has probably been nulled by the handleSave function, meaning we have to reload them
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (ssrProps.listingPersonTags != null && listingPersonTags === null) {
            if (ssrProps.status === "success") {
                reloadProps();
            } else if (ssrProps.status === "client-side") {
                loadClientSide();
            }
        }
    }, [
        ssrProps
    ]);
    //Fills edit inputs and pictures with default values
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (listingInfo && editListing) {
            if (type1 === "flatmate") {
                setBio(listingBio);
                setBudget(listingInfo.mainInfo.budget);
                setAddedPersonBoxes(listingPersonBoxes);
                setAddedPersonTags(listingPersonTags);
                setAddedFlatTags(listingFlatTags);
            }
            if (type1 === "flat") {
                setPersonBio(listingPersonBio);
                setFlatBio(listingFlatBio);
                setBudget(listingInfo.mainInfo.price);
                setAddedPersonBoxes(listingPersonBoxes);
                setAddedFlatBoxes(listingFlatBoxes);
                setAddedPersonTags(listingPersonTags);
            }
            setStayTime(listingInfo.mainInfo.stayTime);
            setStartTime(listingInfo.mainInfo.startTime);
        }
    }, [
        editListing,
        listingInfo
    ]);
    // Handle if user sign outs while editing
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (userLoaded && !currentUser) {
            setEditListing(false);
        }
    }, [
        currentUser
    ]);
    //Resets changes if user goes back from editing
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!editListing) {
            setAddedPersonTags(null);
            setAddedFlatTags(null);
            setAddedPersonBoxes(null);
            setAddedFlatBoxes(null);
            setAddedListingImgs([
                "",
                "",
                "",
                "",
                "",
                ""
            ]);
            setAddedPfp(null);
        }
    }, [
        editListing
    ]);
    //Sets listing liked
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentUser && listingFans && listingFans.includes(currentUser.uid)) {
            setListingLiked(true);
        } else {
            setListingLiked(false);
        }
    }, [
        listingFans,
        currentUser
    ]);
    const reloadProps = ()=>{
        setListingName(ssrProps.listingName);
        setListingUsername(ssrProps.listingUsername);
        setListingAge(ssrProps.listingAge);
        setListingGender(ssrProps.listingGender);
        setPfp(ssrProps.listingPfp);
        setListingImgs(ssrProps.listingImgs);
        setListingBio(type1 === "flatmate" ? ssrProps.listingBio : null);
        setListingFlatBio(type1 === "flat" ? ssrProps.listingFlatBio : null);
        setListingPersonBio(type1 === "flat" ? ssrProps.listingPersonBio : null);
        setListingPersonBoxes(JSON.parse(ssrProps.listingPersonBoxes));
        setListingPersonTags(JSON.parse(ssrProps.listingPersonTags));
        setListingFlatBoxes(type1 === "flat" ? JSON.parse(ssrProps.listingFlatBoxes) : null);
        setListingFlatTags(type1 === "flatmate" ? JSON.parse(ssrProps.listingFlatTags) : null);
        setListingPremium(ssrProps.listingPremium);
        setListingFans(ssrProps.listingFans);
    };
    //Functions
    const listingLoad = ()=>{
        setLoading(false);
        setListingInfo(null);
        // If the status is not resolved in any way, there's no reason to continue
        if (ssrProps.status != "success" && ssrProps.status != "client-side") {
            snackBar("Uživatel neexistuje, nebo je jeho inzer\xe1t nedokončen\xfd.", "error");
            return;
        }
        if (ssrProps.status === "client-side" && !currentUser) {
            snackBar("Uživatel neexistuje, nebo je jeho inzer\xe1t nedokončen\xfd.", "error");
            return;
        }
        // SSR props get reloaded when going from listing to listing, but states won't, so we need to reload them
        reloadProps();
        if (cr) setWelcomeDialog(true);
        if (ssrProps.status === "client-side") {
            loadClientSide();
            return;
        }
        setListingInfo(JSON.parse(ssrProps.listingInfo));
        setListingId(id);
        if (currentUser && (ssrProps.listingFriends.includes(currentUser.uid) || currentUser.uid === ssrProps.uid)) {
            getListingContact(id).then((docs)=>{
                setListingContact(docs.docs[0].data());
                setContactLoading(false);
            }).catch((error)=>{
            // setContactLoading(false);
            });
        } else if (userLoaded) {
            setContactLoading(false);
        }
    };
    const checkAccess = (uid)=>{
        if (currentUser && currentUser.uid === uid) {
            return true;
        } else {
            return false;
        }
    };
    //Handles save in the edit
    const handleSave = ()=>{
        setLoading(true);
        if (!stayTime || stayTime == "") {
            snackBar("Pros\xedme vyplňte všechny důležit\xe9 \xfadaje.", "error");
            setLoading(false);
            window.scrollTo(0, 0);
            return;
        }
        if (!startTime || startTime == "") {
            snackBar("Pros\xedme vyplňte všechny důležit\xe9 \xfadaje.", "error");
            setLoading(false);
            window.scrollTo(0, 0);
            return;
        }
        if (!budget || budget < 1000 || budget > 60000) {
            snackBar(`Prosím zadejte správnou hodnotu do ${listingInfo.type === "flatmate" ? "rozpočtu." : "n\xe1jemn\xe9ho."}`);
            setLoading(false);
            window.scrollTo(0, 0);
            return;
        }
        let params;
        if (type1 === "flatmate" || type1 === "flatmate-cr") {
            params = {
                mainInfo: {
                    budget: budget,
                    startTime: startTime,
                    stayTime: stayTime
                },
                personBoxes: addedPersonBoxes,
                personTags: addedPersonTags,
                flatTags: addedFlatTags,
                bio: bio ? bio.trim() : "",
                visible: true
            };
            if (addedPersonBoxes.job) {
                params = {
                    ...params,
                    "queryInfo.job": {
                        employed: addedPersonBoxes.job === "Zaměstnan\xfd",
                        unemployed: addedPersonBoxes.job === "Nezaměstnan\xfd",
                        student: addedPersonBoxes.job === "Student"
                    }
                };
            }
        }
        if (type1 === "flat" || type1 === "flat-cr") {
            params = {
                mainInfo: {
                    price: budget,
                    startTime: startTime,
                    stayTime: stayTime
                },
                personTags: addedPersonTags,
                personBoxes: addedPersonBoxes,
                flatBoxes: addedFlatBoxes,
                flatBio: flatBio ? flatBio.trim() : "",
                personBio: personBio ? personBio.trim() : "",
                visible: true
            };
            if (addedPersonBoxes.job) {
                params = {
                    ...params,
                    "queryInfo.job": {
                        employed: addedPersonBoxes.job === "Zaměstnan\xfd",
                        unemployed: addedPersonBoxes.job === "Nezaměstnan\xfd",
                        student: addedPersonBoxes.job === "Student"
                    }
                };
            }
        }
        const updateListingInfo = {
            listingId: listingId,
            params: params
        };
        updateListing(JSON.stringify(updateListingInfo)).then((response)=>{
            if (addedPfp) {
                return uploadImg(currentUser.uid, addedPfp, "pfp");
            } else {
                return Promise.resolve("No new pfp");
            }
        }).then((response)=>{
            if (addedListingImgs.length) {
                return uploadImg(currentUser.uid, addedListingImgs, "listingImgs");
            } else {
                return Promise.resolve("No new imgs");
            }
        }).then((response)=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            if (!cr) {
                setLoading(false);
                setListingInfo(null);
                setListingBio(null);
                setListingFlatBio(null);
                setListingPersonBio(null);
                setListingPersonBoxes(null);
                setListingPersonTags(null);
                setListingFlatBoxes(null);
                setListingFlatTags(null);
                setEditListing(false);
                snackBar("Inzer\xe1t byl \xfaspěšně upraven.", "success");
                router.push(router.asPath);
                return getListing(listingId);
            } else {
                snackBar("Inzer\xe1t byl \xfaspěšně vytvořen.", "success");
                router.push(`/${listingInfo.type}/${listingId}`);
                return Promise.resolve("response");
            }
        }).then((doc)=>{
            if (!cr) {
                setListingInfo(doc.data());
            }
        }).catch((error)=>{
            setLoading(false);
            snackBar("Něco se pokazilo. Zkuste to pros\xedm později.", "error");
        });
    };
    const handleRequest = ()=>{
        //Loading...
        setContactLoading(true);
        setReqDialogOpen(false);
        //Two people involved
        let reciever = listingInfo;
        let sender;
        //Callable functions
        getUser(currentUser.uid).then((user)=>{
            const requestInfo = {
                sender: user.data(),
                senderUid: user.id,
                reciever: reciever.userInfo,
                recieverListingId: listingId,
                recieverUid: reciever.userInfo.uid,
                recieverType: reciever.type,
                message: requestMessage
            };
            return createRequest(JSON.stringify(requestInfo));
        }).then((res)=>{
            return getListing(id);
        }).then((doc)=>{
            setListingInfo(doc.data());
            setContactLoading(false);
            snackBar("Ž\xe1dost byla odesl\xe1na.", "success");
        }).catch((error)=>{
            setLoading(false);
            setReqDialogOpen(true);
            snackBar("Něco se nepovedlo. Zkuste to pros\xedm později.", "error");
        });
    };
    const handleReport = ()=>{
        const uid = listingInfo.userInfo.uid;
        const username = listingUsername;
        const message = reportMessage;
        const senderUid = currentUser.uid;
        let senderUsername = null;
        if (currentUserInfo) {
            senderUsername = currentUserInfo.mainInfo.username;
        }
        const reportInfo = {
            uid,
            username,
            message,
            listingId,
            senderUid,
            senderUsername
        };
        reportUser(JSON.stringify(reportInfo));
    };
    const handleImgDelete = (type)=>{
        if (type === "pfp") {
            if (addedPfp) {
                setAddedPfp(null);
                return;
            }
            setLoading(true);
            const imageInfo = {
                url: pfp,
                uid: currentUser.uid,
                listingId: listingId
            };
            deleteImgs(JSON.stringify(imageInfo)).then((response)=>{
                setPfp(null);
                setLoading(false);
            }).catch((error)=>{
                setLoading(false);
            });
        }
        if (type === "main") {
            if (addedListingImgs[0]) {
                const imgs = [
                    ...addedListingImgs
                ];
                imgs[0] = "";
                setAddedListingImgs(imgs);
                return;
            }
            setLoading(true);
            const imageInfo = {
                url: listingImgs[0],
                uid: currentUser.uid,
                listingId: listingId
            };
            deleteImgs(JSON.stringify(imageInfo)).then((response)=>{
                const imgs = [
                    ...listingImgs
                ];
                imgs[0] = "";
                setListingImgs(imgs);
                setLoading(false);
            }).catch((error)=>{
                setLoading(false);
            });
        }
    };
    const loadClientSide = ()=>{
        getListing(id).then((doc)=>{
            const docData = doc.data();
            if (!checkAccess(docData.userInfo.uid)) {
                snackBar("Uživatel neexistuje, nebo je jeho inzer\xe1t nedokončen\xfd.", "error");
                return;
            }
            setListingInfo(docData);
            setListingId(doc.id);
            setListingImgs(docData.userInfo.images.listingImgs);
            if (docData.userInfo.images.pfp) {
                setPfp(docData.userInfo.images.pfp);
            }
            //SSR props state
            setListingName(type1 === "flatmate" ? docData.userInfo.username : `${docData.flatBoxes.layout}${docData.flatBoxes.layout ? " " : ""}${docData.flatBoxes.location}`);
            setListingUsername(docData.userInfo.username);
            setListingAge(docData.userInfo.age);
            setListingGender(docData.userInfo.gender);
            setListingBio(type1 === "flatmate" && docData.bio);
            setListingFlatBio(type1 === "flat" && docData.flatBio);
            setListingPersonBio(type1 === "flat" && docData.personBio);
            setListingPersonBoxes(docData.personBoxes);
            setListingPersonTags(docData.personTags);
            setListingFlatBoxes(type1 === "flat" && docData.flatBoxes);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingFlatTags(type1 === "flatmate" && docData.flatTags);
            setListingPremium(docData.userInfo.premium);
            return getListingContact(id);
        }).then((docs)=>{
            setListingContact(docs.docs[0].data());
            setContactLoading(false);
        }).catch((error)=>{
        //
        });
    };
    const value = {
        type: type1,
        cr,
        listingInfo,
        setListingInfo,
        //Edit mode
        editListing,
        setEditListing,
        //ListingId
        listingId,
        setListingId,
        //imgs
        listingImgs,
        setListingImgs,
        pfp,
        setPfp,
        //Listing info states
        listingName,
        setListingName,
        listingUsername,
        setListingUsername,
        listingAge,
        setListingAge,
        listingGender,
        setListingGender,
        listingBio,
        setListingBio,
        listingFlatBio,
        setListingFlatBio,
        listingPersonBio,
        setListingPersonBio,
        listingPersonBoxes,
        setListingPersonBoxes,
        listingPersonTags,
        setListingPersonTags,
        listingFlatBoxes,
        setListingFlatBoxes,
        listingFlatTags,
        setListingFlatTags,
        listingPremium,
        setListingPremium,
        listingFans,
        setListingFans,
        listingLiked,
        setListingLiked,
        //Edit mode info storage
        stayTime,
        setStayTime,
        startTime,
        setStartTime,
        budget,
        setBudget,
        //Dialogs and overlays
        personTagOverlay,
        setPersonTagOverlay,
        flatTagOverlay,
        setFlatTagOverlay,
        flatBoxerOverlay,
        setFlatBoxerOverlay,
        personBoxerOverlay,
        setPersonBoxerOverlay,
        reqDialogOpen,
        setReqDialogOpen,
        reportDialog,
        setReportDialog,
        sliderDialog,
        setSliderDialog,
        requestMessage,
        setRequestMessage,
        reportMessage,
        setReportMessage,
        contactLoading,
        setContactLoading,
        welcomeDialog,
        setWelcomeDialog,
        galleryInput,
        setGalleryInput,
        //Added values
        addedListingImgs,
        setAddedListingImgs,
        addedPfp,
        setAddedPfp,
        addedPersonTags,
        setAddedPersonTags,
        addedFlatTags,
        setAddedFlatTags,
        addedPersonBoxes,
        setAddedPersonBoxes,
        addedFlatBoxes,
        setAddedFlatBoxes,
        //Added bios
        bio,
        setBio,
        flatBio,
        setFlatBio,
        personBio,
        setPersonBio,
        //Functions
        reloadProps,
        handleSave,
        handleRequest,
        handleReport,
        handleImgDelete,
        loadClientSide,
        handleRequest,
        listingContact
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListingContext.Provider, {
        value: value,
        children: children
    }));
};

});

/***/ })

};
;