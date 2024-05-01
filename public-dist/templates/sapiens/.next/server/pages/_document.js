"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 13982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pageWrapperTemplate),
  "getServerSideProps": () => (/* binding */ getServerSideProps),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./sentry.server.config.ts
var sentry_server_config = __webpack_require__(90632);
// EXTERNAL MODULE: external "@sentry/nextjs"
var nextjs_ = __webpack_require__(58097);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./src/helpers/getDirectionFromLocale/getDirectionFromLocale.ts
var getDirectionFromLocale = __webpack_require__(70225);
// EXTERNAL MODULE: ../../node_modules/next/document.js
var next_document = __webpack_require__(331);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
;// CONCATENATED MODULE: ./pages/_document.tsx







class CustomDocument extends next_document["default"] {
    static async getInitialProps(ctx) {
        // From https://medium.com/swlh/server-side-rendering-styled-components-with-nextjs-1db1353e915e
        const sheet = new external_styled_components_namespaceObject.ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = ()=>originalRenderPage({
                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ (0,jsx_runtime_.jsx)(App, {
                                ...props
                            }))
                });
            const initialProps = await next_document["default"].getInitialProps(ctx);
            return {
                ...initialProps,
                styles: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        initialProps.styles,
                        sheet.getStyleElement()
                    ]
                })
            };
        } finally{
            sheet.seal();
        }
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            dir: (0,getDirectionFromLocale/* getDirectionFromLocale */.V)(this.props.locale),
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        this.props.styleTags,
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com",
                            crossOrigin: "anonymous"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(next_document.Main, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(next_document.NextScript, {})
                    ]
                })
            ]
        });
    }
}

var serverComponentModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': CustomDocument
});

/*
 * This file is a template for the code which will be substituted when our webpack loader handles non-API files in the
 * `pages/` directory.
 *
 * We use `__SENTRY_WRAPPING_TARGET_FILE__.cjs` as a placeholder for the path to the file being wrapped. Because it's not a real package,
 * this causes both TS and ESLint to complain, hence the pragma comments below.
 */

const userPageModule = serverComponentModule ;

const pageComponent = userPageModule ? userPageModule.default : undefined;

const origGetInitialProps = pageComponent ? pageComponent.getInitialProps : undefined;
const origGetStaticProps = userPageModule ? userPageModule.getStaticProps : undefined;
const origGetServerSideProps = userPageModule ? userPageModule.getServerSideProps : undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getInitialPropsWrappers = {
  '/_app': nextjs_.wrapAppGetInitialPropsWithSentry,
  '/_document': nextjs_.wrapDocumentGetInitialPropsWithSentry,
  '/_error': nextjs_.wrapErrorGetInitialPropsWithSentry,
};

const getInitialPropsWrapper = getInitialPropsWrappers['/_document'] || nextjs_.wrapGetInitialPropsWithSentry;

if (pageComponent && typeof origGetInitialProps === 'function') {
  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;
}

const getStaticProps =
  typeof origGetStaticProps === 'function'
    ? nextjs_.wrapGetStaticPropsWithSentry(origGetStaticProps, '/_document')
    : undefined;
const getServerSideProps =
  typeof origGetServerSideProps === 'function'
    ? nextjs_.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/_document')
    : undefined;

const pageWrapperTemplate = pageComponent ? nextjs_.wrapPageComponentWithSentry(pageComponent ) : pageComponent;




/***/ }),

/***/ 90632:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);
var _sentryCollisionFreeGlobalObject =  false ? 0 : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
_sentryCollisionFreeGlobalObject["__sentryRewritesTunnelPath__"] = "/monitoring-tunnel";
_sentryCollisionFreeGlobalObject["SENTRY_RELEASE"] = {
    "id": "kTD0p71nQnXEVazXXpwSL"
};
_sentryCollisionFreeGlobalObject["__sentryBasePath"] = undefined;
_sentryCollisionFreeGlobalObject["__rewriteFramesDistDir__"] = ".next";

_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.init({
    dsn: "https://dec3948f999386d49ee213ed5762c096@o4505980037824512.ingest.sentry.io/4505980355411968",
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 0
});


/***/ }),

/***/ 70225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getDirectionFromLocale)
/* harmony export */ });
const getDirectionFromLocale = (locale)=>{
    if (locale?.startsWith("he")) {
        return "rtl";
    }
    return "ltr";
};


/***/ }),

/***/ 58097:
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 94140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 89716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 76368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 56724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 18743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [331], () => (__webpack_exec__(13982)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=_document.js.map