"use strict";
exports.id = 755;
exports.ids = [755];
exports.modules = {

/***/ 4606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94605);
/* harmony import */ var _templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19572);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, _templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_3__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, _templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const RequirementView = (props)=>{
    const { label , allowed , ...restTypographyProps } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_3__/* .WithTitleTemplate */ .qX, {
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
            variant: "subtitle1",
            ...restTypographyProps,
            children: label
        }),
        children: allowed ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
            icon: "check",
            color: theme.palette.success.main
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
            icon: "ban"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequirementView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17449:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* reexport safe */ _useGetFilterLabels__WEBPACK_IMPORTED_MODULE_0__.K)
/* harmony export */ });
/* harmony import */ var _useGetFilterLabels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62061);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useGetFilterLabels__WEBPACK_IMPORTED_MODULE_0__]);
_useGetFilterLabels__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62061:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useGetFilterLabels)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
/* harmony import */ var helpers_getLabelResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34549);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const getFilterLabels = async (id)=>{
    const endpoint = (0,helpers_getLabelResource__WEBPACK_IMPORTED_MODULE_2__/* .getLabelResource */ .V)(id);
    const { data: { data  }  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.get */ .zk.get({
        pathname: endpoint
    });
    return _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodFilterLabelsResourceIndexSchema.parse */ .QY.parse(data);
};
const useGetFilterLabels = (id)=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "filter-labels",
            id
        ],
        queryFn: ()=>getFilterLabels(id),
        refetchOnMount: false,
        enabled: !!id
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=755.js.map