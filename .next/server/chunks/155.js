"use strict";
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 6155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useExplore),
/* harmony export */   "Q": () => (/* binding */ ExploreProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ExploreContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useExplore = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ExploreContext);
};
const ExploreProvider = ({ children  })=>{
    const { 0: flatListings , 1: setFlatListings  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: flatmateListings , 1: setFlatmateListings  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: flatSnaps , 1: setFlatSnaps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: flatmateSnaps , 1: setFlatmateSnaps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: premiumFlatmateSnaps , 1: setPremiumFlatmateSnaps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: premiumFlatSnaps , 1: setPremiumFlatSnaps  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: activeFilters , 1: setActiveFilters  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: flatmatePage , 1: setFlatmatePage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: flatPage , 1: setFlatPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: currentVariant , 1: setCurrentVariant  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const value = {
        flatListingsValue: [
            flatListings,
            setFlatListings
        ],
        flatmateListingsValue: [
            flatmateListings,
            setFlatmateListings
        ],
        flatSnapsValue: [
            flatSnaps,
            setFlatSnaps
        ],
        flatmateSnapsValue: [
            flatmateSnaps,
            setFlatmateSnaps
        ],
        premiumFlatSnapsValue: [
            premiumFlatSnaps,
            setPremiumFlatSnaps
        ],
        premiumFlatmateSnapsValue: [
            premiumFlatmateSnaps,
            setPremiumFlatmateSnaps
        ],
        activeFiltersValue: [
            activeFilters,
            setActiveFilters
        ],
        flatmatePageValue: [
            flatmatePage,
            setFlatmatePage
        ],
        flatPageValue: [
            flatPage,
            setFlatPage
        ],
        currentVariantValue: [
            currentVariant,
            setCurrentVariant
        ]
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExploreContext.Provider, {
        value: value,
        children: children
    }));
};


/***/ })

};
;