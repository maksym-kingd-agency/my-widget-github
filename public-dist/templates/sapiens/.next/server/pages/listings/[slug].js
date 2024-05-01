"use strict";
(() => {
var exports = {};
exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 28760:
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
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41430);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22825);
/* harmony import */ var components_layouts_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22294);
/* harmony import */ var components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11762);
/* harmony import */ var components_pageTemplates_ListingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74722);
/* harmony import */ var contexts_ListContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56388);
/* harmony import */ var helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71093);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63858);
/* harmony import */ var hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82153);
/* harmony import */ var providers_GoogleMapsAPIProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85871);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, components_layouts_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__, components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__, components_pageTemplates_ListingPage__WEBPACK_IMPORTED_MODULE_7__, helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_9__, hooks_index__WEBPACK_IMPORTED_MODULE_10__, hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_11__, hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_12__, providers_GoogleMapsAPIProvider__WEBPACK_IMPORTED_MODULE_13__, theme_index__WEBPACK_IMPORTED_MODULE_14__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, components_layouts_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__, components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__, components_pageTemplates_ListingPage__WEBPACK_IMPORTED_MODULE_7__, helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_9__, hooks_index__WEBPACK_IMPORTED_MODULE_10__, hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_11__, hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_12__, providers_GoogleMapsAPIProvider__WEBPACK_IMPORTED_MODULE_13__, theme_index__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const PREFIX = "ListingShow";
const StyledListingShow = (0,theme_index__WEBPACK_IMPORTED_MODULE_14__/* .styled */ .zo)("div", {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>({
        [`&& .${components_layouts_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__/* .FooterClasses.root */ .GR.root}`]: {
            [theme.breakpoints.down("md")]: {
                marginBottom: theme_index__WEBPACK_IMPORTED_MODULE_14__/* .MOBILE_FIXED_BOTTOM_SECTION_HEIGHT */ ._G
            }
        }
    }));
const ListingShow = (props)=>{
    const { referer  } = props;
    const { data: listing , isSuccess  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_10__/* .useGetListing */ .Mw)();
    /* We use SSR 'referer' for initial render and change it with 'href' soon */ const url = _packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .isBrowser */ .jU ? window.location.href : referer ?? "";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(providers_GoogleMapsAPIProvider__WEBPACK_IMPORTED_MODULE_13__/* .GoogleMapsAPIProvider */ .q, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(contexts_ListContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(components_pageTemplates_ListingPage__WEBPACK_IMPORTED_MODULE_7__/* .ListingPageSeoProvider */ .jQ, {
                    url: url
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledListingShow, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__/* .MainLayout */ .Z, {
                        children: isSuccess && listing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(components_pageTemplates_ListingPage__WEBPACK_IMPORTED_MODULE_7__/* .ListingPage */ .Z9, {
                            data: listing,
                            url: url
                        })
                    })
                })
            ]
        })
    });
};
const getServerSideProps$1 = (0,helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_9__/* .withServerSideProps */ .l)({
    enableRequestsOnClientSideTransition: true,
    fetchers: [
        hooks_index__WEBPACK_IMPORTED_MODULE_10__/* .prefetchListing */ .KC,
        hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_11__/* .prefetchCurrencies */ .GJ,
        hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_12__/* .prefetchLocales */ .n,
        hooks_index__WEBPACK_IMPORTED_MODULE_10__/* .prefetchFilterAttributes */ .PK
    ],
    handler: (queryClient, context, props)=>{
        const { req , query  } = context;
        const listingIdOrSlug = query?.[application_constants__WEBPACK_IMPORTED_MODULE_4__/* .listingRoute.param */ .oo.param];
        const listing = queryClient.getQueryData([
            application_resources__WEBPACK_IMPORTED_MODULE_15__/* .LISTINGS_RESOURCE */ .t8,
            listingIdOrSlug
        ]);
        if (!listing) {
            return {
                notFound: true
            };
        }
        const { referer =null  } = req.headers;
        return {
            props: {
                ...props,
                referer
            }
        };
    }
});

var serverComponentModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': ListingShow,
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

const getInitialPropsWrapper = getInitialPropsWrappers['/listings/[slug]'] || _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetInitialPropsWithSentry;

if (pageComponent && typeof origGetInitialProps === 'function') {
  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;
}

const getStaticProps =
  typeof origGetStaticProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetStaticPropsWithSentry(origGetStaticProps, '/listings/[slug]')
    : undefined;
const getServerSideProps =
  typeof origGetServerSideProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/listings/[slug]')
    : undefined;

const pageWrapperTemplate = pageComponent ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapPageComponentWithSentry(pageComponent ) : pageComponent;



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ getDistanceMatricesResource)
/* harmony export */ });
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22825);

const getDistanceMatricesResource = (params)=>{
    const { listingId  } = params;
    return `${application_resources__WEBPACK_IMPORTED_MODULE_0__/* .LISTINGS_RESOURCE */ .t8}/${listingId}/distance-matrices`;
};


/***/ }),

/***/ 42551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ AnchorSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_2__]);
theme_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const AnchorSection = (props)=>{
    const { children , id , sx , ...rest } = props;
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const headerHeight = isMobile ? theme_index__WEBPACK_IMPORTED_MODULE_2__/* .MOBILE_HEADER_HEIGHT */ .ZQ : theme_index__WEBPACK_IMPORTED_MODULE_2__/* .HEADER_HEIGHT */ .Mz;
    const topOffset = `calc(${headerHeight}px + 16px)`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        id: id,
        sx: {
            scrollMarginTop: topOffset,
            ...sx
        },
        ...rest,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45410:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* reexport safe */ _AnchorSection__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _AnchorSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42551);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AnchorSection__WEBPACK_IMPORTED_MODULE_0__]);
_AnchorSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52071:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rm": () => (/* binding */ BookInfoForm)
/* harmony export */ });
/* unused harmony export BookInfoFormClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41430);
/* harmony import */ var custom_BookInfoTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54389);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94605);
/* harmony import */ var custom_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76238);
/* harmony import */ var hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7216);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15787);
/* harmony import */ var hooks_useForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1580);
/* harmony import */ var inputs_BookingDateRangePickerInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68361);
/* harmony import */ var inputs_SelectField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(53790);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var theme_styled__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7802);
/* harmony import */ var views_FormView__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(58403);
/* harmony import */ var views_FormView_helpers_getMessagesFromError__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33513);
/* harmony import */ var views_FormView_helpers_setSubmissionErrors__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(87197);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(94434);
/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49230);
/* harmony import */ var _links_Link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(50682);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(19594);
/* harmony import */ var _views_LowerPriceView__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(62440);
/* harmony import */ var _views_PriceView__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(77768);
/* harmony import */ var _views_RatingView__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(98852);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, custom_BookInfoTable__WEBPACK_IMPORTED_MODULE_5__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_8__, hooks_index__WEBPACK_IMPORTED_MODULE_9__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__, hooks_useForm__WEBPACK_IMPORTED_MODULE_11__, inputs_BookingDateRangePickerInput__WEBPACK_IMPORTED_MODULE_12__, inputs_SelectField__WEBPACK_IMPORTED_MODULE_13__, theme_styled__WEBPACK_IMPORTED_MODULE_17__, views_FormView__WEBPACK_IMPORTED_MODULE_18__, views_FormView_helpers_getMessagesFromError__WEBPACK_IMPORTED_MODULE_19__, _schema__WEBPACK_IMPORTED_MODULE_20__, _views_PriceView__WEBPACK_IMPORTED_MODULE_25__, _views_RatingView__WEBPACK_IMPORTED_MODULE_26__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, custom_BookInfoTable__WEBPACK_IMPORTED_MODULE_5__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_8__, hooks_index__WEBPACK_IMPORTED_MODULE_9__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__, hooks_useForm__WEBPACK_IMPORTED_MODULE_11__, inputs_BookingDateRangePickerInput__WEBPACK_IMPORTED_MODULE_12__, inputs_SelectField__WEBPACK_IMPORTED_MODULE_13__, theme_styled__WEBPACK_IMPORTED_MODULE_17__, views_FormView__WEBPACK_IMPORTED_MODULE_18__, views_FormView_helpers_getMessagesFromError__WEBPACK_IMPORTED_MODULE_19__, _schema__WEBPACK_IMPORTED_MODULE_20__, _views_PriceView__WEBPACK_IMPORTED_MODULE_25__, _views_RatingView__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




























const PREFIX = "BookInfoForm";
const BookInfoFormClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.generateUtilityClasses)(PREFIX, [
    "button"
]);
const StyledBookInfoForm = (0,theme_styled__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(views_FormView__WEBPACK_IMPORTED_MODULE_18__/* .FormView */ .m, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    const mobileBreakpoint = theme.breakpoints.down("md");
    return {
        [`& .${BookInfoFormClasses.button}`]: {
            marginTop: theme.spacing(2),
            [mobileBreakpoint]: {
                order: 1
            }
        }
    };
});
const BookInfoForm = (props)=>{
    const { rating , reviewsCount , basePrice , discount , sx , className , maxAccommodatesCount =1 , listingId , listingSlug , onCloseModal  } = props;
    const { value: isOpenPicker , setTrue: openPicker , setFalse: closePicker  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .useBoolean */ .kt)(false);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_9__/* .useTranslate */ .qM)({
        basePath: "pages.listing.form"
    });
    const { allFilters , setFilters  } = (0,hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_8__/* .useFilters */ .m)({
        independentFiltersSlugs: [
            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BOOKING_RANGE_SOURCE */ .rV
        ],
        includeFilterAttribute: (slug)=>slug === application_constants__WEBPACK_IMPORTED_MODULE_4__/* .ACCOMMODATES_SOURCE */ .s0,
        defaultValues: {
            [application_constants__WEBPACK_IMPORTED_MODULE_4__/* .ACCOMMODATES_SOURCE */ .s0]: 1
        }
    });
    const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return {
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.checkin_at */ .nF.checkin_at]: allFilters[application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BOOKING_RANGE_SOURCE */ .rV][application_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHECKIN_AT_SOURCE */ .I1],
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.checkout_at */ .nF.checkout_at]: allFilters[application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BOOKING_RANGE_SOURCE */ .rV][application_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHECKOUT_AT_SOURCE */ .ob],
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.guest_count */ .nF.guest_count]: lodash_get__WEBPACK_IMPORTED_MODULE_14___default()(allFilters, application_constants__WEBPACK_IMPORTED_MODULE_4__/* .ACCOMMODATES_SOURCE */ .s0)
        };
    }, [
        allFilters
    ]);
    const formMethods = (0,hooks_useForm__WEBPACK_IMPORTED_MODULE_11__/* .useForm */ .c)({
        defaultValues,
        validationSchema: _schema__WEBPACK_IMPORTED_MODULE_20__/* .bookInfoFormValidationSchema */ .O
    });
    const { formState: { isValid: isFormValid , isDirty: isFormDirty  } , watch , trigger , setError  } = formMethods;
    // Watch form values to update quotes when values changed
    const [from, to, accommodates] = watch([
        hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.checkin_at */ .nF.checkin_at,
        hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.checkout_at */ .nF.checkout_at,
        hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.guest_count */ .nF.guest_count
    ]);
    const quotesParams = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return {
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.checkin_at */ .nF.checkin_at]: from,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.checkout_at */ .nF.checkout_at]: to,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.guest_count */ .nF.guest_count]: accommodates
        };
    }, [
        accommodates,
        from,
        to
    ]);
    const parseQuotesResult = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .quotesFormValidationSchema.safeParse */ .ul.safeParse(quotesParams);
    }, [
        quotesParams
    ]);
    const prevQuotesParamsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const isSelectedDates = !!from && !!to;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_15___default()(prevQuotesParamsRef.current, quotesParams)) return;
        const { [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.checkin_at */ .nF.checkin_at]: from , [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.checkout_at */ .nF.checkout_at]: to , [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.guest_count */ .nF.guest_count]: accommodates  } = quotesParams;
        const newFilters = {
            [application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BOOKING_RANGE_SOURCE */ .rV]: {
                [application_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHECKIN_AT_SOURCE */ .I1]: from,
                [application_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHECKOUT_AT_SOURCE */ .ob]: to
            },
            [application_constants__WEBPACK_IMPORTED_MODULE_4__/* .ACCOMMODATES_SOURCE */ .s0]: accommodates
        };
        prevQuotesParamsRef.current = quotesParams;
        setFilters(()=>newFilters, {
            replace: true
        });
    }, [
        quotesParams,
        setFilters
    ]);
    const isQuotesRequestEnabled = parseQuotesResult.success;
    const { data: quotesData , isError , error , isFetching  } = (0,hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .useGetQuotes */ .j2)({
        data: parseQuotesResult.success && parseQuotesResult.data,
        listingId
    }, {
        enabled: isQuotesRequestEnabled,
        retryOnMount: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isError) {
            const { errors  } = (0,views_FormView_helpers_getMessagesFromError__WEBPACK_IMPORTED_MODULE_19__/* .getMessagesFromError */ .b)(error);
            (0,views_FormView_helpers_setSubmissionErrors__WEBPACK_IMPORTED_MODULE_27__/* .setSubmissionErrors */ .h)(errors, setError);
        }
    }, [
        error,
        isError,
        setError
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        /**
     * We manually trigger validation, because `mode: "onChange"`
     * doesn't work with validation schema for some reason
     */ if (isFormDirty) {
            trigger();
        }
    }, [
        from,
        to,
        accommodates,
        trigger,
        isFormDirty
    ]);
    const handleRequestBooking = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((values)=>{
        const { checkin_at , checkout_at , guest_count  } = values;
        router.push({
            pathname: application_constants__WEBPACK_IMPORTED_MODULE_4__/* .reservationRoute.getPathname */ .Mm.getPathname(listingSlug),
            query: {
                [application_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHECKIN_AT_SOURCE */ .I1]: checkin_at,
                [application_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHECKOUT_AT_SOURCE */ .ob]: checkout_at,
                [application_constants__WEBPACK_IMPORTED_MODULE_4__/* .ACCOMMODATES_SOURCE */ .s0]: guest_count
            }
        });
    }, [
        listingSlug,
        router
    ]);
    const shouldRenderData = isFormValid && !isError && !isFetching && !!quotesData;
    const shouldDisableSubmit = !isFormValid || isError || isFetching;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledBookInfoForm, {
        ...formMethods,
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            ...sx
        },
        className: className,
        onSubmit: handleRequestBooking,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minHeight: 20
                },
                children: [
                    basePrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_PriceView__WEBPACK_IMPORTED_MODULE_25__/* .PriceView */ .z, {
                        prefix: "from",
                        variant: "per_night",
                        price: basePrice
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [
                            rating ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_RatingView__WEBPACK_IMPORTED_MODULE_26__/* .RatingView */ .k, {
                                rating: rating,
                                typographyProps: {
                                    variant: "body1"
                                }
                            }) : null,
                            reviewsCount ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_links_Link__WEBPACK_IMPORTED_MODULE_22__/* .Link */ .r, {
                                href: "#review",
                                onClick: ()=>{
                                    if (onCloseModal) {
                                        onCloseModal();
                                    }
                                },
                                sx: {
                                    color: theme.palette.text.primary,
                                    ml: 0.5,
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_23__/* .Typography */ .Z, {
                                    variant: "buttonUnderline",
                                    children: translate("{{count}}_reviews", {
                                        count: reviewsCount
                                    })
                                })
                            }) : null
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                sx: {
                    mt: 2,
                    mb: 2
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_BookingDateRangePickerInput__WEBPACK_IMPORTED_MODULE_12__/* .BookingDateRangePickerInput */ .V, {
                listingId: listingId,
                fromName: hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.checkin_at */ .nF.checkin_at,
                toName: hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.checkout_at */ .nF.checkout_at,
                label: translate("checkin_checkout"),
                minDate: new Date(),
                sx: {
                    mt: 2
                },
                open: isOpenPicker,
                onClose: closePicker
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_SelectField__WEBPACK_IMPORTED_MODULE_13__/* .SelectField */ .m, {
                name: hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_10__/* .QUOTES_SOURCES.guest_count */ .nF.guest_count,
                sx: {
                    mt: 1
                },
                label: translate("guests"),
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__/* .IcoMoon */ .n, {
                    icon: "user"
                }),
                items: (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getSelectNumericChoices */ .th)({
                    min: 1,
                    max: maxAccommodatesCount,
                    step: 1
                }),
                resettable: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    flex: "1 1 auto"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    mt: 3
                },
                children: [
                    isFetching && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_Loader__WEBPACK_IMPORTED_MODULE_7__/* .Loader */ .a, {}),
                    shouldRenderData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_BookInfoTable__WEBPACK_IMPORTED_MODULE_5__/* .BookInfoTable */ .f, {
                        quotesData: quotesData
                    })
                ]
            }),
            !isSelectedDates ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_Button__WEBPACK_IMPORTED_MODULE_21__/* .Button */ .z, {
                onClick: openPicker,
                variant: "contained",
                className: BookInfoFormClasses.button,
                fullWidth: true,
                children: translate("check_availability")
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_buttons_Button__WEBPACK_IMPORTED_MODULE_21__/* .Button */ .z, {
                type: "submit",
                disabled: shouldDisableSubmit,
                variant: "contained",
                className: BookInfoFormClasses.button,
                fullWidth: true,
                children: translate("book_now")
            }),
            typeof discount !== "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_LowerPriceView__WEBPACK_IMPORTED_MODULE_24__/* .LowerPriceView */ .k, {
                discount: discount,
                sx: {
                    mt: 2
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    mt: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_23__/* .Typography */ .Z, {
                        variant: "body1",
                        color: "text.light",
                        sx: {
                            mb: 1
                        },
                        children: translate("wont_be_charget")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_23__/* .Typography */ .Z, {
                        variant: "body1",
                        color: "text.light",
                        children: translate("may_require_deposit")
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (BookInfoForm)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56493:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* reexport safe */ _BookInfoForm__WEBPACK_IMPORTED_MODULE_0__.rm)
/* harmony export */ });
/* harmony import */ var _BookInfoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52071);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BookInfoForm__WEBPACK_IMPORTED_MODULE_0__]);
_BookInfoForm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94434:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ bookInfoFormValidationSchema)
/* harmony export */ });
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41430);
/* harmony import */ var helpers_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48843);
/* harmony import */ var hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15787);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([helpers_filters__WEBPACK_IMPORTED_MODULE_1__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_2__, zod__WEBPACK_IMPORTED_MODULE_3__]);
([helpers_filters__WEBPACK_IMPORTED_MODULE_1__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_2__, zod__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const bookInfoFormValidationSchema = zod__WEBPACK_IMPORTED_MODULE_3__.z.object({
    [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_2__/* .QUOTES_SOURCES.checkin_at */ .nF.checkin_at]: helpers_filters__WEBPACK_IMPORTED_MODULE_1__/* .bookingRangeFilterValueSchema.sourceType */ .o4.sourceType().shape[application_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHECKIN_AT_SOURCE */ .I1].or(zod__WEBPACK_IMPORTED_MODULE_3__.z.literal("")),
    [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_2__/* .QUOTES_SOURCES.checkout_at */ .nF.checkout_at]: helpers_filters__WEBPACK_IMPORTED_MODULE_1__/* .bookingRangeFilterValueSchema.sourceType */ .o4.sourceType().shape[application_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHECKOUT_AT_SOURCE */ .ob].or(zod__WEBPACK_IMPORTED_MODULE_3__.z.literal("")),
    [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_2__/* .QUOTES_SOURCES.guest_count */ .nF.guest_count]: (0,helpers_filters__WEBPACK_IMPORTED_MODULE_1__/* .getNumericFilterValueSchema */ .Sp)().or(zod__WEBPACK_IMPORTED_MODULE_3__.z.literal(""))
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ ListingMapMarker)
/* harmony export */ });
/* unused harmony export ListingItemClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59662);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94605);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_5__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const getPixelPositionOffset = (width, height)=>{
    return {
        x: -width / 2,
        y: -height
    };
};
const PREFIX = "ListingMapMarker";
const ListingItemClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "root",
    "outerIcon",
    "innerIcon"
]);
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_5__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`&.${ListingItemClasses.root}`]: {
            position: "relative"
        },
        [`& .${ListingItemClasses.outerIcon}`]: {
            fontSize: 68
        },
        [`& .${ListingItemClasses.innerIcon}`]: {
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate(-50%, -100%)",
            fontSize: theme.typography.pxToRem(28)
        }
    };
});
const ListingMapMarker = (props)=>{
    const { position  } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.OverlayViewF, {
        position: position,
        mapPaneName: _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.OverlayView.MARKER_LAYER,
        getPixelPositionOffset: getPixelPositionOffset,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledRoot, {
            className: ListingItemClasses.root,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_assets__WEBPACK_IMPORTED_MODULE_2__/* .MarkerIcon */ .b8, {
                    className: ListingItemClasses.outerIcon,
                    htmlColor: theme.palette.background.default
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
                    icon: "home",
                    color: theme.palette.primary.main,
                    className: ListingItemClasses.innerIcon
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45039:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* reexport safe */ _ListingMapMarker__WEBPACK_IMPORTED_MODULE_0__.d)
/* harmony export */ });
/* harmony import */ var _ListingMapMarker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97853);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListingMapMarker__WEBPACK_IMPORTED_MODULE_0__]);
_ListingMapMarker__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18334:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ BookingDateRangePickerInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27074);
/* harmony import */ var inputs_DateRangePickerInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94861);
/* harmony import */ var inputs_DateRangePickerInput_hooks_useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38722);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67871);
/* harmony import */ var _components_Picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48452);
/* harmony import */ var _helpers_getBookingDatesRestrictions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87103);
/* harmony import */ var _hooks_useGetSubtitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21061);
/* harmony import */ var _hooks_usePreloadedAvailabilityData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25373);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, inputs_DateRangePickerInput__WEBPACK_IMPORTED_MODULE_3__, inputs_DateRangePickerInput_hooks_useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_4__, views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_6__, _components_Picker__WEBPACK_IMPORTED_MODULE_7__, _helpers_getBookingDatesRestrictions__WEBPACK_IMPORTED_MODULE_8__, _hooks_useGetSubtitle__WEBPACK_IMPORTED_MODULE_9__, _hooks_usePreloadedAvailabilityData__WEBPACK_IMPORTED_MODULE_10__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, inputs_DateRangePickerInput__WEBPACK_IMPORTED_MODULE_3__, inputs_DateRangePickerInput_hooks_useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_4__, views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_6__, _components_Picker__WEBPACK_IMPORTED_MODULE_7__, _helpers_getBookingDatesRestrictions__WEBPACK_IMPORTED_MODULE_8__, _hooks_useGetSubtitle__WEBPACK_IMPORTED_MODULE_9__, _hooks_usePreloadedAvailabilityData__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const DEFAULT_MIN_DATE = new Date();
const BookingDateRangePickerInput = (props)=>{
    const { listingId , minDate =DEFAULT_MIN_DATE , maxDate , disabledDay , saveFormat =inputs_DateRangePickerInput__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_SAVE_FORMAT */ .u , months =2 , ...rest } = props;
    const { fromName , toName  } = rest;
    const { value , error , required , onAccept , onBlur  } = (0,inputs_DateRangePickerInput_hooks_useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_4__/* .useDateRangePickerInput */ .l)({
        fromName,
        toName,
        saveFormat
    });
    const [shownDate, setShownDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value.startDate ?? value.endDate ?? new Date());
    const [selectedRange, setSelectedRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getParsedToDateValue */ .xI)({
            value: value.startDate,
            format: saveFormat
        }),
        (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getParsedToDateValue */ .xI)({
            value: value.endDate,
            format: saveFormat
        })
    ]);
    const { data: availabilityData , loadingRanges  } = (0,_hooks_usePreloadedAvailabilityData__WEBPACK_IMPORTED_MODULE_10__/* .usePreloadedAvailabilityData */ .b)({
        shownDate,
        months,
        saveFormat,
        listingId,
        minDate,
        maxDate
    });
    const subtitle = (0,_hooks_useGetSubtitle__WEBPACK_IMPORTED_MODULE_9__/* .useGetSubtitle */ ._)({
        selectedRange,
        data: availabilityData
    });
    const handleSelectedRangeChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ startDate , endDate  })=>{
        setSelectedRange([
            startDate,
            endDate
        ]);
    }, []);
    const handleShownDateChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((date)=>{
        setShownDate(date);
    }, []);
    const debouncedShownDateChangeHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(handleShownDateChange, 250), [
        handleShownDateChange
    ]);
    const { minDate: restrictedMinDate , maxDate: restrictedMaxDate , disabledDay: restrictedDisabledDay , getDayAttributes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_helpers_getBookingDatesRestrictions__WEBPACK_IMPORTED_MODULE_8__/* .getBookingDatesRestrictions */ .M)({
            data: availabilityData,
            selectedRange,
            minDate,
            maxDate,
            disabledDay
        }), [
        availabilityData,
        maxDate,
        minDate,
        selectedRange,
        disabledDay
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
        ...rest,
        value: value,
        error: !!error,
        helperText: error,
        required: required,
        disabledDay: restrictedDisabledDay,
        minDate: restrictedMinDate,
        maxDate: restrictedMaxDate,
        onShownDateChange: debouncedShownDateChangeHandler,
        loadingRanges: loadingRanges,
        onAccept: onAccept,
        onChange: handleSelectedRangeChange,
        slots: {
            picker: _components_Picker__WEBPACK_IMPORTED_MODULE_7__/* .Picker */ .c
        },
        slotProps: {
            field: {
                slotProps: {
                    field: {
                        onBlur
                    }
                }
            },
            footer: {
                subtitle
            },
            picker: {
                slotProps: {
                    day: {
                        getDayAttributes
                    }
                }
            }
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87343:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ Picker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62430);
/* harmony import */ var views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67871);
/* harmony import */ var _PickerDay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16377);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_1__, views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_2__, _PickerDay__WEBPACK_IMPORTED_MODULE_3__]);
([theme_index__WEBPACK_IMPORTED_MODULE_1__, views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_2__, _PickerDay__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const PREFIX = "BookingDateRangePicker";
const StyledDateRangePicker = (0,theme_index__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)(views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_2__/* .DateRangePicker */ .Dw, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`& .${views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_2__/* .DateRangePickerClasses.dayDisabled */ .TO.dayDisabled}`]: {
            [`& .${_PickerDay__WEBPACK_IMPORTED_MODULE_3__/* .PickerDayClasses.inactive */ .C.inactive}`]: {
                textDecoration: "none",
                color: theme.palette.text.secondary
            }
        }
    };
});
const Picker = (props)=>{
    const { slots , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDateRangePicker, {
        ...rest,
        slots: {
            ...slots,
            day: _PickerDay__WEBPACK_IMPORTED_MODULE_3__/* .PickerDay */ .I
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48452:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* reexport safe */ _Picker__WEBPACK_IMPORTED_MODULE_0__.c)
/* harmony export */ });
/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87343);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Picker__WEBPACK_IMPORTED_MODULE_0__]);
_Picker__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55836:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ PickerDayClasses),
/* harmony export */   "I": () => (/* binding */ PickerDay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16593);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62430);
/* harmony import */ var views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67871);
/* harmony import */ var _useTooltipTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92312);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_4__, views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_5__, _useTooltipTitle__WEBPACK_IMPORTED_MODULE_6__]);
([clsx__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_4__, views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_5__, _useTooltipTitle__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const PREFIX = "BookingDateRangePickerDay";
const PickerDayClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.generateUtilityClasses)(PREFIX, [
    "inactive"
]);
const StyledDateRangePickerDay = (0,theme_index__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_5__/* .DateRangePickerDay */ .w2, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>{
    return {
        [`&.${views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_5__/* .DateRangePickerDayClasses.root */ .CP.root}`]: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    };
});
const PickerDay = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { date , format , className , sx , getDayAttributes  } = props;
    const attributes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>getDayAttributes?.(date), [
        date,
        getDayAttributes
    ]);
    const { minNights =null , checkoutOnly =false  } = attributes || {};
    const inactive = minNights || checkoutOnly;
    const tooltipTitle = (0,_useTooltipTitle__WEBPACK_IMPORTED_MODULE_6__/* .useTooltipTitle */ .v)({
        minNights,
        checkoutOnly
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        ref: ref,
        title: tooltipTitle,
        enterTouchDelay: 50,
        leaveTouchDelay: 1500,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDateRangePickerDay, {
            date: date,
            format: format,
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.clsx)(className, {
                [PickerDayClasses.inactive]: inactive
            }),
            sx: sx
        })
    });
});
PickerDay.displayName = "BookingDateRangePickerDay";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _PickerDay__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "I": () => (/* reexport safe */ _PickerDay__WEBPACK_IMPORTED_MODULE_0__.I)
/* harmony export */ });
/* harmony import */ var _PickerDay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55836);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PickerDay__WEBPACK_IMPORTED_MODULE_0__]);
_PickerDay__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92312:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ useTooltipTitle)
/* harmony export */ });
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92552);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_0__]);
hooks_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useTooltipTitle = (params)=>{
    const { minNights , checkoutOnly  } = params;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_0__/* .useTranslate */ .qM)({
        basePath: "custom"
    });
    if (checkoutOnly) {
        return translate("checkout_only");
    }
    if (minNights) {
        return translate("minimum_nights_count", {
            count: minNights
        });
    }
    return null;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* reexport */ getAvailabilityRangeFromDate)
});

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(74146);
;// CONCATENATED MODULE: ./src/components/inputs/BookingDateRangePickerInput/helpers/getAvailabilityRangeFromDate/getAvailabilityRangeFromDate.ts

const getAvailabilityRangeFromDate = (params)=>{
    const { minDate , date =new Date() , maxDate , months  } = params;
    let startDate = (0,external_date_fns_.startOfMonth)(date);
    // startOfDay used to reset the time to 0 in order to write tests easier
    let endDate = (0,external_date_fns_.startOfDay)((0,external_date_fns_.endOfMonth)((0,external_date_fns_.addMonths)(startDate, months - 1)));
    if (minDate) {
        if ((0,external_date_fns_.isBefore)(startDate, minDate)) {
            startDate = minDate;
        }
        if ((0,external_date_fns_.isBefore)(endDate, minDate)) {
            endDate = minDate;
        }
    }
    if (maxDate) {
        if ((0,external_date_fns_.isAfter)(startDate, maxDate)) {
            startDate = maxDate;
        }
        if ((0,external_date_fns_.isAfter)(endDate, maxDate)) {
            endDate = maxDate;
        }
    }
    return [
        startDate,
        endDate
    ];
};

;// CONCATENATED MODULE: ./src/components/inputs/BookingDateRangePickerInput/helpers/getAvailabilityRangeFromDate/index.ts



/***/ }),

/***/ 2086:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ getBookingDatesRestrictions)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_getMinMaxStayDatesRestrictions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50622);
/* harmony import */ var hooks_queries_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45268);
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36625);
/* harmony import */ var lodash_max__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_max__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(604);
/* harmony import */ var lodash_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _getClosestDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85540);
/* harmony import */ var _getDateAvailabilityAttributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97172);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_queries_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_2__]);
hooks_queries_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const getBookingDatesRestrictions = (params)=>{
    const { data , selectedRange , minDate: defaultMinDate , maxDate: defaultMaxDate , disabledDay: defaultDisabledDay  } = params;
    const [checkin, checkout] = selectedRange;
    const isOnlyCheckinSelected = checkin && !checkout;
    const isFullRangeSelected = checkin && checkout;
    const checkinAttributes = checkin ? (0,_getDateAvailabilityAttributes__WEBPACK_IMPORTED_MODULE_6__/* .getDateAvailabilityAttributes */ .J)({
        date: checkin,
        data
    }) : null;
    const { min_nights: checkinMinNights = null , max_nights: checkinMaxNights = null  } = checkinAttributes || {};
    if (isFullRangeSelected) {
        const disabledDay = (date)=>{
            const disabledByDefault = defaultDisabledDay?.(date);
            if (disabledByDefault) return true;
            const dayAttributes = (0,_getDateAvailabilityAttributes__WEBPACK_IMPORTED_MODULE_6__/* .getDateAvailabilityAttributes */ .J)({
                date,
                data
            });
            if (!dayAttributes) return true;
            const { is_checkin_available: isCheckinAvailable  } = dayAttributes;
            return !isCheckinAvailable;
        };
        const getDayAttributes = (date)=>{
            const dayData = (0,_getDateAvailabilityAttributes__WEBPACK_IMPORTED_MODULE_6__/* .getDateAvailabilityAttributes */ .J)({
                date,
                data
            });
            const isDayBeforeCheckin = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.differenceInCalendarDays)(date, checkin) < 0;
            const isDayAfterCheckout = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.differenceInCalendarDays)(date, checkout) > 0;
            if (!dayData || isDayBeforeCheckin || isDayAfterCheckout) {
                return {
                    minNights: null,
                    checkoutOnly: false
                };
            }
            const { is_checkin_available: isCheckinAvailable , is_checkout_available: isCheckoutAvailable , min_nights: dayMinNights , status  } = dayData;
            const isAvailableStatus = status === hooks_queries_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_2__/* .LISTING_AVAILABILITY_STATUSES.available */ .te.available;
            const isUnavailableStatus = status === hooks_queries_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_2__/* .LISTING_AVAILABILITY_STATUSES.unavailable */ .te.unavailable;
            const isNotAvailableForCheckin = isAvailableStatus && !isCheckinAvailable;
            const checkoutOnly = isUnavailableStatus && isCheckoutAvailable;
            if (isNotAvailableForCheckin) {
                return {
                    minNights: dayMinNights,
                    checkoutOnly
                };
            }
            return {
                minNights: null,
                checkoutOnly
            };
        };
        return {
            minDate: defaultMinDate,
            maxDate: defaultMaxDate,
            disabledDay,
            getDayAttributes
        };
    }
    if (isOnlyCheckinSelected) {
        const lastPossibleCheckout = (0,_getClosestDate__WEBPACK_IMPORTED_MODULE_5__/* .getClosestDate */ .b)({
            data,
            date: checkin,
            position: "after",
            filter: ({ status , is_checkout_available  })=>status === hooks_queries_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_2__/* .LISTING_AVAILABILITY_STATUSES.unavailable */ .te.unavailable && is_checkout_available
        });
        const { minDate: minDateFromMinMaxStay , maxDate: maxDateFromMinMaxStay  } = (0,helpers_getMinMaxStayDatesRestrictions__WEBPACK_IMPORTED_MODULE_1__/* .getMinMaxStayDatesRestrictions */ .L)({
            selectedRange,
            minStay: checkinMinNights,
            maxStay: checkinMaxNights,
            minDate: defaultMinDate,
            maxDate: defaultMaxDate
        });
        const minDate = lodash_max__WEBPACK_IMPORTED_MODULE_3___default()([
            minDateFromMinMaxStay,
            defaultMinDate
        ]);
        const maxDate = lodash_min__WEBPACK_IMPORTED_MODULE_4___default()([
            maxDateFromMinMaxStay,
            lastPossibleCheckout ?? undefined,
            defaultMaxDate
        ]);
        const disabledDay = (date)=>{
            const disabledByDefault = defaultDisabledDay?.(date);
            if (disabledByDefault) return true;
            const dayAttributes = (0,_getDateAvailabilityAttributes__WEBPACK_IMPORTED_MODULE_6__/* .getDateAvailabilityAttributes */ .J)({
                date,
                data
            });
            if (!dayAttributes) return true;
            const { is_checkout_available: isCheckoutAvailable  } = dayAttributes;
            return !isCheckoutAvailable;
        };
        const getDayAttributes = (date)=>{
            const dayData = (0,_getDateAvailabilityAttributes__WEBPACK_IMPORTED_MODULE_6__/* .getDateAvailabilityAttributes */ .J)({
                date,
                data
            });
            const checkinDaysDifference = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.differenceInCalendarDays)(date, checkin);
            const isDayBeforeCheckin = checkinDaysDifference < 0;
            const isDayAfterLastPossibleCheckout = lastPossibleCheckout ? (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.differenceInCalendarDays)(date, lastPossibleCheckout) > 0 : false;
            if (!dayData || isDayBeforeCheckin || isDayAfterLastPossibleCheckout) {
                return {
                    minNights: null,
                    checkoutOnly: false
                };
            }
            const { is_checkout_available: isCheckoutAvailable , min_nights: dayMinNights , status  } = dayData;
            const isAvailableStatus = status === hooks_queries_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_2__/* .LISTING_AVAILABILITY_STATUSES.available */ .te.available;
            const isNotAvailableForCheckout = isAvailableStatus && !isCheckoutAvailable;
            const isDaySatisfiesCheckinMinNights = checkinMinNights ? checkinDaysDifference >= checkinMinNights : true;
            if (!isDaySatisfiesCheckinMinNights) {
                return {
                    minNights: checkinMinNights,
                    checkoutOnly: false
                };
            }
            if (isNotAvailableForCheckout) {
                return {
                    minNights: dayMinNights,
                    checkoutOnly: false
                };
            }
            return {
                minNights: null,
                checkoutOnly: false
            };
        };
        return {
            minDate,
            maxDate,
            disabledDay,
            getDayAttributes
        };
    }
    const disabledDay = (date)=>{
        const disabledByDefault = defaultDisabledDay?.(date);
        if (disabledByDefault) return true;
        const dayAttributes = (0,_getDateAvailabilityAttributes__WEBPACK_IMPORTED_MODULE_6__/* .getDateAvailabilityAttributes */ .J)({
            date,
            data
        });
        if (!dayAttributes) return true;
        const { is_checkin_available: isCheckinAvailable  } = dayAttributes;
        return !isCheckinAvailable;
    };
    const getDayAttributes = (date)=>{
        const dayData = (0,_getDateAvailabilityAttributes__WEBPACK_IMPORTED_MODULE_6__/* .getDateAvailabilityAttributes */ .J)({
            date,
            data
        });
        if (!dayData) {
            return {
                minNights: null,
                checkoutOnly: false
            };
        }
        const { is_checkin_available: isCheckinAvailable , is_checkout_available: isCheckoutAvailable , min_nights: dayMinNights , status  } = dayData;
        const isAvailableStatus = status === hooks_queries_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_2__/* .LISTING_AVAILABILITY_STATUSES.available */ .te.available;
        const isUnavailableStatus = status === hooks_queries_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_2__/* .LISTING_AVAILABILITY_STATUSES.unavailable */ .te.unavailable;
        const isNotAvailableForCheckin = isAvailableStatus && !isCheckinAvailable;
        const checkoutOnly = isUnavailableStatus && isCheckoutAvailable;
        if (isNotAvailableForCheckin) {
            return {
                minNights: dayMinNights,
                checkoutOnly
            };
        }
        return {
            minNights: null,
            checkoutOnly
        };
    };
    return {
        minDate: defaultMinDate,
        maxDate: defaultMaxDate,
        disabledDay,
        getDayAttributes
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* reexport safe */ _getBookingDatesRestrictions__WEBPACK_IMPORTED_MODULE_0__.M)
/* harmony export */ });
/* harmony import */ var _getBookingDatesRestrictions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2086);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getBookingDatesRestrictions__WEBPACK_IMPORTED_MODULE_0__]);
_getBookingDatesRestrictions__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* reexport */ getClosestDate)
});

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(74146);
// EXTERNAL MODULE: external "lodash/max"
var max_ = __webpack_require__(36625);
var max_default = /*#__PURE__*/__webpack_require__.n(max_);
// EXTERNAL MODULE: external "lodash/min"
var min_ = __webpack_require__(604);
var min_default = /*#__PURE__*/__webpack_require__.n(min_);
;// CONCATENATED MODULE: ./src/components/inputs/BookingDateRangePickerInput/helpers/getClosestDate/getClosestDate.ts



const getClosestDate = (params)=>{
    const { data , date: referenceDate , position , filter  } = params;
    return data.reduce((prev, item)=>{
        const isMatchFilter = filter(item);
        if (!isMatchFilter) return prev;
        const daysDifference = (0,external_date_fns_.differenceInCalendarDays)(referenceDate, item.date);
        const isDateBeforeReferenceDate = daysDifference > 0;
        const isDateAfterReferenceDate = daysDifference < 0;
        const shouldBeBefore = position === "before";
        const isMatchPosition = shouldBeBefore ? isDateBeforeReferenceDate : isDateAfterReferenceDate;
        if (!isMatchPosition) return prev;
        if (prev) {
            const result = shouldBeBefore ? max_default()([
                prev,
                item.date
            ]) : min_default()([
                prev,
                item.date
            ]);
            return result ?? null;
        }
        return item.date;
    }, null);
};

;// CONCATENATED MODULE: ./src/components/inputs/BookingDateRangePickerInput/helpers/getClosestDate/index.ts



/***/ }),

/***/ 97172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* reexport */ getDateAvailabilityAttributes)
});

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(74146);
;// CONCATENATED MODULE: ./src/components/inputs/BookingDateRangePickerInput/helpers/getDateAvailabilityAttributes/getDateAvailabilityAttributes.ts

const getDateAvailabilityAttributes = (params)=>{
    const { date , data  } = params;
    const attributes = data.find((item)=>{
        return (0,external_date_fns_.isSameDay)(item.date, date);
    });
    return attributes ?? null;
};

;// CONCATENATED MODULE: ./src/components/inputs/BookingDateRangePickerInput/helpers/getDateAvailabilityAttributes/index.ts



/***/ }),

/***/ 58505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ getFormattedAvailabilityRange)
/* harmony export */ });
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27074);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_0__]);
_packages_helpers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getFormattedAvailabilityRange = (params)=>{
    const { range , format  } = params;
    const [start, end] = range;
    const formattedStartDate = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_0__/* .getFormattedDateValue */ .ww)({
        value: start,
        format,
        fallbackValue: ""
    });
    const formattedEndDate = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_0__/* .getFormattedDateValue */ .ww)({
        value: end,
        format,
        fallbackValue: ""
    });
    return {
        from: formattedStartDate,
        to: formattedEndDate
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* reexport safe */ _getFormattedAvailabilityRange__WEBPACK_IMPORTED_MODULE_0__.p)
/* harmony export */ });
/* harmony import */ var _getFormattedAvailabilityRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58505);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getFormattedAvailabilityRange__WEBPACK_IMPORTED_MODULE_0__]);
_getFormattedAvailabilityRange__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* reexport */ getUpdatedQueryAvailabilityRange)
});

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(74146);
// EXTERNAL MODULE: ./src/components/inputs/BookingDateRangePickerInput/helpers/shiftAvailabilityRange/index.ts + 1 modules
var shiftAvailabilityRange = __webpack_require__(62234);
;// CONCATENATED MODULE: ./src/components/inputs/BookingDateRangePickerInput/helpers/getUpdatedQueryAvailabilityRange/getUpdatedQueryAvailabilityRange.ts


const getUpdatedQueryAvailabilityRange = (params)=>{
    const { visibleRange , queryRange , months , minDate , maxDate  } = params;
    const prevQueryRange = (0,shiftAvailabilityRange/* shiftAvailabilityRange */.f)({
        range: queryRange,
        shift: -months,
        minDate,
        maxDate,
        months
    });
    const nextQueryRange = (0,shiftAvailabilityRange/* shiftAvailabilityRange */.f)({
        range: queryRange,
        shift: months,
        minDate,
        maxDate,
        months
    });
    const [mainFrom, mainTo] = queryRange;
    const [visibleFrom, visibleTo] = visibleRange;
    const isVisibleFromBeforeMainFrom = (0,external_date_fns_.isBefore)(visibleFrom, mainFrom);
    const isVisibleToAfterMainTo = (0,external_date_fns_.isAfter)(visibleTo, mainTo);
    const isMinDateBeforevisibleFrom = minDate ? (0,external_date_fns_.isBefore)(minDate, visibleFrom) : true;
    const isMaxDateAftervisibleTo = maxDate ? (0,external_date_fns_.isAfter)(maxDate, visibleTo) : true;
    const shouldUpdateToPrevRange = isMinDateBeforevisibleFrom && isVisibleFromBeforeMainFrom;
    const shouldUpdateToNextRange = isMaxDateAftervisibleTo && isVisibleToAfterMainTo;
    // We subtract 1 to get "months between", not just the difference
    const mainFromVisibleToDifference = (0,external_date_fns_.differenceInCalendarMonths)(mainFrom, visibleTo) - 1;
    const visibleFromMainToDifference = (0,external_date_fns_.differenceInCalendarMonths)(visibleFrom, mainTo) - 1;
    const isBeforePrev = mainFromVisibleToDifference >= months;
    const isAfterNext = visibleFromMainToDifference >= months;
    if (isBeforePrev) {
        const shift = -mainFromVisibleToDifference % months;
        const shiftedRange = (0,shiftAvailabilityRange/* shiftAvailabilityRange */.f)({
            range: visibleRange,
            shift,
            minDate,
            maxDate,
            months
        });
        return shiftedRange;
    }
    if (isAfterNext) {
        const shift = visibleFromMainToDifference % months;
        const shiftedRange = (0,shiftAvailabilityRange/* shiftAvailabilityRange */.f)({
            range: visibleRange,
            shift,
            minDate,
            maxDate,
            months
        });
        return shiftedRange;
    }
    if (shouldUpdateToPrevRange) {
        return prevQueryRange;
    }
    if (shouldUpdateToNextRange) {
        return nextQueryRange;
    }
    return queryRange;
};

;// CONCATENATED MODULE: ./src/components/inputs/BookingDateRangePickerInput/helpers/getUpdatedQueryAvailabilityRange/index.ts



/***/ }),

/***/ 62234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* reexport */ shiftAvailabilityRange)
});

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(74146);
// EXTERNAL MODULE: ./src/components/inputs/BookingDateRangePickerInput/helpers/getAvailabilityRangeFromDate/index.ts + 1 modules
var getAvailabilityRangeFromDate = __webpack_require__(70293);
;// CONCATENATED MODULE: ./src/components/inputs/BookingDateRangePickerInput/helpers/shiftAvailabilityRange/shiftAvailabilityRange.ts


const shiftAvailabilityRange = (params)=>{
    const { range , shift , maxDate , minDate , months  } = params;
    const [from] = range;
    // if `shift` is negative, it will sub months
    const shiftedFrom = (0,external_date_fns_.addMonths)(from, shift);
    return (0,getAvailabilityRangeFromDate/* getAvailabilityRangeFromDate */.m)({
        date: shiftedFrom,
        minDate,
        maxDate,
        months
    });
};

;// CONCATENATED MODULE: ./src/components/inputs/BookingDateRangePickerInput/helpers/shiftAvailabilityRange/index.ts



/***/ }),

/***/ 21061:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _useGetSubtitle__WEBPACK_IMPORTED_MODULE_0__._)
/* harmony export */ });
/* harmony import */ var _useGetSubtitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90259);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useGetSubtitle__WEBPACK_IMPORTED_MODULE_0__]);
_useGetSubtitle__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90259:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useGetSubtitle)
/* harmony export */ });
/* harmony import */ var helpers_getFormattedDateRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89382);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92552);
/* harmony import */ var _helpers_getDateAvailabilityAttributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97172);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_1__]);
hooks_index__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useGetSubtitle = (params)=>{
    const { data , selectedRange  } = params;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_1__/* .useTranslate */ .qM)({
        basePath: "custom"
    });
    const [checkin, checkout] = selectedRange;
    const isFullRangeSelected = checkin && checkout;
    const isOnlyCheckinSelected = checkin && !checkout;
    if (isFullRangeSelected) {
        return (0,helpers_getFormattedDateRange__WEBPACK_IMPORTED_MODULE_0__/* .getFormattedDateRange */ .s)({
            startDate: checkin,
            endDate: checkout,
            dateDisplayFormat: "d MMM yyyy"
        });
    }
    if (!isOnlyCheckinSelected) return;
    const checkinAttributes = (0,_helpers_getDateAvailabilityAttributes__WEBPACK_IMPORTED_MODULE_2__/* .getDateAvailabilityAttributes */ .J)({
        date: checkin,
        data
    });
    const { min_nights: checkinMinNights  } = checkinAttributes || {};
    if (checkinMinNights) {
        return `${translate("minimum_stay")}: ${translate("night_count", {
            count: checkinMinNights
        })}`;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25373:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* reexport safe */ _usePreloadedAvailabilityData__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var _usePreloadedAvailabilityData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24252);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_usePreloadedAvailabilityData__WEBPACK_IMPORTED_MODULE_0__]);
_usePreloadedAvailabilityData__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24252:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ usePreloadedAvailabilityData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_queries_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45268);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_getAvailabilityRangeFromDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70293);
/* harmony import */ var _helpers_getFormattedAvailabilityRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86960);
/* harmony import */ var _helpers_getUpdatedQueryAvailabilityRange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45608);
/* harmony import */ var _helpers_shiftAvailabilityRange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_queries_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_2__, _helpers_getFormattedAvailabilityRange__WEBPACK_IMPORTED_MODULE_5__]);
([hooks_queries_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_2__, _helpers_getFormattedAvailabilityRange__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const usePreloadedAvailabilityData = (params)=>{
    const { listingId , shownDate , months , minDate , maxDate , saveFormat  } = params;
    const visibleAvailabilityRange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_helpers_getAvailabilityRangeFromDate__WEBPACK_IMPORTED_MODULE_4__/* .getAvailabilityRangeFromDate */ .m)({
            date: shownDate,
            minDate,
            maxDate,
            months
        }), [
        maxDate,
        minDate,
        months,
        shownDate
    ]);
    const [mainQueryAvailabilityRange, setMainQueryAvailabilityRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(visibleAvailabilityRange);
    const prevQueryAvailabilityRange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_helpers_shiftAvailabilityRange__WEBPACK_IMPORTED_MODULE_7__/* .shiftAvailabilityRange */ .f)({
            range: mainQueryAvailabilityRange,
            shift: -months,
            minDate,
            maxDate,
            months
        }), [
        minDate,
        maxDate,
        mainQueryAvailabilityRange,
        months
    ]);
    const nextQueryAvailabilityRange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_helpers_shiftAvailabilityRange__WEBPACK_IMPORTED_MODULE_7__/* .shiftAvailabilityRange */ .f)({
            range: mainQueryAvailabilityRange,
            shift: months,
            minDate,
            maxDate,
            months
        }), [
        minDate,
        maxDate,
        mainQueryAvailabilityRange,
        months
    ]);
    const formattedPrevQueryAvailabilityRange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_helpers_getFormattedAvailabilityRange__WEBPACK_IMPORTED_MODULE_5__/* .getFormattedAvailabilityRange */ .p)({
            range: prevQueryAvailabilityRange,
            format: saveFormat
        }), [
        prevQueryAvailabilityRange,
        saveFormat
    ]);
    const formattedMainQueryAvailabilityRange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_helpers_getFormattedAvailabilityRange__WEBPACK_IMPORTED_MODULE_5__/* .getFormattedAvailabilityRange */ .p)({
            range: mainQueryAvailabilityRange,
            format: saveFormat
        }), [
        mainQueryAvailabilityRange,
        saveFormat
    ]);
    const formattedNextQueryAvailabilityRange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_helpers_getFormattedAvailabilityRange__WEBPACK_IMPORTED_MODULE_5__/* .getFormattedAvailabilityRange */ .p)({
            range: nextQueryAvailabilityRange,
            format: saveFormat
        }), [
        nextQueryAvailabilityRange,
        saveFormat
    ]);
    const isPrevEnabled = minDate ? (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isBefore)(minDate, mainQueryAvailabilityRange[0]) : true;
    const isNextEnabled = maxDate ? (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isAfter)(maxDate, mainQueryAvailabilityRange[1]) : true;
    const listingAvailabilityQueryMeta = {
        errorOptions: {
            errors: "never",
            message: "never"
        }
    };
    const commonAvailabilityQueriesOptions = {
        meta: listingAvailabilityQueryMeta
    };
    const [{ data: prevAvailabilityData , isFetching: isPrevAvailabilityDataFetching  }, { data: mainAvailabilityData , isFetching: isMainAvailabilityDataFetching  }, { data: nextAvailabilityData , isFetching: isNextAvailabilityDataFetching  }] = (0,hooks_queries_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_2__/* .useGetListingAvailabilities */ .ac)({
        listingId,
        ranges: [
            formattedPrevQueryAvailabilityRange,
            formattedMainQueryAvailabilityRange,
            formattedNextQueryAvailabilityRange
        ],
        options: [
            {
                ...commonAvailabilityQueriesOptions,
                enabled: isPrevEnabled
            },
            {
                ...commonAvailabilityQueriesOptions
            },
            {
                ...commonAvailabilityQueriesOptions,
                enabled: isNextEnabled
            }
        ]
    });
    const loadingRanges = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const loadingRanges = [];
        if (isPrevAvailabilityDataFetching) {
            loadingRanges.push(prevQueryAvailabilityRange);
        }
        if (isMainAvailabilityDataFetching) {
            loadingRanges.push(mainQueryAvailabilityRange);
        }
        if (isNextAvailabilityDataFetching) {
            loadingRanges.push(nextQueryAvailabilityRange);
        }
        return loadingRanges;
    }, [
        isMainAvailabilityDataFetching,
        isNextAvailabilityDataFetching,
        isPrevAvailabilityDataFetching,
        mainQueryAvailabilityRange,
        nextQueryAvailabilityRange,
        prevQueryAvailabilityRange
    ]);
    const availabilityData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[
            ...prevAvailabilityData || [],
            ...mainAvailabilityData || [],
            ...nextAvailabilityData || []
        ], [
        mainAvailabilityData,
        nextAvailabilityData,
        prevAvailabilityData
    ]);
    const prevVisibleAvailabilityRangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(visibleAvailabilityRange);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const isVisibleAvailabilityRangeTheSame = lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(prevVisibleAvailabilityRangeRef.current, visibleAvailabilityRange);
        if (isVisibleAvailabilityRangeTheSame) return;
        prevVisibleAvailabilityRangeRef.current = visibleAvailabilityRange;
        const updatedMainQueryAvailabilityRange = (0,_helpers_getUpdatedQueryAvailabilityRange__WEBPACK_IMPORTED_MODULE_6__/* .getUpdatedQueryAvailabilityRange */ .Y)({
            visibleRange: visibleAvailabilityRange,
            queryRange: mainQueryAvailabilityRange,
            minDate,
            maxDate,
            months
        });
        setMainQueryAvailabilityRange(updatedMainQueryAvailabilityRange);
    }, [
        visibleAvailabilityRange,
        minDate,
        maxDate,
        mainQueryAvailabilityRange,
        months
    ]);
    return {
        data: availabilityData,
        loadingRanges
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* reexport safe */ _BookingDateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__.V)
/* harmony export */ });
/* harmony import */ var _BookingDateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18334);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BookingDateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__]);
_BookingDateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76637:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ AmenitiesSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92552);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32027);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_partition__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19594);
/* harmony import */ var _views_AmenitiesFieldView_AmenitiesFieldView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25444);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_2__, _views_AmenitiesFieldView_AmenitiesFieldView__WEBPACK_IMPORTED_MODULE_6__]);
([hooks_index__WEBPACK_IMPORTED_MODULE_2__, _views_AmenitiesFieldView_AmenitiesFieldView__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const AmenitiesSection = (props)=>{
    const { items , title , className , sx , withMatches =false  } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_2__/* .useTranslate */ .qM)({
        basePath: "custom"
    });
    const isNoAmenities = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(items);
    const [matchedAmenities, anotherAmenities] = lodash_partition__WEBPACK_IMPORTED_MODULE_4___default()(items, ({ isMatched  })=>isMatched);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        component: "section",
        className: className,
        sx: sx,
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                variant: "h4",
                mb: 4,
                children: title
            }),
            isNoAmenities ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                variant: "subtitle1",
                children: translate("no_amenities")
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: withMatches ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_AmenitiesFieldView_AmenitiesFieldView__WEBPACK_IMPORTED_MODULE_6__/* .AmenitiesFieldView */ .$, {
                            title: translate("amenities", {
                                context: "matched"
                            }),
                            items: matchedAmenities,
                            sx: {
                                mb: {
                                    xs: 0,
                                    md: 5
                                }
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                display: {
                                    xs: "block",
                                    md: "none"
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                                sx: {
                                    my: 3
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_AmenitiesFieldView_AmenitiesFieldView__WEBPACK_IMPORTED_MODULE_6__/* .AmenitiesFieldView */ .$, {
                            title: translate("amenities", {
                                context: "another"
                            }),
                            items: anotherAmenities
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_AmenitiesFieldView_AmenitiesFieldView__WEBPACK_IMPORTED_MODULE_6__/* .AmenitiesFieldView */ .$, {
                    items: items
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (AmenitiesSection)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50403:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _AmenitiesSection__WEBPACK_IMPORTED_MODULE_0__.C)
/* harmony export */ });
/* harmony import */ var _AmenitiesSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76637);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AmenitiesSection__WEBPACK_IMPORTED_MODULE_0__]);
_AmenitiesSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ ExpandableWrapper)
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




const ExpandableWrapper = (props)=>{
    const { maxHeight , children , expanded =false , onChange , slots , slotProps , isBlur =false  } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "buttons"
    });
    const [containerNode, setContainerNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [offsetHeight, setOffsetHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { toggleButton: ToggleButton = _mui_material__WEBPACK_IMPORTED_MODULE_2__.Button  } = slots || {};
    const { toggleButton: toggleButtonProps  } = slotProps || {};
    const { sx: toggleButtonSx , children: toggleButtonChildren , showMoreText =translate("show_more") , showLessText =translate("show_less") , ...restToggleButtonProps } = toggleButtonProps || {};
    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(expanded);
    const isOverflow = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>!!offsetHeight && offsetHeight > maxHeight, [
        maxHeight,
        offsetHeight
    ]);
    // update offsetHeight on screen resize
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const changeOffsetHeight = ()=>{
            setOffsetHeight(containerNode?.offsetHeight);
        };
        changeOffsetHeight();
        window.addEventListener("resize", changeOffsetHeight);
        return ()=>{
            window.removeEventListener("resize", changeOffsetHeight);
        };
    }, [
        containerNode?.offsetHeight
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsExpanded(expanded);
    }, [
        expanded
    ]);
    const handleToggleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const newValue = isExpanded ? false : true;
        setIsExpanded(newValue);
        onChange?.(newValue);
    }, [
        isExpanded,
        onChange
    ]);
    const defaultLabel = isExpanded ? showLessText : showMoreText;
    const content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        ref: setContainerNode,
        children: children
    });
    const isBlurred = isBlur && isOverflow && !isExpanded;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                position: "relative",
                maxHeight: isExpanded ? "initial" : maxHeight,
                overflow: "hidden",
                children: [
                    content,
                    isBlurred && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                            height: 28,
                            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.74) 41.67%, #FFF 100%)"
                        }
                    })
                ]
            }),
            isOverflow && ToggleButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ToggleButton, {
                variant: "text",
                sx: {
                    display: "block",
                    mx: "auto",
                    mt: 3,
                    ...toggleButtonSx
                },
                onClick: handleToggleClick,
                color: "secondary",
                ...restToggleButtonProps,
                children: toggleButtonChildren ?? defaultLabel
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74552:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* reexport safe */ _ExpandableWrapper__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var _ExpandableWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ExpandableWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_ExpandableWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68190:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ WithActionsWrapperClasses),
/* harmony export */   "j": () => (/* binding */ WithActionsWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_theme__WEBPACK_IMPORTED_MODULE_2__]);
_theme__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const PREFIX = "WithActionsWrapper";
const WithActionsWrapperClasses = {
    actions: `${PREFIX}-actions`
};
const StyledWithActionsWrapper = (0,_theme__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`& .${WithActionsWrapperClasses.actions}`]: {
            position: "absolute",
            padding: theme.spacing(2)
        }
    };
});
const WithActionsWrapper = (props)=>{
    const { actions , children , className , sx , variant ="topRight"  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledWithActionsWrapper, {
        className: className,
        sx: {
            position: "relative",
            height: "100%",
            width: "100%",
            ...sx
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: WithActionsWrapperClasses.actions,
                sx: {
                    "&&": {
                        ...variant === "topRight" ? {
                            top: 0,
                            right: 0
                        } : {},
                        ...variant === "bottomRight" ? {
                            bottom: 0,
                            right: 0
                        } : {}
                    }
                },
                children: actions
            }),
            children
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* reexport */ AnchorMenu)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/application/constants.ts
var constants = __webpack_require__(41430);
// EXTERNAL MODULE: ./src/components/links/Link/index.ts + 1 modules
var Link = __webpack_require__(50682);
;// CONCATENATED MODULE: ./src/components/menus/AnchorMenu/AnchorMenu.tsx




const AnchorMenu = (props)=>{
    const { items =constants/* anchorMenuItems */.xd  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            display: "flex",
            justifyContent: "space-between",
            gap: 5,
            bgcolor: "background.default",
            px: 6,
            border: 1,
            borderColor: "primary.border",
            borderRadius: 4,
            height: 64,
            alignItems: "center",
            overflow: "auto"
        },
        children: items.map((item)=>{
            const { label , href  } = item;
            return /*#__PURE__*/ jsx_runtime_.jsx(Link/* Link */.r, {
                t: label,
                href: href,
                variant: "body2",
                color: "text.light",
                sx: {
                    textDecoration: "none",
                    ":hover": {
                        color: "primary.main",
                        transition: "0.3s"
                    }
                }
            }, label);
        })
    });
};
/* harmony default export */ const AnchorMenu_AnchorMenu = ((/* unused pure expression or super */ null && (AnchorMenu)));

;// CONCATENATED MODULE: ./src/components/menus/AnchorMenu/index.ts




/***/ }),

/***/ 21607:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ AmenitiesModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92552);
/* harmony import */ var modals_ModalBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37622);
/* harmony import */ var views_AmenityView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10446);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_2__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_3__, views_AmenityView__WEBPACK_IMPORTED_MODULE_4__]);
([hooks_index__WEBPACK_IMPORTED_MODULE_2__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_3__, views_AmenityView__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const AmenitiesModal = (props)=>{
    const { amenities , ...baseModalProps } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_2__/* .useTranslate */ .qM)({
        basePath: "pages.listing"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_ModalBase__WEBPACK_IMPORTED_MODULE_3__/* .ModalBase */ .e, {
        fullScreen: isMobile,
        title: translate("titles.amenities"),
        PaperProps: {
            sx: {
                minWidth: {
                    md: 600
                }
            }
        },
        ...baseModalProps,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            mt: {
                xs: 1,
                md: 3
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                rowSpacing: {
                    xs: 3,
                    md: 2
                },
                children: amenities.map((amenity, index)=>{
                    const { id , title , ...amenityItemProps } = amenity;
                    const amenitiesLength = amenities.length;
                    const countItemsWithoutBorder = amenitiesLength % 2 ? 1 : 2;
                    const isShowBorder = isMobile ? index !== amenitiesLength - 1 : index < amenitiesLength - countItemsWithoutBorder;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 12,
                        md: 6,
                        sx: {
                            borderBottom: isShowBorder ? `1px solid ${theme.palette.primary.background}` : "none",
                            pb: {
                                xs: 3,
                                md: 2
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_AmenityView__WEBPACK_IMPORTED_MODULE_4__/* .AmenityView */ .U, {
                            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "subtitle1",
                                children: title
                            }),
                            ...amenityItemProps
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

/***/ 54592:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* reexport safe */ _AmenitiesModal__WEBPACK_IMPORTED_MODULE_0__.X)
/* harmony export */ });
/* harmony import */ var _AmenitiesModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21607);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AmenitiesModal__WEBPACK_IMPORTED_MODULE_0__]);
_AmenitiesModal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ BookInfoModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var custom_BookInfoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56493);
/* harmony import */ var modals_ModalBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37622);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_BookInfoForm__WEBPACK_IMPORTED_MODULE_1__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_2__]);
([custom_BookInfoForm__WEBPACK_IMPORTED_MODULE_1__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const BOOKING_MODAL_NAME = "booking-modal";
const BookInfoModal = (props)=>{
    const { formProps  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_ModalBase__WEBPACK_IMPORTED_MODULE_2__/* .ModalBase */ .e, {
        ...props,
        urlName: BOOKING_MODAL_NAME,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_BookInfoForm__WEBPACK_IMPORTED_MODULE_1__/* .BookInfoForm */ .r, {
            ...formProps
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70994:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _BookInfoModal__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _BookInfoModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BookInfoModal__WEBPACK_IMPORTED_MODULE_0__]);
_BookInfoModal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qp": () => (/* binding */ PhotoGalleryModal)
/* harmony export */ });
/* unused harmony exports PhotoGalleryModalClasses, StyledPhotoGalleryModal */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92552);
/* harmony import */ var modals_ModalBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37622);
/* harmony import */ var _components_PhotoGalleryModalMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61191);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_4__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_5__, _components_PhotoGalleryModalMain__WEBPACK_IMPORTED_MODULE_6__, _theme__WEBPACK_IMPORTED_MODULE_7__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_4__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_5__, _components_PhotoGalleryModalMain__WEBPACK_IMPORTED_MODULE_6__, _theme__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PREFIX = "PhotoGalleryModal";
const PhotoGalleryModalClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.generateUtilityClasses)(PREFIX, [
    "imageWrapper",
    "imageListItem"
]);
const StyledPhotoGalleryModal = (0,_theme__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)(modals_ModalBase__WEBPACK_IMPORTED_MODULE_5__/* .ModalBase */ .e, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    const mobileBreakpoint = theme.breakpoints.down("md");
    return {
        [`&& .${_mui_material__WEBPACK_IMPORTED_MODULE_2__.dialogContentClasses.root}`]: {
            padding: 0
        },
        [`& .${PhotoGalleryModalClasses.imageWrapper}`]: {
            margin: "0 auto",
            height: "100%",
            maxWidth: "150vh",
            [mobileBreakpoint]: {
                maxWidth: "100%"
            }
        },
        [`& .${PhotoGalleryModalClasses.imageListItem}`]: {
            cursor: "pointer",
            ":after": {
                content: '""',
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                transition: theme.transitions.create("opacity", {
                    duration: theme.transitions.duration.standard
                }),
                backgroundColor: "#000",
                opacity: 0
            },
            ":hover": {
                ":after": {
                    opacity: 0.3
                }
            }
        }
    };
});
const PhotoGalleryModal = (props)=>{
    const { images , ...rest } = props;
    const { value: isMainModalOpen , setTrue: handleOpenMainModal , setFalse: handleCloseMainModal  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .useBoolean */ .kt)(false);
    const [initialSlide, setInitialSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .qM)({
        basePath: "modals.photo_gallery"
    });
    const handleOpenModalAndSetInitialSlide = (index = 0)=>{
        setInitialSlide(index);
        handleOpenMainModal();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledPhotoGalleryModal, {
        title: translate("title"),
        fullScreen: true,
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                className: PhotoGalleryModalClasses.imageWrapper,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ImageList, {
                    variant: "masonry",
                    cols: 2,
                    gap: 8,
                    children: images.map((item, itemIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ImageListItem, {
                            onClick: ()=>handleOpenModalAndSetInitialSlide(itemIndex),
                            className: PhotoGalleryModalClasses.imageListItem,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {
                                src: (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getUrlWithTemplate */ .aN)({
                                    url: item.src,
                                    template: "original"
                                }),
                                alt: item.title,
                                component: "img"
                            })
                        }, item.id))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PhotoGalleryModalMain__WEBPACK_IMPORTED_MODULE_6__/* .PhotoGalleryModalMain */ .sG, {
                images: images,
                initialSlide: initialSlide,
                open: isMainModalOpen,
                onClose: handleCloseMainModal
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PhotoGalleryModal)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tu": () => (/* binding */ GallerySwiper)
/* harmony export */ });
/* unused harmony exports GallerySwiperClasses, StyledRoot */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16593);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94605);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58277);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22297);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62430);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52622);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_7__]);
([clsx__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const PREFIX = "GallerySwiper";
const GallerySwiperClasses = {
    navigationButtonWrapper: `${PREFIX}-navigationButtonWrapper`,
    prevButtonWrapper: `${PREFIX}-prevButtonWrapper`,
    nextButtonWrapper: `${PREFIX}-nextButtonWrapper`,
    prevButton: `${PREFIX}-prevButton`,
    nextButton: `${PREFIX}-nextButton`,
    // swiper core and modules classes, add others if need
    swiper: "swiper",
    swiperSlide: "swiper-slide"
};
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    const isRtl = theme.direction === "rtl";
    const mobile = theme.breakpoints.down("md");
    return {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: `0 ${theme.spacing(3)}`,
        [mobile]: {
            padding: 0
        },
        [`& .${GallerySwiperClasses.swiper}`]: {
            width: "100%",
            height: "100%",
            margin: theme.spacing(0, 3),
            paddingBottom: theme.spacing(6),
            [mobile]: {
                margin: 0
            }
        },
        [`& .${GallerySwiperClasses.swiperSlide}`]: {
            height: "100%"
        },
        [`& .${GallerySwiperClasses.navigationButtonWrapper}`]: {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2
        },
        [`& .${GallerySwiperClasses.prevButtonWrapper}`]: {
            left: theme.spacing(1)
        },
        [`& .${GallerySwiperClasses.nextButtonWrapper}`]: {
            right: theme.spacing(1)
        },
        [`& .${GallerySwiperClasses.prevButton}`]: {
            transform: isRtl ? "rotate(180deg)" : "rotate(0deg)"
        },
        [`& .${GallerySwiperClasses.nextButton}`]: {
            transform: isRtl ? "rotate(0deg)" : "rotate(180deg)"
        }
    };
});
const ArrowButton = (props)=>{
    const { className , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
        size: "small",
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
            icon: "chevron-left",
            size: "small",
            className: className
        })
    });
};
const GallerySwiper = (props)=>{
    const { pagination , children , ...restSwiperProps } = props || {};
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const [prevElement, setPrevElement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [nextElement, setNextElement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const handleBeforeInit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((swiper)=>{
        const navigation = swiper.params.navigation;
        if (navigation && typeof navigation !== "boolean") {
            navigation.prevEl = prevElement;
            navigation.nextEl = nextElement;
        }
    }, [
        nextElement,
        prevElement
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledRoot, {
        children: [
            isMobile ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                ref: setPrevElement,
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.clsx)(GallerySwiperClasses.navigationButtonWrapper, GallerySwiperClasses.prevButtonWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowButton, {
                    className: GallerySwiperClasses.prevButton
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__/* .Swiper */ .tq, {
                className: GallerySwiperClasses.swiper,
                modules: [
                    swiper_modules__WEBPACK_IMPORTED_MODULE_5__/* .Navigation */ .W_,
                    swiper_modules__WEBPACK_IMPORTED_MODULE_5__/* .Pagination */ .tl
                ],
                loop: true,
                navigation: {
                    prevEl: prevElement,
                    nextEl: nextElement
                },
                onBeforeInit: handleBeforeInit,
                pagination: {
                    type: "fraction"
                },
                ...restSwiperProps,
                children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__/* .SwiperSlide */ .o5, {
                        children: child
                    }, index);
                })
            }),
            isMobile ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                ref: setNextElement,
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.clsx)(GallerySwiperClasses.navigationButtonWrapper, GallerySwiperClasses.nextButtonWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowButton, {
                    className: GallerySwiperClasses.nextButton
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61191:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sG": () => (/* binding */ PhotoGalleryModalMain)
/* harmony export */ });
/* unused harmony exports PhotoGalleryModalMainClasses, StyledModalBase */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51296);
/* harmony import */ var modals_ModalBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37622);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62430);
/* harmony import */ var _GallerySwiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63844);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([modals_ModalBase__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_4__, _GallerySwiper__WEBPACK_IMPORTED_MODULE_5__]);
([modals_ModalBase__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_4__, _GallerySwiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const PREFIX = "PhotoGalleryModalMain";
const PhotoGalleryModalMainClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "image"
]);
const StyledModalBase = (0,theme_index__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(modals_ModalBase__WEBPACK_IMPORTED_MODULE_3__/* .ModalBase */ .e, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    const mobile = theme.breakpoints.down("md");
    return {
        [`&& .${_mui_material__WEBPACK_IMPORTED_MODULE_1__.dialogContentClasses.root}`]: {
            padding: 0
        },
        [`& .${PhotoGalleryModalMainClasses.image}`]: {
            margin: "0 auto",
            borderRadius: 16,
            [mobile]: {
                objectFit: "contain"
            }
        }
    };
});
const PhotoGalleryModalMain = (props)=>{
    const { images , initialSlide =0 , open , onClose  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledModalBase, {
        open: open,
        fullScreen: true,
        onClose: onClose,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GallerySwiper__WEBPACK_IMPORTED_MODULE_5__/* .GallerySwiper */ .Tu, {
            initialSlide: initialSlide,
            children: images.map((imageData)=>{
                const { id , src , title  } = imageData;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    className: "swiper-zoom-container",
                    height: "100%",
                    width: "100%",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_components__WEBPACK_IMPORTED_MODULE_2__/* .NextImage */ .o, {
                        className: PhotoGalleryModalMainClasses.image,
                        src: src,
                        alt: title,
                        style: {
                            objectFit: "contain"
                        },
                        fill: true
                    })
                }, id);
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PhotoGalleryModalMain)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26108:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qp": () => (/* reexport safe */ _PhotoGalleryModal__WEBPACK_IMPORTED_MODULE_0__.Qp)
/* harmony export */ });
/* harmony import */ var _PhotoGalleryModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PhotoGalleryModal__WEBPACK_IMPORTED_MODULE_0__]);
_PhotoGalleryModal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z9": () => (/* binding */ ListingPage)
/* harmony export */ });
/* unused harmony export ListingPageClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41430);
/* harmony import */ var buttons_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49230);
/* harmony import */ var components_layouts_AmenitiesSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50403);
/* harmony import */ var components_links_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50682);
/* harmony import */ var components_menus_AnchorMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54495);
/* harmony import */ var components_poi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49394);
/* harmony import */ var components_sections_ListingReviewsSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29223);
/* harmony import */ var components_sections_RecommendedListingsSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25739);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19594);
/* harmony import */ var custom_AnchorSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45410);
/* harmony import */ var custom_BookInfoForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56493);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(94605);
/* harmony import */ var helpers_filters_getParsedFilters__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41736);
/* harmony import */ var helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(12764);
/* harmony import */ var helpers_getNormalizedQuoteData__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(70896);
/* harmony import */ var helpers_getValueFromFilter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(37960);
/* harmony import */ var helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(23517);
/* harmony import */ var hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7216);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetFilterLabels__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(17449);
/* harmony import */ var hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(15787);
/* harmony import */ var hooks_queries_useGetRecommendedListings__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(68433);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var modals_BookInfoModal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(70994);
/* harmony import */ var templates_WithStickySectionWrapper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(715);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(62430);
/* harmony import */ var views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(9991);
/* harmony import */ var views_BlockWrapper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(79072);
/* harmony import */ var views_CancellationPolicySection__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(26355);
/* harmony import */ var views_HouseRulesSection__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(50333);
/* harmony import */ var views_ListingGalleryView_ListingGalleryView__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(47466);
/* harmony import */ var views_LocationView__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(61925);
/* harmony import */ var views_PriceView__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(77768);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(80605);
/* harmony import */ var _components_DescriptionSection__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(10853);
/* harmony import */ var _useShareController__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(16779);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, components_layouts_AmenitiesSection__WEBPACK_IMPORTED_MODULE_6__, components_poi__WEBPACK_IMPORTED_MODULE_9__, components_sections_ListingReviewsSection__WEBPACK_IMPORTED_MODULE_10__, components_sections_RecommendedListingsSection__WEBPACK_IMPORTED_MODULE_11__, custom_AnchorSection__WEBPACK_IMPORTED_MODULE_13__, custom_BookInfoForm__WEBPACK_IMPORTED_MODULE_14__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_15__, helpers_filters_getParsedFilters__WEBPACK_IMPORTED_MODULE_16__, helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_20__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_21__, hooks_index__WEBPACK_IMPORTED_MODULE_22__, hooks_queries_useGetFilterLabels__WEBPACK_IMPORTED_MODULE_23__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_24__, hooks_queries_useGetRecommendedListings__WEBPACK_IMPORTED_MODULE_25__, modals_BookInfoModal__WEBPACK_IMPORTED_MODULE_28__, theme_index__WEBPACK_IMPORTED_MODULE_30__, views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_31__, views_HouseRulesSection__WEBPACK_IMPORTED_MODULE_34__, views_ListingGalleryView_ListingGalleryView__WEBPACK_IMPORTED_MODULE_35__, views_LocationView__WEBPACK_IMPORTED_MODULE_36__, views_PriceView__WEBPACK_IMPORTED_MODULE_37__, _components__WEBPACK_IMPORTED_MODULE_38__, _components_DescriptionSection__WEBPACK_IMPORTED_MODULE_39__, _useShareController__WEBPACK_IMPORTED_MODULE_40__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, components_layouts_AmenitiesSection__WEBPACK_IMPORTED_MODULE_6__, components_poi__WEBPACK_IMPORTED_MODULE_9__, components_sections_ListingReviewsSection__WEBPACK_IMPORTED_MODULE_10__, components_sections_RecommendedListingsSection__WEBPACK_IMPORTED_MODULE_11__, custom_AnchorSection__WEBPACK_IMPORTED_MODULE_13__, custom_BookInfoForm__WEBPACK_IMPORTED_MODULE_14__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_15__, helpers_filters_getParsedFilters__WEBPACK_IMPORTED_MODULE_16__, helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_20__, hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_21__, hooks_index__WEBPACK_IMPORTED_MODULE_22__, hooks_queries_useGetFilterLabels__WEBPACK_IMPORTED_MODULE_23__, hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_24__, hooks_queries_useGetRecommendedListings__WEBPACK_IMPORTED_MODULE_25__, modals_BookInfoModal__WEBPACK_IMPORTED_MODULE_28__, theme_index__WEBPACK_IMPORTED_MODULE_30__, views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_31__, views_HouseRulesSection__WEBPACK_IMPORTED_MODULE_34__, views_ListingGalleryView_ListingGalleryView__WEBPACK_IMPORTED_MODULE_35__, views_LocationView__WEBPACK_IMPORTED_MODULE_36__, views_PriceView__WEBPACK_IMPORTED_MODULE_37__, _components__WEBPACK_IMPORTED_MODULE_38__, _components_DescriptionSection__WEBPACK_IMPORTED_MODULE_39__, _useShareController__WEBPACK_IMPORTED_MODULE_40__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









































/**
 * Because BE blockers
 */ const PREFIX = "ListingPage";
const ListingPageClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.generateUtilityClasses)(PREFIX, [
    "anchorMenuWrapper",
    "mainInfoSection",
    "mainInfoSectionActions",
    "fixedMobileBookSection",
    "POISection"
]);
const StyledListingPage = (0,theme_index__WEBPACK_IMPORTED_MODULE_30__/* .styled */ .zo)("div", {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    const mobileBreakpoint = theme.breakpoints.down("md");
    return {
        [`& .${ListingPageClasses.anchorMenuWrapper}`]: {
            position: "relative",
            top: "-50%",
            transform: "translateY(-50%)",
            display: "flex",
            justifyContent: "center",
            [mobileBreakpoint]: {
                display: "none"
            }
        },
        [`& .${ListingPageClasses.mainInfoSection}`]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            [mobileBreakpoint]: {
                display: "block",
                marginTop: theme.spacing(3)
            }
        },
        [`& .${ListingPageClasses.mainInfoSectionActions}`]: {
            display: "flex",
            justifyContent: "space-between",
            marginTop: 0,
            gap: theme.spacing(1),
            [mobileBreakpoint]: {
                marginTop: theme.spacing(2),
                justifyContent: "end"
            }
        },
        [`& .${ListingPageClasses.fixedMobileBookSection}`]: {
            position: "fixed",
            zIndex: theme.zIndex.appBar,
            height: theme_index__WEBPACK_IMPORTED_MODULE_30__/* .MOBILE_FIXED_BOTTOM_SECTION_HEIGHT */ ._G,
            backgroundColor: theme.palette.background.default,
            width: "100%",
            bottom: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: theme.spacing(0, 2),
            borderTop: "1px solid",
            borderColor: theme.palette.primary.background
        },
        [`& .${ListingPageClasses.POISection}`]: {
            marginTop: theme.spacing(1)
        }
    };
});
function ListingPage(props) {
    const { data , url  } = props;
    const { id , city , address , country , gallery , title , agent , description , formatted_filters =[] , slug , currency , tour_id  } = data;
    const { data: filterAttributes  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_22__/* .useGetFilterAttributes */ .xe)({
        purpose: application_constants__WEBPACK_IMPORTED_MODULE_4__/* .PURPOSE_TYPES.searching */ .NZ.searching
    });
    const [accommodates, bedrooms, bathrooms, basePrice, rating, ratingCount] = (0,helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_17__/* .getFilterValues */ .i)({
        formattedFilters: formatted_filters,
        slugs: [
            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .ACCOMMODATES_SOURCE */ .s0,
            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BEDROOMS_SOURCE */ .Bt,
            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BATHROOMS_SOURCE */ .qA,
            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BASE_PRICE_SLUG */ .LI,
            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .RATING_SLUG */ .gd,
            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .RATING_COUNT_SLUG */ .BN
        ]
    });
    const { selectedFilters: parsedFilters  } = (0,helpers_filters_getParsedFilters__WEBPACK_IMPORTED_MODULE_16__/* .getParsedFilters */ .E)({
        filter: {
            [application_constants__WEBPACK_IMPORTED_MODULE_4__/* .ACCOMMODATES_SOURCE */ .s0]: accommodates?.value,
            [application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BEDROOMS_SOURCE */ .Bt]: bedrooms?.value
        },
        filterAttributes: filterAttributes || [],
        independentFiltersSlugs: []
    });
    const accommodatesValue = lodash_get__WEBPACK_IMPORTED_MODULE_26___default()(parsedFilters, application_constants__WEBPACK_IMPORTED_MODULE_4__/* .ACCOMMODATES_SOURCE */ .s0);
    const bedroomsValue = lodash_get__WEBPACK_IMPORTED_MODULE_26___default()(parsedFilters, application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BEDROOMS_SOURCE */ .Bt);
    const priceValue = basePrice?.value ? Number(basePrice?.value) : 0;
    const getPrice = (0,helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_20__/* .useGetPriceInCurrentCurrency */ .N)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(theme.breakpoints.down("md"));
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_22__/* .useTranslate */ .qM)({
        basePath: "pages.listing"
    });
    const { allFilters  } = (0,hooks_filters_useFilters__WEBPACK_IMPORTED_MODULE_21__/* .useFilters */ .m)({
        independentFiltersSlugs: [
            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BOOKING_RANGE_SOURCE */ .rV
        ],
        includeFilterAttribute: (slug)=>slug === application_constants__WEBPACK_IMPORTED_MODULE_4__/* .ACCOMMODATES_SOURCE */ .s0,
        defaultValues: {
            [application_constants__WEBPACK_IMPORTED_MODULE_4__/* .ACCOMMODATES_SOURCE */ .s0]: 1
        }
    });
    const checkinAtFilter = allFilters[application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BOOKING_RANGE_SOURCE */ .rV][application_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHECKIN_AT_SOURCE */ .I1];
    const checkoutAtFilter = allFilters[application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BOOKING_RANGE_SOURCE */ .rV][application_constants__WEBPACK_IMPORTED_MODULE_4__/* .CHECKOUT_AT_SOURCE */ .ob];
    const isSelectedDates = !!checkinAtFilter && !!checkoutAtFilter;
    const parseQuotesResult = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const quotesParams = {
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_24__/* .QUOTES_SOURCES.checkin_at */ .nF.checkin_at]: checkinAtFilter,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_24__/* .QUOTES_SOURCES.checkout_at */ .nF.checkout_at]: checkoutAtFilter,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_24__/* .QUOTES_SOURCES.guest_count */ .nF.guest_count]: accommodates
        };
        return hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_24__/* .quotesFormValidationSchema.safeParse */ .ul.safeParse(quotesParams);
    }, [
        accommodates,
        checkinAtFilter,
        checkoutAtFilter
    ]);
    const { data: recommendedListings = []  } = (0,hooks_queries_useGetRecommendedListings__WEBPACK_IMPORTED_MODULE_25__/* .useGetRecommendedListings */ .T)({
        filter: {
            exclude_ids: [
                id
            ],
            accommodates: accommodatesValue,
            bedrooms: bedroomsValue
        }
    });
    const { data: quotesData  } = (0,hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_24__/* .useGetQuotes */ .j2)({
        listingId: id,
        data: {
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_24__/* .QUOTES_SOURCES.checkin_at */ .nF.checkin_at]: checkinAtFilter,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_24__/* .QUOTES_SOURCES.checkout_at */ .nF.checkout_at]: checkoutAtFilter,
            [hooks_queries_useGetQuotes__WEBPACK_IMPORTED_MODULE_24__/* .QUOTES_SOURCES.guest_count */ .nF.guest_count]: lodash_get__WEBPACK_IMPORTED_MODULE_26___default()(allFilters, application_constants__WEBPACK_IMPORTED_MODULE_4__/* .ACCOMMODATES_SOURCE */ .s0)
        }
    }, {
        enabled: parseQuotesResult.success,
        retryOnMount: false
    });
    const amenitiesSlug = "amenities";
    const amenitiesFormattedFilters = formatted_filters.filter((v)=>v.filter_attribute?.slug === amenitiesSlug).sort((a, b)=>{
        if (a?.title && b?.title) {
            return a.title.localeCompare(b.title);
        }
        return 1;
    });
    const cancellationPolicyFormattedFilters = formatted_filters.filter((v)=>v.filter_attribute?.slug === application_constants__WEBPACK_IMPORTED_MODULE_4__/* .CANCELLATION_POLICY_SOURCE */ .fY);
    const houseRulesFormattedFilters = formatted_filters.filter((v)=>v.filter_attribute?.slug === application_constants__WEBPACK_IMPORTED_MODULE_4__/* .HOUSE_RULES_SOURCE */ .mP);
    const { value: latLocationCoordinate  } = (0,helpers_getValueFromFilter__WEBPACK_IMPORTED_MODULE_19__/* .getValueFromFilter */ .Q)({
        filtersArray: formatted_filters,
        slug: application_constants__WEBPACK_IMPORTED_MODULE_4__/* .LOCATION_SLUG */ .Bp
    });
    const { value: lngLocationCoordinate  } = (0,helpers_getValueFromFilter__WEBPACK_IMPORTED_MODULE_19__/* .getValueFromFilter */ .Q)({
        filtersArray: formatted_filters,
        slug: application_constants__WEBPACK_IMPORTED_MODULE_4__/* .LOCATION_SLUG */ .Bp,
        selectSource: "amount_max"
    });
    const { filterAttribute: houseRulesFA  } = (0,helpers_getValueFromFilter__WEBPACK_IMPORTED_MODULE_19__/* .getValueFromFilter */ .Q)({
        filtersArray: filterAttributes || [],
        slug: application_constants__WEBPACK_IMPORTED_MODULE_4__/* .HOUSE_RULES_SOURCE */ .mP
    });
    const { data: houseRulesFAs = []  } = (0,hooks_queries_useGetFilterLabels__WEBPACK_IMPORTED_MODULE_23__/* .useGetFilterLabels */ .K)(houseRulesFA?.id || "");
    const houseRules = houseRulesFAs?.map((rule)=>{
        const isAllowed = houseRulesFormattedFilters.some((el)=>el.slug === rule.slug);
        return {
            ...rule,
            isAllowed
        };
    });
    const { averagePricePerNight , currencyCode  } = (0,helpers_getNormalizedQuoteData__WEBPACK_IMPORTED_MODULE_18__/* .getNormalizedQuoteData */ .n)({
        data: quotesData
    });
    const averagePriceInCurrentCurrency = getPrice({
        amount: averagePricePerNight,
        initialCurrencyCode: currencyCode
    });
    const basePriceInCurrentCurrency = getPrice({
        amount: priceValue,
        initialCurrencyCode: currency?.code || ""
    });
    const resultData = {
        id,
        rating: Number(rating?.value) || 0,
        reviewsCount: Number(ratingCount?.value) || 0,
        location: {
            lat: Number(latLocationCoordinate),
            lng: Number(lngLocationCoordinate)
        },
        basePrice: averagePricePerNight ? averagePriceInCurrentCurrency : basePriceInCurrentCurrency,
        discount: undefined,
        agentFirstName: agent?.first_name || "",
        agentLastName: agent?.last_name || "",
        avatarSrc: agent?.avatar?.src || "",
        title,
        tourLink: tour_id,
        zip: undefined,
        mainAmenities: [
            {
                id: "1",
                value: bedrooms?.value,
                label: bedrooms?.filterAttribute?.title
            },
            {
                id: "2",
                value: bathrooms?.value,
                label: bathrooms?.filterAttribute?.title
            },
            {
                id: "3",
                value: accommodatesValue,
                label: translate.root("custom.guest")
            }
        ],
        address,
        cityName: city?.title || "",
        countryName: country?.title || "",
        gallery,
        thumbnailSrc: gallery?.[0]?.src,
        description,
        similarListings: recommendedListings,
        cancelationPolicyInfo: cancellationPolicyFormattedFilters.map((v)=>v.amount || ""),
        houseRules: houseRules.map((rule)=>({
                label: rule.title || "",
                isAllowed: rule.isAllowed
            })),
        slug,
        amenities: amenitiesFormattedFilters.map((v)=>{
            /* We should only existed ameninites for now */ return {
                id: v.id || "",
                icon: v.slug || "",
                title: v.title || "",
                isMatched: false
            };
        })
    };
    const { setFalse: handleCloseBookModal , setTrue: handleOpenBookModal , value: isBookFormModalOpen  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .useBoolean */ .kt)(false);
    const { handleShare , disabled: isShareButtonDisabled  } = (0,_useShareController__WEBPACK_IMPORTED_MODULE_40__/* .useShareController */ .l)({
        address: resultData.address || "",
        zip: resultData.zip || "",
        link: url,
        description: lodash_get__WEBPACK_IMPORTED_MODULE_26___default()(resultData.description, _components_DescriptionSection__WEBPACK_IMPORTED_MODULE_39__/* .DESCRIPTION_SLUGS.summary */ .O.summary, ""),
        imgSrc: gallery[0]?.src || null,
        imgName: gallery[0]?.title || ""
    });
    const aside = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                ml: 3,
                width: 342
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_BlockWrapper__WEBPACK_IMPORTED_MODULE_32__/* .BlockWrapper */ .q, {
                variant: "secondary",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_BookInfoForm__WEBPACK_IMPORTED_MODULE_14__/* .BookInfoForm */ .r, {
                    rating: resultData.rating,
                    reviewsCount: resultData.reviewsCount,
                    basePrice: resultData.basePrice,
                    discount: resultData.discount,
                    maxAccommodatesCount: accommodatesValue,
                    listingId: resultData.id,
                    listingSlug: resultData.slug
                })
            })
        });
    }, [
        accommodatesValue,
        resultData.basePrice,
        resultData.discount,
        resultData.id,
        resultData.rating,
        resultData.reviewsCount,
        resultData.slug
    ]);
    const defaultDividerSx = {
        my: {
            xs: 3,
            sm: 3,
            md: 6,
            xl: 6,
            lg: 6
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledListingPage, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_BookInfoModal__WEBPACK_IMPORTED_MODULE_28__/* .BookInfoModal */ .P, {
                open: isBookFormModalOpen,
                onOpen: handleOpenBookModal,
                onClose: handleCloseBookModal,
                title: translate("form.title"),
                fullScreen: true,
                formProps: {
                    rating: resultData.rating,
                    reviewsCount: resultData.reviewsCount,
                    basePrice: resultData.basePrice,
                    discount: resultData.discount,
                    listingId: resultData.id,
                    maxAccommodatesCount: accommodatesValue || 1,
                    listingSlug: resultData.slug,
                    onCloseModal: handleCloseBookModal
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                disableGutters: isMobile,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ListingGalleryView_ListingGalleryView__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .ZP, {
                    images: resultData.gallery
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            className: ListingPageClasses.anchorMenuWrapper,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_menus_AnchorMenu__WEBPACK_IMPORTED_MODULE_8__/* .AnchorMenu */ .Q, {})
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(templates_WithStickySectionWrapper__WEBPACK_IMPORTED_MODULE_29__/* .WithStickySectionWrapper */ .R, {
                            stickyElement: aside,
                            sxStickyElement: {
                                top: theme_index__WEBPACK_IMPORTED_MODULE_30__/* .HEADER_HEIGHT */ .Mz + 24,
                                display: {
                                    xs: "none",
                                    md: "block"
                                }
                            },
                            sx: {
                                mt: {
                                    xs: 3,
                                    md: 6
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_12__/* .Typography */ .Z, {
                                    variant: "h3",
                                    bigVariant: "h1",
                                    sx: {
                                        wordBreak: "break-word"
                                    },
                                    children: resultData.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    className: ListingPageClasses.mainInfoSection,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            children: [
                                                resultData.address ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_LocationView__WEBPACK_IMPORTED_MODULE_36__/* .LocationView */ .z, {
                                                    label: resultData.address,
                                                    sx: {
                                                        mt: 1
                                                    }
                                                }) : null,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_31__/* .AmenitiesStackView */ .i, {
                                                    items: resultData.mainAmenities,
                                                    sx: {
                                                        mt: 1
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            className: ListingPageClasses.mainInfoSectionActions,
                                            children: [
                                                resultData.tourLink ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_15__/* .IcoMoon */ .n, {
                                                        icon: "3d-tour"
                                                    }),
                                                    href: resultData.tourLink,
                                                    target: "_blank",
                                                    component: components_links_Link__WEBPACK_IMPORTED_MODULE_7__/* .Link */ .r,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_12__/* .Typography */ .Z, {
                                                        component: "span",
                                                        variant: "buttonUnderline",
                                                        children: translate.root("buttons.3d-tour")
                                                    })
                                                }) : null,
                                                !isShareButtonDisabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_15__/* .IcoMoon */ .n, {
                                                        icon: "share"
                                                    }),
                                                    onClick: handleShare,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_12__/* .Typography */ .Z, {
                                                        component: "span",
                                                        variant: "buttonUnderline",
                                                        children: translate.root("custom.share")
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                                    sx: defaultDividerSx
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(custom_AnchorSection__WEBPACK_IMPORTED_MODULE_13__/* .AnchorSection */ .R, {
                                    id: "description",
                                    sx: {
                                        mb: {
                                            xs: 3,
                                            sm: 7
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_12__/* .Typography */ .Z, {
                                            variant: "h4",
                                            children: translate("titles.description")
                                        }),
                                        !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_27___default()(resultData.description) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            mt: 3,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DescriptionSection__WEBPACK_IMPORTED_MODULE_39__/* .DescriptionSection */ .I, {
                                                description: resultData.description
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_12__/* .Typography */ .Z, {
                                            variant: "subtitle1",
                                            sx: {
                                                mt: 4
                                            },
                                            children: translate.root("custom.no_description")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_AnchorSection__WEBPACK_IMPORTED_MODULE_13__/* .AnchorSection */ .R, {
                                    id: "amenities",
                                    sx: {
                                        mb: {
                                            xs: 3,
                                            sm: 7
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layouts_AmenitiesSection__WEBPACK_IMPORTED_MODULE_6__/* .AmenitiesSection */ .C, {
                                        items: resultData.amenities,
                                        title: translate("titles.amenities")
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_poi__WEBPACK_IMPORTED_MODULE_9__/* .PoiContextProvider */ .Xf, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            className: ListingPageClasses.POISection,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_poi__WEBPACK_IMPORTED_MODULE_9__/* .ClosestPOISwiper */ .ru, {
                                                listingId: resultData.id
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_AnchorSection__WEBPACK_IMPORTED_MODULE_13__/* .AnchorSection */ .R, {
                                            id: "map",
                                            sx: {
                                                mb: {
                                                    xs: 3,
                                                    sm: 8
                                                }
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_38__/* .ListingMap */ .K7, {
                                                listingId: id,
                                                location: resultData.location
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_AnchorSection__WEBPACK_IMPORTED_MODULE_13__/* .AnchorSection */ .R, {
                                    id: "review",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_sections_ListingReviewsSection__WEBPACK_IMPORTED_MODULE_10__/* .ListingReviewsSection */ .l, {
                                        id: resultData.id,
                                        averageRating: resultData.rating,
                                        reviewsCount: resultData.reviewsCount,
                                        maxReviews: 4
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(custom_AnchorSection__WEBPACK_IMPORTED_MODULE_13__/* .AnchorSection */ .R, {
                                    id: "requirements",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_BlockWrapper__WEBPACK_IMPORTED_MODULE_32__/* .BlockWrapper */ .q, {
                                            sx: {
                                                mt: 6
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_HouseRulesSection__WEBPACK_IMPORTED_MODULE_34__/* .HouseRulesSection */ .g, {
                                                requirements: resultData.houseRules
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_BlockWrapper__WEBPACK_IMPORTED_MODULE_32__/* .BlockWrapper */ .q, {
                                            sx: {
                                                mt: 3
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_CancellationPolicySection__WEBPACK_IMPORTED_MODULE_33__/* .CancellationPolicySection */ .j, {
                                                policyData: resultData.cancelationPolicyInfo
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        !!resultData.similarListings.length && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                                    sx: defaultDividerSx
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_sections_RecommendedListingsSection__WEBPACK_IMPORTED_MODULE_11__/* .RecommendedListingsSection */ .R, {
                                    recommendedListings: resultData.similarListings
                                })
                            ]
                        })
                    ]
                })
            }),
            isMobile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                className: ListingPageClasses.fixedMobileBookSection,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        children: resultData.basePrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_PriceView__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .Z, {
                            prefix: "from",
                            variant: "per_night",
                            price: resultData.basePrice
                        }) : null
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        variant: "contained",
                        onClick: handleOpenBookModal,
                        children: translate(isSelectedDates ? "form.book_now" : "form.check_availability")
                    })
                ]
            }) : null
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ListingPage)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ DescriptionSection),
/* harmony export */   "O": () => (/* binding */ DESCRIPTION_SLUGS)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layouts_ExpandableWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74552);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_ExpandableWrapper__WEBPACK_IMPORTED_MODULE_2__, hooks__WEBPACK_IMPORTED_MODULE_3__]);
([components_layouts_ExpandableWrapper__WEBPACK_IMPORTED_MODULE_2__, hooks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const DESCRIPTION_SLUGS = {
    summary: "summary",
    space: "space_description",
    access: "access_description",
    neighborhood: "neighborhood",
    transit: "transit",
    notes: "notes"
};
const DescriptionSection = (props)=>{
    const { description  } = props;
    const translate = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "pages.listing.description"
    });
    const items = Object.entries(description);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layouts_ExpandableWrapper__WEBPACK_IMPORTED_MODULE_2__/* .ExpandableWrapper */ .b, {
        // TODO: improve calculating of the height to not have cut of text
        maxHeight: 260,
        isBlur: true,
        slotProps: {
            toggleButton: {
                sx: {
                    ml: 0,
                    mt: 2,
                    padding: 0,
                    minWidth: 0,
                    height: "initial",
                    minHeight: "initial",
                    "&, :hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline"
                    }
                },
                showMoreText: translate.root("buttons.show_all"),
                showLessText: translate.root("buttons.hide")
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            container: true,
            gap: "20px",
            children: items.map((item, index)=>{
                const slug = item[0];
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    xs: 12,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "h6",
                            children: translate(slug)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            mt: 2,
                            variant: "subtitle1",
                            sx: {
                                whiteSpace: "break-spaces",
                                wordBreak: "break-word"
                            },
                            children: item[1]
                        })
                    ]
                }, index);
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86224:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ ListingMap)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_poi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49394);
/* harmony import */ var components_poi_components_MyPlaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18326);
/* harmony import */ var custom_ListingMapMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45039);
/* harmony import */ var custom_Map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19827);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53127);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62430);
/* harmony import */ var _MapPoiPoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37061);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_poi__WEBPACK_IMPORTED_MODULE_2__, components_poi_components_MyPlaces__WEBPACK_IMPORTED_MODULE_3__, custom_ListingMapMarker__WEBPACK_IMPORTED_MODULE_4__, custom_Map__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_7__, _MapPoiPoints__WEBPACK_IMPORTED_MODULE_8__]);
([components_poi__WEBPACK_IMPORTED_MODULE_2__, components_poi_components_MyPlaces__WEBPACK_IMPORTED_MODULE_3__, custom_ListingMapMarker__WEBPACK_IMPORTED_MODULE_4__, custom_Map__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_7__, _MapPoiPoints__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const PREFIX = "ListingMap";
const ListingMapClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "mapWrapper"
]);
const StyledListingMap = (0,theme_index__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>({
        [`& .${ListingMapClasses.mapWrapper}`]: {
            height: 640
        },
        [`& .${custom_Map__WEBPACK_IMPORTED_MODULE_5__/* .MapClasses.map */ .nc.map}`]: {
            borderRadius: 16
        }
    }));
const ListingMap = (props)=>{
    const { sx , className , location , listingId  } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const t = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .q)({
        basePath: "pages.listing"
    });
    const { data: poiData = []  } = (0,components_poi__WEBPACK_IMPORTED_MODULE_2__/* .useGetListingPOI */ .$D)({
        listingId
    });
    const isClosestPoiSectionHidden = !poiData.length;
    const myPlaces = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_poi_components_MyPlaces__WEBPACK_IMPORTED_MODULE_3__/* .MyPlaces */ .b, {
        listingId: listingId,
        sx: (()=>{
            const WIDTH_PX = 374;
            return {
                flex: `1 1 ${WIDTH_PX}px`,
                maxWidth: "100%",
                [theme.breakpoints.up("sm")]: {
                    maxWidth: WIDTH_PX
                }
            };
        })()
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledListingMap, {
        sx: sx,
        className: className,
        children: [
            isClosestPoiSectionHidden && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "h4",
                sx: {
                    mb: 4
                },
                children: t("titles.map_view")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_Map__WEBPACK_IMPORTED_MODULE_5__/* .MapWrapper */ .fk, {
                className: ListingMapClasses.mapWrapper,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(custom_Map__WEBPACK_IMPORTED_MODULE_5__/* .Map */ .D5, {
                    center: location,
                    zoom: 15,
                    header: myPlaces,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_ListingMapMarker__WEBPACK_IMPORTED_MODULE_4__/* .ListingMapMarker */ .d, {
                            position: location
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MapPoiPoints__WEBPACK_IMPORTED_MODULE_8__/* .MapPoiPoints */ .T, {})
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ MapPoiPoint)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_custom_Map_MapPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97773);
/* harmony import */ var components_poi_views_MapPOIItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50032);
/* harmony import */ var components_poi_views_POIMapMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25086);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_poi_views_MapPOIItem__WEBPACK_IMPORTED_MODULE_3__, components_poi_views_POIMapMarker__WEBPACK_IMPORTED_MODULE_4__]);
([components_poi_views_MapPOIItem__WEBPACK_IMPORTED_MODULE_3__, components_poi_views_POIMapMarker__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const MapPoiPoint = (props)=>{
    const { position , onOpen , selected =false , onClose , poiProps , src  } = props;
    const handlePointClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (selected) {
            onClose();
            return;
        }
        onOpen();
    }, [
        selected,
        onOpen,
        onClose
    ]);
    const listingCard = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_poi_views_MapPOIItem__WEBPACK_IMPORTED_MODULE_3__/* .MapPOIItem */ .ar, {
            ...poiProps
        }), [
        poiProps
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_custom_Map_MapPoint__WEBPACK_IMPORTED_MODULE_2__/* .MapPoint */ .f, {
        position: position,
        card: listingCard,
        showCard: selected,
        point: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_poi_views_POIMapMarker__WEBPACK_IMPORTED_MODULE_4__/* .POIMapMarker */ .B, {
            src: src,
            selected: selected,
            onClick: handlePointClick
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MapPoiPoint)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37061:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ MapPoiPoints)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27074);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_poi_components_PoiContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78129);
/* harmony import */ var _MapPoiPoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56359);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_1__, _MapPoiPoint__WEBPACK_IMPORTED_MODULE_4__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_1__, _MapPoiPoint__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const MapPoiPoints = (props)=>{
    const { activeId , poisById , clearActive , setActiveId  } = (0,components_poi_components_PoiContext__WEBPACK_IMPORTED_MODULE_3__/* .usePoiContext */ .NZ)();
    const map = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useGoogleMap)();
    (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_1__/* .useEffectOnValueChange */ .SU)({
        value: activeId,
        onChange: ()=>{
            if (!activeId || !map) return;
            const poi = poisById[activeId] || null;
            if (!poi) return;
            const { latitude , longitude  } = poi;
            map.panTo({
                lat: latitude,
                lng: longitude
            });
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Object.entries(poisById).map(([id, poiData])=>{
            const { latitude: lat , longitude: lng , walk_meters =0 , walk_seconds =0 , bicycle_seconds =0 , drive_seconds =0 , drive_meters =0 , address , image: { src =""  } = {}  } = poiData;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MapPoiPoint__WEBPACK_IMPORTED_MODULE_4__/* .MapPoiPoint */ .W, {
                position: {
                    lat,
                    lng
                },
                selected: activeId === id,
                onOpen: ()=>{
                    setActiveId(id);
                },
                onClose: clearActive,
                src: src,
                poiProps: {
                    title: address,
                    travelMinutes: {
                        car: drive_seconds / 60,
                        bicycle: bicycle_seconds / 60,
                        walk: walk_seconds / 60
                    },
                    distanceKm: /* BE may not return some of distances. So we use one of them */ (walk_meters || bicycle_seconds || drive_meters) / 1000,
                    onCloseClick: clearActive
                }
            }, id);
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MapPoiPoints)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51764:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ SeoProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27074);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41430);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48719);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30378);
/* harmony import */ var _hooks_useOGDescription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69073);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_1__, hooks_index__WEBPACK_IMPORTED_MODULE_4__, providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_6__, _hooks_useOGDescription__WEBPACK_IMPORTED_MODULE_7__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_1__, hooks_index__WEBPACK_IMPORTED_MODULE_4__, providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_6__, _hooks_useOGDescription__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SeoProvider = (props)=>{
    const { url  } = props;
    const { data: listing  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_4__/* .useGetListing */ .Mw)();
    const { data: website  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_4__/* .useGetWebsite */ .Rz)();
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_3__/* .useLocaleContext */ .PE)();
    const description = (0,_hooks_useOGDescription__WEBPACK_IMPORTED_MODULE_7__/* .useOGDescription */ .R)(listing);
    const firstImageSrc = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(listing, "gallery.0.src");
    const listingTitle = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(listing, "title");
    const company = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(website, "company.name", application_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_WEBSITE_NAME */ .vM);
    if (!listing) return;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_6__/* .NextSeoProvider */ .L, {
        title: listingTitle,
        openGraph: {
            type: "website",
            images: firstImageSrc ? [
                {
                    url: (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getUrlWithTemplate */ .aN)({
                        url: firstImageSrc,
                        template: "custom",
                        height: 630
                    }),
                    alt: listingTitle
                }
            ] : undefined,
            title: listingTitle,
            description,
            url,
            locale,
            siteName: company
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _SeoProvider__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _SeoProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51764);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SeoProvider__WEBPACK_IMPORTED_MODULE_0__]);
_SeoProvider__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80605:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K7": () => (/* reexport safe */ _ListingMap__WEBPACK_IMPORTED_MODULE_0__.K)
/* harmony export */ });
/* harmony import */ var _ListingMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86224);
/* harmony import */ var _DescriptionSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10853);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListingMap__WEBPACK_IMPORTED_MODULE_0__, _DescriptionSection__WEBPACK_IMPORTED_MODULE_1__]);
([_ListingMap__WEBPACK_IMPORTED_MODULE_0__, _DescriptionSection__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69073:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* reexport safe */ _useOGDescription__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _useOGDescription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58288);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useOGDescription__WEBPACK_IMPORTED_MODULE_0__]);
_useOGDescription__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ useOGDescription)
/* harmony export */ });
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41430);
/* harmony import */ var helpers_getValueFromFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37960);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_2__]);
hooks_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useOGDescription = (listing)=>{
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_2__/* .useTranslate */ .qM)({
        basePath: "pages.listing.meta"
    });
    if (!listing) return "";
    const { value: rating  } = (0,helpers_getValueFromFilter__WEBPACK_IMPORTED_MODULE_1__/* .getValueFromFilter */ .Q)({
        filtersArray: listing.formatted_filters,
        slug: application_constants__WEBPACK_IMPORTED_MODULE_0__/* .RATING_SLUG */ .gd
    });
    const { value: propertyType  } = (0,helpers_getValueFromFilter__WEBPACK_IMPORTED_MODULE_1__/* .getValueFromFilter */ .Q)({
        filtersArray: listing.formatted_filters,
        slug: application_constants__WEBPACK_IMPORTED_MODULE_0__/* .PROPERTY_TYPE_SLUG */ .Pg
    });
    const address = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(listing, "address");
    const city = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(listing, "city.title");
    const addressLine = translate("property_type_in_address_city", {
        propertyType,
        address,
        city
    });
    const ratingLine = rating ? `⭐ ${rating}` : "";
    return `${addressLine}\n${ratingLine}`;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74722:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z9": () => (/* reexport safe */ _ListingPage__WEBPACK_IMPORTED_MODULE_0__.Z9),
/* harmony export */   "jQ": () => (/* reexport safe */ _components_SeoProvider__WEBPACK_IMPORTED_MODULE_1__.a)
/* harmony export */ });
/* harmony import */ var _ListingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87842);
/* harmony import */ var _components_SeoProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26186);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListingPage__WEBPACK_IMPORTED_MODULE_0__, _components_SeoProvider__WEBPACK_IMPORTED_MODULE_1__]);
([_ListingPage__WEBPACK_IMPORTED_MODULE_0__, _components_SeoProvider__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 16779:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useShareController)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27074);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11900);
/* harmony import */ var components_views_AddressView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50631);
/* harmony import */ var hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59789);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53127);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_1__, _packages_providers__WEBPACK_IMPORTED_MODULE_2__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_1__, _packages_providers__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const getFileOrFail = (params)=>{
    const { url , fileName  } = params;
    const DEFAULT_WIDTH = 828;
    const width = _packages_helpers__WEBPACK_IMPORTED_MODULE_1__/* .isBrowser */ .jU ? window.innerWidth : DEFAULT_WIDTH;
    const urlWithTemplate = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getUrlWithTemplate */ .aN)({
        url,
        width
    });
    return fetch(urlWithTemplate).then((response)=>response.blob()).then((blob)=>{
        // Create a File object from the Blob
        const file = new File([
            blob
        ], fileName, {
            type: blob.type
        });
        return file;
    });
};
const useShareController = (params)=>{
    const { link , address , zip , description , imgSrc , imgName  } = params;
    const { enqueueSnackbar  } = (0,hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_4__/* .useSnackbar */ .D)();
    const { isMobile  } = (0,_packages_providers__WEBPACK_IMPORTED_MODULE_2__/* .useDeviceDetectContext */ .n$)();
    const t = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_5__/* .useTranslate */ .q)();
    const MAX_DESCRIPTION_LENGTH = 50;
    const ELLIPSIS = "...";
    const shortDescription = description.length > MAX_DESCRIPTION_LENGTH ? description.slice(0, MAX_DESCRIPTION_LENGTH - ELLIPSIS.length) + ELLIPSIS : description;
    const isCopyButtonDisabled = !(typeof navigator !== "undefined" && navigator.clipboard);
    const isShareButtonDisabled = !(typeof navigator !== "undefined" && navigator.share);
    const shareTitle = t.root("custom.share_unit_title", {
        unit_nickname: (0,components_views_AddressView__WEBPACK_IMPORTED_MODULE_3__/* .getAddressWithZip */ .v_)({
            address,
            zip
        })
    });
    const handleCopy = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (isCopyButtonDisabled) return;
        await navigator.clipboard.writeText(link);
        enqueueSnackbar(t.root("notification.copied"), {
            variant: "info"
        });
    }, [
        isCopyButtonDisabled,
        link,
        t,
        enqueueSnackbar
    ]);
    const handleShare = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (navigator.share) {
            let file;
            try {
                file = imgSrc ? await getFileOrFail({
                    url: imgSrc,
                    fileName: imgName
                }) : null;
                navigator.share({
                    title: shareTitle,
                    text: shortDescription,
                    url: link,
                    files: file ? [
                        file
                    ] : undefined
                });
            } catch (err) {
                const error = err;
                enqueueSnackbar(error.message, {
                    variant: "error"
                });
            }
        }
    }, [
        shareTitle,
        shortDescription,
        link,
        imgSrc,
        imgName,
        enqueueSnackbar
    ]);
    return {
        handleShare: isMobile ? handleShare : handleCopy,
        disabled: isMobile ? isShareButtonDisabled : isCopyButtonDisabled
    };
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useShareController)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13845:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ zodListingDistanceMatricesSchemas)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const base = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    walk_meters: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    walk_seconds: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    drive_meters: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    drive_seconds: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    bicycle_meters: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    bicycle_seconds: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i
}).deepPartial();
const zodListingDistanceMatricesSchemas = {
    base
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70244:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ zodPlaceDetailsSchemas)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const zodPlaceDetailsSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    id: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodIdSchema */ .FI,
    address: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),
    latitude: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    longitude: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i
}).merge(zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    api_id: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodIdSchema */ .FI,
    city_id: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodIdSchema.or */ .FI.or(zod__WEBPACK_IMPORTED_MODULE_1__.z["null"]()),
    city: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodCitySchemas.base */ .Ic.base
}).deepPartial());
const zodPlaceDetailsSchemas = {
    base: zodPlaceDetailsSchema
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61776:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ zodPlacesAutocompleteSchemas)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const zodPlacesAutocompleteSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    id: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodIdSchema */ .FI
}).merge(zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    description: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()
}).deepPartial());
const zodPlacesAutocompleteSchemas = {
    record: zodPlacesAutocompleteSchema,
    base: zod__WEBPACK_IMPORTED_MODULE_1__.z.array(zodPlacesAutocompleteSchema).default([])
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88083:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ zodPOISchemas)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const zodPoiSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    id: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodIdSchema */ .FI,
    title: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()
}).merge(// partial
zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    latitude: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    longitude: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    walk_meters: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    walk_seconds: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    drive_meters: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    drive_seconds: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    bicycle_meters: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    bicycle_seconds: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodNumberSchema */ .i,
    image: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodFileSchema */ .ot
}).deepPartial());
/* ----------------------------------------------
                    Schemas
   ---------------------------------------------- */ const zodPOISchemas = {
    base: zodPoiSchema,
    index: zod__WEBPACK_IMPORTED_MODULE_1__.z.array(zodPoiSchema).default([])
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31910:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useGetListingPOI)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22825);
/* harmony import */ var _poi_schemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88083);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _poi_schemas__WEBPACK_IMPORTED_MODULE_2__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _poi_schemas__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getListingPOI = async (params)=>{
    const { listingId  } = params;
    const { data: { data  }  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.get */ .zk.get({
        pathname: `${application_resources__WEBPACK_IMPORTED_MODULE_3__/* .LISTINGS_RESOURCE */ .t8}/${listingId}/poi`
    });
    return _poi_schemas__WEBPACK_IMPORTED_MODULE_2__/* .zodPOISchemas.index.parse */ .c.index.parse(data);
};
const useGetListingPOI = (params)=>{
    const { listingId  } = params;
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            "poi",
            listingId
        ],
        queryFn: ()=>{
            return getListingPOI({
                listingId
            });
        },
        refetchOnMount: false,
        enabled: !!listingId
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ru": () => (/* binding */ ClosestPOISwiper)
/* harmony export */ });
/* unused harmony exports ClosestPOISwiperClasses, StyledSwiper */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27074);
/* harmony import */ var components_poi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49394);
/* harmony import */ var components_poi_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55377);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53127);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58277);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22297);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62430);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52622);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, components_poi__WEBPACK_IMPORTED_MODULE_3__, components_poi_views__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_8__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, components_poi__WEBPACK_IMPORTED_MODULE_3__, components_poi_views__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const PREFIX = "ClosestPOISwiper";
const ClosestPOISwiperClasses = {
    // swiper core and modules classes, add others if need
    swiperSlide: "swiper-slide",
    paginationBullet: "swiper-pagination-bullet",
    paginationActiveBullet: "swiper-pagination-bullet-active"
};
const StyledSwiper = (0,theme_index__WEBPACK_IMPORTED_MODULE_8__/* .styled */ .zo)(swiper_react__WEBPACK_IMPORTED_MODULE_7__/* .Swiper */ .tq, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        paddingBottom: 48,
        [`&& .${ClosestPOISwiperClasses.swiperSlide}`]: {
            width: 205
        },
        [`&& .${ClosestPOISwiperClasses.paginationBullet}`]: {
            width: 8,
            height: 8,
            border: "1px solid",
            borderColor: theme.palette.primary.main,
            backgroundColor: "transparent"
        },
        [`&& .${ClosestPOISwiperClasses.paginationActiveBullet}`]: {
            backgroundColor: theme.palette.primary.main
        }
    };
});
const ClosestPOISwiper = (props)=>{
    const { listingId  } = props;
    const { data: poiData = []  } = (0,components_poi__WEBPACK_IMPORTED_MODULE_3__/* .useGetListingPOI */ .$D)({
        listingId
    });
    const { setListingPoiIds , setPoisById , activeId , setActiveId  } = (0,components_poi__WEBPACK_IMPORTED_MODULE_3__/* .usePoiContext */ .NZ)();
    const t = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_5__/* .useTranslate */ .q)({
        basePath: "pages.listing"
    });
    (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .useEffectOnValueChange */ .SU)({
        value: poiData,
        onChange: ()=>{
            setListingPoiIds(poiData.map((v)=>v.id));
            setPoisById((prev)=>{
                const newPoisById = poiData.reduce((acc, v)=>{
                    return {
                        ...acc,
                        [v.id]: {
                            ...v,
                            address: v.title
                        }
                    };
                }, prev);
                return newPoisById;
            });
        },
        callOnInitialisation: true
    });
    if (!poiData.length) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "h4",
                sx: {
                    mb: 4
                },
                children: t("titles.poi")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSwiper, {
                slidesPerView: "auto",
                spaceBetween: 12,
                modules: [
                    swiper_modules__WEBPACK_IMPORTED_MODULE_6__/* .Pagination */ .tl
                ],
                pagination: {
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 3
                },
                children: poiData?.map((poi, index)=>{
                    const { id , title , image , walk_meters , drive_seconds =0 , bicycle_seconds =0 , walk_seconds =0  } = poi;
                    const travelMinutes = {
                        car: drive_seconds / 60,
                        bicycle: bicycle_seconds / 60,
                        walk: walk_seconds / 60
                    };
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__/* .SwiperSlide */ .o5, {
                        className: ClosestPOISwiperClasses.swiperSlide,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_poi_views__WEBPACK_IMPORTED_MODULE_4__/* .DefaultPOIItem */ .m_, {
                            title: title,
                            src: image?.src,
                            meters: walk_meters,
                            travelMinutes: travelMinutes,
                            isActive: activeId === id,
                            onClick: ()=>setActiveId(activeId === id ? null : id)
                        })
                    }, index);
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ru": () => (/* reexport safe */ _ClosestPOISwiper__WEBPACK_IMPORTED_MODULE_0__.ru)
/* harmony export */ });
/* harmony import */ var _ClosestPOISwiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4936);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ClosestPOISwiper__WEBPACK_IMPORTED_MODULE_0__]);
_ClosestPOISwiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18326:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ MyPlaces)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49752);
/* harmony import */ var application_getResource__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77676);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22825);
/* harmony import */ var components_views_BlockWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79072);
/* harmony import */ var components_views_ScrollableWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68050);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92552);
/* harmony import */ var _PlaceInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90021);
/* harmony import */ var _PoiContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78129);
/* harmony import */ var _api_listing_distance_matrices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13845);
/* harmony import */ var _api_place_details__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70244);
/* harmony import */ var _views_SearchPOIItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99902);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, _packages_providers__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, hooks_index__WEBPACK_IMPORTED_MODULE_8__, _PlaceInput__WEBPACK_IMPORTED_MODULE_9__, _api_listing_distance_matrices__WEBPACK_IMPORTED_MODULE_11__, _api_place_details__WEBPACK_IMPORTED_MODULE_12__, _views_SearchPOIItem__WEBPACK_IMPORTED_MODULE_13__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, _packages_providers__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, hooks_index__WEBPACK_IMPORTED_MODULE_8__, _PlaceInput__WEBPACK_IMPORTED_MODULE_9__, _api_listing_distance_matrices__WEBPACK_IMPORTED_MODULE_11__, _api_place_details__WEBPACK_IMPORTED_MODULE_12__, _views_SearchPOIItem__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const MyPlaces = (props)=>{
    const { listingId , sx , className  } = props;
    const { setFalse: unsetLoading , setTrue: setLoading , value: isLoading  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .useBoolean */ .kt)(false);
    const { poisById , setPoisById , activeId , setActiveId , userPoiIds , setUserPoiIds  } = (0,_PoiContext__WEBPACK_IMPORTED_MODULE_10__/* .usePoiContext */ .NZ)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const t = (0,hooks_index__WEBPACK_IMPORTED_MODULE_8__/* .useTranslate */ .qM)({
        basePath: "features.poi.labels"
    });
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQueryClient)();
    const nonMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(()=>theme.breakpoints.up("sm"));
    const onDeletePlace = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params)=>{
        const { id  } = params;
        setUserPoiIds((prev)=>{
            const placeIdsWithoutDeleted = prev.filter((v)=>v !== id);
            return placeIdsWithoutDeleted;
        });
        setPoisById((prev)=>{
            const { [id]: _ , ...restPoisById } = prev;
            return restPoisById;
        });
    }, [
        setPoisById,
        setUserPoiIds
    ]);
    const onAddPlace = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (params)=>{
        const { apiId  } = params;
        setLoading();
        try {
            const placeDetails = await queryClient.fetchQuery({
                queryKey: [
                    application_resources__WEBPACK_IMPORTED_MODULE_14__/* .PLACE_DETAILS_RESOURCES */ .NR,
                    apiId
                ],
                queryFn: async ()=>{
                    const response = await _packages_providers__WEBPACK_IMPORTED_MODULE_4__/* .fetchClient.get */ .zk.get({
                        pathname: application_resources__WEBPACK_IMPORTED_MODULE_14__/* .PLACE_DETAILS_RESOURCES */ .NR,
                        api_id: apiId
                    });
                    const parsedData = _api_place_details__WEBPACK_IMPORTED_MODULE_12__/* .zodPlaceDetailsSchemas.base.parse */ .o.base.parse(response.data?.data);
                    return parsedData;
                }
            });
            const distanceMatricesPathname = (0,application_getResource__WEBPACK_IMPORTED_MODULE_15__/* .getDistanceMatricesResource */ .n)({
                listingId
            });
            const distanceMatrices = await queryClient.fetchQuery({
                queryKey: [
                    distanceMatricesPathname,
                    placeDetails.id
                ],
                queryFn: async ()=>{
                    const response = await _packages_providers__WEBPACK_IMPORTED_MODULE_4__/* .fetchClient.get */ .zk.get({
                        pathname: distanceMatricesPathname,
                        poi_id: placeDetails.id
                    });
                    return _api_listing_distance_matrices__WEBPACK_IMPORTED_MODULE_11__/* .zodListingDistanceMatricesSchemas.base.parse */ .A.base.parse(response.data?.data);
                }
            });
            setPoisById((prev)=>{
                return {
                    ...prev,
                    [placeDetails.id]: {
                        ...distanceMatrices,
                        ...placeDetails
                    }
                };
            });
            setUserPoiIds((prevIds)=>{
                /* Move forward even if already selected */ const placeIdsWithoutDeleted = prevIds.filter((v)=>v !== placeDetails.id);
                return [
                    placeDetails.id,
                    ...placeIdsWithoutDeleted
                ];
            });
        } finally{
            unsetLoading();
        }
    }, [
        setLoading,
        queryClient,
        listingId,
        setPoisById,
        setUserPoiIds,
        unsetLoading
    ]);
    const poiItemElements = userPoiIds.map((id)=>{
        const poiDetails = poisById[id];
        if (!poiDetails) return null;
        const { address , walk_meters , bicycle_seconds =0 , drive_seconds =0 , walk_seconds =0  } = poiDetails;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_views_SearchPOIItem__WEBPACK_IMPORTED_MODULE_13__/* .SearchPOIItem */ .X, {
            title: address,
            travelMinutes: {
                walk: walk_seconds / 60,
                bicycle: bicycle_seconds / 60,
                car: drive_seconds / 60
            },
            distanceMeters: walk_meters,
            onDeleteClick: ()=>onDeletePlace({
                    id
                }),
            src: "",
            onClick: ()=>{
                setActiveId((prevId)=>prevId === id ? null : id);
            },
            selected: activeId === id
        }, id);
    });
    const skeletonElement = !isLoading ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
        variant: "rounded",
        height: 114
    });
    const CARD_PADDING_SPACING = 2;
    const MOBILE_SLIDER_SPACING = 1;
    const mobileElement = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_views_ScrollableWrapper__WEBPACK_IMPORTED_MODULE_7__/* .ScrollableWrapper */ .__, {
        scroll: "x",
        sx: {
            height: "auto",
            mx: theme.spacing(-CARD_PADDING_SPACING),
            width: `calc(100% + ${theme.spacing(CARD_PADDING_SPACING * 2)})`
        },
        hiddenScrollbar: true,
        scrollableBlockProps: {
            sx: {
                px: CARD_PADDING_SPACING
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
            spacing: 1,
            direction: "row",
            sx: {
                "& > *": {
                    flex: "0 0 auto"
                }
            },
            children: [
                skeletonElement,
                poiItemElements,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    /* To be able to scroll slider and to have some space at right. Padding does not help here */ sx: {
                        width: theme.spacing(CARD_PADDING_SPACING - MOBILE_SLIDER_SPACING)
                    }
                })
            ]
        })
    });
    const desktopElement = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_views_ScrollableWrapper__WEBPACK_IMPORTED_MODULE_7__/* .ScrollableWrapper */ .__, {
        sx: {
            height: "auto"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
            spacing: 1.25,
            sx: {
                "& > *": {
                    flex: "0 0 auto"
                }
            },
            children: [
                skeletonElement,
                poiItemElements
            ]
        })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_views_BlockWrapper__WEBPACK_IMPORTED_MODULE_6__/* .BlockWrapper */ .q, {
        sx: {
            display: "flex",
            flexDirection: "column",
            maxWidth: 374,
            p: CARD_PADDING_SPACING,
            ...sx
        },
        className: className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
            sx: {
                minHeight: 0
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    variant: "h6",
                    sx: {
                        mb: 1
                    },
                    children: t("my_places")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PlaceInput__WEBPACK_IMPORTED_MODULE_9__/* .PlaceInput */ ._, {
                    onAddPlace: onAddPlace,
                    listingId: listingId,
                    placeholder: t("search_your_favorite_places_and_distance_to_it")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        mt: 0.5,
                        minHeight: 0,
                        display: "flex"
                    },
                    children: nonMobile ? desktopElement : mobileElement
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MyPlaces)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ PlaceInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49752);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22825);
/* harmony import */ var components_custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94605);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62430);
/* harmony import */ var views_AutocompleteInputView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95614);
/* harmony import */ var _api_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61776);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, components_custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_6__, views_AutocompleteInputView__WEBPACK_IMPORTED_MODULE_7__, _api_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, components_custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_6__, views_AutocompleteInputView__WEBPACK_IMPORTED_MODULE_7__, _api_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const PlaceInput = (props)=>{
    const { onAddPlace , listingId , ...rest } = props;
    const [inputStr, setInputStr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const placesAutocompleteResult = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)({
        queryKey: [
            application_resources__WEBPACK_IMPORTED_MODULE_9__/* .PLACES_AUTOCOMPLETE_RESOURCES */ .wN,
            inputStr,
            listingId
        ],
        queryFn: async ()=>{
            const response = await _packages_providers__WEBPACK_IMPORTED_MODULE_2__/* .fetchClient.get */ .zk.get({
                pathname: application_resources__WEBPACK_IMPORTED_MODULE_9__/* .PLACES_AUTOCOMPLETE_RESOURCES */ .wN,
                input: inputStr,
                listing_id: listingId
            });
            return _api_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__/* .zodPlacesAutocompleteSchemas.base.parse */ .W.base.parse(response.data?.data);
        },
        enabled: !!inputStr && inputStr.length >= 2
    });
    const onInputChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((_, value)=>{
        setInputStr(value);
    }, []);
    const debouncedOnInputChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(onInputChange, 500), [
        onInputChange
    ]);
    const getOptionLabel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((option)=>{
        return option.description || "";
    }, []);
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((_, choice)=>{
        if (choice) {
            onAddPlace({
                apiId: choice.id
            });
            setInputStr("");
        }
    }, [
        onAddPlace
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_AutocompleteInputView__WEBPACK_IMPORTED_MODULE_7__/* .AutocompleteInputView */ .x, {
        forcePopupIcon: false,
        clearOnEscape: true,
        options: placesAutocompleteResult.data || [],
        loading: placesAutocompleteResult.isFetching,
        value: null,
        onChange: onChange,
        onInputChange: debouncedOnInputChange,
        getOptionLabel: getOptionLabel,
        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
            icon: "search",
            color: theme_index__WEBPACK_IMPORTED_MODULE_6__/* .theme.palette.text.secondary */ .rS.palette.text.secondary
        }),
        filterOptions: /* To not filter options on FE. */ (options)=>options,
        ...rest
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PlaceInput)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NZ": () => (/* binding */ usePoiContext),
/* harmony export */   "Xf": () => (/* binding */ PoiContextProvider)
/* harmony export */ });
/* unused harmony export PoiContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);



const PoiContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    listingPoiIds: [],
    userPoiIds: [],
    poisById: {},
    activeId: null,
    setActiveId: (lodash_noop__WEBPACK_IMPORTED_MODULE_2___default()),
    setPoisById: (lodash_noop__WEBPACK_IMPORTED_MODULE_2___default()),
    clearActive: (lodash_noop__WEBPACK_IMPORTED_MODULE_2___default()),
    setUserPoiIds: (lodash_noop__WEBPACK_IMPORTED_MODULE_2___default()),
    setListingPoiIds: (lodash_noop__WEBPACK_IMPORTED_MODULE_2___default())
});
const PoiContextProvider = (props)=>{
    const { children , poisById: initialPoisById = {} , userPoiIds: initialUserPoiIds = []  } = props;
    const [activeId, setActiveId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [poisById, setPoisById] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialPoisById);
    const [userPoiIds, setUserPoiIds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialUserPoiIds);
    const [listingPoiIds, setListingPoiIds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const clearActive = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setActiveId(null);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PoiContext.Provider, {
        value: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
            return {
                poisById,
                activeId,
                setActiveId,
                setPoisById,
                clearActive,
                userPoiIds,
                listingPoiIds,
                setUserPoiIds,
                setListingPoiIds
            };
        }, [
            activeId,
            clearActive,
            listingPoiIds,
            poisById,
            userPoiIds
        ]),
        children: children
    });
};
const usePoiContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PoiContext);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PoiContext)));


/***/ }),

/***/ 2543:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NZ": () => (/* reexport safe */ _PoiContext__WEBPACK_IMPORTED_MODULE_1__.NZ),
/* harmony export */   "Xf": () => (/* reexport safe */ _PoiContext__WEBPACK_IMPORTED_MODULE_1__.Xf),
/* harmony export */   "ru": () => (/* reexport safe */ _ClosestPOISwiper__WEBPACK_IMPORTED_MODULE_0__.ru)
/* harmony export */ });
/* harmony import */ var _ClosestPOISwiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52561);
/* harmony import */ var _PoiContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78129);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ClosestPOISwiper__WEBPACK_IMPORTED_MODULE_0__]);
_ClosestPOISwiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49394:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$D": () => (/* reexport safe */ _api_useGetListingPOI__WEBPACK_IMPORTED_MODULE_2__.$),
/* harmony export */   "NZ": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.NZ),
/* harmony export */   "Xf": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Xf),
/* harmony export */   "ru": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.ru)
/* harmony export */ });
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55377);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2543);
/* harmony import */ var _api_useGetListingPOI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31910);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_views__WEBPACK_IMPORTED_MODULE_0__, _components__WEBPACK_IMPORTED_MODULE_1__, _api_useGetListingPOI__WEBPACK_IMPORTED_MODULE_2__]);
([_views__WEBPACK_IMPORTED_MODULE_0__, _components__WEBPACK_IMPORTED_MODULE_1__, _api_useGetListingPOI__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81074:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ DefaultPOIItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51296);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19594);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94605);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92552);
/* harmony import */ var templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19572);
/* harmony import */ var _DistancePOIStack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, hooks_index__WEBPACK_IMPORTED_MODULE_6__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_7__, _DistancePOIStack__WEBPACK_IMPORTED_MODULE_8__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, hooks_index__WEBPACK_IMPORTED_MODULE_6__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_7__, _DistancePOIStack__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const DefaultPOIItem = (props)=>{
    const { src , title , meters , travelMinutes , isActive =false , onClick  } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .qM)({
        basePath: "features.poi"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    height: 136,
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: theme.palette.actions.background,
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: isActive ? theme.palette.primary.main : theme.palette.primary.border,
                    cursor: "pointer",
                    overflow: "hidden"
                },
                onClick: onClick,
                children: src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_components__WEBPACK_IMPORTED_MODULE_2__/* .NextImage */ .o, {
                    src: (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getUrlWithTemplate */ .aN)({
                        url: src,
                        width: 205,
                        height: 136
                    }),
                    fill: true,
                    alt: "Default POI image",
                    style: {
                        objectFit: "cover",
                        borderRadius: 8
                    },
                    unoptimized: true
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__/* .IcoMoon */ .n, {
                    icon: "apartment",
                    size: "large",
                    color: theme.palette.text.light
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
                variant: "subtitle2",
                sx: {
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap"
                },
                withTooltip: true,
                children: title
            }),
            meters ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
                    variant: "small2",
                    children: translate("labels.distance_km", {
                        km: Math.round(10 * meters / 1000) / 10
                    })
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__/* .IcoMoon */ .n, {
                    icon: "map-distance",
                    size: "small",
                    color: theme.palette.primary.main
                })
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    mt: 0.5
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DistancePOIStack__WEBPACK_IMPORTED_MODULE_8__/* .DistancePOIStack */ .a, {
                    travelMinutes: travelMinutes
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* reexport safe */ _DefaultPOIItem__WEBPACK_IMPORTED_MODULE_0__.m)
/* harmony export */ });
/* harmony import */ var _DefaultPOIItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81074);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DefaultPOIItem__WEBPACK_IMPORTED_MODULE_0__]);
_DefaultPOIItem__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ DistancePOIStack)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94605);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
/* harmony import */ var templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19572);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_4__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const defaultDivider = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    sx: {
        borderColor: "text.primary"
    },
    orientation: "vertical",
    flexItem: true
});
const DistancePOIStack = (props)=>{
    const { travelMinutes , stackProps ={} , iconProps ={} , typographyProps ={}  } = props;
    const { sx: typographyPropsSx = {}  } = typographyProps;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const t = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "features.poi"
    });
    const icons = {
        car: "private-car-outline",
        bicycle: "bicycles-available",
        transport: "public-transport-outline",
        walk: "walking-man"
    };
    const orderedTravelTypes = [
        "transport",
        "car",
        "bicycle",
        "walk"
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        divider: defaultDivider,
        spacing: 1,
        ...stackProps,
        children: orderedTravelTypes.map((type)=>{
            const durationInMinutes = Math.round(travelMinutes[type] || 0);
            if (!durationInMinutes) return null;
            const icon = icons[type];
            const isValueExist = Boolean(durationInMinutes);
            const hours = Math.floor(durationInMinutes / 60);
            const minutes = durationInMinutes % 60;
            const formatedDuration = hours ? t.root("duration.hours_minutes", {
                hours,
                minutes
            }) : t.root("duration.minutes", {
                minutes
            });
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                space: 0,
                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "small1",
                    color: isValueExist ? theme.palette.text.primary : theme.palette.text.disabled,
                    sx: {
                        mr: isValueExist ? 0 : 2.5,
                        ...typographyPropsSx
                    },
                    ...typographyProps,
                    children: isValueExist ? formatedDuration : "-"
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
                    size: "extraSmall",
                    color: isValueExist ? theme.palette.text.primary : theme.palette.text.disabled,
                    icon: icon,
                    sx: {
                        mr: 0.5
                    },
                    ...iconProps
                })
            }, type);
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30342:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _DistancePOIStack__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _DistancePOIStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25358);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DistancePOIStack__WEBPACK_IMPORTED_MODULE_0__]);
_DistancePOIStack__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17247:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ar": () => (/* binding */ MapPOIItem)
/* harmony export */ });
/* unused harmony exports MapPOIItemClasses, INSIDE_OFFSET_PX */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19594);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94605);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92552);
/* harmony import */ var templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19572);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62430);
/* harmony import */ var _DistancePOIStack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_4__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_6__, _DistancePOIStack__WEBPACK_IMPORTED_MODULE_7__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_4__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_6__, _DistancePOIStack__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PREFIX = "MapPOIItem";
const MapPOIItemClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "wrapper",
    "imageWrapper",
    "contentWrapper",
    "contentHeader"
]);
const INSIDE_OFFSET_PX = 24;
const StyledMapPOIItem = (0,theme_index__WEBPACK_IMPORTED_MODULE_6__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`&.${MapPOIItemClasses.wrapper}`]: {
            maxWidth: 228,
            position: "relative"
        },
        [`& .${MapPOIItemClasses.imageWrapper}`]: {
            height: 160,
            width: 228,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: theme.palette.actions.background,
            borderRadius: 16
        },
        [`& .${MapPOIItemClasses.contentWrapper}`]: {
            marginTop: theme.spacing(-INSIDE_OFFSET_PX / 8),
            background: theme.palette.background.default,
            borderRadius: 16,
            position: "relative",
            padding: theme.spacing(2),
            border: `1px solid ${theme.palette.other.border}`
        },
        [`& .${MapPOIItemClasses.contentHeader}`]: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
    };
});
const MapPOIItem = (props)=>{
    const { title , distanceKm , travelMinutes , onShareButtonClick , onCloseClick  } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .qM)({
        basePath: "features.poi"
    });
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledMapPOIItem, {
        className: MapPOIItemClasses.wrapper,
        children: [
            typeof onCloseClick !== "undefined" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                variant: "outlined",
                size: "small",
                color: "secondary",
                sx: {
                    background: theme.palette.background.default,
                    "&:hover": {
                        background: theme.palette.background.default
                    },
                    padding: theme.spacing(0.7),
                    minWidth: 0,
                    position: "absolute",
                    top: theme.spacing(1.5),
                    right: theme.spacing(1.5),
                    zIndex: 1
                },
                onClick: onCloseClick,
                "aria-label": translate.root("buttons.close"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                    icon: "close",
                    size: "small",
                    color: "inherit"
                })
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: MapPOIItemClasses.contentWrapper,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        className: MapPOIItemClasses.contentHeader,
                        sx: {
                            paddingRight: 4.5
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    overflow: "hidden"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                                    variant: "subtitle2",
                                    sx: {
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        whiteSpace: "nowrap"
                                    },
                                    withTooltip: true,
                                    children: title
                                })
                            }),
                            typeof onShareButtonClick !== "undefined" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                onClick: onShareButtonClick,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                                    icon: "show",
                                    color: theme.palette.text.light
                                })
                            }) : null
                        ]
                    }),
                    distanceKm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                        sx: {
                            my: 1
                        },
                        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                            variant: "small2",
                            children: translate("labels.distance_km", {
                                km: Math.round(distanceKm * 10) / 10
                            })
                        }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                            icon: "map-distance",
                            size: "small",
                            color: theme.palette.primary.main
                        })
                    }) : null,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DistancePOIStack__WEBPACK_IMPORTED_MODULE_7__/* .DistancePOIStack */ .a, {
                        travelMinutes: travelMinutes,
                        typographyProps: {
                            variant: "small2"
                        }
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50032:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ar": () => (/* reexport safe */ _MapPOIItem__WEBPACK_IMPORTED_MODULE_0__.ar)
/* harmony export */ });
/* harmony import */ var _MapPOIItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17247);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MapPOIItem__WEBPACK_IMPORTED_MODULE_0__]);
_MapPOIItem__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72210:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ POIMapMarker)
/* harmony export */ });
/* unused harmony export POIMapMarkerClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59662);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51296);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27074);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94605);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_6__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const PREFIX = "POIMapMarker";
const POIMapMarkerClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "root",
    "outerIcon",
    "innerIcon",
    "innerImage"
]);
const IMAGE_SIZE = 44;
const StyledPOIMapMarker = (0,theme_index__WEBPACK_IMPORTED_MODULE_6__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`&.${POIMapMarkerClasses.root}`]: {
            position: "relative",
            width: 60
        },
        [`& .${POIMapMarkerClasses.outerIcon}`]: {
            fontSize: 60
        },
        [`& .${POIMapMarkerClasses.innerImage}`]: {
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate(-50%, -32%)",
            fontSize: theme.typography.pxToRem(28)
        },
        [`& .${POIMapMarkerClasses.innerIcon}`]: {
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate(-50%, -32%)",
            borderRadius: "50%",
            background: theme.palette.background.paper,
            width: IMAGE_SIZE,
            height: IMAGE_SIZE,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    };
});
const POIMapMarker = (props)=>{
    const { src , selected , onClick  } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledPOIMapMarker, {
        className: POIMapMarkerClasses.root,
        onClick: onClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_assets__WEBPACK_IMPORTED_MODULE_2__/* .POIMarkerIcon */ .a$, {
                className: POIMapMarkerClasses.outerIcon,
                fill: selected ? theme.palette.primary.main : theme.palette.primary.border
            }),
            src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_components__WEBPACK_IMPORTED_MODULE_3__/* .NextImage */ .o, {
                src: (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getUrlWithTemplate */ .aN)({
                    url: src,
                    width: 300
                }),
                width: IMAGE_SIZE,
                height: IMAGE_SIZE,
                alt: "Pin POI image",
                style: {
                    borderRadius: "50%"
                },
                className: POIMapMarkerClasses.innerImage
            }) : null,
            !src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: POIMapMarkerClasses.innerIcon,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__/* .IcoMoon */ .n, {
                    icon: "apartment",
                    color: theme.palette.text.light
                })
            }) : null
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25086:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* reexport safe */ _POIMapMarker__WEBPACK_IMPORTED_MODULE_0__.B)
/* harmony export */ });
/* harmony import */ var _POIMapMarker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_POIMapMarker__WEBPACK_IMPORTED_MODULE_0__]);
_POIMapMarker__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18471:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ SearchPOIItem)
/* harmony export */ });
/* unused harmony export SearchPOIItemClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51296);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27074);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41430);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19594);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94605);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92552);
/* harmony import */ var templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19572);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62430);
/* harmony import */ var views_RatingView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98852);
/* harmony import */ var _DistancePOIStack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_7__, hooks_index__WEBPACK_IMPORTED_MODULE_8__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_9__, theme_index__WEBPACK_IMPORTED_MODULE_10__, views_RatingView__WEBPACK_IMPORTED_MODULE_11__, _DistancePOIStack__WEBPACK_IMPORTED_MODULE_12__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_7__, hooks_index__WEBPACK_IMPORTED_MODULE_8__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_9__, theme_index__WEBPACK_IMPORTED_MODULE_10__, views_RatingView__WEBPACK_IMPORTED_MODULE_11__, _DistancePOIStack__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const PREFIX = "SearchPOIItem";
const SearchPOIItemClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.generateUtilityClasses)(PREFIX, [
    "wrapper",
    "backSection",
    "rightSection",
    "contentHeader",
    "actionButton"
]);
const StyledSearchPOIItem = (0,theme_index__WEBPACK_IMPORTED_MODULE_10__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`,
    shouldForwardProp: (p)=>p !== "selected"
})(({ theme , selected  })=>{
    return {
        [`&.${SearchPOIItemClasses.wrapper}`]: {
            width: "100%",
            display: "flex",
            position: "relative",
            textDecoration: "none",
            color: theme.palette.text.primary,
            background: theme.palette.primary.background,
            borderRadius: 16,
            "&:hover": {
                cursor: "pointer"
            }
        },
        [`& .${SearchPOIItemClasses.backSection}`]: {
            width: 194,
            height: "100%",
            position: "absolute",
            overflow: "hidden",
            borderRadius: 16,
            zIndex: -1,
            background: theme.palette.actions.background
        },
        [`& .${SearchPOIItemClasses.rightSection}`]: {
            height: "100%",
            flexBasis: 230,
            flexGrow: 1,
            flexShrink: 0,
            backgroundColor: theme.palette.background.default,
            border: "1px solid",
            borderColor: selected ? theme.palette.primary.main : theme.palette.primary.border,
            borderRadius: 16,
            padding: theme.spacing(2),
            overflow: "hidden"
        },
        [`& .${SearchPOIItemClasses.contentHeader}`]: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        [`& .${SearchPOIItemClasses.actionButton}`]: {
            marginTop: theme.spacing(0.5)
        }
    };
});
const SearchPOIItem = (props)=>{
    const { src , title , distanceMeters , onDeleteClick , travelMinutes , rating , reviewsCount , selected =false , onClick  } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_8__/* .useTranslate */ .qM)({
        basePath: "features.poi"
    });
    const handleOnDelete = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.preventDefault();
        e.stopPropagation(); // otherwise it triggers 'set active' action
        if (onDeleteClick) {
            onDeleteClick();
        }
    }, [
        onDeleteClick
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledSearchPOIItem, {
        className: SearchPOIItemClasses.wrapper,
        selected: selected,
        onClick: onClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                className: SearchPOIItemClasses.backSection,
                children: src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_components__WEBPACK_IMPORTED_MODULE_3__/* .NextImage */ .o, {
                    src: (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getUrlWithTemplate */ .aN)({
                        url: src,
                        width: application_constants__WEBPACK_IMPORTED_MODULE_5__/* .LISTING_ITEM_IMAGE_WIDTH */ .eY
                    }),
                    fill: true,
                    style: {
                        objectFit: "cover"
                    },
                    alt: "Listing image",
                    // image is reused from browser cache when it loads in listing item
                    unoptimized: true
                }) : null
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                className: SearchPOIItemClasses.rightSection,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        className: SearchPOIItemClasses.contentHeader,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    overflow: "hidden"
                                },
                                children: [
                                    rating ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_RatingView__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        rating: rating,
                                        reviewsCount: reviewsCount,
                                        typographyProps: {
                                            sx: {
                                                color: theme.palette.text.light
                                            },
                                            variant: "body1"
                                        },
                                        sx: {
                                            mb: 1
                                        }
                                    }) : null,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, {
                                        variant: "subtitle2",
                                        sx: {
                                            textOverflow: "ellipsis",
                                            overflow: "hidden",
                                            whiteSpace: "nowrap"
                                        },
                                        withTooltip: true,
                                        children: title
                                    })
                                ]
                            }),
                            typeof onDeleteClick !== "undefined" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                onClick: handleOnDelete,
                                sx: {
                                    ml: 2
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_7__/* .IcoMoon */ .n, {
                                    icon: "delete"
                                })
                            }) : null
                        ]
                    }),
                    distanceMeters ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
                        sx: {
                            my: 1
                        },
                        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, {
                            variant: "small2",
                            children: translate("labels.distance_km", {
                                km: Math.round(10 * distanceMeters / 1000) / 10
                            })
                        }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_7__/* .IcoMoon */ .n, {
                            icon: "map-distance",
                            size: "small",
                            color: theme.palette.primary.main
                        })
                    }) : null,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        sx: {
                            mt: 1
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DistancePOIStack__WEBPACK_IMPORTED_MODULE_12__/* .DistancePOIStack */ .a, {
                            travelMinutes: travelMinutes,
                            typographyProps: {
                                variant: "small2"
                            }
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

/***/ 99902:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* reexport safe */ _SearchPOIItem__WEBPACK_IMPORTED_MODULE_0__.X)
/* harmony export */ });
/* harmony import */ var _SearchPOIItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18471);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchPOIItem__WEBPACK_IMPORTED_MODULE_0__]);
_SearchPOIItem__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m_": () => (/* reexport safe */ _DefaultPOIItem__WEBPACK_IMPORTED_MODULE_0__.m)
/* harmony export */ });
/* harmony import */ var _DefaultPOIItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61158);
/* harmony import */ var _SearchPOIItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99902);
/* harmony import */ var _DistancePOIStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30342);
/* harmony import */ var _POIMapMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25086);
/* harmony import */ var _MapPOIItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50032);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DefaultPOIItem__WEBPACK_IMPORTED_MODULE_0__, _SearchPOIItem__WEBPACK_IMPORTED_MODULE_1__, _DistancePOIStack__WEBPACK_IMPORTED_MODULE_2__, _POIMapMarker__WEBPACK_IMPORTED_MODULE_3__, _MapPOIItem__WEBPACK_IMPORTED_MODULE_4__]);
([_DefaultPOIItem__WEBPACK_IMPORTED_MODULE_0__, _SearchPOIItem__WEBPACK_IMPORTED_MODULE_1__, _DistancePOIStack__WEBPACK_IMPORTED_MODULE_2__, _POIMapMarker__WEBPACK_IMPORTED_MODULE_3__, _MapPOIItem__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43844:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ RecommendedListingsSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41430);
/* harmony import */ var helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12764);
/* harmony import */ var helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23517);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92552);
/* harmony import */ var views_ListingItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56200);
/* harmony import */ var views_SectionSwiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__, hooks_index__WEBPACK_IMPORTED_MODULE_5__, views_ListingItem__WEBPACK_IMPORTED_MODULE_6__, views_SectionSwiper__WEBPACK_IMPORTED_MODULE_7__]);
([helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__, hooks_index__WEBPACK_IMPORTED_MODULE_5__, views_ListingItem__WEBPACK_IMPORTED_MODULE_6__, views_SectionSwiper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const RecommendedListingsSection = (props)=>{
    const { recommendedListings  } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_5__/* .useTranslate */ .qM)({
        basePath: "pages.listing"
    });
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const getPrice = (0,helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "h4",
                children: translate("titles.you_may_also_like")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                mt: 3,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_SectionSwiper__WEBPACK_IMPORTED_MODULE_7__/* .SectionSwiper */ .P, {
                    slidesPerView: isMobile ? 1 : 3,
                    children: recommendedListings?.map((listingData)=>{
                        const { formatted_filters , id , slug , gallery , title , currency , address , average_price  } = listingData;
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
                            amount: parsedAveragePrice ? parsedAveragePrice : parsedBasePrice
                        });
                        const zip = undefined; // no BE data
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ListingItem__WEBPACK_IMPORTED_MODULE_6__/* .ListingItem */ .u2, {
                            address: address,
                            name: title,
                            zip: zip,
                            href: {
                                pathname: application_constants__WEBPACK_IMPORTED_MODULE_2__/* .listingRoute.getPathname */ .oo.getPathname(slug)
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
                            items: (gallery || []).map((galleryItem)=>{
                                const { id , src , title  } = galleryItem;
                                return {
                                    id,
                                    url: src,
                                    title
                                };
                            })
                        }, id);
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25739:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* reexport safe */ _RecommendedListingsSection__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _RecommendedListingsSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43844);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RecommendedListingsSection__WEBPACK_IMPORTED_MODULE_0__]);
_RecommendedListingsSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25444:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ AmenitiesFieldView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27074);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
/* harmony import */ var modals_AmenitiesModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54592);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19594);
/* harmony import */ var _AmenityView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10446);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, modals_AmenitiesModal__WEBPACK_IMPORTED_MODULE_4__, _AmenityView__WEBPACK_IMPORTED_MODULE_6__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, modals_AmenitiesModal__WEBPACK_IMPORTED_MODULE_4__, _AmenityView__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const AmenitiesFieldView = (props)=>{
    const { items , title , className , maxItems =10 , sx  } = props;
    const { value: isModalOpen , setTrue: handleModalOpen , setFalse: handleModalClose  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .useBoolean */ .kt)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)((theme)=>theme.breakpoints.down("sm"));
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        component: "section",
        className: className,
        sx: sx,
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                component: "h3",
                variant: "subtitle1",
                sx: {
                    mb: 3
                },
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, 175px)",
                gap: 3,
                children: items.slice(0, maxItems).map((item)=>{
                    const { id , title , ...amenityItemProps } = item;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AmenityView__WEBPACK_IMPORTED_MODULE_6__/* .AmenityView */ .U, {
                        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                            variant: "subtitle1",
                            children: title
                        }),
                        ...amenityItemProps
                    }, id);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_AmenitiesModal__WEBPACK_IMPORTED_MODULE_4__/* .AmenitiesModal */ .X, {
                open: isModalOpen,
                onClose: handleModalClose,
                amenities: items
            }),
            items.length > maxItems && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                onClick: handleModalOpen,
                variant: isMobile ? "outlined" : "text",
                fullWidth: isMobile,
                sx: {
                    display: "block",
                    mx: "auto",
                    mt: 4,
                    textTransform: "lowercase",
                    ":first-letter": {
                        textTransform: "uppercase"
                    }
                },
                color: "secondary",
                children: translate.root("buttons.show_all_items", {
                    items: translate.root("custom.amenities")
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (AmenitiesFieldView)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ AmenityView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94605);
/* harmony import */ var _LabeledIconView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63243);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, _LabeledIconView__WEBPACK_IMPORTED_MODULE_4__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, _LabeledIconView__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const AmenityView = (props)=>{
    const { title , isMatched =false , ...rest } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const renderTitle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (isMatched) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    title,
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                        icon: "fire",
                        color: theme.palette.error.main,
                        sx: {
                            ml: 1
                        }
                    })
                ]
            });
        } else {
            return title;
        }
    }, [
        isMatched,
        theme.palette.error.main,
        title
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LabeledIconView__WEBPACK_IMPORTED_MODULE_4__/* .IconWithTitleView */ .t, {
        ...rest,
        title: renderTitle
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* reexport safe */ _AmenityView__WEBPACK_IMPORTED_MODULE_0__.U)
/* harmony export */ });
/* harmony import */ var _AmenityView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9156);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AmenityView__WEBPACK_IMPORTED_MODULE_0__]);
_AmenityView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* reexport */ BlockWrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
;// CONCATENATED MODULE: ./src/components/views/BlockWrapper/BlockWrapper.tsx


function BlockWrapper(props) {
    const { children , sx , variant ="primary" , ...restProps } = props;
    const theme = (0,material_.useTheme)();
    const isDesktop = (0,material_.useMediaQuery)(theme.breakpoints.up("md"));
    const primarySxStyles = {
        bgcolor: "background.default",
        border: `1px solid ${theme.palette.primary.border}`,
        borderRadius: 4,
        ...isDesktop ? {
            p: 5
        } : {
            py: 7,
            px: 4
        }
    };
    const secondarySxStyles = {
        p: 3,
        borderRadius: 4,
        border: `1px solid ${theme.palette.primary.border}`,
        background: theme.palette.primary.contrastText
    };
    const wrapperSxStyles = variant === "primary" ? primarySxStyles : secondarySxStyles;
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            ...wrapperSxStyles,
            ...sx
        },
        ...restProps,
        children: children
    });
}
/* harmony default export */ const BlockWrapper_BlockWrapper = ((/* unused pure expression or super */ null && (BlockWrapper)));

;// CONCATENATED MODULE: ./src/components/views/BlockWrapper/index.ts



/***/ }),

/***/ 26355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* reexport */ CancellationPolicySection)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/components/Typography/index.ts + 1 modules
var Typography = __webpack_require__(19594);
;// CONCATENATED MODULE: ./src/components/views/CancellationPolicySection/CancellationPolicySection.tsx



const CancellationPolicySection = (props)=>{
    const { policyData , sx , className , title ="custom.cancellation_policy"  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: sx,
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography */.Z, {
                variant: "h4",
                sx: {
                    mb: 6
                },
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                container: true,
                spacing: 4,
                children: policyData.map((text)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        md: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography */.Z, {
                            variant: "subtitle1",
                            children: text
                        })
                    }, text);
                })
            })
        ]
    });
};
/* harmony default export */ const CancellationPolicySection_CancellationPolicySection = ((/* unused pure expression or super */ null && (CancellationPolicySection)));

;// CONCATENATED MODULE: ./src/components/views/CancellationPolicySection/index.ts




/***/ }),

/***/ 28024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ HouseRulesSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var templates_GridContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2098);
/* harmony import */ var templates_GridItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(120);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19594);
/* harmony import */ var _RequirementView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27884);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RequirementView__WEBPACK_IMPORTED_MODULE_5__]);
_RequirementView__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const HouseRulesSection = (props)=>{
    const { requirements , sx , className  } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.up("md"));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: sx,
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
                variant: "h4",
                sx: {
                    mb: 6
                },
                children: "custom.house_rules"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridContainer__WEBPACK_IMPORTED_MODULE_2__/* .GridContainer */ .T, {
                columnSpacing: 3,
                rowSpacing: isDesktop ? 4 : 3,
                children: requirements.map((item, index)=>{
                    const { label , isAllowed  } = item;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_3__/* .GridItem */ .P, {
                        md: 4,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RequirementView__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            allowed: isAllowed,
                            label: label
                        })
                    }, label + index /* Add 'index' because labels may be technically same */ );
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (HouseRulesSection)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* reexport safe */ _HouseRulesSection__WEBPACK_IMPORTED_MODULE_0__.g)
/* harmony export */ });
/* harmony import */ var _HouseRulesSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28024);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HouseRulesSection__WEBPACK_IMPORTED_MODULE_0__]);
_HouseRulesSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports ListingGalleryClasses, StyledListingGalleryView, ListingGalleryView */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51296);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var buttons_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15693);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94605);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92552);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62430);
/* harmony import */ var views_NoImageView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48113);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10491);
/* harmony import */ var _helpers_getItemLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93904);
/* harmony import */ var _layouts_WithActionsWrapper_WithActionsWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68190);
/* harmony import */ var _modals_PhotoGalleryModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, buttons_IconButton__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, hooks_index__WEBPACK_IMPORTED_MODULE_6__, theme_index__WEBPACK_IMPORTED_MODULE_7__, views_NoImageView__WEBPACK_IMPORTED_MODULE_8__, _layouts_WithActionsWrapper_WithActionsWrapper__WEBPACK_IMPORTED_MODULE_9__, _modals_PhotoGalleryModal__WEBPACK_IMPORTED_MODULE_10__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, buttons_IconButton__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, hooks_index__WEBPACK_IMPORTED_MODULE_6__, theme_index__WEBPACK_IMPORTED_MODULE_7__, views_NoImageView__WEBPACK_IMPORTED_MODULE_8__, _layouts_WithActionsWrapper_WithActionsWrapper__WEBPACK_IMPORTED_MODULE_9__, _modals_PhotoGalleryModal__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const PREFIX = "ListingGallery";
const ListingGalleryClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "imageList",
    "emptyImage",
    "imageListItem",
    "actionButton"
]);
const StyledListingGalleryView = (0,theme_index__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: "StyledListingGalleryView",
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    const desktopQuery = theme.breakpoints.up("sm");
    const mobileQuery = theme.breakpoints.down("sm");
    return {
        width: "100%",
        height: 400,
        [desktopQuery]: {
            height: 472
        },
        [`& .${ListingGalleryClasses.imageList}, .${ListingGalleryClasses.emptyImage}`]: {
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: parseFloat(String(theme.shape.borderRadius)) * 4,
            borderBottomRightRadius: parseFloat(String(theme.shape.borderRadius)) * 4,
            [desktopQuery]: {
                borderRadius: "unset"
            }
        },
        [`& .${ListingGalleryClasses.imageListItem}`]: {
            height: "100%",
            width: "100%",
            cursor: "pointer",
            ":after": {
                content: '""',
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                transition: theme.transitions.create("opacity", {
                    duration: theme.transitions.duration.standard
                }),
                backgroundColor: "#000",
                opacity: 0
            },
            ":hover": {
                ":after": {
                    opacity: 0.3
                }
            },
            // without it borderRadius is not working
            position: "relative",
            overflow: "hidden",
            [desktopQuery]: {
                borderRadius: parseFloat(String(theme.shape.borderRadius)) * 2
            }
        },
        [`& .${ListingGalleryClasses.emptyImage}`]: {
            [desktopQuery]: {
                borderRadius: parseFloat(String(theme.shape.borderRadius)) * 2
            }
        },
        [`& .${_layouts_WithActionsWrapper_WithActionsWrapper__WEBPACK_IMPORTED_MODULE_9__/* .WithActionsWrapperClasses.actions */ .U.actions}`]: {
            zIndex: 1,
            [mobileQuery]: {
                top: "auto",
                bottom: 0
            }
        },
        [`& .${ListingGalleryClasses.actionButton}`]: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary
        }
    };
});
const ListingGalleryView = (props)=>{
    const { images , ...rest } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .qM)();
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme_index__WEBPACK_IMPORTED_MODULE_7__/* .theme.breakpoints.up */ .rS.breakpoints.up("sm"));
    const previewImagesCount = isDesktop ? _constants__WEBPACK_IMPORTED_MODULE_11__/* .PREVIEW_IMAGE_COUNT */ .BW : 1;
    const previewImages = images.slice(0, previewImagesCount);
    const isGalleryImages = !!images.find((image)=>image.src);
    const isOneImage = images.length === 1;
    const { value: isModalOpen , setTrue: handleModalOpen , setFalse: handleModalClose  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .useBoolean */ .kt)(false);
    const renderActionButton = isGalleryImages ? !isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !isOneImage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_IconButton__WEBPACK_IMPORTED_MODULE_4__/* .IconButton */ .hU, {
            variant: "contained",
            onClick: handleModalOpen,
            sx: {
                width: 16,
                height: 16
            },
            classes: {
                contained: ListingGalleryClasses.actionButton
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__/* .IcoMoon */ .n, {
                icon: "image",
                size: "small",
                color: theme_index__WEBPACK_IMPORTED_MODULE_7__/* .theme.palette.text.primary */ .rS.palette.text.primary
            })
        }) : null
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !isOneImage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "contained",
            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__/* .IcoMoon */ .n, {
                icon: "image",
                color: theme_index__WEBPACK_IMPORTED_MODULE_7__/* .theme.palette.text.primary */ .rS.palette.text.primary
            }),
            onClick: handleModalOpen,
            classes: {
                root: ListingGalleryClasses.actionButton
            },
            children: translate.root("buttons.show_all_items", {
                items: translate.root("custom.photo", {
                    count: 2
                })
            })
        }) : null
    }) : null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledListingGalleryView, {
        ...rest,
        children: [
            isGalleryImages && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modals_PhotoGalleryModal__WEBPACK_IMPORTED_MODULE_10__/* .PhotoGalleryModal */ .Qp, {
                open: isModalOpen,
                urlName: "listing-gallery",
                images: images.filter((image)=>image.src),
                onOpen: handleModalOpen,
                onClose: handleModalClose
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_WithActionsWrapper_WithActionsWrapper__WEBPACK_IMPORTED_MODULE_9__/* .WithActionsWrapper */ .j, {
                actions: renderActionButton,
                variant: "topRight",
                children: isGalleryImages ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ImageList, {
                    className: ListingGalleryClasses.imageList,
                    variant: "quilted",
                    cols: _constants__WEBPACK_IMPORTED_MODULE_11__/* .COLUMN_COUNT */ .Wt,
                    gap: 8,
                    sx: {
                        marginBlockStart: 0
                    },
                    children: previewImages.map((imageData, itemIndex)=>{
                        const { id , src , title  } = imageData;
                        const layout = (0,_helpers_getItemLayout__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)({
                            itemIndex,
                            isMobile: !isDesktop,
                            itemsCount: previewImages.length
                        });
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ImageListItem, {
                            onClick: handleModalOpen,
                            className: ListingGalleryClasses.imageListItem,
                            ...layout,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_components__WEBPACK_IMPORTED_MODULE_2__/* .NextImage */ .o, {
                                src: src,
                                alt: title,
                                fill: true,
                                style: {
                                    objectFit: "cover"
                                }
                            })
                        }, id);
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_NoImageView__WEBPACK_IMPORTED_MODULE_8__/* .NoImageView */ .N, {
                    className: ListingGalleryClasses.emptyImage
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingGalleryView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BW": () => (/* binding */ PREVIEW_IMAGE_COUNT),
/* harmony export */   "HV": () => (/* binding */ ROW_COUNT),
/* harmony export */   "Wt": () => (/* binding */ COLUMN_COUNT)
/* harmony export */ });
const COLUMN_COUNT = 5;
const ROW_COUNT = 2;
const PREVIEW_IMAGE_COUNT = 5;


/***/ }),

/***/ 93904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10491);

const getItemLayout = (params)=>{
    const { isMobile , itemIndex , itemsCount  } = params;
    if (isMobile) {
        return {
            cols: _constants__WEBPACK_IMPORTED_MODULE_0__/* .COLUMN_COUNT */ .Wt,
            rows: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ROW_COUNT */ .HV
        };
    }
    if (itemIndex === 0) {
        if (itemsCount === 1) {
            return {
                cols: _constants__WEBPACK_IMPORTED_MODULE_0__/* .COLUMN_COUNT */ .Wt,
                rows: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ROW_COUNT */ .HV
            };
        }
        if (itemsCount > 1) {
            return {
                cols: 3,
                rows: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ROW_COUNT */ .HV
            };
        }
    }
    if (itemIndex === 1) {
        if (itemsCount === 2) {
            return {
                cols: 2,
                rows: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ROW_COUNT */ .HV
            };
        }
        if (itemsCount >= 3 && itemsCount < 5) {
            return {
                cols: 2,
                rows: 1
            };
        }
        if (itemsCount >= 5) {
            return {
                cols: 1,
                rows: 1
            };
        }
    }
    if (itemIndex === 2) {
        if (itemsCount === 3) {
            return {
                cols: 2,
                rows: 1
            };
        }
        if (itemsCount >= 4) {
            return {
                cols: 1,
                rows: 1
            };
        }
    }
    if (itemIndex === 3) {
        return {
            cols: 1,
            rows: 1
        };
    }
    return {};
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getItemLayout);


/***/ }),

/***/ 36996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ LocationView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94605);
/* harmony import */ var _templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19572);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_1__, _templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_2__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_1__, _templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const LocationView = (props)=>{
    const { label , sx , className  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_2__/* .WithTitleTemplate */ .qX, {
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
            variant: "subtitle1",
            sx: {
                color: "text.primary"
            },
            children: label
        }),
        sx: sx,
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_1__/* .IcoMoon */ .n, {
            icon: "pin"
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (LocationView)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61925:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* reexport safe */ _LocationView__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _LocationView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36996);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LocationView__WEBPACK_IMPORTED_MODULE_0__]);
_LocationView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* reexport */ LowerPriceView)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ../../packages/assets/src/index.ts + 8 modules
var src = __webpack_require__(59662);
// EXTERNAL MODULE: ./src/components/Typography/index.ts + 1 modules
var Typography = __webpack_require__(19594);
;// CONCATENATED MODULE: ./src/components/views/LowerPriceView/LowerPriceView.tsx




const LowerPriceView = (props)=>{
    const { title ="components.lower_price.title" , subtitle ="components.lower_price.subtitle" , discount , sx , ...restBoxProps } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            borderColor: "primary.border",
            backgroundColor: "background.default",
            borderRadius: 4,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            ...sx
        },
        border: 1,
        ...restBoxProps,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography */.Z, {
                        variant: "subtitle2",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography */.Z, {
                        variant: "body1",
                        color: "text.light",
                        sx: {
                            mr: 3
                        },
                        translateOptions: {
                            value: discount
                        },
                        children: subtitle
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(src/* GiftIcon */.Og, {})
        ]
    });
};
/* harmony default export */ const LowerPriceView_LowerPriceView = ((/* unused pure expression or super */ null && (LowerPriceView)));

;// CONCATENATED MODULE: ./src/components/views/LowerPriceView/index.ts




/***/ }),

/***/ 27884:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _RequirementView__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _RequirementView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4606);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RequirementView__WEBPACK_IMPORTED_MODULE_0__]);
_RequirementView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__": () => (/* binding */ ScrollableWrapper)
/* harmony export */ });
/* unused harmony export scrollableWrapperClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


const PREFIX = "ScrollableWrapper";
const scrollableWrapperClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "scrollableBlock"
]);
const ScrollableWrapper = (props)=>{
    const { children , scroll ="xy" , scrollableBlockProps ={} , sx , hiddenScrollbar =false , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            boxSizing: "border-box",
            ...(()=>{
                const distanceSpacing = 0.5;
                switch(scroll){
                    case "x":
                        {
                            return {
                                pb: distanceSpacing
                            };
                        }
                    case "y":
                        {
                            return {
                                pr: distanceSpacing
                            };
                        }
                    case "xy":
                        {
                            return {
                                pb: distanceSpacing,
                                pr: distanceSpacing
                            };
                        }
                }
            })(),
            height: "100%",
            width: "100%",
            ...sx
        },
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            className: scrollableWrapperClasses.scrollableBlock,
            ...scrollableBlockProps,
            sx: {
                boxSizing: "border-box",
                ...(()=>{
                    const distanceSpacing = 0.5;
                    if (hiddenScrollbar) {
                        return {
                            "&::-webkit-scrollbar": {
                                display: "none" /* Hide scrollbar for Chrome, Safari and Opera */ 
                            }
                        };
                    }
                    switch(scroll){
                        case "x":
                            {
                                return {
                                    pb: distanceSpacing
                                };
                            }
                        case "y":
                            {
                                return {
                                    pr: distanceSpacing
                                };
                            }
                        case "xy":
                            {
                                return {
                                    pb: distanceSpacing,
                                    pr: distanceSpacing
                                };
                            }
                    }
                })(),
                overflow: "auto",
                height: "100%",
                width: "100%",
                ...scrollableBlockProps?.sx || {}
            },
            children: children
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ScrollableWrapper)));


/***/ }),

/***/ 50129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ LISTING_AVAILABILITY_STATUSES)
/* harmony export */ });
const LISTING_AVAILABILITY_STATUSES = {
    available: "available",
    unavailable: "unavailable"
};


/***/ }),

/***/ 45268:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ac": () => (/* reexport safe */ _useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   "te": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.t)
/* harmony export */ });
/* harmony import */ var _useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7681);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39368);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50129);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_0__, _schema__WEBPACK_IMPORTED_MODULE_1__]);
([_useGetListingAvailabilities__WEBPACK_IMPORTED_MODULE_0__, _schema__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39368:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ listingAvailabilityResponseSchema)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9926);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50129);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_2__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const listingAvailabilityResponseSchema = zod__WEBPACK_IMPORTED_MODULE_2__.z.array(zod__WEBPACK_IMPORTED_MODULE_2__.z.object({
    date: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().transform((value, ctx)=>{
        const userTimezoneDate = new Date(value);
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isValid)(userTimezoneDate)) {
            const timezoneOffset = userTimezoneDate.getTimezoneOffset();
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.addMinutes)(userTimezoneDate, timezoneOffset);
        }
        ctx.addIssue({
            code: zod__WEBPACK_IMPORTED_MODULE_2__.ZodIssueCode.invalid_date
        });
        return zod__WEBPACK_IMPORTED_MODULE_2__.z.NEVER;
    }),
    status: zod__WEBPACK_IMPORTED_MODULE_2__.z.nativeEnum(_constants__WEBPACK_IMPORTED_MODULE_3__/* .LISTING_AVAILABILITY_STATUSES */ .t),
    min_nights: zod__WEBPACK_IMPORTED_MODULE_2__.z.number().nullable(),
    max_nights: zod__WEBPACK_IMPORTED_MODULE_2__.z.number().nullable(),
    is_checkin_available: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodBooleanSchema */ .OC,
    is_checkout_available: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodBooleanSchema */ .OC
})).default([]);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useGetListingAvailabilities)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22825);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39368);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _schema__WEBPACK_IMPORTED_MODULE_2__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _schema__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getListingAvailabilityQueryKey = (params)=>{
    const { range , listingId  } = params;
    return [
        application_resources__WEBPACK_IMPORTED_MODULE_3__/* .LISTINGS_RESOURCE */ .t8,
        application_resources__WEBPACK_IMPORTED_MODULE_3__/* .AVAILABILITY_RESOURCE */ .PO,
        listingId,
        range
    ];
};
const queryFn = async (context)=>{
    const { queryKey  } = context;
    const [, , listingId, range] = queryKey;
    const { data: { data: listingAvailabilityResponseData  }  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.get */ .zk.get({
        pathname: `${application_resources__WEBPACK_IMPORTED_MODULE_3__/* .LISTINGS_RESOURCE */ .t8}/${listingId}/${application_resources__WEBPACK_IMPORTED_MODULE_3__/* .AVAILABILITY_RESOURCE */ .PO}`
    }, {
        params: range
    });
    return _schema__WEBPACK_IMPORTED_MODULE_2__/* .listingAvailabilityResponseSchema.parse */ .$.parse(listingAvailabilityResponseData);
};
const useGetListingAvailabilities = (params)=>{
    const { listingId , ranges , options =[]  } = params;
    const queries = ranges.map((range, i)=>{
        const optionsItem = options[i];
        const isPassedEnabledFalse = optionsItem?.enabled === false;
        const enabled = isPassedEnabledFalse ? false : !!listingId;
        return {
            queryKey: getListingAvailabilityQueryKey({
                listingId,
                range
            }),
            queryFn,
            ...optionsItem,
            enabled
        };
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQueries)({
        // We want queries to be tuple
        queries: queries
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68433:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* reexport safe */ _useGetRecommendedListings__WEBPACK_IMPORTED_MODULE_0__.T)
/* harmony export */ });
/* harmony import */ var _useGetRecommendedListings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8990);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useGetRecommendedListings__WEBPACK_IMPORTED_MODULE_0__]);
_useGetRecommendedListings__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useGetRecommendedListings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49752);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22825);
/* harmony import */ var contexts_ListContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56388);
/* harmony import */ var helpers_filters_getParsedFilters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41736);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _useGetFilterAttributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75813);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, helpers_filters_getParsedFilters__WEBPACK_IMPORTED_MODULE_5__, _useGetFilterAttributes__WEBPACK_IMPORTED_MODULE_8__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, helpers_filters_getParsedFilters__WEBPACK_IMPORTED_MODULE_5__, _useGetFilterAttributes__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const fetchListings = async (context)=>{
    const { queryKey  } = context;
    const [filter] = queryKey;
    const { data: { data: recommendedListings  }  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_1__/* .fetchClient.get */ .zk.get({
        pathname: application_resources__WEBPACK_IMPORTED_MODULE_9__/* .SEARCH_RESOURCE */ .nP,
        filter,
        sort: {
            field: "rating",
            order: "DESC"
        }
    });
    return _packages_providers__WEBPACK_IMPORTED_MODULE_1__/* .zodSearchSchemas.index.parse */ .aq.index.parse(recommendedListings);
};
const useGetRecommendedListings = (params)=>{
    const { filter: listingFilter  } = params;
    const { listParams  } = (0,contexts_ListContext__WEBPACK_IMPORTED_MODULE_4__/* .useListContext */ .UU)();
    const { data: filterAttributes = []  } = (0,_useGetFilterAttributes__WEBPACK_IMPORTED_MODULE_8__/* .useGetFilterAttributes */ .xe)({
        purpose: application_constants__WEBPACK_IMPORTED_MODULE_3__/* .PURPOSE_TYPES.searching */ .NZ.searching
    });
    /**
   * We need to prepare filter to allow send single values
   * in Array if FA 'is_multiple: true'
   */ const { selectedFilters  } = (0,helpers_filters_getParsedFilters__WEBPACK_IMPORTED_MODULE_5__/* .getParsedFilters */ .E)({
        filter: listParams?.filter,
        filterAttributes: filterAttributes,
        independentFiltersSlugs: [
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .COUNTRY_SOURCE */ .ui,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .STATE_SOURCE */ .Me
        ]
    });
    const excludeIds = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(listingFilter, "exclude_ids");
    const finalFilter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        // if local storage filter is not empty then use it, otherwise, use listing data for filtering
        const filter = lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(selectedFilters) ? listingFilter : {
            exclude_ids: excludeIds,
            ...selectedFilters
        };
        const { city , country , ...restFilter } = filter;
        const isCountryCityFilters = !!city && !!country;
        return {
            ...restFilter,
            ...isCountryCityFilters && {
                city,
                country
            },
            state_code: selectedFilters.state,
            country_code: selectedFilters.country,
            [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_PRICE_SLUG */ .LI]: {
                min: lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(filter, [
                    application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_PRICE_SLUG */ .LI,
                    0
                ]),
                max: lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(filter, [
                    application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_PRICE_SLUG */ .LI,
                    1
                ])
            }
        };
    }, [
        excludeIds,
        listingFilter,
        selectedFilters
    ]);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)({
        queryKey: [
            finalFilter
        ],
        queryFn: fetchListings,
        enabled: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(filterAttributes)
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
var __webpack_exports__ = __webpack_require__.X(0, [97,487,876,577,789,857,975,31,367,54,319,822,622,268,6,797,460,694,201,619,634,294,755], () => (__webpack_exec__(28760)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=[slug].js.map