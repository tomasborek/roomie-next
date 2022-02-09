"use strict";
exports.id = 900;
exports.ids = [900];
exports.modules = {

/***/ 4900:
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


//Framer

//Components
//Mui

const LocationDropdown = ({ setLocation , location  })=>{
    //Variables
    //State
    const { 0: search , 1: setSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: fetching , 1: setFetching  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: dropdownActive , 1: setDropdownActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isTyping , 1: setIsTyping  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //Refs
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(location);
    //Variants
    const optionsVariants = {
        active: {
            maxHeight: "20vh",
            opacity: 1,
            display: "block"
        },
        disabled: {
            maxHeight: 0,
            opacity: 0,
            display: "none"
        },
        transition: {
            duration: 1
        }
    };
    const iconVariants = {
        active: {
            rotate: 180
        },
        disabled: {
            rotate: 0
        }
    };
    //Useffect
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let searchedTerm = search.toLowerCase();
        if (isTyping === true) return;
        if (search === "") {
            setLocation("");
            setDropdownActive(false);
            return;
        }
        ;
        let results = [];
        if (searchedTerm.includes("prah")) {
            if (searchedTerm.includes("praha")) {
                searchedTerm = searchedTerm.replace("praha", "Prague");
            } else {
                searchedTerm = searchedTerm.replace("prah", "Prag");
            }
        }
        setDropdownActive(true);
        setFetching(true);
        fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&countryIds=cz&namePrefix=${searchedTerm}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                "x-rapidapi-key": "055a115952msh3056abcfce60747p145c08jsn61e5785761bb"
            }
        }).then((response)=>{
            return response.json();
        }).then((res)=>{
            res.data.forEach((doc)=>{
                let cityName = doc.name;
                if (cityName.includes("Prague")) cityName = cityName.replace("Prague", "Praha");
                results = [
                    ...results,
                    cityName
                ];
            });
            setFetching(false);
            setOptions(results);
        }).catch((error)=>{
        //
        });
    }, [
        isTyping
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (location) {
            inputRef.current.value = location;
            setSearch(location);
        } else {
            inputRef.current.value = "";
            setSearch("");
        }
    }, [
        location
    ]);
    const typing = ()=>{
        setIsTyping(true);
        setTimeout(()=>{
            setIsTyping(false);
        }, 2000);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "location-dropdown",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "location-dropdown-input",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        maxLength: 30,
                        ref: inputRef,
                        onChange: (e)=>{
                            typing();
                            setSearch(e.target.value);
                        },
                        type: "text"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        value: search,
                        style: {
                            color: search && search == location ? "green" : search && search != location ? "red" : !search ? "#333" : ""
                        },
                        className: `fas fa-${search && search == location ? "check" : search && search != location ? "times" : !search ? "search" : ""}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                variants: optionsVariants,
                animate: dropdownActive ? "active" : "",
                initial: "disabled",
                transition: "transition",
                className: "location-dropdown-options",
                children: [
                    !fetching && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        children: options.length > 0 ? options.map((option, id)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                onClick: ()=>{
                                    setLocation(option);
                                    setSearch(option);
                                    setDropdownActive(false);
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: option
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fas fa-plus"
                                    })
                                ]
                            }, id)
                        ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "options-not-found",
                            children: "Nic nebylo nalezeno."
                        })
                    }),
                    fetching && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "location-dropdown-loading",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CircularProgress, {})
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationDropdown);

});

/***/ })

};
;