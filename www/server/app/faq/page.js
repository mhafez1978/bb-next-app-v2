(() => {
var exports = {};
exports.id = 799;
exports.ids = [799];
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

/***/ 54500:
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
        'faq',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 23600)), "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/next projects/next-bb-app-v2/src/app/faq/page.tsx"],
          
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
const pages = ["/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/next projects/next-bb-app-v2/src/app/faq/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/faq/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/faq/page",
        pathname: "/faq",
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

/***/ 11498:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 27488))

/***/ }),

/***/ 23600:
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
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/components/BreadCrumbs.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/next projects/next-bb-app-v2/src/components/BreadCrumbs.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const BreadCrumbs = (__default__);
;// CONCATENATED MODULE: ./src/components/PageHeader.tsx



const PageHeader = ({ pageTitle })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "z-40 skew-y-1 w-screen min-h-[50vh] mt-[-5vh] pt-20 border-b bg-[url('/images/bg-pageheader.png')] bg-cover bg-center bg-no-repeat text-black flex flex-col justify-center items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "z-50 -skew-y-1 text-4xl font-bold tracking-tight sm:text-6xl",
                children: pageTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "z-50 -skew-y-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx(BreadCrumbs, {})
            })
        ]
    });
};
/* harmony default export */ const components_PageHeader = (PageHeader);

;// CONCATENATED MODULE: ./src/app/faq/page.tsx


const metadata = {
    title: "Blooming Brands | FAQ's",
    description: "Frequently Asked Questions"
};
const FAQPage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_PageHeader, {
                pageTitle: "Frequently Asked Questions"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-1/2 flex flex-col justify-start items-center py-10 bg-sky-600 text-white",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-4xl text-center font-black",
                            children: "Want to know how we're different ?"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-1/2 flex flex-col justify-start items-center py-10 bg-white text-black",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container mx-auto md:px-6 xl:px-24",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: "mb-32",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "mb-6 pl-6 text-3xl font-bold",
                                        children: "Frequently asked questions"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        id: "accordionFlushExample",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "mb-0",
                                                        id: "flush-headingOne",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            className: "group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400",
                                                            type: "button",
                                                            "data-te-collapse-init": true,
                                                            "data-te-target": "#flush-collapseOne",
                                                            "aria-expanded": "false",
                                                            "aria-controls": "flush-collapseOne",
                                                            children: [
                                                                "1. How long it takes to get a new website live online ?",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        viewBox: "0 0 16 16",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: "flush-collapseOne",
                                                        className: "!visible border-0",
                                                        "data-te-collapse-item": true,
                                                        "data-te-collapse-show": true,
                                                        "aria-labelledby": "flush-headingOne",
                                                        "data-te-parent": "#accordionFlush",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "py-4 px-5 text-neutral-500 dark:text-neutral-300",
                                                            children: "Minimum project timeline is 6 -8 weeks. However, this depends on the project there is no one size fits all. Our solutions are customized to fit your business objective."
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "mb-0",
                                                        id: "flush-headingTwo",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            className: "group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400",
                                                            type: "button",
                                                            "data-te-collapse-init": true,
                                                            "data-te-collapse-collapsed": true,
                                                            "data-te-target": "#flush-collapseTwo",
                                                            "aria-expanded": "false",
                                                            "aria-controls": "flush-collapseTwo",
                                                            children: [
                                                                "2. How do I know I’ll love my completed website",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        viewBox: "0 0 16 16",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: "flush-collapseTwo",
                                                        className: "!visible hidden border-0",
                                                        "data-te-collapse-item": true,
                                                        "aria-labelledby": "flush-headingTwo",
                                                        "data-te-parent": "#accordionFlush",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "py-4 px-5 text-neutral-500 dark:text-neutral-300",
                                                            children: "All designs are guaranteed. We guarantee to provide revisions until such time that you are happy with your website design and ready to proceed, without accruing additional expenses. Since the custom design process is broken down into two phases, wireframe blueprint layout, and then full detail photoshop design, you'll first see the structure in black and white. This process enables you to clearly prioritize any structural changes before the brand colors and any textures or other details are added.\xa0"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "mb-0",
                                                        id: "flush-headingThree",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            className: "group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400",
                                                            type: "button",
                                                            "data-te-collapse-init": true,
                                                            "data-te-collapse-collapsed": true,
                                                            "data-te-target": "#flush-collapseThree",
                                                            "aria-expanded": "false",
                                                            "aria-controls": "flush-collapseThree",
                                                            children: [
                                                                "3. Will I be able to make changes to the website once it’s published?",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        viewBox: "0 0 16 16",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: "flush-collapseThree",
                                                        className: "!visible hidden rounded-b-lg",
                                                        "data-te-collapse-item": true,
                                                        "aria-labelledby": "flush-headingThree",
                                                        "data-te-parent": "#accordionFlush",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "py-4 px-5 text-neutral-500 dark:text-neutral-300",
                                                            children: "Yes we will train you on how to make changes to the content on each page or add new pages."
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "mb-0",
                                                        id: "flush-headingFour",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            className: "group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400",
                                                            type: "button",
                                                            "data-te-collapse-init": true,
                                                            "data-te-collapse-collapsed": true,
                                                            "data-te-target": "#flush-collapseFour",
                                                            "aria-expanded": "false",
                                                            "aria-controls": "flush-collapseFour",
                                                            children: [
                                                                "4. Can I sell products through my website?",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        viewBox: "0 0 16 16",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: "flush-collapseFour",
                                                        className: "!visible hidden rounded-b-lg",
                                                        "data-te-collapse-item": true,
                                                        "aria-labelledby": "flush-headingFour",
                                                        "data-te-parent": "#accordionFlush",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "py-4 px-5 text-neutral-500 dark:text-neutral-300",
                                                            children: "eCommerce Add-On Package * Shop / Product Listing Page * Homepage call to action component to drive traffic to visit Shop or Featured Products * Product Detail Page * Cart Page * Some eCommerce stores allow user registration which includes login utility menu, registered user experience, forgot password, account dashboard for example * Checkout * Payment Gateway integration – Credit Card, Authorize.net, Stripe, Square, Paypal * Shipping integration – USPS, UPS, FedEx – some of these services require weights and dimensions on all products * Order verification and platform training for order fulfillment team"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "mb-0",
                                                        id: "flush-headingFive",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            className: "group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400",
                                                            type: "button",
                                                            "data-te-collapse-init": true,
                                                            "data-te-collapse-collapsed": true,
                                                            "data-te-target": "#flush-collapseFive",
                                                            "aria-expanded": "false",
                                                            "aria-controls": "flush-collapseFive",
                                                            children: [
                                                                "5. How many pages can my website have ?",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        viewBox: "0 0 16 16",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: "flush-collapseFive",
                                                        className: "!visible hidden rounded-b-lg",
                                                        "data-te-collapse-item": true,
                                                        "aria-labelledby": "flush-headingFive",
                                                        "data-te-parent": "#accordionFlush",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "py-4 px-5 text-neutral-500 dark:text-neutral-300",
                                                            children: "We have different development packages which contains a set number of pages that we create for the project, but once your team is trained on how to use the website they will be able to add as many pages as needed. We also offer a complete site management plan which includes unlimited updates and changes to your website."
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "mb-0",
                                                        id: "flush-headingSix",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            className: "group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400",
                                                            type: "button",
                                                            "data-te-collapse-init": true,
                                                            "data-te-collapse-collapsed": true,
                                                            "data-te-target": "#flush-collapseSix",
                                                            "aria-expanded": "false",
                                                            "aria-controls": "flush-collapseSix",
                                                            children: [
                                                                "6. Praesentium voluptatibus temporibus consequatur non aspernatur?",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        viewBox: "0 0 16 16",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: "flush-collapseSix",
                                                        className: "!visible hidden rounded-b-lg",
                                                        "data-te-collapse-item": true,
                                                        "aria-labelledby": "flush-headingSix",
                                                        "data-te-parent": "#accordionFlush",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "py-4 px-5 text-neutral-500 dark:text-neutral-300",
                                                            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio vitae inventore autem fugiat rerum sed laborum. Natus recusandae laboriosam quos pariatur corrupti id dignissimos deserunt, praesentium voluptatibus temporibus consequatur non aspernatur laborum rerum nemo dolorem libero inventore provident exercitationem sunt totam aperiam. Facere sunt quos commodi obcaecati temporibus alias amet! Quam quisquam laboriosam quae repellendus non cum adipisci odio?"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const page = (FAQPage);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,493,477,488], () => (__webpack_exec__(54500)));
module.exports = __webpack_exports__;

})();