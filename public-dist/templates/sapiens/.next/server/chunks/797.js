"use strict";
exports.id = 797;
exports.ids = [797];
exports.modules = {

/***/ 76238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ Loader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/components/Typography/index.ts + 1 modules
var Typography = __webpack_require__(19594);
;// CONCATENATED MODULE: ./src/components/custom/Loader/Loader.tsx



const Loader = (props)=>{
    const { sx , message , size =32  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        sx: sx,
        children: [
            message && /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography */.Z, {
                variant: "subtitle2",
                textAlign: "center",
                mb: 2,
                children: message
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CircularProgress, {
                size: size
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/custom/Loader/index.ts



/***/ }),

/***/ 120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ GridItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
;// CONCATENATED MODULE: ./src/components/templates/GridItem/GridItem.tsx



const GridItem = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        ref: ref,
        item: true,
        xs: 12,
        ...props
    });
});
GridItem.displayName = "GridItem";
/* harmony default export */ const GridItem_GridItem = ((/* unused pure expression or super */ null && (GridItem)));

;// CONCATENATED MODULE: ./src/components/templates/GridItem/index.ts



/***/ }),

/***/ 50631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qn": () => (/* reexport */ AddressView),
  "ZP": () => (/* reexport */ AddressView_AddressView),
  "v_": () => (/* reexport */ getAddressWithZip)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/components/Typography/index.ts + 1 modules
var Typography = __webpack_require__(19594);
;// CONCATENATED MODULE: ./src/components/views/AddressView/AddressView.tsx



const getAddressWithZip = (params)=>{
    const { zip , address  } = params;
    if (zip) {
        return `${address} ${zip}`;
    } else {
        return address;
    }
};
const AddressView = (props)=>{
    const { address , zip , withTooltip , withoutTypography , ...restTypographyProps } = props;
    const addressWithZip = (0,external_react_.useMemo)(()=>{
        return getAddressWithZip({
            address,
            zip
        });
    }, [
        address,
        zip
    ]);
    return withoutTypography ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: addressWithZip
    }) : /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography */.Z, {
        variant: "body1",
        withTooltip: withTooltip,
        ...restTypographyProps,
        children: addressWithZip
    });
};
/* harmony default export */ const AddressView_AddressView = (AddressView);

;// CONCATENATED MODULE: ./src/components/views/AddressView/index.ts





/***/ }),

/***/ 23517:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useGetPriceInCurrentCurrency),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71583);
/* harmony import */ var hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63858);
/* harmony import */ var _getPriceInCurrency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94969);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_1__, hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_2__]);
([contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_1__, hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useGetPriceInCurrentCurrency = ()=>{
    const { data: currencies  } = (0,hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_2__/* .useGetCurrencies */ .Wn)();
    const { currency  } = (0,contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_1__/* .useCurrencyContext */ .VT)();
    const currentCurrencyCode = currency?.code;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((params)=>{
        const { amount , initialCurrencyCode  } = params;
        return (0,_getPriceInCurrency__WEBPACK_IMPORTED_MODULE_3__/* .getPriceInCurrency */ .N)({
            amount,
            initialCurrencyCode,
            currentCurrencyCode,
            currencies
        });
    }, [
        currencies,
        currentCurrencyCode
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetPriceInCurrentCurrency);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=797.js.map