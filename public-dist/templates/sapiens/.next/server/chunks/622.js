"use strict";
exports.id = 622;
exports.ids = [622];
exports.modules = {

/***/ 95022:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ ModalBase)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94605);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useSyncModalWithURL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85192);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__]);
custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ModalBase = (props)=>{
    const { children , open =false , onOpen =(lodash_noop__WEBPACK_IMPORTED_MODULE_4___default()) , onClose =(lodash_noop__WEBPACK_IMPORTED_MODULE_4___default()) , title , subtitle , actions , fullScreen , urlName , ...dialogProps } = props;
    (0,_hooks_useSyncModalWithURL__WEBPACK_IMPORTED_MODULE_5__/* .useSyncModalWithURL */ .c)({
        name: urlName,
        open,
        onOpen,
        onClose
    });
    const handleCloseButtonClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        onClose?.(e, "escapeKeyDown");
    }, [
        onClose
    ]);
    const padding = fullScreen ? 2 : 3;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
        open: open,
        onClose: onClose,
        scroll: "paper",
        fullScreen: fullScreen,
        ...dialogProps,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
                sx: {
                    p: padding
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        children: [
                            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "h5",
                                children: title
                            }),
                            subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "body1",
                                children: subtitle
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                        onClick: handleCloseButtonClick,
                        size: "small",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                            icon: "close"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
                sx: {
                    p: padding
                },
                children: children
            }),
            !!actions && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogActions, {
                sx: {
                    p: padding
                },
                children: actions
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* reexport */ QUERY_PARAM),
  "c": () => (/* reexport */ useSyncModalWithURL)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
// EXTERNAL MODULE: external "lodash/omit"
var omit_ = __webpack_require__(63901);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
;// CONCATENATED MODULE: ./src/components/modals/ModalBase/hooks/useSyncModalWithURL/useSyncModalWithURL.ts




const QUERY_PARAM = "popup";
const useSyncModalWithURL = (params)=>{
    const { name , open , onOpen , onClose  } = params;
    const router = (0,router_.useRouter)();
    const isModalNameInQuery = name ? get_default()(router.query, QUERY_PARAM) === name : false;
    const prevOpenRef = (0,external_react_.useRef)(open);
    const prevIsModalNameInQuery = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        if (!name || prevIsModalNameInQuery.current === isModalNameInQuery) return;
        prevIsModalNameInQuery.current = isModalNameInQuery;
        if (isModalNameInQuery) {
            onOpen();
            return;
        }
        onClose();
    }, [
        name,
        isModalNameInQuery,
        onClose,
        onOpen
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!name || prevOpenRef.current === open) return;
        prevOpenRef.current = open;
        const query = open ? {
            ...router.query,
            [QUERY_PARAM]: name
        } : omit_default()(router.query, QUERY_PARAM);
        router.push({
            pathname: router.pathname,
            query
        }, undefined, {
            shallow: true
        });
    }, [
        open,
        name,
        router
    ]);
};

;// CONCATENATED MODULE: ./src/components/modals/ModalBase/hooks/useSyncModalWithURL/index.ts



/***/ }),

/***/ 37622:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* reexport safe */ _ModalBase__WEBPACK_IMPORTED_MODULE_0__.e)
/* harmony export */ });
/* harmony import */ var _ModalBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95022);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ModalBase__WEBPACK_IMPORTED_MODULE_0__]);
_ModalBase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=622.js.map