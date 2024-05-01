"use strict";
exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 2072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ MainLayoutClasses),
/* harmony export */   "Z": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16593);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25237);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_2__, theme_index__WEBPACK_IMPORTED_MODULE_4__]);
([clsx__WEBPACK_IMPORTED_MODULE_2__, theme_index__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Header = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(97), __webpack_require__.e(487), __webpack_require__.e(577), __webpack_require__.e(975), __webpack_require__.e(54), __webpack_require__.e(622), __webpack_require__.e(694), __webpack_require__.e(404)]).then(__webpack_require__.bind(__webpack_require__, 84404)), {
    loadableGenerated: {
        modules: [
            "../src/components/layouts/MainLayout/MainLayout.tsx -> " + "../Header"
        ]
    }
});
const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(97), __webpack_require__.e(975), __webpack_require__.e(694), __webpack_require__.e(294), __webpack_require__.e(703)]).then(__webpack_require__.bind(__webpack_require__, 11703)), {
    loadableGenerated: {
        modules: [
            "../src/components/layouts/MainLayout/MainLayout.tsx -> " + "../Footer"
        ]
    }
});
const PREFIX = "MainLayout";
const MainLayoutClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "root",
    "main"
]);
const StyledMainLayout = (0,theme_index__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>({
        [`&.${MainLayoutClasses.root}`]: {
            display: "flex",
            flexDirection: "column",
            height: "100vh"
        },
        [`& .${MainLayoutClasses.main}`]: {
            flexGrow: 1
        }
    }));
const MainLayout = (props)=>{
    const { children , sx , className , footer =/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledMainLayout, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(MainLayoutClasses.root, className),
        sx: sx,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: MainLayoutClasses.main,
                children: children
            }),
            footer
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11762:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _MainLayout__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "Z": () => (/* reexport safe */ _MainLayout__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _MainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2072);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainLayout__WEBPACK_IMPORTED_MODULE_0__]);
_MainLayout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ NextSeoProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27074);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_1__, hooks_index__WEBPACK_IMPORTED_MODULE_2__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_1__, hooks_index__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const FAVICON_WIDTH = 64;
const NextSeoProvider = (props)=>{
    const { data: websiteData  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_2__/* .useGetWebsite */ .Rz)();
    const isExposedToSearchEngines = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(websiteData, "is_exposed_to_search_engines");
    const favIconSrc = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(websiteData, "fav_icon.src");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_4__.NextSeo, {
        noindex: !isExposedToSearchEngines,
        additionalLinkTags: [
            ...favIconSrc ? [
                {
                    rel: "icon",
                    href: (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getUrlWithTemplate */ .aN)({
                        url: favIconSrc,
                        width: FAVICON_WIDTH
                    })
                }
            ] : []
        ],
        ...props
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=268.js.map