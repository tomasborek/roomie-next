"use strict";
exports.id = 720;
exports.ids = [720];
exports.modules = {

/***/ 9624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tag_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9918);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);



//Components
//MUI

const Boxer = ({ variant , existingBoxes , addedBoxes , setAddedBoxes , setBoxerOverlay  })=>{
    //Person boxes
    const { 0: smokingBox , 1: setSmokingBox  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: petBox , 1: setPetBox  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: jobBox , 1: setJobBox  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: childrenBox , 1: setChildrenBox  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    //Flat boxes
    const { 0: layoutBox , 1: setLayoutBox  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: levelBox , 1: setLevelBox  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: petAllowedBox , 1: setPetAllowedBox  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: smokingAllowedBox , 1: setSmokingAllowedBox  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: locationBox , 1: setLocationBox  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: sizeBox , 1: setSizeBox  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: elevatorBox , 1: setElevatorBox  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: internetBox , 1: setInternetBox  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    //Functions
    const handleSave = ()=>{
        if (variant === "person") {
            setAddedBoxes({
                smoking: smokingBox,
                job: jobBox,
                children: childrenBox,
                pet: petBox
            });
        } else if (variant === "flat") {
            setAddedBoxes({
                layout: layoutBox,
                level: levelBox,
                petAllowed: petAllowedBox,
                smokingAllowed: smokingAllowedBox,
                size: sizeBox,
                location: locationBox,
                elevator: elevatorBox,
                internet: internetBox
            });
        }
        setBoxerOverlay(false);
    };
    const fillAddedBoxes = ()=>{
        if (variant === "person") {
            setAddedBoxes(existingBoxes);
            existingBoxes.smoking && setSmokingBox(existingBoxes.smoking);
            existingBoxes.pet && setPetBox(existingBoxes.pet);
            existingBoxes.children && setChildrenBox(existingBoxes.children);
            existingBoxes.job && setJobBox(existingBoxes.job);
        }
        if (variant === "flat") {
            setAddedBoxes(existingBoxes);
            existingBoxes.layout && setLayoutBox(existingBoxes.layout);
            existingBoxes.level && setLevelBox(existingBoxes.level);
            existingBoxes.petAllowed && setPetAllowedBox(existingBoxes.petAllowed);
            existingBoxes.smokingAllowed && setSmokingAllowedBox(existingBoxes.smokingAllowed);
            existingBoxes.location && setLocationBox(existingBoxes.location);
            existingBoxes.size && setSizeBox(existingBoxes.size);
            existingBoxes.internet && setInternetBox(existingBoxes.internet);
            existingBoxes.elevator && setElevatorBox(existingBoxes.elevator);
        }
    };
    //Fills added boxes once existingBoxes are fetched
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (existingBoxes && !addedBoxes) {
            fillAddedBoxes();
        }
    }, [
        existingBoxes
    ]);
    //Return
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "boxer",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                onClick: ()=>setBoxerOverlay(false)
                ,
                className: "boxer-close fas fa-times"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "boxer-header",
                children: variant === "person" ? "Přidat info o sobě..." : "Přidat info o bydlen\xed..."
            }),
            variant === "person" && existingBoxes && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "boxer-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Kouřen\xed"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-boxes",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: smokingBox == "Kuř\xe1k",
                                        onClick: ()=>setSmokingBox(smokingBox === "Kuř\xe1k" ? "" : "Kuř\xe1k")
                                        ,
                                        variant: "box",
                                        icon: "smoking",
                                        children: "Kuř\xe1k"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: smokingBox == "Nekuř\xe1k",
                                        onClick: ()=>setSmokingBox(smokingBox === "Nekuř\xe1k" ? "" : "Nekuř\xe1k")
                                        ,
                                        variant: "box",
                                        icon: "smoking",
                                        children: "Nekuř\xe1k"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "boxer-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Mazl\xedček"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-boxes",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: petBox == "Pes",
                                        onClick: ()=>setPetBox(petBox === "Pes" ? "" : "Pes")
                                        ,
                                        variant: "box",
                                        icon: "dog",
                                        children: "Pes"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: petBox == "Kočka",
                                        onClick: ()=>setPetBox(petBox === "Kočka" ? "" : "Kočka")
                                        ,
                                        variant: "box",
                                        icon: "dog",
                                        children: "Kočka"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: petBox == "Jin\xe9",
                                        onClick: ()=>setPetBox(petBox === "Jin\xfd" ? "" : "Jin\xe9")
                                        ,
                                        variant: "box",
                                        icon: "dog",
                                        children: "Jin\xe9"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: petBox == "Ž\xe1dn\xfd",
                                        onClick: ()=>setPetBox(petBox === "Ž\xe1dn\xfd" ? "" : "Ž\xe1dn\xfd")
                                        ,
                                        variant: "box",
                                        icon: "dog",
                                        children: "Ž\xe1dn\xfd"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "boxer-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Zaměstn\xe1n\xed"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-boxes",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: jobBox == "Zaměstnan\xfd",
                                        onClick: ()=>setJobBox(jobBox === "Zaměstnan\xfd" ? "" : "Zaměstnan\xfd")
                                        ,
                                        variant: "box",
                                        icon: "graduation-cap",
                                        children: "Zaměstnan\xfd"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: jobBox == "Nezaměstnan\xfd",
                                        onClick: ()=>setJobBox(jobBox === "Nezaměstnan\xfd" ? "" : "Nezaměstnan\xfd")
                                        ,
                                        variant: "box",
                                        icon: "graduation-cap",
                                        children: "Nezaměstnan\xfd"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: jobBox == "Student",
                                        onClick: ()=>setJobBox(jobBox === "Student" ? "" : "Student")
                                        ,
                                        variant: "box",
                                        icon: "graduation-cap",
                                        children: "Student"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "boxer-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Děti"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-boxes",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: childrenBox == "Ano",
                                        onClick: ()=>setChildrenBox(childrenBox === "Ano" ? "" : "Ano")
                                        ,
                                        variant: "box",
                                        icon: "baby-carriage",
                                        children: "Ano"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: childrenBox == "Ne",
                                        onClick: ()=>setChildrenBox(childrenBox === "Ne" ? "" : "Ne")
                                        ,
                                        variant: "box",
                                        icon: "baby-carriage",
                                        children: "Ne"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "boxer-button",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>handleSave()
                            ,
                            className: "main-btn",
                            children: "Uložit info"
                        })
                    })
                ]
            }),
            variant === "flat" && existingBoxes && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "boxer-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Dispozice"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-boxes",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                    fullWidth: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {
                                            id: "demo-simple-select-label",
                                            children: "Dispozice"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                            label: "Dispozice",
                                            onChange: (e)=>setLayoutBox(e.target.value)
                                            ,
                                            defaultValue: existingBoxes.layout != "" && existingBoxes.layout,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "1+1",
                                                    children: "1+1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "1+kk",
                                                    children: "1+kk"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "2+1",
                                                    children: "2+1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "2+kk",
                                                    children: "2+kk"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "3+1",
                                                    children: "3+1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "3+kk",
                                                    children: "3+kk"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "4+1",
                                                    children: "4+1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
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
                        className: "boxer-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Podlaž\xed"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-boxes",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                    fullWidth: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {
                                            id: "demo-simple-select-label",
                                            children: "Podlaž\xed"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                            label: "Podlaž\xed",
                                            onChange: (e)=>setLevelBox(e.target.value)
                                            ,
                                            defaultValue: existingBoxes.level ? existingBoxes.level : "",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "1",
                                                    children: "1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "2",
                                                    children: "2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "3",
                                                    children: "3"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "4",
                                                    children: "4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "5",
                                                    children: "5"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "6",
                                                    children: "6"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "7",
                                                    children: "7"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "8",
                                                    children: "8"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "9",
                                                    children: "9"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                    value: "10",
                                                    children: "10+"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "boxer-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Velikost"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-boxes",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "boxes-size-input",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            value: sizeBox,
                                            onChange: (e)=>setSizeBox(e.target.value)
                                            ,
                                            maxLength: 5
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "m",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                                    children: "2"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "boxer-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "V\xfdtah"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-boxes",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: elevatorBox == "Ano",
                                        onClick: ()=>setElevatorBox(elevatorBox === "Ano" ? "" : "Ano")
                                        ,
                                        variant: "box",
                                        icon: "caret-square-up",
                                        children: "Ano"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: elevatorBox == "Ne",
                                        onClick: ()=>setElevatorBox(elevatorBox === "Ne" ? "" : "Ne")
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
                        className: "boxer-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Internet"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-boxes",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: internetBox == "Ano",
                                        onClick: ()=>setInternetBox(internetBox === "Ano" ? "" : "Ano")
                                        ,
                                        variant: "box",
                                        icon: "wifi",
                                        children: "Ano"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: internetBox == "Ne",
                                        onClick: ()=>setInternetBox(internetBox === "Ne" ? "" : "Ne")
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
                        className: "boxer-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Mazl\xedčci"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-boxes",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: petAllowedBox == "Povoleno",
                                        onClick: ()=>setPetAllowedBox(petAllowedBox === "Povoleno" ? "" : "Povoleno")
                                        ,
                                        variant: "box",
                                        icon: "dog",
                                        children: "Povoleno"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: petAllowedBox == "Nepovoleno",
                                        onClick: ()=>setPetAllowedBox(petAllowedBox === "Nepovoleno" ? "" : "Nepovoleno")
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
                        className: "boxer-section",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-header",
                                children: "Kouřen\xed"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-boxes",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: smokingAllowedBox == "Povoleno",
                                        onClick: ()=>setSmokingAllowedBox(smokingAllowedBox === "Povoleno" ? "" : "Povoleno")
                                        ,
                                        variant: "box",
                                        icon: "smoking",
                                        children: "Povoleno"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        active: smokingAllowedBox == "Nepovoleno",
                                        onClick: ()=>setSmokingAllowedBox(smokingAllowedBox === "Nepovoleno" ? "" : "Nepovoleno")
                                        ,
                                        variant: "box",
                                        icon: "smoking",
                                        children: "Nepovoleno"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "boxer-button",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>handleSave()
                            ,
                            className: "main-btn",
                            children: "Uložit info"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Boxer);


/***/ }),

/***/ 1750:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1614);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1018);
/* harmony import */ var _contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5182);
/* harmony import */ var _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2882);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__, _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_2__, _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_5__]);
([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__, _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_2__, _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//Contexts




//MUI

const Gallery = ()=>{
    const { type: type1 , listingImgs , setListingImgs , addedListingImgs , setAddedListingImgs , pfp , setPfp , addedPfp , setAddedPfp , setGalleryInput , listingInfo , listingId , editListing  } = (0,_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_5__/* .useListing */ .u)();
    const { 0: viewOpen , 1: setViewOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: currentImg , 1: setCurrentImg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: galleryImgs , 1: setGalleryImgs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,_contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_4__/* .useLoading */ .r)();
    const { callable  } = (0,_contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_2__/* .useFunctions */ .d)();
    const { currentUser  } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const handleView = (img)=>{
        if (img) {
            setViewOpen(true);
            setCurrentImg(img);
        }
    };
    const handleSelect = (index)=>{
        // Index -1 means pfp
        setGalleryInput({
            open: true,
            index: index
        });
    };
    const handleDelete = (type, image, index)=>{
        if (type === "addedPfp") {
            setAddedPfp(null);
        }
        if (type === "addedListingImg") {
            let addedImgs = [
                ...addedListingImgs
            ];
            addedImgs[image] = "";
            setAddedListingImgs(addedImgs);
        }
        if (type === "normalPfp" || type === "normalListingImg") {
            setLoading(true);
            const deleteImgs = callable("images-deleteImgs");
            const imageInfo = {
                url: image,
                uid: currentUser.uid,
                listingId: listingId
            };
            deleteImgs(JSON.stringify(imageInfo)).then((response)=>{
                if (type === "normalPfp") {
                    setPfp(null);
                }
                if (type === "normalListingImg") {
                    let imgs = [
                        ...listingImgs
                    ];
                    imgs[index] = "";
                    setListingImgs(imgs);
                }
                setLoading(false);
            }).catch((error)=>{
                setLoading(false);
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (listingImgs) {
            listingImgs.forEach((image, index)=>{
                galleryImgs[image.index] = image.image;
            });
        }
    }, [
        listingImgs
    ]);
    if (type1 === "flatmate") {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "gallery flatmate",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Backdrop, {
                    sx: {
                        zIndex: (theme)=>theme.zIndex.drawer + 1
                    },
                    open: viewOpen,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "gallery-close fas fa-times",
                            onClick: ()=>setViewOpen(false)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "gallery-current-img",
                            src: currentImg,
                            alt: ""
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>!editListing ? handleView(pfp) : ""
                    ,
                    className: "main-img gallery-img-container",
                    children: [
                        editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `container-edit-icon`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleSelect(-1)
                                    ,
                                    className: "fas fa-camera"
                                }),
                                addedPfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("addedPfp")
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : pfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("normalPfp", pfp)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : ""
                            ]
                        }),
                        addedPfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: URL.createObjectURL(addedPfp),
                            alt: ""
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: pfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: pfp
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: listingInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: listingInfo.userInfo.gender === "male" ? "/img/pfps/radek-pfp.png" : "/img/pfps/radka-pfp.png"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>!editListing ? handleView(listingImgs[0]) : ""
                    ,
                    className: "gallery-img-container secondary-img",
                    children: [
                        editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `container-edit-icon`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleSelect(0)
                                    ,
                                    className: "fas fa-camera"
                                }),
                                addedListingImgs[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("addedListingImg", 0)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : listingImgs[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("normalListingImg", listingImgs[0], 0)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : ""
                            ]
                        }),
                        addedListingImgs[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: URL.createObjectURL(addedListingImgs[0]),
                            alt: ""
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: listingImgs[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: listingImgs[0]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: listingInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Ž\xe1dn\xfd obr\xe1zek"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>!editListing ? handleView(listingImgs[1]) : ""
                    ,
                    className: "gallery-img-container secondary-img",
                    children: [
                        editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `container-edit-icon`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleSelect(1)
                                    ,
                                    className: "fas fa-camera"
                                }),
                                addedListingImgs[1] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("addedListingImg", 1)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : listingImgs[1] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("normalListingImg", listingImgs[1], 1)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : ""
                            ]
                        }),
                        addedListingImgs[1] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: URL.createObjectURL(addedListingImgs[1]),
                            alt: ""
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: listingImgs[1] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: listingImgs[1]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: listingInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Ž\xe1dn\xfd obr\xe1zek"
                                })
                            })
                        })
                    ]
                })
            ]
        }));
    }
    if (type1 === "flat") {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `gallery flat`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Backdrop, {
                    sx: {
                        color: '#fff',
                        zIndex: (theme)=>theme.zIndex.drawer + 1
                    },
                    open: viewOpen,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "gallery-close fas fa-times",
                            onClick: ()=>setViewOpen(false)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "gallery-current-img",
                            src: currentImg
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>!editListing ? handleView(listingImgs[0]) : ""
                    ,
                    className: "gallery-img-container secondary-img",
                    children: [
                        editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `container-edit-icon`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleSelect(0)
                                    ,
                                    className: "fas fa-camera"
                                }),
                                addedListingImgs[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("addedListingImg", 0)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : listingImgs[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("normalListingImg", listingImgs[0], 0)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : ""
                            ]
                        }),
                        addedListingImgs[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: URL.createObjectURL(addedListingImgs[0]),
                            alt: ""
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: listingImgs[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: listingImgs[0]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: listingInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/img/listing/default-byt.jpg"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>!editListing ? handleView(listingImgs[1]) : ""
                    ,
                    className: "gallery-img-container secondary-img",
                    children: [
                        editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `container-edit-icon`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleSelect(1)
                                    ,
                                    className: "fas fa-camera"
                                }),
                                addedListingImgs[1] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("addedListingImg", 1)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : listingImgs[1] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("normalListingImg", listingImgs[1], 1)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : ""
                            ]
                        }),
                        addedListingImgs[1] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: URL.createObjectURL(addedListingImgs[1]),
                            alt: ""
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: listingImgs[1] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: listingImgs[1]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: listingInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Ž\xe1dn\xfd obr\xe1zek"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>!editListing ? handleView(listingImgs[2]) : ""
                    ,
                    className: "gallery-img-container secondary-img",
                    children: [
                        editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `container-edit-icon`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleSelect(2)
                                    ,
                                    className: "fas fa-camera"
                                }),
                                addedListingImgs[2] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("addedListingImg", 2)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : listingImgs[2] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("normalListingImg", listingImgs[2], 2)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : ""
                            ]
                        }),
                        addedListingImgs[2] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: URL.createObjectURL(addedListingImgs[2]),
                            alt: ""
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: listingImgs[2] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: listingImgs[2]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: listingInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Ž\xe1dn\xfd obr\xe1zek"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>!editListing ? handleView(listingImgs[3]) : ""
                    ,
                    className: "gallery-img-container secondary-img",
                    children: [
                        editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `container-edit-icon`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleSelect(3)
                                    ,
                                    className: "fas fa-camera"
                                }),
                                addedListingImgs[3] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("addedListingImg", 3)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : listingImgs[3] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("normalListingImg", listingImgs[3], 3)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : ""
                            ]
                        }),
                        addedListingImgs[3] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: URL.createObjectURL(addedListingImgs[3]),
                            alt: ""
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: listingImgs[3] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: listingImgs[3]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: listingInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Ž\xe1dn\xfd obr\xe1zek"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>!editListing ? handleView(listingImgs[4]) : ""
                    ,
                    className: "gallery-img-container secondary-img",
                    children: [
                        editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `container-edit-icon`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleSelect(4)
                                    ,
                                    className: "fas fa-camera"
                                }),
                                addedListingImgs[4] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("addedListingImg", 4)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : listingImgs[4] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("normalListingImg", listingImgs[4], 4)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : ""
                            ]
                        }),
                        addedListingImgs[4] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: URL.createObjectURL(addedListingImgs[4]),
                            alt: ""
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: listingImgs[4] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: listingImgs[4]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: listingInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Ž\xe1dn\xfd obr\xe1zek"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>!editListing ? handleView(listingImgs[5]) : ""
                    ,
                    className: "gallery-img-container secondary-img",
                    children: [
                        editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `container-edit-icon`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleSelect(5)
                                    ,
                                    className: "fas fa-camera"
                                }),
                                addedListingImgs[5] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("addedListingImg", 5)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : listingImgs[5] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>handleDelete("normalListingImg", listingImgs[5], 5)
                                    ,
                                    className: "fas fa-trash container-delete"
                                }) : ""
                            ]
                        }),
                        addedListingImgs[5] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: URL.createObjectURL(addedListingImgs[5]),
                            alt: ""
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: listingImgs[5] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: listingImgs[5]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: listingInfo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Ž\xe1dn\xfd obr\xe1zek"
                                })
                            })
                        })
                    ]
                })
            ]
        }));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);

});

/***/ }),

/***/ 3081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const InputDialog = ({ heading , description , setMessage , message , setOpen , handleSend  })=>{
    const textAreaChange = (e)=>{
        let text = e.target.value;
        while(text.includes("\n\n\n")){
            text = text.replace("\n\n\n", "\n\n");
        }
        setMessage(text);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "req-dialog",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                onClick: ()=>setOpen(false)
                ,
                className: "dialog-close fas fa-times"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "dialog-heading",
                children: heading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "dialog-description",
                children: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                maxLength: 250,
                onChange: (e)=>textAreaChange(e)
                ,
                value: message,
                className: "dialog-input",
                placeholder: "Sem zadejte svou zpr\xe1vu..."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: ()=>{
                    handleSend();
                    setOpen(false);
                },
                className: "main-btn",
                children: [
                    "Poslat ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "fas fa-envelope"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputDialog);


/***/ }),

/***/ 8331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ListingBoxesContainer_ListingBoxesContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/ListingBox/ListingBox.jsx



const ProfileBox = ({ icon , title , children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: title != "skeleton" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "profile-box",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: `fas ${icon}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "result",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "title",
                    children: title
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "profile-box",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                    variant: "text",
                    sx: {
                        width: "50%",
                        marginTop: 5
                    },
                    className: "result"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                    variant: "text",
                    sx: {
                        width: "20%"
                    },
                    className: "title"
                })
            ]
        })
    }));
};
/* harmony default export */ const ListingBox = (ProfileBox);

;// CONCATENATED MODULE: ./components/ListingBoxesContainer/ListingBoxesContainer.jsx


//Components

const ListingBoxesContainer = ({ type , existingBoxes , addedBoxes , editListing  })=>{
    if (type === "flatmate") {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "profile-boxes-container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-heading",
                    children: "Info o inzerantovi"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container-content",
                    children: [
                        existingBoxes && !editListing && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                existingBoxes.pet && existingBoxes.pet != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-dog",
                                    title: "Mazl\xedček",
                                    children: existingBoxes.pet
                                }),
                                existingBoxes.smoking && existingBoxes.smoking != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-smoking",
                                    title: "Kouřen\xed",
                                    children: existingBoxes.smoking
                                }),
                                existingBoxes.job && existingBoxes.job != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-graduation-cap",
                                    title: "Zaměstn\xe1n\xed",
                                    children: existingBoxes.job
                                }),
                                existingBoxes.children && existingBoxes.children != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-baby-carriage",
                                    title: "Děti",
                                    children: existingBoxes.children
                                })
                            ]
                        }),
                        !existingBoxes && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    title: "skeleton"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    title: "skeleton"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    title: "skeleton"
                                })
                            ]
                        }),
                        addedBoxes && editListing && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                addedBoxes.pet && addedBoxes.pet != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-dog",
                                    title: "Mazl\xedček",
                                    children: addedBoxes.pet
                                }),
                                addedBoxes.smoking && addedBoxes.smoking != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-smoking",
                                    title: "Kouřen\xed",
                                    children: addedBoxes.smoking
                                }),
                                addedBoxes.job && addedBoxes.job != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-graduation-cap",
                                    title: "Vzděl\xe1n\xed",
                                    children: addedBoxes.job
                                }),
                                addedBoxes.children && addedBoxes.children != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-baby-carriage",
                                    title: "Děti",
                                    children: addedBoxes.children
                                })
                            ]
                        })
                    ]
                })
            ]
        }));
    } else if (type === "flat") {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "profile-boxes-container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-heading",
                    children: "Info o bydlen\xed"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container-content",
                    children: [
                        existingBoxes && !editListing && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                existingBoxes.location && existingBoxes.location != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-home",
                                    title: "Lokace",
                                    children: existingBoxes.location
                                }),
                                existingBoxes.layout && existingBoxes.layout != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-door-closed",
                                    title: "Dispozice",
                                    children: existingBoxes.layout
                                }),
                                existingBoxes.size && existingBoxes.size != "" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListingBox, {
                                    icon: "fa-arrows-alt-h",
                                    title: "Velikost",
                                    children: [
                                        existingBoxes.size,
                                        "m",
                                        /*#__PURE__*/ jsx_runtime_.jsx("sup", {
                                            children: "2"
                                        })
                                    ]
                                }),
                                existingBoxes.elevator && existingBoxes.elevator != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-caret-square-up",
                                    title: "V\xfdtah",
                                    children: existingBoxes.elevator
                                }),
                                existingBoxes.internet && existingBoxes.internet != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-wifi",
                                    title: "Internet",
                                    children: existingBoxes.internet
                                }),
                                existingBoxes.level && existingBoxes.level != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-door-closed",
                                    title: "Podlaž\xed",
                                    children: existingBoxes.level
                                }),
                                existingBoxes.petAllowed && existingBoxes.petAllowed != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-dog",
                                    title: "Mazl\xedčci",
                                    children: existingBoxes.petAllowed
                                }),
                                existingBoxes.smokingAllowed && existingBoxes.smokingAllowed != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-smoking",
                                    title: "Kouřen\xed",
                                    children: existingBoxes.smokingAllowed
                                })
                            ]
                        }),
                        !existingBoxes && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    title: "skeleton"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    title: "skeleton"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    title: "skeleton"
                                })
                            ]
                        }),
                        addedBoxes && editListing && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                existingBoxes && existingBoxes.location && existingBoxes.location != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-home",
                                    title: "Lokace",
                                    children: existingBoxes.location
                                }),
                                addedBoxes.layout && addedBoxes.layout != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-door-closed",
                                    title: "Dispozice",
                                    children: addedBoxes.layout
                                }),
                                addedBoxes.size && addedBoxes.size != "" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListingBox, {
                                    icon: "fa-arrows-alt-h",
                                    title: "Velikost",
                                    children: [
                                        addedBoxes.size,
                                        "m",
                                        /*#__PURE__*/ jsx_runtime_.jsx("sup", {
                                            children: "2"
                                        })
                                    ]
                                }),
                                addedBoxes.elevator && addedBoxes.elevator != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-caret-square-up",
                                    title: "V\xfdtah",
                                    children: addedBoxes.elevator
                                }),
                                addedBoxes.internet && addedBoxes.internet != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-wifi",
                                    title: "Internet",
                                    children: addedBoxes.internet
                                }),
                                addedBoxes.level && addedBoxes.level != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-door-closed",
                                    title: "Podlaž\xed",
                                    children: addedBoxes.level
                                }),
                                addedBoxes.petAllowed && addedBoxes.petAllowed != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-dog",
                                    title: "Mazl\xedčci",
                                    children: addedBoxes.petAllowed
                                }),
                                addedBoxes.smokingAllowed && addedBoxes.smokingAllowed != "" && /*#__PURE__*/ jsx_runtime_.jsx(ListingBox, {
                                    icon: "fa-smoking",
                                    title: "Kouřen\xed",
                                    children: addedBoxes.smokingAllowed
                                })
                            ]
                        })
                    ]
                })
            ]
        }));
    }
};
/* harmony default export */ const ListingBoxesContainer_ListingBoxesContainer = (ListingBoxesContainer);


/***/ }),

/***/ 1720:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2882);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2824);
/* harmony import */ var _ListingBoxesContainer_ListingBoxesContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8331);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3300);
/* harmony import */ var _components_Listing_ListingAbout_ListingAbout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3821);
/* harmony import */ var _components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1750);
/* harmony import */ var _ListingDialogs_ListingDialogs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6609);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ListingHeader_ListingHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6076);
/* harmony import */ var _ListingOpeningBoxes_ListingOpeningBoxes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1813);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_9__, _components_Listing_ListingAbout_ListingAbout__WEBPACK_IMPORTED_MODULE_8__, _ListingOpeningBoxes_ListingOpeningBoxes__WEBPACK_IMPORTED_MODULE_13__, _ListingHeader_ListingHeader__WEBPACK_IMPORTED_MODULE_12__, _Header_Header__WEBPACK_IMPORTED_MODULE_5__, _ListingDialogs_ListingDialogs__WEBPACK_IMPORTED_MODULE_10__, _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_9__, _components_Listing_ListingAbout_ListingAbout__WEBPACK_IMPORTED_MODULE_8__, _ListingOpeningBoxes_ListingOpeningBoxes__WEBPACK_IMPORTED_MODULE_13__, _ListingHeader_ListingHeader__WEBPACK_IMPORTED_MODULE_12__, _Header_Header__WEBPACK_IMPORTED_MODULE_5__, _ListingDialogs_ListingDialogs__WEBPACK_IMPORTED_MODULE_10__, _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//next


//Context

//Components






//Mui components



const Listing = ()=>{
    const { type , cr , listingInfo , editListing , listingId , listingName , listingPersonBoxes , addedPersonBoxes , listingFlatBoxes , addedFlatBoxes , listingPremium , setPersonBoxerOverlay , handleSave ,  } = (0,_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_4__/* .useListing */ .u)();
    const { 0: flatBoxesInfoAlert , 1: setFlatBoxesInfoAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: personBoxesInfoAlert , 1: setPersonBoxesInfoAlert  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    if (type === "flatmate") {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: cr ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Vytvořte si vlastn\xed inzer\xe1t | Roomie"
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            listingName,
                            " | Roomie"
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "Listing FlatMateListing",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingDialogs_ListingDialogs__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            variant: "white"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "listing-banner"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "listing-content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingHeader_ListingHeader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mid-container",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "content-body",
                                        children: [
                                            !cr && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "body-messages",
                                                children: [
                                                    listingInfo && !listingInfo.visible && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "messages-message",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-info"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                children: [
                                                                    "V\xe1š inzer\xe1t je nedokončen\xfd, pros\xedm dokončete jej",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                        href: `/cr/${listingInfo.type}/${listingId}`,
                                                                        children: " zde"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    listingInfo && !listingInfo.userInfo.emailVerified && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "messages-message",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-info"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "V\xe1š \xfačet nen\xed ověřen\xfd - pro použ\xedv\xe1n\xed Roomie si jej pros\xedm ověřte pomoc\xed odkazu zaslan\xe9ho na v\xe1š e-mail."
                                                            })
                                                        ]
                                                    }),
                                                    listingInfo && listingInfo.hiddenByUser && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "messages-message",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-info"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                children: [
                                                                    "V\xe1š \xfačet je skryt\xfd - aby ho mohli uživatel\xe9 vidět, zapněte jeho viditelnost v ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                        href: "/edit-profile",
                                                                        children: "nastaven\xed profilu"
                                                                    }),
                                                                    "."
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "body-info",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "container",
                                                    children: [
                                                        listingPremium && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info-premium-box",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fas fa-circle-check"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: "Premium uživatel"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingBoxesContainer_ListingBoxesContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            type: "flatmate",
                                                            addedBoxes: addedPersonBoxes,
                                                            existingBoxes: listingPersonBoxes,
                                                            editListing: editListing
                                                        }),
                                                        cr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Collapse, {
                                                            in: personBoxesInfoAlert,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Alert, {
                                                                sx: {
                                                                    marginTop: "1rem"
                                                                },
                                                                severity: "info",
                                                                children: "Přidejte o sobě info."
                                                            })
                                                        }),
                                                        editListing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "info-edit-boxes",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                onClick: ()=>{
                                                                    setPersonBoxerOverlay(true);
                                                                    setPersonBoxesInfoAlert(false);
                                                                },
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fas fa-plus"
                                                                    }),
                                                                    " "
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Listing_ListingAbout_ListingAbout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                        ]
                                    })
                                }),
                                editListing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "content-edit-buttons",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>handleSave()
                                        ,
                                        className: "main-btn",
                                        children: "Uložit změny"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                    ]
                })
            ]
        }));
    }
    if (type === "flat") {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: cr ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Vytvořte si vlastn\xed inzer\xe1t | Roomie"
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            "Byt ",
                            listingName,
                            " | Roomie"
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "Listing FlatListing",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingDialogs_ListingDialogs__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            variant: "white"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "listing-banner"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "listing-content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingHeader_ListingHeader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mid-container",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "content-body",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "body-messages",
                                                children: [
                                                    listingInfo && !listingInfo.visible && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "messages-message",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-info"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                children: [
                                                                    "V\xe1š inzer\xe1t je nedokončen\xfd, pros\xedm dokončete jej",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                        href: `/cr/${listingInfo.type}/${listingId}`,
                                                                        children: " zde"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    listingInfo && !listingInfo.userInfo.emailVerified && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "messages-message",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-info"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "V\xe1š \xfačet nen\xed ověřen\xfd - pro použ\xedv\xe1n\xed Roomie si jej pros\xedm ověřte pomoc\xed odkazu zaslan\xe9ho na v\xe1š e-mail."
                                                            })
                                                        ]
                                                    }),
                                                    listingInfo && listingInfo.hiddenByUser && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "messages-message",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-info"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                children: [
                                                                    "V\xe1š \xfačet je skryt\xfd - aby ho mohli uživatel\xe9 vidět, zapněte jeho viditelnost v ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                        href: "/edit-profile",
                                                                        children: "nastaven\xed profilu"
                                                                    }),
                                                                    "."
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "body-info",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "container",
                                                    children: [
                                                        listingPremium && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info-premium-box",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fas fa-circle-check"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: "Premium uživatel"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingOpeningBoxes_ListingOpeningBoxes__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingBoxesContainer_ListingBoxesContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            type: "flat",
                                                            addedBoxes: addedFlatBoxes,
                                                            existingBoxes: listingFlatBoxes,
                                                            editListing: editListing
                                                        }),
                                                        cr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Collapse, {
                                                            in: flatBoxesInfoAlert,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Alert, {
                                                                sx: {
                                                                    marginTop: "1rem"
                                                                },
                                                                severity: "info",
                                                                children: "Přidejte info o sv\xe9m bydlen\xed."
                                                            })
                                                        }),
                                                        editListing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "info-edit-boxes",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                onClick: ()=>{
                                                                    setFlatBoxerOverlay(true);
                                                                    setFlatBoxesInfoAlert(false);
                                                                },
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fas fa-plus"
                                                                    }),
                                                                    " "
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingBoxesContainer_ListingBoxesContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            type: "flatmate",
                                                            addedBoxes: addedPersonBoxes,
                                                            existingBoxes: listingPersonBoxes,
                                                            editListing: editListing
                                                        }),
                                                        cr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Collapse, {
                                                            in: personBoxesInfoAlert,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Alert, {
                                                                sx: {
                                                                    marginTop: "1rem"
                                                                },
                                                                severity: "info",
                                                                children: "Přidejte info o sobě."
                                                            })
                                                        }),
                                                        editListing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "info-edit-boxes",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                onClick: ()=>{
                                                                    setPersonBoxerOverlay(true);
                                                                    setPersonBoxesInfoAlert(false);
                                                                },
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "fas fa-plus"
                                                                    }),
                                                                    " "
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Listing_ListingAbout_ListingAbout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                                            editListing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "content-edit-buttons",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: handleSave,
                                                    className: "main-btn",
                                                    children: "Uložit změny"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                    ]
                })
            ]
        }));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Listing);

});

/***/ }),

/***/ 3821:
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
/* harmony import */ var _Tag_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9918);
/* harmony import */ var _ListingTags_ListingTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2208);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_2__]);
_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


//COntexts

//Components


//MUI

const ListingAbout = ()=>{
    const { type: type1 , listingInfo , editListing , listingBio , listingFlatBio , listingPersonBio , listingPersonTags , listingFlatTags , setPersonTagOverlay , setFlatTagOverlay , addedPersonTags , addedFlatTags , bio , setBio , flatBio , setFlatBio , personBio , setPersonBio ,  } = (0,_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_2__/* .useListing */ .u)();
    const textAreaChange = (e, type)=>{
        let text = e.target.value;
        while(text.includes("\n\n\n")){
            text = text.replace("\n\n\n", "\n\n");
        }
        type === "flatmate" ? setBio(text) : type === "flat" ? setFlatBio(text) : type === "flatPerson" ? setPersonBio(text) : "";
    };
    if (type1 === "flatmate") {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "body-about",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "about-bio",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bio-header",
                            children: "O mně"
                        }),
                        editListing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            maxLength: 3000,
                            value: bio,
                            onChange: (e)=>textAreaChange(e, "flatmate")
                            ,
                            type: "text",
                            rows: "5",
                            className: "bio-content",
                            placeholder: "Zadejte něco o sobě..."
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bio-content",
                            children: listingBio != null ? listingBio === "" ? "Tento uživatel nem\xe1 popis..." : listingBio : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "skeletons",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                        variant: "text"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                        variant: "text"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                        sx: {
                                            width: "50%"
                                        },
                                        variant: "text"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "about-preferences",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "preferences-header",
                            children: "Koho hled\xe1m?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingTags_ListingTags__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            type: "person",
                            existingTags: listingPersonTags,
                            addedTags: addedPersonTags,
                            editListing: editListing,
                            setOverlay: setPersonTagOverlay
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "about-preferences",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "preferences-header",
                            children: "Jak\xe9 bydlen\xed hled\xe1m?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingTags_ListingTags__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            type: "flat",
                            existingTags: listingFlatTags,
                            addedTags: addedFlatTags,
                            editListing: editListing,
                            setOverlay: setFlatTagOverlay
                        })
                    ]
                })
            ]
        }));
    }
    if (type1 === "flat") {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "body-about",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "about-bio",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bio-header",
                            children: "Podrobnosti o bydlen\xed"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bio-content",
                            children: editListing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                maxLength: 3000,
                                onChange: (e)=>textAreaChange(e, "flat")
                                ,
                                value: flatBio,
                                type: "text",
                                rows: "5",
                                className: "bio-content",
                                placeholder: "Zadejte něco o sv\xe9m bydlen\xed..."
                            }) : listingInfo || !(listingFlatBio === null) ? !listingFlatBio ? "Toto bydlen\xed nem\xe1 popis..." : listingFlatBio : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "skeletons",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                        variant: "text",
                                        sx: {
                                            width: "100%"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                        variant: "text",
                                        sx: {
                                            width: "50%"
                                        }
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "about-bio",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bio-header",
                            children: "Podrobnosti o inzerentovi"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bio-content",
                            children: editListing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                maxLength: 3000,
                                onChange: (e)=>textAreaChange(e, "flatPerson")
                                ,
                                value: personBio,
                                type: "text",
                                rows: "5",
                                className: "bio-content",
                                placeholder: "Zadejte něco o sobě..."
                            }) : listingInfo || !(listingPersonBio === null) ? !listingPersonBio ? "Tento uživatel nem\xe1 popis..." : listingPersonBio : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "skeletons",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                        variant: "text",
                                        sx: {
                                            width: "100%"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
                                        variant: "text",
                                        sx: {
                                            width: "50%"
                                        }
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "about-preferences",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "preferences-header",
                            children: "Koho hled\xe1m?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingTags_ListingTags__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            type: "person",
                            existingTags: listingPersonTags,
                            addedTags: addedPersonTags,
                            editListing: editListing,
                            setOverlay: setPersonTagOverlay
                        })
                    ]
                })
            ]
        }));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingAbout);

});

/***/ }),

/***/ 2208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tag_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9918);


//Components

const ListingTags = ({ type , existingTags , editListing , addedTags , setOverlay  })=>{
    if (type === "person") {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "preferences-content",
            children: [
                existingTags && !editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        existingTags.gender && existingTags.gender.length > 0 && existingTags.gender.map((tag, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                children: tag
                            }, id)
                        ),
                        existingTags.age && existingTags.age.length > 0 && existingTags.age.map((tag, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                children: tag
                            }, id)
                        ),
                        existingTags.smoking && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: existingTags.smoking
                        }),
                        existingTags.job && existingTags.job.length > 0 && existingTags.job.map((tag, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                children: tag
                            }, id)
                        )
                    ]
                }),
                addedTags && editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        addedTags.gender && addedTags.gender.length > 0 && addedTags.gender.map((tag, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                children: tag
                            }, id)
                        ),
                        addedTags.age && addedTags.age.length > 0 && addedTags.age.map((tag, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                children: tag
                            }, id)
                        ),
                        addedTags.smoking && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: addedTags.smoking
                        }),
                        addedTags.job && addedTags.job.length > 0 && addedTags.job.map((tag, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                children: tag
                            }, id)
                        )
                    ]
                }),
                editListing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    onClick: ()=>setOverlay(true)
                    ,
                    plus: true
                })
            ]
        }));
    }
    if (type === "flat") {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "preferences-content",
            children: [
                existingTags && !editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        existingTags.location && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: existingTags.location
                        }),
                        existingTags.layout && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: existingTags.layout
                        }),
                        existingTags.internet && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: existingTags.internet
                        }),
                        existingTags.elevator && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: existingTags.elevator
                        }),
                        existingTags.petAllowed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: existingTags.petAllowed
                        }),
                        existingTags.smokingAllowed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: existingTags.smokingAllowed
                        })
                    ]
                }),
                addedTags && editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        addedTags.location && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: addedTags.location
                        }),
                        addedTags.layout && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: addedTags.layout
                        }),
                        addedTags.internet && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: addedTags.internet
                        }),
                        addedTags.elevator && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: addedTags.elevator
                        }),
                        addedTags.petAllowed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: addedTags.petAllowed
                        }),
                        addedTags.smokingAllowed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: addedTags.smokingAllowed
                        })
                    ]
                }),
                editListing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tag_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    onClick: ()=>setOverlay(true)
                    ,
                    plus: true
                })
            ]
        }));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingTags);


/***/ }),

/***/ 6609:
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
/* harmony import */ var _contexts_SnackBarContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7503);
/* harmony import */ var _InputDialog_InputDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3081);
/* harmony import */ var _GalleryInput_GalleryInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(378);
/* harmony import */ var _Tagger_Tagger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5800);
/* harmony import */ var _Boxer_Boxer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9624);
/* harmony import */ var _CustomDialog_CustomDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9029);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Tagger_Tagger__WEBPACK_IMPORTED_MODULE_6__, _GalleryInput_GalleryInput__WEBPACK_IMPORTED_MODULE_5__, _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_2__]);
([_Tagger_Tagger__WEBPACK_IMPORTED_MODULE_6__, _GalleryInput_GalleryInput__WEBPACK_IMPORTED_MODULE_5__, _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//COntexts


//Components





//Mui

const ListingDialogs = ()=>{
    const { snackBar  } = (0,_contexts_SnackBarContext__WEBPACK_IMPORTED_MODULE_3__/* .useSnackBar */ .i)();
    const bdSx = {
        zIndex: (theme)=>theme.zIndex.drawer + 1
    };
    const { type , cr , listingInfo , reportDialog , setReportDialog , reqDialogOpen , setReqDialogOpen , sliderDialog , setSliderDialog , personTagOverlay , setPersonTagOverlay , flatTagOverlay , setFlatTagOverlay , personBoxerOverlay , setPersonBoxerOverlay , flatBoxerOverlay , setFlatBoxerOverlay , reportMessage , setReportMessage , handleReport , requestMessage , setRequestMessage , handleRequest , budget , setBudget , addedPersonTags , setAddedPersonTags , addedFlatTags , setAddedFlatTags , addedPersonBoxes , setAddedPersonBoxes , addedFlatBoxes , setAddedFlatBoxes , listingPersonTags , listingFlatTags , listingPersonBoxes , listingFlatBoxes , galleryInput , setGalleryInput , listingImgs , addedListingImgs , setAddedListingImgs , pfp , addedPfp , setAddedPfp , welcomeDialog , setWelcomeDialog  } = (0,_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_2__/* .useListing */ .u)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Backdrop, {
                sx: {
                    zIndex: (theme)=>theme.zIndex.drawer + 1
                },
                open: reportDialog,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputDialog_InputDialog__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    heading: `Nahlásit uživatele ${listingInfo && listingInfo.userInfo.username}`,
                    description: "Pros\xedm popište důvody nahl\xe1šen\xed.",
                    setMessage: setReportMessage,
                    message: reportMessage,
                    setOpen: setReportDialog,
                    handleSend: ()=>{
                        handleReport();
                        snackBar("Nahl\xe1šen\xed bude zkontrolov\xe1no.", "success");
                        setReportMessage("");
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Backdrop, {
                sx: {
                    zIndex: (theme)=>theme.zIndex.drawer + 1
                },
                open: reqDialogOpen,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputDialog_InputDialog__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    heading: "Odelsat ž\xe1dost o kontakt",
                    description: "Inzerant uvid\xed vaš\xed ž\xe1dost s vaš\xed zpr\xe1vou a může se rozhodnout zda vaš\xed ž\xe1dost přijme a poskytne v\xe1m sv\xe9 kontaktn\xed \xfadaje.",
                    setMessage: setRequestMessage,
                    message: requestMessage,
                    setOpen: setReqDialogOpen,
                    handleSend: handleRequest
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Dialog, {
                open: sliderDialog,
                "aria-labelledby": "alert-dialog-title",
                "aria-describedby": "alert-dialog-description",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.DialogTitle, {
                        children: "Upravit rozpočet"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.DialogContent, {
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Slider, {
                                sx: {
                                    width: 250,
                                    marginTop: "1rem"
                                },
                                min: 1000,
                                max: 60000,
                                onChange: (e)=>setBudget(e.target.value)
                                ,
                                step: 1000,
                                value: budget ? budget : 0
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: "1rem"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        style: {
                                            marginRight: "0.5rem"
                                        },
                                        className: "fas fa-coins"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                maxLength: 5,
                                                type: "text",
                                                onChange: (e)=>e.target.value.match(/^[0-9]+$/) || e.target.value === "" ? setBudget(e.target.value) : ""
                                                ,
                                                value: budget,
                                                className: "range-input"
                                            }),
                                            budget == 60000 ? " +" : "",
                                            " Kč"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.DialogActions, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {
                            sx: !budget || budget < 1000 || budget > 60000 ? {
                                opacity: 0.2,
                                pointerEvents: "none"
                            } : {
                                opacity: 1,
                                pointerEvents: "all"
                            },
                            onClick: ()=>setSliderDialog(false)
                            ,
                            children: "Uložit"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GalleryInput_GalleryInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                object: galleryInput,
                setObject: setGalleryInput,
                listingImgs: listingImgs,
                addedListingImgs: addedListingImgs,
                setAddedListingImgs: setAddedListingImgs,
                pfp: pfp,
                addedPfp: addedPfp,
                setAddedPfp: setAddedPfp
            }),
            type === "flatmate" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Backdrop, {
                        sx: bdSx,
                        open: personTagOverlay,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tagger_Tagger__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            variant: "person",
                            addedTags: addedPersonTags,
                            setAddedTags: setAddedPersonTags,
                            setTagOverlay: setPersonTagOverlay,
                            existingTags: listingPersonTags
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Backdrop, {
                        sx: bdSx,
                        open: flatTagOverlay,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tagger_Tagger__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            variant: "flat",
                            addedTags: addedFlatTags,
                            setAddedTags: setAddedFlatTags,
                            setTagOverlay: setFlatTagOverlay,
                            existingTags: listingFlatTags
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Backdrop, {
                        sx: bdSx,
                        open: personBoxerOverlay,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Boxer_Boxer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            variant: "person",
                            addedBoxes: addedPersonBoxes,
                            setAddedBoxes: setAddedPersonBoxes,
                            setBoxerOverlay: setPersonBoxerOverlay,
                            existingBoxes: listingPersonBoxes
                        })
                    })
                ]
            }),
            type === "flat" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Backdrop, {
                        sx: bdSx,
                        open: personTagOverlay,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tagger_Tagger__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            variant: "person",
                            addedTags: addedPersonTags,
                            setAddedTags: setAddedPersonTags,
                            setTagOverlay: setPersonTagOverlay,
                            existingTags: listingPersonTags
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Backdrop, {
                        sx: bdSx,
                        open: personBoxerOverlay,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Boxer_Boxer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            variant: "person",
                            addedBoxes: addedPersonBoxes,
                            setAddedBoxes: setAddedPersonBoxes,
                            setBoxerOverlay: setPersonBoxerOverlay,
                            existingBoxes: listingPersonBoxes
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Backdrop, {
                        sx: bdSx,
                        open: flatBoxerOverlay,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Boxer_Boxer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            variant: "flat",
                            addedBoxes: addedFlatBoxes,
                            setAddedBoxes: setAddedFlatBoxes,
                            setBoxerOverlay: setFlatBoxerOverlay,
                            existingBoxes: listingFlatBoxes
                        })
                    })
                ]
            }),
            cr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Backdrop, {
                sx: {
                    zIndex: (theme)=>theme.zIndex.drawer + 1
                },
                open: welcomeDialog,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_CustomDialog_CustomDialog__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    image: "/img/listing/welcome-dialog.png",
                    heading: "V\xe1š inzer\xe1t",
                    setOpen: setWelcomeDialog,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "dialog-body",
                            children: "Gratulujeme k založen\xed osobn\xedho profilu Roomie. Nyn\xed v\xe1m nic nebr\xe1n\xed k vytvořen\xed vašeho inzer\xe1tu. Tvorba je jednoduch\xe1 a intuitivn\xed. Červeně sv\xedt\xedc\xed informace jsou povinn\xe9, ostatn\xed dle vašeho uv\xe1žen\xed. Nezapomeňte - č\xedm v\xedce informac\xed uvedete, t\xedm v\xedce podpoř\xedte vaš\xed šanci k osloven\xed potenci\xe1ln\xedch uživatelů. V\xe1š inzer\xe1t je vaš\xed veřejnou prezentac\xed na port\xe1le Roomie. Hodně štěst\xed!"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "dialog-action",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setWelcomeDialog(false)
                                ,
                                className: "main-btn",
                                children: "Rozum\xedm"
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingDialogs);

});

/***/ }),

/***/ 1430:
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
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1018);
/* harmony import */ var _contexts_SnackBarContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7503);
/* harmony import */ var _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2882);
/* harmony import */ var _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1614);
/* harmony import */ var _InputDialog_InputDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3081);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_5__, _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_6__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);
([_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_5__, _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_6__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//next

//Contexts




//COmponents

//MUI

const ListingContact = ()=>{
    const { currentUser , currentUserInfo  } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const { snackBar  } = (0,_contexts_SnackBarContext__WEBPACK_IMPORTED_MODULE_4__/* .useSnackBar */ .i)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { callable  } = (0,_contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_6__/* .useFunctions */ .d)();
    const { listingInfo , listingContact , editListing , setReqDialogOpen , contactLoading ,  } = (0,_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_5__/* .useListing */ .u)();
    //State
    const { 0: isFriend , 1: setIsFriend  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isRequested , 1: setIsRequested  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isRequesting , 1: setIsRequesting  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isOwner , 1: setIsOwner  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (listingInfo && currentUser) {
            if (listingInfo.userInfo.uid === currentUser.uid) {
                setIsOwner(true);
            } else {
                setIsOwner(false);
            }
            if (listingInfo.friends.includes(currentUser.uid)) {
                setIsFriend(true);
            } else {
                setIsFriend(false);
            }
            if (listingInfo.requests.includes(currentUser.uid)) {
                setIsRequested(true);
            } else {
                setIsRequested(false);
            }
            if (listingInfo.sentRequests.includes(currentUser.uid)) {
                setIsRequesting(true);
            } else {
                setIsRequesting(false);
            }
        }
    }, [
        listingInfo,
        currentUser
    ]);
    const handleRequestClick = ()=>{
        if (currentUserInfo) {
            if (currentUserInfo.emailVerified) {
                setReqDialogOpen(true);
            } else {
                snackBar("Pros\xedm, ověřte svůj e-mail.", "error");
            }
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !contactLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: isFriend || isOwner ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "info-contact unlocked",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contact-items",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "items-main",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "items-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fas fa-phone"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: [
                                                    listingContact.phone.slice(0, 4),
                                                    " ",
                                                    listingContact.phone.slice(4, 7),
                                                    " ",
                                                    listingContact.phone.slice(7, 10),
                                                    " ",
                                                    listingContact.phone.slice(10)
                                                ].join('')
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "items-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fas fa-envelope"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: listingContact.email
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "items-socials",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        onClick: ()=>listingContact.fb ? window.location.href = listingContact.fb : ""
                                        ,
                                        className: `fab fa-facebook-square socials-item ${listingContact.fb && "active"}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        onClick: ()=>listingContact.ig ? window.location.href = listingContact.ig : ""
                                        ,
                                        className: `fab fa-instagram socials-item ${listingContact.ig && "active"}`
                                    })
                                ]
                            })
                        ]
                    }),
                    isFriend && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contact-state",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "state-icon fas fa-users"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "state-description",
                                children: [
                                    "Vy a ",
                                    listingInfo.userInfo.username,
                                    " jste ve spojen\xed."
                                ]
                            })
                        ]
                    }),
                    isOwner && !editListing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>router.push("/requests/recieved")
                        ,
                        className: "main-btn contact-button",
                        children: "Zobrazit ž\xe1dosti"
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "info-contact",
                children: [
                    (!currentUser || !isRequested) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contact-icons",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-phone"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-envelope"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-facebook-square"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-instagram"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contact-state",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: `state-icon fas fa-${isRequested ? "hourglass-half" : "lock"}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "state-description",
                                children: !currentUser ? "Pošlete uživateli ž\xe1dost o př\xedstup ke kontaktn\xedm \xfadajům." : isRequested ? "Ž\xe1dost ček\xe1 na vyř\xedzen\xed." : isRequesting ? "Uživatel v\xe1m zaslal ž\xe1dost." : currentUser ? "Pošlete uživateli ž\xe1dost o př\xedstup ke kontaktn\xedm \xfadajům." : ""
                            })
                        ]
                    }),
                    (!currentUser || !isRequested) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: !currentUser ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "main-btn contact-button",
                            onClick: ()=>router.push("/login")
                            ,
                            children: "Poslat ž\xe1dost"
                        }) : isRequesting ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "contact-button main-btn",
                            onClick: ()=>router.push("/requests/recieved")
                            ,
                            children: "Zobrazit ž\xe1dosti"
                        }) : currentUser ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "main-btn contact-button",
                            onClick: handleRequestClick,
                            children: "Poslat ž\xe1dost"
                        }) : ""
                    })
                ]
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "listing-contact-loading",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CircularProgress, {
                sx: {
                    padding: "10px"
                }
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingContact);

});

/***/ }),

/***/ 6076:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1614);
/* harmony import */ var _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2882);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1018);
/* harmony import */ var _InputDialog_InputDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3081);
/* harmony import */ var _ListingInfoImportant_ListingInfoImportant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4618);
/* harmony import */ var _ListingContact_ListingContact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1430);
/* harmony import */ var _ListingPfp_ListingPfp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4609);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListingContact_ListingContact__WEBPACK_IMPORTED_MODULE_7__, _ListingInfoImportant_ListingInfoImportant__WEBPACK_IMPORTED_MODULE_6__, _ListingPfp_ListingPfp__WEBPACK_IMPORTED_MODULE_8__, _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_3__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_2__]);
([_ListingContact_ListingContact__WEBPACK_IMPORTED_MODULE_7__, _ListingInfoImportant_ListingInfoImportant__WEBPACK_IMPORTED_MODULE_6__, _ListingPfp_ListingPfp__WEBPACK_IMPORTED_MODULE_8__, _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_3__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__, _contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//Contexts



//components




//Mui

const ListingHeader = ()=>{
    const { callable  } = (0,_contexts_FunctionsContext__WEBPACK_IMPORTED_MODULE_2__/* .useFunctions */ .d)();
    const { currentUser  } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();
    const { 0: moreInfoOpen , 1: setMoreInfoOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const likeListing = callable("userUpdates-likeListing");
    const unlikeListing = callable("userUpdates-unlikeListing");
    //State
    const { type , cr , listingInfo , editListing , setEditListing , listingId , listingUsername , listingAge , listingGender , listingPremium , listingFans , listingLiked , setListingLiked , setReportDialog  } = (0,_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_3__/* .useListing */ .u)();
    const handleLike = ()=>{
        if (!currentUser) {
            snackBar("Pro přid\xe1n\xed inzer\xe1tů do obl\xedben\xfdch se nejdř\xedve přihlašte.", "error");
            return;
        }
        if (listingLiked) {
            setListingLiked(false);
            unlikeListing(JSON.stringify({
                fanUid: currentUser.uid,
                listingId
            }));
        } else {
            setListingLiked(true);
            likeListing(JSON.stringify({
                fanUid: currentUser.uid,
                listingInfo,
                listingId
            }));
        }
    };
    if (type === "flatmate") {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content-header",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mid-container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingPfp_ListingPfp__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "header-info",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "info-main",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "main-name",
                                            children: [
                                                listingUsername,
                                                " ",
                                                listingPremium && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fas fa-circle-check"
                                                })
                                            ]
                                        }),
                                        currentUser && listingInfo && currentUser.uid == listingInfo.userInfo.uid && listingInfo.visible && !cr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>setEditListing((prevState)=>!prevState
                                                )
                                            ,
                                            className: "main-edit-profile",
                                            children: editListing ? "Zpět" : "Upravit inzer\xe1t"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "main-actions",
                                            children: [
                                                listingFans && currentUser && listingInfo && currentUser.uid != listingInfo.userInfo.uid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    onClick: ()=>handleLike()
                                                    ,
                                                    className: `fa${listingLiked ? "s" : "r"} fa-heart main-like`
                                                }),
                                                listingInfo && currentUser && listingInfo.userInfo.uid != currentUser.uid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    onClick: ()=>setMoreInfoOpen((prevState)=>!prevState
                                                        )
                                                    ,
                                                    className: "main-more fas fa-ellipsis-h"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: `main-more-list ${moreInfoOpen && "active"}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                onClick: ()=>{
                                                    setReportDialog(true);
                                                    setMoreInfoOpen(false);
                                                },
                                                children: "Nahl\xe1sit uživatele"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "main-description",
                                            children: listingGender && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    listingAge,
                                                    ", ",
                                                    listingGender === "male" ? "muž" : listingGender === "female" ? "žena" : "jin\xe9"
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                !listingInfo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "header-info-loading",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CircularProgress, {})
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingInfoImportant_ListingInfoImportant__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                        !cr ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingContact_ListingContact__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info-contact",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "contact-icons",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icons-icon fas fa-envelope"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icons-icon fas fa-phone"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icons-icon fab fa-instagram"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icons-icon fab fa-facebook"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "contact-state",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "state-icon fas fa-lock"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "state-description",
                                                            children: "Vaše kontaktn\xed \xfadaje jsou uzamčen\xe9."
                                                        })
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
            })
        }));
    }
    if (type === "flat") {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content-header",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mid-container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingPfp_ListingPfp__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                        !listingInfo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "header-info-loading",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CircularProgress, {})
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "header-info",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "info-main",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "main-name",
                                            children: [
                                                "Byt ",
                                                listingInfo && listingInfo.flatBoxes.layout && listingInfo.flatBoxes.layout,
                                                " ",
                                                listingPremium && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fas fa-circle-check"
                                                })
                                            ]
                                        }),
                                        currentUser && currentUser.uid == listingInfo.userInfo.uid && listingInfo && listingInfo.visible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>setEditListing((prevState)=>!prevState
                                                )
                                            ,
                                            className: "main-edit-profile",
                                            children: editListing ? "Zpět" : "Upravit inzer\xe1t"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "main-actions",
                                            children: [
                                                listingFans && currentUser && listingInfo && currentUser.uid != listingInfo.userInfo.uid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    onClick: ()=>handleLike()
                                                    ,
                                                    className: `fa${listingLiked ? "s" : "r"} fa-heart main-like`
                                                }),
                                                listingInfo && currentUser && listingInfo.userInfo.uid != currentUser.uid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    onClick: ()=>setMoreInfoOpen((prevState)=>!prevState
                                                        )
                                                    ,
                                                    className: "main-more fas fa-ellipsis-h"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: `main-more-list ${moreInfoOpen && "active"}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                onClick: ()=>{
                                                    setReportDialog(true);
                                                    setMoreInfoOpen(false);
                                                },
                                                children: "Nahl\xe1sit uživatele"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "main-description",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: listingInfo && listingInfo.flatBoxes.location
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingInfoImportant_ListingInfoImportant__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                !cr ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingContact_ListingContact__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "info-contact",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "contact-icons",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "icons-icon fas fa-envelope"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "icons-icon fas fa-phone"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "icons-icon fab fa-instagram"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "icons-icon fab fa-facebook"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "contact-state",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "state-icon fas fa-lock"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "state-description",
                                                    children: "Vaše kontaktn\xed \xfadaje jsou uzamčen\xe9."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        }));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingHeader);

});

/***/ }),

/***/ 4618:
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
/* harmony import */ var _contexts_ListingContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2882);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_3__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);
([_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_3__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


//Contexts


//Components
//MUI

const ListingInfoImportant = ()=>{
    const { currentUser  } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    const { type , listingInfo , editListing , budget , setBudget , stayTime , setStayTime , startTime , setStartTime , setSliderDialog  } = (0,_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_3__/* .useListing */ .u)();
    if (type === "flatmate") {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `info-important ${editListing ? "edit" : ""}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "important-item",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item-header",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: `header-icon ${editListing && "header-edit-icon"} fas fa-coins`
                                    }),
                                    editListing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "header-value header-value-edit-slider",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    budget && (budget >= 10000 ? budget.toString().substr(0, 2) + " " + budget.toString().substr(2, 6) : budget.toString().substr(0, 1) + " " + budget.toString().substr(1, 5)),
                                                    budget == 60000 && "+",
                                                    " Kč"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                onClick: ()=>setSliderDialog(true)
                                                ,
                                                className: "fas fa-gear"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "header-value",
                                        children: [
                                            listingInfo.mainInfo.budget >= 10000 ? listingInfo.mainInfo.budget.toString().substr(0, 2) + " " + listingInfo.mainInfo.budget.toString().substr(2, 6) : listingInfo.mainInfo.budget.toString().substr(0, 1) + " " + listingInfo.mainInfo.budget.toString().substr(1, 5),
                                            listingInfo.mainInfo.budget == 60000 && "+",
                                            " Kč"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item-description",
                                children: "Rozpočet"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "important-item",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item-header",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: `header-icon ${editListing && "header-edit-icon"} fas fa-calendar-alt`
                                    }),
                                    editListing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                                        className: "select",
                                        size: "small",
                                        error: !stayTime || stayTime == "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.InputLabel, {
                                                className: "input-label",
                                                children: "Doba bydlen\xed"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Select, {
                                                onChange: (e)=>setStayTime(e.target.value)
                                                ,
                                                label: "Doba bydlen\xed",
                                                value: stayTime ? stayTime : listingInfo.mainInfo.stayTime ? listingInfo.mainInfo.stayTime : "",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Kr\xe1tkodob\xe1",
                                                        children: "Kr\xe1tkodob\xe1"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "1 rok",
                                                        children: "1 rok"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Dlouhodob\xe1",
                                                        children: "Dlouhodob\xe1"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Neurčito",
                                                        children: "Neurčito"
                                                    })
                                                ]
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-value",
                                        children: listingInfo.mainInfo.stayTime
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item-description",
                                children: "Doba bydlen\xed"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "important-item",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item-header",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: `header-icon ${editListing && "header-edit-icon"} fas fa-shuttle-van`
                                    }),
                                    editListing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                                        className: "select",
                                        size: "small",
                                        error: !startTime || startTime == "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.InputLabel, {
                                                className: "input-label",
                                                children: "Doba nas."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Select, {
                                                onChange: (e)=>setStartTime(e.target.value)
                                                ,
                                                label: "Doba bydlen\xed",
                                                value: startTime ? startTime : listingInfo.mainInfo.startTime ? listingInfo.mainInfo.startTime : "",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Okamžitě",
                                                        children: "Okamžitě"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Př\xedšt\xed měs\xedc",
                                                        children: "Př\xedšt\xed měs\xedc"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Př\xedšt\xed rok",
                                                        children: "Př\xedšt\xed rok"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Neurčito",
                                                        children: "Neurčito"
                                                    })
                                                ]
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-value",
                                        children: listingInfo.mainInfo.startTime
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item-description",
                                children: "Doba nastěhov\xe1n\xed"
                            })
                        ]
                    })
                ]
            })
        }));
    }
    if (type === "flat") {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `info-important ${editListing ? "edit" : ""}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "important-item",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item-header",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "header-icon fas fa-coins"
                                    }),
                                    editListing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "header-value header-value-edit-slider",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    budget && (budget >= 10000 ? budget.toString().substr(0, 2) + " " + budget.toString().substr(2, 6) : budget.toString().substr(0, 1) + " " + budget.toString().substr(1, 5)),
                                                    budget == 60000 && "+",
                                                    " Kč"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                onClick: ()=>setSliderDialog(true)
                                                ,
                                                className: "fas fa-gear"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "header-value",
                                        children: [
                                            listingInfo.mainInfo.price >= 10000 ? listingInfo.mainInfo.price.toString().substr(0, 2) + " " + listingInfo.mainInfo.price.toString().substr(2, 6) : listingInfo.mainInfo.price.toString().substr(0, 1) + " " + listingInfo.mainInfo.price.toString().substr(1, 5),
                                            listingInfo.mainInfo.price == 60000 && "+",
                                            " Kč"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item-description",
                                children: "Měs\xedčn\xed n\xe1jemn\xe9"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "important-item",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item-header",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "header-icon fas fa-calendar-alt"
                                    }),
                                    editListing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                                        className: "select",
                                        size: "small",
                                        error: !stayTime || stayTime == "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.InputLabel, {
                                                className: "input-label",
                                                children: "Doba bydlen\xed"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Select, {
                                                onChange: (e)=>setStayTime(e.target.value)
                                                ,
                                                label: "Doba bydlen\xed",
                                                value: stayTime ? stayTime : listingInfo.mainInfo.stayTime ? listingInfo.mainInfo.stayTime : "",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Kr\xe1tkodob\xe1",
                                                        children: "Kr\xe1tkodob\xe1"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "1 rok",
                                                        children: "1 rok"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Dlouhodob\xe1",
                                                        children: "Dlouhodob\xe1"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Neurčito",
                                                        children: "Neurčito"
                                                    })
                                                ]
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-value",
                                        children: listingInfo.mainInfo.stayTime
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item-description",
                                children: "Doba bydlen\xed"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "important-item",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item-header",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "header-icon fas fa-shuttle-van"
                                    }),
                                    editListing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
                                        className: "select",
                                        size: "small",
                                        error: !startTime || startTime == "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.InputLabel, {
                                                className: "input-label",
                                                children: "Doba nas."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Select, {
                                                onChange: (e)=>setStartTime(e.target.value)
                                                ,
                                                label: "Doba nastěhov\xe1n\xed",
                                                value: startTime ? startTime : listingInfo.mainInfo.startTime ? listingInfo.mainInfo.startTime : "",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Okamžitě",
                                                        children: "Okamžitě"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Př\xedšt\xed měs\xedc",
                                                        children: "Př\xedšt\xed měs\xedc"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Př\xedšt\xed rok",
                                                        children: "Př\xedšt\xed rok"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                        value: "Neurčito",
                                                        children: "Neurčito"
                                                    })
                                                ]
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "header-value",
                                        children: listingInfo.mainInfo.startTime
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item-description",
                                children: "Doba nastěhov\xe1n\xed"
                            })
                        ]
                    })
                ]
            })
        }));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingInfoImportant);

});

/***/ }),

/***/ 4609:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_2__]);
_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


//COntexts

const ListingPfp = ()=>{
    const { type , listingInfo , editListing , setGalleryInput , addedPfp , pfp , listingImgs , addedListingImgs , handleImgDelete  } = (0,_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_2__/* .useListing */ .u)();
    if (type === "flatmate") {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "header-pfp-container",
            children: [
                editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `container-edit-icon ${editListing && "active"}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            onClick: ()=>{
                                setGalleryInput({
                                    open: true,
                                    index: -1
                                });
                            },
                            className: "fas fa-camera"
                        }),
                        (addedPfp || pfp) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            onClick: ()=>handleImgDelete("pfp")
                            ,
                            className: "fas fa-trash"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "pfp-container-edit"
                }),
                listingInfo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: addedPfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "header-pfp",
                        src: URL.createObjectURL(addedPfp)
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: pfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "header-pfp",
                            src: pfp,
                            alt: ""
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: listingInfo.userInfo.gender === "male" ? "/img/pfps/radek-pfp.png" : "/img/pfps/radka-pfp.png",
                            className: "header-pfp"
                        })
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "header-pfp"
                })
            ]
        }));
    }
    if (type === "flat") {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "header-pfp-container",
            children: [
                editListing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `container-edit-icon`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            onClick: ()=>{
                                setGalleryInput({
                                    open: true,
                                    index: 0
                                });
                            },
                            className: "fas fa-camera"
                        }),
                        (addedListingImgs[0] || listingImgs[0]) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            onClick: ()=>handleImgDelete("main")
                            ,
                            className: "fas fa-trash"
                        })
                    ]
                }),
                listingInfo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: addedListingImgs && addedListingImgs[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: URL.createObjectURL(addedListingImgs[0]),
                        className: "header-pfp"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: listingImgs && listingImgs[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "header-pfp",
                            src: listingImgs[0],
                            alt: ""
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/img/listing/default-byt.jpg",
                            className: "header-pfp"
                        })
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "header-pfp"
                })
            ]
        }));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingPfp);

});

/***/ }),

/***/ 1813:
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


//Contexts

//MUI

const ListingOpeningBoxes = ()=>{
    const { listingInfo , editListing , listingUsername , listingGender , listingAge , pfp , addedPfp , setGalleryInput , listingPremium  } = (0,_contexts_ListingContext__WEBPACK_IMPORTED_MODULE_2__/* .useListing */ .u)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "body-opening-boxes",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `boxes-profile-info ${listingPremium && "premium"}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "profile-info-pfp-container",
                        children: [
                            editListing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>setGalleryInput({
                                        open: true,
                                        index: -1
                                    })
                                ,
                                className: "pfp-container-edit-icon",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fas fa-camera"
                                })
                            }),
                            addedPfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: URL.createObjectURL(addedPfp),
                                className: "profile-info-pfp"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: listingInfo && pfp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: pfp,
                                    className: "profile-info-pfp"
                                }) : listingInfo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `/img/pfps/${listingGender === "male" ? "radek" : "radka"}-pfp.png`,
                                    className: "profile-info-pfp"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "profile-info-pfp"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "profile-info-text",
                        children: [
                            !listingInfo && !listingUsername ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                variant: "text",
                                sx: {
                                    width: 50
                                }
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-name",
                                children: listingUsername
                            }),
                            !listingInfo && !listingUsername ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                                variant: "text",
                                sx: {
                                    width: 30
                                }
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-description",
                                children: [
                                    listingGender === "male" ? "Muž" : listingGender === "female" ? "Žena" : listingGender === "other" ? "Jin\xe9" : "",
                                    ", ",
                                    listingAge
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "boxes-map-container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "map-overlay",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Již brzy ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fas fa-lock"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/img/listing/mapa.png",
                        alt: "",
                        className: "boxes-map"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingOpeningBoxes);

});

/***/ }),

/***/ 5800:
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

const Tagger = ({ variant , addedTags , setAddedTags , setTagOverlay , existingTags  })=>{
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
    //Effect
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (existingTags && !addedTags) {
            fillExistingTags();
        }
    }, [
        existingTags
    ]);
    //Functions
    const fillExistingTags = ()=>{
        if (variant === "person") {
            setAddedTags(existingTags);
            setGenderTag(existingTags.gender ? existingTags.gender : []);
            setAgeTag(existingTags.age ? existingTags.age : []);
            setSmokingTag(existingTags.smoking ? existingTags.smoking : "");
            setJobTag(existingTags.job ? existingTags.job : []);
            setLocationTag(existingTags.location ? existingTags.location : "");
        }
        if (variant === "flat") {
            setAddedTags(existingTags);
            setLocationTag(existingTags.location ? existingTags.location : "");
            setLayoutTag(existingTags.layout ? existingTags.layout : "");
            setInternetTag(existingTags.internet ? existingTags.internet : "");
            setElevatorTag(existingTags.elevator ? existingTags.elevator : "");
            setPetAllowedTag(existingTags.petAllowed ? existingTags.petAllowed : "");
            setSmokingAllowedTag(existingTags.smokingAllowed ? existingTags.smokingAllowed : "");
        }
    };
    const handleAdd = ()=>{
        if (variant === "person") {
            setAddedTags({
                gender: genderTag,
                age: ageTag,
                smoking: smokingTag,
                job: jobTag
            });
        }
        if (variant === "flat") {
            setAddedTags({
                location: locationTag,
                layout: layoutTag,
                internet: internetTag,
                elevator: elevatorTag,
                petAllowed: petAllowedTag,
                smokingAllowed: smokingAllowedTag
            });
        }
        setTagOverlay(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "tagger",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                onClick: ()=>setTagOverlay(false)
                ,
                className: "tagger-close fas fa-times"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tagger-header",
                children: variant === "person" ? "Koho hled\xe1m?" : "Jak\xe9 bydlen\xed hled\xe1m?"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "tagger-description",
                children: [
                    "Zde můžete zaklikat vaše preference",
                    variant === "person" ? " ide\xe1ln\xedho spolubydl\xedc\xedho." : " ide\xe1ln\xedho bydlen\xed.",
                    " Pokud je pro v\xe1s dan\xe1 hodnota irelevantn\xed, jednoduše j\xed vynechte a zaklikejte vše, co je pro v\xe1s důležit\xe9."
                ]
            }),
            variant === "person" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "tagger-section",
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
                        className: "tagger-section",
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
                                        active: ageTag.includes("26-34"),
                                        onClick: ()=>{
                                            let value = "26-34";
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
                                        children: "26-34"
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
                        className: "tagger-section",
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
                        className: "tagger-section",
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
                        className: "tagger-section",
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
                        className: "tagger-section",
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
                        className: "tagger-section",
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
                        className: "tagger-section",
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
                        className: "tagger-section",
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
                        className: "tagger-section",
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tagger-button",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>handleAdd()
                    ,
                    className: "main-btn",
                    children: "Přidat tagy"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tagger);

});

/***/ })

};
;