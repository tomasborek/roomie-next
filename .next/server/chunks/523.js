"use strict";
exports.id = 523;
exports.ids = [523];
exports.modules = {

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


/***/ }),

/***/ 742:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useStorage),
/* harmony export */   "X": () => (/* binding */ StorageProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5451);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_storage__WEBPACK_IMPORTED_MODULE_3__, _Firebase__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_storage__WEBPACK_IMPORTED_MODULE_3__, _Firebase__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




const StorageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useStorage = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StorageContext);
};
const StorageProvider = ({ children  })=>{
    const uploadImg = (uid, file, type)=>{
        if (type === "pfp") {
            return uploadPfp(file, uid);
        }
        if (type === "listingImgs") {
            return uploadListingImgs(file, uid);
        }
    };
    const uploadPfp = (file, uid)=>{
        return new Promise((resolve, reject)=>{
            let format;
            if (file.type === "image/jpeg") format = ".jpg";
            if (file.type === "image/png") format = ".png";
            if (format == null) return;
            const pfpRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .storage */ .tO, `users/${uid}/pfps/pfp${format}`);
            const metadata = {
                cacheControl: 'public,max-age=0'
            };
            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(pfpRef, file, metadata).then((response)=>{
                resolve(response);
            }).catch((error)=>{
                reject(error);
            });
        });
    };
    const uploadListingImgs = (files, uid)=>{
        // Describes the format of an uploaded image (jpg or png)
        let format;
        let storageRefs = [];
        // In the passed array, there might be undefined fields, we need to filter it out of that and store it in valid files
        let validFiles = [];
        // We set cache control for the images so the updating is quick
        const metadata = {
            cacheControl: 'public,max-age=0'
        };
        files.forEach((file, index)=>{
            // Checks if the file isn't undefined
            if (file) {
                if (file.type === "image/jpeg") format = ".jpg";
                if (file.type === "image/png") format = ".png";
                if (format) {
                    const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_Firebase__WEBPACK_IMPORTED_MODULE_2__/* .storage */ .tO, `/users/${uid}/listingImgs/${index}${format}`);
                    storageRefs.push(storageRef);
                    validFiles.push(file);
                }
            }
        });
        return Promise.all(validFiles.map((file, index)=>{
            return (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(storageRefs[index], validFiles[index], metadata);
        }));
    };
    const value = {
        uploadImg
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StorageContext.Provider, {
        value: value,
        children: children
    }));
};

});

/***/ })

};
;