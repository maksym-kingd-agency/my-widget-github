(() => {
var exports = {};
exports.id = 933;
exports.ids = [933];
exports.modules = {

/***/ 35333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageWrapperTemplate),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _sentry_server_config_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90632);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27074);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41430);
/* harmony import */ var buttons_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49230);
/* harmony import */ var components_forms_SearchListingsForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35612);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48719);
/* harmony import */ var helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71093);
/* harmony import */ var hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82153);
/* harmony import */ var hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(49605);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_5__, components_forms_SearchListingsForm__WEBPACK_IMPORTED_MODULE_8__, helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_10__, hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_11__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_12__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_5__, components_forms_SearchListingsForm__WEBPACK_IMPORTED_MODULE_8__, helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_10__, hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_11__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const SearchSectionWidget = ()=>{
    const { data: popularCitiesData = []  } = (0,hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)();
    const origin = _packages_helpers__WEBPACK_IMPORTED_MODULE_5__/* .isBrowser */ .jU && window.location.origin ? window.location.origin : "";
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_9__/* .useLocaleContext */ .PE)();
    const handleFormSubmit = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((values)=>{
        const { checkin_at , checkout_at , city: cityValue , accommodates  } = values;
        const selectedPopularCity = popularCitiesData.find((city)=>city.slug === cityValue);
        const filter = {
            city: cityValue,
            checkin_at,
            checkout_at,
            accommodates,
            country: selectedPopularCity?.country?.code,
            state: selectedPopularCity?.state?.code
        };
        const query = lodash_omitBy__WEBPACK_IMPORTED_MODULE_13___default()(filter, (value)=>!value);
        /**
       * We redirect to the new page when using component like a emdedded widget
       */ if (origin) {
            const searchParams = (0,qs__WEBPACK_IMPORTED_MODULE_14__.stringify)(query);
            const openUrl = `${origin}/${locale}/${application_constants__WEBPACK_IMPORTED_MODULE_6__/* .SEARCH_ROUTE */ .XH}?${searchParams.toString()}`;
            window.open(openUrl, "_blank");
        }
    }, [
        locale,
        origin,
        popularCitiesData
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(components_forms_SearchListingsForm__WEBPACK_IMPORTED_MODULE_8__/* .SearchListingsForm */ .R, {
        onSubmit: handleFormSubmit,
        slots: {
            actionButton: buttons_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
        },
        slotProps: {
            actionButton: {
                children: "buttons.search",
                variant: "contained"
            }
        }
    });
};
setTimeout(()=>{
    const element = document.getElementById("my-section-root");
    react_dom__WEBPACK_IMPORTED_MODULE_4___default().render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SearchSectionWidget, {}), element);
}, 4000);
const getServerSideProps$1 = (0,helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_10__/* .withServerSideProps */ .l)({
    fetchers: [
        hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_12__/* .prefetchPopularCities */ .nK,
        hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_11__/* .prefetchLocales */ .n
    ]
});

var serverComponentModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': SearchSectionWidget,
    getServerSideProps: getServerSideProps$1
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
  '/_app': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapAppGetInitialPropsWithSentry,
  '/_document': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapDocumentGetInitialPropsWithSentry,
  '/_error': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapErrorGetInitialPropsWithSentry,
};

const getInitialPropsWrapper = getInitialPropsWrappers['/embed/search-section'] || _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetInitialPropsWithSentry;

if (pageComponent && typeof origGetInitialProps === 'function') {
  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;
}

const getStaticProps =
  typeof origGetStaticProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetStaticPropsWithSentry(origGetStaticProps, '/embed/search-section')
    : undefined;
const getServerSideProps =
  typeof origGetServerSideProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/embed/search-section')
    : undefined;

const pageWrapperTemplate = pageComponent ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapPageComponentWithSentry(pageComponent ) : pageComponent;



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23903:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireDefault;
    }
}));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 80575:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Plus_Jakarta_Sans_834aed', '__Plus_Jakarta_Sans_Fallback_834aed', sans-serif","fontStyle":"normal"},
	"className": "__className_834aed"
};


/***/ }),

/***/ 41685:
/***/ (() => {



/***/ }),

/***/ 93387:
/***/ (() => {



/***/ }),

/***/ 42864:
/***/ ((module) => {

"use strict";
module.exports = require("@king-david-it/builder");

/***/ }),

/***/ 65692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 18442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 97986:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ 58097:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 52167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 48982:
/***/ ((module) => {

"use strict";
module.exports = require("cookies-next");

/***/ }),

/***/ 74146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 14384:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/format");

/***/ }),

/***/ 15081:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/isValid");

/***/ }),

/***/ 45564:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/locale");

/***/ }),

/***/ 59591:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 93908:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/debounce");

/***/ }),

/***/ 50454:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/differenceBy");

/***/ }),

/***/ 1712:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/get");

/***/ }),

/***/ 89699:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 40113:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ 22133:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 9941:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/mapValues");

/***/ }),

/***/ 36625:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/max");

/***/ }),

/***/ 61831:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ 604:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/min");

/***/ }),

/***/ 87553:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/noop");

/***/ }),

/***/ 63901:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/omit");

/***/ }),

/***/ 66011:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/omitBy");

/***/ }),

/***/ 24298:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/set");

/***/ }),

/***/ 11377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 25460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 93431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 71109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 87782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 73142:
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

/***/ }),

/***/ 87104:
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 74304:
/***/ ((module) => {

"use strict";
module.exports = require("react-date-range");

/***/ }),

/***/ 23599:
/***/ ((module) => {

"use strict";
module.exports = require("react-device-detect");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 25040:
/***/ ((module) => {

"use strict";
module.exports = require("zod-i18n-map");

/***/ }),

/***/ 1656:
/***/ ((module) => {

"use strict";
module.exports = import("@hookform/resolvers/zod");;

/***/ }),

/***/ 49752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 16593:
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ }),

/***/ 45641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

"use strict";
module.exports = import("zod");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [97,975,31,367,54,319,6,119,612], () => (__webpack_exec__(35333)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=search-section.js.map