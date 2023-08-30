exports.id = 572;
exports.ids = [572];
exports.modules = {

/***/ 3705:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1197));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5024));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9394));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 610));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 232));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9180))

/***/ }),

/***/ 4617:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_icons_Arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4729);
/* harmony import */ var _public_icons_asteroid_big_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5489);
/* harmony import */ var _public_icons_asteroid_small_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4311);
/* harmony import */ var _public_icons_danger_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1317);
/* harmony import */ var _public_icons_diameter_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2939);
/* harmony import */ var _styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3011);
/* harmony import */ var _styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6067);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6828);
/* __next_internal_client_entry_do_not_use__ default auto */ 











const Asteroid = ({ item, date, activ, addOrderLists, getItemId })=>{
    const [distanceKm, setDistanceKm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [distanceLunar, setDistanceLunar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [flag, setIsFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [status, setIsStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let newWords = "";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        for(let key in item.close_approach_data){
            let distanceKilometers = Number(item.close_approach_data[key].miss_distance?.kilometers);
            let distanceLun = Number(item.close_approach_data[key].miss_distance?.lunar);
            setDistanceKm(Math.round(distanceKilometers));
            setDistanceLunar(Math.round(distanceLun));
        }
    }, [
        distanceKm,
        distanceLunar
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSize(Math.floor(item?.estimated_diameter?.meters.estimated_diameter_max));
    }, []);
    const sklonenie = (num, txt, cases = [
        2,
        0,
        1,
        1,
        1,
        2
    ])=>{
        newWords = txt[num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]];
    };
    sklonenie(distanceLunar, _utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .WORDS */ .Cq);
    const MouseOver = ()=>{
        setIsFlag(true);
    };
    const MouseOut = ()=>{
        setIsFlag(false);
    };
    const changeStatus = ()=>{
        addOrderLists(item);
        setIsStatus(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),
                onClick: async ()=>{
                    getItemId(item);
                },
                children: date
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().boxDist),
                        children: [
                            activ ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().distance),
                                children: [
                                    distanceKm,
                                    " км"
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().distance),
                                children: [
                                    distanceLunar,
                                    " ",
                                    newWords
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _public_icons_Arrow_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                alt: "стрелка",
                                className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().arrow)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: +size < 100 ? _public_icons_asteroid_small_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z : _public_icons_asteroid_big_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                        alt: "астероид",
                        className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().asteroid)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().boxName),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().name),
                                children: item.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().boxSize),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: _public_icons_diameter_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                        alt: "диаметр",
                                        className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().diameter)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().size),
                                        children: [
                                            size,
                                            "m"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().boxOrder),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_8__/* .Button */ .zx, {
                        onMousOver: MouseOver,
                        onMouseOut: MouseOut,
                        title: status ? "В КОРЗИНЕ" : "ЗАКАЗАТЬ",
                        handleClick: changeStatus,
                        containerStyles: flag ? (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().hoverButton) : (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().button),
                        stylesTitle: status ? (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().hoverTitle) : flag ? (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().hoverTitle) : (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().titleBtn),
                        btnType: "button"
                    }),
                    item.is_potentially_hazardous_asteroid ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: _public_icons_danger_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                        alt: "опасно",
                        className: (_styles_Asteroid_module_css__WEBPACK_IMPORTED_MODULE_10___default().danger)
                    }) : ""
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asteroid);


/***/ }),

/***/ 1197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1563);
/* harmony import */ var _styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const AsteroidCharacteristick = ({ item })=>{
    const [astronomical, setAstronomical] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [kilometers, setKilometers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [lunar, setLunar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [miles, setMiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [kilometersPerHour, setKilometersPerHour] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [kilometersPerSecond, setKilometersPerSecond] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [milesPerHour, setMilesPerHour] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (typeof item !== "undefined") {
            setAstronomical(item.miss_distance.astronomical);
            setKilometers(item.miss_distance.kilometers);
            setLunar(item.miss_distance.lunar);
            setMiles(item.miss_distance.miles);
            setKilometersPerHour(item.relative_velocity.kilometers_per_hour);
            setKilometersPerSecond(item.relative_velocity.kilometers_per_hour);
            setMilesPerHour(item.relative_velocity.miles_per_hour);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: (_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default().characteristick),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: (_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default().date),
                children: [
                    "Дата сближения: ",
                    item.close_approach_date
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: (_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default().orbiting),
                children: [
                    "По какой орбите движется: ",
                    item.orbiting_body
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: (_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
                        children: [
                            "Дистанция:",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default().distance),
                                children: [
                                    astronomical,
                                    " astronomical"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default().distance),
                                children: [
                                    kilometers,
                                    " kilometers"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default().distance),
                                children: [
                                    lunar,
                                    " lunar"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default().distance),
                                children: [
                                    miles,
                                    " miles"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: (_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
                        children: [
                            " ",
                            "Скорость:",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default().velocity),
                                children: [
                                    kilometersPerHour,
                                    " km/h"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default().velocity),
                                children: [
                                    kilometersPerSecond,
                                    " km/s"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_styles_AsteroidCharacteristick_module_css__WEBPACK_IMPORTED_MODULE_2___default().velocity),
                                children: [
                                    milesPerHour,
                                    " mil/h"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AsteroidCharacteristick);


/***/ }),

/***/ 5024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_AsteroidsLists_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3370);
/* harmony import */ var _styles_AsteroidsLists_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_AsteroidsLists_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6828);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const AsteroidsLists = ({ mainData, loading, addOrderLists, getItemId, date })=>{
    const [info, setInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [activ, setIsActiv] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [dateList, setDateList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInfo(mainData || []);
        setDateList(date || "");
    }, [
        loading
    ]);
    const handleClick = ()=>{
        setIsActiv(!activ);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: (_styles_AsteroidsLists_module_css__WEBPACK_IMPORTED_MODULE_3___default().lists),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_AsteroidsLists_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_styles_AsteroidsLists_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                        children: "Ближайшие подлёты астероидов"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_AsteroidsLists_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: activ ? (_styles_AsteroidsLists_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn) : (_styles_AsteroidsLists_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn_activ),
                                onClick: handleClick,
                                children: "в километрах"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_styles_AsteroidsLists_module_css__WEBPACK_IMPORTED_MODULE_3___default().span),
                                children: "|"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: activ ? (_styles_AsteroidsLists_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn_activ) : (_styles_AsteroidsLists_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn),
                                onClick: handleClick,
                                children: "в лунных орбитах"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: (_styles_AsteroidsLists_module_css__WEBPACK_IMPORTED_MODULE_3___default().loading),
                    children: "Loading..."
                }) : (info?.map((prop)=>{
                    return prop.map((subItem, i)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_2__/* .Asteroid */ .lh, {
                            item: subItem,
                            date: dateList,
                            activ: activ,
                            addOrderLists: addOrderLists,
                            getItemId: getItemId
                        }, i);
                    });
                }))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AsteroidsLists);


/***/ }),

/***/ 9394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
const Button = ({ title, containerStyles, stylesTitle, handleClick, btnType, onMousOver, onMouseOut })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: btnType || "button",
        onClick: handleClick,
        className: `${containerStyles}`,
        onMouseOver: onMousOver,
        onMouseOut: onMouseOut,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: `${stylesTitle}`,
            children: title
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 9180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9441);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Header = ()=>{
    const clearLocal = ()=>{
        localStorage.clear();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        onClick: clearLocal,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
                    children: "ARMAGEDDON 2023"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),
                    children: [
                        "ООО “Команда им. Б. Уиллиса”. ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " Взрываем астероиды с 1998 года."
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_icons_Arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4729);
/* harmony import */ var _public_icons_asteroid_big_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5489);
/* harmony import */ var _public_icons_asteroid_small_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4311);
/* harmony import */ var _public_icons_danger_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1317);
/* harmony import */ var _public_icons_diameter_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2939);
/* harmony import */ var _styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(272);
/* harmony import */ var _styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const OrderItem = ({ item })=>{
    const [kilometers, setKilometers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [lunar, setLunar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [distance, setDistance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        for(let key in item.close_approach_data){
            let newArr = item.close_approach_data[key];
            setDate(newArr.close_approach_date);
            setKilometers(item.close_approach_data[key].miss_distance.kilometers);
            setLunar(item.close_approach_data[key].miss_distance.lunar);
        }
    }, [
        kilometers,
        lunar
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setDistance(kilometers ? Math.round(+kilometers) : Math.round(+lunar));
    }, [
        kilometers,
        lunar
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSize(Math.floor(item.estimated_diameter?.meters.estimated_diameter_max));
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
                children: date
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().boxDist),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().distance),
                                children: [
                                    distance,
                                    "км"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _public_icons_Arrow_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                alt: "стрелка",
                                className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().arrow)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: +size < 100 ? _public_icons_asteroid_small_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z : _public_icons_asteroid_big_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                        alt: "астероид",
                        className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().asteroid)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().boxName),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().name),
                                children: item.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().boxSize),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: _public_icons_diameter_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                        alt: "диаметр",
                                        className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().diameter)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().size),
                                        children: [
                                            size,
                                            "m"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().boxOrder),
                children: item.is_potentially_hazardous_asteroid ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: _public_icons_danger_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                    alt: "опасно",
                    className: (_styles_OrderItem_module_css__WEBPACK_IMPORTED_MODULE_8___default().danger)
                }) : ""
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderItem);


/***/ }),

/***/ 6828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lh: () => (/* reexport */ Asteroid["default"]),
  tc: () => (/* reexport */ AsteroidCharacteristick["default"]),
  Wx: () => (/* reexport */ AsteroidsLists["default"]),
  LX: () => (/* reexport */ components_Basket),
  zx: () => (/* reexport */ Button["default"]),
  Dd: () => (/* reexport */ OrderItem["default"])
});

// UNUSED EXPORTS: Header

// EXTERNAL MODULE: ./app/components/Asteroid.tsx
var Asteroid = __webpack_require__(610);
// EXTERNAL MODULE: ./app/components/AsteroidCharacteristick.tsx
var AsteroidCharacteristick = __webpack_require__(1197);
// EXTERNAL MODULE: ./app/components/AsteroidsLists.tsx
var AsteroidsLists = __webpack_require__(5024);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/styles/Basket.module.css
var Basket_module = __webpack_require__(1101);
var Basket_module_default = /*#__PURE__*/__webpack_require__.n(Basket_module);
// EXTERNAL MODULE: ./app/utils/constants.ts
var constants = __webpack_require__(6067);
;// CONCATENATED MODULE: ./app/components/Basket.tsx





const Basket = ({ orderLists })=>{
    let newEnding = "";
    const sklonenie = (num, txt, cases = [
        2,
        0,
        1,
        1,
        1,
        2
    ])=>{
        newEnding = txt[num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]];
    };
    sklonenie(orderLists.length, constants/* ENDINGS */.it);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (Basket_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Basket_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (Basket_module_default()).title,
                        children: "Корзина"
                    }),
                    orderLists.length == 0 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Basket_module_default()).asteroid,
                        children: "Добавьте заказ"
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: (Basket_module_default()).counter,
                        children: [
                            orderLists.length,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: (Basket_module_default()).asteroid,
                                children: [
                                    "астероид",
                                    newEnding
                                ]
                            })
                        ]
                    })
                ]
            }),
            orderLists.length == 0 ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                className: (Basket_module_default()).link,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button["default"], {
                    title: "Отправить",
                    containerStyles: (Basket_module_default()).disabled,
                    stylesTitle: (Basket_module_default()).titleBtn,
                    btnType: "button"
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: {
                    pathname: "/order",
                    query: {
                        search: "search"
                    }
                },
                className: (Basket_module_default()).link,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button["default"], {
                    title: "Отправить",
                    containerStyles: (Basket_module_default()).button,
                    stylesTitle: (Basket_module_default()).titleBtn,
                    btnType: "button"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Basket = (Basket);

// EXTERNAL MODULE: ./app/components/Button.tsx
var Button = __webpack_require__(9394);
// EXTERNAL MODULE: ./app/components/Header.tsx
var Header = __webpack_require__(9180);
// EXTERNAL MODULE: ./app/components/OrderItem.tsx
var OrderItem = __webpack_require__(232);
;// CONCATENATED MODULE: ./app/components/index.ts










/***/ }),

/***/ 6067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cq: () => (/* binding */ WORDS),
/* harmony export */   it: () => (/* binding */ ENDINGS)
/* harmony export */ });
/* unused harmony export MAIN_API */
const MAIN_API = "https://api.nasa.gov/neo/rest/v1/feed?";
const WORDS = [
    "лунная орбита",
    "лунные орбиты",
    "лунных орбит"
];
const ENDINGS = [
    " ",
    "а",
    "ов"
];


/***/ }),

/***/ 3011:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Asteroid_wrapper__ld9F4",
	"title": "Asteroid_title__5quQ4",
	"container": "Asteroid_container__UJCAq",
	"boxDist": "Asteroid_boxDist__CYnMd",
	"distance": "Asteroid_distance__fC71u",
	"arrow": "Asteroid_arrow__NcFVT",
	"asteroid": "Asteroid_asteroid__V_yoJ",
	"boxName": "Asteroid_boxName__oQLIA",
	"name": "Asteroid_name__JNoG_",
	"boxSize": "Asteroid_boxSize__2jhQG",
	"diameter": "Asteroid_diameter__Q_g5U",
	"size": "Asteroid_size__6e6xb",
	"boxOrder": "Asteroid_boxOrder__ie58x",
	"button": "Asteroid_button__QVqlO",
	"hoverButton": "Asteroid_hoverButton__x1z4T",
	"titleBtn": "Asteroid_titleBtn__Cju7T",
	"hoverTitle": "Asteroid_hoverTitle__qQHEu",
	"linkItem": "Asteroid_linkItem__i6S5E"
};


/***/ }),

/***/ 1563:
/***/ ((module) => {

// Exports
module.exports = {
	"characteristick": "AsteroidCharacteristick_characteristick__Oa6Kz",
	"date": "AsteroidCharacteristick_date__SOeHG",
	"orbiting": "AsteroidCharacteristick_orbiting__tzNdN",
	"container": "AsteroidCharacteristick_container__jJrBl",
	"distance": "AsteroidCharacteristick_distance__sPtmC",
	"velocity": "AsteroidCharacteristick_velocity__APcak"
};


/***/ }),

/***/ 3370:
/***/ ((module) => {

// Exports
module.exports = {
	"lists": "AsteroidsLists_lists__ocPj_",
	"title": "AsteroidsLists_title___d3pw",
	"container": "AsteroidsLists_container__fHjwF",
	"btn": "AsteroidsLists_btn__xHrp3",
	"btn_activ": "AsteroidsLists_btn_activ__cejXX",
	"span": "AsteroidsLists_span__caXba",
	"loading": "AsteroidsLists_loading__F0jUV"
};


/***/ }),

/***/ 1101:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Basket_wrapper__yDtmc",
	"container": "Basket_container__1YVl1",
	"title": "Basket_title__2EfW1",
	"counter": "Basket_counter__eue7A",
	"asteroid": "Basket_asteroid__mh05D",
	"button": "Basket_button__Tnx4o",
	"disabled": "Basket_disabled__ytEwz",
	"titleBtn": "Basket_titleBtn__bIcgk",
	"link": "Basket_link__YpQ34"
};


/***/ }),

/***/ 9441:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__H0gOn",
	"title": "Header_title__ht2rD",
	"description": "Header_description__ukU0A"
};


/***/ }),

/***/ 272:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "OrderItem_wrapper__IK_Uz",
	"title": "OrderItem_title__7xrDO",
	"container": "OrderItem_container__NRmhA",
	"boxDist": "OrderItem_boxDist__qXXh0",
	"distance": "OrderItem_distance__qWMAQ",
	"arrow": "OrderItem_arrow__ckRt2",
	"asteroid": "OrderItem_asteroid__secDZ",
	"boxName": "OrderItem_boxName__42M85",
	"name": "OrderItem_name__DX_2J",
	"boxSize": "OrderItem_boxSize__84ixC",
	"diameter": "OrderItem_diameter__8NFGz",
	"size": "OrderItem_size__0B7CC",
	"boxOrder": "OrderItem_boxOrder__WLNhZ",
	"button": "OrderItem_button__GY1nO",
	"titleBtn": "OrderItem_titleBtn__HK3Mo"
};


/***/ }),

/***/ 2138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./app/components/Asteroid.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\jablo\dev\asteroids-search\app\components\Asteroid.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Asteroid = ((/* unused pure expression or super */ null && (__default__)));
;// CONCATENATED MODULE: ./app/components/AsteroidCharacteristick.tsx

const AsteroidCharacteristick_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\jablo\dev\asteroids-search\app\components\AsteroidCharacteristick.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AsteroidCharacteristick_esModule, $$typeof: AsteroidCharacteristick_$$typeof } = AsteroidCharacteristick_proxy;
const AsteroidCharacteristick_default_ = AsteroidCharacteristick_proxy.default;


/* harmony default export */ const AsteroidCharacteristick = ((/* unused pure expression or super */ null && (AsteroidCharacteristick_default_)));
;// CONCATENATED MODULE: ./app/components/AsteroidsLists.tsx

const AsteroidsLists_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\jablo\dev\asteroids-search\app\components\AsteroidsLists.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AsteroidsLists_esModule, $$typeof: AsteroidsLists_$$typeof } = AsteroidsLists_proxy;
const AsteroidsLists_default_ = AsteroidsLists_proxy.default;


/* harmony default export */ const AsteroidsLists = ((/* unused pure expression or super */ null && (AsteroidsLists_default_)));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
;// CONCATENATED MODULE: ./app/components/Basket.tsx





const Basket = ({ orderLists })=>{
    let newEnding = "";
    const sklonenie = (num, txt, cases = [
        2,
        0,
        1,
        1,
        1,
        2
    ])=>{
        newEnding = txt[num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]];
    };
    sklonenie(orderLists.length, ENDINGS);
    return /*#__PURE__*/ _jsxs("section", {
        className: styles.wrapper,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: styles.container,
                children: [
                    /*#__PURE__*/ _jsx("h3", {
                        className: styles.title,
                        children: "Корзина"
                    }),
                    orderLists.length == 0 ? /*#__PURE__*/ _jsx("span", {
                        className: styles.asteroid,
                        children: "Добавьте заказ"
                    }) : /*#__PURE__*/ _jsxs("span", {
                        className: styles.counter,
                        children: [
                            orderLists.length,
                            /*#__PURE__*/ _jsxs("span", {
                                className: styles.asteroid,
                                children: [
                                    "астероид",
                                    newEnding
                                ]
                            })
                        ]
                    })
                ]
            }),
            orderLists.length == 0 ? /*#__PURE__*/ _jsx(Link, {
                href: "/",
                className: styles.link,
                children: /*#__PURE__*/ _jsx(Button, {
                    title: "Отправить",
                    containerStyles: styles.disabled,
                    stylesTitle: styles.titleBtn,
                    btnType: "button"
                })
            }) : /*#__PURE__*/ _jsx(Link, {
                href: {
                    pathname: "/order",
                    query: {
                        search: "search"
                    }
                },
                className: styles.link,
                children: /*#__PURE__*/ _jsx(Button, {
                    title: "Отправить",
                    containerStyles: styles.button,
                    stylesTitle: styles.titleBtn,
                    btnType: "button"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Basket = ((/* unused pure expression or super */ null && (Basket)));

;// CONCATENATED MODULE: ./app/components/Button.tsx

const Button_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\jablo\dev\asteroids-search\app\components\Button.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Button_esModule, $$typeof: Button_$$typeof } = Button_proxy;
const Button_default_ = Button_proxy.default;


/* harmony default export */ const components_Button = ((/* unused pure expression or super */ null && (Button_default_)));
;// CONCATENATED MODULE: ./app/components/Header.tsx

const Header_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\jablo\dev\asteroids-search\app\components\Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Header_esModule, $$typeof: Header_$$typeof } = Header_proxy;
const Header_default_ = Header_proxy.default;


/* harmony default export */ const Header = (Header_default_);
;// CONCATENATED MODULE: ./app/components/OrderItem.tsx

const OrderItem_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\jablo\dev\asteroids-search\app\components\OrderItem.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: OrderItem_esModule, $$typeof: OrderItem_$$typeof } = OrderItem_proxy;
const OrderItem_default_ = OrderItem_proxy.default;


/* harmony default export */ const OrderItem = ((/* unused pure expression or super */ null && (OrderItem_default_)));
;// CONCATENATED MODULE: ./app/components/index.ts









;// CONCATENATED MODULE: ./app/layout.tsx



const metadata = {
    title: "Armagedon",
    description: "Поиск и уничтожение всех опасных астероидов"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "ru",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 4729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/asteroids-search/_next/static/media/Arrow.f52ab245.svg","height":6,"width":96,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 5489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/asteroids-search/_next/static/media/asteroid_big.57d00caa.svg","height":40,"width":37,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 4311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/asteroids-search/_next/static/media/asteroid_small.ba37fd02.svg","height":40,"width":22,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/asteroids-search/_next/static/media/danger.8d0ebeaa.svg","height":15,"width":67,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 2939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/asteroids-search/_next/static/media/diameter.c3a6ef34.svg","height":256,"width":256,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;