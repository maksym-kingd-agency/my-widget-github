"use strict";
(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 20830:
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
/* harmony import */ var components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11762);
/* harmony import */ var components_pageTemplates_CheckoutPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31225);
/* harmony import */ var contexts_ListContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56388);
/* harmony import */ var helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71093);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63858);
/* harmony import */ var hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82153);
/* harmony import */ var providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30378);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__, components_pageTemplates_CheckoutPage__WEBPACK_IMPORTED_MODULE_4__, helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_6__, hooks_index__WEBPACK_IMPORTED_MODULE_7__, hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_8__, hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_9__, providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_10__]);
([components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__, components_pageTemplates_CheckoutPage__WEBPACK_IMPORTED_MODULE_4__, helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_6__, hooks_index__WEBPACK_IMPORTED_MODULE_7__, hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_8__, hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_9__, providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ReservationPage = ()=>{
    const { data: listing , isSuccess  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_7__/* .useGetListing */ .Mw)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_10__/* .NextSeoProvider */ .L, {
                title: listing?.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__/* .MainLayout */ .Z, {
                children: isSuccess && listing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(contexts_ListContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(components_pageTemplates_CheckoutPage__WEBPACK_IMPORTED_MODULE_4__/* .CheckoutPage */ .u, {
                        listingData: listing
                    })
                })
            })
        ]
    });
};
const getServerSideProps$1 = (0,helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_6__/* .withServerSideProps */ .l)({
    fetchers: [
        hooks_index__WEBPACK_IMPORTED_MODULE_7__/* .prefetchListing */ .KC,
        hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_9__/* .prefetchLocales */ .n,
        hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_8__/* .prefetchCurrencies */ .GJ
    ]
});

var serverComponentModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': ReservationPage,
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

const getInitialPropsWrapper = getInitialPropsWrappers['/r/[slug]'] || _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetInitialPropsWithSentry;

if (pageComponent && typeof origGetInitialProps === 'function') {
  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;
}

const getStaticProps =
  typeof origGetStaticProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetStaticPropsWithSentry(origGetStaticProps, '/r/[slug]')
    : undefined;
const getServerSideProps =
  typeof origGetServerSideProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/r/[slug]')
    : undefined;

const pageWrapperTemplate = pageComponent ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapPageComponentWithSentry(pageComponent ) : pageComponent;



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88079:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ BackButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48719);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94605);
/* harmony import */ var helpers_getDirectionFromLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70225);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__]);
custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const BackButton = (props)=>{
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_3__/* .useLocaleContext */ .PE)();
    const isRtl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return (0,helpers_getDirectionFromLocale__WEBPACK_IMPORTED_MODULE_5__/* .getDirectionFromLocale */ .V)(locale) === "rtl";
    }, [
        locale
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
            icon: "chevron-left",
            sx: {
                transform: isRtl ? "rotate(180deg)" : "rotate(0deg)"
            }
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* reexport safe */ _BackButton__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88079);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BackButton__WEBPACK_IMPORTED_MODULE_0__]);
_BackButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72556:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ CheckoutDetails)
/* harmony export */ });
/* unused harmony export CheckoutDetailsClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51296);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27074);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41430);
/* harmony import */ var contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71583);
/* harmony import */ var custom_BookInfoTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54389);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94605);
/* harmony import */ var custom_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76238);
/* harmony import */ var helpers_getNormalizedQuoteData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70896);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15787);
/* harmony import */ var hooks_useParsedMainURLFilters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98162);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var templates_ComplexTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(45361);
/* harmony import */ var theme_styled__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7802);
/* harmony import */ var views_AddressView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(50631);
/* harmony import */ var views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9991);
/* harmony import */ var views_NoImageView__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(48113);
/* harmony import */ var views_RatingView__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(98852);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(54045);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_4__, contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_6__, custom_BookInfoTable__WEBPACK_IMPORTED_MODULE_7__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_8__, hooks_index__WEBPACK_IMPORTED_MODULE_11__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__, hooks_useParsedMainURLFilters__WEBPACK_IMPORTED_MODULE_13__, templates_ComplexTable__WEBPACK_IMPORTED_MODULE_15__, theme_styled__WEBPACK_IMPORTED_MODULE_16__, views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_18__, views_NoImageView__WEBPACK_IMPORTED_MODULE_19__, views_RatingView__WEBPACK_IMPORTED_MODULE_20__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_4__, contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_6__, custom_BookInfoTable__WEBPACK_IMPORTED_MODULE_7__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_8__, hooks_index__WEBPACK_IMPORTED_MODULE_11__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__, hooks_useParsedMainURLFilters__WEBPACK_IMPORTED_MODULE_13__, templates_ComplexTable__WEBPACK_IMPORTED_MODULE_15__, theme_styled__WEBPACK_IMPORTED_MODULE_16__, views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_18__, views_NoImageView__WEBPACK_IMPORTED_MODULE_19__, views_RatingView__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const PREFIX = "CheckoutDetails";
const CheckoutDetailsClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.generateUtilityClasses)(PREFIX, [
    "imageBlock"
]);
const StyledCheckoutDetails = (0,theme_styled__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    const mobileBreakpoint = theme.breakpoints.down("md");
    return {
        background: theme.palette.background.paper,
        borderRadius: 16,
        // ----- Spacings -----
        padding: theme.spacing(3),
        [mobileBreakpoint]: {
            padding: theme.spacing(2)
        },
        [`&& .${templates_ComplexTable__WEBPACK_IMPORTED_MODULE_15__/* .ComplexTableClasses.table */ .oy.table}`]: {
            background: theme.palette.background.paper
        },
        [`& .${CheckoutDetailsClasses.imageBlock}`]: {
            position: "relative",
            height: 255,
            width: "100%",
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: theme.spacing(1),
            [mobileBreakpoint]: {
                height: 200
            }
        }
    };
});
const CheckoutDetails = (props)=>{
    const { mainAmenities , sx , className , title , address , src , rating , reviewsCount , listingId , coupon , currency , setRatePlanId  } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_11__/* .useTranslate */ .qM)({
        basePath: "pages.reservation.sidebar"
    });
    const { currency: currentCurrency  } = (0,contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_6__/* .useCurrencyContext */ .VT)();
    const isCurrentCurrencySameWithListingCurrency = currentCurrency?.id === currency?.id;
    const { [application_constants__WEBPACK_IMPORTED_MODULE_5__/* .CHECKIN_AT_SOURCE */ .I1]: checkinAtFilter , [application_constants__WEBPACK_IMPORTED_MODULE_5__/* .CHECKOUT_AT_SOURCE */ .ob]: checkoutAtFilter , [application_constants__WEBPACK_IMPORTED_MODULE_5__/* .ACCOMMODATES_SOURCE */ .s0]: accommodatesFilter  } = (0,hooks_useParsedMainURLFilters__WEBPACK_IMPORTED_MODULE_13__/* .useParsedMainURLFilters */ .E)();
    const { data: quotesData , isFetching , isError  } = (0,hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__/* .useGetQuotes */ .j2)({
        listingId,
        data: {
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__/* .QUOTES_SOURCES.checkin_at */ .nF.checkin_at]: checkinAtFilter,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__/* .QUOTES_SOURCES.checkout_at */ .nF.checkout_at]: checkoutAtFilter,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__/* .QUOTES_SOURCES.guest_count */ .nF.guest_count]: accommodatesFilter,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__/* .QUOTES_SOURCES.coupon */ .nF.coupon]: coupon
        }
    }, {
        enabled: true
    });
    const { hostPayout , defaultRatePlan  } = (0,helpers_getNormalizedQuoteData__WEBPACK_IMPORTED_MODULE_10__/* .getNormalizedQuoteData */ .n)({
        data: quotesData
    });
    const defaultRatePlanId = lodash_get__WEBPACK_IMPORTED_MODULE_14___default()(defaultRatePlan, "id") || "";
    const originalPrice = !isCurrentCurrencySameWithListingCurrency ? (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_4__/* .toCurrencyFormat */ .BK)({
        value: hostPayout,
        currencySign: currency?.sign,
        decimal: 0
    }) : undefined;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setRatePlanId(defaultRatePlanId);
    }, [
        defaultRatePlanId,
        setRatePlanId
    ]);
    const shouldRenderData = !isError && !isFetching;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCheckoutDetails, {
        sx: sx,
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                className: CheckoutDetailsClasses.imageBlock,
                children: src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_components__WEBPACK_IMPORTED_MODULE_3__/* .NextImage */ .o, {
                    src: src,
                    fill: true,
                    style: {
                        objectFit: "cover"
                    },
                    alt: title
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_NoImageView__WEBPACK_IMPORTED_MODULE_19__/* .NoImageView */ .N, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                mb: 0.5,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    variant: "h6",
                    sx: {
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word"
                    },
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                mb: 0.5,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_AddressView__WEBPACK_IMPORTED_MODULE_17__/* .AddressView */ .qn, {
                    address: address
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                mb: 0.5,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_18__/* .AmenitiesStackView */ .i, {
                    items: mainAmenities,
                    typographyProps: {
                        variant: "body1"
                    }
                })
            }),
            !!rating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_RatingView__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                rating: rating,
                reviewsCount: reviewsCount,
                typographyProps: {
                    variant: "body1"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                sx: {
                    my: 3
                }
            }),
            isFetching && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: _constants__WEBPACK_IMPORTED_MODULE_21__/* .LOADER_SECTION_HEIGHT */ .$,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_Loader__WEBPACK_IMPORTED_MODULE_9__/* .Loader */ .a, {})
            }),
            shouldRenderData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "subtitle2",
                        sx: {
                            mb: 1.5
                        },
                        children: translate("table_header")
                    }),
                    quotesData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_BookInfoTable__WEBPACK_IMPORTED_MODULE_7__/* .BookInfoTable */ .f, {
                        quotesData: quotesData
                    }),
                    originalPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            container: true,
                            mt: 2,
                            gap: 1,
                            flexWrap: "nowrap",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_8__/* .IcoMoon */ .n, {
                                        icon: "info",
                                        size: "extraSmall"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                    item: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        variant: "body1",
                                        children: translate("info", {
                                            price: originalPrice
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ LOADER_SECTION_HEIGHT)
/* harmony export */ });
const LOADER_SECTION_HEIGHT = 180;


/***/ }),

/***/ 95986:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* reexport safe */ _CheckoutDetails__WEBPACK_IMPORTED_MODULE_0__.H)
/* harmony export */ });
/* harmony import */ var _CheckoutDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72556);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CheckoutDetails__WEBPACK_IMPORTED_MODULE_0__]);
_CheckoutDetails__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zu": () => (/* reexport */ GuestyFormSkeleton),
  "jP": () => (/* reexport */ PaymentBadRequestError),
  "Wo": () => (/* reexport */ TimeoutError),
  "O_": () => (/* reexport */ ValidationError),
  "G_": () => (/* reexport */ GuestyTokenizationWrapper),
  "v2": () => (/* reexport */ useGuestyTokenization)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/GuestyTokenizationContext.tsx


const GuestyTokenizationContext = /*#__PURE__*/ (0,external_react_.createContext)(null);
const GuestyTokenizationContextProvider = (props)=>{
    const { value , children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(GuestyTokenizationContext.Provider, {
        value: value,
        children: children
    });
};
const useGuestyTokenizationContext = ()=>{
    const context = (0,external_react_.useContext)(GuestyTokenizationContext);
    if (!context) {
        throw Error("`useGuestyTokenizationContext` can not be used outside `GuestyTokenizationContextProvider`");
    }
    return context;
};

;// CONCATENATED MODULE: external "@guestyorg/tokenization-js"
const tokenization_js_namespaceObject = require("@guestyorg/tokenization-js");
;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/useLoadGuestyTokenizationScript.ts


const useLoadGuestyTokenizationScript = (params)=>{
    const { sandbox  } = params || {};
    const [tokenization, setTokenization] = (0,external_react_.useState)(null);
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    const [error, setError] = (0,external_react_.useState)(null);
    const loadTokenization = (0,external_react_.useCallback)(async ()=>{
        setTokenization(null);
        setIsLoading(true);
        setError(null);
        try {
            const guestyTokenization = await (0,tokenization_js_namespaceObject.loadScript)({
                sandbox
            });
            setTokenization(guestyTokenization);
        } catch (error) {
            setError(error);
        } finally{
            setIsLoading(false);
        }
    }, [
        sandbox
    ]);
    (0,external_react_.useEffect)(()=>{
        loadTokenization();
        return ()=>{
            /**
       * The `loadScript` function performs internal check whether
       * the script is already loaded, and if the script exists, but
       * there is no `guestyTokenization` in `window`, the existing
       * script will be removed. So, we remove the `guestyTokenization`
       * from the `window` object before the `loadScript` will be called
       * with other params (sandbox).
       */ window.guestyTokenization = undefined;
        };
    }, [
        loadTokenization
    ]);
    return {
        tokenization,
        isLoading,
        error,
        retry: loadTokenization
    };
};

;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/GuestyTokenizationWrapper.tsx



const GuestyTokenizationWrapper = (props)=>{
    const { children , renderError , renderLoader , ...loadScriptOptions } = props;
    const { tokenization , error , isLoading , retry  } = useLoadGuestyTokenizationScript(loadScriptOptions);
    if (isLoading) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: renderLoader()
        });
    }
    if (error || !tokenization) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: renderError(error, retry)
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(GuestyTokenizationContextProvider, {
        value: tokenization,
        children: children
    });
};

// EXTERNAL MODULE: ./src/components/contexts/LocaleContext.tsx + 2 modules
var LocaleContext = __webpack_require__(48719);
// EXTERNAL MODULE: ./src/hooks/useDeepMemo/index.ts + 1 modules
var useDeepMemo = __webpack_require__(28188);
// EXTERNAL MODULE: ./src/hooks/useTranslate/index.ts + 1 modules
var useTranslate = __webpack_require__(53127);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/errors.ts
class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
class TimeoutError extends Error {
    constructor(message){
        super(message);
        this.name = "TimeoutError";
    }
}
class PaymentBadRequestError extends Error {
    constructor(message){
        super(message);
        this.name = "PaymentBadRequestError";
    }
}

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/theme/constants.ts
var constants = __webpack_require__(19018);
;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/useGuestyTokenizationStyles.ts



const useGuestyTokenizationStyles = ()=>{
    const theme = (0,material_.useTheme)();
    const styles = (0,external_react_.useMemo)(()=>({
            fontFamily: theme.typography.fontFamily,
            fontSizeLg: theme.typography.h6.fontSize,
            fontSizeMd: theme.typography.body2.fontSize,
            fontWeightBold: theme.typography.h6.fontWeight,
            fontWeightRegular: theme.typography.body2.fontWeight,
            inputHeight: constants/* INPUTS_HEIGHT */.z8,
            /**
       * Input vertical padding should be 0 in order to avoid
       * value cropping on safari
       */ inputPadding: theme.spacing(0, 2),
            borderRadius: constants/* INPUTS_BORDER_RADIUS_PX */.EO,
            colorFormBackground: theme.palette.background.default,
            colorText: theme.palette.text.primary,
            colorBackgroundDisabled: theme.palette.actions.background,
            colorBackgroundError: theme.palette.background.default,
            colorTextError: theme.palette.error.main,
            colorBorder: theme.palette.primary.border,
            colorBorderHover: theme.palette.primary.main,
            colorBorderError: theme.palette.error.main,
            colorPlaceholder: theme.palette.text.disabled,
            mobileBreakpoint: theme.breakpoints.values.md
        }), [
        theme
    ]);
    return styles;
};

;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/useGuestyTokenization.ts








const useGuestyTokenization = (params)=>{
    const { timeout =7000 , throwOnError , ...renderOptions } = params;
    const translate = (0,useTranslate/* useTranslate */.q)({
        basePath: "forms.checkout"
    });
    const tokenization = useGuestyTokenizationContext();
    const [data, setData] = (0,external_react_.useState)(null);
    const [renderError, setRenderError] = (0,external_react_.useState)(null);
    const [isRendering, setIsRendering] = (0,external_react_.useState)(false);
    const [submitError, setSubmitError] = (0,external_react_.useState)(null);
    const [isSubmitting, setIsSubmitting] = (0,external_react_.useState)(false);
    const { locale  } = (0,LocaleContext/* useLocaleContext */.PE)();
    const styles = useGuestyTokenizationStyles();
    const memoizedRenderOptions = (0,useDeepMemo/* useDeepMemo */.v)(renderOptions);
    const destroyIframe = (0,external_react_.useCallback)(async ()=>{
        try {
            await tokenization.destroy();
        } catch  {
        /**
       * It can throw error when there is no
       * rendered iframe. We ignore it
       */ }
    }, [
        tokenization
    ]);
    const renderIframe = (0,external_react_.useCallback)(async ()=>{
        setIsRendering(true);
        setRenderError(null);
        // Destroy previous iframe if exists
        await destroyIframe();
        try {
            await tokenization.render({
                ...memoizedRenderOptions,
                styles: {
                    ...styles,
                    ...memoizedRenderOptions.styles
                },
                lang: memoizedRenderOptions.lang || locale
            });
        } catch (error) {
            setRenderError(error);
        } finally{
            setIsRendering(false);
        }
    }, [
        locale,
        memoizedRenderOptions,
        styles,
        tokenization,
        destroyIframe
    ]);
    (0,external_react_.useEffect)(()=>{
        renderIframe();
        return ()=>{
            destroyIframe();
        };
    }, [
        tokenization,
        renderIframe,
        destroyIframe
    ]);
    const validate = (0,external_react_.useCallback)(()=>{
        return tokenization.validate();
    }, [
        tokenization
    ]);
    const submitAsync = (0,external_react_.useCallback)(async ()=>{
        setIsSubmitting(true);
        setSubmitError(null);
        setData(null);
        const tokenizationSubmitPromise = tokenization.submit();
        /**
     * Since this promise only rejects,
     * it does not matter what type in generic we use,
     * but for consistency of types we use the same as
     * tokenization returns
     */ const timeoutPromise = new Promise((_, reject)=>{
            setTimeout(()=>{
                reject(new TimeoutError());
            }, timeout);
        });
        /**
     * Sometimes, if there is some error during the submit, e.g. `providerId` is valid,
     * but does not exists in guesty, there is an unhandled promise rejection appears inside the
     * guesty iframe, and the submit promise inside the guesty SDK script is not rejected since
     * the iframe does not send the `message` event. So, we get the promise that is always in the
     * pending state. It's a bug on the guesty side, and it should be solved since it leads to
     * memory leaks in our app. So far we add the `timeoutPromise` to make sure our app will not
     * stuck in the submitting state.
     */ return Promise.race([
            tokenizationSubmitPromise,
            timeoutPromise
        ]).then((paymentMethod)=>{
            if (!paymentMethod) {
                /**
           * If there is no result and no error is thrown, in most of the cases
           * it means that the form is not valid. We throw the error here
           * since guesty does not do it.
           */ throw new ValidationError(translate.root("validation.invalid_form"));
            }
            const { _id: data  } = paymentMethod;
            setData(data);
            return data;
        }).catch((error)=>{
            const code = get_default()(error, "code");
            /**
         * Guesty does not provide meaningfull codes for
         * errors, so we assume that the `providerId` is incorrect
         * if code is `ERR_BAD_REQUEST`
         */ if (code === "ERR_BAD_REQUEST") {
                throw new PaymentBadRequestError();
            }
            throw error;
        }).catch((error)=>{
            setSubmitError(error);
            if (throwOnError) {
                throw error;
            }
            return null;
        }).finally(()=>{
            setIsSubmitting(false);
        });
    }, [
        tokenization,
        translate,
        timeout,
        throwOnError
    ]);
    const submit = (0,external_react_.useCallback)(()=>{
        submitAsync().catch(()=>{
        /**
       * We don't handle errors here since
       * it's a sync function by design, and
       * the error will be available via the
       * `submitError` property
       */ });
    }, [
        submitAsync
    ]);
    return {
        data,
        isRendering,
        isSubmitting,
        renderError,
        submitError,
        validate,
        submit,
        submitAsync,
        rerender: renderIframe
    };
};

// EXTERNAL MODULE: external "use-resize-observer"
var external_use_resize_observer_ = __webpack_require__(76819);
var external_use_resize_observer_default = /*#__PURE__*/__webpack_require__.n(external_use_resize_observer_);
;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/GuestyFormSkeleton/GuestyFormStylesContext.tsx




const GuestyFormStylesContext = /*#__PURE__*/ (0,external_react_.createContext)(null);
const GuestyFormStylesProvider = (props)=>{
    const { children , styles  } = props;
    const defaultStyles = useGuestyTokenizationStyles();
    const memoizedStyles = (0,useDeepMemo/* useDeepMemo */.v)(styles);
    const value = (0,external_react_.useMemo)(()=>({
            ...defaultStyles,
            ...memoizedStyles
        }), [
        defaultStyles,
        memoizedStyles
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(GuestyFormStylesContext.Provider, {
        value: value,
        children: children
    });
};
const useGuestyFormStylesContext = ()=>{
    const context = (0,external_react_.useContext)(GuestyFormStylesContext);
    if (!context) {
        throw Error("`useGuestyFormStylesContext` should only be used inside `GuestyFormStylesProvider`");
    }
    return context;
};

;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/GuestyFormSkeleton/HeadingSkeleton.tsx



const HeadingSkeleton = (props)=>{
    const { fontSizeLg  } = useGuestyFormStylesContext();
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
        variant: "rounded",
        width: 150,
        height: fontSizeLg,
        ...props
    });
};

;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/GuestyFormSkeleton/InputSkeleton.tsx



const InputSkeleton = (props)=>{
    const { inputHeight , fontSizeMd  } = useGuestyFormStylesContext();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                variant: "rounded",
                width: 80,
                height: fontSizeMd,
                sx: {
                    mb: 1
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                variant: "rounded",
                height: inputHeight
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/GuestyFormSkeleton/BillingAddressSkeleton.tsx





const BillingAddressSkeleton = (props)=>{
    const { width , ...rest } = props;
    const { mobileBreakpoint  } = useGuestyFormStylesContext();
    const isMobile = width <= mobileBreakpoint;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeadingSkeleton, {
                sx: {
                    mb: 2
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                display: "grid",
                gap: 3,
                gridTemplateColumns: "repeat(12, 1fr)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSkeleton, {
                        sx: {
                            gridColumn: `span ${isMobile ? 12 : 6}`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSkeleton, {
                        sx: {
                            gridColumn: `span ${isMobile ? 12 : 6}`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSkeleton, {
                        sx: {
                            gridColumn: `span ${isMobile ? 12 : 4}`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSkeleton, {
                        sx: {
                            gridColumn: `span ${isMobile ? 12 : 4}`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSkeleton, {
                        sx: {
                            gridColumn: `span ${isMobile ? 12 : 4}`
                        }
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/GuestyFormSkeleton/CardHolderNameSkeleton.tsx





const CardHolderNameSkeleton = (props)=>{
    const { width , ...rest } = props;
    const { mobileBreakpoint  } = useGuestyFormStylesContext();
    const isMobile = width <= mobileBreakpoint;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeadingSkeleton, {
                sx: {
                    mb: 2
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                display: "grid",
                gap: 3,
                gridTemplateColumns: "repeat(12, 1fr)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSkeleton, {
                        sx: {
                            gridColumn: `span ${isMobile ? 12 : 6}`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSkeleton, {
                        sx: {
                            gridColumn: `span ${isMobile ? 12 : 6}`
                        }
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/GuestyFormSkeleton/CardsAcceptedSkeleton.tsx



const CardsAcceptedSkeleton = (props)=>{
    const { fontSizeMd  } = useGuestyFormStylesContext();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        display: "flex",
        alignItems: "center",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                variant: "rounded",
                width: 100,
                height: fontSizeMd,
                sx: {
                    mr: 2
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                display: "flex",
                gap: 1,
                children: Array.from(Array(5), (_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                        variant: "rounded",
                        width: 30,
                        height: 20
                    }, index))
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/GuestyFormSkeleton/PaymentDetailsSkeleton.tsx





const PaymentDetailsSkeleton = (props)=>{
    const { width , ...rest } = props;
    const { mobileBreakpoint  } = useGuestyFormStylesContext();
    const isMobile = width <= mobileBreakpoint;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeadingSkeleton, {
                sx: {
                    mb: 2
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                display: "grid",
                gap: 3,
                gridTemplateColumns: "repeat(12, 1fr)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSkeleton, {
                        sx: {
                            gridColumn: `span ${isMobile ? 12 : 6}`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSkeleton, {
                        sx: {
                            gridColumn: `span ${isMobile ? 12 : 3}`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSkeleton, {
                        sx: {
                            gridColumn: `span ${isMobile ? 12 : 3}`
                        }
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/GuestyFormSkeleton/PCICompliantLinkSkeleton.tsx



const PCICompliantLinkSkeleton = (props)=>{
    const { fontSizeMd  } = useGuestyFormStylesContext();
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
        variant: "rounded",
        width: 180,
        height: fontSizeMd,
        ...props
    });
};

;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/GuestyFormSkeleton/GuestyFormSkeleton.tsx









const GuestyFormSkeleton = (props)=>{
    const { // guesty's defaults
    sections =[
        "cardholderName",
        "paymentDetails",
        "billingAddress"
    ] , showPciCompliantLink =true , showSupportedCards =true , styles , sx , className  } = props;
    /**
   * Since guesty form is an iframe, it considers the width of the container as a
   * viewport width, so we should rely not on the viewport width, but on the container's one
   */ const { ref , width =0  } = external_use_resize_observer_default()({
        box: "border-box"
    });
    const componentBySection = {
        billingAddress: BillingAddressSkeleton,
        cardholderName: CardHolderNameSkeleton,
        paymentDetails: PaymentDetailsSkeleton
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(GuestyFormStylesProvider, {
        styles: styles,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            ref: ref,
            sx: sx,
            className: className,
            children: [
                showSupportedCards && /*#__PURE__*/ jsx_runtime_.jsx(CardsAcceptedSkeleton, {
                    sx: {
                        mb: 35 / 8
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    display: "flex",
                    flexDirection: "column",
                    gap: 30 / 8,
                    children: sections.map((section)=>{
                        const Component = componentBySection[section];
                        return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            width: width
                        }, section);
                    })
                }),
                showPciCompliantLink && /*#__PURE__*/ jsx_runtime_.jsx(PCICompliantLinkSkeleton, {
                    sx: {
                        mt: 35 / 8
                    }
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/GuestyFormSkeleton/index.ts


;// CONCATENATED MODULE: ./src/components/custom/GuestyTokenization/index.ts






/***/ }),

/***/ 50018:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ StripeWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2591);
/* harmony import */ var _stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48719);
/* harmony import */ var custom_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76238);
/* harmony import */ var _getStripeFormAppearance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3243);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getStripeFormAppearance__WEBPACK_IMPORTED_MODULE_7__]);
_getStripeFormAppearance__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








/**
 * Wrapper for Payment element that handle Stripe render/load with
 * styles, loader, locale and handle error (IntegrationError: Missing
 * value for Stripe(): apiKey should be a string) on first initialization
 *
 * @param {string} clientKey - Client secret obtained from the server
 * @param {string} publicKey - Stripe public key obtained from the server
 * @see https://robertmarshall.dev/blog/dynamically-set-an-account-id-in-stripe-using-loadstripe/
 */ const StripeWrapper = (props)=>{
    const { clientKey , publicKey , children  } = props;
    const [stripeObject, setStripeObject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_5__/* .useLocaleContext */ .PE)();
    /**
   * An API call fetches a particular Stripe account ID depending on
   * the business that will be paid. This account ID will be passed to
   * the Stripe package.
   */ // This function will re-run if the publicKey prop changes
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchStripeObject = async ()=>{
            // If there is no publicKey, do not run the loadStripe function
            if (publicKey) {
                const res = await (0,_stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_4__.loadStripe)(publicKey);
                // When we have got the Stripe object, pass it into our useState
                setStripeObject(res);
            }
        };
        fetchStripeObject();
    }, [
        publicKey
    ]);
    // If no Stripe object, do not render the Stripe Element
    if (!stripeObject) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_Loader__WEBPACK_IMPORTED_MODULE_6__/* .Loader */ .a, {});
    }
    // Once we have the Stripe object, load everything
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.Elements, {
        stripe: stripeObject,
        options: {
            clientSecret: clientKey,
            locale: locale || "auto",
            appearance: (0,_getStripeFormAppearance__WEBPACK_IMPORTED_MODULE_7__/* .getStripeFormAppearance */ .n)(theme)
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3243:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ getStripeFormAppearance)
/* harmony export */ });
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_0__]);
theme_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getStripeFormAppearance = (theme)=>({
        rules: {
            ".Input": {
                backgroundColor: theme.palette.background.default,
                borderRadius: `${theme_index__WEBPACK_IMPORTED_MODULE_0__/* .INPUTS_BORDER_RADIUS_PX */ .EO}px`,
                height: "40px",
                padding: "12px 16px",
                lineHeight: theme.typography.pxToRem(16),
                fontWeight: "400",
                borderColor: theme.palette.primary.border,
                fontSize: theme.typography.pxToRem(12),
                boxShadow: "none",
                color: theme.palette.text.primary
            },
            ".Input::placeholder": {
                color: theme.palette.text.secondary
            },
            ".Input:hover": {
                borderColor: theme.palette.text.primary
            },
            ".Input:focus": {
                borderColor: theme.palette.primary.main,
                boxShadow: "none"
            },
            ".Input:hover:focus": {
                borderColor: theme.palette.primary.main
            },
            ".Label": {
                display: "block",
                position: "static",
                color: theme.palette.text.primary,
                marginBottom: "5px",
                fontSize: theme.typography.pxToRem(12),
                lineHeight: theme.typography.pxToRem(16),
                fontWeight: "600"
            }
        }
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57979:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _StripeWrapper__WEBPACK_IMPORTED_MODULE_0__.C)
/* harmony export */ });
/* harmony import */ var _StripeWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50018);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StripeWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_StripeWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47647:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ CheckoutForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59662);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27074);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11900);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41430);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_buttons_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49230);
/* harmony import */ var custom_GuestyTokenization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23154);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94605);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetListingDriverPaymentMethod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51115);
/* harmony import */ var hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15787);
/* harmony import */ var hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8459);
/* harmony import */ var hooks_queries_useRefreshListingDriverPaymentMethodMutation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96098);
/* harmony import */ var hooks_useForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1580);
/* harmony import */ var hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(59789);
/* harmony import */ var inputs_CheckboxInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55967);
/* harmony import */ var inputs_TextInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(52602);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var modals_CouponFormModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(24274);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var templates_GridItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(120);
/* harmony import */ var views_FormView__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(58403);
/* harmony import */ var views_SpecialCancellationPolicy__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(38282);
/* harmony import */ var _PaymentBlock__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(60485);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_4__, _packages_providers__WEBPACK_IMPORTED_MODULE_5__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_10__, hooks_index__WEBPACK_IMPORTED_MODULE_11__, hooks_queries_useGetListingDriverPaymentMethod__WEBPACK_IMPORTED_MODULE_12__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_13__, hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__, hooks_queries_useRefreshListingDriverPaymentMethodMutation__WEBPACK_IMPORTED_MODULE_15__, hooks_useForm__WEBPACK_IMPORTED_MODULE_16__, inputs_CheckboxInput__WEBPACK_IMPORTED_MODULE_18__, inputs_TextInput__WEBPACK_IMPORTED_MODULE_19__, modals_CouponFormModal__WEBPACK_IMPORTED_MODULE_21__, views_FormView__WEBPACK_IMPORTED_MODULE_24__, _PaymentBlock__WEBPACK_IMPORTED_MODULE_26__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_4__, _packages_providers__WEBPACK_IMPORTED_MODULE_5__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_10__, hooks_index__WEBPACK_IMPORTED_MODULE_11__, hooks_queries_useGetListingDriverPaymentMethod__WEBPACK_IMPORTED_MODULE_12__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_13__, hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__, hooks_queries_useRefreshListingDriverPaymentMethodMutation__WEBPACK_IMPORTED_MODULE_15__, hooks_useForm__WEBPACK_IMPORTED_MODULE_16__, inputs_CheckboxInput__WEBPACK_IMPORTED_MODULE_18__, inputs_TextInput__WEBPACK_IMPORTED_MODULE_19__, modals_CouponFormModal__WEBPACK_IMPORTED_MODULE_21__, views_FormView__WEBPACK_IMPORTED_MODULE_24__, _PaymentBlock__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























const CheckoutForm = (props)=>{
    const { amount , currencyCode , listingId , policy , quotesCancellationPolicy , coupon , setCoupon , ratePlanId  } = props;
    const { data: websiteData  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_11__/* .useGetWebsite */ .Rz)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const form = (0,hooks_useForm__WEBPACK_IMPORTED_MODULE_16__/* .useForm */ .c)({
        defaultValues: {
            [hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.is_apply_for_billing */ .vd.is_apply_for_billing]: true
        },
        validationSchema: hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .reservationFormValidationSchema */ .lc
    });
    const { formState: { isSubmitting  } , watch  } = form;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_11__/* .useTranslate */ .qM)({
        basePath: "forms.checkout"
    });
    const [tokenize, setTokenize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const isApplyForBilling = watch(hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.is_apply_for_billing */ .vd.is_apply_for_billing);
    const { enqueueSnackbar  } = (0,hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_17__/* .useSnackbar */ .D)();
    const { data: driverPaymentMethodData , error: driverPaymentMethodError , isFetching: isDriverPaymentMethodFetching , refetch: refetchPaymentMethod  } = (0,hooks_queries_useGetListingDriverPaymentMethod__WEBPACK_IMPORTED_MODULE_12__/* .useGetListingDriverPaymentMethod */ .X)(listingId);
    const driverPaymentMethodId = driverPaymentMethodData?.id;
    const driverPaymentMethodDriver = driverPaymentMethodData?.driver;
    const isGuestyPay = driverPaymentMethodDriver === _packages_providers__WEBPACK_IMPORTED_MODULE_5__/* .LISTING_DRIVER_PAYMENT_METHODS.guestyPay */ .lc.guestyPay;
    const isPaymentMethodAutoRefreshedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const { mutateAsync: refreshPaymentMethodMutation  } = (0,hooks_queries_useRefreshListingDriverPaymentMethodMutation__WEBPACK_IMPORTED_MODULE_15__/* .useRefreshListingDriverPaymentMethodMutation */ .z)(listingId, {
        onSuccess: ()=>refetchPaymentMethod()
    });
    const { mutateAsync: createReservation  } = (0,hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .useMutationReservation */ .KS)();
    const { [application_constants__WEBPACK_IMPORTED_MODULE_6__/* .CHECKIN_AT_SOURCE */ .I1]: checkinAtFilter , [application_constants__WEBPACK_IMPORTED_MODULE_6__/* .CHECKOUT_AT_SOURCE */ .ob]: checkoutAtFilter , [application_constants__WEBPACK_IMPORTED_MODULE_6__/* .ACCOMMODATES_SOURCE */ .s0]: accommodatesFilter  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_11__/* .useParsedMainURLFilters */ .EB)();
    const { setTrue: handleOpenCouponModal , setFalse: handleCloseCouponModal , value: isCouponModalOpen  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_4__/* .useBoolean */ .kt)(false);
    const refreshPaymentMethod = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        try {
            const message = translate("fallback_payment_provider_loading_message");
            enqueueSnackbar(message, {
                variant: "info"
            });
            await refreshPaymentMethodMutation();
        } catch (error) {
            const message = lodash_get__WEBPACK_IMPORTED_MODULE_20___default()(error, "message");
            enqueueSnackbar(message, {
                variant: "error"
            });
        }
    }, [
        enqueueSnackbar,
        refreshPaymentMethodMutation,
        translate
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (driverPaymentMethodError instanceof axios__WEBPACK_IMPORTED_MODULE_7__.AxiosError) {
            const status = driverPaymentMethodError.response?.status;
            if (status === 404 && !isPaymentMethodAutoRefreshedRef.current) {
                isPaymentMethodAutoRefreshedRef.current = true;
                refreshPaymentMethod();
            }
        }
    }, [
        driverPaymentMethodError,
        refreshPaymentMethod
    ]);
    const getCCToken = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!tokenize) return null;
        try {
            const token = await tokenize();
            return token;
        } catch (error) {
            if (error instanceof custom_GuestyTokenization__WEBPACK_IMPORTED_MODULE_9__/* .GuestySubmitTimeoutError */ .Wo || error instanceof custom_GuestyTokenization__WEBPACK_IMPORTED_MODULE_9__/* .GuestyPaymentBadRequestError */ .jP) {
                await refreshPaymentMethod();
                return;
            }
            const message = lodash_get__WEBPACK_IMPORTED_MODULE_20___default()(error, "message");
            enqueueSnackbar(message, {
                variant: "error"
            });
        }
    }, [
        tokenize,
        enqueueSnackbar,
        refreshPaymentMethod
    ]);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (values)=>{
        const guestData = lodash_get__WEBPACK_IMPORTED_MODULE_20___default()(values, hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.guest */ .vd.guest);
        const payerData = lodash_get__WEBPACK_IMPORTED_MODULE_20___default()(values, hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.payer */ .vd.payer);
        const token = await getCCToken();
        if (!token) return;
        const payerPayload = isGuestyPay ? undefined : isApplyForBilling ? guestData : payerData;
        const payload = {
            [hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.payer */ .vd.payer]: payerPayload,
            [hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.guest */ .vd.guest]: guestData,
            [hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.driver_payment_method_id */ .vd.driver_payment_method_id]: driverPaymentMethodId,
            [hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.rate_plan_id */ .vd.rate_plan_id]: ratePlanId,
            [hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.quote */ .vd.quote]: {
                [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_13__/* .QUOTES_SOURCES.checkin_at */ .nF.checkin_at]: checkinAtFilter,
                [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_13__/* .QUOTES_SOURCES.checkout_at */ .nF.checkout_at]: checkoutAtFilter,
                [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_13__/* .QUOTES_SOURCES.guest_count */ .nF.guest_count]: accommodatesFilter,
                [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_13__/* .QUOTES_SOURCES.coupon */ .nF.coupon]: coupon
            },
            [hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.cc_token */ .vd.cc_token]: token
        };
        try {
            const data = await createReservation({
                data: payload,
                listingId
            });
            const reference = lodash_get__WEBPACK_IMPORTED_MODULE_20___default()(data, hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .RESERVATION_RESPONSE_SOURCES.reference */ .YV.reference);
            next_router__WEBPACK_IMPORTED_MODULE_22___default().push({
                pathname: application_constants__WEBPACK_IMPORTED_MODULE_6__/* .thankYouRoute.getPathname */ .po.getPathname(reference)
            });
        } catch (error) {
            const message = lodash_get__WEBPACK_IMPORTED_MODULE_20___default()(error, "message");
            enqueueSnackbar({
                message,
                variant: "error"
            });
        }
    }, [
        getCCToken,
        isGuestyPay,
        isApplyForBilling,
        driverPaymentMethodId,
        ratePlanId,
        checkinAtFilter,
        checkoutAtFilter,
        accommodatesFilter,
        coupon,
        createReservation,
        listingId,
        enqueueSnackbar
    ]);
    const handleDeleteCoupon = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setCoupon(undefined);
    }, [
        setCoupon
    ]);
    const handleTokenizeChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((tokenize)=>{
        setTokenize(()=>tokenize);
    }, []);
    const companyName = lodash_get__WEBPACK_IMPORTED_MODULE_20___default()(websiteData, "company.name");
    const shouldDisableSubmit = !driverPaymentMethodId || !!driverPaymentMethodError || isDriverPaymentMethodFetching;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_CouponFormModal__WEBPACK_IMPORTED_MODULE_21__/* .CouponFormModal */ .Q, {
                defaultValue: coupon,
                setCoupon: setCoupon,
                listingId: listingId,
                open: isCouponModalOpen,
                onClose: handleCloseCouponModal,
                title: translate("coupon_modal_title")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(views_FormView__WEBPACK_IMPORTED_MODULE_24__/* .FormView */ .m, {
                ...form,
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "h6",
                                mb: 2,
                                children: translate("guest_details")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                container: true,
                                flexDirection: "row",
                                rowSpacing: 1,
                                columnSpacing: 3,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_23__/* .GridItem */ .P, {
                                        md: 6,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_TextInput__WEBPACK_IMPORTED_MODULE_19__/* .TextInput */ .o, {
                                            name: `${hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.guest */ .vd.guest}.${hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .GUEST_RESERVATION_SOURCES.first_name */ .RM.first_name}`,
                                            label: translate("inputs.first_name")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_23__/* .GridItem */ .P, {
                                        md: 6,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_TextInput__WEBPACK_IMPORTED_MODULE_19__/* .TextInput */ .o, {
                                            name: `${hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.guest */ .vd.guest}.${hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .GUEST_RESERVATION_SOURCES.last_name */ .RM.last_name}`,
                                            label: translate("inputs.last_name")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_23__/* .GridItem */ .P, {
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_TextInput__WEBPACK_IMPORTED_MODULE_19__/* .TextInput */ .o, {
                                            name: `${hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.guest */ .vd.guest}.${hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .GUEST_RESERVATION_SOURCES.email */ .RM.email}`,
                                            label: translate("inputs.email")
                                        })
                                    }),
                                    !isGuestyPay && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_23__/* .GridItem */ .P, {
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {
                                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_CheckboxInput__WEBPACK_IMPORTED_MODULE_18__/* .CheckboxInput */ .I, {
                                                name: hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.is_apply_for_billing */ .vd.is_apply_for_billing
                                            }),
                                            label: translate("is_apply_for_billing")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_23__/* .GridItem */ .P, {
                                        md: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                                            sx: {
                                                my: 2
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(templates_GridItem__WEBPACK_IMPORTED_MODULE_23__/* .GridItem */ .P, {
                                        md: 12,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        sx: {
                                            mb: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                variant: "h6",
                                                children: translate("pay_with")
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                sx: {
                                                    display: {
                                                        xs: "block",
                                                        md: "none"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_assets__WEBPACK_IMPORTED_MODULE_3__/* .VisaIcon */ .QH, {
                                                        sx: {
                                                            height: 16,
                                                            width: 50
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_assets__WEBPACK_IMPORTED_MODULE_3__/* .MastercardIcon */ .XT, {
                                                        sx: {
                                                            height: 16,
                                                            width: 26,
                                                            ml: 2
                                                        }
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    !isApplyForBilling ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_23__/* .GridItem */ .P, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                    variant: "h6",
                                                    children: translate("cardholder_name")
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_23__/* .GridItem */ .P, {
                                                md: 6,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_TextInput__WEBPACK_IMPORTED_MODULE_19__/* .TextInput */ .o, {
                                                    name: `${hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.payer */ .vd.payer}.${hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .PAYER_RESERVATION_SOURCES.first_name */ .rR.first_name}`,
                                                    label: translate("inputs.first_name")
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_23__/* .GridItem */ .P, {
                                                md: 6,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_TextInput__WEBPACK_IMPORTED_MODULE_19__/* .TextInput */ .o, {
                                                    name: `${hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.payer */ .vd.payer}.${hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .PAYER_RESERVATION_SOURCES.last_name */ .rR.last_name}`,
                                                    label: translate("inputs.last_name")
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_23__/* .GridItem */ .P, {
                                                md: 12,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_TextInput__WEBPACK_IMPORTED_MODULE_19__/* .TextInput */ .o, {
                                                    name: `${hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .CHECKOUT_FORM_SOURCES.payer */ .vd.payer}.${hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_14__/* .PAYER_RESERVATION_SOURCES.email */ .rR.email}`,
                                                    type: "email",
                                                    label: translate("inputs.email")
                                                })
                                            })
                                        ]
                                    }) : null,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_23__/* .GridItem */ .P, {
                                        xs: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PaymentBlock__WEBPACK_IMPORTED_MODULE_26__/* .PaymentBlock */ .u, {
                                            amount: amount,
                                            currency: currencyCode,
                                            listingId: listingId,
                                            onTokenizeChange: handleTokenizeChange
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                        item: true,
                                        md: 12,
                                        display: "flex",
                                        alignItems: "center",
                                        children: [
                                            coupon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                sx: {
                                                    alignItems: "center",
                                                    display: "flex",
                                                    mr: 2
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_10__/* .IcoMoon */ .n, {
                                                        icon: "check",
                                                        color: theme.palette.success.main
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                                        sx: {
                                                            ml: 1
                                                        },
                                                        variant: "subtitle2",
                                                        color: "success.main",
                                                        children: translate("coupon_activated_text")
                                                    })
                                                ]
                                            }) : null,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_buttons_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                                variant: "text",
                                                onClick: handleOpenCouponModal,
                                                children: coupon ? translate("coupon_edit_button_text") : translate("coupon_button_text")
                                            }),
                                            coupon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_buttons_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                                variant: "text",
                                                sx: {
                                                    ml: 1,
                                                    color: theme.palette.error.main,
                                                    textTransform: "initial"
                                                },
                                                onClick: handleDeleteCoupon,
                                                children: translate("coupon_delete_button_text")
                                            }) : null
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                        sx: {
                            my: 2
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        children: [
                            quotesCancellationPolicy ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_SpecialCancellationPolicy__WEBPACK_IMPORTED_MODULE_25__/* .SpecialCancellationPolicy */ .E, {
                                cancellationPolicy: quotesCancellationPolicy
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        variant: "h6",
                                        sx: {
                                            display: "block",
                                            mb: 2
                                        },
                                        children: translate.root("pages.checkout.policy_title")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        variant: "body1",
                                        mb: 1,
                                        children: policy
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                                sx: {
                                    my: 2
                                }
                            }),
                            companyName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "body1",
                                mb: {
                                    xs: 2,
                                    md: 1
                                },
                                children: translate.root("pages.checkout.agreement", {
                                    companyName
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "body1",
                                mb: 2,
                                children: translate.root("pages.checkout.additional_agreement")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_buttons_Button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                variant: "contained",
                                fullWidth: true,
                                type: "submit",
                                loading: isSubmitting,
                                disabled: shouldDisableSubmit,
                                children: translate.root("pages.checkout.confirm_button_text")
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49041:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ GuestyPayment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var custom_GuestyTokenization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23154);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53127);
/* harmony import */ var theme_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19018);
/* harmony import */ var _PaymentBlockError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PaymentBlockError__WEBPACK_IMPORTED_MODULE_5__]);
_PaymentBlockError__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const GuestyPayment = (props)=>{
    const { amount , currency , providerId , onTokenizeChange  } = props;
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .q)({
        basePath: "forms.checkout"
    });
    const containerId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { isRendering , isSubmitting , renderError , submitError , submitAsync , rerender  } = (0,custom_GuestyTokenization__WEBPACK_IMPORTED_MODULE_3__/* .useGuestyTokenization */ .v2)({
        amount,
        currency,
        containerId,
        providerId,
        apiVersion: "v2",
        throwOnError: true
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onTokenizeChange(submitAsync);
    }, [
        onTokenizeChange,
        submitAsync
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const container = containerRef.current;
        if (!container) return;
        if (submitError instanceof custom_GuestyTokenization__WEBPACK_IMPORTED_MODULE_3__/* .GuestySubmitValidationError */ .O_) {
            const { top: containerViewportTop  } = container.getBoundingClientRect();
            const scrolledHeight = window.scrollY;
            const containerDocumentTop = containerViewportTop + scrolledHeight;
            window.scrollTo({
                top: containerDocumentTop - theme_constants__WEBPACK_IMPORTED_MODULE_6__/* .HEADER_HEIGHT */ .Mz,
                behavior: "smooth"
            });
        }
    }, [
        submitError
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                ref: containerRef,
                id: containerId,
                /**
         * We don't do `display: none` to make sure the guesty script
         * not loses the iframe element inside
         */ sx: isRendering || isSubmitting ? {
                    visibility: "hidden",
                    position: "absolute"
                } : {}
            }),
            renderError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PaymentBlockError__WEBPACK_IMPORTED_MODULE_5__/* .PaymentBlockError */ .J, {
                error: translate("guesty_pay_render_error"),
                onTryAgain: rerender
            }) : null,
            isSubmitting || isRendering ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_GuestyTokenization__WEBPACK_IMPORTED_MODULE_3__/* .GuestyFormSkeleton */ .zu, {}) : null
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16828:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ NoPaymentMethodBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22825);
/* harmony import */ var components_links_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50682);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19594);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53127);
/* harmony import */ var views_NotificationView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23890);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_NotificationView__WEBPACK_IMPORTED_MODULE_4__]);
views_NotificationView__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const NoPaymentMethodBlock = ()=>{
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .q)({
        basePath: "forms.checkout"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_NotificationView__WEBPACK_IMPORTED_MODULE_4__/* .NotificationView */ .D, {
        title: translate("no_payment_method_supported_message_title"),
        severity: "warning",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
            children: [
                translate("no_payment_method_supported_message_part1"),
                " ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_links_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    target: "_blank",
                    variant: "body2",
                    t: translate("contact_us"),
                    href: {
                        pathname: `/${application_resources__WEBPACK_IMPORTED_MODULE_5__/* .CONTACT_US_RESOURCE */ .yc}`
                    }
                }),
                " ",
                translate("no_payment_method_supported_message_part2")
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ PaymentBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11900);
/* harmony import */ var custom_GuestyTokenization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23154);
/* harmony import */ var custom_StripeWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57979);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetListingDriverPaymentMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51115);
/* harmony import */ var hooks_queries_useRefreshListingDriverPaymentMethodMutation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96098);
/* harmony import */ var _GuestyPayment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49041);
/* harmony import */ var _NoPaymentMethodBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16828);
/* harmony import */ var _PaymentBlockError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8103);
/* harmony import */ var _PaymentBlockLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86731);
/* harmony import */ var _StripePayment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38261);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_1__, custom_StripeWrapper__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_4__, hooks_queries_useGetListingDriverPaymentMethod__WEBPACK_IMPORTED_MODULE_5__, hooks_queries_useRefreshListingDriverPaymentMethodMutation__WEBPACK_IMPORTED_MODULE_6__, _GuestyPayment__WEBPACK_IMPORTED_MODULE_7__, _NoPaymentMethodBlock__WEBPACK_IMPORTED_MODULE_8__, _PaymentBlockError__WEBPACK_IMPORTED_MODULE_9__, _StripePayment__WEBPACK_IMPORTED_MODULE_11__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_1__, custom_StripeWrapper__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_4__, hooks_queries_useGetListingDriverPaymentMethod__WEBPACK_IMPORTED_MODULE_5__, hooks_queries_useRefreshListingDriverPaymentMethodMutation__WEBPACK_IMPORTED_MODULE_6__, _GuestyPayment__WEBPACK_IMPORTED_MODULE_7__, _NoPaymentMethodBlock__WEBPACK_IMPORTED_MODULE_8__, _PaymentBlockError__WEBPACK_IMPORTED_MODULE_9__, _StripePayment__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const PaymentBlock = (props)=>{
    const { amount , currency , listingId , onTokenizeChange  } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .qM)({
        basePath: "forms.checkout"
    });
    const { data: driverPaymentMethod , isInitialLoading: isPaymentMethodLoading  } = (0,hooks_queries_useGetListingDriverPaymentMethod__WEBPACK_IMPORTED_MODULE_5__/* .useGetListingDriverPaymentMethod */ .X)(listingId);
    const { isLoading: isPaymentMethodRefreshing  } = (0,hooks_queries_useRefreshListingDriverPaymentMethodMutation__WEBPACK_IMPORTED_MODULE_6__/* .useRefreshListingDriverPaymentMethodMutation */ .z)(listingId);
    if (isPaymentMethodLoading || isPaymentMethodRefreshing) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PaymentBlockLoader__WEBPACK_IMPORTED_MODULE_10__/* .PaymentBlockLoader */ .i, {});
    }
    if (!driverPaymentMethod) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NoPaymentMethodBlock__WEBPACK_IMPORTED_MODULE_8__/* .NoPaymentMethodBlock */ .P, {});
    }
    const { driver  } = driverPaymentMethod;
    if (driver === _packages_providers__WEBPACK_IMPORTED_MODULE_1__/* .LISTING_DRIVER_PAYMENT_METHODS.stripe */ .lc.stripe) {
        const { metadata: { public_key , setup_payment_intent_key  }  } = driverPaymentMethod;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_StripeWrapper__WEBPACK_IMPORTED_MODULE_3__/* .StripeWrapper */ .C, {
            clientKey: setup_payment_intent_key,
            publicKey: public_key,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StripePayment__WEBPACK_IMPORTED_MODULE_11__/* .StripePayment */ .j, {
                onTokenizeChange: onTokenizeChange
            })
        });
    }
    if (driver === _packages_providers__WEBPACK_IMPORTED_MODULE_1__/* .LISTING_DRIVER_PAYMENT_METHODS.guestyPay */ .lc.guestyPay) {
        const { metadata: { payment_provider_id  }  } = driverPaymentMethod;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_GuestyTokenization__WEBPACK_IMPORTED_MODULE_2__/* .GuestyTokenizationWrapper */ .G_, {
            renderError: (_, retry)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PaymentBlockError__WEBPACK_IMPORTED_MODULE_9__/* .PaymentBlockError */ .J, {
                    error: translate("guesty_pay_render_error"),
                    onTryAgain: retry
                }),
            renderLoader: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PaymentBlockLoader__WEBPACK_IMPORTED_MODULE_10__/* .PaymentBlockLoader */ .i, {}),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GuestyPayment__WEBPACK_IMPORTED_MODULE_7__/* .GuestyPayment */ .C, {
                amount: amount,
                currency: currency,
                providerId: payment_provider_id,
                onTokenizeChange: onTokenizeChange
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NoPaymentMethodBlock__WEBPACK_IMPORTED_MODULE_8__/* .NoPaymentMethodBlock */ .P, {});
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ PaymentBlockError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92552);
/* harmony import */ var views_NotificationView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23890);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_2__, views_NotificationView__WEBPACK_IMPORTED_MODULE_3__]);
([hooks_index__WEBPACK_IMPORTED_MODULE_2__, views_NotificationView__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const PaymentBlockError = (props)=>{
    const { error , onTryAgain  } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_2__/* .useTranslate */ .qM)({
        basePath: "forms.checkout"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(views_NotificationView__WEBPACK_IMPORTED_MODULE_3__/* .NotificationView */ .D, {
        severity: "error",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                children: error
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                color: "error",
                onClick: onTryAgain,
                children: translate("buttons.try_again")
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ PaymentBlockLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


const PaymentBlockLoader = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 300,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CircularProgress, {})
    });
};


/***/ }),

/***/ 38261:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ StripePayment)
/* harmony export */ });
/* unused harmony export StripePaymentClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62430);
/* harmony import */ var _useStripeTokenization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_6__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PREFIX = "StripePayment";
const StripePaymentClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.generateUtilityClasses)(PREFIX, [
    "paymentElement"
]);
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_6__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>{
    return {
        [`& .${StripePaymentClasses.paymentElement}`]: {
            width: "100%"
        }
    };
});
const StripePayment = (props)=>{
    const { onTokenizeChange  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const origin = _packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .isBrowser */ .jU && window.location.origin ? window.location.origin : "";
    const currentUrl = `${origin}${router.asPath}`;
    const { submitAsync  } = (0,_useStripeTokenization__WEBPACK_IMPORTED_MODULE_7__/* .useStripeTokenization */ .s)({
        return_url: currentUrl,
        throwOnError: true
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onTokenizeChange(submitAsync);
    }, [
        submitAsync,
        onTokenizeChange
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledRoot, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.PaymentElement, {
            className: StripePaymentClasses.paymentElement
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* reexport safe */ _CheckoutForm__WEBPACK_IMPORTED_MODULE_0__.d)
/* harmony export */ });
/* harmony import */ var _CheckoutForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47647);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CheckoutForm__WEBPACK_IMPORTED_MODULE_0__]);
_CheckoutForm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ useStripeTokenization)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useDeepMemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28188);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53127);




const useStripeTokenization = (params)=>{
    const { throwOnError , ...confirmParams } = params || {};
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .q)({
        basePath: "components.snackbar_error"
    });
    const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useStripe)();
    const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useElements)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const memoizedConfirmParams = (0,hooks_useDeepMemo__WEBPACK_IMPORTED_MODULE_2__/* .useDeepMemo */ .v)(confirmParams);
    const submitAsync = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            return null;
        }
        setIsLoading(true);
        // Send request to the Stripe
        const result = await stripe.confirmSetup({
            elements,
            redirect: "if_required",
            // `expand: undefined` since we want only payment_method string id, and not the object
            confirmParams: {
                ...memoizedConfirmParams,
                expand: undefined
            }
        });
        setIsLoading(false);
        if (result.error) {
            const error = Error(result.error.message || translate("title"));
            setError(error);
            if (throwOnError) {
                throw error;
            }
        }
        // String or null without PaymenMethod type since we want only id
        const data = result.setupIntent?.payment_method ?? null;
        setData(data);
        return data;
    }, [
        stripe,
        elements,
        memoizedConfirmParams,
        translate,
        throwOnError
    ]);
    const submit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        submitAsync().catch(()=>{
        /**
       * We don't handle errors here since
       * it's a sync function by design, and
       * the error will be available via the
       * `error` property
       */ });
    }, [
        submitAsync
    ]);
    return {
        data,
        error,
        isLoading,
        submit,
        submitAsync
    };
};


/***/ }),

/***/ 92953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ CheckboxInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CheckboxInput = (props)=>{
    const { name , defaultValue , rules , control , shouldUnregister , ...checkboxProps } = props;
    const { field: { value , ...field }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useController)({
        name,
        defaultValue,
        rules,
        control,
        shouldUnregister
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        ...field,
        checked: value,
        ...checkboxProps
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55967:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* reexport safe */ _CheckboxInput__WEBPACK_IMPORTED_MODULE_0__.I)
/* harmony export */ });
/* harmony import */ var _CheckboxInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CheckboxInput__WEBPACK_IMPORTED_MODULE_0__]);
_CheckboxInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ CouponFormModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15787);
/* harmony import */ var hooks_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1580);
/* harmony import */ var hooks_useParsedMainURLFilters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98162);
/* harmony import */ var inputs_TextInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52602);
/* harmony import */ var modals_ModalBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37622);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45641);
/* harmony import */ var views_FormView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58403);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_4__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_5__, hooks_useForm__WEBPACK_IMPORTED_MODULE_6__, hooks_useParsedMainURLFilters__WEBPACK_IMPORTED_MODULE_7__, inputs_TextInput__WEBPACK_IMPORTED_MODULE_8__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_9__, react_hook_form__WEBPACK_IMPORTED_MODULE_10__, views_FormView__WEBPACK_IMPORTED_MODULE_11__]);
([hooks_index__WEBPACK_IMPORTED_MODULE_4__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_5__, hooks_useForm__WEBPACK_IMPORTED_MODULE_6__, hooks_useParsedMainURLFilters__WEBPACK_IMPORTED_MODULE_7__, inputs_TextInput__WEBPACK_IMPORTED_MODULE_8__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_9__, react_hook_form__WEBPACK_IMPORTED_MODULE_10__, views_FormView__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const CouponForm = (props)=>{
    const { isLoading  } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .qM)({
        basePath: "modals.coupon"
    });
    const couponValue = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useWatch)({
        name: hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_5__/* .QUOTES_SOURCES.coupon */ .nF.coupon
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_TextInput__WEBPACK_IMPORTED_MODULE_8__/* .TextInput */ .o, {
                sx: {
                    mt: 1
                },
                name: hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_5__/* .QUOTES_SOURCES.coupon */ .nF.coupon,
                placeholder: translate("placeholder")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                fullWidth: true,
                variant: "contained",
                disabled: isLoading || !couponValue,
                type: "submit",
                sx: {
                    mt: 2
                },
                children: translate.root("buttons.apply")
            })
        ]
    });
};
const CouponFormModal = (props)=>{
    const { onClose , listingId , setCoupon , defaultValue  } = props;
    const { [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHECKIN_AT_SOURCE */ .I1]: checkinAtFilter , [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHECKOUT_AT_SOURCE */ .ob]: checkoutAtFilter , [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .ACCOMMODATES_SOURCE */ .s0]: accommodatesFilter  } = (0,hooks_useParsedMainURLFilters__WEBPACK_IMPORTED_MODULE_7__/* .useParsedMainURLFilters */ .E)();
    const quotesParams = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_5__/* .QUOTES_SOURCES.checkin_at */ .nF.checkin_at]: checkinAtFilter,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_5__/* .QUOTES_SOURCES.checkout_at */ .nF.checkout_at]: checkoutAtFilter,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_5__/* .QUOTES_SOURCES.guest_count */ .nF.guest_count]: accommodatesFilter
        }), [
        accommodatesFilter,
        checkinAtFilter,
        checkoutAtFilter
    ]);
    const form = (0,hooks_useForm__WEBPACK_IMPORTED_MODULE_6__/* .useForm */ .c)({
        defaultValues: {
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_5__/* .QUOTES_SOURCES.coupon */ .nF.coupon]: defaultValue
        }
    });
    const { watch , reset  } = form;
    const coupon = watch(hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_5__/* .QUOTES_SOURCES.coupon */ .nF.coupon);
    const { refetch , isFetching  } = (0,hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_5__/* .useGetQuotes */ .j2)({
        listingId,
        data: {
            ...quotesParams,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_5__/* .QUOTES_SOURCES.coupon */ .nF.coupon]: coupon
        }
    }, {
        enabled: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        reset({
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_5__/* .QUOTES_SOURCES.coupon */ .nF.coupon]: defaultValue
        });
    }, [
        defaultValue,
        reset
    ]);
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        const { data: quotesResultData  } = await refetch({
            throwOnError: true
        });
        const coupon = quotesResultData?.discount?.coupon;
        if (coupon) {
            setCoupon(coupon);
        }
        if (onClose) {
            onClose({}, "backdropClick");
        }
    }, [
        onClose,
        refetch,
        setCoupon
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_ModalBase__WEBPACK_IMPORTED_MODULE_9__/* .ModalBase */ .e, {
        onClose: onClose,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_FormView__WEBPACK_IMPORTED_MODULE_11__/* .FormView */ .m, {
            ...form,
            onSubmit: handleSubmit,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CouponForm, {
                isLoading: isFetching
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* reexport safe */ _CouponFormModal__WEBPACK_IMPORTED_MODULE_0__.Q)
/* harmony export */ });
/* harmony import */ var _CouponFormModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75684);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CouponFormModal__WEBPACK_IMPORTED_MODULE_0__]);
_CouponFormModal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14005:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ CheckoutPage)
/* harmony export */ });
/* unused harmony export CheckoutPageClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var buttons_BackButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31699);
/* harmony import */ var components_forms_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1915);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19594);
/* harmony import */ var custom_CheckoutDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95986);
/* harmony import */ var helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12764);
/* harmony import */ var helpers_getFormattedDateRange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89382);
/* harmony import */ var helpers_getNormalizedQuoteData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70896);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15787);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40420);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var templates_WithStickySectionWrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(715);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([buttons_BackButton__WEBPACK_IMPORTED_MODULE_4__, components_forms_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__, custom_CheckoutDetails__WEBPACK_IMPORTED_MODULE_7__, hooks_index__WEBPACK_IMPORTED_MODULE_11__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__, theme_index__WEBPACK_IMPORTED_MODULE_18__]);
([buttons_BackButton__WEBPACK_IMPORTED_MODULE_4__, components_forms_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__, custom_CheckoutDetails__WEBPACK_IMPORTED_MODULE_7__, hooks_index__WEBPACK_IMPORTED_MODULE_11__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__, theme_index__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const DATE_FORMAT = "PP";
const PREFIX = "CheckoutPage";
const CheckoutPageClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.generateUtilityClasses)(PREFIX, [
    "header"
]);
const StyledCheckoutPageContainer = (0,theme_index__WEBPACK_IMPORTED_MODULE_18__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    const mobileBreakpoint = theme.breakpoints.down("md");
    return {
        [`&& .${CheckoutPageClasses.header}`]: {
            display: "flex",
            alignItems: "center",
            margin: theme.spacing(3, 0, 3),
            [mobileBreakpoint]: {
                margin: theme.spacing(1, 0, 2)
            }
        }
    };
});
const CheckoutPage = (props)=>{
    const { listingData: { title , gallery , formatted_filters , id , currency , address  }  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();
    const { [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHECKIN_AT_SOURCE */ .I1]: checkinAtFilter , [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHECKOUT_AT_SOURCE */ .ob]: checkoutAtFilter , [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .ACCOMMODATES_SOURCE */ .s0]: accommodatesFilter  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_11__/* .useParsedMainURLFilters */ .EB)();
    const parseQuotesResult = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const quotesParams = {
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__/* .QUOTES_SOURCES.checkin_at */ .nF.checkin_at]: checkinAtFilter,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__/* .QUOTES_SOURCES.checkout_at */ .nF.checkout_at]: checkoutAtFilter,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__/* .QUOTES_SOURCES.guest_count */ .nF.guest_count]: accommodatesFilter
        };
        return hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__/* .quotesFormValidationSchema.safeParse */ .ul.safeParse(quotesParams);
    }, [
        accommodatesFilter,
        checkinAtFilter,
        checkoutAtFilter
    ]);
    const { data: quotesData , isInitialLoading: isQuotesInitialLoading , isError: isQuotesError  } = (0,hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_12__/* .useGetQuotes */ .j2)({
        data: parseQuotesResult.success && parseQuotesResult.data,
        listingId: id
    }, {
        enabled: parseQuotesResult.success,
        retryOnMount: false
    });
    const { cancellationPolicy: quotesCancellationPolicy , hostPayout , currencyCode  } = (0,helpers_getNormalizedQuoteData__WEBPACK_IMPORTED_MODULE_10__/* .getNormalizedQuoteData */ .n)({
        data: quotesData
    });
    const [coupon, setCoupon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [ratePlanId, setRatePlanId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_11__/* .useTranslate */ .qM)({
        basePath: "pages.checkout"
    });
    const cancellationPolicyFormattedFilters = formatted_filters.filter((v)=>v.filter_attribute?.slug === application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CANCELLATION_POLICY_SOURCE */ .fY);
    const [accommodates, bedrooms, bathrooms, rating, ratingCount] = (0,helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_8__/* .getFilterValues */ .i)({
        formattedFilters: formatted_filters,
        slugs: [
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .ACCOMMODATES_SOURCE */ .s0,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BEDROOMS_SOURCE */ .Bt,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BATHROOMS_SOURCE */ .qA,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .RATING_SLUG */ .gd,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .RATING_COUNT_SLUG */ .BN
        ]
    });
    const listingSlug = lodash_get__WEBPACK_IMPORTED_MODULE_13___default()(router, `query.${application_constants__WEBPACK_IMPORTED_MODULE_3__/* .listingRoute.param */ .oo.param}`) || "";
    const backButtonClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        router.push({
            pathname: application_constants__WEBPACK_IMPORTED_MODULE_3__/* .listingRoute.getPathname */ .oo.getPathname(listingSlug),
            query: lodash_omit__WEBPACK_IMPORTED_MODULE_14___default()(router.query, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .listingRoute.param */ .oo.param)
        });
    }, [
        listingSlug,
        router
    ]);
    const setRatePlanIdHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>{
        setRatePlanId(id);
    }, []);
    const bedroomsCount = bedrooms?.value;
    const bathroomsCount = bathrooms?.value;
    const accommodatesCount = accommodates?.value;
    const bedroomsLabel = bedrooms?.filterAttribute?.title;
    const bathroomsLabel = bathrooms?.filterAttribute?.title;
    const accommodatesLabel = translate.root("custom.guest");
    const checkoutDetailsProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return {
            listingId: id,
            title,
            address,
            mainAmenities: [
                {
                    id: "1",
                    value: bedroomsCount,
                    label: bedroomsLabel
                },
                {
                    id: "2",
                    value: bathroomsCount,
                    label: bathroomsLabel
                },
                {
                    id: "3",
                    value: accommodatesCount,
                    label: accommodatesLabel
                }
            ],
            src: gallery?.[0]?.src || "",
            rating: Number(rating?.value) || 0,
            reviewsCount: Number(ratingCount?.value) || 0,
            currency,
            coupon,
            setRatePlanId: setRatePlanIdHandler
        };
    }, [
        id,
        title,
        address,
        bedroomsCount,
        bedroomsLabel,
        bathroomsCount,
        bathroomsLabel,
        accommodatesCount,
        accommodatesLabel,
        gallery,
        rating?.value,
        ratingCount?.value,
        currency,
        coupon,
        setRatePlanIdHandler
    ]);
    const formattedDateRange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return (0,helpers_getFormattedDateRange__WEBPACK_IMPORTED_MODULE_9__/* .getFormattedDateRange */ .s)({
            startDate: new Date(checkinAtFilter),
            endDate: new Date(checkoutAtFilter),
            dateDisplayFormat: DATE_FORMAT
        });
    }, [
        checkinAtFilter,
        checkoutAtFilter
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCheckoutPageContainer, {
        maxWidth: "md",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                className: CheckoutPageClasses.header,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_BackButton__WEBPACK_IMPORTED_MODULE_4__/* .BackButton */ .x, {
                        onClick: backButtonClick
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            ml: 2
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, {
                                variant: "h5",
                                children: "pages.checkout.title"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, {
                                variant: "subtitle1",
                                children: "pages.checkout.subtitle"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    display: {
                        sm: "none"
                    },
                    mb: 2
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_CheckoutDetails__WEBPACK_IMPORTED_MODULE_7__/* .CheckoutDetails */ .H, {
                    ...checkoutDetailsProps
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(templates_WithStickySectionWrapper__WEBPACK_IMPORTED_MODULE_17__/* .WithStickySectionWrapper */ .R, {
                sx: {
                    gap: 3
                },
                stickyElement: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_CheckoutDetails__WEBPACK_IMPORTED_MODULE_7__/* .CheckoutDetails */ .H, {
                    ...checkoutDetailsProps
                }),
                sxStickyElement: {
                    display: {
                        xs: "none",
                        sm: "block"
                    },
                    flexBasis: "50%"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            flexBasis: "50%"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, {
                                variant: "h6",
                                mb: 2,
                                children: translate("details_title")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    mb: 2
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, {
                                        sx: {
                                            display: "block",
                                            mb: 0.5
                                        },
                                        variant: "body2",
                                        children: translate("dates")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, {
                                        variant: "body1",
                                        children: formattedDateRange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, {
                                        sx: {
                                            display: "block",
                                            mb: 0.5
                                        },
                                        variant: "body2",
                                        children: translate("guests")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, {
                                        variant: "body1",
                                        children: pluralize__WEBPACK_IMPORTED_MODULE_16___default()(translate("guests_count", {
                                            value: accommodatesFilter
                                        }), accommodatesFilter)
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                        sx: {
                            my: 2
                        }
                    }),
                    !isQuotesInitialLoading && !isQuotesError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_forms_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__/* .CheckoutForm */ .d, {
                        amount: hostPayout,
                        currencyCode: currencyCode,
                        coupon: coupon,
                        setCoupon: setCoupon,
                        listingId: id,
                        policy: cancellationPolicyFormattedFilters.map((v)=>v.amount || ""),
                        quotesCancellationPolicy: quotesCancellationPolicy,
                        ratePlanId: ratePlanId
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* reexport safe */ _CheckoutPage__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _CheckoutPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14005);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CheckoutPage__WEBPACK_IMPORTED_MODULE_0__]);
_CheckoutPage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ SpecialCancellationPolicy)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ../../packages/assets/src/index.ts + 8 modules
var src = __webpack_require__(59662);
// EXTERNAL MODULE: ./src/components/Typography/index.ts + 1 modules
var Typography = __webpack_require__(19594);
;// CONCATENATED MODULE: ./src/components/views/SpecialCancellationPolicy/SpecialCancellationPolicy.tsx




const SpecialCancellationPolicy = (props)=>{
    const { cancellationPolicy , title ="custom.special_cancellation_policy" , className , sx  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            borderColor: "primary.border",
            backgroundColor: "background.default",
            borderRadius: 4,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            ...sx
        },
        border: 1,
        className: className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    wordBreak: "break-word",
                    whiteSpace: "pre-wrap"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography */.Z, {
                        variant: "subtitle2",
                        mb: 1,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography */.Z, {
                        variant: "body1",
                        color: "text.light",
                        children: cancellationPolicy
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(src/* PlaneIcon */.aF, {})
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/views/SpecialCancellationPolicy/index.ts



/***/ }),

/***/ 51115:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* reexport safe */ _useGetListingDriverPaymentMethod__WEBPACK_IMPORTED_MODULE_0__.X)
/* harmony export */ });
/* harmony import */ var _useGetListingDriverPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useGetListingDriverPaymentMethod__WEBPACK_IMPORTED_MODULE_0__]);
_useGetListingDriverPaymentMethod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38000:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ useGetListingDriverPaymentMethod)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const getQueryKey = (listingidOrSlug)=>[
        application_resources__WEBPACK_IMPORTED_MODULE_2__/* .LISTINGS_RESOURCE */ .t8,
        listingidOrSlug,
        "driver-payment-method"
    ];
const queryFn = async (params)=>{
    const { queryKey  } = params;
    const [, listingIdOrSlug] = queryKey;
    const { data  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.get */ .zk.get({
        pathname: `${application_resources__WEBPACK_IMPORTED_MODULE_2__/* .LISTINGS_RESOURCE */ .t8}/${listingIdOrSlug}/driver-payment-method`
    });
    return _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodListingDriverPaymentMethodSchema.parse */ .H1.parse(data.data);
};
const useGetListingDriverPaymentMethod = (listingidOrSlug)=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: getQueryKey(listingidOrSlug),
        queryFn,
        refetchOnMount: false,
        enabled: !!listingidOrSlug
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* reexport safe */ _useRefreshListingDriverPaymentMethodMutation__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _useRefreshListingDriverPaymentMethodMutation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useRefreshListingDriverPaymentMethodMutation__WEBPACK_IMPORTED_MODULE_0__]);
_useRefreshListingDriverPaymentMethodMutation__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useRefreshListingDriverPaymentMethodMutation)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const getMutationFn = (listingidOrSlug)=>{
    return async ()=>{
        const { data  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.get */ .zk.get({
            pathname: `${application_resources__WEBPACK_IMPORTED_MODULE_2__/* .LISTINGS_RESOURCE */ .t8}/${listingidOrSlug}/driver-payment-method`
        }, {
            params: {
                force_refresh: 1
            }
        });
        return _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodListingDriverPaymentMethodSchema.parse */ .H1.parse(data.data);
    };
};
const useRefreshListingDriverPaymentMethodMutation = (listingidOrSlug, options)=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: getMutationFn(listingidOrSlug),
        ...options
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

/***/ 58097:
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 64515:
/***/ ((module) => {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ 2591:
/***/ ((module) => {

module.exports = require("@stripe/stripe-js/pure");

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

/***/ 59591:
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ 93908:
/***/ ((module) => {

module.exports = require("lodash/debounce");

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

/***/ 22133:
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ 9941:
/***/ ((module) => {

module.exports = require("lodash/mapValues");

/***/ }),

/***/ 61831:
/***/ ((module) => {

module.exports = require("lodash/merge");

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

/***/ 23599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [97,487,876,577,789,975,31,367,54,319,822,622,268,797,370,201,459,286], () => (__webpack_exec__(20830)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=[slug].js.map