"use strict";
exports.id = 694;
exports.ids = [694];
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

/***/ 99334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ getNavigatorItems)
});

// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
;// CONCATENATED MODULE: ./src/helpers/getNavigatorItems/getNavigatorItems.ts

const getNavigatorItems = (params)=>{
    const { navigatorsData , selector  } = params;
    const selectedNavigator = navigatorsData.find((navigator)=>navigator.placeholder === selector);
    const items = get_default()(selectedNavigator, "items") || [];
    return items;
};

;// CONCATENATED MODULE: ./src/helpers/getNavigatorItems/index.ts



/***/ }),

/***/ 57189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ getNavigatorPathnames)
/* harmony export */ });
const getNavigatorPathnames = (path)=>{
    const isUrlWithHttp = path.startsWith("http");
    let pathname = "";
    const prefetchPath = path === "home" ? "" : path;
    if (path === "home") {
        pathname = "/";
    } else {
        pathname = isUrlWithHttp ? path : `/${path}`;
    }
    return {
        pathname,
        prefetchPath,
        isPrefetchPath: !isUrlWithHttp
    };
};


/***/ })

};
;
//# sourceMappingURL=694.js.map