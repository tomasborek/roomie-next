"use strict";
exports.id = 18;
exports.ids = [18];
exports.modules = {

/***/ 1018:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth),
/* harmony export */   "H": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5451);
/* harmony import */ var _DbContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6934);
/* harmony import */ var _FunctionsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1614);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase__WEBPACK_IMPORTED_MODULE_2__, _firebase_auth__WEBPACK_IMPORTED_MODULE_5__, _FunctionsContext__WEBPACK_IMPORTED_MODULE_4__, _DbContext__WEBPACK_IMPORTED_MODULE_3__]);
([_Firebase__WEBPACK_IMPORTED_MODULE_2__, _firebase_auth__WEBPACK_IMPORTED_MODULE_5__, _FunctionsContext__WEBPACK_IMPORTED_MODULE_4__, _DbContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//Firebase


//Context


//Auth imports

const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
//UseAuth()
const useAuth = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
};
function AuthProvider(props) {
    //Auth states
    const { 0: currentUser1 , 1: setCurrentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: userLoaded , 1: setUserLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: currentUserInfo , 1: setCurrentUserInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { getUser  } = (0,_DbContext__WEBPACK_IMPORTED_MODULE_3__/* .useDb */ .s)();
    const { callable  } = (0,_FunctionsContext__WEBPACK_IMPORTED_MODULE_4__/* .useFunctions */ .d)();
    const updateActivity = callable("userUpdates-updateActivity");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        updateCurrentUserData(currentUser1);
    }, [
        currentUser1
    ]);
    //Auth function
    //Create new user
    const register = (email, password)=>{
        return (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_5__.createUserWithEmailAndPassword)(_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8, email, password);
    };
    const signIn = (email, password)=>{
        return (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signInWithEmailAndPassword)(_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8, email, password);
    };
    const logIn = (email, password)=>{
        return (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signInWithEmailAndPassword)(_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8, email, password);
    };
    const logOut = ()=>{
        return (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signOut)(_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8);
    };
    const delUser = (user)=>{
        return (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_5__.deleteUser)(user);
    };
    const updateCurrentUserData = (currentUser)=>{
        return new Promise((resolve, reject)=>{
            if (currentUser) {
                if (!currentUserInfo) {
                    return getUser(currentUser.uid).then((doc)=>{
                        setCurrentUserInfo(doc.data());
                        updateActivity(JSON.stringify({
                            listingId: doc.data().listing.id,
                            string: "Hi"
                        }));
                        resolve("Success");
                    }).catch((error)=>{
                        reject(error);
                    });
                } else {
                    reject("Current user info is already set.");
                }
            } else {
                resolve("There is no current user.");
                setCurrentUserInfo(null);
            }
        });
    };
    const changePassword = (user, newPassword)=>{
        return (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_5__.updatePassword)(user, newPassword);
    };
    const reAuth = (user, password)=>{
        const credentials = _firebase_auth__WEBPACK_IMPORTED_MODULE_5__.EmailAuthProvider.credential(user.email, password);
        return (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_5__.reauthenticateWithCredential)(user, credentials);
    };
    //Use Effect
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_5__.onAuthStateChanged)(_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8, (user)=>{
            setCurrentUser(user);
            setUserLoaded(true);
        });
    }, []);
    const value = {
        register,
        signIn,
        logOut,
        logIn,
        delUser,
        changePassword,
        currentUser: currentUser1,
        currentUserInfo,
        userLoaded,
        reAuth,
        updateCurrentUserData
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: value,
        children: props.children
    }));
}

});

/***/ }),

/***/ 6934:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ useDb),
/* harmony export */   "W": () => (/* binding */ DbProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5451);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _Firebase__WEBPACK_IMPORTED_MODULE_2__]);
([_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, _Firebase__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



//Firestore imports

const DbContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useDb = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DbContext);
};
function DbProvider(props) {
    //Functions
    //User
    const updateUser = (uid, params)=>{
        return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "users", uid), params);
    };
    const getUser = (uid)=>{
        return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "users", uid));
    };
    const createListingQuery = ({ type , page , parameters , listings , premiumListings , newListings , newPremiumListings ,  })=>{
        const colRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "listings");
        if (type === "firstQuery") {
            if (page === "first") {
                return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, ...parameters, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("userInfo.premium", "==", true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(8));
            } else if (page === "next") {
                if (!listings.length) {
                    return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, ...parameters, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("userInfo.premium", "==", true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(8), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.startAfter)(premiumListings[premiumListings.length - 1]));
                } else if (listings.length) {
                    return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, ...parameters, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("userInfo.premium", "==", false), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(8), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.startAfter)(listings[listings.length - 1]));
                }
            } else if (page === "prev") {
                if (!premiumListings.length) {
                    return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, ...parameters, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("userInfo.premium", "==", false), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limitToLast)(8), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.endBefore)(listings[0]));
                } else if (premiumListings.length) {
                    return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, ...parameters, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("userInfo.premium", "==", true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limitToLast)(8), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.endBefore)(premiumListings[0]));
                }
            }
        } else if (type === "secondQuery") {
            if (page === "first") {
                return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, ...parameters, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("userInfo.premium", "==", false), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(8 - newPremiumListings.length));
            } else if (page === "next") {
                return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, ...parameters, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("userInfo.premium", "==", false), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(8 - newPremiumListings.length));
            } else if (page === "prev") {
                return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, ...parameters, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("userInfo.premium", "==", true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limitToLast)(8 - newListings.length));
            }
        }
    };
    const createRequestQuery = ({ type , requestType , page , uid , requests , premiumRequests , newRequests , newPremiumRequests ,  })=>{
        const colRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "users", uid, requestType);
        if (requestType === "sentRequests") {
            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc", (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(10)));
        }
        if (type === "firstQuery") {
            if (page === "first") {
                return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("premium", "==", true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(10));
            } else if (page === "next") {
                if (!listings.length) {
                    return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("premium", "==", true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(10), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.startAfter)(premiumRequests[premiumRequests.length - 1]));
                } else if (listings.length) {
                    return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("premium", "==", false), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(10), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.startAfter)(requests[requests.length - 1]));
                }
            } else if (page === "prev") {
                if (!premiumListings.length) {
                    return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("premium", "==", false), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limitToLast)(10), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.endBefore)(requests[0]));
                } else if (premiumListings.length) {
                    return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("premium", "==", true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limitToLast)(10), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.endBefore)(premiumRequests[0]));
                }
            }
        } else if (type === "secondQuery") {
            if (page === "first") {
                return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("premium", "==", false), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(10 - newPremiumRequests.length));
            } else if (page === "next") {
                return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("premium", "==", false), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(10 - newPremiumRequests.length));
            } else if (page === "prev") {
                return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("premium", "==", true), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limitToLast)(10 - newRequests.length));
            }
        }
    };
    //Listings
    const getListings = (type, page, listings, premiumListings, filter)=>{
        let parameters = [
            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("type", "==", type),
            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("visible", "==", true),
            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("userInfo.emailVerified", "==", true),
            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("hiddenByUser", "==", false), 
        ];
        let newPremiumListings = [];
        let newListings = [];
        let q1;
        let q2;
        const queryInfo = {
            page,
            parameters,
            listings,
            premiumListings,
            newListings,
            newPremiumListings
        };
        if (Object.keys(filter).length) {
            if (type === "flatmate") {
                if (filter.location) {
                    if (filter.location === "Praha") {
                        parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("queryInfo.prague", "==", true));
                    } else {
                        parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("flatTags.location", "==", filter.location));
                    }
                }
                if (filter.gender) {
                    let originalItems = [
                        "Muž",
                        "Žena",
                        "Jin\xe9"
                    ];
                    if (filter.gender.length === 2) {
                        // The max length of a filter is 3, that means if 2 are selected one is not selecred, this variable stores it
                        let notSelectedItem;
                        // We get the not selected item by removing the two selected ones from the original items
                        filter.gender.forEach((item)=>{
                            originalItems.splice(originalItems.indexOf(item), 1);
                            notSelectedItem = originalItems[0];
                        });
                        // The filter names are in format that can be showed to user's, but in database it's not like that, so we have to convert it first
                        switch(notSelectedItem){
                            case "Muž":
                                notSelectedItem = "male";
                                break;
                            case "Žena":
                                notSelectedItem = "female";
                                break;
                            case "Jin\xe9":
                                notSelectedItem = "other";
                                break;
                            default:
                                break;
                        }
                        parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(`queryInfo.gender.${notSelectedItem}`, "==", false));
                    } else {
                        const selectedItem = filter.gender[0];
                        switch(selectedItem){
                            case "Muž":
                                selectedItem = "male";
                                break;
                            case "Žena":
                                selectedItem = "female";
                                break;
                            case "Jin\xe9":
                                selectedItem = "other";
                                break;
                            default:
                                break;
                        }
                        parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(`queryInfo.gender.${selectedItem}`, "==", true));
                    }
                }
                if (filter.age) {
                    let originalItems = [
                        "18-25",
                        "26-34",
                        "35+"
                    ];
                    if (filter.age.length === 2) {
                        // The max length of a filter is 3, that means if 2 are selected one is not selecred, this variable stores it
                        let notSelectedItem;
                        // We get the not selected item by removing the two selected ones from the original items
                        filter.age.forEach((item)=>{
                            originalItems.splice(originalItems.indexOf(item), 1);
                            notSelectedItem = originalItems[0];
                        });
                        switch(notSelectedItem){
                            case "18-25":
                                notSelectedItem = "firstRange";
                                break;
                            case "26-34":
                                notSelectedItem = "secondRange";
                                break;
                            case "35+":
                                notSelectedItem = "thirdRange";
                                break;
                            default:
                                break;
                        }
                        parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(`queryInfo.age.${notSelectedItem}`, "==", false));
                    } else {
                        const selectedItem = filter.age[0];
                        switch(selectedItem){
                            case "18-25":
                                selectedItem = "firstRange";
                                break;
                            case "26-34":
                                selectedItem = "secondRange";
                                break;
                            case "35+":
                                selectedItem = "thirdRange";
                                break;
                            default:
                                break;
                        }
                        parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(`queryInfo.age.${selectedItem}`, "==", true));
                    }
                }
                if (filter.smoking) {
                    parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("personBoxes.smoking", "==", filter.smoking));
                }
                if (filter.job) {
                    let originalItems = [
                        "Zaměstnan\xfd",
                        "Nezaměstnan\xfd",
                        "Student"
                    ];
                    if (filter.job.length === 2) {
                        // The max length of a filter is 3, that means if 2 are selected one is not selecred, this variable stores it
                        let notSelectedItem;
                        // We get the not selected item by removing the two selected ones from the original items
                        filter.job.forEach((item)=>{
                            originalItems.splice(originalItems.indexOf(item), 1);
                            notSelectedItem = originalItems[0];
                        });
                        switch(notSelectedItem){
                            case "Zaměstnan\xfd":
                                notSelectedItem = "employed";
                                break;
                            case "Nezaměstnan\xfd":
                                notSelectedItem = "unemployed";
                                break;
                            case "Student":
                                notSelectedItem = "student";
                                break;
                            default:
                                break;
                        }
                        parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(`queryInfo.job.${notSelectedItem}`, "==", false));
                    } else {
                        const selectedItem = filter.job[0];
                        switch(selectedItem){
                            case "Zaměstnan\xfd":
                                selectedItem = "employed";
                                break;
                            case "Nezaměstnan\xfd":
                                selectedItem = "unemployed";
                                break;
                            case "Student":
                                selectedItem = "student";
                                break;
                            default:
                                break;
                        }
                        parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(`queryInfo.job.${selectedItem}`, "==", true));
                    }
                }
            }
            if (type === "flat") {
                if (filter.location) {
                    if (filter.location === "Praha") {
                        parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("queryInfo.prague", "==", true));
                    } else {
                        parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("flatBoxes.location", "==", filter.location));
                    }
                }
                if (filter.layout) {
                    parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("flatBoxes.layout", "==", filter.layout));
                }
                if (filter.petAllowed) {
                    let petAllowed = filter.petAllowed;
                    switch(petAllowed){
                        case "Mazl\xedčci povoleno":
                            petAllowed = "Povoleno";
                            break;
                        case "Mazl\xedčci nepovoleno":
                            petAllowed = "Nepovoleno";
                            break;
                        default:
                            break;
                    }
                    console.log(`where ${petAllowed}`);
                    parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("flatBoxes.petAllowed", "==", petAllowed));
                }
                if (filter.smokingAllowed) {
                    let smokingAllowed = filter.smokingAllowed;
                    switch(smokingAllowed){
                        case "Kouřen\xed povoleno":
                            smokingAllowed = "Povoleno";
                            break;
                        case "Kouřen\xed nepovoleno":
                            smokingAllowed = "Nepovoleno";
                            break;
                        default:
                            break;
                    }
                    parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("flatBoxes.smokingAllowed", "==", smokingAllowed));
                }
                if (filter.internet) {
                    let internet = filter.internet;
                    switch(internet){
                        case "Internet":
                            internet = "Ano";
                            break;
                        case "Bez internetu":
                            internet = "Ne";
                            break;
                        default:
                            break;
                    }
                    parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("flatBoxes.internet", "==", internet));
                }
                if (filter.elevator) {
                    let elevator = filter.elevator;
                    switch(elevator){
                        case "V\xfdtah":
                            elevator = "Ano";
                            break;
                        case "Bez v\xfdtahu":
                            elevator = "Ne";
                            break;
                        default:
                            break;
                    }
                    parameters.push((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("flatBoxes.elevator", "==", elevator));
                }
            }
        }
        q1 = createListingQuery({
            ...queryInfo,
            type: "firstQuery"
        });
        return new Promise((resolve, reject)=>{
            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q1).then((docs)=>{
                if (page === "first") {
                    newPremiumListings = docs.docs;
                } else if (page === "next") {
                    if (listings.length) {
                        newListings = docs.docs;
                    } else {
                        newPremiumListings = docs.docs;
                    }
                } else if (page === "prev") {
                    if (premiumListings.length) {
                        newPremiumListings = docs.docs;
                    } else {
                        newListings = docs.docs;
                    }
                }
                queryInfo.newPremiumListings = newPremiumListings;
                queryInfo.newListings = newListings;
                if (docs.docs.length === 8 || page === "next" && listings.length || page === "prev" && premiumListings.length) {
                    resolve({
                        newPremiumListings,
                        newListings
                    });
                    return;
                }
                q2 = createListingQuery({
                    ...queryInfo,
                    type: "secondQuery"
                });
                return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q2);
            }).then((docs2)=>{
                if (page === "prev") {
                    newPremiumListings = docs2.docs;
                } else {
                    newListings = docs2.docs;
                }
                resolve({
                    newPremiumListings,
                    newListings
                });
            }).catch((error)=>{
                reject(error);
            });
        });
    };
    const getListing = (id)=>{
        return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "listings", id));
    };
    const getListingContact = (id)=>{
        return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "listings", id, "contact"));
    };
    const getListingByUser = (uid)=>{
        const q = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "listings"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)("userInfo.uid", "==", uid));
        return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);
    };
    //Requests and friends
    const getRequests = (type, uid, page, requests, premiumRequests)=>{
        let newPremiumRequests = [];
        let newRequests = [];
        let q1;
        let q2;
        const queryInfo = {
            page,
            requestType: type,
            uid,
            requests,
            premiumRequests,
            newRequests,
            newPremiumRequests
        };
        q1 = createRequestQuery({
            ...queryInfo,
            type: "firstQuery"
        });
        return new Promise((resolve, reject)=>{
            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q1).then((docs)=>{
                if (type === "sentRequests") {
                    newRequests = docs.docs;
                } else {
                    if (page === "first") {
                        newPremiumRequests = docs.docs;
                    } else if (page === "next") {
                        if (requests.length) {
                            newRequests = docs.docs;
                        } else {
                            newPremiumRequests = docs.docs;
                        }
                    } else if (page === "prev") {
                        if (premiumRequests.length) {
                            newPremiumRequests = docs.docs;
                        } else {
                            newRequests = docs.docs;
                        }
                    }
                }
                queryInfo.newPremiumRequests = newPremiumRequests;
                queryInfo.newRequests = newRequests;
                if (docs.docs.length === 10 || page === "next" && listings.length || page === "prev" && premiumRequests.length || type === "sentRequests") {
                    resolve({
                        newPremiumRequests,
                        newRequests
                    });
                    return;
                }
                q2 = createRequestQuery({
                    ...queryInfo,
                    type: "secondQuery"
                });
                return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q2);
            }).then((docs2)=>{
                if (page === "prev") {
                    newPremiumRequests = docs2.docs;
                } else {
                    newRequests = docs2.docs;
                }
                console.log("did both");
                resolve({
                    newPremiumRequests,
                    newRequests
                });
            }).catch((error)=>{
                reject(error);
            });
        });
    };
    //Notifications
    const getNotifications = (uid)=>{
        const colRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "users", uid, "notifications");
        const q = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(9));
        return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);
    };
    //Friends
    const getFriends = (uid, page, friends)=>{
        const colRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "users", uid, "friends");
        if (page === "first") {
            const q = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(10));
            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);
        }
        if (page === "next") {
            const q = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(10), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.startAfter)(friends[friends.length - 1]));
            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);
        }
        if (page === "prev") {
            const q = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.endBefore)(friends[0]), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limitToLast)(10));
            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);
        }
    };
    const getLiked = (uid, page, liked)=>{
        const colRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_Firebase__WEBPACK_IMPORTED_MODULE_2__.db, "users", uid, "likedListings");
        if (page === "first") {
            const q = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(10));
            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);
        }
        if (page === "next") {
            const q = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(10), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.startAfter)(liked[liked.length - 1]));
            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);
        }
        if (page === "prev") {
            const q = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(colRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)("timeStamp", "desc"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.endBefore)(liked[0]), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limitToLast)(10));
            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);
        }
    };
    //Value
    const value = {
        getUser,
        updateUser,
        getListings,
        getListing,
        getListingContact,
        getListingByUser,
        getRequests,
        getNotifications,
        getFriends,
        getLiked
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DbContext.Provider, {
        value: value,
        children: props.children
    }));
}

});

/***/ })

};
;