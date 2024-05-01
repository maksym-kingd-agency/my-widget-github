"use strict";
(() => {
var exports = {};
exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 37256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22825);
/* harmony import */ var components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11762);
/* harmony import */ var components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23101);
/* harmony import */ var helpers_filters_getParsedFilters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41736);
/* harmony import */ var helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71093);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63858);
/* harmony import */ var hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82153);
/* harmony import */ var hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49605);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var providers_GoogleMapsAPIProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85871);
/* harmony import */ var providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(30378);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__, components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_5__, helpers_filters_getParsedFilters__WEBPACK_IMPORTED_MODULE_6__, helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_7__, hooks_index__WEBPACK_IMPORTED_MODULE_8__, hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_9__, hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_10__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_11__, providers_GoogleMapsAPIProvider__WEBPACK_IMPORTED_MODULE_13__, providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_14__]);
([components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__, components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_5__, helpers_filters_getParsedFilters__WEBPACK_IMPORTED_MODULE_6__, helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_7__, hooks_index__WEBPACK_IMPORTED_MODULE_8__, hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_9__, hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_10__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_11__, providers_GoogleMapsAPIProvider__WEBPACK_IMPORTED_MODULE_13__, providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const SearchPage = ()=>{
    const { data: page  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_8__/* .useGetPage */ .W1)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_14__/* .NextSeoProvider */ .L, {
                title: page?.meta_title,
                description: page?.meta_description,
                additionalMetaTags: [
                    {
                        name: "keywords",
                        content: page?.meta_keywords || ""
                    }
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(providers_GoogleMapsAPIProvider__WEBPACK_IMPORTED_MODULE_13__/* .GoogleMapsAPIProvider */ .q, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__/* .MainLayout */ .Z, {
                    footer: false,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_5__/* .SearchPage */ .Z, {})
                })
            })
        ]
    });
};
const getServerSideProps$1 = (0,helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_7__/* .withServerSideProps */ .l)({
    enableRequestsOnClientSideTransition: true,
    fetchers: [
        hooks_index__WEBPACK_IMPORTED_MODULE_8__/* .prefetchPage */ .aS,
        hooks_index__WEBPACK_IMPORTED_MODULE_8__/* .prefetchFilterAttributes */ .PK,
        hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_11__/* .prefetchPopularCities */ .nK,
        hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_9__/* .prefetchCurrencies */ .GJ,
        hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_10__/* .prefetchLocales */ .n,
        hooks_index__WEBPACK_IMPORTED_MODULE_8__/* .prefetchAmenities */ .u2,
        hooks_index__WEBPACK_IMPORTED_MODULE_8__/* .prefetchSearchResults */ .Dc
    ],
    /**
   * We want to include the first popular city to search params
   * if there is no city there
   */ handler: async (queryClient, context, props)=>{
        const filterAttributes = queryClient.getQueryData([
            application_resources__WEBPACK_IMPORTED_MODULE_15__/* .ATTRIBUTES_RESOURCE */ .aT
        ], {
            exact: false
        });
        const { selectedFilters  } = (0,helpers_filters_getParsedFilters__WEBPACK_IMPORTED_MODULE_6__/* .getParsedFilters */ .E)({
            filter: context.query || {},
            filterAttributes: filterAttributes || [],
            includeFilterAttribute: (slug)=>slug === application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ,
            independentFiltersSlugs: [
                application_constants__WEBPACK_IMPORTED_MODULE_3__/* .STATE_SOURCE */ .Me,
                application_constants__WEBPACK_IMPORTED_MODULE_3__/* .COUNTRY_SOURCE */ .ui,
                application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOUNDS_SOURCE */ .iV
            ]
        });
        const cityFilter = lodash_get__WEBPACK_IMPORTED_MODULE_12___default()(selectedFilters, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ);
        const stateFilter = lodash_get__WEBPACK_IMPORTED_MODULE_12___default()(selectedFilters, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .STATE_SOURCE */ .Me);
        const countryFilter = lodash_get__WEBPACK_IMPORTED_MODULE_12___default()(selectedFilters, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .COUNTRY_SOURCE */ .ui);
        const boundsFilter = lodash_get__WEBPACK_IMPORTED_MODULE_12___default()(selectedFilters, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOUNDS_SOURCE */ .iV);
        const popularCities = queryClient.getQueryData([
            application_resources__WEBPACK_IMPORTED_MODULE_15__/* .POPULAR_CITIES */ .tU
        ], {
            exact: false
        });
        const firstPopularCitySlug = popularCities?.[0]?.slug;
        const firstPopularCountryCode = popularCities?.[0]?.country?.code;
        const firstPopularStateCode = popularCities?.[0]?.state?.code;
        const shouldUpdateCitySearchParam = firstPopularCitySlug && !cityFilter && !boundsFilter;
        const shouldUpdateStateSearchParam = firstPopularStateCode && !stateFilter && !boundsFilter;
        const shouldUpdateCountrySearchParam = firstPopularCountryCode && !countryFilter && !boundsFilter;
        const shouldDoRedirect = shouldUpdateCitySearchParam || shouldUpdateStateSearchParam || shouldUpdateCountrySearchParam;
        if (!shouldDoRedirect) {
            return {
                props
            };
        }
        /**
     * We can't stringify query to search params because
     * it can also contain dynamic route segments, so we split
     * resolvedUrl by ourselves
     */ const [url, searchString] = context.resolvedUrl.split("?");
        const searchParams = new URLSearchParams(searchString);
        if (shouldUpdateCitySearchParam) {
            searchParams.set(application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ, firstPopularCitySlug);
        }
        if (shouldUpdateStateSearchParam) {
            searchParams.set(application_constants__WEBPACK_IMPORTED_MODULE_3__/* .STATE_SOURCE */ .Me, firstPopularStateCode);
        }
        if (shouldUpdateCountrySearchParam) {
            searchParams.set(application_constants__WEBPACK_IMPORTED_MODULE_3__/* .COUNTRY_SOURCE */ .ui, firstPopularCountryCode);
        }
        // We should include locale to redirect path manually
        const locale = context.locale === "default" ? "" : `/${context.locale}`;
        return {
            redirect: {
                destination: `${locale}${url}?${searchParams.toString()}`,
                permanent: false
            }
        };
    }
});

var serverComponentModule = /*#__PURE__*/Object.freeze({
   __proto__: null,
   'default': SearchPage,
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

const getInitialPropsWrapper = getInitialPropsWrappers['/s'] || _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetInitialPropsWithSentry;

if (pageComponent && typeof origGetInitialProps === 'function') {
  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;
}

const getStaticProps =
  typeof origGetStaticProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetStaticPropsWithSentry(origGetStaticProps, '/s')
    : undefined;
const getServerSideProps =
  typeof origGetServerSideProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/s')
    : undefined;

const pageWrapperTemplate = pageComponent ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapPageComponentWithSentry(pageComponent ) : pageComponent;



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ isObject)
/* harmony export */ });
const isObject = (v)=>{
    return v !== null && typeof v === "object" && !Array.isArray(v);
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (isObject)));


/***/ }),

/***/ 86951:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ CTAButton)
/* harmony export */ });
/* unused harmony export CTAButtonClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94605);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_4__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const PREFIX = "CTAButton";
const CTAButtonClasses = {
    buttonRoot: `${PREFIX}-buttonRoot`,
    disabled: `${PREFIX}-disabled`
};
const StyledCTAButton = (0,theme_index__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)("div", {
    name: "StyledCTAButton",
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`& .${CTAButtonClasses.buttonRoot}`]: {
            background: `linear-gradient(90deg, ${theme.palette.error.main} 0%, #CB4F6C 100%)`,
            "&:hover": {
                background: `linear-gradient(90deg, #FF5252 0%, #DB2853 100%)`
            }
        },
        [`& .${CTAButtonClasses.disabled}`]: {
            background: `linear-gradient(90deg, #CCCCCC 0%, #8F8F8F 100%)`,
            "&:hover": {
                background: `linear-gradient(90deg, #CCCCCC 0%, #8F8F8F 100%)`
            }
        }
    };
});
/**
 * CTA button with Gradient and translations (default 'UNLOCK SPECIAL OFFERS')
 **/ const CTAButton = (props)=>{
    const { children , className , ...rest } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "buttons"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCTAButton, {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "contained",
            classes: {
                root: CTAButtonClasses.buttonRoot,
                disabled: CTAButtonClasses.disabled
            },
            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
                icon: "special-offers",
                color: theme_index__WEBPACK_IMPORTED_MODULE_4__/* .theme.palette.primary.contrastText */ .rS.palette.primary.contrastText
            }),
            ...rest,
            children: children || translate("special_offer")
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83273:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* reexport safe */ _CTAButton__WEBPACK_IMPORTED_MODULE_0__.m)
/* harmony export */ });
/* harmony import */ var _CTAButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86951);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CTAButton__WEBPACK_IMPORTED_MODULE_0__]);
_CTAButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31883:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ CloseButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94605);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__]);
custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function CloseButton(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
        "aria-label": "close",
        size: "small",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
            icon: "close"
        })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CloseButton)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _CloseButton__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31883);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CloseButton__WEBPACK_IMPORTED_MODULE_0__]);
_CloseButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SortingButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var buttons_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49230);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19594);
/* harmony import */ var contexts_ListContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56388);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94605);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53127);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_7__]);
custom_IcoMoon__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const choices = [
    {
        title: "best_match",
        // Base sort, without anything, BE decide what to return
        value: {
            field: "",
            order: "ASC"
        }
    },
    {
        title: "rating_high_to_low",
        value: {
            field: application_constants__WEBPACK_IMPORTED_MODULE_3__/* .SORT_FIELDS.rating */ .lI.rating,
            order: "DESC"
        }
    },
    {
        title: "rating_low_to_high",
        value: {
            field: application_constants__WEBPACK_IMPORTED_MODULE_3__/* .SORT_FIELDS.rating */ .lI.rating,
            order: "ASC"
        }
    },
    {
        title: "high_to_low",
        value: {
            field: application_constants__WEBPACK_IMPORTED_MODULE_3__/* .SORT_FIELDS.price */ .lI.price,
            order: "DESC"
        }
    },
    {
        title: "low_to_high",
        value: {
            field: application_constants__WEBPACK_IMPORTED_MODULE_3__/* .SORT_FIELDS.price */ .lI.price,
            order: "ASC"
        }
    }
];
const SortingButton = (props)=>{
    const { buttonProps  } = props;
    const { listParams: { sort  } , setSort  } = (0,contexts_ListContext__WEBPACK_IMPORTED_MODULE_6__/* .useListContext */ .UU)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_8__/* .useTranslate */ .q)({
        basePath: "custom"
    });
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const isMenuOpen = Boolean(anchorEl);
    const selectedChoice = choices.find((choice)=>lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default()(choice.value, sort));
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const handleSortClickClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((sort)=>()=>{
            setSort(sort);
            handleClose();
        }, [
        setSort
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(buttons_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                variant: "text",
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_7__/* .IcoMoon */ .n, {
                    icon: "sorting",
                    color: "inherit"
                }),
                onClick: handleClick,
                color: "secondary",
                ...buttonProps,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                        variant: "button",
                        sx: {
                            textTransform: "none",
                            textDecoration: "underline"
                        },
                        children: translate("sort_by")
                    }),
                    selectedChoice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                                variant: "button",
                                sx: {
                                    whiteSpace: "pre"
                                },
                                children: [
                                    ":",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                                variant: "body1",
                                sx: {
                                    color: theme.palette.primary.main,
                                    textTransform: "none"
                                },
                                children: translate(selectedChoice.title)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                id: "basic-menu",
                anchorEl: anchorEl,
                open: isMenuOpen,
                onClose: handleClose,
                MenuListProps: {
                    "aria-labelledby": "basic-button"
                },
                children: choices.map((choice)=>{
                    const { title , value  } = choice;
                    const selected = selectedChoice ? lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default()(selectedChoice.value, value) : false;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                        selected: selected,
                        onClick: handleSortClickClose(value),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                            children: translate(title)
                        })
                    }, title);
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* reexport safe */ _SortingButton__WEBPACK_IMPORTED_MODULE_0__.J)
/* harmony export */ });
/* harmony import */ var _SortingButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96415);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SortingButton__WEBPACK_IMPORTED_MODULE_0__]);
_SortingButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9242:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h9": () => (/* binding */ SearchResultsContextProvider),
/* harmony export */   "tw": () => (/* binding */ useSearchResultsContext)
/* harmony export */ });
/* unused harmony export SearchResultsContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27074);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__]);
_packages_helpers__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const defaultSearchResultsContext = {
    isPartialSectionOpen: false,
    openPartialSection: (lodash_noop__WEBPACK_IMPORTED_MODULE_3___default()),
    isPullableContentOpen: true,
    openPullableContent: (lodash_noop__WEBPACK_IMPORTED_MODULE_3___default()),
    closePullableContent: (lodash_noop__WEBPACK_IMPORTED_MODULE_3___default())
};
const SearchResultsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultSearchResultsContext);
const SearchResultsContextProvider = ({ children  })=>{
    const { value: isPartialSectionOpen , setTrue: openPartialSection  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .useBoolean */ .kt)(false);
    const { value: isPullableContentOpen , setTrue: openPullableContent , setFalse: closePullableContent  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .useBoolean */ .kt)(true);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResultsContext.Provider, {
        value: {
            isPartialSectionOpen,
            openPartialSection,
            isPullableContentOpen,
            openPullableContent,
            closePullableContent
        },
        children: children
    });
};
const useSearchResultsContext = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SearchResultsContext);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ AttributesTemplate)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/components/templates/GridItem/index.ts + 1 modules
var GridItem = __webpack_require__(120);
;// CONCATENATED MODULE: ./src/components/custom/AttributesTemplate/AttributesTemplate.tsx




const defaultProps = {
    getCustomElement: ()=>null
};
const AttributesTemplate = (props)=>{
    const { filterAttributes , getAttributeElement , getCustomElement =defaultProps.getCustomElement , inlineAttributesArray =[] , fitToWidth =false  } = props;
    const sortedAttributes = filterAttributes.sort((a, b)=>{
        if (a.order === undefined && b.order === undefined) {
            return 0;
        }
        if (a.order === undefined) {
            return 1;
        }
        if (b.order === undefined) {
            return -1;
        }
        return a.order - b.order;
    });
    const renderAttributes = (0,external_react_.useCallback)((attributeData)=>{
        const { filter_attribute: { value_type  } , is_multiple  } = attributeData;
        const isInline = inlineAttributesArray.length && inlineAttributesArray.some((value)=>value.value_type === value_type && value.is_multiple === is_multiple);
        if (isInline) {
            return /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* GridItem */.P, {
                md: 12,
                sm: 12,
                lg: 12,
                children: getAttributeElement({
                    attributeData
                })
            });
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* GridItem */.P, {
                sm: fitToWidth ? 12 : 6,
                md: fitToWidth ? 12 : 6,
                lg: fitToWidth ? 12 : 6,
                children: getAttributeElement({
                    attributeData
                })
            });
        }
    }, [
        fitToWidth,
        getAttributeElement,
        inlineAttributesArray
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        container: true,
        rowSpacing: 1,
        columnSpacing: 3,
        children: sortedAttributes.map((attributeData)=>{
            const { id: attributeId  } = attributeData;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                children: [
                    renderAttributes(attributeData),
                    getCustomElement({
                        attributeData
                    })
                ]
            }, attributeId);
        })
    });
};

;// CONCATENATED MODULE: ./src/components/custom/AttributesTemplate/index.ts



/***/ }),

/***/ 90971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ GuestSelectInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73670);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94605);
/* harmony import */ var helpers_getGuestsCount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99438);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var modals_GuestsSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30318);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45641);
/* harmony import */ var _inputs_SelectField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53790);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, modals_GuestsSelection__WEBPACK_IMPORTED_MODULE_6__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__, _inputs_SelectField__WEBPACK_IMPORTED_MODULE_8__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, modals_GuestsSelection__WEBPACK_IMPORTED_MODULE_6__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__, _inputs_SelectField__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function GuestSelectInput(props) {
    const { name , defaultValue ={
        infants: 0,
        children: 0,
        adults: 0
    } , view ="dropDown" , selectFieldProps , sx , className , label , onChange: onChangeProp  } = props;
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { field  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useController)({
        name,
        defaultValue
    });
    const value = field.value; // without destructuring to add typisation
    const { onChange  } = field;
    const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        setAnchorEl(event.currentTarget);
    }, []);
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setAnchorEl(null);
    }, []);
    const onWatchHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((values)=>{
        if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(value, values)) {
            if (onChangeProp) {
                onChangeProp(values); // Change GuestInput values
            }
            onChange(values); // Change SelectInput values
        }
    }, [
        onChange,
        onChangeProp,
        value
    ]);
    const open = Boolean(anchorEl);
    const id = open ? "guests-popover" : undefined;
    const defaultValuesCount = (0,helpers_getGuestsCount__WEBPACK_IMPORTED_MODULE_4__/* .getGuestsCount */ .s)({
        guestObj: defaultValue
    });
    const valueCount = (0,helpers_getGuestsCount__WEBPACK_IMPORTED_MODULE_4__/* .getGuestsCount */ .s)({
        guestObj: (0,_packages_types__WEBPACK_IMPORTED_MODULE_9__/* .isObject */ .K)(value) ? value : {}
    });
    const resultCount = typeof value !== "undefined" ? valueCount : defaultValuesCount;
    const items = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return [
            {
                title: resultCount,
                value: resultCount
            }
        ];
    }, [
        resultCount
    ]);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((values)=>{
        onChange(values);
        handleClose();
    }, [
        handleClose,
        onChange
    ]);
    const isModalView = view === "modal";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: sx,
        className: className,
        children: [
            isModalView ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_GuestsSelection__WEBPACK_IMPORTED_MODULE_6__/* .GuestsModal */ .LC, {
                open: open,
                onSubmit: handleSubmit,
                onClose: handleClose,
                defaultValues: defaultValue
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_GuestsSelection__WEBPACK_IMPORTED_MODULE_6__/* .GuestPopover */ .W$, {
                anchorEl: anchorEl,
                id: id,
                open: open,
                onClose: handleClose,
                onWatchHandler: onWatchHandler,
                defaultValues: defaultValue
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_inputs_SelectField__WEBPACK_IMPORTED_MODULE_8__/* .SelectField */ .m, {
                items: items,
                name: name,
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                    icon: "user"
                }),
                // TODO: replace SelectField with SelectView
                // value={resultCount}
                label: label,
                selectProps: {
                    open: false,
                    onOpen: handleOpen,
                    onClose: handleClose,
                    value: resultCount
                },
                ...selectFieldProps
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (GuestSelectInput)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18716:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ MapListingCluster)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var views_MapListingClusterView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48361);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_MapListingClusterView__WEBPACK_IMPORTED_MODULE_2__]);
views_MapListingClusterView__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getPixelPositionOffset = (width, height)=>{
    return {
        x: -(width / 2),
        y: -(height / 2)
    };
};
const MapListingCluster = (props)=>{
    const { position , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__.OverlayViewF, {
        position: position,
        mapPaneName: _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__.OverlayView.OVERLAY_MOUSE_TARGET,
        getPixelPositionOffset: getPixelPositionOffset,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_MapListingClusterView__WEBPACK_IMPORTED_MODULE_2__/* .MapListingClusterView */ .w, {
            ...rest
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _MapListingCluster__WEBPACK_IMPORTED_MODULE_0__._)
/* harmony export */ });
/* harmony import */ var _MapListingCluster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18716);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MapListingCluster__WEBPACK_IMPORTED_MODULE_0__]);
_MapListingCluster__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ MapListingPoint)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var buttons_CloseButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56733);
/* harmony import */ var components_custom_SearchResultsLayout_components_PullableSearchResults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1508);
/* harmony import */ var contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9242);
/* harmony import */ var views_ListingMapView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17781);
/* harmony import */ var views_MapListingPointView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33244);
/* harmony import */ var _Map_MapPoint__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97773);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([buttons_CloseButton__WEBPACK_IMPORTED_MODULE_5__, components_custom_SearchResultsLayout_components_PullableSearchResults__WEBPACK_IMPORTED_MODULE_6__, contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_7__, views_ListingMapView__WEBPACK_IMPORTED_MODULE_8__, views_MapListingPointView__WEBPACK_IMPORTED_MODULE_9__]);
([buttons_CloseButton__WEBPACK_IMPORTED_MODULE_5__, components_custom_SearchResultsLayout_components_PullableSearchResults__WEBPACK_IMPORTED_MODULE_6__, contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_7__, views_ListingMapView__WEBPACK_IMPORTED_MODULE_8__, views_MapListingPointView__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const MapListingPoint = (props)=>{
    const { position , selected =false , active =false , properties , onOpen , onClose  } = props;
    const { price  } = properties;
    const { closePullableContent  } = (0,contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_7__/* .useSearchResultsContext */ .tw)();
    const handlePointClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        event.stopPropagation();
        closePullableContent();
        if (selected) {
            onClose();
            return;
        }
        onOpen();
    }, [
        closePullableContent,
        selected,
        onOpen,
        onClose
    ]);
    const handleCloseClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        event.preventDefault();
        onClose();
    }, [
        onClose
    ]);
    const listingCardBase = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ListingMapView__WEBPACK_IMPORTED_MODULE_8__/* .ListingMapView */ .s, {
            ...properties,
            topRight: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_CloseButton__WEBPACK_IMPORTED_MODULE_5__/* .CloseButton */ .P, {
                onClick: handleCloseClick
            })
        }), [
        handleCloseClick,
        properties
    ]);
    const map = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.useGoogleMap)();
    const mapContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>map?.getDiv(), [
        map
    ]);
    const mobileInfoBox = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!mapContainer) return;
        return /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            sx: {
                position: "absolute",
                bottom: (theme)=>`calc(${components_custom_SearchResultsLayout_components_PullableSearchResults__WEBPACK_IMPORTED_MODULE_6__/* .PULLABLE_SEARCH_RESULTS_HEADER_HEIGHT */ .rv}px + ${theme.spacing(1)})`,
                left: (theme)=>theme.spacing(1),
                right: (theme)=>theme.spacing(1),
                zIndex: (theme)=>theme.zIndex.fab
            },
            children: listingCardBase
        }), mapContainer);
    }, [
        mapContainer,
        listingCardBase
    ]);
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Map_MapPoint__WEBPACK_IMPORTED_MODULE_10__/* .MapPoint */ .f, {
        position: position,
        card: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
            sx: {
                width: 392
            },
            children: listingCardBase
        }),
        showCard: selected,
        point: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_MapListingPointView__WEBPACK_IMPORTED_MODULE_9__/* .MapListingPointView */ .R, {
            active: active || selected,
            price: price,
            onClick: handlePointClick
        }),
        infoBoxOverride: isMobile ? mobileInfoBox : undefined
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78544:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* reexport safe */ _MapListingPoint__WEBPACK_IMPORTED_MODULE_0__.I)
/* harmony export */ });
/* harmony import */ var _MapListingPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7765);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MapListingPoint__WEBPACK_IMPORTED_MODULE_0__]);
_MapListingPoint__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ PullableContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62430);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66072);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, theme__WEBPACK_IMPORTED_MODULE_5__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, theme__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const bodyOverflowHiddenStyles = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.GlobalStyles, {
    styles: {
        body: {
            overflow: "hidden"
        }
    }
});
// Disable scroll bouncing on IOS
const htmlOverscrollBehaviorNoneStyles = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.GlobalStyles, {
    styles: {
        html: {
            overscrollBehavior: "none"
        }
    }
});
const PREFIX = "PullableContent";
const PullableContentClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.generateUtilityClasses)(PREFIX, [
    "root",
    "header",
    "puller",
    "headerContent",
    "placeholder",
    "content"
]);
const StyledRoot = (0,theme__WEBPACK_IMPORTED_MODULE_5__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`,
    shouldForwardProp: (p)=>p !== "occupiedSpace"
})(({ theme , occupiedSpace  })=>{
    return {
        [`&.${PullableContentClasses.root}`]: {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column"
        },
        [`& .${PullableContentClasses.header}`]: {
            height: 60,
            minHeight: 60,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            transform: "translateY(-100%)",
            borderRadius: theme.spacing(2.5, 2.5, 0, 0),
            borderTop: "1px solid",
            borderColor: theme.palette.primary.border,
            paddingTop: theme.spacing(1),
            background: theme.palette.background.default,
            overflow: "hidden",
            /**
       * It prevents browser's native behavior
       * e.g. pull-to-refresh
       */ touchAction: "none"
        },
        [`& .${PullableContentClasses.headerContent}`]: {
            width: "100%",
            height: "100%"
        },
        [`& .${PullableContentClasses.puller}`]: {
            width: 32,
            height: 2,
            backgroundColor: theme.palette.text.primary,
            borderRadius: 9,
            position: "absolute",
            top: theme.spacing(1.5),
            left: "50%",
            transform: "translateX(-50%)"
        },
        [`& .${PullableContentClasses.placeholder}`]: {
            height: `${100 - occupiedSpace * 100}%`,
            width: "100%",
            flexShrink: 0
        },
        [`& .${PullableContentClasses.content}`]: {
            flexGrow: 1,
            width: "100%",
            background: theme.palette.common.white,
            position: "relative"
        }
    };
});
const PullableContent = (props)=>{
    const { open: passedIsOpened = true , header , children , occupiedSpace =_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_OCCUPIED_SPACE */ .X , duration =_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_DURATION */ .N , delay , easing , onOpen , onClose  } = props;
    const enterDuration = typeof duration === "number" ? duration : duration.enter ?? _constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_DURATION */ .N;
    const exitDuration = typeof duration === "number" ? duration : duration.exit ?? _constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_DURATION */ .N;
    const enterDelay = typeof delay === "number" ? delay : delay?.enter;
    const exitDelay = typeof delay === "number" ? delay : delay?.exit;
    const enterEasing = typeof easing === "string" ? easing : easing?.enter;
    const exitEasing = typeof easing === "string" ? easing : easing?.exit;
    const { value: isContentOpened , setFalse: closeContent , setTrue: openContent  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .useBoolean */ .kt)(passedIsOpened);
    const touchYCoordinateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const contentTopCoordinateOnTouchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const headerNodeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const contentNodeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const placeholderNodeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (passedIsOpened) {
            openContent();
            return;
        }
        closeContent();
    }, [
        passedIsOpened,
        openContent,
        closeContent
    ]);
    const handlePointerDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        const contentNode = contentNodeRef.current;
        if (!contentNode) return;
        const { top: contentTop  } = contentNode.getBoundingClientRect();
        touchYCoordinateRef.current = event.clientY;
        contentTopCoordinateOnTouchRef.current = contentTop;
    }, []);
    const handlePointerMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        const { clientY  } = event;
        const contentNode = contentNodeRef.current;
        const touchY = touchYCoordinateRef.current;
        const contentTopOnTouch = contentTopCoordinateOnTouchRef.current;
        if (!contentNode) return;
        const windowHeight = document.documentElement.clientHeight;
        const contentHeight = contentNode.offsetHeight;
        const visibleContentHeightOnTouch = windowHeight - contentTopOnTouch;
        const hiddenContentHeightOnTouch = contentHeight - visibleContentHeightOnTouch;
        const newOffset = clientY - touchY;
        const isPullingUp = newOffset < 0;
        const isPullingMoreThanHiddenContentHeight = Math.abs(newOffset) >= hiddenContentHeightOnTouch;
        if (isPullingUp && isPullingMoreThanHiddenContentHeight) {
            return;
        }
        setOffset(newOffset);
    }, []);
    const handlePointerUp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const isPulledUp = offset < 0;
        const isPulledDown = offset > 0;
        if (isContentOpened && isPulledUp) {
            window.scrollTo({
                top: window.scrollY - offset
            });
            setOffset(0);
            return;
        }
        if (isContentOpened && isPulledDown) {
            closeContent();
            return;
        }
        if (!isContentOpened && isPulledUp) {
            openContent();
            return;
        }
        setOffset(0);
    }, [
        offset,
        isContentOpened,
        openContent,
        closeContent
    ]);
    const resetOffset = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setOffset(0);
        touchYCoordinateRef.current = 0;
    }, []);
    const handleTransitionEntered = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((isAppearing)=>{
        /**
       * isAppearing means enter transition on mount.
       * We don't want to trigger `onOpen` if we have `open`
       * state equals true by default
       */ if (isAppearing) return;
        onOpen?.();
    }, [
        onOpen
    ]);
    const handleTransitionExited = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        onClose?.();
    }, [
        onClose
    ]);
    const getSxByTransitionStatus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((status)=>{
        const placeholderNode = placeholderNodeRef.current;
        if (!placeholderNode) return;
        const { bottom: placeholderBottom  } = placeholderNode.getBoundingClientRect();
        const windowHeight = document.documentElement.clientHeight;
        const { scrollY  } = window;
        const openedContentMinHeight = windowHeight - placeholderBottom - scrollY;
        const transitions = {
            entering: {
                transform: `translateY(0)`,
                transition: (theme)=>theme.transitions.create("transform", {
                        duration: enterDuration,
                        delay: enterDelay,
                        easing: enterEasing
                    })
            },
            entered: {
                transform: `translateY(${offset}px)`
            },
            exiting: {
                transform: `translateY(${openedContentMinHeight + scrollY}px)`,
                transition: (theme)=>theme.transitions.create("transform", {
                        duration: exitDuration,
                        delay: exitDelay,
                        easing: exitEasing
                    })
            },
            exited: {
                transform: `translateY(${openedContentMinHeight + scrollY + offset}px)`
            }
        };
        return transitions[status];
    }, [
        enterDelay,
        enterDuration,
        enterEasing,
        exitDelay,
        exitDuration,
        exitEasing,
        offset
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledRoot, {
        className: PullableContentClasses.root,
        occupiedSpace: occupiedSpace,
        children: [
            !isContentOpened && bodyOverflowHiddenStyles,
            htmlOverscrollBehaviorNoneStyles,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                ref: placeholderNodeRef,
                className: PullableContentClasses.placeholder
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_4__.Transition, {
                nodeRef: contentNodeRef,
                in: isContentOpened,
                timeout: {
                    enter: enterDuration,
                    exit: exitDuration
                },
                onEntering: resetOffset,
                onExiting: resetOffset,
                onEntered: handleTransitionEntered,
                onExited: handleTransitionExited,
                children: (status)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        ref: contentNodeRef,
                        className: PullableContentClasses.content,
                        sx: getSxByTransitionStatus(status),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                ref: headerNodeRef,
                                className: PullableContentClasses.header,
                                onPointerDown: handlePointerDown,
                                onPointerMove: handlePointerMove,
                                onPointerUp: handlePointerUp,
                                /**
               * pointer-cancel event means that something
               * interupted other pointer events
               * e.g. turning off the phone, so we do the
               * same actions as on pointer-up event
               */ onPointerCancel: handlePointerUp,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        className: PullableContentClasses.puller
                                    }),
                                    header
                                ]
                            }),
                            children
                        ]
                    })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ DEFAULT_DURATION),
/* harmony export */   "X": () => (/* binding */ DEFAULT_OCCUPIED_SPACE)
/* harmony export */ });
const DEFAULT_DURATION = 500;
const DEFAULT_OCCUPIED_SPACE = 0.5;


/***/ }),

/***/ 49987:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* reexport safe */ _PullableContent__WEBPACK_IMPORTED_MODULE_0__.J)
/* harmony export */ });
/* harmony import */ var _PullableContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9286);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PullableContent__WEBPACK_IMPORTED_MODULE_0__]);
_PullableContent__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 964:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ SearchFiltersSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var buttons_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15693);
/* harmony import */ var components_forms_SearchFiltersForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25593);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94605);
/* harmony import */ var hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7216);
/* harmony import */ var modals_FiltersModal_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93131);
/* harmony import */ var views_MobileSearchFilterHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3907);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([buttons_IconButton__WEBPACK_IMPORTED_MODULE_2__, components_forms_SearchFiltersForm__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_5__, views_MobileSearchFilterHeader__WEBPACK_IMPORTED_MODULE_7__]);
([buttons_IconButton__WEBPACK_IMPORTED_MODULE_2__, components_forms_SearchFiltersForm__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_5__, views_MobileSearchFilterHeader__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SearchFiltersSection = (props)=>{
    const { handleOpenFilters , handleOpenSearchMobile  } = props;
    const { selectedFilters  } = (0,hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_5__/* .useFilters */ .m)({
        includeFilterAttribute: (slug)=>!modals_FiltersModal_constants__WEBPACK_IMPORTED_MODULE_6__/* .cuttedAttributeSlugs.includes */ .t.includes(slug),
        independentFiltersSlugs: []
    });
    const filtersCount = Object.keys(selectedFilters).length;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    display: {
                        xs: "flex",
                        md: "none"
                    },
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    py: 1
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_MobileSearchFilterHeader__WEBPACK_IMPORTED_MODULE_7__/* .MobileSearchFilterHeader */ .g, {
                        handleOpenSearchMobile: handleOpenSearchMobile
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                        color: "secondary",
                        badgeContent: filtersCount || null,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_IconButton__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
                            variant: "outlined",
                            color: "secondary",
                            onClick: handleOpenFilters,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
                                icon: "filter",
                                color: "inherit"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    display: {
                        xs: "none",
                        md: "block"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_forms_SearchFiltersForm__WEBPACK_IMPORTED_MODULE_3__/* .SearchFiltersForm */ .h, {})
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* reexport safe */ _SearchFiltersSection__WEBPACK_IMPORTED_MODULE_0__.f)
/* harmony export */ });
/* harmony import */ var _SearchFiltersSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(964);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchFiltersSection__WEBPACK_IMPORTED_MODULE_0__]);
_SearchFiltersSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ SearchResultsLayout)
/* harmony export */ });
/* unused harmony export SearchResultsLayoutClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41430);
/* harmony import */ var contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9242);
/* harmony import */ var hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7216);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62430);
/* harmony import */ var _components_ListingsView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74985);
/* harmony import */ var _components_MapView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34972);
/* harmony import */ var _hooks_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54524);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_3__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_4__, hooks_index__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_7__, _components_ListingsView__WEBPACK_IMPORTED_MODULE_8__, _components_MapView__WEBPACK_IMPORTED_MODULE_9__, _hooks_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_10__]);
([contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_3__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_4__, hooks_index__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_7__, _components_ListingsView__WEBPACK_IMPORTED_MODULE_8__, _components_MapView__WEBPACK_IMPORTED_MODULE_9__, _hooks_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PREFIX = "SearchResultsLayout";
const SearchResultsLayoutClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "root"
]);
const StyledSearchResultsLayout = (0,theme_index__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>{
    return {
        [`&.${SearchResultsLayoutClasses.root}`]: {
            width: "100%",
            marginTop: `${theme_index__WEBPACK_IMPORTED_MODULE_7__/* .SEARCH_FILTERS_HEIGHT */ .gm}px`
        }
    };
});
const SearchResultsLayout = ()=>{
    const { data: website  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_5__/* .useGetWebsite */ .Rz)();
    const googleMapsMapId = website?.map_id;
    const searchResultsLayoutHeight = (0,_hooks_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_10__/* .useSearchResultsLayoutHeight */ .f)();
    const { selectedFilters  } = (0,hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_4__/* .useFilters */ .m)();
    const isCityFilter = !!lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(selectedFilters, application_constants__WEBPACK_IMPORTED_MODULE_2__/* .CITY_SOURCE */ .JJ);
    const isBoundsFilter = !!lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(selectedFilters, application_constants__WEBPACK_IMPORTED_MODULE_2__/* .BOUNDS_SOURCE */ .iV);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_3__/* .SearchResultsContextProvider */ .h9, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSearchResultsLayout, {
            className: SearchResultsLayoutClasses.root,
            height: searchResultsLayoutHeight,
            children: isCityFilter || isBoundsFilter ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MapView__WEBPACK_IMPORTED_MODULE_9__/* .MapView */ .b, {
                googleMapsMapId: googleMapsMapId
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ListingsView__WEBPACK_IMPORTED_MODULE_8__/* .ListingsView */ .K, {})
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ BlurNoResultsView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
;// CONCATENATED MODULE: ./src/components/custom/SearchResultsLayout/components/BlurNoResultsView/BlurNoResultsView.tsx


const BlurNoResultsView = (props)=>{
    const { sx , slots , slotProps , ...rest } = props;
    const { blurActions: BlurActions , blurTextContent: BlurTextContent , blurListingsContent: BlurListingsContent  } = slots;
    const { blurActions: blurActionsProps , blurTextContent: blurTextContentProps , blurListingsContent: blurListingsContentProps  } = slotProps || {};
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            position: "relative",
            ...sx
        },
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BlurListingsContent, {
                ...blurListingsContentProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    borderRadius: 4,
                    backgroundColor: "text.primary",
                    opacity: 0.6
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    px: 4
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(BlurTextContent, {
                            ...blurTextContentProps
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(BlurActions, {
                            ...blurActionsProps
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/custom/SearchResultsLayout/components/BlurNoResultsView/index.ts



/***/ }),

/***/ 85168:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ ListingsSectionHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var buttons_SortingButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52110);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53127);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([buttons_SortingButton__WEBPACK_IMPORTED_MODULE_2__]);
buttons_SortingButton__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ListingsSectionHeader = (props)=>{
    const { count , isFullMatchMoreThanFetched , sx , className  } = props;
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .q)({
        basePath: "pages.search.partial_match"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        justifyContent: "space-between",
        flexWrap: "nowrap",
        sx: sx,
        className: className,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h5",
                        mb: 1,
                        children: translate("found_with_criteria")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "body1",
                                component: "span",
                                children: translate("listings_with", {
                                    count: `${count}${isFullMatchMoreThanFetched ? "+" : ""}`
                                })
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "body2",
                                component: "span",
                                color: "success.main",
                                children: translate("match")
                            })
                        ]
                    })
                ]
            }),
            !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                whiteSpace: "nowrap",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_SortingButton__WEBPACK_IMPORTED_MODULE_2__/* .SortingButton */ .J, {})
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25779:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* reexport safe */ _ListingsSectionHeader__WEBPACK_IMPORTED_MODULE_0__.H)
/* harmony export */ });
/* harmony import */ var _ListingsSectionHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85168);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListingsSectionHeader__WEBPACK_IMPORTED_MODULE_0__]);
_ListingsSectionHeader__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88082:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ ListingsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32860);
/* harmony import */ var _SearchResultsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__, _SearchResultsList__WEBPACK_IMPORTED_MODULE_3__]);
([react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__, _SearchResultsList__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const ListingsView = (props)=>{
    const { sx , className  } = props;
    const columnsCount = (0,_SearchResultsList__WEBPACK_IMPORTED_MODULE_3__/* .useResponsiveColumnsCount */ .f)({
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        component: _mui_material__WEBPACK_IMPORTED_MODULE_1__.Box,
        maxWidth: "xl",
        sx: {
            height: "100%",
            width: "100%",
            px: 3,
            ...sx
        },
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            pt: 2,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                position: "relative",
                flexGrow: 1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    children: ({ width , height  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchResultsList__WEBPACK_IMPORTED_MODULE_3__/* .SearchResultsList */ .M, {
                            width: width,
                            height: height,
                            columnsCount: columnsCount,
                            scrollOffset: 8
                        })
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74985:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* reexport safe */ _ListingsView__WEBPACK_IMPORTED_MODULE_0__.K)
/* harmony export */ });
/* harmony import */ var _ListingsView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88082);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListingsView__WEBPACK_IMPORTED_MODULE_0__]);
_ListingsView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ MapView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var custom_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19827);
/* harmony import */ var custom_SearchResultsLayout_hooks_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54524);
/* harmony import */ var _PullableSearchResults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1508);
/* harmony import */ var _SearchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23015);
/* harmony import */ var _SearchResultsDrawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16333);
/* harmony import */ var _SearchResultsDrawerToggler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58829);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, custom_Map__WEBPACK_IMPORTED_MODULE_4__, custom_SearchResultsLayout_hooks_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_5__, _PullableSearchResults__WEBPACK_IMPORTED_MODULE_6__, _SearchMap__WEBPACK_IMPORTED_MODULE_7__, _SearchResultsDrawer__WEBPACK_IMPORTED_MODULE_8__, _SearchResultsDrawerToggler__WEBPACK_IMPORTED_MODULE_9__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, custom_Map__WEBPACK_IMPORTED_MODULE_4__, custom_SearchResultsLayout_hooks_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_5__, _PullableSearchResults__WEBPACK_IMPORTED_MODULE_6__, _SearchMap__WEBPACK_IMPORTED_MODULE_7__, _SearchResultsDrawer__WEBPACK_IMPORTED_MODULE_8__, _SearchResultsDrawerToggler__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const MapView = (props)=>{
    const { sx , className , googleMapsMapId  } = props;
    const { value: isListingsDrawerOpened , toggle: toggleListingsDrawer , setFalse: closeListingsDrawer  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .useBoolean */ .kt)(true);
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const searchResultsLayoutHeight = (0,custom_SearchResultsLayout_hooks_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_5__/* .useSearchResultsLayoutHeight */ .f)();
    const [hoveredListingId, setHoveredListingId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleListingMouseEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>{
        setHoveredListingId(id);
    }, []);
    const handleListingMouseLeave = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setHoveredListingId(null);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            height: "100%",
            position: "relative",
            display: "flex",
            ...sx
        },
        className: className,
        children: [
            !isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchResultsDrawer__WEBPACK_IMPORTED_MODULE_8__/* .SearchResultsDrawer */ .k, {
                open: isListingsDrawerOpened,
                onClose: closeListingsDrawer,
                onListingMouseEnter: handleListingMouseEnter,
                onListingMouseLeave: handleListingMouseLeave
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    position: isMobile ? "fixed" : "relative",
                    width: isMobile ? "100%" : "50%",
                    flexGrow: 1,
                    height: searchResultsLayoutHeight,
                    bottom: 0,
                    left: 0,
                    right: 0
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_Map__WEBPACK_IMPORTED_MODULE_4__/* .MapWrapper */ .fk, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchMap__WEBPACK_IMPORTED_MODULE_7__/* .SearchMap */ .$, {
                            hoveredListingId: hoveredListingId,
                            options: {
                                mapId: googleMapsMapId
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            display: {
                                xs: "none",
                                md: "block"
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchResultsDrawerToggler__WEBPACK_IMPORTED_MODULE_9__/* .SearchResultsDrawerToggler */ .Q, {
                            open: isListingsDrawerOpened,
                            onClick: toggleListingsDrawer
                        })
                    })
                ]
            }),
            isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PullableSearchResults__WEBPACK_IMPORTED_MODULE_6__/* .PullableSearchResults */ .Zm, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34972:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* reexport safe */ _MapView__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var _MapView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82907);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MapView__WEBPACK_IMPORTED_MODULE_0__]);
_MapView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97597:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ MapViewButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94605);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const MapViewButton = (props)=>{
    const { sx , ...rest } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "buttons"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
        size: "small",
        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
            icon: "neigborhood",
            color: theme.palette.text.light
        }),
        sx: {
            textTransform: "none",
            color: "text.light",
            ...sx
        },
        ...rest,
        children: translate("map_view")
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _MapViewButton__WEBPACK_IMPORTED_MODULE_0__.C)
/* harmony export */ });
/* harmony import */ var _MapViewButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97597);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MapViewButton__WEBPACK_IMPORTED_MODULE_0__]);
_MapViewButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ PartialMatchSectionHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var buttons_SortingButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52110);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53127);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([buttons_SortingButton__WEBPACK_IMPORTED_MODULE_2__]);
buttons_SortingButton__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const PartialMatchSectionHeader = (props)=>{
    const { count , isOnlyPartial , sx , className  } = props;
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .q)({
        basePath: "pages.search.partial_match"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        justifyContent: "space-between",
        flexWrap: "nowrap",
        sx: sx,
        className: className,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                width: "100%",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h5",
                        textAlign: {
                            xs: "start",
                            md: isOnlyPartial ? "start" : "center"
                        },
                        mb: 1,
                        children: translate("also_liked")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "body1",
                                component: "span",
                                children: translate("stays_with", {
                                    count
                                })
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "body2",
                                component: "span",
                                color: "warning.dark",
                                children: translate("partial_fits")
                            })
                        ]
                    })
                ]
            }),
            !isMobile && isOnlyPartial && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                whiteSpace: "nowrap",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_SortingButton__WEBPACK_IMPORTED_MODULE_2__/* .SortingButton */ .J, {})
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91303:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* reexport safe */ _PartialMatchSectionHeader__WEBPACK_IMPORTED_MODULE_0__.Q)
/* harmony export */ });
/* harmony import */ var _PartialMatchSectionHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73509);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PartialMatchSectionHeader__WEBPACK_IMPORTED_MODULE_0__]);
_PartialMatchSectionHeader__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PullableSearchResults),
/* harmony export */   "r": () => (/* binding */ PULLABLE_SEARCH_RESULTS_HEADER_HEIGHT)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var buttons_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15693);
/* harmony import */ var contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9242);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94605);
/* harmony import */ var custom_PullableContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49987);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32860);
/* harmony import */ var _SearchResultsHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4237);
/* harmony import */ var _SearchResultsList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([buttons_IconButton__WEBPACK_IMPORTED_MODULE_3__, contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, custom_PullableContent__WEBPACK_IMPORTED_MODULE_6__, react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_8__, _SearchResultsHeader__WEBPACK_IMPORTED_MODULE_9__, _SearchResultsList__WEBPACK_IMPORTED_MODULE_10__]);
([buttons_IconButton__WEBPACK_IMPORTED_MODULE_3__, contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, custom_PullableContent__WEBPACK_IMPORTED_MODULE_6__, react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_8__, _SearchResultsHeader__WEBPACK_IMPORTED_MODULE_9__, _SearchResultsList__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PULLABLE_SEARCH_RESULTS_HEADER_HEIGHT = 60;
const SCROLL_TOP_LIMIT = 300;
const PullableSearchResults = ()=>{
    const listInstanceRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const listContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [scrollY, setScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { isPullableContentOpen , openPullableContent , closePullableContent  } = (0,contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_4__/* .useSearchResultsContext */ .tw)();
    const handleScrollTop = ()=>{
        window?.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = lodash_throttle__WEBPACK_IMPORTED_MODULE_7___default()(()=>{
            const listInstance = listInstanceRef.current;
            const listContainer = listContainerRef.current;
            if (!listInstance || !listContainer) return;
            const { top: listTop  } = listContainer.getBoundingClientRect();
            /**
       * We scroll the virtualized list to the offset between the
       * top of the list (the first element) and the top of the
       * viewport if the top of the list is above the viewport's top,
       * otherwise, if the list's top is below the viewport's top
       * we scroll the list to the begining because there are already
       * enough items to fill the viewport, since the list height is
       * `document.documentElement.clientHeight`
       */ listInstance.scrollTo(listTop >= 0 ? 0 : Math.abs(listTop));
        }, 100);
        const onScroll = ()=>{
            setScrollY(window.scrollY);
            handleScroll();
        };
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    const listHeight = typeof document === "undefined" ? 0 : document.documentElement.clientHeight;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_PullableContent__WEBPACK_IMPORTED_MODULE_6__/* .PullableContent */ .J, {
                open: isPullableContentOpen,
                onClose: closePullableContent,
                onOpen: openPullableContent,
                header: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchResultsHeader__WEBPACK_IMPORTED_MODULE_9__/* .SearchResultsHeader */ .v, {
                    isDrawerOpen: isPullableContentOpen,
                    onClose: closePullableContent,
                    onOpen: openPullableContent,
                    sx: {
                        height: PULLABLE_SEARCH_RESULTS_HEADER_HEIGHT
                    }
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    px: 2,
                    pt: 2,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        disableHeight: true,
                        // without the defaultWidth scrollRestoration does not work
                        defaultWidth: 400,
                        children: ({ width  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchResultsList__WEBPACK_IMPORTED_MODULE_10__/* .SearchResultsList */ .M, {
                                listRef: listInstanceRef,
                                outerRef: listContainerRef,
                                columnsCount: 1,
                                width: width,
                                height: listHeight,
                                /**
                 * The style goes to outer element of the virtualized list.
                 * We need these styles for window scrolling instead of
                 * the container one
                 */ style: {
                                    height: "auto",
                                    overflow: "visible"
                                }
                            })
                    })
                })
            }),
            isPullableContentOpen && scrollY >= SCROLL_TOP_LIMIT ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_IconButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
                variant: "contained",
                onClick: handleScrollTop,
                sx: {
                    position: "fixed",
                    bottom: (theme)=>theme.spacing(9),
                    right: (theme)=>theme.spacing(2),
                    zIndex: (theme)=>theme.zIndex.fab,
                    borderRadius: "50%"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__/* .IcoMoon */ .n, {
                    icon: "back-to-top",
                    color: theme.palette.primary.contrastText
                })
            }) : null
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zm": () => (/* reexport safe */ _PullableSearchResults__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "rv": () => (/* reexport safe */ _PullableSearchResults__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _PullableSearchResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39745);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PullableSearchResults__WEBPACK_IMPORTED_MODULE_0__]);
_PullableSearchResults__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58066:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ MapOverlappingListingsPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var buttons_CloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56733);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22297);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62430);
/* harmony import */ var views_ListingMapView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17781);
/* harmony import */ var _PullableSearchResults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([buttons_CloseButton__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_5__, views_ListingMapView__WEBPACK_IMPORTED_MODULE_6__, _PullableSearchResults__WEBPACK_IMPORTED_MODULE_7__]);
([buttons_CloseButton__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_5__, views_ListingMapView__WEBPACK_IMPORTED_MODULE_6__, _PullableSearchResults__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PREFIX = "MapOverlappingListingsPanel";
const MapOverlappingListingsPanelClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "root",
    "paper",
    "header",
    "content",
    "list",
    "swiper",
    "swiperSlide"
]);
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_5__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    const mobile = theme.breakpoints.down("md");
    return {
        [`&.${MapOverlappingListingsPanelClasses.root}`]: {
            position: "absolute",
            top: 16,
            left: 16,
            right: "auto",
            bottom: 16,
            width: 440,
            zIndex: theme.zIndex.drawer,
            [mobile]: {
                top: "auto",
                right: 16,
                bottom: _PullableSearchResults__WEBPACK_IMPORTED_MODULE_7__/* .PULLABLE_SEARCH_RESULTS_HEADER_HEIGHT */ .rv + 8,
                width: "auto"
            }
        },
        [`& .${MapOverlappingListingsPanelClasses.paper}`]: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: theme.palette.common.white,
            borderRadius: theme.spacing(2),
            [mobile]: {
                height: "auto"
            }
        },
        [`& .${MapOverlappingListingsPanelClasses.header}`]: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: theme.spacing(3, 3, 0, 3),
            marginBottom: theme.spacing(2),
            [mobile]: {
                padding: theme.spacing(2, 2, 0, 2),
                marginBottom: theme.spacing(1)
            }
        },
        [`& .${MapOverlappingListingsPanelClasses.content}`]: {
            zIndex: 1,
            flexGrow: 1,
            width: "100%",
            padding: theme.spacing(0, 2, 0, 3),
            overflow: "hidden",
            [mobile]: {
                padding: theme.spacing(0, 2, 2, 2)
            }
        },
        [`& .${MapOverlappingListingsPanelClasses.list}`]: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
            overflowY: "auto",
            padding: theme.spacing(0, 1, 2, 0)
        },
        [`& .${MapOverlappingListingsPanelClasses.swiper}`]: {
            overflow: "visible"
        },
        [`& .${MapOverlappingListingsPanelClasses.swiperSlide}`]: {
            width: `calc(100% - ${theme.spacing(2)})`
        }
    };
});
const MapOverlappingListingsPanel = (props)=>{
    const { items , onClose  } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "custom"
    });
    const itemsCount = items.length;
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const listingCards = items.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ListingMapView__WEBPACK_IMPORTED_MODULE_6__/* .ListingMapView */ .s, {
            ...item
        }, index));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledRoot, {
        className: MapOverlappingListingsPanelClasses.root,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
            className: MapOverlappingListingsPanelClasses.paper,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    className: MapOverlappingListingsPanelClasses.header,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "h5",
                            children: translate("count_properties_in_this_location", {
                                count: itemsCount
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_CloseButton__WEBPACK_IMPORTED_MODULE_2__/* .CloseButton */ .P, {
                            onClick: onClose
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    className: MapOverlappingListingsPanelClasses.content,
                    children: isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__/* .Swiper */ .tq, {
                        className: MapOverlappingListingsPanelClasses.swiper,
                        spaceBetween: 16,
                        slidesPerView: "auto",
                        children: listingCards.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__/* .SwiperSlide */ .o5, {
                                className: MapOverlappingListingsPanelClasses.swiperSlide,
                                children: item
                            }, index))
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        className: MapOverlappingListingsPanelClasses.list,
                        children: listingCards
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89172:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ SearchMap)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var custom_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19827);
/* harmony import */ var custom_SearchResultsLayout_components_PullableSearchResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1508);
/* harmony import */ var custom_SearchResultsLayout_hooks_useGetMapPoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7291);
/* harmony import */ var hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7216);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49605);
/* harmony import */ var hooks_useDeepMemo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28188);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var use_resize_observer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76819);
/* harmony import */ var use_resize_observer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(use_resize_observer__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _helpers_cropBounds__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56413);
/* harmony import */ var _helpers_getBoundsFromPoints__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23722);
/* harmony import */ var _SearchMapContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1688);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_Map__WEBPACK_IMPORTED_MODULE_4__, custom_SearchResultsLayout_components_PullableSearchResults__WEBPACK_IMPORTED_MODULE_5__, custom_SearchResultsLayout_hooks_useGetMapPoints__WEBPACK_IMPORTED_MODULE_6__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_7__, hooks_index__WEBPACK_IMPORTED_MODULE_8__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_9__, _SearchMapContent__WEBPACK_IMPORTED_MODULE_13__]);
([custom_Map__WEBPACK_IMPORTED_MODULE_4__, custom_SearchResultsLayout_components_PullableSearchResults__WEBPACK_IMPORTED_MODULE_5__, custom_SearchResultsLayout_hooks_useGetMapPoints__WEBPACK_IMPORTED_MODULE_6__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_7__, hooks_index__WEBPACK_IMPORTED_MODULE_8__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_9__, _SearchMapContent__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















// TODO: Tel-aviv by default, improve logic, after BE will be ready
const DEFAULT_CENTER = {
    lat: 32.085597807413,
    lng: 34.781109247296
};
const SearchMap = (props)=>{
    const { hoveredListingId , options , ...rest } = props;
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const { selectedFilters , setFilters  } = (0,hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_7__/* .useFilters */ .m)({
        independentFiltersSlugs: [
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOUNDS_SOURCE */ .iV
        ],
        includeFilterAttribute: (slug)=>slug === application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ
    });
    const selectedCitySlug = lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(selectedFilters, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ);
    const { data: cityData = []  } = (0,hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)({
        enabled: !!selectedCitySlug
    });
    const selectedCityData = cityData?.find((city)=>city.slug === selectedCitySlug);
    const { latitude: selectedCityLat = DEFAULT_CENTER["lat"] , longitude: selectedCityLng = DEFAULT_CENTER["lng"] , zoom: selectedCityZoom = application_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_MAP_ZOOM_VALUE */ .aA  } = selectedCityData || {};
    const selectedCityCenter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            lat: selectedCityLat,
            lng: selectedCityLng
        }), [
        selectedCityLat,
        selectedCityLng
    ]);
    const boundsLiteralFromFilters = (0,hooks_useDeepMemo__WEBPACK_IMPORTED_MODULE_10__/* .useDeepMemo */ .v)(selectedFilters[application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOUNDS_SOURCE */ .iV] ?? null);
    const { points , isLoading: isPointsLoading  } = (0,custom_SearchResultsLayout_hooks_useGetMapPoints__WEBPACK_IMPORTED_MODULE_6__/* .useGetMapPoints */ .R)();
    const boundsLiteralFromPoints = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_helpers_getBoundsFromPoints__WEBPACK_IMPORTED_MODULE_14__/* .getBoundsFromPoints */ .q)(points)?.toJSON() ?? null, [
        points
    ]);
    /**
   * We need these values to init the map.
   * We use refs instead of state since we don't need a
   * rerender because we change the center and the zoom with
   * corresponding methods from the map instance
   */ const initialMapCenterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedCityCenter);
    const initialMapZoomRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedCityZoom);
    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialMapZoomRef.current);
    const [bounds, setBounds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(boundsLiteralFromFilters);
    const [map, setMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [selectedListingId, setSelectedListingId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    /**
   * We need this ref to understand what caused the
   * update of bounds or zoom. I can be either user action
   * like zooming or map dragging, or change from our side.
   */ const isUserInteractionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    use_resize_observer__WEBPACK_IMPORTED_MODULE_12___default()({
        ref: map?.getDiv(),
        onResize: ()=>{
            /**
       * We don't want to push bounds to the url on map resize.
       * For some reason map `resize` event not working, so we use
       * resize observer
       */ isUserInteractionRef.current = false;
        }
    });
    /**
   * Move the map to bounds from filters.
   * On mobile we have pullable drawer, so we provide
   * an extra padding to the bottom to not to have
   * points underneath it
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (map && boundsLiteralFromFilters) {
            isUserInteractionRef.current = false;
            map.fitBounds(boundsLiteralFromFilters, {
                bottom: isMobile ? custom_SearchResultsLayout_components_PullableSearchResults__WEBPACK_IMPORTED_MODULE_5__/* .PULLABLE_SEARCH_RESULTS_HEADER_HEIGHT */ .rv : 0,
                left: 0,
                right: 0,
                top: 0
            });
        }
    }, [
        boundsLiteralFromFilters,
        map,
        isMobile
    ]);
    /**
   * Move the map to calculated bounds from points.
   * We also provide a padding to not to see the points
   * on edges of the map. On mobile we have pullable drawer,
   * so we provide an extra padding to the bottom to not to have
   * points underneath it.
   * Also, we set the `maxZoom` before the `fitBounds` call,
   * since if the points' coordinates are really close,
   * the `fitBounds` will zoom as much as possible, but
   * we want to restict it a little bit. We restore the original
   * `maxZoom` after the call.
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (map && !isPointsLoading && boundsLiteralFromPoints && !boundsLiteralFromFilters) {
            isUserInteractionRef.current = false;
            const edgesOffset = 50;
            const originalMapMaxZoom = map.get("maxZoom");
            map.setOptions({
                maxZoom: 19
            });
            map.fitBounds(boundsLiteralFromPoints, {
                bottom: isMobile ? custom_SearchResultsLayout_components_PullableSearchResults__WEBPACK_IMPORTED_MODULE_5__/* .PULLABLE_SEARCH_RESULTS_HEADER_HEIGHT */ .rv + edgesOffset : edgesOffset,
                left: edgesOffset,
                right: edgesOffset,
                top: edgesOffset
            });
            map.setOptions({
                maxZoom: originalMapMaxZoom
            });
        }
    }, [
        map,
        boundsLiteralFromPoints,
        isPointsLoading,
        boundsLiteralFromFilters,
        isMobile
    ]);
    /**
   * Move and zoom the map to the selected city if it's changed
   * and there are no bounds in the url, and search results points
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (map && !isPointsLoading && !boundsLiteralFromPoints && !boundsLiteralFromFilters) {
            isUserInteractionRef.current = false;
            map.panTo(selectedCityCenter);
            map.setZoom(selectedCityZoom);
        }
    }, [
        map,
        selectedCityCenter,
        selectedCityZoom,
        boundsLiteralFromPoints,
        isPointsLoading,
        boundsLiteralFromFilters
    ]);
    const handleIdle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!map) return;
        const isUserInteraction = isUserInteractionRef.current;
        isUserInteractionRef.current = true;
        const newBounds = map.getBounds();
        const newZoom = map.getZoom();
        const isZoomChanged = newZoom && zoom !== newZoom;
        const areBoundsChanged = newBounds && !newBounds.equals(bounds);
        if (isZoomChanged) {
            setZoom(newZoom);
        }
        if (areBoundsChanged) {
            /**
       * On mobile we have pullable drawer, so we crop bounds
       * with extra bottom padding to not to have points underneath it.
       * `cropBounds` can return `undefined` in case when the map is not
       * fully initialized. In this case we use uncropped bounds
       */ const updatedBounds = isMobile ? (0,_helpers_cropBounds__WEBPACK_IMPORTED_MODULE_15__/* .cropBounds */ .K)({
                map,
                bounds: newBounds,
                bottom: custom_SearchResultsLayout_components_PullableSearchResults__WEBPACK_IMPORTED_MODULE_5__/* .PULLABLE_SEARCH_RESULTS_HEADER_HEIGHT */ .rv
            }) ?? newBounds : newBounds;
            const updatedBoundsLiteral = updatedBounds.toJSON();
            setBounds(updatedBoundsLiteral);
            /**
       * We want to push bounds to the url only if a user
       * changed the visible area of the map by himself
       */ if (isUserInteraction) {
                setFilters((prev)=>({
                        ...prev,
                        [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOUNDS_SOURCE */ .iV]: updatedBoundsLiteral,
                        [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ]: null,
                        [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .COUNTRY_SOURCE */ .ui]: null,
                        [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .STATE_SOURCE */ .Me]: null
                    }));
                return;
            }
        }
    }, [
        map,
        zoom,
        bounds,
        isMobile,
        setFilters
    ]);
    const handleMapClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        // we close the MapListingPoint by clicking on the map
        setSelectedListingId(null);
    }, []);
    const debouncedHandleIdle = (0,hooks_index__WEBPACK_IMPORTED_MODULE_8__/* .useDebouncedCallback */ .y1)(handleIdle, 1000);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_Map__WEBPACK_IMPORTED_MODULE_4__/* .Map */ .D5, {
        center: initialMapCenterRef.current,
        zoom: initialMapZoomRef.current,
        options: {
            gestureHandling: isMobile ? "greedy" : "auto",
            ...options
        },
        onLoad: setMap,
        onIdle: debouncedHandleIdle,
        onClick: handleMapClick,
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchMapContent__WEBPACK_IMPORTED_MODULE_13__/* .SearchMapContent */ .z, {
            points: points,
            bounds: bounds,
            zoom: zoom,
            hoveredListingId: hoveredListingId,
            selectedListingId: selectedListingId,
            onSelectedListingIdChange: setSelectedListingId
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ SearchMapContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9242);
/* harmony import */ var custom_MapListingCluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12315);
/* harmony import */ var custom_MapListingPoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78544);
/* harmony import */ var helpers_isClusterMapProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37257);
/* harmony import */ var use_supercluster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58670);
/* harmony import */ var _MapOverlappingListingsPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58066);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_3__, custom_MapListingCluster__WEBPACK_IMPORTED_MODULE_4__, custom_MapListingPoint__WEBPACK_IMPORTED_MODULE_5__, _MapOverlappingListingsPanel__WEBPACK_IMPORTED_MODULE_8__]);
([contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_3__, custom_MapListingCluster__WEBPACK_IMPORTED_MODULE_4__, custom_MapListingPoint__WEBPACK_IMPORTED_MODULE_5__, _MapOverlappingListingsPanel__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const SearchMapContent = (props)=>{
    const { points , zoom , bounds , hoveredListingId , selectedListingId , onSelectedListingIdChange  } = props;
    const map = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useGoogleMap)();
    const { closePullableContent  } = (0,contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_3__/* .useSearchResultsContext */ .tw)();
    const clusterBounds = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (bounds) {
            const { west , south , east , north  } = bounds;
            return [
                west,
                south,
                east,
                north
            ];
        }
    }, [
        bounds
    ]);
    const { clusters , supercluster  } = (0,use_supercluster__WEBPACK_IMPORTED_MODULE_7__["default"])({
        points,
        bounds: clusterBounds,
        zoom,
        options: {
            radius: 60,
            /**
       * Some high value that should not be reached,
       * since we don't want clusters to be opened
       * when some zoom level is reached. The number
       * higher than 30 produces the errors
       * @see https://github.com/mapbox/supercluster/issues/221
       */ maxZoom: 30
        }
    });
    const [selectedOverlappingListingIds, setSelectedOverlappingListingsIds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const selectedOverlappingListings = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return points.reduce((acc, point)=>{
            if (selectedOverlappingListingIds.includes(point.properties.id)) {
                return [
                    ...acc,
                    point.properties
                ];
            }
            return acc;
        }, []);
    }, [
        points,
        selectedOverlappingListingIds
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        /**
     * If we have selected overlapping listing ids,
     * but don't have the listings themselves it means
     * that user did some action that changed map points
     * (changed filters, moved map, etc.). In this case
     * we remove selected ids (close the popup automatically)
     */ if (selectedOverlappingListingIds.length && !selectedOverlappingListings.length) {
            setSelectedOverlappingListingsIds([]);
        }
    }, [
        selectedOverlappingListingIds,
        selectedOverlappingListings
    ]);
    const getHandleListingInfoBoxOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>()=>{
            onSelectedListingIdChange(id);
        }, [
        onSelectedListingIdChange
    ]);
    const getHandleListingInfoBoxClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>()=>{
            onSelectedListingIdChange(null);
        }, [
        onSelectedListingIdChange
    ]);
    const handleClusterClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params)=>async (event)=>{
            // prevent click elements on the map
            event.stopPropagation();
            const { id , position  } = params;
            if (!map || !supercluster) return;
            const expansionZoom = supercluster.getClusterExpansionZoom(id);
            const maxZoomService = new google.maps.MaxZoomService();
            try {
                const { zoom: maxZoom  } = await maxZoomService.getMaxZoomAtLatLng(position);
                if (expansionZoom > maxZoom) {
                    const clusterLeaves = supercluster.getLeaves(id, Infinity);
                    const overlappingListingIds = clusterLeaves.map((leaf)=>leaf.properties.id);
                    setSelectedOverlappingListingsIds(overlappingListingIds);
                    return;
                }
            } catch  {
                // We don't do anything if max zoom request failed
                return;
            }
            // close pullable drawer
            closePullableContent();
            map.setZoom(expansionZoom);
            map.panTo(position);
        }, [
        closePullableContent,
        map,
        supercluster
    ]);
    const handleOverlappingListingsClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setSelectedOverlappingListingsIds([]);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            clusters.map((cluster)=>{
                const { id , geometry , properties  } = cluster;
                const [lng = 0, lat = 0] = geometry.coordinates;
                const position = {
                    lat,
                    lng
                };
                if ((0,helpers_isClusterMapProperties__WEBPACK_IMPORTED_MODULE_6__/* .isClusterProperties */ .x)(properties)) {
                    const { point_count , cluster_id  } = properties;
                    const leaves = supercluster?.getLeaves(cluster_id, Infinity);
                    const isActive = leaves ? leaves.some((listing)=>listing.id === hoveredListingId) : false;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_MapListingCluster__WEBPACK_IMPORTED_MODULE_4__/* .MapListingCluster */ ._, {
                        position: position,
                        count: point_count,
                        active: isActive,
                        onClick: handleClusterClick({
                            id: cluster_id,
                            position
                        })
                    }, id);
                }
                const { id: listingId  } = properties;
                const isSelected = listingId === selectedListingId;
                const isActive = listingId === hoveredListingId;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_MapListingPoint__WEBPACK_IMPORTED_MODULE_5__/* .MapListingPoint */ .I, {
                    position: position,
                    active: isActive,
                    selected: isSelected,
                    properties: properties,
                    onOpen: getHandleListingInfoBoxOpen(listingId),
                    onClose: getHandleListingInfoBoxClose()
                }, id);
            }),
            selectedOverlappingListings.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MapOverlappingListingsPanel__WEBPACK_IMPORTED_MODULE_8__/* .MapOverlappingListingsPanel */ .Y, {
                items: selectedOverlappingListings,
                onClose: handleOverlappingListingsClose
            }) : null
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ cropBounds)
/* harmony export */ });
const cropBounds = (params)=>{
    const { map , bounds , bottom =0 , left =0 , right =0 , top =0  } = params;
    const overlayView = new google.maps.OverlayView();
    overlayView.setMap(map);
    const southWest = bounds.getSouthWest();
    const northEast = bounds.getNorthEast();
    const projection = overlayView.getProjection();
    if (!projection) return;
    const bottomLeftPoint = projection.fromLatLngToDivPixel(southWest);
    const topRightPoint = projection.fromLatLngToDivPixel(northEast);
    if (!bottomLeftPoint || !topRightPoint) return;
    const newBottomLeftPoint = new google.maps.Point(bottomLeftPoint.x + left, bottomLeftPoint.y - bottom);
    const newTopRightPoint = new google.maps.Point(topRightPoint.x - right, topRightPoint.y + top);
    const newSouthWest = projection.fromDivPixelToLatLng(newBottomLeftPoint);
    const newNorthEast = projection.fromDivPixelToLatLng(newTopRightPoint);
    // Not sure we need to do it, but it sounds reasonable to "untie" the overlay from the map
    overlayView.setMap(null);
    return new google.maps.LatLngBounds(newSouthWest, newNorthEast);
};


/***/ }),

/***/ 23722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ getBoundsFromPoints)
/* harmony export */ });
const getBoundsFromPoints = (points)=>{
    if (!points.length) return null;
    const bounds = new google.maps.LatLngBounds();
    let isAtLeastOnePoint = false;
    points.forEach((point)=>{
        const [lng, lat] = point.geometry.coordinates;
        if (lng && lat) {
            isAtLeastOnePoint = true;
            bounds.extend({
                lng,
                lat
            });
        }
    });
    return isAtLeastOnePoint ? bounds : null;
};


/***/ }),

/***/ 23015:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ _SearchMap__WEBPACK_IMPORTED_MODULE_0__.$)
/* harmony export */ });
/* harmony import */ var _SearchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89172);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchMap__WEBPACK_IMPORTED_MODULE_0__]);
_SearchMap__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ SearchResultsDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32860);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62430);
/* harmony import */ var _hooks_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54524);
/* harmony import */ var _SearchResultsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_4__, _hooks_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_5__, _SearchResultsList__WEBPACK_IMPORTED_MODULE_6__]);
([react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_4__, _hooks_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_5__, _SearchResultsList__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const PREFIX = "SearchResultsDrawer";
const drawerMaxWidth = 972;
const drawerZIndex = 1070; // should be less than search filters (1100), but more than MapListingPoint (1050)
const StyledDrawer = (0,theme_index__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme , open  })=>{
    return {
        width: "50%",
        maxWidth: drawerMaxWidth,
        // should be the same transition as the mui drawer has
        transition: theme.transitions.create("margin", {
            duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
            easing: open ? theme.transitions.easing.easeOut : theme.transitions.easing.sharp
        }),
        [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_2__.drawerClasses.paper}`]: {
            boxSizing: "border-box",
            width: "50%",
            maxWidth: drawerMaxWidth,
            position: "absolute",
            zIndex: drawerZIndex,
            background: theme.palette.background.default
        }
    };
});
const SearchResultsDrawer = (props)=>{
    const { sx , open , onListingMouseEnter , onListingMouseLeave , ...rest } = props;
    const columnsCount = (0,_SearchResultsList__WEBPACK_IMPORTED_MODULE_6__/* .useResponsiveColumnsCount */ .f)({
        xs: 1,
        lg: 2
    });
    const height = (0,_hooks_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_5__/* .useSearchResultsLayoutHeight */ .f)();
    const [drawer, setDrawerNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const drawerWidth = drawer?.offsetWidth ?? drawerMaxWidth;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDrawer, {
        ref: setDrawerNode,
        open: open,
        sx: {
            height,
            marginLeft: open ? 0 : `-${drawerWidth}px`,
            display: {
                xs: "none",
                md: "block"
            },
            ...sx
        },
        anchor: "left",
        variant: "persistent",
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            pl: 4,
            pr: 3,
            pt: 2,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                position: "relative",
                flexGrow: 1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    children: ({ width , height  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchResultsList__WEBPACK_IMPORTED_MODULE_6__/* .SearchResultsList */ .M, {
                            width: width,
                            height: height,
                            columnsCount: columnsCount,
                            scrollOffset: 8,
                            onListingMouseEnter: onListingMouseEnter,
                            onListingMouseLeave: onListingMouseLeave
                        })
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* reexport safe */ _SearchResultsDrawer__WEBPACK_IMPORTED_MODULE_0__.k)
/* harmony export */ });
/* harmony import */ var _SearchResultsDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchResultsDrawer__WEBPACK_IMPORTED_MODULE_0__]);
_SearchResultsDrawer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SearchResultsDrawerToggler)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48719);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94605);
/* harmony import */ var helpers_getDirectionFromLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70225);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92552);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_4__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SearchResultsDrawerToggler = (props)=>{
    const { open , sx , ...rest } = props;
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_2__/* .useLocaleContext */ .PE)();
    const direction = (0,helpers_getDirectionFromLocale__WEBPACK_IMPORTED_MODULE_5__/* .getDirectionFromLocale */ .V)(locale);
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .qM)({
        basePath: "buttons"
    });
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const iconName = `chevron-${direction === "ltr" ? "left" : "right"}`;
    if (open) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "outlined",
            color: "secondary",
            sx: {
                minWidth: 0,
                position: "absolute",
                top: theme.spacing(2),
                left: theme.spacing(2),
                zIndex: theme.zIndex.fab,
                background: theme.palette.background.default,
                padding: theme.spacing(1),
                "&:hover": {
                    background: theme.palette.background.default
                },
                ...sx
            },
            ...rest,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                icon: iconName,
                color: "inherit"
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "outlined",
        sx: {
            position: "absolute",
            top: theme.spacing(2),
            left: theme.spacing(2),
            zIndex: theme.zIndex.fab,
            background: theme.palette.background.default,
            "&:hover": {
                background: theme.palette.background.default
            },
            ...sx
        },
        color: "secondary",
        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
            icon: iconName,
            sx: {
                transform: "rotate(180deg)"
            },
            color: "inherit"
        }),
        ...rest,
        children: translate("show_list")
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* reexport safe */ _SearchResultsDrawerToggler__WEBPACK_IMPORTED_MODULE_0__.Q)
/* harmony export */ });
/* harmony import */ var _SearchResultsDrawerToggler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47171);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchResultsDrawerToggler__WEBPACK_IMPORTED_MODULE_0__]);
_SearchResultsDrawerToggler__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ SearchResultsHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49230);
/* harmony import */ var buttons_SortingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52110);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94605);
/* harmony import */ var _MapViewButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79534);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([buttons_SortingButton__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, _MapViewButton__WEBPACK_IMPORTED_MODULE_5__]);
([buttons_SortingButton__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, _MapViewButton__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SearchResultsHeader = (props)=>{
    const { isDrawerOpen , onOpen , onClose , sx , className  } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        className: className,
        sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            ...sx
        },
        children: isDrawerOpen ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MapViewButton__WEBPACK_IMPORTED_MODULE_5__/* .MapViewButton */ .C, {
                    onClick: onClose
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_SortingButton__WEBPACK_IMPORTED_MODULE_3__/* .SortingButton */ .J, {})
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
            onClick: onOpen,
            size: "small",
            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
                icon: "list",
                color: theme.palette.text.light
            }),
            sx: {
                textTransform: "none",
                color: "text.light"
            },
            children: "buttons.list_view"
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* reexport safe */ _SearchResultsHeader__WEBPACK_IMPORTED_MODULE_0__.v)
/* harmony export */ });
/* harmony import */ var _SearchResultsHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49589);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchResultsHeader__WEBPACK_IMPORTED_MODULE_0__]);
_SearchResultsHeader__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ SearchResultsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41430);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
/* harmony import */ var views_InfiniteListingsView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93465);
/* harmony import */ var _SearchResultsLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49154);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks__WEBPACK_IMPORTED_MODULE_3__, views_InfiniteListingsView__WEBPACK_IMPORTED_MODULE_4__]);
([hooks__WEBPACK_IMPORTED_MODULE_3__, views_InfiniteListingsView__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SearchResultsList = (props)=>{
    const { listRef , ...rest } = props;
    const listInstanceRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const finalListRef = listRef || listInstanceRef;
    const { data: searchResults , hasNextPage , fetchNextPage , isFetchingNextPage , total , isLoading  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useGetSearchResults */ .I$)({
        onSuccess: ()=>{
        // FIXME: hidden for first version
        // const total = get(data, 'pages.0.meta.total');
        // if (!total) {
        //   // Display notification when we have no results
        //   notify(SnackbarNoResultsView, {
        //     props: ({ onClose }) => ({
        //       action: (
        //         <Button
        //           variant="contained"
        //           sx={{ whiteSpace: { lg: 'nowrap' } }}
        //           onClick={() => {
        //             handleOpenInquiryModal();
        //             onClose();
        //           }}
        //         >
        //           {'pages.search.actions.create_inquiry'}
        //         </Button>
        //       ),
        //     }),
        //     autoHideDuration: 20000,
        //   });
        // }
        }
    }, {
        perPage: application_constants__WEBPACK_IMPORTED_MODULE_2__/* .SEARCH_PER_PAGE */ .jp
    });
    if (isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchResultsLoader__WEBPACK_IMPORTED_MODULE_5__/* .SearchResultsLoader */ .p, {
            sx: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                maxWidth: 280
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_InfiniteListingsView__WEBPACK_IMPORTED_MODULE_4__/* .InfiniteListingsView */ .D, {
        ...rest,
        listRef: finalListRef,
        data: searchResults,
        hasMore: hasNextPage,
        onLoadMore: fetchNextPage,
        isFetchingNextPage: isFetchingNextPage,
        totalListingsCount: total
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* reexport */ useResponsiveColumnsCount)
});

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
;// CONCATENATED MODULE: ./src/components/custom/SearchResultsLayout/components/SearchResultsList/helpers/useResponsiveColumnsCount/useResponsiveColumnsCount.ts

const useResponsiveColumnsCount = (params)=>{
    const { xs =1 , sm =xs , md =sm , lg =md  } = params;
    const isXs = (0,material_.useMediaQuery)((theme)=>theme.breakpoints.down("sm"));
    const isSm = (0,material_.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const isMd = (0,material_.useMediaQuery)((theme)=>theme.breakpoints.down("lg"));
    const isLg = (0,material_.useMediaQuery)((theme)=>theme.breakpoints.down("xl"));
    return isXs ? xs : isSm ? sm : isMd ? md : isLg ? lg : lg;
};

;// CONCATENATED MODULE: ./src/components/custom/SearchResultsLayout/components/SearchResultsList/helpers/useResponsiveColumnsCount/index.ts



/***/ }),

/***/ 95229:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* reexport safe */ _SearchResultsList__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   "f": () => (/* reexport safe */ _helpers_useResponsiveColumnsCount__WEBPACK_IMPORTED_MODULE_1__.f)
/* harmony export */ });
/* harmony import */ var _SearchResultsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33613);
/* harmony import */ var _helpers_useResponsiveColumnsCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26312);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchResultsList__WEBPACK_IMPORTED_MODULE_0__]);
_SearchResultsList__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* reexport */ SearchResultsLoader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./src/components/custom/Loader/index.ts + 1 modules
var Loader = __webpack_require__(76238);
;// CONCATENATED MODULE: ./src/components/custom/SearchResultsLayout/components/SearchResultsLoader/SearchResultsLoader.tsx


const SearchResultsLoader = (props)=>{
    const { className , sx  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(Loader/* Loader */.a, {
        sx: sx,
        className: className,
        message: "pages.search.loading"
    });
};

;// CONCATENATED MODULE: ./src/components/custom/SearchResultsLayout/components/SearchResultsLoader/index.ts



/***/ }),

/***/ 7291:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* reexport safe */ _useGetMapPoints__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _useGetMapPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65374);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useGetMapPoints__WEBPACK_IMPORTED_MODULE_0__]);
_useGetMapPoints__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65374:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ useGetMapPoints)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41430);
/* harmony import */ var helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12764);
/* harmony import */ var helpers_getValueFromFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37960);
/* harmony import */ var helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23517);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92552);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__, hooks_index__WEBPACK_IMPORTED_MODULE_5__]);
([helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__, hooks_index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const useGetMapPoints = ()=>{
    const { data: searchResults , isFetching  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_5__/* .useGetSearchResults */ .I$)({
        // With `keepPreviousData` we will see old points while the new ones are loading
        keepPreviousData: true
    }, {
        perPage: application_constants__WEBPACK_IMPORTED_MODULE_1__/* .SEARCH_PER_PAGE */ .jp
    });
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_5__/* .useTranslate */ .qM)();
    const getPrice = (0,helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const points = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!searchResults) return [];
        const allPagesData = searchResults.pages.reduce((acc, page)=>{
            return [
                ...acc,
                ...page.data
            ];
        }, []);
        return allPagesData.reduce((acc, item)=>{
            const { id , title , address , currency , gallery =[] , formatted_filters , slug , average_price: averagePricePerNight  } = item;
            const { value: latFilter  } = (0,helpers_getValueFromFilter__WEBPACK_IMPORTED_MODULE_3__/* .getValueFromFilter */ .Q)({
                filtersArray: formatted_filters,
                slug: application_constants__WEBPACK_IMPORTED_MODULE_1__/* .LOCATION_SLUG */ .Bp
            });
            const { value: lngFilter  } = (0,helpers_getValueFromFilter__WEBPACK_IMPORTED_MODULE_3__/* .getValueFromFilter */ .Q)({
                filtersArray: formatted_filters,
                slug: application_constants__WEBPACK_IMPORTED_MODULE_1__/* .LOCATION_SLUG */ .Bp,
                selectSource: "amount_max"
            });
            if (!lngFilter || !latFilter) return acc;
            const lat = Number(latFilter);
            const lng = Number(lngFilter);
            if (isNaN(lat) || isNaN(lng)) return acc;
            const { code: currencyCode  } = currency;
            const [accommodates, bedrooms, bathrooms, basePrice, rating, ratingCount] = (0,helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
                formattedFilters: formatted_filters,
                slugs: [
                    application_constants__WEBPACK_IMPORTED_MODULE_1__/* .ACCOMMODATES_SOURCE */ .s0,
                    application_constants__WEBPACK_IMPORTED_MODULE_1__/* .BEDROOMS_SOURCE */ .Bt,
                    application_constants__WEBPACK_IMPORTED_MODULE_1__/* .BATHROOMS_SOURCE */ .qA,
                    application_constants__WEBPACK_IMPORTED_MODULE_1__/* .BASE_PRICE_SLUG */ .LI,
                    application_constants__WEBPACK_IMPORTED_MODULE_1__/* .RATING_SLUG */ .gd,
                    application_constants__WEBPACK_IMPORTED_MODULE_1__/* .RATING_COUNT_SLUG */ .BN
                ]
            });
            const parsedBasePrice = basePrice?.value ? Number(basePrice?.value) : 0;
            const basePriceInCurrentCurrency = getPrice({
                initialCurrencyCode: currencyCode,
                amount: parsedBasePrice
            });
            const averagePriceInCurrentCurrency = getPrice({
                amount: averagePricePerNight || 0,
                initialCurrencyCode: currencyCode
            });
            const amenitiesItems = [
                {
                    id: "1",
                    label: bedrooms?.filterAttribute?.title,
                    value: bedrooms?.value,
                    iconName: "bedrooms"
                },
                {
                    id: "2",
                    label: bathrooms?.filterAttribute?.title,
                    value: bathrooms?.value,
                    iconName: "bathrooms"
                },
                {
                    id: "3",
                    label: translate.root("custom.guest"),
                    value: accommodates?.value,
                    iconName: "user"
                }
            ];
            const src = gallery[0]?.src;
            const point = {
                id,
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [
                        lng,
                        lat
                    ]
                },
                properties: {
                    id,
                    slug,
                    name: title,
                    address,
                    rating: rating?.value,
                    reviewsCount: ratingCount?.value,
                    price: averagePricePerNight ? averagePriceInCurrentCurrency : basePriceInCurrentCurrency,
                    amenitiesItems,
                    src
                }
            };
            return [
                ...acc,
                point
            ];
        }, []);
    }, [
        getPrice,
        searchResults,
        translate
    ]);
    return {
        points,
        isLoading: isFetching
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* reexport safe */ _useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_0__.f)
/* harmony export */ });
/* harmony import */ var _useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18030);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_0__]);
_useSearchResultsLayoutHeight__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18030:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useSearchResultsLayoutHeight)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_1__]);
theme_index__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useSearchResultsLayoutHeight = ()=>{
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const isDvhSupported = typeof CSS === "undefined" || typeof CSS?.supports === "undefined" ? false : CSS.supports("height", "100dvh");
    const topOffset = (isMobile ? theme_index__WEBPACK_IMPORTED_MODULE_1__/* .MOBILE_HEADER_HEIGHT */ .ZQ : theme_index__WEBPACK_IMPORTED_MODULE_1__/* .HEADER_HEIGHT */ .Mz) + theme_index__WEBPACK_IMPORTED_MODULE_1__/* .SEARCH_FILTERS_HEIGHT */ .gm;
    return `calc(100${isDvhSupported ? "dvh" : "vh"} - ${topOffset}px)`;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ DesktopSearchFilters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41430);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94605);
/* harmony import */ var hooks_useGetAccommodatesChoices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89847);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53127);
/* harmony import */ var inputs_SearchCityInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8372);
/* harmony import */ var inputs_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71898);
/* harmony import */ var inputs_SelectField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53790);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, hooks_useGetAccommodatesChoices__WEBPACK_IMPORTED_MODULE_4__, inputs_SearchCityInput__WEBPACK_IMPORTED_MODULE_6__, inputs_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_7__, inputs_SelectField__WEBPACK_IMPORTED_MODULE_8__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, hooks_useGetAccommodatesChoices__WEBPACK_IMPORTED_MODULE_4__, inputs_SearchCityInput__WEBPACK_IMPORTED_MODULE_6__, inputs_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_7__, inputs_SelectField__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const DesktopSearchFilters = ()=>{
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_5__/* .useTranslate */ .q)();
    const accommodatesChoices = (0,hooks_useGetAccommodatesChoices__WEBPACK_IMPORTED_MODULE_4__/* .useGetAccommodatesChoices */ .r)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        spacing: 1,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                md: 4,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_SearchCityInput__WEBPACK_IMPORTED_MODULE_6__/* .SearchCityInput */ .T, {
                    name: application_constants__WEBPACK_IMPORTED_MODULE_2__/* .CITY_SOURCE */ .JJ,
                    withoutHelperTextSpace: true
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                md: 4,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_7__/* .SearchDateRangePickerInput */ .i, {
                    withoutHelperTextSpace: true,
                    fromName: application_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHECKIN_AT_SOURCE */ .I1,
                    toName: application_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHECKOUT_AT_SOURCE */ .ob,
                    label: false,
                    placeholder: translate.root("pages.search.placeholder.date"),
                    minDate: new Date()
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                md: 4,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_SelectField__WEBPACK_IMPORTED_MODULE_8__/* .SelectField */ .m, {
                    name: application_constants__WEBPACK_IMPORTED_MODULE_2__/* .ACCOMMODATES_SOURCE */ .s0,
                    placeholder: translate.root("pages.search.placeholder.guest"),
                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                        icon: "user"
                    }),
                    items: accommodatesChoices,
                    withoutHelperTextSpace: true
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ MobileSearchFilters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41430);
/* harmony import */ var buttons_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49230);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94605);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92552);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53127);
/* harmony import */ var inputs_SearchCityInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8372);
/* harmony import */ var inputs_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71898);
/* harmony import */ var inputs_SelectField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53790);
/* harmony import */ var templates_GridItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(120);
/* harmony import */ var theme_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19018);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, hooks_index__WEBPACK_IMPORTED_MODULE_5__, inputs_SearchCityInput__WEBPACK_IMPORTED_MODULE_7__, inputs_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_8__, inputs_SelectField__WEBPACK_IMPORTED_MODULE_9__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, hooks_index__WEBPACK_IMPORTED_MODULE_5__, inputs_SearchCityInput__WEBPACK_IMPORTED_MODULE_7__, inputs_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_8__, inputs_SelectField__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const MobileSearchFilters = (props)=>{
    const { onClose  } = props;
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .q)();
    const accommodatesChoices = (0,hooks_index__WEBPACK_IMPORTED_MODULE_5__/* .useGetAccommodatesChoices */ .rY)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .P, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_SearchCityInput__WEBPACK_IMPORTED_MODULE_7__/* .SearchCityInput */ .T, {
                    name: application_constants__WEBPACK_IMPORTED_MODULE_2__/* .CITY_SOURCE */ .JJ,
                    label: "inputs.location"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .P, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_8__/* .SearchDateRangePickerInput */ .i, {
                    fromName: application_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHECKIN_AT_SOURCE */ .I1,
                    toName: application_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHECKOUT_AT_SOURCE */ .ob,
                    label: translate.root("inputs.date_range"),
                    placeholder: translate.root("pages.search.placeholder.date"),
                    minDate: new Date()
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .P, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_SelectField__WEBPACK_IMPORTED_MODULE_9__/* .SelectField */ .m, {
                    name: application_constants__WEBPACK_IMPORTED_MODULE_2__/* .ACCOMMODATES_SOURCE */ .s0,
                    label: translate.root("inputs.guests"),
                    placeholder: translate.root("pages.search.placeholder.guest"),
                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
                        icon: "user"
                    }),
                    items: accommodatesChoices
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                position: "fixed",
                bottom: 24,
                pr: 6,
                width: 1,
                className: theme_constants__WEBPACK_IMPORTED_MODULE_11__/* .LAYOUT_SHIFT_COMPENSATION_CLASS */ .ZM,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    container: true,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 1,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            order: 0,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                variant: "outlined",
                                fullWidth: true,
                                onClick: onClose,
                                children: "modals.filters.actions.cancel"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            order: 1,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                variant: "contained",
                                fullWidth: true,
                                type: "submit",
                                children: "modals.filters.actions.apply"
                            })
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55069:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ SearchFiltersForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23101);
/* harmony import */ var hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7216);
/* harmony import */ var hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49605);
/* harmony import */ var hooks_useDeepMemo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28188);
/* harmony import */ var hooks_useForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1580);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45641);
/* harmony import */ var views_FormView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(58403);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21386);
/* harmony import */ var _DesktopSearchFilters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19378);
/* harmony import */ var _MobileSearchFilters__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(77656);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(63445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_4__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_5__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_6__, hooks_useForm__WEBPACK_IMPORTED_MODULE_8__, react_hook_form__WEBPACK_IMPORTED_MODULE_12__, views_FormView__WEBPACK_IMPORTED_MODULE_13__, _DesktopSearchFilters__WEBPACK_IMPORTED_MODULE_15__, _MobileSearchFilters__WEBPACK_IMPORTED_MODULE_16__, _schema__WEBPACK_IMPORTED_MODULE_17__]);
([components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_4__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_5__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_6__, hooks_useForm__WEBPACK_IMPORTED_MODULE_8__, react_hook_form__WEBPACK_IMPORTED_MODULE_12__, views_FormView__WEBPACK_IMPORTED_MODULE_13__, _DesktopSearchFilters__WEBPACK_IMPORTED_MODULE_15__, _MobileSearchFilters__WEBPACK_IMPORTED_MODULE_16__, _schema__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const SearchFiltersForm = (props)=>{
    const { onClose  } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { data: popularCitiesData = []  } = (0,hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)();
    const { allFilters , selectedFilters , setFilters  } = (0,hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_5__/* .useFilters */ .m)({
        independentFiltersSlugs: [
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOOKING_RANGE_SOURCE */ .rV,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .COUNTRY_SOURCE */ .ui,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .STATE_SOURCE */ .Me,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOUNDS_SOURCE */ .iV
        ],
        includeFilterAttribute: (slug)=>_constants__WEBPACK_IMPORTED_MODULE_14__/* .SEARCH_FILTERS_SOURCES.includes */ .t.includes(slug)
    });
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(theme.breakpoints.down("md"));
    const isBoundsFilter = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(selectedFilters, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOUNDS_SOURCE */ .iV);
    const filterValues = {
        ...lodash_omit__WEBPACK_IMPORTED_MODULE_11___default()(allFilters, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOUNDS_SOURCE */ .iV),
        [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHECKIN_AT_SOURCE */ .I1]: allFilters[application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOOKING_RANGE_SOURCE */ .rV][application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHECKIN_AT_SOURCE */ .I1],
        [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHECKOUT_AT_SOURCE */ .ob]: allFilters[application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOOKING_RANGE_SOURCE */ .rV][application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHECKOUT_AT_SOURCE */ .ob],
        [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ]: isBoundsFilter ? components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_4__/* .MAP_AREA_ID */ .l : allFilters[application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ] || ""
    };
    const memoizedFilterValues = (0,hooks_useDeepMemo__WEBPACK_IMPORTED_MODULE_7__/* .useDeepMemo */ .v)(filterValues);
    const form = (0,hooks_useForm__WEBPACK_IMPORTED_MODULE_8__/* .useForm */ .c)({
        defaultValues: memoizedFilterValues,
        validationSchema: _schema__WEBPACK_IMPORTED_MODULE_17__/* .searchFiltersValidationSchema */ .S
    });
    const { control , getValues , reset , trigger  } = form;
    /**
   * We disable values subscription on mobile
   * since we have a submit button
   */ const formValues = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useWatch)({
        control,
        disabled: isMobile
    });
    const prevFormValuesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(getValues());
    const updateFilters = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((values)=>{
        const prevValues = prevFormValuesRef.current;
        prevFormValuesRef.current = values;
        const cityValue = values[application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ];
        const prevCityValue = prevValues[application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ];
        const isCityChanged = prevCityValue !== cityValue;
        const isMapArea = cityValue === components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_4__/* .MAP_AREA_ID */ .l;
        const shouldClearBounds = isCityChanged && !isMapArea;
        const selectedPopularCity = popularCitiesData.find((city)=>city.slug === values[application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ]);
        const newFilters = {
            [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ]: isMapArea ? "" : cityValue,
            [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .ACCOMMODATES_SOURCE */ .s0]: values[application_constants__WEBPACK_IMPORTED_MODULE_3__/* .ACCOMMODATES_SOURCE */ .s0],
            [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOOKING_RANGE_SOURCE */ .rV]: {
                [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHECKIN_AT_SOURCE */ .I1]: values[application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHECKIN_AT_SOURCE */ .I1],
                [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHECKOUT_AT_SOURCE */ .ob]: values[application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHECKOUT_AT_SOURCE */ .ob]
            },
            [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .STATE_SOURCE */ .Me]: selectedPopularCity?.state?.code,
            [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .COUNTRY_SOURCE */ .ui]: selectedPopularCity?.country?.code
        };
        // We remove bounds from url if city is changed to update the map correctly
        setFilters(({ bounds  })=>({
                ...newFilters,
                bounds: shouldClearBounds ? null : bounds
            }));
    }, [
        popularCitiesData,
        setFilters
    ]);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((values)=>{
        updateFilters(values);
        onClose?.();
    }, [
        onClose,
        updateFilters
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // We don't update filters on change on mobile since we have a submit button
        if (!isMobile && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_10___default()(formValues, prevFormValuesRef.current)) {
            trigger();
            updateFilters(formValues);
        }
    }, [
        isMobile,
        formValues,
        updateFilters,
        trigger
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        /**
     * We don't get form values from `useWatch` outside
     * since we want to reset the form only if the filters
     * are changed
     */ const formValues = getValues();
        if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_10___default()(formValues, memoizedFilterValues)) {
            reset(memoizedFilterValues);
        }
    }, [
        memoizedFilterValues,
        reset,
        getValues
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_FormView__WEBPACK_IMPORTED_MODULE_13__/* .FormView */ .m, {
        ...form,
        onSubmit: handleSubmit,
        children: isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MobileSearchFilters__WEBPACK_IMPORTED_MODULE_16__/* .MobileSearchFilters */ .Q, {
            onClose: onClose
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DesktopSearchFilters__WEBPACK_IMPORTED_MODULE_15__/* .DesktopSearchFilters */ .S, {})
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SEARCH_FILTERS_SOURCES)
/* harmony export */ });
/* unused harmony export selectFieldItems */
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41430);

// TODO: The temporary solution according to PM decision
const selectFieldItems = Array.from(Array(100), (_, index)=>({
        title: index + 1,
        value: index + 1
    }));
const SEARCH_FILTERS_SOURCES = [
    application_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHECKIN_AT_SOURCE */ .I1,
    application_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHECKOUT_AT_SOURCE */ .ob,
    application_constants__WEBPACK_IMPORTED_MODULE_0__/* .ACCOMMODATES_SOURCE */ .s0,
    application_constants__WEBPACK_IMPORTED_MODULE_0__/* .CITY_SOURCE */ .JJ
];


/***/ }),

/***/ 25593:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _SearchFiltersForm__WEBPACK_IMPORTED_MODULE_0__.h)
/* harmony export */ });
/* harmony import */ var _SearchFiltersForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchFiltersForm__WEBPACK_IMPORTED_MODULE_0__]);
_SearchFiltersForm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ searchFiltersValidationSchema)
/* harmony export */ });
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41430);
/* harmony import */ var helpers_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48843);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([helpers_filters__WEBPACK_IMPORTED_MODULE_1__, zod__WEBPACK_IMPORTED_MODULE_2__]);
([helpers_filters__WEBPACK_IMPORTED_MODULE_1__, zod__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const searchFiltersValidationSchema = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({
    [application_constants__WEBPACK_IMPORTED_MODULE_0__/* .CITY_SOURCE */ .JJ]: helpers_filters__WEBPACK_IMPORTED_MODULE_1__/* .labeledFilterValueSchema.or */ .mX.or(zod__WEBPACK_IMPORTED_MODULE_2__.z.literal("")),
    [application_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHECKIN_AT_SOURCE */ .I1]: helpers_filters__WEBPACK_IMPORTED_MODULE_1__/* .bookingRangeFilterValueSchema.sourceType */ .o4.sourceType().shape[application_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHECKIN_AT_SOURCE */ .I1].or(zod__WEBPACK_IMPORTED_MODULE_2__.z.literal("")),
    [application_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHECKOUT_AT_SOURCE */ .ob]: helpers_filters__WEBPACK_IMPORTED_MODULE_1__/* .bookingRangeFilterValueSchema.sourceType */ .o4.sourceType().shape[application_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHECKOUT_AT_SOURCE */ .ob].or(zod__WEBPACK_IMPORTED_MODULE_2__.z.literal("")),
    [application_constants__WEBPACK_IMPORTED_MODULE_0__/* .ACCOMMODATES_SOURCE */ .s0]: (0,helpers_filters__WEBPACK_IMPORTED_MODULE_1__/* .getNumericFilterValueSchema */ .Sp)().or(zod__WEBPACK_IMPORTED_MODULE_2__.z.literal(""))
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82775:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ AmenitiesInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53127);
/* harmony import */ var inputs_CheckboxesInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17895);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32027);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_partition__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var views_CheckboxesInputView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54499);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([inputs_CheckboxesInput__WEBPACK_IMPORTED_MODULE_4__, views_CheckboxesInputView__WEBPACK_IMPORTED_MODULE_7__]);
([inputs_CheckboxesInput__WEBPACK_IMPORTED_MODULE_4__, views_CheckboxesInputView__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const AmenitiesListView = (props)=>{
    const { items , splitBy =()=>true , loading , ...rest } = props;
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .q)({
        basePath: "modals.filters"
    });
    const [popularAmenities, otherAmenities] = lodash_partition__WEBPACK_IMPORTED_MODULE_6___default()(items, splitBy);
    const shouldRenderPopularAmenities = !!popularAmenities.length;
    const shouldRenderOtherAmenities = !!otherAmenities.length;
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {})
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            shouldRenderPopularAmenities && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    backgroundColor: "actions.background",
                    px: 2,
                    pt: 2,
                    pb: 1,
                    borderRadius: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_8__/* .Typography */ .Z, {
                        variant: "body2",
                        color: "text.light",
                        mb: 1,
                        children: translate("popular")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_CheckboxesInputView__WEBPACK_IMPORTED_MODULE_7__/* .CheckboxesInputListView */ .OG, {
                        ...rest,
                        items: popularAmenities,
                        maxItems: Infinity
                    })
                ]
            }),
            shouldRenderOtherAmenities && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    px: 2,
                    pt: 2,
                    pb: 1
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_8__/* .Typography */ .Z, {
                        variant: "body2",
                        color: "text.light",
                        mb: 1,
                        children: translate("other_amenities")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_CheckboxesInputView__WEBPACK_IMPORTED_MODULE_7__/* .CheckboxesInputListView */ .OG, {
                        ...rest,
                        items: otherAmenities
                    })
                ]
            })
        ]
    });
};
const TOP_RANK = 100;
const AmenitiesInput = (props)=>{
    const splitBy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((item)=>lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(item, "rank") === TOP_RANK, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_CheckboxesInput__WEBPACK_IMPORTED_MODULE_4__/* .CheckboxesInput */ .H, {
        ...props,
        slots: {
            list: AmenitiesListView
        },
        slotProps: {
            list: {
                splitBy
            }
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81727:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* reexport safe */ _AmenitiesInput__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _AmenitiesInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82775);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AmenitiesInput__WEBPACK_IMPORTED_MODULE_0__]);
_AmenitiesInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37700:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ CheckboxesInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCheckboxesInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85418);
/* harmony import */ var _views_CheckboxesInputView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54499);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useCheckboxesInput__WEBPACK_IMPORTED_MODULE_1__, _views_CheckboxesInputView__WEBPACK_IMPORTED_MODULE_2__]);
([_useCheckboxesInput__WEBPACK_IMPORTED_MODULE_1__, _views_CheckboxesInputView__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const CheckboxesInput = (props)=>{
    const { name , choices , resource , filter , perPage , sort , fetchParams , ...rest } = props;
    const { items , value , onChange , error , helperText , loading , required  } = (0,_useCheckboxesInput__WEBPACK_IMPORTED_MODULE_1__/* .useCheckboxesInput */ .g)({
        name,
        choices,
        resource,
        filter,
        perPage,
        sort,
        fetchParams
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_CheckboxesInputView__WEBPACK_IMPORTED_MODULE_2__/* .CheckboxesInputView */ .lX, {
        ...rest,
        items: items,
        value: value,
        onChange: onChange,
        error: error,
        helperText: helperText,
        loading: loading,
        required: required
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CheckboxesInput)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17895:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* reexport safe */ _CheckboxesInput__WEBPACK_IMPORTED_MODULE_0__.H)
/* harmony export */ });
/* harmony import */ var _CheckboxesInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37700);
/* harmony import */ var _useCheckboxesInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85418);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CheckboxesInput__WEBPACK_IMPORTED_MODULE_0__, _useCheckboxesInput__WEBPACK_IMPORTED_MODULE_1__]);
([_CheckboxesInput__WEBPACK_IMPORTED_MODULE_0__, _useCheckboxesInput__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85418:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useCheckboxesInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49752);
/* harmony import */ var hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25611);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// TODO: refactor using ReferenceInput, ChoicesContext, and useChoicesQuery after 1.5.0 if possible
const useCheckboxesInput = (params)=>{
    const { name , resource , choices , perPage , sort , filter , fetchParams  } = params;
    const controllerProps = {
        name
    };
    const { field: { value =[] , onChange  } , fieldState: { error  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useController)(controllerProps);
    const isRequired = (0,hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_3__/* .useIsRequiredInput */ .D)(controllerProps);
    const fetchData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!resource) {
            return [];
        }
        const { data: { data  }  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_1__/* .fetchClient.get */ .zk.get({
            pathname: resource,
            perPage,
            sort,
            filter,
            ...fetchParams
        });
        return Array.isArray(data) ? data : [];
    }, [
        perPage,
        resource,
        sort,
        filter,
        fetchParams
    ]);
    const { data: queryItems = [] , isLoading  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)({
        queryKey: [
            resource,
            sort,
            perPage,
            filter,
            fetchParams
        ],
        queryFn: fetchData,
        enabled: !!resource,
        cacheTime: 15 * 1000,
        initialData: resource ? undefined : choices
    });
    return {
        items: choices ?? queryItems,
        value,
        onChange,
        error: !!error,
        helperText: error?.message,
        loading: isLoading,
        required: isRequired
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ CounterInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45641);
/* harmony import */ var _views_CounterInputView_CounterInputView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4195);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _views_CounterInputView_CounterInputView__WEBPACK_IMPORTED_MODULE_3__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _views_CounterInputView_CounterInputView__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const CounterInput = (props)=>{
    const { sx , className , control , name , min , max  } = props;
    const { field: { value , onChange  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useController)({
        control,
        name,
        defaultValue: 0
    });
    const handleIncrease = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const increasedValue = value + 1;
        const newValue = typeof max === "number" ? Math.min(increasedValue, max) : increasedValue;
        onChange(newValue);
    }, [
        value,
        max,
        onChange
    ]);
    const handleDecrease = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const decreasedValue = value - 1;
        const newValue = typeof min === "number" ? Math.max(decreasedValue, min) : decreasedValue;
        onChange(newValue);
    }, [
        value,
        min,
        onChange
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_CounterInputView_CounterInputView__WEBPACK_IMPORTED_MODULE_3__/* .CounterInputView */ .H, {
        sx: sx,
        className: className,
        onIncrease: handleIncrease,
        onDecrease: handleDecrease,
        value: value
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92846:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* reexport safe */ _CounterInput__WEBPACK_IMPORTED_MODULE_0__.g)
/* harmony export */ });
/* harmony import */ var _CounterInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CounterInput__WEBPACK_IMPORTED_MODULE_0__]);
_CounterInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14020:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ RangeSliderInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25611);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45641);
/* harmony import */ var _getRangeSliderValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7114);
/* harmony import */ var _useRangeSliderController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49870);
/* harmony import */ var _views_RangeSliderView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4774);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _getRangeSliderValue__WEBPACK_IMPORTED_MODULE_3__, _views_RangeSliderView__WEBPACK_IMPORTED_MODULE_5__]);
([hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _getRangeSliderValue__WEBPACK_IMPORTED_MODULE_3__, _views_RangeSliderView__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const RangeSliderInput = (props)=>{
    const { min , max , debounceMs , name , controllerProps , step , overMax , ...rest } = props;
    const finalControllerProps = {
        name,
        ...controllerProps
    };
    const { field: { value , onChange  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useController)(finalControllerProps);
    const isRequired = (0,hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_1__/* .useIsRequiredInput */ .D)(finalControllerProps);
    const resultValue = (0,_getRangeSliderValue__WEBPACK_IMPORTED_MODULE_3__/* .getRangeSliderValue */ .N)({
        value,
        min,
        max,
        overMax
    });
    const rangeSliderViewProps = (0,_useRangeSliderController__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        min,
        max,
        sliderProps: {
            step
        },
        onChange,
        value: resultValue,
        debounceMs,
        required: isRequired,
        overMax,
        ...rest
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_RangeSliderView__WEBPACK_IMPORTED_MODULE_5__/* .RangeSliderView */ .y, {
        ...rangeSliderViewProps
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getRangeSliderValue)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getRangeSliderValue = (params)=>{
    const { value , min , max , overMax  } = params;
    const baseValueItemSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.number().min(min).max(max);
    const minValueItemSchema = baseValueItemSchema.catch(min);
    const maxValueItemSchema = overMax ? zod__WEBPACK_IMPORTED_MODULE_0__.z.union([
        baseValueItemSchema,
        zod__WEBPACK_IMPORTED_MODULE_0__.z.undefined()
    ]).catch(undefined) : baseValueItemSchema.catch(max);
    const valueSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.tuple([
        minValueItemSchema,
        maxValueItemSchema
    ]).catch([
        min,
        overMax ? undefined : max
    ]);
    return valueSchema.parse(value);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7114:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* reexport safe */ _getRangeSliderValue__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _getRangeSliderValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49551);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getRangeSliderValue__WEBPACK_IMPORTED_MODULE_0__]);
_getRangeSliderValue__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37711:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* reexport safe */ _RangeSliderInput__WEBPACK_IMPORTED_MODULE_0__.G)
/* harmony export */ });
/* harmony import */ var _RangeSliderInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14020);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RangeSliderInput__WEBPACK_IMPORTED_MODULE_0__]);
_RangeSliderInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ useRangeSliderController_useRangeSliderController)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(93908);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);
;// CONCATENATED MODULE: ./src/components/inputs/RangeSliderInput/useRangeSliderController/useRangeSliderController.ts


const getSortedMinMaxValues = (values)=>{
    const fromValue = Math.min(values[0], values[1] || values[0]);
    const toValue = Math.max(values[0], values[1] || values[0]);
    return [
        fromValue,
        typeof values[1] === "undefined" ? undefined : toValue
    ];
};
const isIOS = ()=>{
    return [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
    ].includes(navigator.platform) || // iPad on iOS 13 detection
    navigator.userAgent.includes("Mac") && "ontouchend" in document;
};
/**
 * We use local state for:
 *   - debouncing outer changes
 *   - to use custom text format as "max+"
 * We use one state for typed text of "min" and "max" and create slider state from it.
 * Local state is in sync with outer state.
 * If "overMax" is used, the value may be [50, undefined]. 'undefined' means that "max+" is used
 */ const useRangeSliderController = (params)=>{
    const { onChange , value , min , max , debounceMs =200 , sliderProps: sliderPropsOverride = {} , fromInputProps: fromInputPropsOverride = {} , toInputProps: toInputPropsOverride = {} , leftHelperText , rightHelperText , overMax , ...restParams } = params;
    const maxMinValidate = (0,external_react_.useCallback)((value)=>{
        // prevent the user from entering values that are not valid according to the min and max props
        if (value > max) {
            return max;
        } else if (value < min) {
            return min;
        } else {
            return value;
        }
    }, [
        max,
        min
    ]);
    const getValidValue = (0,external_react_.useCallback)(({ value , fallback  })=>{
        if (isNaN(value)) return fallback;
        return maxMinValidate(value);
    }, [
        maxMinValidate
    ]);
    const isOverMaxValue = (0,external_react_.useCallback)((v)=>{
        return overMax && (typeof v === "undefined" || v >= max);
    }, [
        max,
        overMax
    ]);
    const sortedValues = getSortedMinMaxValues(value);
    const fromValue = getValidValue({
        value: sortedValues[0],
        fallback: min
    });
    const toValue = isOverMaxValue(sortedValues[1]) ? undefined : getValidValue({
        value: sortedValues[1] || max,
        fallback: max
    });
    const formatTypedToText = (0,external_react_.useCallback)((value)=>{
        return isOverMaxValue(value) ? `${max}+` : String(value);
    }, [
        isOverMaxValue,
        max
    ]);
    const [typedFromText, setTypedFromText] = (0,external_react_.useState)(String(sortedValues[0]));
    const [typedToText, setTypedToText] = (0,external_react_.useState)(formatTypedToText(sortedValues[1]));
    const parsedTypedFrom = parseFloat(typedFromText);
    const parsedTypedTo = parseFloat(typedToText);
    const typedFromValue = isNaN(parsedTypedFrom) ? min : parsedTypedFrom;
    const typedToValue = isNaN(parsedTypedTo) ? overMax ? undefined : max : getValidValue({
        value: parsedTypedTo,
        fallback: max
    });
    const sortedTypedValues = getSortedMinMaxValues([
        typedFromValue,
        typedToValue
    ]);
    const validFrom = getValidValue({
        value: sortedTypedValues[0],
        fallback: min
    });
    const getValidTo = (value)=>{
        return typeof value === "undefined" || overMax && value >= max ? undefined : getValidValue({
            value,
            fallback: max
        });
    };
    const validTo = getValidTo(sortedTypedValues[1]);
    const sliderValue = getSortedMinMaxValues([
        typedFromValue,
        typeof typedToValue !== "undefined" ? typedToValue : max
    ]);
    /* useInput returns new 'onChange' on each render. So our debounce below does not work.
  So it uses only the first gotten 'onChange'  */ const onChangeRef = (0,external_react_.useRef)(onChange);
    const debouncedOnChange = (0,external_react_.useMemo)(()=>{
        return debounce_default()(onChangeRef.current, debounceMs);
    }, [
        debounceMs
    ]);
    const prevValuesRef = (0,external_react_.useRef)([
        fromValue,
        toValue
    ]);
    const updatedExternalStateRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const validValue = [
            validFrom,
            validTo
        ];
        // If it is like "not valid" try to update external state once by same values. To avoid infinity loop
        if (JSON.stringify(validValue) === JSON.stringify(updatedExternalStateRef.current)) return;
        if (fromValue !== sortedValues[0] || toValue !== sortedValues[1]) {
            onChange(validValue);
            updatedExternalStateRef.current = validValue;
        }
    }, [
        fromValue,
        onChange,
        sortedValues,
        toValue,
        updatedExternalStateRef,
        validFrom,
        validTo
    ]);
    (0,external_react_.useEffect)(()=>{
        /* Update local state on external "value" changes */ if (fromValue === prevValuesRef.current[0] && toValue === prevValuesRef.current[1]) return;
        setTypedFromText(String(fromValue));
        setTypedToText(formatTypedToText(toValue));
        prevValuesRef.current = [
            fromValue,
            toValue
        ];
    }, [
        fromValue,
        formatTypedToText,
        max,
        overMax,
        toValue
    ]);
    const onFromChange = (0,external_react_.useCallback)((e)=>{
        const newValue = e.target.value;
        setTypedFromText(newValue);
    }, []);
    const onToChange = (0,external_react_.useCallback)((e)=>{
        const newValue = e.target.value;
        setTypedToText(newValue);
    }, []);
    const onFromBlur = (0,external_react_.useCallback)(()=>{
        if (validFrom !== fromValue) {
            onChange([
                validFrom,
                validTo
            ]);
        }
    }, [
        fromValue,
        onChange,
        validFrom,
        validTo
    ]);
    const onToBlur = (0,external_react_.useCallback)(()=>{
        setTypedToText(formatTypedToText(parsedTypedTo));
        if (validTo !== toValue) {
            onChange([
                validFrom,
                validTo
            ]);
        }
    }, [
        formatTypedToText,
        parsedTypedTo,
        validTo,
        toValue,
        onChange,
        validFrom
    ]);
    const onSliderChange = (event, v)=>{
        /**
     * @see https://github.com/mui/material-ui/issues/32737#issuecomment-1347356610
     * Slide thumb flickering on iphones fix
     */ if (isIOS() && event.type === "mousedown") {
            return;
        }
        setTypedFromText(String(v[0]));
        setTypedToText(formatTypedToText(v[1]));
        debouncedOnChange([
            v[0],
            getValidTo(v[1])
        ]);
    }; // slider uses one or two values and we use several values only
    const sliderProps = {
        onChange: onSliderChange,
        min,
        max,
        value: sliderValue,
        ...sliderPropsOverride
    };
    const fromInputProps = {
        ...fromInputPropsOverride,
        onChange: onFromChange,
        onBlur: onFromBlur,
        value: typedFromText
    };
    const toInputProps = {
        ...toInputPropsOverride,
        onChange: onToChange,
        onBlur: onToBlur,
        value: typedToText
    };
    return {
        ...restParams,
        sliderProps,
        fromInputProps,
        toInputProps,
        leftHelperText: typeof leftHelperText === "function" ? leftHelperText({
            value: min
        }) : leftHelperText,
        rightHelperText: typeof rightHelperText === "function" ? rightHelperText({
            value: max
        }) : rightHelperText
    };
};
/* harmony default export */ const useRangeSliderController_useRangeSliderController = (useRangeSliderController);

;// CONCATENATED MODULE: ./src/components/inputs/RangeSliderInput/useRangeSliderController/index.ts




/***/ }),

/***/ 70089:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ SearchCityInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23101);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49605);
/* harmony import */ var inputs_CityInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88181);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_4__, inputs_CityInput__WEBPACK_IMPORTED_MODULE_5__]);
([components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_4__, inputs_CityInput__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const optionValue = "slug";
const optionText = "title";
const SearchCityInput = (props)=>{
    const { name  } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "pages.search"
    });
    const { data: popularCitiesData = [] , isFetching: arePopularCitiesFetching  } = (0,hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)();
    /**
   * This logic is a duplication of the CityInput's one.
   * When BE will support "popular" parameter in the cities response,
   * it would be nice to remove this logic and get choices from ChoicesContext
   * that ReferenceInput with cities resource provides
   */ const popularCitiesChoices = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>popularCitiesData.map((item)=>{
            return {
                ...item,
                popular: true
            };
        }), [
        popularCitiesData
    ]);
    // We add extra "map area" choice to show it in the input when map is moved to custom bounds
    const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const extraMapAreaChoice = {
            [optionValue]: components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_2__/* .MAP_AREA_ID */ .l,
            [optionText]: translate("map_area")
        };
        return [
            extraMapAreaChoice,
            ...popularCitiesChoices
        ];
    }, [
        popularCitiesChoices,
        translate
    ]);
    // We don't want to show "map area" choice in the dropdown
    const filterOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((options)=>{
        return options.filter((option)=>lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(option, optionValue) !== components_pageTemplates_SearchPage__WEBPACK_IMPORTED_MODULE_2__/* .MAP_AREA_ID */ .l);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_CityInput__WEBPACK_IMPORTED_MODULE_5__/* .CityAutocompleteInput */ .M, {
        ...props,
        optionValue: optionValue,
        optionText: optionText,
        filterOptions: filterOptions,
        name: name,
        options: options,
        loading: arePopularCitiesFetching
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8372:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* reexport safe */ _SearchCityInput__WEBPACK_IMPORTED_MODULE_0__.T)
/* harmony export */ });
/* harmony import */ var _SearchCityInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70089);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchCityInput__WEBPACK_IMPORTED_MODULE_0__]);
_SearchCityInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FiltersModal),
/* harmony export */   "g": () => (/* binding */ FILTERS_MODAL_NAME)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41430);
/* harmony import */ var components_forms_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41096);
/* harmony import */ var custom_AttributesTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3804);
/* harmony import */ var helpers_getLabelResource__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(34549);
/* harmony import */ var hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7216);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92552);
/* harmony import */ var inputs_AmenitiesInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81727);
/* harmony import */ var inputs_AutocompleteInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77827);
/* harmony import */ var inputs_RangeSliderInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37711);
/* harmony import */ var inputs_ReferenceInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48504);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48524);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22133);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var modals_ModalBase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37622);
/* harmony import */ var _components_BasePriceRangeSliderInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4251);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(93131);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(62430);
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(49230);
/* harmony import */ var _inputs_CheckboxesInput_CheckboxesInput__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(37700);
/* harmony import */ var _inputs_SelectField__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(53790);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, components_forms_Form__WEBPACK_IMPORTED_MODULE_5__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_7__, hooks_index__WEBPACK_IMPORTED_MODULE_8__, inputs_AmenitiesInput__WEBPACK_IMPORTED_MODULE_9__, inputs_AutocompleteInput__WEBPACK_IMPORTED_MODULE_10__, inputs_RangeSliderInput__WEBPACK_IMPORTED_MODULE_11__, inputs_ReferenceInput__WEBPACK_IMPORTED_MODULE_12__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_15__, _components_BasePriceRangeSliderInput__WEBPACK_IMPORTED_MODULE_16__, _theme__WEBPACK_IMPORTED_MODULE_18__, _inputs_CheckboxesInput_CheckboxesInput__WEBPACK_IMPORTED_MODULE_20__, _inputs_SelectField__WEBPACK_IMPORTED_MODULE_21__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, components_forms_Form__WEBPACK_IMPORTED_MODULE_5__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_7__, hooks_index__WEBPACK_IMPORTED_MODULE_8__, inputs_AmenitiesInput__WEBPACK_IMPORTED_MODULE_9__, inputs_AutocompleteInput__WEBPACK_IMPORTED_MODULE_10__, inputs_RangeSliderInput__WEBPACK_IMPORTED_MODULE_11__, inputs_ReferenceInput__WEBPACK_IMPORTED_MODULE_12__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_15__, _components_BasePriceRangeSliderInput__WEBPACK_IMPORTED_MODULE_16__, _theme__WEBPACK_IMPORTED_MODULE_18__, _inputs_CheckboxesInput_CheckboxesInput__WEBPACK_IMPORTED_MODULE_20__, _inputs_SelectField__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























const PREFIX = "FiltersModal";
const StyledFiltersModal = (0,_theme__WEBPACK_IMPORTED_MODULE_18__/* .styled */ .zo)(modals_ModalBase__WEBPACK_IMPORTED_MODULE_15__/* .ModalBase */ .e, {
    name: `Styled--${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>{
    return {
        [`&& .${_mui_material__WEBPACK_IMPORTED_MODULE_2__.dialogClasses.paper}`]: {
            width: 598
        }
    };
});
const FILTERS_MODAL_NAME = "filters-modal";
const FiltersModal = (props)=>{
    const { onClose , ...rest } = props;
    const { allFilters , selectedFilters , setFilters , removeFilter , filterAttributes: filteredFilterAttributes  } = (0,hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_7__/* .useFilters */ .m)({
        independentFiltersSlugs: [],
        includeFilterAttribute: (slug)=>!_constants__WEBPACK_IMPORTED_MODULE_17__/* .cuttedAttributeSlugs.includes */ .t.includes(slug)
    });
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_8__/* .useTranslate */ .qM)({
        basePath: "modals.filters"
    });
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(_theme__WEBPACK_IMPORTED_MODULE_18__/* .theme.breakpoints.down */ .rS.breakpoints.down("sm"));
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((values)=>{
        setFilters((prev)=>({
                ...prev,
                ...values
            }));
        // FIXME: RM-7218
        const timeout = setTimeout(()=>{
            clearTimeout(timeout);
            onClose();
        }, 2000);
    }, [
        setFilters,
        onClose
    ]);
    const formId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    const handleClearAll = ()=>{
        Object.keys(selectedFilters).forEach((key)=>{
            removeFilter(key);
        });
        onClose();
    };
    const getAttributeElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params)=>{
        const { attributeData  } = params;
        const { filter_attribute: { id , min , max , title , slug , step , is_labeled , currency  } , is_multiple , is_rangable , is_required  } = attributeData;
        const isNumeric = !is_labeled;
        // We need this condition to pass 0 value
        const isRangesValuesExists = !lodash_isNull__WEBPACK_IMPORTED_MODULE_13___default()(min) && !lodash_isNull__WEBPACK_IMPORTED_MODULE_13___default()(max) && !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_14___default()(min) && !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_14___default()(max);
        const getAttributeInput = ()=>{
            if (is_rangable && isRangesValuesExists) {
                if (slug === application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BASE_PRICE_SLUG */ .LI) {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BasePriceRangeSliderInput__WEBPACK_IMPORTED_MODULE_16__/* .BasePriceRangeSliderInput */ .x, {
                        name: slug,
                        min: min,
                        max: max,
                        step: step || 1,
                        label: title,
                        currencySign: currency?.sign || ""
                    });
                }
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_RangeSliderInput__WEBPACK_IMPORTED_MODULE_11__/* .RangeSliderInput */ .G, {
                    name: slug,
                    min: min,
                    max: max,
                    step: step || 1,
                    label: title,
                    rightHelperText: translate.root("inputs.range_slider.right_helper_text", {
                        max
                    }),
                    leftHelperText: translate.root("inputs.range_slider.left_helper_text", {
                        min
                    })
                });
            }
            if (isNumeric && isRangesValuesExists) {
                // Example: Bathrooms, beds, bedrooms for is_multiple: true
                // Example: Guests/accomodates for is_multiple: false
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_inputs_SelectField__WEBPACK_IMPORTED_MODULE_21__/* .SelectField */ .m, {
                    name: slug,
                    fullWidth: true,
                    required: is_required,
                    label: title,
                    multiple: is_multiple,
                    items: (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getSelectNumericChoices */ .th)({
                        min,
                        max,
                        step: step || 1
                    })
                });
            }
            // Example: City
            if (!is_multiple && is_labeled) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_ReferenceInput__WEBPACK_IMPORTED_MODULE_12__/* .ReferenceInput */ .D, {
                    name: slug,
                    resource: (0,helpers_getLabelResource__WEBPACK_IMPORTED_MODULE_22__/* .getLabelResource */ .V)(id),
                    selectedChoicesFilterName: "slugs",
                    optionValue: "slug",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_AutocompleteInput__WEBPACK_IMPORTED_MODULE_10__/* .AutocompleteInput */ .P, {
                        fullWidth: true,
                        label: title,
                        optionValue: "slug"
                    })
                });
            }
            // Example: Amenities
            if (is_multiple && is_labeled) {
                if (slug === application_constants__WEBPACK_IMPORTED_MODULE_4__/* .AMENITIES_SLUG */ .CV) {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_AmenitiesInput__WEBPACK_IMPORTED_MODULE_9__/* .AmenitiesInput */ .A, {
                        name: slug,
                        label: title,
                        maxItems: 8,
                        optionValue: "slug",
                        optionIcon: "slug",
                        resource: application_constants__WEBPACK_IMPORTED_MODULE_4__/* .AMENITIES_SOURCE */ .Kd,
                        fetchParams: {
                            all: 1
                        },
                        sort: {
                            field: "rank,title",
                            order: "DESC"
                        }
                    });
                }
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_inputs_CheckboxesInput_CheckboxesInput__WEBPACK_IMPORTED_MODULE_20__/* .CheckboxesInput */ .H, {
                    name: slug,
                    label: title,
                    maxItems: 8,
                    optionValue: "slug",
                    optionIcon: "slug",
                    resource: (0,helpers_getLabelResource__WEBPACK_IMPORTED_MODULE_22__/* .getLabelResource */ .V)(id),
                    sort: {
                        field: "rank,title",
                        order: "DESC"
                    },
                    perPage: application_constants__WEBPACK_IMPORTED_MODULE_4__/* .FILTER_LABELS_LIMIT */ .et
                });
            }
            return null;
        };
        return getAttributeInput();
    }, [
        translate
    ]);
    const actions = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        container: true,
        flexDirection: {
            xs: "column",
            sm: "row"
        },
        justifyContent: "space-between",
        gap: {
            xs: 1,
            sm: 0
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                order: {
                    xs: 1,
                    sm: 0
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_Button__WEBPACK_IMPORTED_MODULE_19__/* .Button */ .z, {
                    variant: "outlined",
                    color: "secondary",
                    fullWidth: isMobile,
                    onClick: handleClearAll,
                    children: translate.root("buttons.clear_all")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                order: {
                    xs: 0,
                    sm: 1
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_Button__WEBPACK_IMPORTED_MODULE_19__/* .Button */ .z, {
                    variant: "contained",
                    fullWidth: isMobile,
                    type: "submit",
                    form: formId,
                    children: translate("actions.apply")
                })
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledFiltersModal, {
        fullScreen: isMobile,
        disablePortal: true,
        title: translate("title"),
        subtitle: translate("subtitle"),
        actions: actions,
        onClose: onClose,
        urlName: FILTERS_MODAL_NAME,
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_forms_Form__WEBPACK_IMPORTED_MODULE_5__/* .Form */ .l, {
            onSubmit: handleSubmit,
            /**
         * We need it to synchronize multiple inputs with URL even if we
         * have single value in URL
         */ defaultValues: allFilters,
            id: formId,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_AttributesTemplate__WEBPACK_IMPORTED_MODULE_6__/* .AttributesTemplate */ .A, {
                filterAttributes: filteredFilterAttributes,
                getAttributeElement: getAttributeElement,
                inlineAttributesArray: _constants__WEBPACK_IMPORTED_MODULE_17__/* .INLINE_OBJECT_CONDITIONS */ .H
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65593:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ BasePriceRangeSliderInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41430);
/* harmony import */ var hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7216);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53127);
/* harmony import */ var inputs_RangeSliderInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37711);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45641);
/* harmony import */ var _helpers_getBasePriceTotals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34411);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_2__, inputs_RangeSliderInput__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _helpers_getBasePriceTotals__WEBPACK_IMPORTED_MODULE_7__]);
([hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_2__, inputs_RangeSliderInput__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _helpers_getBasePriceTotals__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const BasePriceRangeSliderInput = (props)=>{
    const { name , min , max , currencySign , ...rest } = props;
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .q)({
        basePath: "inputs.range_slider"
    });
    const { selectedFilters  } = (0,hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_2__/* .useFilters */ .m)({
        independentFiltersSlugs: [
            application_constants__WEBPACK_IMPORTED_MODULE_1__/* .BOOKING_RANGE_SOURCE */ .rV
        ]
    });
    const selectedBasePriceRange = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useWatch)({
        name
    });
    const selectedPriceMin = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(selectedBasePriceRange, 0, min) ?? min;
    const selectedPriceMax = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(selectedBasePriceRange, 1, max) ?? max;
    const { min: basePriceMinTotal , max: basePriceMaxTotal  } = (0,_helpers_getBasePriceTotals__WEBPACK_IMPORTED_MODULE_7__/* .getBasePriceTotals */ .D)({
        filters: selectedFilters,
        min: selectedPriceMin,
        max: selectedPriceMax
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_RangeSliderInput__WEBPACK_IMPORTED_MODULE_4__/* .RangeSliderInput */ .G, {
        ...rest,
        name: name,
        min: min,
        max: max,
        overMax: true,
        startAdornment: currencySign,
        leftHelperText: translate("left_helper_text", {
            min: basePriceMinTotal
        }),
        rightHelperText: translate("right_helper_text", {
            max: typeof basePriceMaxTotal === "undefined" ? `${max}+` : basePriceMaxTotal
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46769:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getBasePriceTotals)
/* harmony export */ });
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27074);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_0__]);
_packages_helpers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getBasePriceTotals = (params)=>{
    const { filters , min , max , dateFormat ="yyyy-MM-dd"  } = params;
    const { booking_range  } = filters;
    const { checkin_at , checkout_at  } = booking_range || {};
    const checkinAtDate = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_0__/* .getParsedToDateValue */ .xI)({
        value: checkin_at,
        format: dateFormat
    });
    const checkoutAtDate = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_0__/* .getParsedToDateValue */ .xI)({
        value: checkout_at,
        format: dateFormat
    });
    if (checkinAtDate && checkoutAtDate) {
        const nightsCount = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(checkoutAtDate, checkinAtDate);
        if (nightsCount < 1) return {
            min,
            max
        };
        const resultMin = min * nightsCount;
        const resultMax = max * nightsCount;
        return {
            min: resultMin,
            max: resultMax
        };
    }
    return {
        min,
        max
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34411:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* reexport safe */ _getBasePriceTotals__WEBPACK_IMPORTED_MODULE_0__.D)
/* harmony export */ });
/* harmony import */ var _getBasePriceTotals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46769);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getBasePriceTotals__WEBPACK_IMPORTED_MODULE_0__]);
_getBasePriceTotals__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4251:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* reexport safe */ _BasePriceRangeSliderInput__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _BasePriceRangeSliderInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65593);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BasePriceRangeSliderInput__WEBPACK_IMPORTED_MODULE_0__]);
_BasePriceRangeSliderInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ INLINE_OBJECT_CONDITIONS),
/* harmony export */   "t": () => (/* binding */ cuttedAttributeSlugs)
/* harmony export */ });
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41430);

const INLINE_OBJECT_CONDITIONS = [
    {
        value_type: "price",
        is_multiple: false
    },
    {
        value_type: "label",
        is_multiple: true
    }
];
const cuttedAttributeSlugs = [
    application_constants__WEBPACK_IMPORTED_MODULE_0__/* .ACCOMMODATES_SOURCE */ .s0,
    application_constants__WEBPACK_IMPORTED_MODULE_0__/* .CITY_SOURCE */ .JJ
];


/***/ }),

/***/ 48995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* reexport safe */ _FiltersModal__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   "g": () => (/* reexport safe */ _FiltersModal__WEBPACK_IMPORTED_MODULE_0__.g)
/* harmony export */ });
/* harmony import */ var _FiltersModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FiltersModal__WEBPACK_IMPORTED_MODULE_0__]);
_FiltersModal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ GuestPopover)
/* harmony export */ });
/* unused harmony export GuestPopoverClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1580);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53127);
/* harmony import */ var views_FormView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58403);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62430);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50048);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14673);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useForm__WEBPACK_IMPORTED_MODULE_3__, views_FormView__WEBPACK_IMPORTED_MODULE_5__, _theme__WEBPACK_IMPORTED_MODULE_6__, _components__WEBPACK_IMPORTED_MODULE_7__]);
([hooks_useForm__WEBPACK_IMPORTED_MODULE_3__, views_FormView__WEBPACK_IMPORTED_MODULE_5__, _theme__WEBPACK_IMPORTED_MODULE_6__, _components__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const PREFIX = "GuestPopover";
const GuestPopoverClasses = {
    paper: `${PREFIX}-paper`
};
const StyledPopover = (0,_theme__WEBPACK_IMPORTED_MODULE_6__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    name: "GuestPopover",
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`& .${GuestPopoverClasses.paper}`]: {
            backgroundColor: theme.palette.background.default,
            border: 1,
            borderColor: theme.palette.primary.background,
            padding: theme.spacing(4, 5),
            borderRadius: 16,
            zIndex: theme.zIndex.tooltip,
            marginTop: theme.spacing(1)
        }
    };
});
function GuestPopover(props) {
    const { onWatchHandler , onClose , defaultValues , anchorEl , id , open , ...rest } = props;
    const form = (0,hooks_useForm__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .c)({
        defaultValues
    });
    const { watch  } = form;
    const watchAllValues = watch();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onWatchHandler(watchAllValues);
    }, [
        watchAllValues,
        onWatchHandler
    ]);
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .q)({
        basePath: "modals.guest"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledPopover, {
        classes: {
            paper: GuestPopoverClasses.paper
        },
        anchorEl: anchorEl,
        id: id,
        onClose: onClose,
        open: open,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        ...rest,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(views_FormView__WEBPACK_IMPORTED_MODULE_5__/* .FormView */ .m, {
            ...form,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .AccommodatesNumberInput */ .b, {
                    title: translate("adults.title"),
                    subtitle: translate("adults.subtitle"),
                    source: _constants__WEBPACK_IMPORTED_MODULE_8__/* .GUESTS_SOURCES.adults */ .A.adults,
                    spacing: 10
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .CustomDivider */ .e, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .AccommodatesNumberInput */ .b, {
                    title: translate("children.title"),
                    subtitle: translate("children.subtitle"),
                    source: _constants__WEBPACK_IMPORTED_MODULE_8__/* .GUESTS_SOURCES.children */ .A.children,
                    spacing: 10
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .CustomDivider */ .e, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_7__/* .AccommodatesNumberInput */ .b, {
                    title: translate("infants.title"),
                    subtitle: translate("infants.subtitle"),
                    source: _constants__WEBPACK_IMPORTED_MODULE_8__/* .GUESTS_SOURCES.infants */ .A.infants,
                    spacing: 10
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29833:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* reexport safe */ _GuestPopover__WEBPACK_IMPORTED_MODULE_0__.W)
/* harmony export */ });
/* harmony import */ var _GuestPopover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75990);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_GuestPopover__WEBPACK_IMPORTED_MODULE_0__]);
_GuestPopover__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31516:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ GuestsModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1580);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53127);
/* harmony import */ var views_FormView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58403);
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49230);
/* harmony import */ var _buttons_CloseButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56733);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50048);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14673);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useForm__WEBPACK_IMPORTED_MODULE_3__, views_FormView__WEBPACK_IMPORTED_MODULE_5__, _buttons_CloseButton__WEBPACK_IMPORTED_MODULE_7__, _components__WEBPACK_IMPORTED_MODULE_8__]);
([hooks_useForm__WEBPACK_IMPORTED_MODULE_3__, views_FormView__WEBPACK_IMPORTED_MODULE_5__, _buttons_CloseButton__WEBPACK_IMPORTED_MODULE_7__, _components__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function GuestsModal(props) {
    const { onSubmit , onClose , defaultValues , ...rest } = props;
    const form = (0,hooks_useForm__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .c)({
        defaultValues
    });
    const { reset  } = form;
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .q)({
        basePath: "modals.guest"
    });
    const handleCloseClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        reset();
        onClose();
    }, [
        reset,
        onClose
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_FormView__WEBPACK_IMPORTED_MODULE_5__/* .FormView */ .m, {
        ...form,
        onSubmit: onSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
            maxWidth: "xs",
            fullWidth: true,
            PaperProps: {
                sx: {
                    borderRadius: {
                        xs: 4,
                        sm: 4,
                        md: 4
                    }
                }
            },
            ...rest,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
                    sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        px: {
                            xs: 2,
                            sm: 2,
                            md: 5,
                            lg: 5
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            children: translate("guest")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_CloseButton__WEBPACK_IMPORTED_MODULE_7__/* .CloseButton */ .P, {
                            onClick: handleCloseClick
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
                    sx: {
                        px: {
                            xs: 2,
                            sm: 2,
                            md: 5,
                            lg: 5
                        },
                        m: 0
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .AccommodatesNumberInput */ .b, {
                            title: translate("adults.title"),
                            subtitle: translate("adults.subtitle"),
                            source: _constants__WEBPACK_IMPORTED_MODULE_9__/* .GUESTS_SOURCES.adults */ .A.adults
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .CustomDivider */ .e, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .AccommodatesNumberInput */ .b, {
                            title: translate("children.title"),
                            subtitle: translate("children.subtitle"),
                            source: _constants__WEBPACK_IMPORTED_MODULE_9__/* .GUESTS_SOURCES.children */ .A.children
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .CustomDivider */ .e, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_8__/* .AccommodatesNumberInput */ .b, {
                            title: translate("infants.title"),
                            subtitle: translate("infants.subtitle"),
                            source: _constants__WEBPACK_IMPORTED_MODULE_9__/* .GUESTS_SOURCES.infants */ .A.infants
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.DialogActions, {
                    sx: {
                        mx: {
                            xs: 2,
                            sm: 2,
                            md: 5,
                            lg: 5
                        },
                        my: {
                            xs: 4,
                            sm: 4,
                            md: 5,
                            lg: 5
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                            variant: "outlined",
                            onClick: handleCloseClick,
                            children: "buttons.cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                            variant: "contained",
                            type: "submit",
                            children: "buttons.apply"
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7404:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* reexport safe */ _GuestsModal__WEBPACK_IMPORTED_MODULE_0__.L)
/* harmony export */ });
/* harmony import */ var _GuestsModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31516);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_GuestsModal__WEBPACK_IMPORTED_MODULE_0__]);
_GuestsModal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90734:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ AccommodatesNumberInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19594);
/* harmony import */ var inputs_CounterInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92846);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([inputs_CounterInput__WEBPACK_IMPORTED_MODULE_3__]);
inputs_CounterInput__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const AccommodatesNumberInput = (props)=>{
    const { title , subtitle , source , spacing =0  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            display: "flex",
            justifyContent: "space-between"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    mr: spacing
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                        variant: "subtitle2",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                        variant: "body1",
                        children: subtitle
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_CounterInput__WEBPACK_IMPORTED_MODULE_3__/* .CounterInput */ .g, {
                name: source,
                min: 0
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ CustomDivider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


const CustomDivider = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
        sx: {
            mt: 2,
            mb: 2
        },
        ...props
    });
};


/***/ }),

/***/ 50048:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* reexport safe */ _AccommodatesNumberInput__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   "e": () => (/* reexport safe */ _CustomDivider__WEBPACK_IMPORTED_MODULE_1__.e)
/* harmony export */ });
/* harmony import */ var _AccommodatesNumberInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90734);
/* harmony import */ var _CustomDivider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30382);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AccommodatesNumberInput__WEBPACK_IMPORTED_MODULE_0__]);
_AccommodatesNumberInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ GUESTS_SOURCES)
/* harmony export */ });
const GUESTS_SOURCES = {
    adults: "adults",
    children: "children",
    infants: "infants"
};


/***/ }),

/***/ 30318:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LC": () => (/* reexport safe */ _GuestsModal__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   "W$": () => (/* reexport safe */ _GuestPopover__WEBPACK_IMPORTED_MODULE_0__.W)
/* harmony export */ });
/* harmony import */ var _GuestPopover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29833);
/* harmony import */ var _GuestsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7404);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50048);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14673);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_GuestPopover__WEBPACK_IMPORTED_MODULE_0__, _GuestsModal__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__]);
([_GuestPopover__WEBPACK_IMPORTED_MODULE_0__, _GuestsModal__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30593:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ InquiryFormModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var components_forms_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41096);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94605);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53127);
/* harmony import */ var inputs_AmenitiesInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81727);
/* harmony import */ var inputs_AutocompleteInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77827);
/* harmony import */ var modals_ModalBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37622);
/* harmony import */ var templates_GridItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(120);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62430);
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(49230);
/* harmony import */ var _custom_GuestSelectInput_GuestSelectInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90971);
/* harmony import */ var _inputs_RangeSliderInput_RangeSliderInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14020);
/* harmony import */ var _inputs_SelectField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53790);
/* harmony import */ var _inputs_TextInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52602);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_forms_Form__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, inputs_AmenitiesInput__WEBPACK_IMPORTED_MODULE_7__, inputs_AutocompleteInput__WEBPACK_IMPORTED_MODULE_8__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_9__, _theme__WEBPACK_IMPORTED_MODULE_11__, _custom_GuestSelectInput_GuestSelectInput__WEBPACK_IMPORTED_MODULE_13__, _inputs_RangeSliderInput_RangeSliderInput__WEBPACK_IMPORTED_MODULE_14__, _inputs_SelectField__WEBPACK_IMPORTED_MODULE_15__, _inputs_TextInput__WEBPACK_IMPORTED_MODULE_16__]);
([components_forms_Form__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, inputs_AmenitiesInput__WEBPACK_IMPORTED_MODULE_7__, inputs_AutocompleteInput__WEBPACK_IMPORTED_MODULE_8__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_9__, _theme__WEBPACK_IMPORTED_MODULE_11__, _custom_GuestSelectInput_GuestSelectInput__WEBPACK_IMPORTED_MODULE_13__, _inputs_RangeSliderInput_RangeSliderInput__WEBPACK_IMPORTED_MODULE_14__, _inputs_SelectField__WEBPACK_IMPORTED_MODULE_15__, _inputs_TextInput__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const PREFIX = "InquiryFormModal";
const StyledInquiryFormModal = (0,_theme__WEBPACK_IMPORTED_MODULE_11__/* .styled */ .zo)(modals_ModalBase__WEBPACK_IMPORTED_MODULE_9__/* .ModalBase */ .e, {
    name: `Styled--${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>{
    return {
        [`&& .${_mui_material__WEBPACK_IMPORTED_MODULE_2__.dialogClasses.paper}`]: {
            width: 598
        }
    };
});
const InquiryFormModal = (props)=>{
    const { onClose , defaultValues , ...rest } = props;
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .q)({
        basePath: "modals.inquiry_form"
    });
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(_theme__WEBPACK_IMPORTED_MODULE_11__/* .theme.breakpoints.down */ .rS.breakpoints.down("sm"));
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((values)=>{
        // TODO: add logic instead console.log
        // eslint-disable-next-line no-console
        console.log("onSubmit", values);
        onClose();
    }, [
        onClose
    ]);
    const dialogProps = {
        maxWidth: "sm",
        ...isMobile ? {
            fullScreen: true
        } : {
            fullWidth: true
        },
        disablePortal: true,
        ...rest
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_forms_Form__WEBPACK_IMPORTED_MODULE_4__/* .Form */ .l, {
        defaultValues: defaultValues,
        onSubmit: onSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledInquiryFormModal, {
            title: translate("title"),
            subtitle: translate("subtitle"),
            onClose: onClose,
            actions: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_Button__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .z, {
                        variant: "outlined",
                        onClick: onClose,
                        children: translate("actions.cancel")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_Button__WEBPACK_IMPORTED_MODULE_12__/* .Button */ .z, {
                        variant: "contained",
                        type: "submit",
                        children: translate("actions.send")
                    })
                ]
            }),
            ...dialogProps,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    container: true,
                    spacing: isMobile ? 2 : 3,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .P, {
                            sm: 12,
                            md: 6,
                            lg: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_AutocompleteInput__WEBPACK_IMPORTED_MODULE_8__/* .AutocompleteInput */ .P, {
                                name: application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ,
                                label: translate("inputs.city"),
                                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__/* .IcoMoon */ .n, {
                                    icon: "pin"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .P, {
                            sm: 12,
                            md: 6,
                            lg: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_custom_GuestSelectInput_GuestSelectInput__WEBPACK_IMPORTED_MODULE_13__/* .GuestSelectInput */ .d, {
                                name: "guests",
                                selectFieldProps: {
                                    label: translate("inputs.guests")
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .P, {
                            sm: 12,
                            md: 6,
                            lg: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_inputs_SelectField__WEBPACK_IMPORTED_MODULE_15__/* .SelectField */ .m, {
                                fullWidth: true,
                                name: "bathrooms",
                                pathname: "select",
                                label: translate("inputs.bathrooms"),
                                multiple: true
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .P, {
                            sm: 12,
                            md: 6,
                            lg: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_inputs_SelectField__WEBPACK_IMPORTED_MODULE_15__/* .SelectField */ .m, {
                                fullWidth: true,
                                name: "bedrooms",
                                pathname: "select",
                                label: translate("inputs.bedrooms"),
                                multiple: true
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_AmenitiesInput__WEBPACK_IMPORTED_MODULE_7__/* .AmenitiesInput */ .A, {
                    sx: {
                        mt: 5
                    },
                    resource: "amenities",
                    name: "amenities",
                    label: translate("amenities")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_17__/* .Typography */ .Z, {
                            variant: "body2",
                            children: translate("price_per_night")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_inputs_RangeSliderInput_RangeSliderInput__WEBPACK_IMPORTED_MODULE_14__/* .RangeSliderInput */ .G, {
                            min: 0,
                            max: 100,
                            name: "price_range",
                            rightHelperText: translate.root("inputs.range_slider.right_helper_text", {
                                max: 100
                            }),
                            leftHelperText: translate.root("inputs.range_slider.left_helper_text", {
                                min: 0
                            }),
                            fromInputProps: {},
                            toInputProps: {}
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        mt: 3
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        spacing: isMobile ? 2 : 3,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .P, {
                                sm: 12,
                                md: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_inputs_SelectField__WEBPACK_IMPORTED_MODULE_15__/* .SelectField */ .m, {
                                    fullWidth: true,
                                    name: "property_type",
                                    pathname: "property",
                                    label: translate("inputs.property_type")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .P, {
                                sm: 12,
                                md: 6,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_inputs_SelectField__WEBPACK_IMPORTED_MODULE_15__/* .SelectField */ .m, {
                                    fullWidth: true,
                                    name: "beds",
                                    pathname: "beds",
                                    label: translate("inputs.beds"),
                                    multiple: true
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_10__/* .GridItem */ .P, {
                                sm: 12,
                                md: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_inputs_TextInput__WEBPACK_IMPORTED_MODULE_16__/* .TextInput */ .o, {
                                    fullWidth: true,
                                    name: "email",
                                    type: "email",
                                    label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: [
                                            translate("inputs.email"),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
                                                title: translate("email_tooltip"),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__/* .IcoMoon */ .n, {
                                                        icon: "info",
                                                        color: _theme__WEBPACK_IMPORTED_MODULE_11__/* .theme.palette.text.disabled */ .rS.palette.text.disabled,
                                                        sx: {
                                                            ml: 1
                                                        }
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* reexport safe */ _InquiryFormModal__WEBPACK_IMPORTED_MODULE_0__.g)
/* harmony export */ });
/* harmony import */ var _InquiryFormModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30593);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_InquiryFormModal__WEBPACK_IMPORTED_MODULE_0__]);
_InquiryFormModal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ SearchMobileModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_forms_SearchFiltersForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25593);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53127);
/* harmony import */ var modals_ModalBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37622);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_forms_SearchFiltersForm__WEBPACK_IMPORTED_MODULE_1__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_3__]);
([components_forms_SearchFiltersForm__WEBPACK_IMPORTED_MODULE_1__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const SearchMobileModal = (props)=>{
    const { onClose , ...rest } = props;
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_2__/* .useTranslate */ .q)({
        basePath: "modals.search_mobile"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_ModalBase__WEBPACK_IMPORTED_MODULE_3__/* .ModalBase */ .e, {
        title: translate("title"),
        fullScreen: true,
        disablePortal: true,
        onClose: onClose,
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_forms_SearchFiltersForm__WEBPACK_IMPORTED_MODULE_1__/* .SearchFiltersForm */ .h, {
            onClose: onClose
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* reexport safe */ _SearchMobileModal__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _SearchMobileModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38854);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchMobileModal__WEBPACK_IMPORTED_MODULE_0__]);
_SearchMobileModal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27074);
/* harmony import */ var buttons_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49230);
/* harmony import */ var buttons_CTAButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83273);
/* harmony import */ var contexts_ListContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56388);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94605);
/* harmony import */ var custom_SearchFiltersSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25699);
/* harmony import */ var custom_SearchResultsLayout_SearchResultsLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68338);
/* harmony import */ var hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7216);
/* harmony import */ var modals_FiltersModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48995);
/* harmony import */ var modals_FiltersModal_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93131);
/* harmony import */ var modals_InquiryFormModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85139);
/* harmony import */ var modals_SearchMobileModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86881);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, buttons_CTAButton__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__, custom_SearchFiltersSection__WEBPACK_IMPORTED_MODULE_7__, custom_SearchResultsLayout_SearchResultsLayout__WEBPACK_IMPORTED_MODULE_8__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_9__, modals_FiltersModal__WEBPACK_IMPORTED_MODULE_10__, modals_InquiryFormModal__WEBPACK_IMPORTED_MODULE_12__, modals_SearchMobileModal__WEBPACK_IMPORTED_MODULE_13__, theme_index__WEBPACK_IMPORTED_MODULE_14__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, buttons_CTAButton__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__, custom_SearchFiltersSection__WEBPACK_IMPORTED_MODULE_7__, custom_SearchResultsLayout_SearchResultsLayout__WEBPACK_IMPORTED_MODULE_8__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_9__, modals_FiltersModal__WEBPACK_IMPORTED_MODULE_10__, modals_InquiryFormModal__WEBPACK_IMPORTED_MODULE_12__, modals_SearchMobileModal__WEBPACK_IMPORTED_MODULE_13__, theme_index__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const SearchPageContent = ()=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const { value: isFiltersModalOpen , setTrue: handleOpenFilters , setFalse: handleCloseFilters  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .useBoolean */ .kt)(false);
    const { value: isInquiryFormModalOpen , setTrue: handleOpenInquiryModal , setFalse: handleCloseInquiryModal  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .useBoolean */ .kt)(false);
    const { value: isSearchMobileModalOpen , setTrue: handleOpenSearchMobile , setFalse: handleCloseSearchMobile  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .useBoolean */ .kt)(false);
    const { selectedFilters  } = (0,hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_9__/* .useFilters */ .m)({
        independentFiltersSlugs: [],
        includeFilterAttribute: (slug)=>!modals_FiltersModal_constants__WEBPACK_IMPORTED_MODULE_11__/* .cuttedAttributeSlugs.includes */ .t.includes(slug)
    });
    const selectedFiltersCount = Object.keys(selectedFilters).length;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_FiltersModal__WEBPACK_IMPORTED_MODULE_10__/* .FiltersModal */ .F, {
                open: isFiltersModalOpen,
                onOpen: handleOpenFilters,
                onClose: handleCloseFilters
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_InquiryFormModal__WEBPACK_IMPORTED_MODULE_12__/* .InquiryFormModal */ .g, {
                open: isInquiryFormModalOpen,
                onClose: handleCloseInquiryModal
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_SearchMobileModal__WEBPACK_IMPORTED_MODULE_13__/* .SearchMobileModal */ .N, {
                open: isSearchMobileModalOpen,
                onClose: handleCloseSearchMobile
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.GlobalStyles, {
                styles: {
                    body: {
                        overflow: "visible"
                    }
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: theme_index__WEBPACK_IMPORTED_MODULE_14__/* .LAYOUT_SHIFT_COMPENSATION_CLASS */ .ZM,
                width: "100%",
                position: "fixed",
                bgcolor: "background.default",
                zIndex: ()=>theme.zIndex.appBar,
                top: {
                    xs: theme_index__WEBPACK_IMPORTED_MODULE_14__/* .MOBILE_HEADER_HEIGHT */ .ZQ,
                    md: theme_index__WEBPACK_IMPORTED_MODULE_14__/* .HEADER_HEIGHT */ .Mz
                },
                height: theme_index__WEBPACK_IMPORTED_MODULE_14__/* .SEARCH_FILTERS_HEIGHT */ .gm,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
                        maxWidth: "xl",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    display: {
                                        xs: "none",
                                        md: "block"
                                    }
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    container: true,
                                    py: 2,
                                    spacing: 1,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                            item: true,
                                            display: {
                                                xs: "none",
                                                lg: "block"
                                            },
                                            lg: 3
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                            item: true,
                                            md: 9,
                                            lg: 6,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_SearchFiltersSection__WEBPACK_IMPORTED_MODULE_7__/* .SearchFiltersSection */ .f, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                            item: true,
                                            container: true,
                                            md: 3,
                                            justifyContent: "flex-end",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                                color: "secondary",
                                                badgeContent: selectedFiltersCount || null,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    variant: "outlined",
                                                    color: "secondary",
                                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__/* .IcoMoon */ .n, {
                                                        icon: "filter",
                                                        color: "inherit"
                                                    }),
                                                    onClick: handleOpenFilters,
                                                    children: "custom.filters"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    display: {
                                        xs: "block",
                                        md: "none"
                                    }
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_SearchFiltersSection__WEBPACK_IMPORTED_MODULE_7__/* .SearchFiltersSection */ .f, {
                                            handleOpenFilters: handleOpenFilters,
                                            handleOpenSearchMobile: handleOpenSearchMobile
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_CTAButton__WEBPACK_IMPORTED_MODULE_4__/* .CTAButton */ .m, {
                                            className: theme_index__WEBPACK_IMPORTED_MODULE_14__/* .LAYOUT_SHIFT_COMPENSATION_CLASS */ .ZM,
                                            sx: {
                                                position: "fixed",
                                                bottom: 16,
                                                zIndex: (theme)=>theme.zIndex.fab,
                                                left: "50%",
                                                transform: "translate(-50%, 0)",
                                                width: 210,
                                                //  Hide for now but we need this for justify-content (sx will be passed to button but not to the wrapper)
                                                display: "none"
                                            },
                                            onClick: handleOpenInquiryModal
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_SearchResultsLayout_SearchResultsLayout__WEBPACK_IMPORTED_MODULE_8__/* .SearchResultsLayout */ .T, {})
        ]
    });
};
const SearchPage = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_ListContext__WEBPACK_IMPORTED_MODULE_5__/* .ListContextProvider */ .Di, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchPageContent, {})
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ MAP_AREA_ID)
/* harmony export */ });
const MAP_AREA_ID = "map_area_id";


/***/ }),

/***/ 23101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _SearchPage__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "l": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.l)
/* harmony export */ });
/* harmony import */ var _SearchPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(980);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85383);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchPage__WEBPACK_IMPORTED_MODULE_0__]);
_SearchPage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ CheckboxAttribute)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62430);
/* harmony import */ var views_LabeledIconView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63243);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_2__, views_LabeledIconView__WEBPACK_IMPORTED_MODULE_3__]);
([theme_index__WEBPACK_IMPORTED_MODULE_2__, views_LabeledIconView__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const PREFIX = "CheckboxAttribute";
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>{
    return {
        [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_1__.formControlLabelClasses.root}`]: {
            height: "auto",
            minHeight: 40
        }
    };
});
const CheckboxAttribute = (props)=>{
    const { checkboxProps , sx , className , ...labelProps } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledRoot, {
        sx: sx,
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.FormControlLabel, {
            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
                ...checkboxProps
            }),
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_LabeledIconView__WEBPACK_IMPORTED_MODULE_3__/* .IconWithTitleView */ .t, {
                ...labelProps
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92133:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* reexport safe */ _CheckboxAttribute__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _CheckboxAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58699);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CheckboxAttribute__WEBPACK_IMPORTED_MODULE_0__]);
_CheckboxAttribute__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ CheckboxesInputView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_slots__WEBPACK_IMPORTED_MODULE_2__]);
_slots__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CheckboxesInputView = (props)=>{
    const { items , maxItems , value , onChange , label , error , helperText , withoutHelperTextSpace , required , loading , optionIcon , optionText , optionValue , slots , slotProps , className , sx  } = props;
    const { header: HeaderSlot = _slots__WEBPACK_IMPORTED_MODULE_2__/* .CheckboxesInputHeaderView */ .Tk , list: ListSlot = _slots__WEBPACK_IMPORTED_MODULE_2__/* .CheckboxesInputListView */ .OG , footer: FooterSlot = _slots__WEBPACK_IMPORTED_MODULE_2__/* .CheckboxesInputFooterView */ .h  } = slots || {};
    const { header: headerSlotProps , list: listSlotProps , footer: footerSlotProps  } = slotProps || {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        className: className,
        sx: sx,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderSlot, {
                sx: {
                    mb: 1
                },
                value: value,
                onChange: onChange,
                label: label,
                error: error,
                required: required,
                loading: loading,
                ...headerSlotProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListSlot, {
                items: items,
                value: value,
                onChange: onChange,
                maxItems: maxItems,
                loading: loading,
                optionIcon: optionIcon,
                optionText: optionText,
                optionValue: optionValue,
                ...listSlotProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterSlot, {
                error: error,
                helperText: helperText,
                withoutHelperTextSpace: withoutHelperTextSpace,
                ...footerSlotProps
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OG": () => (/* reexport safe */ _slots__WEBPACK_IMPORTED_MODULE_1__.OG),
/* harmony export */   "lX": () => (/* reexport safe */ _CheckboxesInputView__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _CheckboxesInputView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85466);
/* harmony import */ var _slots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CheckboxesInputView__WEBPACK_IMPORTED_MODULE_0__, _slots__WEBPACK_IMPORTED_MODULE_1__]);
([_CheckboxesInputView__WEBPACK_IMPORTED_MODULE_0__, _slots__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* reexport */ CheckboxesInputFooterView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
;// CONCATENATED MODULE: ./src/components/views/CheckboxesInputView/slots/CheckboxesInputFooterView/CheckboxesInputFooterView.tsx


const CheckboxesInputFooterView = (props)=>{
    const { error , helperText , withoutHelperTextSpace  } = props;
    return !withoutHelperTextSpace ? /*#__PURE__*/ jsx_runtime_.jsx(material_.FormHelperText, {
        error: error,
        children: helperText || " " /* Empty space to keep space */ 
    }) : null;
};

;// CONCATENATED MODULE: ./src/components/views/CheckboxesInputView/slots/CheckboxesInputFooterView/index.ts



/***/ }),

/***/ 11147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CheckboxesInputHeaderView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16593);
/* harmony import */ var components_Labeled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13187);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92552);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_3__, components_Labeled__WEBPACK_IMPORTED_MODULE_4__, hooks_index__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_6__]);
([clsx__WEBPACK_IMPORTED_MODULE_3__, components_Labeled__WEBPACK_IMPORTED_MODULE_4__, hooks_index__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const PREFIX = "CheckboxesInputHeader";
const CheckboxesInputHeaderClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.generateUtilityClasses)(PREFIX, [
    "root"
]);
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_6__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>{
    return {
        [`&.${CheckboxesInputHeaderClasses.root}`]: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        [`& .${components_Labeled__WEBPACK_IMPORTED_MODULE_4__/* .LabeledClasses.label */ .M.label}`]: {
            marginBottom: 0
        }
    };
});
const CheckboxesInputHeaderView = (props)=>{
    const { value , label , error , required , loading , sx , className , onChange  } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_5__/* .useTranslate */ .qM)();
    const handleClearAll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        onChange([]);
    }, [
        onChange
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledRoot, {
        sx: sx,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.clsx)(CheckboxesInputHeaderClasses.root, className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Labeled__WEBPACK_IMPORTED_MODULE_4__/* .Labeled */ .P, {
                label: label,
                error: error,
                required: required,
                children: null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "text",
                size: "small",
                color: "secondary",
                disabled: loading,
                onClick: handleClearAll,
                children: translate.root("buttons.clear_all_count", {
                    count: value.length
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 737:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* reexport safe */ _CheckboxesInputHeaderView__WEBPACK_IMPORTED_MODULE_0__.T)
/* harmony export */ });
/* harmony import */ var _CheckboxesInputHeaderView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11147);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CheckboxesInputHeaderView__WEBPACK_IMPORTED_MODULE_0__]);
_CheckboxesInputHeaderView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ CheckboxesInputListView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layouts_ShowMoreWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33022);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19594);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62430);
/* harmony import */ var views_CheckboxAttribute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92133);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_ShowMoreWrapper__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_6__, views_CheckboxAttribute__WEBPACK_IMPORTED_MODULE_7__]);
([components_layouts_ShowMoreWrapper__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_6__, views_CheckboxAttribute__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PREFIX = "CheckboxesInputList";
const CheckboxesInputListClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.generateUtilityClasses)(PREFIX, [
    "itemTitle",
    "toggleButton"
]);
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_6__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`& .${CheckboxesInputListClasses.itemTitle}`]: {
            ...theme.typography.body1,
            color: theme.palette.text.primary,
            textTransform: "capitalize"
        },
        [`& .${CheckboxesInputListClasses.toggleButton}`]: {
            marginTop: theme.spacing(1),
            textDecoration: "underline",
            "&:hover": {
                background: "transparent",
                textDecoration: "underline"
            }
        }
    };
});
const CheckboxesInputListView = (props)=>{
    const { items , value , onChange , maxItems =Infinity , optionValue ="id" , optionText ="title" , optionIcon ="icon" , loading , slots , slotProps , sx , className  } = props;
    const { toggleButton: toggleButtonSlotProps  } = slotProps || {};
    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>value.some((id)=>{
            const checkedItemIndex = items.findIndex((item)=>lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(item, optionValue) === id);
            return checkedItemIndex > maxItems - 1;
        }));
    const getOnChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>(event)=>{
            if (event.target.checked) {
                onChange([
                    ...value,
                    id
                ]);
                return;
            }
            onChange(value.filter((itemId)=>itemId !== id));
        }, [
        onChange,
        value
    ]);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledRoot, {
            sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ...sx
            },
            className: className,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {})
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledRoot, {
        sx: sx,
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layouts_ShowMoreWrapper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            expanded: isExpanded,
            items: items,
            maxItems: maxItems,
            onChange: setIsExpanded,
            slots: slots,
            slotProps: {
                ...slotProps,
                toggleButton: {
                    size: "small",
                    disableRipple: true,
                    className: CheckboxesInputListClasses.toggleButton,
                    ...toggleButtonSlotProps
                }
            },
            children: ({ items  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    container: true,
                    columnSpacing: 2,
                    children: items.map((item)=>{
                        const id = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(item, optionValue);
                        const title = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(item, optionText, "");
                        const icon = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(item, optionIcon, "");
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            md: 6,
                            xs: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_CheckboxAttribute__WEBPACK_IMPORTED_MODULE_7__/* .CheckboxAttribute */ .l, {
                                checkboxProps: {
                                    checked: value.includes(id),
                                    onChange: getOnChange(id)
                                },
                                icon: icon,
                                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
                                    className: CheckboxesInputListClasses.itemTitle,
                                    children: title
                                })
                            })
                        }, id);
                    })
                })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* reexport safe */ _CheckboxesInputListView__WEBPACK_IMPORTED_MODULE_0__.O)
/* harmony export */ });
/* harmony import */ var _CheckboxesInputListView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61307);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CheckboxesInputListView__WEBPACK_IMPORTED_MODULE_0__]);
_CheckboxesInputListView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28428:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OG": () => (/* reexport safe */ _CheckboxesInputListView__WEBPACK_IMPORTED_MODULE_2__.O),
/* harmony export */   "Tk": () => (/* reexport safe */ _CheckboxesInputHeaderView__WEBPACK_IMPORTED_MODULE_1__.T),
/* harmony export */   "h": () => (/* reexport safe */ _CheckboxesInputFooterView__WEBPACK_IMPORTED_MODULE_0__.h)
/* harmony export */ });
/* harmony import */ var _CheckboxesInputFooterView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96039);
/* harmony import */ var _CheckboxesInputHeaderView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(737);
/* harmony import */ var _CheckboxesInputListView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CheckboxesInputHeaderView__WEBPACK_IMPORTED_MODULE_1__, _CheckboxesInputListView__WEBPACK_IMPORTED_MODULE_2__]);
([_CheckboxesInputHeaderView__WEBPACK_IMPORTED_MODULE_1__, _CheckboxesInputListView__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4195:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ CounterInputView)
/* harmony export */ });
/* unused harmony export CounterInputViewClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var buttons_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15693);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94605);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([buttons_IconButton__WEBPACK_IMPORTED_MODULE_2__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, theme__WEBPACK_IMPORTED_MODULE_4__]);
([buttons_IconButton__WEBPACK_IMPORTED_MODULE_2__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, theme__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const PREFIX = "CounterInputView";
const CounterInputViewClasses = {
    value: `${PREFIX}-value`
};
const StyledRoot = (0,theme__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: "CounterInputView",
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        display: "flex",
        alignItems: "center",
        [`& .${CounterInputViewClasses.value}`]: {
            ...theme.typography.body2,
            color: theme.palette.text.primary,
            margin: theme.spacing(0, 3)
        }
    };
});
const CounterInputView = (props)=>{
    const { onDecrease , onIncrease , value , className , sx  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledRoot, {
        className: className,
        sx: sx,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_IconButton__WEBPACK_IMPORTED_MODULE_2__/* .IconButton */ .hU, {
                size: "small",
                variant: "outlined",
                onClick: onDecrease,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                    icon: "remove",
                    size: "small"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                className: CounterInputViewClasses.value,
                children: value
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_IconButton__WEBPACK_IMPORTED_MODULE_2__/* .IconButton */ .hU, {
                size: "small",
                variant: "outlined",
                onClick: onIncrease,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                    icon: "add",
                    size: "small"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ InfiniteListingsRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var custom_SearchResultsLayout_components_BlurNoResultsView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56281);
/* harmony import */ var custom_SearchResultsLayout_components_ListingsSectionHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25779);
/* harmony import */ var custom_SearchResultsLayout_components_PartialMatchSectionHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91303);
/* harmony import */ var helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12764);
/* harmony import */ var helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23517);
/* harmony import */ var hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7216);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92552);
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90221);
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var views_ListingItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56200);
/* harmony import */ var _components_BlurActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82002);
/* harmony import */ var _components_BlurListingsContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2510);
/* harmony import */ var _components_BlurTextContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(49413);
/* harmony import */ var _helpers_getMissingAmenities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(29470);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_SearchResultsLayout_components_ListingsSectionHeader__WEBPACK_IMPORTED_MODULE_5__, custom_SearchResultsLayout_components_PartialMatchSectionHeader__WEBPACK_IMPORTED_MODULE_6__, helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_8__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_9__, hooks_index__WEBPACK_IMPORTED_MODULE_10__, views_ListingItem__WEBPACK_IMPORTED_MODULE_13__, _components_BlurActions__WEBPACK_IMPORTED_MODULE_14__, _components_BlurListingsContent__WEBPACK_IMPORTED_MODULE_15__]);
([custom_SearchResultsLayout_components_ListingsSectionHeader__WEBPACK_IMPORTED_MODULE_5__, custom_SearchResultsLayout_components_PartialMatchSectionHeader__WEBPACK_IMPORTED_MODULE_6__, helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_8__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_9__, hooks_index__WEBPACK_IMPORTED_MODULE_10__, views_ListingItem__WEBPACK_IMPORTED_MODULE_13__, _components_BlurActions__WEBPACK_IMPORTED_MODULE_14__, _components_BlurListingsContent__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const InfiniteListingsRowBase = (props)=>{
    const { data , index , columnsCount , onListingMouseEnter , onListingMouseLeave , setRowHeight , isPartialSectionOpen , onOpenPartialSection , partialListings , totalListingsCount =0  } = props;
    const { data: amenities  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_10__/* .useGetAmenities */ .A1)();
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_10__/* .useTranslate */ .qM)();
    const rowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const { selectedFilters  } = (0,hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_9__/* .useFilters */ .m)({
        independentFiltersSlugs: [
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOOKING_RANGE_SOURCE */ .rV
        ]
    });
    const isDatesSelected = !!selectedFilters[application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOOKING_RANGE_SOURCE */ .rV];
    const getPrice = (0,helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const getOnListingMouseEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>()=>{
            onListingMouseEnter?.(id);
        }, [
        onListingMouseEnter
    ]);
    const getOnListingMouseLeave = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>()=>{
            onListingMouseLeave?.(id);
        }, [
        onListingMouseLeave
    ]);
    const rows = lodash_chunk__WEBPACK_IMPORTED_MODULE_11___default()(data, columnsCount);
    const currentRow = rows[index] || [];
    const fullMatchListings = data?.filter(({ match_score  })=>match_score === application_constants__WEBPACK_IMPORTED_MODULE_3__/* .FULL_MATCH_SCORE */ .TF);
    const totalFetchedListingsCount = data?.length || 0;
    const fullMatchListingsCount = fullMatchListings?.length || 0;
    const isFullMatchMoreThanFetched = fullMatchListingsCount === totalFetchedListingsCount && totalListingsCount > totalFetchedListingsCount;
    const partialListingsCount = totalListingsCount - fullMatchListingsCount;
    const getListingItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((listing)=>{
        const { formatted_filters , id , slug , gallery , title , currency , average_price , address , isEmpty , match_score , missing_amenities  } = listing;
        if (isEmpty) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {});
        }
        const missingAmenities = (0,_helpers_getMissingAmenities__WEBPACK_IMPORTED_MODULE_17__/* .getMissingAmenities */ .Z)({
            allAmenities: amenities,
            missingAmenities: missing_amenities
        });
        const [accommodates, bedrooms, bathrooms, basePrice, rating, ratingCount] = (0,helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
            formattedFilters: formatted_filters,
            slugs: [
                application_constants__WEBPACK_IMPORTED_MODULE_3__/* .ACCOMMODATES_SOURCE */ .s0,
                application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BEDROOMS_SOURCE */ .Bt,
                application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BATHROOMS_SOURCE */ .qA,
                application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_PRICE_SLUG */ .LI,
                application_constants__WEBPACK_IMPORTED_MODULE_3__/* .RATING_SLUG */ .gd,
                application_constants__WEBPACK_IMPORTED_MODULE_3__/* .RATING_COUNT_SLUG */ .BN
            ]
        });
        const parsedBasePrice = basePrice?.value ? Number(basePrice?.value) : 0;
        const parsedAveragePrice = average_price ? Number(average_price) : 0;
        /**
       * We show 'average_price' when dates are selected or 'base-price' when not
       */ const priceValue = getPrice({
            initialCurrencyCode: currency.code,
            amount: isDatesSelected ? parsedAveragePrice : parsedBasePrice
        });
        const zip = undefined; // no BE data
        const isPartial = match_score < application_constants__WEBPACK_IMPORTED_MODULE_3__/* .FULL_MATCH_SCORE */ .TF;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            onMouseEnter: getOnListingMouseEnter(id),
            onMouseLeave: getOnListingMouseLeave(id),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ListingItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
                withTooltip: true,
                address: address,
                zip: zip,
                name: title,
                href: {
                    pathname: application_constants__WEBPACK_IMPORTED_MODULE_3__/* .listingRoute.getPathname */ .oo.getPathname(slug),
                    query
                },
                price: priceValue,
                pricePrefix: "from",
                rating: rating?.value,
                reviewsCount: ratingCount?.value,
                amenitiesItems: [
                    {
                        id: "1",
                        label: translate.root("custom.guest"),
                        value: accommodates?.value
                    },
                    {
                        id: "2",
                        label: bedrooms?.filterAttribute?.title,
                        value: bedrooms?.value
                    },
                    {
                        id: "3",
                        label: bathrooms?.filterAttribute?.title,
                        value: bathrooms?.value
                    }
                ],
                missingAmenities: missingAmenities,
                isPartial: isPartial,
                items: gallery.map((galleryItem)=>{
                    const { id , src , title  } = galleryItem;
                    return {
                        id,
                        url: src,
                        title
                    };
                })
            })
        }, id);
    }, [
        amenities,
        getOnListingMouseEnter,
        getOnListingMouseLeave,
        getPrice,
        isDatesSelected,
        query,
        translate
    ]);
    const renderItems = ()=>{
        const isBluredListings = currentRow.some((item)=>item.isBlur);
        if (isBluredListings) {
            const fullMatchListings = currentRow.filter(({ match_score  })=>match_score === application_constants__WEBPACK_IMPORTED_MODULE_3__/* .FULL_MATCH_SCORE */ .TF);
            const fullMatchListingsCount = fullMatchListings.length;
            const bluredListingsCount = columnsCount - fullMatchListingsCount;
            const bluredListings = partialListings.slice(0, bluredListingsCount);
            const isFullWidth = bluredListingsCount === 1;
            const isPartialMatches = partialListingsCount > 0;
            const blurActionsProps = {
                isFullWidth,
                isPartialMatches,
                onOpenPartialSection
            };
            const blurTextContentProps = {
                isPartialMatches,
                partialListingsCount: partialListingsCount
            };
            const blurListingsContentProps = {
                bluredListings,
                bluredListingsCount
            };
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    fullMatchListings.map((listing)=>getListingItem(listing)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_SearchResultsLayout_components_BlurNoResultsView__WEBPACK_IMPORTED_MODULE_4__/* .BlurNoResultsView */ .Z, {
                        sx: {
                            gridColumn: `span ${bluredListingsCount}`
                        },
                        slots: {
                            blurActions: _components_BlurActions__WEBPACK_IMPORTED_MODULE_14__/* .BlurActions */ .n,
                            blurTextContent: _components_BlurTextContent__WEBPACK_IMPORTED_MODULE_16__/* .BlurTextContent */ .$,
                            blurListingsContent: _components_BlurListingsContent__WEBPACK_IMPORTED_MODULE_15__/* .BlurListingsContent */ .a
                        },
                        slotProps: {
                            blurActions: blurActionsProps,
                            blurTextContent: blurTextContentProps,
                            blurListingsContent: blurListingsContentProps
                        }
                    })
                ]
            });
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: currentRow.map((listing)=>getListingItem(listing))
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (rowRef?.current) {
            setRowHeight(index, rowRef.current.clientHeight);
        }
    }, [
        index,
        setRowHeight
    ]);
    const firstPartialListingIndex = data?.findIndex((item)=>item.match_score < application_constants__WEBPACK_IMPORTED_MODULE_3__/* .FULL_MATCH_SCORE */ .TF);
    const isPartialListings = firstPartialListingIndex !== -1;
    const firstPartialRowIndex = Math.ceil(firstPartialListingIndex / columnsCount);
    const withPartialHeader = isPartialSectionOpen && isPartialListings && index === firstPartialRowIndex;
    const withListingsHeader = !!fullMatchListingsCount && index === 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        ref: rowRef,
        pb: 3,
        children: [
            withPartialHeader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_SearchResultsLayout_components_PartialMatchSectionHeader__WEBPACK_IMPORTED_MODULE_6__/* .PartialMatchSectionHeader */ .Q, {
                sx: {
                    mb: 2
                },
                count: partialListingsCount,
                isOnlyPartial: !fullMatchListingsCount
            }),
            withListingsHeader && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_SearchResultsLayout_components_ListingsSectionHeader__WEBPACK_IMPORTED_MODULE_5__/* .ListingsSectionHeader */ .H, {
                sx: {
                    mb: 2
                },
                count: fullMatchListingsCount,
                isFullMatchMoreThanFetched: isFullMatchMoreThanFetched
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    display: "grid",
                    gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))`,
                    columnGap: 3
                },
                children: renderItems()
            })
        ]
    });
};
const InfiniteListingsRow = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(InfiniteListingsRowBase);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74747:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ InfiniteListingsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48719);
/* harmony import */ var contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9242);
/* harmony import */ var custom_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76238);
/* harmony import */ var helpers_getDirectionFromLocale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70225);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32027);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_partition__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80551);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_window__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30353);
/* harmony import */ var react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var theme_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19018);
/* harmony import */ var _helpers_combineListRefs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29563);
/* harmony import */ var _InfiniteListingsRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_5__, _InfiniteListingsRow__WEBPACK_IMPORTED_MODULE_11__]);
([contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_5__, _InfiniteListingsRow__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const InfiniteListingsViewBase = (props)=>{
    const { data , hasMore , onLoadMore , isFetchingNextPage , onListingMouseEnter , onListingMouseLeave , columnsCount , listRef , scrollOffset =0 , totalListingsCount , ...rest } = props;
    const { isPartialSectionOpen , openPartialSection  } = (0,contexts_SearchResultsContext__WEBPACK_IMPORTED_MODULE_5__/* .useSearchResultsContext */ .tw)();
    // refs for dynamic row heights
    const listRefForHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const rowHeights = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
    const getRowHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((index)=>{
        const height = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(rowHeights, `current.${index}`, theme_constants__WEBPACK_IMPORTED_MODULE_12__/* .SEARCH_LISTING_ITEM_HEIGHT */ .Y2);
        return height;
    }, []);
    const setRowHeight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((index, size)=>{
        listRefForHeight?.current?.resetAfterIndex(0);
        rowHeights.current = {
            ...rowHeights.current,
            [index]: size
        };
    }, []);
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__/* .useLocaleContext */ .PE)();
    const direction = (0,helpers_getDirectionFromLocale__WEBPACK_IMPORTED_MODULE_13__/* .getDirectionFromLocale */ .V)(locale);
    const listings = (data?.pages || []).reduce((acc, page)=>{
        page.data.forEach((listing)=>acc.push(listing));
        return acc;
    }, []);
    const isEmptyListings = !listings?.length;
    const [fullMatchListings, partialListings] = lodash_partition__WEBPACK_IMPORTED_MODULE_8___default()(listings, ({ match_score  })=>match_score === application_constants__WEBPACK_IMPORTED_MODULE_3__/* .FULL_MATCH_SCORE */ .TF);
    const getFinalListings = ()=>{
        const listings = [
            ...fullMatchListings
        ];
        if (isPartialSectionOpen && !isEmptyListings) {
            // add empty listings to fill all row, if we have not enough full match items
            const listingsInLastRowCount = fullMatchListings.length % columnsCount;
            const missingRowListingsCount = listingsInLastRowCount ? columnsCount - listingsInLastRowCount : 0;
            const fakeEmptyItems = Array(missingRowListingsCount).fill({
                isEmpty: true
            });
            listings.push(...fakeEmptyItems);
            listings.push(...partialListings);
        } else {
            // add blured listing to show blured section
            if (!!partialListings?.length || !listings?.length) {
                const fakeBlurItems = Array(1).fill({
                    isBlur: true
                });
                listings.push(...fakeBlurItems);
            }
        }
        return listings;
    };
    const finalListings = getFinalListings();
    const isBluredListing = finalListings.some((listing)=>listing.isBlur);
    const listingsCount = finalListings.length;
    const rowsCount = Math.ceil(listingsCount / columnsCount);
    //We add extra item for loader as react-window-infinite-loader recommends
    const itemCount = hasMore ? rowsCount + 1 : rowsCount;
    const isItemLoaded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((index)=>isBluredListing || !hasMore || index < rowsCount, [
        hasMore,
        isBluredListing,
        rowsCount
    ]);
    const loadMoreItems = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (isFetchingNextPage) return;
        await onLoadMore?.();
    }, [
        isFetchingNextPage,
        onLoadMore
    ]);
    const firstPartialListingIndex = listings?.findIndex((item)=>item.match_score < application_constants__WEBPACK_IMPORTED_MODULE_3__/* .FULL_MATCH_SCORE */ .TF);
    const firstPartialRowIndex = Math.ceil(firstPartialListingIndex / columnsCount);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isPartialSectionOpen) {
            listRef?.current?.scrollToItem(firstPartialRowIndex);
        }
    }, [
        firstPartialRowIndex,
        isPartialSectionOpen,
        listRef
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_10___default()), {
        itemCount: itemCount,
        isItemLoaded: isItemLoaded,
        loadMoreItems: loadMoreItems,
        threshold: 1,
        children: ({ ref , onItemsRendered  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_window__WEBPACK_IMPORTED_MODULE_9__.VariableSizeList, {
                ...rest,
                ref: (0,_helpers_combineListRefs__WEBPACK_IMPORTED_MODULE_14__/* .combineListRefs */ .O)(ref, listRef, listRefForHeight),
                itemSize: getRowHeight,
                itemCount: itemCount,
                itemData: finalListings,
                direction: direction,
                onItemsRendered: onItemsRendered,
                overscanCount: 4,
                children: ({ style , index , ...restListProps })=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        style: {
                            ...style,
                            width: `calc(100% - ${scrollOffset}px)`
                        },
                        children: isItemLoaded(index) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InfiniteListingsRow__WEBPACK_IMPORTED_MODULE_11__/* .InfiniteListingsRow */ .m, {
                            ...restListProps,
                            index: index,
                            setRowHeight: setRowHeight,
                            columnsCount: columnsCount,
                            onListingMouseEnter: onListingMouseEnter,
                            onListingMouseLeave: onListingMouseLeave,
                            isPartialSectionOpen: isPartialSectionOpen,
                            onOpenPartialSection: openPartialSection,
                            partialListings: partialListings,
                            totalListingsCount: totalListingsCount
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_Loader__WEBPACK_IMPORTED_MODULE_6__/* .Loader */ .a, {
                            sx: {
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            }
                        })
                    });
                }
            })
    });
};
/**
 * `areEqual` from react-window is intended to be used for list item,
 * but we can use it for the whole list component also because all it does
 * is a shallow comparison between `style` property, and the rest properties
 * separately. The InfiniteListingsViewBase component accepts `style` property,
 * and passes it to the List.
 */ const InfiniteListingsView = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(InfiniteListingsViewBase, react_window__WEBPACK_IMPORTED_MODULE_9__.areEqual);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ BlurActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var buttons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49230);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
/* harmony import */ var modals_FiltersModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48995);
/* harmony import */ var modals_ModalBase_hooks_useSyncModalWithURL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85192);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks__WEBPACK_IMPORTED_MODULE_3__, modals_FiltersModal__WEBPACK_IMPORTED_MODULE_4__]);
([hooks__WEBPACK_IMPORTED_MODULE_3__, modals_FiltersModal__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const BlurActions = (props)=>{
    const { isFullWidth , isPartialMatches , onOpenPartialSection  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const translate = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "pages.search.partial_match"
    });
    const handleOpenFiltersModal = ()=>{
        const query = {
            ...router.query,
            [modals_ModalBase_hooks_useSyncModalWithURL__WEBPACK_IMPORTED_MODULE_5__/* .QUERY_PARAM */ .g]: modals_FiltersModal__WEBPACK_IMPORTED_MODULE_4__/* .FILTERS_MODAL_NAME */ .g
        };
        router.push({
            pathname: router.pathname,
            query
        }, undefined, {
            shallow: true
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        display: "flex",
        flexDirection: isFullWidth ? "column" : "row",
        mt: 4,
        gap: {
            xs: 1,
            sm: 2
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                onClick: handleOpenFiltersModal,
                variant: "contained",
                fullWidth: true,
                sx: {
                    ...isPartialMatches ? {
                        color: "primary.main",
                        backgroundColor: "primary.contrastText",
                        ":hover": {
                            color: "primary.contrastText"
                        }
                    } : {}
                },
                children: "pages.search.no_results.change_filters"
            }),
            isPartialMatches && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_Button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                onClick: onOpenPartialSection,
                variant: "contained",
                fullWidth: true,
                children: translate("show_partial_matches")
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* reexport safe */ _BlurActions__WEBPACK_IMPORTED_MODULE_0__.n)
/* harmony export */ });
/* harmony import */ var _BlurActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39694);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BlurActions__WEBPACK_IMPORTED_MODULE_0__]);
_BlurActions__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12280:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ BlurListingsContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41430);
/* harmony import */ var helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12764);
/* harmony import */ var helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23517);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92552);
/* harmony import */ var hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7216);
/* harmony import */ var views_InfiniteListingsView_helpers_getMissingAmenities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29470);
/* harmony import */ var views_ListingItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56200);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__, hooks__WEBPACK_IMPORTED_MODULE_5__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_6__, views_ListingItem__WEBPACK_IMPORTED_MODULE_7__]);
([helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__, hooks__WEBPACK_IMPORTED_MODULE_5__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_6__, views_ListingItem__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const BlurListingsContent = (props)=>{
    const { bluredListings =[] , bluredListingsCount  } = props;
    const translate = (0,hooks__WEBPACK_IMPORTED_MODULE_5__/* .useTranslate */ .qM)({
        basePath: "pages.search.partial_match"
    });
    const { data: amenities  } = (0,hooks__WEBPACK_IMPORTED_MODULE_5__/* .useGetAmenities */ .A1)();
    const { selectedFilters  } = (0,hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_6__/* .useFilters */ .m)({
        independentFiltersSlugs: [
            application_constants__WEBPACK_IMPORTED_MODULE_2__/* .BOOKING_RANGE_SOURCE */ .rV
        ]
    });
    const getPrice = (0,helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const isDatesSelected = !!selectedFilters[application_constants__WEBPACK_IMPORTED_MODULE_2__/* .BOOKING_RANGE_SOURCE */ .rV];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        display: "grid",
        gridTemplateColumns: `repeat(${bluredListingsCount}, minmax(0, 1fr))`,
        gap: 3,
        children: Array(bluredListingsCount).fill("").map((_, index)=>{
            const listing = bluredListings[index];
            if (!listing) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        filter: "blur(3px)"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ListingItem__WEBPACK_IMPORTED_MODULE_7__/* .ListingItem */ .u2, {
                        ...views_ListingItem__WEBPACK_IMPORTED_MODULE_7__/* .fakeListingData */ .b,
                        pricePrefix: "from"
                    })
                }, index);
            }
            const { formatted_filters , gallery , title , currency , average_price , address , missing_amenities  } = listing;
            const missingAmenities = (0,views_InfiniteListingsView_helpers_getMissingAmenities__WEBPACK_IMPORTED_MODULE_8__/* .getMissingAmenities */ .Z)({
                missingAmenities: missing_amenities,
                allAmenities: amenities
            });
            const [accommodates, bedrooms, bathrooms, basePrice, rating, ratingCount] = (0,helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
                formattedFilters: formatted_filters,
                slugs: [
                    application_constants__WEBPACK_IMPORTED_MODULE_2__/* .ACCOMMODATES_SOURCE */ .s0,
                    application_constants__WEBPACK_IMPORTED_MODULE_2__/* .BEDROOMS_SOURCE */ .Bt,
                    application_constants__WEBPACK_IMPORTED_MODULE_2__/* .BATHROOMS_SOURCE */ .qA,
                    application_constants__WEBPACK_IMPORTED_MODULE_2__/* .BASE_PRICE_SLUG */ .LI,
                    application_constants__WEBPACK_IMPORTED_MODULE_2__/* .RATING_SLUG */ .gd,
                    application_constants__WEBPACK_IMPORTED_MODULE_2__/* .RATING_COUNT_SLUG */ .BN
                ]
            });
            const parsedBasePrice = basePrice?.value ? Number(basePrice?.value) : 0;
            const parsedAveragePrice = average_price ? Number(average_price) : 0;
            /**
           * We show 'average_price' when dates are selected or 'base-price' when not
           */ const priceValue = getPrice({
                initialCurrencyCode: currency.code,
                amount: isDatesSelected ? parsedAveragePrice : parsedBasePrice
            });
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    filter: "blur(3px)"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ListingItem__WEBPACK_IMPORTED_MODULE_7__/* .ListingItem */ .u2, {
                    withTooltip: true,
                    address: address,
                    name: title,
                    price: priceValue,
                    pricePrefix: "from",
                    rating: rating?.value,
                    reviewsCount: ratingCount?.value,
                    amenitiesItems: [
                        {
                            id: "1",
                            label: translate.root("custom.guest"),
                            value: accommodates?.value
                        },
                        {
                            id: "2",
                            label: bedrooms?.filterAttribute?.title,
                            value: bedrooms?.value
                        },
                        {
                            id: "3",
                            label: bathrooms?.filterAttribute?.title,
                            value: bathrooms?.value
                        }
                    ],
                    missingAmenities: missingAmenities,
                    isPartial: true,
                    items: gallery.map((galleryItem)=>{
                        const { id , src , title  } = galleryItem;
                        return {
                            id,
                            url: src,
                            title
                        };
                    })
                })
            }, index);
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _BlurListingsContent__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _BlurListingsContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12280);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BlurListingsContent__WEBPACK_IMPORTED_MODULE_0__]);
_BlurListingsContent__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ BlurTextContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/hooks/useTranslate/index.ts + 1 modules
var useTranslate = __webpack_require__(53127);
;// CONCATENATED MODULE: ./src/components/views/InfiniteListingsView/components/BlurTextContent/BlurTextContent.tsx



const BlurTextContent = (props)=>{
    const { isPartialMatches , partialListingsCount  } = props;
    const translate = (0,useTranslate/* useTranslate */.q)({
        basePath: "pages.search.partial_match"
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "h6",
                color: "primary.contrastText",
                children: translate("did_not_find")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "h6",
                color: "primary.contrastText",
                children: isPartialMatches ? translate("we_have_stays", {
                    count: partialListingsCount
                }) : translate("try_change_filters")
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/views/InfiniteListingsView/components/BlurTextContent/index.ts



/***/ }),

/***/ 29563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ combineListRefs)
/* harmony export */ });
const combineListRefs = (...refs)=>{
    return (instance)=>{
        refs.forEach((ref)=>{
            if (!ref) return;
            if (typeof ref === "function") {
                ref(instance);
                return;
            }
            ref.current = instance;
        });
    };
};


/***/ }),

/***/ 29470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getMissingAmenities)
/* harmony export */ });
const getMissingAmenities = (params)=>{
    const { missingAmenities =[] , allAmenities  } = params;
    const missingAmenitiesConstructedResult = allAmenities?.filter(({ slug  })=>missingAmenities.includes(slug)).map(({ slug , title  })=>({
            iconName: slug,
            title
        }));
    return missingAmenitiesConstructedResult || [];
};


/***/ }),

/***/ 93465:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* reexport safe */ _InfiniteListingsView__WEBPACK_IMPORTED_MODULE_0__.D)
/* harmony export */ });
/* harmony import */ var _InfiniteListingsView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74747);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_InfiniteListingsView__WEBPACK_IMPORTED_MODULE_0__]);
_InfiniteListingsView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24788:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ ListingMapView)
/* harmony export */ });
/* unused harmony export ListingMapViewClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51296);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41430);
/* harmony import */ var components_links_NextLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4630);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19594);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94605);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62430);
/* harmony import */ var views_AddressView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50631);
/* harmony import */ var views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9991);
/* harmony import */ var views_PriceView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77768);
/* harmony import */ var views_RatingView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98852);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_7__, theme_index__WEBPACK_IMPORTED_MODULE_9__, views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_11__, views_PriceView__WEBPACK_IMPORTED_MODULE_12__, views_RatingView__WEBPACK_IMPORTED_MODULE_13__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_7__, theme_index__WEBPACK_IMPORTED_MODULE_9__, views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_11__, views_PriceView__WEBPACK_IMPORTED_MODULE_12__, views_RatingView__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const PREFIX = "ListingMapView";
const ListingMapViewClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "wrapper",
    "rightSection",
    "leftSection",
    "backSection"
]);
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_9__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: "ListingMapView",
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`& .${ListingMapViewClasses.wrapper}`]: {
            boxSizing: "border-box",
            height: 150,
            width: "100%",
            display: "flex",
            position: "relative",
            textDecoration: "none",
            color: theme.palette.text.primary
        },
        [`& .${ListingMapViewClasses.leftSection}`]: {
            height: "100%",
            flexBasis: 134,
            flexShrink: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "transparent"
        },
        [`& .${ListingMapViewClasses.backSection}`]: {
            width: 194,
            height: "100%",
            position: "absolute",
            overflow: "hidden",
            borderRadius: 16,
            zIndex: -1,
            background: theme.palette.actions.background
        },
        [`& .${ListingMapViewClasses.rightSection}`]: {
            height: "100%",
            flexBasis: 210,
            flexGrow: 1,
            flexShrink: 0,
            backgroundColor: theme.palette.background.default,
            border: "1px solid",
            borderColor: theme.palette.primary.border,
            borderRadius: 16,
            padding: theme.spacing(2),
            overflow: "hidden"
        }
    };
});
const ListingMapView = (props)=>{
    const { rating , reviewsCount , name , address , zip , amenitiesItems , price , pricePrefix ="from" , src , slug , topRight  } = props;
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledRoot, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            component: components_links_NextLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            // prevent click elements on the map, under listing view
            onClick: (event)=>{
                event.stopPropagation();
            },
            href: {
                pathname: application_constants__WEBPACK_IMPORTED_MODULE_4__/* .listingRoute.getPathname */ .oo.getPathname(slug),
                query
            },
            target: "_blank",
            className: ListingMapViewClasses.wrapper,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    className: ListingMapViewClasses.backSection,
                    children: src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_components__WEBPACK_IMPORTED_MODULE_2__/* .NextImage */ .o, {
                        src: (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getUrlWithTemplate */ .aN)({
                            url: src,
                            width: application_constants__WEBPACK_IMPORTED_MODULE_4__/* .LISTING_ITEM_IMAGE_WIDTH */ .eY
                        }),
                        fill: true,
                        style: {
                            objectFit: "cover"
                        },
                        alt: name,
                        // image is reused from browser cache when it loads in listing item
                        unoptimized: true
                    }) : null
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    className: ListingMapViewClasses.leftSection,
                    children: src ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_7__/* .IcoMoon */ .n, {
                        icon: "image",
                        color: theme.palette.text.light,
                        size: "large"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    className: ListingMapViewClasses.rightSection,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            height: 24,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "nowrap",
                            gap: 0.5,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    overflow: "hidden",
                                    children: !!rating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_RatingView__WEBPACK_IMPORTED_MODULE_13__/* .RatingView */ .k, {
                                        rating: rating,
                                        reviewsCount: reviewsCount,
                                        typographyProps: {
                                            variant: "body1"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    children: topRight
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            width: 1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, {
                                    variant: "subtitle2",
                                    sx: {
                                        whiteSpace: "nowrap"
                                    },
                                    children: name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_AddressView__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
                                    sx: {
                                        whiteSpace: "nowrap",
                                        mb: 0.5
                                    },
                                    address: address,
                                    zip: zip
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    mb: 0.5,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        items: amenitiesItems,
                                        typographyProps: {
                                            textOverflow: "ellipsis",
                                            overflow: "hidden",
                                            variant: "body1"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_PriceView__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    price: price,
                                    variant: "per_night",
                                    prefix: pricePrefix
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _ListingMapView__WEBPACK_IMPORTED_MODULE_0__.s)
/* harmony export */ });
/* harmony import */ var _ListingMapView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24788);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListingMapView__WEBPACK_IMPORTED_MODULE_0__]);
_ListingMapView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8537:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ MapListingClusterView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_2__]);
theme_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const PREFIX = "MapListingCluster";
const StyledChip = (0,theme_index__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Chip, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`&&.${_mui_material__WEBPACK_IMPORTED_MODULE_1__.chipClasses.outlinedPrimary}`]: {
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderColor: theme.palette.text.primary
        }
    };
});
const MapListingClusterView = (props)=>{
    const { count , active =false , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip, {
        ...rest,
        // prevent click elements on the map
        onTouchStart: (e)=>{
            e.stopPropagation();
        },
        color: "primary",
        variant: active ? "filled" : "outlined",
        label: `${count}`
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* reexport safe */ _MapListingClusterView__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _MapListingClusterView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8537);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MapListingClusterView__WEBPACK_IMPORTED_MODULE_0__]);
_MapListingClusterView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9351:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ MapListingPointView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27074);
/* harmony import */ var contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71583);
/* harmony import */ var helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23517);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_3__, helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_5__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_3__, helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const PREFIX = "MapListingPoint";
const StyledChip = (0,theme_index__WEBPACK_IMPORTED_MODULE_5__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Chip, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`&&.${_mui_material__WEBPACK_IMPORTED_MODULE_1__.chipClasses.outlinedPrimary}`]: {
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderColor: theme.palette.text.primary
        }
    };
});
const MapListingPointView = (props)=>{
    const { price , active =false , sx , ...rest } = props;
    const { currency  } = (0,contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_3__/* .useCurrencyContext */ .VT)();
    const getPrice = (0,helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const priceInCurrentCurrency = getPrice({
        amount: price,
        initialCurrencyCode: currency?.code
    });
    const isShortFormat = price >= 1000;
    const label = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .toCurrencyFormat */ .BK)({
        value: priceInCurrentCurrency,
        currencySign: currency?.sign,
        decimal: 0,
        isShortFormat
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledChip, {
        // prevent click elements on the map
        onTouchStart: (e)=>{
            e.stopPropagation();
        },
        size: "small",
        color: "primary",
        label: label,
        variant: active ? "filled" : "outlined",
        ...rest
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33244:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* reexport safe */ _MapListingPointView__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _MapListingPointView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9351);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MapListingPointView__WEBPACK_IMPORTED_MODULE_0__]);
_MapListingPointView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ MobileSearchFilterHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27074);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16593);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19594);
/* harmony import */ var hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7216);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetCity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83773);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, clsx__WEBPACK_IMPORTED_MODULE_4__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_6__, hooks_index__WEBPACK_IMPORTED_MODULE_7__, hooks_queries_useGetCity__WEBPACK_IMPORTED_MODULE_8__, theme_index__WEBPACK_IMPORTED_MODULE_10__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, clsx__WEBPACK_IMPORTED_MODULE_4__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_6__, hooks_index__WEBPACK_IMPORTED_MODULE_7__, hooks_queries_useGetCity__WEBPACK_IMPORTED_MODULE_8__, theme_index__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PREFIX = "MobileSearchFilterHeader";
const MobileSearchFilterHeaderClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "placeholderText",
    "text"
]);
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_10__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        border: `1px solid ${theme.palette.primary.background}`,
        borderRadius: 71,
        padding: theme.spacing(1, 3),
        minWidth: 200,
        [`& .${MobileSearchFilterHeaderClasses.text}`]: {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        },
        [`& .${MobileSearchFilterHeaderClasses.placeholderText}`]: {
            color: theme.palette.text.secondary
        }
    };
});
const MobileSearchFilterHeader = (props)=>{
    const { handleOpenSearchMobile  } = props;
    const { selectedFilters  } = (0,hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_6__/* .useFilters */ .m)({
        independentFiltersSlugs: [
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOOKING_RANGE_SOURCE */ .rV,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOUNDS_SOURCE */ .iV
        ]
    });
    const { booking_range  } = selectedFilters;
    const { checkin_at , checkout_at  } = booking_range || {};
    const accommodates = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(selectedFilters, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .ACCOMMODATES_SOURCE */ .s0);
    const city = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(selectedFilters, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ, "");
    const isBoundsFilter = !!lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(selectedFilters, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BOUNDS_SOURCE */ .iV);
    const { data: cityData  } = (0,hooks_queries_useGetCity__WEBPACK_IMPORTED_MODULE_8__/* .useGetCity */ .J)(typeof city === "string" ? city : undefined);
    const cityTitle = cityData?.title;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_7__/* .useTranslate */ .qM)({
        basePath: "pages.search.labels"
    });
    const FORMAT = "d MMM";
    const checkInDate = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getFormattedDateValue */ .ww)({
        value: checkin_at,
        format: FORMAT
    });
    const checkOutDate = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getFormattedDateValue */ .ww)({
        value: checkout_at,
        format: FORMAT
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledRoot, {
        onClick: handleOpenSearchMobile,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                variant: "subtitle2",
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(MobileSearchFilterHeaderClasses.text, {
                    [MobileSearchFilterHeaderClasses.placeholderText]: !cityTitle && !isBoundsFilter
                }),
                children: isBoundsFilter ? translate.root("pages.search.map_area") : cityTitle ?? translate("location")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                direction: "row",
                divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    orientation: "vertical",
                    flexItem: true
                }),
                spacing: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                        variant: "body1",
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(MobileSearchFilterHeaderClasses.text, {
                            [MobileSearchFilterHeaderClasses.placeholderText]: !checkInDate || !checkOutDate
                        }),
                        children: checkInDate && checkOutDate ? `${checkInDate} - ${checkOutDate}` : translate("date")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                        variant: "body1",
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(MobileSearchFilterHeaderClasses.text, {
                            [MobileSearchFilterHeaderClasses.placeholderText]: !accommodates
                        }),
                        children: accommodates ? translate.root("custom.guest_count", {
                            count: accommodates
                        }) : translate("guest")
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* reexport safe */ _MobileSearchFilterHeader__WEBPACK_IMPORTED_MODULE_0__.g)
/* harmony export */ });
/* harmony import */ var _MobileSearchFilterHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MobileSearchFilterHeader__WEBPACK_IMPORTED_MODULE_0__]);
_MobileSearchFilterHeader__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51095:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ RangeSliderView)
/* harmony export */ });
/* unused harmony export RangeSliderClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var templates_InputTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65754);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62430);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([templates_InputTemplate__WEBPACK_IMPORTED_MODULE_3__, _theme__WEBPACK_IMPORTED_MODULE_4__]);
([templates_InputTemplate__WEBPACK_IMPORTED_MODULE_3__, _theme__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const PREFIX = "RangeSlider";
const RangeSliderClasses = {
    inputsWrapper: `${PREFIX}-inputsWrapper`,
    textField: `${PREFIX}-textField`,
    slider: `${PREFIX}-slider`,
    thumb: `${PREFIX}-thumb`,
    rail: `${PREFIX}-rail`,
    track: `${PREFIX}-track`,
    mainLabel: `${PREFIX}-mainLabel`
};
const StyledRoot = (0,_theme__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: "StyledRangeSliderView",
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    const thumbSize = 20;
    return {
        width: "100%",
        [`& .${RangeSliderClasses.inputsWrapper}`]: {
            display: "flex",
            alignItems: "start"
        },
        [`& .${RangeSliderClasses.textField}`]: {
            width: "auto",
            ...theme.typography.subtitle1,
            color: theme.palette.text.primary,
            flexShrink: 0,
            maxWidth: 162,
            marginTop: theme.spacing(0.5),
            "& .MuiFormHelperText-root": {
                ...theme.typography.small2,
                color: theme.palette.text.disabled,
                margin: theme.spacing(0.5, 0)
            },
            [theme.breakpoints.down("sm")]: {
                width: "100%"
            }
        },
        [`& .${RangeSliderClasses.slider}`]: {
            margin: theme.spacing(0.5, 3, 0),
            boxSizing: "border-box",
            height: _theme__WEBPACK_IMPORTED_MODULE_4__/* .INPUTS_HEIGHT */ .z8,
            width: "100%",
            minWidth: 100,
            [theme.breakpoints.down("sm")]: {
                margin: 0
            }
        },
        [`& .${RangeSliderClasses.thumb}`]: {
            width: thumbSize,
            height: thumbSize,
            backgroundColor: theme.palette.primary.contrastText,
            border: `1px solid ${theme.palette.primary.main}`,
            "& .vertical-bar": {
                height: 9,
                width: 1,
                backgroundColor: "currentColor",
                marginLeft: 1,
                marginRight: 1
            },
            "&:before, &:active, &:hover": {
                boxShadow: "none"
            }
        },
        [`& .${RangeSliderClasses.rail}`]: {
            color: theme.palette.primary.background,
            height: 2
        },
        [`& .${RangeSliderClasses.track}`]: {
            height: 0
        }
    };
});
const SliderThumbComponent = (props)=>{
    const { children , ...rest } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.SliderThumb, {
        ...rest,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "vertical-bar"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "vertical-bar"
            })
        ]
    });
};
const RangeSliderView = (props)=>{
    const { sliderProps , fromInputProps , toInputProps , helperText , className , disabled , leftHelperText , rightHelperText , leftLabel , rightLabel , sx , label , error , id , required , startAdornment  } = props;
    const inputProps = {
        className: RangeSliderClasses.textField,
        disabled,
        InputProps: {
            startAdornment: startAdornment ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputAdornment, {
                position: "start",
                children: startAdornment
            }) : null
        }
    };
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(_theme__WEBPACK_IMPORTED_MODULE_4__/* .theme.breakpoints.down */ .rS.breakpoints.down("sm"));
    const finalFromInputProps = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()({}, inputProps, fromInputProps);
    const finalToInputProps = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()({}, inputProps, toInputProps);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledRoot, {
        className: className,
        sx: sx,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_InputTemplate__WEBPACK_IMPORTED_MODULE_3__/* .InputTemplate */ .c, {
            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    mb: 0
                },
                children: label
            }),
            required: required,
            helperText: helperText,
            error: !!error,
            id: id || "",
            formControlProps: {
                sx: {
                    display: "block"
                }
            },
            children: ()=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: isMobile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    px: 0.7
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Slider, {
                                    className: RangeSliderClasses.slider,
                                    classes: {
                                        rail: RangeSliderClasses.rail,
                                        thumb: RangeSliderClasses.thumb,
                                        track: RangeSliderClasses.track
                                    },
                                    components: {
                                        Thumb: SliderThumbComponent
                                    },
                                    disabled: disabled,
                                    ...sliderProps
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: 3
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        sx: {
                                            flexGrow: 1,
                                            display: "flex"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                                            variant: "outlined",
                                            label: leftLabel,
                                            helperText: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                                                component: "span",
                                                variant: "small2",
                                                sx: {
                                                    textAlign: "start"
                                                },
                                                children: leftHelperText
                                            }),
                                            ...finalFromInputProps
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        sx: {
                                            flexGrow: 1,
                                            display: "flex"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                                            sx: {
                                                ml: "auto",
                                                mr: 0
                                            },
                                            variant: "outlined",
                                            label: rightLabel,
                                            helperText: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                                                component: "span",
                                                variant: "small2",
                                                sx: {
                                                    display: "block",
                                                    textAlign: "end"
                                                },
                                                children: rightHelperText
                                            }),
                                            ...finalToInputProps
                                        })
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        className: RangeSliderClasses.inputsWrapper,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                                sx: {
                                    minWidth: 162,
                                    mt: 0.5
                                },
                                variant: "outlined",
                                label: leftLabel,
                                helperText: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                                    component: "span",
                                    variant: "small2",
                                    sx: {
                                        textAlign: "start"
                                    },
                                    children: leftHelperText
                                }),
                                ...finalFromInputProps
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Slider, {
                                className: RangeSliderClasses.slider,
                                classes: {
                                    rail: RangeSliderClasses.rail,
                                    thumb: RangeSliderClasses.thumb,
                                    track: RangeSliderClasses.track
                                },
                                components: {
                                    Thumb: SliderThumbComponent
                                },
                                disabled: disabled,
                                ...sliderProps
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                                sx: {
                                    minWidth: 162,
                                    mt: 0.5
                                },
                                variant: "outlined",
                                label: rightLabel,
                                helperText: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                                    component: "span",
                                    variant: "small2",
                                    sx: {
                                        display: "block",
                                        textAlign: "end"
                                    },
                                    children: rightHelperText
                                }),
                                ...finalToInputProps
                            })
                        ]
                    })
                });
            }
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _RangeSliderView__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _RangeSliderView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51095);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RangeSliderView__WEBPACK_IMPORTED_MODULE_0__]);
_RangeSliderView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 99438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* reexport */ getGuestsCount)
});

// EXTERNAL MODULE: ../../packages/types/src/typeGuards/isObject/isObject.ts
var isObject = __webpack_require__(73670);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(89699);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
;// CONCATENATED MODULE: ./src/helpers/getGuestsCount/getGuestsCount.ts


const getGuestsCount = (params)=>{
    const { defaultCount =0 , guestObj  } = params;
    if ((0,isObject/* isObject */.K)(guestObj) && !isEmpty_default()(guestObj)) {
        const values = Object.values(guestObj);
        const resultValue = values.reduce((acc, v)=>{
            if (typeof v !== "number") return acc;
            return acc + v;
        }, 0);
        return resultValue;
    } else {
        return defaultCount;
    }
};

;// CONCATENATED MODULE: ./src/helpers/getGuestsCount/index.ts



/***/ }),

/***/ 37257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* reexport */ isClusterProperties)
});

// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
;// CONCATENATED MODULE: ./src/helpers/isClusterMapProperties/isClusterMapProperties.ts

const isClusterProperties = (properties)=>{
    return get_default()(properties, "cluster") === true;
};

;// CONCATENATED MODULE: ./src/helpers/isClusterMapProperties/index.ts



/***/ }),

/***/ 83773:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* reexport safe */ _useGetCity__WEBPACK_IMPORTED_MODULE_0__.J)
/* harmony export */ });
/* harmony import */ var _useGetCity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75259);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useGetCity__WEBPACK_IMPORTED_MODULE_0__]);
_useGetCity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75259:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ useGetCity)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const getCity = async (params)=>{
    const { citySlug  } = params;
    const endpoint = application_resources__WEBPACK_IMPORTED_MODULE_2__/* .CITIES_RESOURCE */ .P1;
    const { data: { data  }  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.get */ .zk.get({
        pathname: `${endpoint}/${citySlug}`
    });
    return _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodCityResourceSchema.parse */ .OZ.parse(data);
};
const useGetCity = (slug)=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "city",
            "getOne",
            slug
        ],
        queryFn: ()=>getCity({
                citySlug: slug
            }),
        refetchOnMount: false,
        enabled: !!slug
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* reexport */ useDeepMemo)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__(40113);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);
;// CONCATENATED MODULE: ./src/hooks/useDeepMemo/useDeepMemo.ts


const useDeepMemo = (value)=>{
    const memoizedValueRef = (0,external_react_.useRef)(value);
    const memoizedValue = (0,external_react_.useMemo)(()=>{
        if (isEqual_default()(value, memoizedValueRef.current)) {
            return memoizedValueRef.current;
        }
        memoizedValueRef.current = value;
        return value;
    }, [
        value
    ]);
    return memoizedValue;
};

;// CONCATENATED MODULE: ./src/hooks/useDeepMemo/index.ts



/***/ }),

/***/ 42864:
/***/ ((module) => {

module.exports = require("@king-david-it/builder");

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 18442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 97986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 82433:
/***/ ((module) => {

module.exports = require("@react-google-maps/api");

/***/ }),

/***/ 58097:
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 52167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 48982:
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ 74146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 14384:
/***/ ((module) => {

module.exports = require("date-fns/format");

/***/ }),

/***/ 15081:
/***/ ((module) => {

module.exports = require("date-fns/isValid");

/***/ }),

/***/ 45564:
/***/ ((module) => {

module.exports = require("date-fns/locale");

/***/ }),

/***/ 74378:
/***/ ((module) => {

module.exports = require("dequal");

/***/ }),

/***/ 90221:
/***/ ((module) => {

module.exports = require("lodash/chunk");

/***/ }),

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

/***/ }),

/***/ 50454:
/***/ ((module) => {

module.exports = require("lodash/differenceBy");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 89699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 40113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 48524:
/***/ ((module) => {

module.exports = require("lodash/isNull");

/***/ }),

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 9941:
/***/ ((module) => {

module.exports = require("lodash/mapValues");

/***/ }),

/***/ 36625:
/***/ ((module) => {

module.exports = require("lodash/max");

/***/ }),

/***/ 61831:
/***/ ((module) => {

module.exports = require("lodash/merge");

/***/ }),

/***/ 604:
/***/ ((module) => {

module.exports = require("lodash/min");

/***/ }),

/***/ 87553:
/***/ ((module) => {

module.exports = require("lodash/noop");

/***/ }),

/***/ 63901:
/***/ ((module) => {

module.exports = require("lodash/omit");

/***/ }),

/***/ 66011:
/***/ ((module) => {

module.exports = require("lodash/omitBy");

/***/ }),

/***/ 32027:
/***/ ((module) => {

module.exports = require("lodash/partition");

/***/ }),

/***/ 24298:
/***/ ((module) => {

module.exports = require("lodash/set");

/***/ }),

/***/ 1381:
/***/ ((module) => {

module.exports = require("lodash/throttle");

/***/ }),

/***/ 11377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 25460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 16641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 53918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 45732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 93431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 71109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 87782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 82470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 73142:
/***/ ((module) => {

module.exports = require("notistack");

/***/ }),

/***/ 40420:
/***/ ((module) => {

module.exports = require("pluralize");

/***/ }),

/***/ 87104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 74304:
/***/ ((module) => {

module.exports = require("react-date-range");

/***/ }),

/***/ 23599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 84466:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 80551:
/***/ ((module) => {

module.exports = require("react-window");

/***/ }),

/***/ 30353:
/***/ ((module) => {

module.exports = require("react-window-infinite-loader");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 94612:
/***/ ((module) => {

module.exports = require("use-deep-compare-effect");

/***/ }),

/***/ 76819:
/***/ ((module) => {

module.exports = require("use-resize-observer");

/***/ }),

/***/ 25040:
/***/ ((module) => {

module.exports = require("zod-i18n-map");

/***/ }),

/***/ 1656:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/zod");;

/***/ }),

/***/ 49752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 16593:
/***/ ((module) => {

module.exports = import("clsx");;

/***/ }),

/***/ 45641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 32860:
/***/ ((module) => {

module.exports = import("react-virtualized-auto-sizer");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [97,487,876,577,789,857,670,975,31,367,54,319,822,622,268,6,797,460,119,370,634], () => (__webpack_exec__(37256)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=s.js.map