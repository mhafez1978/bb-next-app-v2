(() => {
var exports = {};
exports.id = 469;
exports.ids = [469];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 86819:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context");

/***/ }),

/***/ 39569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 17887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 68231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 54614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 53750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 79618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 23749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'services',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 97636)), "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/next projects/next-bb-app-v2/src/app/services/page.tsx"],
          
        }]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14809)), "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/next projects/next-bb-app-v2/src/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 95493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/next projects/next-bb-app-v2/src/app/services/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/services/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/services/page",
        pathname: "/services",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 67645:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 64725))

/***/ }),

/***/ 64725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ clientside_ServicesPage)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/PageHeader.tsx
var PageHeader = __webpack_require__(81463);
// EXTERNAL MODULE: ./node_modules/flowbite-react/lib/cjs/index.js
var cjs = __webpack_require__(83773);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 202 modules
var motion = __webpack_require__(38000);
;// CONCATENATED MODULE: ./src/components/ServiceDetailsRight.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const ServiceDetails = ({ scrollId, serviceTitle, serviceDetails, serviceImage, serviceAltText, background, color })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: scrollId,
            className: `bg-${background} py-10`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-[80vw] px-[80px] mx-auto flex flex-row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                        initial: {
                            x: "-50vw"
                        },
                        whileInView: {
                            x: 0
                        },
                        transition: {
                            delay: 0.2
                        },
                        className: "flex flex-row justify-start items-start max-h-[60vh] w-1/2 rounded overflow-hidden py-4 px-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: serviceImage,
                            width: "90%",
                            height: "90%",
                            alt: serviceAltText,
                            className: "p-2 drop-shadow-lg shadow-black"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                        initial: {
                            x: "50vw"
                        },
                        whileInView: {
                            x: 0
                        },
                        transition: {
                            delay: 0.2
                        },
                        className: "flex flex-col w-1/2 justify-center items-end",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col justify-start ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: `text-4xl mb-8 text-${color}`,
                                    children: serviceTitle
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `w-full  text-${color}`,
                                    children: serviceDetails
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const ServiceDetailsRight = (ServiceDetails);

;// CONCATENATED MODULE: ./src/components/ServiceDetailsLeft.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const ServiceDetailsLeft = ({ scrollId, serviceTitle, serviceDetails, serviceImage, serviceAltText, background, color })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: scrollId,
            className: `bg-${background} py-10`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-[80vw] px-[80px] mx-auto flex flex-row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                        initial: {
                            x: "-50vw"
                        },
                        whileInView: {
                            x: 0
                        },
                        transition: {
                            delay: 0.2
                        },
                        className: "flex flex-col w-1/2 justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: `text-${color} text-4xl mb-8`,
                                children: serviceTitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `text-${color} w-full`,
                                children: serviceDetails
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                        initial: {
                            x: "50vw"
                        },
                        whileInView: {
                            x: 0
                        },
                        transition: {
                            delay: 0.2
                        },
                        className: "flex flex-row justify-center items-end max-h-[60vh] w-1/2 rounded overflow-hidden py-4 px-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: serviceImage,
                            alt: serviceAltText,
                            width: "90%",
                            height: "90%",
                            className: "p-2 drop-shadow-lg shadow-black"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_ServiceDetailsLeft = (ServiceDetailsLeft);

;// CONCATENATED MODULE: ./src/clientside/ServicesPage.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const ServicesPage = ()=>{
    const [loaded, setLoaded] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setLoaded(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            loaded === false && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "z-50 bg-[#222222] h-[100vh] w-[100vw] absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "sr-only",
                        children: "Loading..."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(cjs.Spinner, {
                        "aria-label": "Warning spinner example",
                        color: "warning",
                        size: "xl",
                        className: "w-[300px] h-[300px]"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "py-8 text-center text-white text-3xl",
                        children: "Loading ..."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PageHeader/* default */.Z, {
                pageTitle: "Services"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full min-h-[20vh] flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_ServiceDetailsLeft, {
                            scrollId: "webdesign",
                            serviceTitle: "Web Design",
                            serviceDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima, dolores obcaecati magnam fugiat aliquid recusandae eum necessitatibus odit corporis ducimus praesentium possimus temporibus aliquam, aut, aspernatur reprehenderit asperiores nostrum",
                            serviceImage: "/images/web-design-service.png",
                            serviceAltText: "web-design-infographic",
                            background: "slate-400",
                            color: "slate-950"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ServiceDetailsRight, {
                            scrollId: "jamstack",
                            serviceTitle: "JameStack Apps",
                            serviceDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima, dolores obcaecati magnam fugiat aliquid recusandae eum necessitatibus odit corporis ducimus praesentium possimus temporibus aliquam, aut, aspernatur reprehenderit asperiores nostrum",
                            serviceImage: "/images/jamstack-apps.png",
                            serviceAltText: "text1",
                            background: "neutral-100",
                            color: "black"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_ServiceDetailsLeft, {
                            scrollId: "ecommerce",
                            serviceTitle: "E-Commerce",
                            serviceDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima, dolores obcaecati magnam fugiat aliquid recusandae eum necessitatibus odit corporis ducimus praesentium possimus temporibus aliquam, aut, aspernatur reprehenderit asperiores nostrum",
                            serviceImage: "/images/e-commerce-service.png",
                            serviceAltText: "text2",
                            background: "gray-900",
                            color: "neutral-100"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ServiceDetailsRight, {
                            scrollId: "online-marketing",
                            serviceTitle: "Online Marketing",
                            serviceDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima, dolores obcaecati magnam fugiat aliquid recusandae eum necessitatibus odit corporis ducimus praesentium possimus temporibus aliquam, aut, aspernatur reprehenderit asperiores nostrum",
                            serviceImage: "/images/online-marketing-service.png",
                            serviceAltText: "text1",
                            background: "neutral-100",
                            color: "slate-950"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_ServiceDetailsLeft, {
                            scrollId: "content-mgmt",
                            serviceTitle: "Content Management",
                            serviceDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima, dolores obcaecati magnam fugiat aliquid recusandae eum necessitatibus odit corporis ducimus praesentium possimus temporibus aliquam, aut, aspernatur reprehenderit asperiores nostrum",
                            serviceImage: "/images/content-mgmt-service.png",
                            serviceAltText: "text1",
                            background: "amber-400",
                            color: "slate-950"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const clientside_ServicesPage = (ServicesPage);


/***/ }),

/***/ 81463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BreadCrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27488);



const PageHeader = ({ pageTitle })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "z-40 skew-y-1 w-screen min-h-[50vh] mt-[-5vh] pt-20 border-b bg-[url('/images/bg-pageheader.png')] bg-cover bg-center bg-no-repeat text-black flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "z-50 -skew-y-1 text-4xl font-bold tracking-tight sm:text-6xl",
                children: pageTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "z-50 -skew-y-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BreadCrumbs__WEBPACK_IMPORTED_MODULE_2__["default"], {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);


/***/ }),

/***/ 97636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/clientside/ServicesPage.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/next projects/next-bb-app-v2/src/clientside/ServicesPage.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ServicesPage = (__default__);
;// CONCATENATED MODULE: ./src/app/services/page.tsx


const metadata = {
    title: "Blooming Brands | Services",
    description: "Websites and Online Marketing"
};
const Services = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ServicesPage, {});
};
/* harmony default export */ const page = (Services);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,493,773,0,887,488], () => (__webpack_exec__(23749)));
module.exports = __webpack_exports__;

})();