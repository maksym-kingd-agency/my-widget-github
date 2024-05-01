"use strict";
exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 50682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* reexport */ Link),
  "Z": () => (/* reexport */ Link_Link)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(11377);
// EXTERNAL MODULE: ./src/components/links/NextLink/index.ts + 1 modules
var NextLink = __webpack_require__(4630);
;// CONCATENATED MODULE: ./src/components/links/Link/Link.tsx




const Link = (props)=>{
    const { t , children , href , ...rest } = props;
    const { t: translate  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
        href: href,
        ...rest,
        component: href ? NextLink/* default */.Z : "div" /* To not use link if href was not passed (NextLink does not expect 'undefined') */ ,
        children: t ? translate(t) : children
    });
};
/* harmony default export */ const Link_Link = (Link);

;// CONCATENATED MODULE: ./src/components/links/Link/index.ts





/***/ }),

/***/ 89452:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ NotificationView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_3__]);
hooks_index__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const NotificationView = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { title , children , sx , ...rest } = props;
    const { severity ="info"  } = rest;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "notification"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        ...rest,
        ref: ref,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.AlertTitle, {
                children: title || translate(`${severity}!`)
            }),
            children
        ]
    });
});
NotificationView.displayName = "NotificationView";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23890:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* reexport safe */ _NotificationView__WEBPACK_IMPORTED_MODULE_0__.D)
/* harmony export */ });
/* harmony import */ var _NotificationView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NotificationView__WEBPACK_IMPORTED_MODULE_0__]);
_NotificationView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=286.js.map