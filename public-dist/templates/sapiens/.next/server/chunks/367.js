"use strict";
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 76889:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ checkIsCurrencySupported)
/* harmony export */ });
/* harmony import */ var hooks_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4193);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_queries__WEBPACK_IMPORTED_MODULE_0__]);
hooks_queries__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const checkIsCurrencySupported = async (params)=>{
    const { context , currencyCode , queryClient  } = params;
    const currenciesData = await (0,hooks_queries__WEBPACK_IMPORTED_MODULE_0__/* .fetchCurrencies */ .U$)(queryClient, context);
    return currenciesData.some((currency)=>{
        return currency.code === currencyCode;
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* reexport safe */ _checkIsCurrencySupported__WEBPACK_IMPORTED_MODULE_0__.U)
/* harmony export */ });
/* harmony import */ var _checkIsCurrencySupported__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76889);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_checkIsCurrencySupported__WEBPACK_IMPORTED_MODULE_0__]);
_checkIsCurrencySupported__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53282:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ checkIsLocaleSupported)
/* harmony export */ });
/* harmony import */ var hooks_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4193);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_queries__WEBPACK_IMPORTED_MODULE_0__]);
hooks_queries__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const checkIsLocaleSupported = async (params)=>{
    const { context , locale , queryClient  } = params;
    const websiteData = await (0,hooks_queries__WEBPACK_IMPORTED_MODULE_0__/* .fetchWebsite */ .S8)(queryClient, context);
    const { locales: websiteLocales = []  } = websiteData || {};
    return websiteLocales.some((record)=>locale === record.locale);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54469:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* reexport safe */ _checkIsLocaleSupported__WEBPACK_IMPORTED_MODULE_0__.Y)
/* harmony export */ });
/* harmony import */ var _checkIsLocaleSupported__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53282);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_checkIsLocaleSupported__WEBPACK_IMPORTED_MODULE_0__]);
_checkIsLocaleSupported__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36432:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getCompanyDefaultCurrencyCode)
/* harmony export */ });
/* harmony import */ var hooks_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4193);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_queries__WEBPACK_IMPORTED_MODULE_0__]);
hooks_queries__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getCompanyDefaultCurrencyCode = async (params)=>{
    const { context , queryClient  } = params;
    const websiteData = await (0,hooks_queries__WEBPACK_IMPORTED_MODULE_0__/* .fetchWebsite */ .S8)(queryClient, context);
    const currenciesData = await (0,hooks_queries__WEBPACK_IMPORTED_MODULE_0__/* .fetchCurrencies */ .U$)(queryClient, context);
    const companyDefaultCurrency = currenciesData.find((currency)=>{
        return currency.id === websiteData?.company?.default_currency_id;
    });
    return companyDefaultCurrency?.code;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* reexport safe */ _getCompanyDefaultCurrencyCode__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _getCompanyDefaultCurrencyCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36432);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getCompanyDefaultCurrencyCode__WEBPACK_IMPORTED_MODULE_0__]);
_getCompanyDefaultCurrencyCode__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3430:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ getCompanyDefaultLocale)
/* harmony export */ });
/* harmony import */ var hooks_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4193);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_queries__WEBPACK_IMPORTED_MODULE_0__]);
hooks_queries__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getCompanyDefaultLocale = async (params)=>{
    const { context , queryClient  } = params;
    const { company , locales =[]  } = await (0,hooks_queries__WEBPACK_IMPORTED_MODULE_0__/* .fetchWebsite */ .S8)(queryClient, context);
    const defaultLocaleId = company?.default_language_id;
    const defaultLocaleRecord = locales.find((locale)=>locale.id === defaultLocaleId);
    return defaultLocaleRecord?.locale;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* reexport safe */ _getCompanyDefaultLocale__WEBPACK_IMPORTED_MODULE_0__.v)
/* harmony export */ });
/* harmony import */ var _getCompanyDefaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getCompanyDefaultLocale__WEBPACK_IMPORTED_MODULE_0__]);
_getCompanyDefaultLocale__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ getCurrencyRedirect)
/* harmony export */ });
/* harmony import */ var application_cookiesKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39968);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _checkIsCurrencySupported__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82929);
/* harmony import */ var _getCompanyDefaultCurrencyCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_1__, _checkIsCurrencySupported__WEBPACK_IMPORTED_MODULE_3__, _getCompanyDefaultCurrencyCode__WEBPACK_IMPORTED_MODULE_4__]);
([hooks_index__WEBPACK_IMPORTED_MODULE_1__, _checkIsCurrencySupported__WEBPACK_IMPORTED_MODULE_3__, _getCompanyDefaultCurrencyCode__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const getCurrencyRedirect = async (params)=>{
    const { context , queryClient  } = params;
    const queryCurrencyCode = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(context.query, hooks_index__WEBPACK_IMPORTED_MODULE_1__/* .CURRENCY_QUERY_PARAM_KEY */ .x0);
    const cookies = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookies)({
        req: context.req,
        res: context.res
    });
    const isQueryCurrencyCodeSupported = Array.isArray(queryCurrencyCode) ? false : await (0,_checkIsCurrencySupported__WEBPACK_IMPORTED_MODULE_3__/* .checkIsCurrencySupported */ .U)({
        queryClient,
        context,
        currencyCode: queryCurrencyCode
    });
    if (!queryCurrencyCode || !isQueryCurrencyCodeSupported) {
        const currencyCodeFromCookies = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(cookies, application_cookiesKeys__WEBPACK_IMPORTED_MODULE_5__/* .CURRENCY_COOKIE_KEY */ .v);
        const isCurrencyCodeFromCookiesSupported = await (0,_checkIsCurrencySupported__WEBPACK_IMPORTED_MODULE_3__/* .checkIsCurrencySupported */ .U)({
            queryClient,
            context,
            currencyCode: currencyCodeFromCookies
        });
        const companyDefaultCurrencyCode = await (0,_getCompanyDefaultCurrencyCode__WEBPACK_IMPORTED_MODULE_4__/* .getCompanyDefaultCurrencyCode */ .N)({
            context,
            queryClient
        });
        const [urlWithoutSearch, searchString] = context.resolvedUrl.split("?");
        const searchParams = new URLSearchParams(searchString);
        const redirectCurrencyCode = currencyCodeFromCookies && isCurrencyCodeFromCookiesSupported ? currencyCodeFromCookies : companyDefaultCurrencyCode;
        if (redirectCurrencyCode) {
            searchParams.set(hooks_index__WEBPACK_IMPORTED_MODULE_1__/* .CURRENCY_QUERY_PARAM_KEY */ .x0, redirectCurrencyCode);
        } else {
            searchParams.delete(hooks_index__WEBPACK_IMPORTED_MODULE_1__/* .CURRENCY_QUERY_PARAM_KEY */ .x0);
        }
        // We should include locale to redirect path manually
        const localeForRedirect = context.locale === "default" ? "" : `/${context.locale}`;
        const stringifiedSearchParams = searchParams.toString();
        const newSearch = stringifiedSearchParams ? `?${stringifiedSearchParams}` : "";
        return {
            destination: `${localeForRedirect}${urlWithoutSearch}${newSearch}`,
            permanent: false
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29318:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* reexport safe */ _getCurrencyRedirect__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _getCurrencyRedirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getCurrencyRedirect__WEBPACK_IMPORTED_MODULE_0__]);
_getCurrencyRedirect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ getLocaleRedirect)
/* harmony export */ });
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41430);
/* harmony import */ var application_cookiesKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39968);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _checkIsLocaleSupported__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54469);
/* harmony import */ var _getCompanyDefaultLocale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77340);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_checkIsLocaleSupported__WEBPACK_IMPORTED_MODULE_3__, _getCompanyDefaultLocale__WEBPACK_IMPORTED_MODULE_4__]);
([_checkIsLocaleSupported__WEBPACK_IMPORTED_MODULE_3__, _getCompanyDefaultLocale__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const getLocaleRedirect = async (params)=>{
    const { context , queryClient  } = params;
    const isDefaultLocale = context.locale === "default";
    const cookies = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookies)({
        req: context.req,
        res: context.res
    });
    const isContextLocaleSupported = await (0,_checkIsLocaleSupported__WEBPACK_IMPORTED_MODULE_3__/* .checkIsLocaleSupported */ .Y)({
        queryClient,
        context,
        locale: context.locale
    });
    if (isDefaultLocale || !isContextLocaleSupported) {
        const localeFromCookies = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(cookies, application_cookiesKeys__WEBPACK_IMPORTED_MODULE_5__/* .LOCALE_COOKIE_KEY */ .P);
        const isLocaleFromCookiesSupported = await (0,_checkIsLocaleSupported__WEBPACK_IMPORTED_MODULE_3__/* .checkIsLocaleSupported */ .Y)({
            queryClient,
            context,
            locale: localeFromCookies
        });
        const companyDefaultLocale = await (0,_getCompanyDefaultLocale__WEBPACK_IMPORTED_MODULE_4__/* .getCompanyDefaultLocale */ .v)({
            queryClient,
            context
        });
        const redirectLocale = localeFromCookies && isLocaleFromCookiesSupported ? localeFromCookies : companyDefaultLocale ?? application_constants__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_LOCALE */ .ZW;
        return {
            destination: `/${redirectLocale}${context.resolvedUrl}`,
            permanent: false
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97269:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _getLocaleRedirect__WEBPACK_IMPORTED_MODULE_0__.E)
/* harmony export */ });
/* harmony import */ var _getLocaleRedirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42528);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getLocaleRedirect__WEBPACK_IMPORTED_MODULE_0__]);
_getLocaleRedirect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84785:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _getLocaleRedirect__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "R": () => (/* reexport safe */ _getCurrencyRedirect__WEBPACK_IMPORTED_MODULE_1__.R)
/* harmony export */ });
/* harmony import */ var _getLocaleRedirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97269);
/* harmony import */ var _getCurrencyRedirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29318);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getLocaleRedirect__WEBPACK_IMPORTED_MODULE_0__, _getCurrencyRedirect__WEBPACK_IMPORTED_MODULE_1__]);
([_getLocaleRedirect__WEBPACK_IMPORTED_MODULE_0__, _getCurrencyRedirect__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71093:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* reexport safe */ _withServerSideProps__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _withServerSideProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77528);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_withServerSideProps__WEBPACK_IMPORTED_MODULE_0__]);
_withServerSideProps__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ withServerSideProps)
/* harmony export */ });
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49752);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84785);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, hooks__WEBPACK_IMPORTED_MODULE_4__, _helpers__WEBPACK_IMPORTED_MODULE_7__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, hooks__WEBPACK_IMPORTED_MODULE_4__, _helpers__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const withServerSideProps = (params)=>{
    const { fetchers , handler , disableRequests , enableRequestsOnClientSideTransition =false  } = params || {};
    return async (context)=>{
        const queryClient = (0,_packages_providers__WEBPACK_IMPORTED_MODULE_1__/* .createQueryClient */ .cf)({
            context
        });
        const builderState = _king_david_it_builder__WEBPACK_IMPORTED_MODULE_0__.Builder.getStateFromURL(context.resolvedUrl);
        const userAgent = context.req.headers["user-agent"];
        // Check if user moved from one page to another in browser
        const isClientSideTransition = context.req.url?.startsWith("/_next");
        const shouldDisableFetchers = disableRequests || isClientSideTransition && !enableRequestsOnClientSideTransition;
        const localeRedirect = await (0,_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getLocaleRedirect */ .E)({
            queryClient,
            context
        });
        if (localeRedirect) {
            return {
                redirect: localeRedirect
            };
        }
        const currencyRedirect = await (0,_helpers__WEBPACK_IMPORTED_MODULE_7__/* .getCurrencyRedirect */ .R)({
            queryClient,
            context
        });
        if (currencyRedirect) {
            return {
                redirect: currencyRedirect
            };
        }
        try {
            if (!shouldDisableFetchers) {
                /**
         * Send requests to API
         */ let fetchersPromises = [];
                // when we edit page in builder, we don't need to fetch page data (except website settings to set theme colors)
                if (fetchers && !builderState.isEditing) {
                    fetchersPromises = fetchers.map((fetcher)=>fetcher(queryClient, context));
                }
                /**
         * Wait for promises to resolve, data from requests will be available inside of queryClient
         */ await Promise.all(fetchersPromises);
            }
        } catch (err) {
        //
        }
        /**
     * We should get correct values here after redirects,
     * so we use "as" for types
     */ const locale = context.locale;
        const currencyCode = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(context.query, hooks__WEBPACK_IMPORTED_MODULE_4__/* .CURRENCY_QUERY_PARAM_KEY */ .x0);
        const cookies = (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.getCookies)({
            req: context.req,
            res: context.res
        });
        const props = {
            locale,
            currencyCode,
            userAgent,
            cookies,
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_6__.serverSideTranslations)(locale),
            /**
       * Collect all queries data and pass it to browser
       *
       * Workaround JSON.parse(JSON.stringify()) for infinite queries
       * @see https://github.com/TanStack/query/issues/1458#issuecomment-747716357
       */ dehydratedState: JSON.parse(JSON.stringify((0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.dehydrate)(queryClient)))
        };
        return handler ? await handler(queryClient, context, props) : {
            props
        };
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _useGetLocales__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   "n": () => (/* reexport safe */ _useGetLocales__WEBPACK_IMPORTED_MODULE_0__.n)
/* harmony export */ });
/* harmony import */ var _useGetLocales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81557);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useGetLocales__WEBPACK_IMPORTED_MODULE_0__]);
_useGetLocales__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useGetLocales),
/* harmony export */   "n": () => (/* binding */ prefetchLocales)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const queryKey = [
    application_resources__WEBPACK_IMPORTED_MODULE_2__/* .LOCALES_RESOURCE */ ._m
];
const queryFn = async (params)=>{
    const { meta  } = params;
    const context = meta?.context;
    const endpoint = application_resources__WEBPACK_IMPORTED_MODULE_2__/* .LOCALES_RESOURCE */ ._m;
    const { data: { data  }  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.get */ .zk.get({
        pathname: endpoint
    }, {
        context
    });
    return _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodLocaleSchemas.index.parse */ .Jc.index.parse(data);
};
const prefetchLocales = (queryClient, context)=>{
    return queryClient.prefetchQuery({
        queryKey,
        queryFn,
        meta: {
            context
        }
    });
};
const useGetLocales = ()=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey,
        queryFn,
        refetchOnMount: false
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=367.js.map