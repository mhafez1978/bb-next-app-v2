"use strict";
exports.id = 488;
exports.ids = [488];
exports.modules = {

/***/ 27488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const BreadCrumbs = ()=>{
    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // if (path === "/") {
        //   setCurrentPage("Home");
        // } else if (path === "/about") {
        //   setCurrentPage("About");
        // } else if (path === "/services") {
        //   setCurrentPage("Services");
        // } else if (path === "/portfolio") {
        //   setCurrentPage("Portfolio");
        // } else if (path === "/latest-news") {
        //   setCurrentPage("Latest News");
        // } else if (path === "/contact") {
        //   setCurrentPage("Contact");
        // }
        switch(path){
            case "/":
                setCurrentPage("Home");
                break;
            case "/about":
                setCurrentPage("About");
                break;
            case "/services":
                setCurrentPage("Services");
                break;
            case "/portfolio":
                setCurrentPage("Portfolio");
                break;
            case "/latest-news":
                setCurrentPage("Latest News");
                break;
            case "/contact":
                setCurrentPage("contact");
                break;
            default:
                break;
        }
    }, [
        path
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-w-[15vw] flex flex-row mx-auto mt-4 gap-2 justify-center items-center rounded border-2 border-white py-1 px-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "You're here: "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "hover:text-white",
                href: "/",
                children: "Home"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: ">"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "hover:text-white",
                href: `//localhost:3000/${path}`,
                children: currentPage
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumbs);


/***/ })

};
;