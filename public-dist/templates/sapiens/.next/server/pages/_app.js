(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 73401:
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
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49752);
/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19063);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41430);
/* harmony import */ var buttons_WhatsAppFloatButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54294);
/* harmony import */ var contexts_CookiesContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76579);
/* harmony import */ var contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71583);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48719);
/* harmony import */ var custom_PageLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15197);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92552);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var providers_CaptchaProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33773);
/* harmony import */ var providers_EmotionCacheProvider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55010);
/* harmony import */ var providers_ErrorHandlingManager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(66185);
/* harmony import */ var providers_InterseptorsManager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(28931);
/* harmony import */ var providers_SnackbarProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(87653);
/* harmony import */ var providers_TagManagerProvider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(97942);
/* harmony import */ var providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(70880);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9926);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(26327);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var theme_globalStyles_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(94009);
/* harmony import */ var theme_globalStyles_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(theme_globalStyles_css__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var theme_icomoon_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(75284);
/* harmony import */ var theme_icomoon_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(theme_icomoon_css__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var builder_menus_BaseMenu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(34438);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_7__, buttons_WhatsAppFloatButton__WEBPACK_IMPORTED_MODULE_9__, contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_11__, custom_PageLoader__WEBPACK_IMPORTED_MODULE_13__, hooks_index__WEBPACK_IMPORTED_MODULE_14__, providers_CaptchaProvider__WEBPACK_IMPORTED_MODULE_17__, providers_EmotionCacheProvider__WEBPACK_IMPORTED_MODULE_18__, providers_ErrorHandlingManager__WEBPACK_IMPORTED_MODULE_19__, providers_InterseptorsManager__WEBPACK_IMPORTED_MODULE_20__, providers_SnackbarProvider__WEBPACK_IMPORTED_MODULE_21__, providers_TagManagerProvider__WEBPACK_IMPORTED_MODULE_22__, providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_23__, zod__WEBPACK_IMPORTED_MODULE_24__, builder_menus_BaseMenu__WEBPACK_IMPORTED_MODULE_28__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_7__, buttons_WhatsAppFloatButton__WEBPACK_IMPORTED_MODULE_9__, contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_11__, custom_PageLoader__WEBPACK_IMPORTED_MODULE_13__, hooks_index__WEBPACK_IMPORTED_MODULE_14__, providers_CaptchaProvider__WEBPACK_IMPORTED_MODULE_17__, providers_EmotionCacheProvider__WEBPACK_IMPORTED_MODULE_18__, providers_ErrorHandlingManager__WEBPACK_IMPORTED_MODULE_19__, providers_InterseptorsManager__WEBPACK_IMPORTED_MODULE_20__, providers_SnackbarProvider__WEBPACK_IMPORTED_MODULE_21__, providers_TagManagerProvider__WEBPACK_IMPORTED_MODULE_22__, providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_23__, zod__WEBPACK_IMPORTED_MODULE_24__, builder_menus_BaseMenu__WEBPACK_IMPORTED_MODULE_28__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






























const CustomApp = (props)=>{
    const { Component , pageProps , router  } = props;
    const isListingPage = router.pathname.includes(application_constants__WEBPACK_IMPORTED_MODULE_8__/* .listingRoute.route */ .oo.route);
    const isEmbeddedPage = router.pathname.includes(application_constants__WEBPACK_IMPORTED_MODULE_8__/* .EMBEDDED_ROUTE */ .vw);
    const [builderState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>_king_david_it_builder__WEBPACK_IMPORTED_MODULE_4__.Builder.getStateFromURL(router.asPath));
    // This ensures that data is not shared between different users and requests
    const [queryClient] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>(0,_packages_providers__WEBPACK_IMPORTED_MODULE_5__/* .createQueryClient */ .cf)({
            builderState
        }));
    const translatedZodErrorMap = (0,hooks_index__WEBPACK_IMPORTED_MODULE_14__/* .useTranslatedZodErrorMap */ .IW)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        (0,zod__WEBPACK_IMPORTED_MODULE_24__.setErrorMap)(translatedZodErrorMap);
    }, [
        translatedZodErrorMap
    ]);
    const getWhatsAppFloatButtonSx = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return {
            ...isListingPage ? {
                bottom: {
                    xs: "5rem",
                    sm: "1.5rem"
                }
            } : {},
            ...isEmbeddedPage ? {
                display: "none"
            } : {}
        };
    }, [
        isEmbeddedPage,
        isListingPage
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(contexts_CookiesContext__WEBPACK_IMPORTED_MODULE_10__/* .CookiesContextProvider */ .a7, {
        initialCookies: pageProps.cookies,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_packages_providers__WEBPACK_IMPORTED_MODULE_5__/* .DeviceDetectContextProvider */ .q9, {
            userAgent: pageProps.userAgent,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClientProvider, {
                client: queryClient,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.Hydrate, {
                    state: pageProps.dehydratedState,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_15___default()), {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(providers_CaptchaProvider__WEBPACK_IMPORTED_MODULE_17__/* .CaptchaProvider */ .K, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_4__.BuilderStateProvider, {
                                value: builderState,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_12__/* .LocaleContextProvider */ .Qu, {
                                    initialLocale: pageProps.locale,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_11__/* .CurrencyContextProvider */ .SF, {
                                        initialCurrencyCode: pageProps.currencyCode,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(providers_InterseptorsManager__WEBPACK_IMPORTED_MODULE_20__/* .InterceptorsManager */ .m, {}),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(providers_TagManagerProvider__WEBPACK_IMPORTED_MODULE_22__/* .TagManagerProvider */ .v, {}),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(providers_EmotionCacheProvider__WEBPACK_IMPORTED_MODULE_18__/* .EmotionCacheProvider */ .z, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_23__/* .ThemeProvider */ .f, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(providers_SnackbarProvider__WEBPACK_IMPORTED_MODULE_21__/* .SnackbarProvider */ .w, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(providers_ErrorHandlingManager__WEBPACK_IMPORTED_MODULE_19__/* .ErrorHandlingManager */ .r, {}),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(custom_PageLoader__WEBPACK_IMPORTED_MODULE_13__/* .PageLoader */ .w, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
                                                                    ...pageProps
                                                                })
                                                            }),
                                                            !builderState.isEditing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(buttons_WhatsAppFloatButton__WEBPACK_IMPORTED_MODULE_9__/* .WhatsAppFloatButton */ .R, {
                                                                sx: getWhatsAppFloatButtonSx
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_7__.ReactQueryDevtools, {
                            initialIsOpen: false
                        })
                    ]
                })
            })
        })
    });
};
var __SENTRY_WRAPPING_TARGET_FILE__ = (0,next_i18next__WEBPACK_IMPORTED_MODULE_16__.appWithTranslation)(CustomApp, (_next_i18next_config__WEBPACK_IMPORTED_MODULE_25___default()));

var serverComponentModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': __SENTRY_WRAPPING_TARGET_FILE__
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

const getInitialPropsWrapper = getInitialPropsWrappers['/_app'] || _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetInitialPropsWithSentry;

if (pageComponent && typeof origGetInitialProps === 'function') {
  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;
}

const getStaticProps =
  typeof origGetStaticProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetStaticPropsWithSentry(origGetStaticProps, '/_app')
    : undefined;
const getServerSideProps =
  typeof origGetServerSideProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/_app')
    : undefined;

const pageWrapperTemplate = pageComponent ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapPageComponentWithSentry(pageComponent ) : pageComponent;



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26327:
/***/ ((module) => {

"use strict";
/** @type {import('next-i18next').UserConfig} */ 
module.exports = {
    i18n: {
        defaultLocale: "default",
        locales: [
            "default",
            "en-US",
            "fr-FR",
            "he-IL"
        ],
        localeDetection: false
    }
};


/***/ }),

/***/ 13918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export BoxElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EmptyElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15994);




const BoxElement = (props)=>{
    const { children , backgroundColor , pt , pb , pl , pr , mt , mb , ml , mr  } = props;
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            pt: Number(pt),
            pb: Number(pb),
            pl: Number(pl),
            pr: Number(pr),
            mt: Number(mt),
            mb: Number(mb),
            ml: Number(ml),
            mr: Number(mr),
            backgroundColor
        },
        ref: (el)=>el && connect(el),
        children: children || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EmptyElement__WEBPACK_IMPORTED_MODULE_3__/* .EmptyElement */ ._, {})
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(BoxElement, {
    name: "BoxElement",
    icon: "/icons/box.svg",
    displayName: "Box",
    isCanvas: true,
    inputs: [
        {
            name: "backgroundColor",
            type: "color"
        },
        {
            name: "pt",
            displayName: "Padding top",
            type: "number",
            min: 0,
            step: 0.5,
            max: 100,
            helperText: "Each point is 8px, for example 1.5 * 8 = 12px"
        },
        {
            name: "pb",
            displayName: "Padding bottom",
            type: "number",
            min: 0,
            step: 0.5,
            max: 100
        },
        {
            name: "pl",
            displayName: "Padding left",
            type: "number",
            min: 0,
            step: 0.5,
            max: 100
        },
        {
            name: "pr",
            displayName: "Padding right",
            type: "number",
            min: 0,
            step: 0.5,
            max: 100
        },
        {
            name: "mt",
            displayName: "Margin top",
            type: "number",
            min: 0,
            step: 0.5,
            max: 100
        },
        {
            name: "mb",
            displayName: "Margin bottom",
            type: "number",
            min: 0,
            step: 0.5,
            max: 100
        },
        {
            name: "ml",
            displayName: "Margin left",
            type: "number",
            min: 0,
            step: 0.5,
            max: 100
        },
        {
            name: "mr",
            displayName: "Margin right",
            type: "number",
            min: 0,
            step: 0.5,
            max: 100
        }
    ]
});


/***/ }),

/***/ 72454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ ButtonElement)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48719);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70745);
/* harmony import */ var _components_buttons_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49230);








const ButtonElement = (props)=>{
    const { text: textProp , sx , borderRadius , fullWidth: fullWidthProp , align , color: colorProp , ...rest } = props;
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__/* .useLocaleContext */ .PE)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const text = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(textProp, locale) || lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(textProp, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_LOCALE */ .ZW);
    const fullWidth = fullWidthProp || isMobile;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        display: "flex",
        justifyContent: align,
        sx: {
            ...fullWidth && {
                width: "100%"
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buttons_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
            sx: {
                ...sx,
                ...borderRadius && {
                    borderRadius: `${borderRadius}px`
                }
            },
            ref: (el)=>{
                el?.addEventListener("click", (event)=>{
                    // TODO: RM-8618
                    event.stopPropagation();
                    // Create a new mousedown event
                    const mouseDownEvent = new MouseEvent("mousedown", {
                        view: window
                    });
                    // Dispatch the mousedown event on the element
                    el.dispatchEvent(mouseDownEvent);
                });
                if (el) {
                    connect(el);
                }
            },
            fullWidth: fullWidth,
            color: colorProp || "primary",
            ...rest,
            children: text
        })
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(ButtonElement, {
    name: "ButtonElement",
    displayName: "Button",
    icon: "/icons/button.svg",
    inputs: [
        {
            name: "text",
            displayName: "Text",
            type: "string",
            defaultValue: "Enter text...",
            isTranslatable: true
        },
        {
            name: "color",
            displayName: "Color",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_7__/* .getChoicesFromArray */ .K)([
                "inherit",
                "primary",
                "secondary",
                "success",
                "error",
                "info",
                "warning"
            ]),
            defaultValue: "primary"
        },
        {
            name: "variant",
            displayName: "Variant",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_7__/* .getChoicesFromArray */ .K)([
                "contained",
                "outlined",
                "text"
            ]),
            defaultValue: "contained"
        },
        {
            name: "size",
            displayName: "Size",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_7__/* .getChoicesFromArray */ .K)([
                "small",
                "medium",
                "large"
            ]),
            defaultValue: "medium"
        },
        {
            name: "fullWidth",
            displayName: "Full width",
            type: "boolean",
            defaultValue: false
        },
        {
            name: "align",
            displayName: "Alignment",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_7__/* .getChoicesFromArray */ .K)([
                "flex-start",
                "center",
                "flex-end"
            ]),
            defaultValue: "flex-start"
        },
        {
            name: "borderRadius",
            displayName: "Border radius (px)",
            type: "number",
            min: 0,
            max: 20,
            helperText: "Each point is 1px"
        }
    ]
});


/***/ }),

/***/ 10615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports OneColumnElement, ColumnsElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EmptyElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15994);
/* harmony import */ var _helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70745);





const OneColumnElement = (props)=>{
    const { children , xs , sm , lg , justifyContent , alignItems  } = props;
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        ref: (el)=>el && connect(el),
        item: true,
        xs: xs,
        sm: sm,
        lg: lg,
        container: Boolean(justifyContent || alignItems),
        justifyContent: justifyContent,
        alignItems: alignItems,
        children: children || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EmptyElement__WEBPACK_IMPORTED_MODULE_3__/* .EmptyElement */ ._, {})
    });
};
const columnsChoices = (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_4__/* .getChoicesFromArray */ .K)(Array(12).fill(null).map((_, i)=>String(i + 1)));
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(OneColumnElement, {
    name: "OneColumnElement",
    displayName: "Column",
    isCanvas: true,
    hideFromInsertMenu: true,
    inputs: [
        {
            name: "xs",
            displayName: "Mobile size",
            type: "select",
            choices: columnsChoices,
            defaultValue: 12,
            helperText: "Columns follow 12 grid column system. In one row can be in total 12 columns"
        },
        {
            name: "sm",
            displayName: "Tablet size",
            type: "select",
            choices: columnsChoices,
            defaultValue: 6
        },
        {
            name: "lg",
            displayName: "Desktop size",
            type: "select",
            choices: columnsChoices,
            defaultValue: 6
        },
        {
            name: "justifyContent",
            displayName: "Justify content",
            type: "radio",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_4__/* .getChoicesFromArray */ .K)([
                "flex-start",
                "center",
                "flex-end",
                "space-between",
                "space-around"
            ])
        },
        {
            name: "alignItems",
            displayName: "Align items",
            type: "radio",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_4__/* .getChoicesFromArray */ .K)([
                "flex-start",
                "center",
                "flex-end"
            ])
        }
    ]
});
const ColumnsElement = (props)=>{
    const { spacing , justifyContent , alignItems , columnsCount  } = props;
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        ref: (el)=>el && connect(el),
        container: true,
        spacing: Number(spacing) || 0,
        justifyContent: justifyContent,
        alignItems: alignItems,
        children: Array(Number(columnsCount)).fill(null).map((_, index)=>{
            // @ts-expect-error why types are not compatible?
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
                id: `column_${index + 1}`,
                is: OneColumnElement
            }, index);
        })
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(ColumnsElement, {
    name: "ColumnsElement",
    displayName: "Columns",
    icon: "/icons/columns.svg",
    inputs: [
        {
            name: "columnsCount",
            type: "select",
            choices: columnsChoices,
            defaultValue: 2
        },
        {
            name: "spacing",
            type: "select",
            choices: columnsChoices,
            defaultValue: 0
        },
        {
            name: "justifyContent",
            type: "radio",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_4__/* .getChoicesFromArray */ .K)([
                "flex-start",
                "center",
                "flex-end",
                "space-between",
                "space-around"
            ]),
            defaultValue: "flex-start"
        },
        {
            name: "alignItems",
            type: "radio",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_4__/* .getChoicesFromArray */ .K)([
                "flex-start",
                "center",
                "flex-end"
            ]),
            defaultValue: "flex-start"
        }
    ]
});


/***/ }),

/***/ 37319:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export ContactFormElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_custom_Builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80143);
/* harmony import */ var components_forms_ContactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69008);
/* harmony import */ var templates_GridItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(120);
/* harmony import */ var views_ContactsInfoView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49707);
/* harmony import */ var _ButtonElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72454);
/* harmony import */ var _helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70745);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_forms_ContactForm__WEBPACK_IMPORTED_MODULE_4__, views_ContactsInfoView__WEBPACK_IMPORTED_MODULE_6__]);
([components_forms_ContactForm__WEBPACK_IMPORTED_MODULE_4__, views_ContactsInfoView__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ContactFormElement = (props)=>{
    const { maxWidth ="lg" , email , location , phone , mediaLinks  } = props;
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
        maxWidth: maxWidth,
        ref: (el)=>el && connect(el),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            spacing: 3,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .P, {
                    md: 9,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_forms_ContactForm__WEBPACK_IMPORTED_MODULE_4__/* .ContactForm */ .t, {
                        BuilderButton: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
                                id: "contact_form_submit_button",
                                is: _ButtonElement__WEBPACK_IMPORTED_MODULE_7__/* .ButtonElement */ .S,
                                ...props
                            })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_5__/* .GridItem */ .P, {
                    md: 3,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ContactsInfoView__WEBPACK_IMPORTED_MODULE_6__/* .ContactsInfoView */ .i, {
                        email: email,
                        location: location,
                        phone: phone,
                        mediaLinks: mediaLinks
                    })
                })
            ]
        })
    });
};
components_custom_Builder__WEBPACK_IMPORTED_MODULE_3__/* .Builder.registerComponent */ .I.registerComponent(ContactFormElement, {
    rootProps: {
        py: 4
    },
    name: "ContactFormElement",
    displayName: "Contact form",
    inputs: [
        {
            name: "maxWidth",
            displayName: "Max width",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_8__/* .getChoicesFromArray */ .K)([
                "sm",
                "md",
                "lg",
                "xl"
            ]),
            defaultValue: "lg"
        },
        {
            name: "email",
            displayName: "Email",
            type: "string",
            defaultValue: "Enter some email here..."
        },
        {
            name: "phone",
            displayName: "Phone",
            type: "string",
            defaultValue: "Enter some phone here..."
        },
        {
            name: "location",
            displayName: "Location",
            type: "string",
            defaultValue: "Enter some location here...",
            isTranslatable: true
        },
        {
            name: "mediaLinks.facebookLink",
            displayName: "Facebook link",
            type: "string"
        },
        {
            name: "mediaLinks.instagramLink",
            displayName: "Instagram link",
            type: "string"
        },
        {
            name: "mediaLinks.twitterLink",
            displayName: "Twitter link",
            type: "string"
        }
    ]
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export ContainerElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EmptyElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15994);
/* harmony import */ var _helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70745);





const ContainerElement = (props)=>{
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    const { children  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        ref: (el)=>el && connect(el),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
            ...props,
            children: children || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EmptyElement__WEBPACK_IMPORTED_MODULE_3__/* .EmptyElement */ ._, {})
        })
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(ContainerElement, {
    name: "ContainerElement",
    displayName: "Container",
    icon: "/icons/container.svg",
    isCanvas: true,
    inputs: [
        {
            name: "maxWidth",
            displayName: "Max width",
            defaultValue: "lg",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_4__/* .getChoicesFromArray */ .K)([
                "xs",
                "sm",
                "md",
                "lg",
                "xl"
            ])
        }
    ]
});


/***/ }),

/***/ 15994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ EmptyElement)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Empty Element is used when there's no children in other elements like box or column.
 */ const EmptyElement = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("common");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        justifyContent: "center",
        alignItems: "center",
        minHeight: 80,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
            variant: "body2",
            children: [
                "+ ",
                t("builder.add_block")
            ]
        })
    });
};


/***/ }),

/***/ 85279:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports AttributeElement, AttributeSectionElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var components_sections_AttributeSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8140);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48719);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var views_AttributeSectionView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6737);
/* harmony import */ var views_SectionSwiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84872);
/* harmony import */ var _ButtonElement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72454);
/* harmony import */ var _helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70745);
/* harmony import */ var _TextElement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_6__, views_SectionSwiper__WEBPACK_IMPORTED_MODULE_10__]);
([hooks_index__WEBPACK_IMPORTED_MODULE_6__, views_SectionSwiper__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const AttributeTextElement = ({ sx , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextElement__WEBPACK_IMPORTED_MODULE_12__/* .TextElement */ .G, {
        sx: {
            wordBreak: "break-word",
            ...sx
        },
        ...rest
    });
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(AttributeTextElement, {
    ..._TextElement__WEBPACK_IMPORTED_MODULE_12__/* .textElementSettings */ .q,
    name: "AttributeTextElement"
});
const AttributeButtonElement = ({ sx , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonElement__WEBPACK_IMPORTED_MODULE_11__/* .ButtonElement */ .S, {
        sx: {
            position: "absolute",
            bottom: 24,
            left: 24,
            py: 2,
            px: 3,
            height: 62,
            bgcolor: "background.default",
            border: "1px solid",
            borderColor: "primary.background",
            borderRadius: 4,
            color: "text.primary",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: 20,
            whiteSpace: "nowrap",
            display: "block",
            width: "auto",
            maxWidth: {
                xs: 200,
                sm: 300,
                md: 150,
                lg: 200
            },
            "&:hover": {
                bgcolor: "background.default"
            },
            ...sx
        },
        ...rest
    });
};
const AttributeButton = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
        id: "attribute_section_button",
        is: AttributeButtonElement,
        ...props
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(AttributeButtonElement, {
    name: "AttributeButtonElement",
    displayName: "Attribute Button",
    inputs: [
        {
            name: "text",
            displayName: "Text",
            type: "string",
            defaultValue: "Enter text...",
            isTranslatable: true
        },
        {
            name: "borderRadius",
            displayName: "Border radius (px)",
            type: "number",
            min: 0,
            max: 20,
            helperText: "Each point is 1px"
        }
    ]
});
const AttributeElement = (props)=>{
    const { src: srcProp , attributeName: attributeNameObject , filter  } = props;
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_5__/* .useLocaleContext */ .PE)();
    const t = (0,hooks_index__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .qM)({
        basePath: "builder.elements.default_values"
    });
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    const { getFile  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useFilesContext)();
    const src = getFile(srcProp)?.src;
    const text = lodash_merge__WEBPACK_IMPORTED_MODULE_8___default()({
        // Default text
        "en-US": t("attribute_button"),
        "fr-FR": t("attribute_button"),
        "he-IL": t("attribute_button")
    }, // [PREV_VALUES_SUPPORT] - see COMMENTS.md
    attributeNameObject);
    const attributeName = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(text, locale) || lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(text, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_LOCALE */ .ZW);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        xs: 12,
        ref: (el)=>{
            el?.addEventListener("click", ()=>{
                // Create a new mousedown event
                const mouseDownEvent = new MouseEvent("mousedown", {
                    view: window
                });
                // Dispatch the mousedown event on the element
                el.dispatchEvent(mouseDownEvent);
            });
            if (el) {
                connect(el);
            }
        },
        p: 0.3,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_AttributeSectionView__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            src: src,
            altAttributeName: attributeName,
            filter: filter,
            slots: {
                actionButton: AttributeButton
            },
            slotProps: {
                actionButton: {
                    text
                }
            }
        })
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(AttributeElement, {
    name: "AttributeElement",
    displayName: "Attribute",
    inputs: [
        {
            name: "src",
            displayName: "Attribute image",
            type: "image",
            minWidth: 342,
            minHeight: 496
        },
        {
            name: "filter",
            displayName: "Filter attribute",
            type: "attribute"
        }
    ]
});
const AttributeSectionElement = (props)=>{
    const { title: titleProp , subtitle: subtitleProp , maxWidth , attributesCount  } = props;
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    const t = (0,hooks_index__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .qM)({
        basePath: "builder.elements.default_values"
    });
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_sections_AttributeSection__WEBPACK_IMPORTED_MODULE_4__/* .AttributeSection */ .p, {
        ref: (el)=>el && connect(el),
        ...props,
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
            id: "attribute_section_element_title",
            // @ts-expect-error why types are not compatible?
            is: AttributeTextElement,
            // [PREV_VALUES_SUPPORT] - see COMMENTS.md
            text: lodash_merge__WEBPACK_IMPORTED_MODULE_8___default()({
                "en-US": t("text_element_title"),
                "fr-FR": t("text_element_title"),
                "he-IL": t("text_element_title")
            }, titleProp),
            align: "center",
            variant: "h3",
            component: "h3"
        }),
        subtitle: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
            id: "attribute_section_element_subtitle",
            // @ts-expect-error why types are not compatible?
            is: AttributeTextElement,
            // [PREV_VALUES_SUPPORT] - see COMMENTS.md
            text: lodash_merge__WEBPACK_IMPORTED_MODULE_8___default()({
                "en-US": t("text_element_subtitle"),
                "fr-FR": t("text_element_subtitle"),
                "he-IL": t("text_element_subtitle")
            }, subtitleProp),
            align: "center",
            variant: "subtitle1"
        }),
        maxWidth: maxWidth,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_SectionSwiper__WEBPACK_IMPORTED_MODULE_10__/* .SectionSwiper */ .P, {
            slidesPerView: isMobile ? 1 : 4,
            centerInsufficientSlides: true,
            children: Array(Number(attributesCount)).fill(null).map((_, index)=>{
                // @ts-expect-error why types are not compatible?
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
                    id: `attribute_${index + 1}`,
                    is: AttributeElement
                }, index);
            })
        })
    });
};
const attributesChoices = (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_13__/* .getChoicesFromArray */ .K)(Array(12).fill(null).map((_, i)=>String(i + 1)));
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(AttributeSectionElement, {
    name: "AttributeSectionElement",
    displayName: "Attribute section",
    inputs: [
        {
            name: "attributesCount",
            displayName: "Attributes count",
            type: "select",
            choices: attributesChoices,
            defaultValue: "4"
        },
        {
            name: "maxWidth",
            displayName: "Max width",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_13__/* .getChoicesFromArray */ .K)([
                "sm",
                "md",
                "lg",
                "xl"
            ]),
            defaultValue: "lg"
        }
    ]
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export ContactSectionElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_sections_ContactSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62360);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ButtonElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72454);
/* harmony import */ var _helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70745);
/* harmony import */ var _TextElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_sections_ContactSection__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__]);
([components_sections_ContactSection__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ContactTextElement = ({ sx , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextElement__WEBPACK_IMPORTED_MODULE_6__/* .TextElement */ .G, {
        sx: {
            wordBreak: "break-word",
            ...sx
        },
        ...rest
    });
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(ContactTextElement, {
    ..._TextElement__WEBPACK_IMPORTED_MODULE_6__/* .textElementSettings */ .q,
    name: "ContactTextElement"
});
const ContactSectionElement = (props)=>{
    const { title: titleProp , subtitle: subtitleProp  } = props;
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    const t = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "builder.elements.default_values"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_sections_ContactSection__WEBPACK_IMPORTED_MODULE_2__/* .ContactSection */ .U, {
        ref: (el)=>el && connect(el),
        ...props,
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
            id: "contact_section_element_title",
            // @ts-expect-error why types are not compatible?
            is: ContactTextElement,
            // [PREV_VALUES_SUPPORT] - see COMMENTS.md
            text: lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({
                "en-US": t("text_element_title"),
                "fr-FR": t("text_element_title"),
                "he-IL": t("text_element_title")
            }, titleProp),
            align: "center",
            variant: "h3",
            component: "h3"
        }),
        subtitle: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
            id: "contact_section_element_subtitle",
            // @ts-expect-error why types are not compatible?
            is: ContactTextElement,
            // [PREV_VALUES_SUPPORT] - see COMMENTS.md
            text: lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({
                "en-US": t("text_element_subtitle"),
                "fr-FR": t("text_element_subtitle"),
                "he-IL": t("text_element_subtitle")
            }, subtitleProp),
            align: "center",
            variant: "subtitle1"
        }),
        BuilderButton: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
                id: "contact_section_submit_button",
                is: _ButtonElement__WEBPACK_IMPORTED_MODULE_5__/* .ButtonElement */ .S,
                ...props
            })
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(ContactSectionElement, {
    name: "ContactSectionElement",
    displayName: "Contact section",
    inputs: [
        {
            name: "maxWidth",
            displayName: "Max width",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_7__/* .getChoicesFromArray */ .K)([
                "sm",
                "md",
                "lg",
                "xl"
            ]),
            defaultValue: "sm"
        }
    ]
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export ContactUsSectionElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41430);
/* harmony import */ var components_pageTemplates_HomepageTemplate_components_ContactUsSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95526);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48719);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TextElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_pageTemplates_HomepageTemplate_components_ContactUsSection__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_5__]);
([components_pageTemplates_HomepageTemplate_components_ContactUsSection__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ContactUsTextElement = ({ sx , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextElement__WEBPACK_IMPORTED_MODULE_8__/* .TextElement */ .G, {
        sx: {
            wordBreak: "break-word",
            ...sx
        },
        ...rest
    });
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(ContactUsTextElement, {
    ..._TextElement__WEBPACK_IMPORTED_MODULE_8__/* .textElementSettings */ .q,
    name: "ContactUsTextElement"
});
const ContactUsSectionElement = (props)=>{
    const { text: textProp , address: addressProp  } = props;
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    const t = (0,hooks_index__WEBPACK_IMPORTED_MODULE_5__/* .useTranslate */ .qM)({
        basePath: "builder.elements.default_values"
    });
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__/* .useLocaleContext */ .PE)();
    const address = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(addressProp, locale) || lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(addressProp, application_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_LOCALE */ .ZW);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pageTemplates_HomepageTemplate_components_ContactUsSection__WEBPACK_IMPORTED_MODULE_3__/* .ContactUsSection */ .L, {
        ref: (el)=>el && connect(el),
        ...props,
        text: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
            id: "contact_us_section_element_text",
            // @ts-expect-error why types are not compatible?
            is: ContactUsTextElement,
            // [PREV_VALUES_SUPPORT] - see COMMENTS.md
            text: lodash_merge__WEBPACK_IMPORTED_MODULE_7___default()({
                "en-US": t("text_element"),
                "fr-FR": t("text_element"),
                "he-IL": t("text_element")
            }, textProp),
            align: "center",
            variant: "subtitle1"
        }),
        address: address
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(ContactUsSectionElement, {
    name: "ContactUsSectionElement",
    displayName: "Contact us section",
    inputs: [
        {
            name: "email",
            displayName: "Email",
            type: "string",
            defaultValue: "Enter some email here..."
        },
        {
            name: "phone",
            displayName: "Phone",
            type: "string",
            defaultValue: "Enter some phone here..."
        },
        {
            name: "address",
            displayName: "Address",
            type: "string",
            defaultValue: "Enter some address here...",
            isTranslatable: true
        },
        {
            name: "mediaLinks.facebookLink",
            displayName: "Facebook link",
            type: "string"
        },
        {
            name: "mediaLinks.instagramLink",
            displayName: "Instagram link",
            type: "string"
        },
        {
            name: "mediaLinks.twitterLink",
            displayName: "Twitter link",
            type: "string"
        }
    ]
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77625:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export ListingsCarouselSectionElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41430);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(22825);
/* harmony import */ var components_layouts_WithSectionTitleWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65844);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48719);
/* harmony import */ var custom_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76238);
/* harmony import */ var helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12764);
/* harmony import */ var helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23517);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetListings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(53613);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var views_ListingItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56200);
/* harmony import */ var views_SectionSwiper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(84872);
/* harmony import */ var _helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(70745);
/* harmony import */ var _helpers_ListingButtonsContext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19884);
/* harmony import */ var _TextElement__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(60434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_9__, hooks_index__WEBPACK_IMPORTED_MODULE_10__, hooks_queries_useGetListings__WEBPACK_IMPORTED_MODULE_11__, views_ListingItem__WEBPACK_IMPORTED_MODULE_15__, views_SectionSwiper__WEBPACK_IMPORTED_MODULE_16__]);
([helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_9__, hooks_index__WEBPACK_IMPORTED_MODULE_10__, hooks_queries_useGetListings__WEBPACK_IMPORTED_MODULE_11__, views_ListingItem__WEBPACK_IMPORTED_MODULE_15__, views_SectionSwiper__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const LISTING_ITEM_DISPLAY_NAME = "Listing item";
const CarouselChipElement = (props)=>{
    const { text: textProp , index  } = props;
    const { activeIndex  } = (0,_helpers_ListingButtonsContext__WEBPACK_IMPORTED_MODULE_17__/* .useListingButtonsContext */ .ts)();
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.useNode)();
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_6__/* .useLocaleContext */ .PE)();
    const text = lodash_get__WEBPACK_IMPORTED_MODULE_13___default()(textProp, locale) || lodash_get__WEBPACK_IMPORTED_MODULE_13___default()(textProp, application_constants__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_LOCALE */ .ZW);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        ref: (el)=>connect(el),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Chip, {
            clickable: true,
            variant: index === activeIndex ? "filled" : "outlined",
            color: "primary",
            label: text
        })
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.Builder.registerComponent(CarouselChipElement, {
    name: "CarouselChipElement",
    displayName: "Button",
    inputs: [
        {
            name: "text",
            displayName: "Button name",
            type: "string",
            defaultValue: "Button name...",
            isTranslatable: true
        }
    ]
});
const ListingItemElement = (props)=>{
    const { ids , listingNodeId  } = props;
    const { setListings  } = (0,_helpers_ListingButtonsContext__WEBPACK_IMPORTED_MODULE_17__/* .useListingButtonsContext */ .ts)();
    const getPrice = (0,helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_9__/* .useGetPriceInCurrentCurrency */ .N)();
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_10__/* .useTranslate */ .qM)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const { connectors: { connect  } , actions: { setProp  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.useNode)();
    const { isEditing  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.useBuilderState)();
    const getListingsResult = (0,hooks_queries_useGetListings__WEBPACK_IMPORTED_MODULE_11__/* .useGetListings */ .$)({
        ids
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isEditing) return;
        if (getListingsResult.isSuccess && !ids) {
            setProp((props)=>{
                props.ids = getListingsResult.data?.map((item)=>item.id).slice(0, 3) || [];
            });
        }
    }, [
        getListingsResult.data,
        getListingsResult.isSuccess,
        ids,
        isEditing,
        setProp
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setListings(ids, listingNodeId);
    }, [
        ids,
        listingNodeId,
        setListings
    ]);
    if (getListingsResult.isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_Loader__WEBPACK_IMPORTED_MODULE_7__/* .Loader */ .a, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        ref: (el)=>{
            el?.addEventListener("click", ()=>{
                // Create a new mousedown event
                const mouseDownEvent = new MouseEvent("mousedown", {
                    view: window
                });
                // Dispatch the mousedown event on the element
                el.dispatchEvent(mouseDownEvent);
            });
            if (el) {
                connect(el);
            }
        },
        children: ids && !ids?.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            variant: "h3",
            textAlign: "center",
            children: translate.root("custom.click_to_choose_listings")
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: getListingsResult.isSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_SectionSwiper__WEBPACK_IMPORTED_MODULE_16__/* .SectionSwiper */ .P, {
                slidesPerView: isMobile ? 1 : 3,
                centerInsufficientSlides: true,
                children: getListingsResult.data.map((listingData, index)=>{
                    const [accommodates, bedrooms, bathrooms, basePrice, rating, ratingCount] = (0,helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
                        formattedFilters: listingData.formatted_filters,
                        slugs: [
                            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .ACCOMMODATES_SOURCE */ .s0,
                            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BEDROOMS_SOURCE */ .Bt,
                            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BATHROOMS_SOURCE */ .qA,
                            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BASE_PRICE_SLUG */ .LI,
                            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .RATING_SLUG */ .gd,
                            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .RATING_COUNT_SLUG */ .BN
                        ]
                    });
                    const { currency , title , address  } = listingData;
                    const parsedBasePrice = basePrice?.value ? Number(basePrice?.value) : 0;
                    const priceValue = getPrice({
                        initialCurrencyCode: currency?.code || "",
                        amount: parsedBasePrice
                    });
                    const zip = undefined; // no BE data
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ListingItem__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP, {
                        withTooltip: true,
                        zip: zip,
                        sx: {
                            flex: "0 0 auto"
                        },
                        name: title,
                        address: address,
                        price: priceValue,
                        pricePrefix: "from",
                        rating: rating?.value,
                        reviewsCount: ratingCount?.value,
                        amenitiesItems: [
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
                                value: accommodates?.value,
                                label: translate.root("custom.guest")
                            }
                        ],
                        href: {
                            pathname: application_constants__WEBPACK_IMPORTED_MODULE_4__/* .listingRoute.getPathname */ .oo.getPathname(listingData.slug),
                            query
                        },
                        size: "large",
                        items: listingData.gallery.map((galleryItem)=>{
                            const { id , src , title  } = galleryItem;
                            return {
                                id,
                                url: src,
                                title
                            };
                        })
                    }, index);
                })
            })
        })
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.Builder.registerComponent(ListingItemElement, {
    name: "ListingItemElement",
    displayName: LISTING_ITEM_DISPLAY_NAME,
    inputs: [
        {
            name: "ids",
            displayName: "Listings ids",
            type: "referenceAutocomplete",
            options: {
                reference: application_resources__WEBPACK_IMPORTED_MODULE_19__/* .LISTINGS_RESOURCE */ .t8,
                optionText: "title"
            },
            multiple: true
        }
    ]
});
const ListingsTextElement = ({ sx , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextElement__WEBPACK_IMPORTED_MODULE_18__/* .TextElement */ .G, {
        sx: {
            wordBreak: "break-word",
            ...sx
        },
        ...rest
    });
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.Builder.registerComponent(ListingsTextElement, {
    ..._TextElement__WEBPACK_IMPORTED_MODULE_18__/* .textElementSettings */ .q,
    name: "ListingsTextElement"
});
const ListingsCarouselSectionElement = (props)=>{
    const { title: titleProp , subtitle: subtitleProp , maxWidth ="lg" , buttonsCount  } = props;
    const { activeIndex , setActiveIndex , listings , setListings  } = (0,_helpers_ListingButtonsContext__WEBPACK_IMPORTED_MODULE_17__/* .useListingButtonsController */ .v7)();
    const t = (0,hooks_index__WEBPACK_IMPORTED_MODULE_10__/* .useTranslate */ .qM)({
        basePath: "builder.elements.default_values"
    });
    const [isInitialized, setIsInitialized] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onChangeIndex = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((index)=>{
        setActiveIndex(index);
    }, [
        setActiveIndex
    ]);
    const { connectors: { connect  } , id  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.useNode)();
    const { isEditing  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.useBuilderState)();
    const getListingNodeId = (index)=>`listing_${id}_${index}`;
    // set initial index, when we change buttonsCount in Editor
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isEditing) {
            onChangeIndex(0);
        }
    }, [
        buttonsCount,
        isEditing,
        onChangeIndex
    ]);
    // set initial index of first not empty listing
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const activeIndex = Object.values(listings).findIndex((el)=>el?.length);
        if (!isEditing) {
            onChangeIndex(activeIndex);
        }
    }, [
        isEditing,
        listings,
        onChangeIndex
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        /**
     * It fixes issue with slides blinking on first render with centerIssuficientSlides option
     */ setIsInitialized(true);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        ref: (el)=>el && connect(el),
        sx: {
            py: 10,
            bgcolor: "background.paper"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layouts_WithSectionTitleWrapper__WEBPACK_IMPORTED_MODULE_5__/* .WithSectionTitleWrapper */ .a, {
            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.Element, {
                id: "listings_carousel_section_element_title",
                // @ts-expect-error why types are not compatible?
                is: ListingsTextElement,
                // [PREV_VALUES_SUPPORT] - see COMMENTS.md
                text: lodash_merge__WEBPACK_IMPORTED_MODULE_12___default()({
                    "en-US": t("text_element_title"),
                    "fr-FR": t("text_element_title"),
                    "he-IL": t("text_element_title")
                }, titleProp),
                align: "center",
                variant: "h3",
                component: "h3"
            }),
            subtitle: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.Element, {
                id: "listings_carousel_section_element_subtitle",
                // @ts-expect-error why types are not compatible?
                is: ListingsTextElement,
                // [PREV_VALUES_SUPPORT] - see COMMENTS.md
                text: lodash_merge__WEBPACK_IMPORTED_MODULE_12___default()({
                    "en-US": t("text_element_subtitle"),
                    "fr-FR": t("text_element_subtitle"),
                    "he-IL": t("text_element_subtitle")
                }, subtitleProp),
                align: "center",
                variant: "subtitle1"
            }),
            maxWidth: maxWidth,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_helpers_ListingButtonsContext__WEBPACK_IMPORTED_MODULE_17__/* .ListingButtonsContextProvider */ .kA, {
                    value: {
                        activeIndex,
                        setActiveIndex,
                        listings,
                        setListings
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                            container: true,
                            justifyContent: "center",
                            gap: 2,
                            children: Array(Number(buttonsCount)).fill(null).map((_, index)=>{
                                const listingIds = lodash_get__WEBPACK_IMPORTED_MODULE_13___default()(listings, getListingNodeId(index));
                                const isShowButton = !!(isEditing || listingIds?.length);
                                return isShowButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    onClick: ()=>onChangeIndex(index),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.Element, {
                                        index: index,
                                        id: `button_${index + 1}`,
                                        is: CarouselChipElement
                                    })
                                }, index);
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            pt: 6,
                            children: Array(Number(buttonsCount)).fill(null).map((_, index)=>{
                                const isShowBlock = !isInitialized || index === activeIndex;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    display: isShowBlock ? "block" : "none",
                                    visibility: isInitialized ? "visible" : "hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.Element, {
                                        listingNodeId: getListingNodeId(index),
                                        id: `listing_item_${index + 1}`,
                                        is: ListingItemElement
                                    })
                                }, index);
                            })
                        })
                    ]
                })
            })
        })
    });
};
const buttonsChoices = (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_20__/* .getChoicesFromArray */ .K)(Array(6).fill(null).map((_, i)=>String(i + 1)));
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.Builder.registerComponent(ListingsCarouselSectionElement, {
    name: "ListingsCarouselSectionElement",
    displayName: "Listings carousel section",
    inputs: [
        {
            name: "buttonsCount",
            displayName: "Buttons count",
            type: "select",
            choices: buttonsChoices,
            defaultValue: "3"
        },
        {
            name: "maxWidth",
            displayName: "Max width",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_20__/* .getChoicesFromArray */ .K)([
                "sm",
                "md",
                "lg",
                "xl"
            ]),
            defaultValue: "lg"
        }
    ]
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31250:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports ReviewItemElement, ReviewsSectionElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var components_sections_HomeReviewsSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43064);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetRewiews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14819);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var templates_GridItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(120);
/* harmony import */ var views_ReviewItemView_ReviewItemView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92521);
/* harmony import */ var _helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70745);
/* harmony import */ var _TextElement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_5__, hooks_queries_useGetRewiews__WEBPACK_IMPORTED_MODULE_6__, views_ReviewItemView_ReviewItemView__WEBPACK_IMPORTED_MODULE_9__]);
([hooks_index__WEBPACK_IMPORTED_MODULE_5__, hooks_queries_useGetRewiews__WEBPACK_IMPORTED_MODULE_6__, views_ReviewItemView_ReviewItemView__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ReviewsTextElement = ({ sx , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextElement__WEBPACK_IMPORTED_MODULE_10__/* .TextElement */ .G, {
        sx: {
            wordBreak: "break-word",
            ...sx
        },
        ...rest
    });
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(ReviewsTextElement, {
    ..._TextElement__WEBPACK_IMPORTED_MODULE_10__/* .textElementSettings */ .q,
    name: "ReviewsTextElement"
});
const ReviewItemElement = (props)=>{
    return null;
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(ReviewItemElement, {
    // TODO: to remove registration when builder is fixed and we don't see  "TypeError: Cannot read properties of undefined (reading 'name')" in panel
    name: "ReviewItemElement",
    displayName: "Review item"
});
const ReviewsSectionElement = (props)=>{
    const { title: titleProp , subtitle: subtitleProp , reviewsCount , maxWidth  } = props;
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)((theme)=>theme.breakpoints.down("sm"));
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    const t = (0,hooks_index__WEBPACK_IMPORTED_MODULE_5__/* .useTranslate */ .qM)({
        basePath: "builder.elements.default_values"
    });
    const reviewsResult = (0,hooks_queries_useGetRewiews__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        perPage: Number(reviewsCount)
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_sections_HomeReviewsSection__WEBPACK_IMPORTED_MODULE_4__/* .HomeReviewsSection */ .S, {
        ref: (el)=>el && connect(el),
        ...props,
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
            id: "review_section_element_title",
            // @ts-expect-error why types are not compatible?
            is: ReviewsTextElement,
            // [PREV_VALUES_SUPPORT] - see COMMENTS.md
            text: lodash_merge__WEBPACK_IMPORTED_MODULE_7___default()({
                "en-US": t("text_element_title"),
                "fr-FR": t("text_element_title"),
                "he-IL": t("text_element_title")
            }, titleProp),
            align: "center",
            variant: "h3",
            component: "h3"
        }),
        subtitle: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
            id: "review_section_element_subtitle",
            // @ts-expect-error why types are not compatible?
            is: ReviewsTextElement,
            // [PREV_VALUES_SUPPORT] - see COMMENTS.md
            text: lodash_merge__WEBPACK_IMPORTED_MODULE_7___default()({
                "en-US": t("text_element_subtitle"),
                "fr-FR": t("text_element_subtitle"),
                "he-IL": t("text_element_subtitle")
            }, subtitleProp),
            align: "center",
            variant: "subtitle1"
        }),
        maxWidth: maxWidth,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            spacing: {
                xs: 3,
                md: 5
            },
            children: reviewsResult.isSuccess && reviewsResult.data.map((reviewData, index)=>{
                const isShowDivider = isMobile ? index !== Number(reviewsCount) - 1 : index < Number(reviewsCount) - 2;
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(templates_GridItem__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .P, {
                    sm: 6,
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ReviewItemView_ReviewItemView__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
                            firstName: reviewData.user?.first_name,
                            avatarSrc: reviewData.user?.avatar?.src || "",
                            comment: reviewData.review_text,
                            date: reviewData.added_at,
                            rating: reviewData.rating,
                            place: reviewData.listing?.title,
                            listingHref: application_constants__WEBPACK_IMPORTED_MODULE_3__/* .listingRoute.getPathname */ .oo.getPathname(reviewData.listing.slug)
                        }),
                        isShowDivider && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                            sx: {
                                mt: {
                                    xs: 2,
                                    md: 3
                                }
                            }
                        })
                    ]
                }, index);
            })
        })
    });
};
const reviewsChoices = (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_11__/* .getChoicesFromArray */ .K)(Array(12).fill(null).map((_, i)=>String(i + 1)));
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(ReviewsSectionElement, {
    name: "ReviewsSectionElement",
    displayName: "Reviews section",
    inputs: [
        {
            name: "reviewsCount",
            displayName: "Reviews count",
            type: "select",
            choices: reviewsChoices,
            defaultValue: "4"
        },
        {
            name: "maxWidth",
            displayName: "Max width",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_11__/* .getChoicesFromArray */ .K)([
                "sm",
                "md",
                "lg",
                "xl"
            ]),
            defaultValue: "lg"
        }
    ]
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93810:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export SearchSectionElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_pageTemplates_HomepageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8616);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ButtonElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72454);
/* harmony import */ var _TextElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_pageTemplates_HomepageTemplate__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__]);
([components_pageTemplates_HomepageTemplate__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const SearchSectionTitleElement = ({ sx , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextElement__WEBPACK_IMPORTED_MODULE_6__/* .TextElement */ .G, {
        sx: {
            wordBreak: "break-word",
            mb: 1,
            mx: {
                xs: 5,
                md: 0
            },
            ...sx
        },
        ...rest
    });
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(SearchSectionTitleElement, {
    ..._TextElement__WEBPACK_IMPORTED_MODULE_6__/* .textElementSettings */ .q,
    name: "SearchSectionTitleElement"
});
const SearchSectionSubitleElement = ({ sx , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextElement__WEBPACK_IMPORTED_MODULE_6__/* .TextElement */ .G, {
        sx: {
            mb: 6,
            mx: {
                xs: 5,
                md: 0
            },
            ...sx
        },
        ...rest
    });
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(SearchSectionSubitleElement, {
    ..._TextElement__WEBPACK_IMPORTED_MODULE_6__/* .textElementSettings */ .q,
    name: "SearchSectionSubitleElement"
});
const SearchButtonElement = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
        id: "search_button",
        is: _ButtonElement__WEBPACK_IMPORTED_MODULE_5__/* .ButtonElement */ .S,
        ...props
    });
};
const SearchSectionElement = (props)=>{
    const { title: titleProp , subtitle: subtitleProp , desktopImageId , mobileImageId  } = props;
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    const t = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "builder.elements.default_values"
    });
    const { getFile  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useFilesContext)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pageTemplates_HomepageTemplate__WEBPACK_IMPORTED_MODULE_2__/* .SearchSection */ .y, {
        ref: (el)=>el && connect(el),
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
            id: "search_section_element_title",
            // @ts-expect-error why types are not compatible?
            is: SearchSectionTitleElement,
            // [PREV_VALUES_SUPPORT] - see COMMENTS.md
            text: lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({
                "en-US": t("text_element_title"),
                "fr-FR": t("text_element_title"),
                "he-IL": t("text_element_title")
            }, titleProp),
            align: "center",
            variant: "h1",
            component: "h1",
            color: "primary.contrastText"
        }),
        subtitle: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
            id: "search_section_element_subtitle",
            // @ts-expect-error why types are not compatible?
            is: SearchSectionSubitleElement,
            // [PREV_VALUES_SUPPORT] - see COMMENTS.md
            text: lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({
                "en-US": t("text_element_subtitle"),
                "fr-FR": t("text_element_subtitle"),
                "he-IL": t("text_element_subtitle")
            }, subtitleProp),
            align: "center",
            variant: "subtitle2",
            component: "h3",
            color: "primary.contrastText"
        }),
        slots: {
            actionButton: SearchButtonElement
        },
        slotProps: {
            actionButton: {
                text: {
                    "en-US": "Search",
                    "fr-FR": "Rechercher",
                    "he-IL": "חפש"
                }
            }
        },
        desktopImageSrc: getFile(desktopImageId)?.src,
        mobileImageSrc: getFile(mobileImageId)?.src
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(SearchSectionElement, {
    name: "SearchSectionElement",
    displayName: "Search section",
    inputs: [
        {
            name: "desktopImageId",
            displayName: "Desktop image",
            type: "image",
            minWidth: 1920,
            minHeight: 1000
        },
        {
            name: "mobileImageId",
            displayName: "Mobile image",
            type: "image",
            minWidth: 420,
            minHeight: 800
        }
    ]
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4679:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export SingleListingsCarouselSectionElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41430);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22825);
/* harmony import */ var components_sections_SingleListingsCarouselSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35071);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48719);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_sections_SingleListingsCarouselSection__WEBPACK_IMPORTED_MODULE_3__]);
components_sections_SingleListingsCarouselSection__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const SingleListingsCarouselSectionElement = (props)=>{
    const { buttonText: buttonTextProp , ids  } = props;
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__/* .useLocaleContext */ .PE)();
    const buttonText = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(buttonTextProp, locale) || lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(buttonTextProp, application_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_LOCALE */ .ZW);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_sections_SingleListingsCarouselSection__WEBPACK_IMPORTED_MODULE_3__/* .SingleListingsCarouselSection */ .m, {
        ref: (el)=>{
            el?.addEventListener("click", ()=>{
                // Create a new mousedown event
                const mouseDownEvent = new MouseEvent("mousedown", {
                    view: window
                });
                // Dispatch the mousedown event on the element
                el.dispatchEvent(mouseDownEvent);
            });
            if (el) {
                connect(el);
            }
        },
        buttonText: buttonText,
        ids: ids
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(SingleListingsCarouselSectionElement, {
    name: "SingleListingsCarouselSectionElement",
    displayName: "Single listings section",
    inputs: [
        {
            name: "buttonText",
            displayName: "Button text",
            type: "string",
            defaultValue: "Hot deal",
            isTranslatable: true
        },
        {
            name: "ids",
            displayName: "Listings ids",
            type: "referenceAutocomplete",
            multiple: true,
            options: {
                reference: application_resources__WEBPACK_IMPORTED_MODULE_6__/* .LISTINGS_RESOURCE */ .t8,
                optionText: "title"
            }
        }
    ]
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports TeamMemberElement, TeamSectionElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var components_sections_TeamSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97399);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48719);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var templates_GridItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(120);
/* harmony import */ var views_SectionSwiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84872);
/* harmony import */ var views_VerticalAvatarView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20741);
/* harmony import */ var _helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70745);
/* harmony import */ var _TextElement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_6__, views_SectionSwiper__WEBPACK_IMPORTED_MODULE_10__, views_VerticalAvatarView__WEBPACK_IMPORTED_MODULE_11__]);
([hooks_index__WEBPACK_IMPORTED_MODULE_6__, views_SectionSwiper__WEBPACK_IMPORTED_MODULE_10__, views_VerticalAvatarView__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const DEFAULT_AVATAR_SIZE = 220;
const TeamTextElement = ({ sx , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextElement__WEBPACK_IMPORTED_MODULE_12__/* .TextElement */ .G, {
        sx: {
            wordBreak: "break-word",
            ...sx
        },
        ...rest
    });
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(TeamTextElement, {
    ..._TextElement__WEBPACK_IMPORTED_MODULE_12__/* .textElementSettings */ .q,
    name: "TeamTextElement"
});
const TeamMemberElement = (props)=>{
    const { avatarSrc: avatarSrcProp , position , name , mediaLinks  } = props;
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_5__/* .useLocaleContext */ .PE)();
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    const { getFile  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useFilesContext)();
    const avatarSrc = getFile(avatarSrcProp)?.src;
    const title = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(name, locale) || lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(name, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_LOCALE */ .ZW);
    const subtitle = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(position, locale) || lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(position, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_LOCALE */ .ZW);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_9__/* .GridItem */ .P, {
        ref: (el)=>{
            el?.addEventListener("click", ()=>{
                // Create a new mousedown event
                const mouseDownEvent = new MouseEvent("mousedown", {
                    view: window
                });
                // Dispatch the mousedown event on the element
                el.dispatchEvent(mouseDownEvent);
            });
            if (el) {
                connect(el);
            }
        },
        container: true,
        justifyContent: "center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_VerticalAvatarView__WEBPACK_IMPORTED_MODULE_11__/* .VerticalAvatarView */ .G, {
            size: DEFAULT_AVATAR_SIZE,
            title: title,
            subtitle: subtitle,
            avatarSrc: avatarSrc,
            ...mediaLinks
        })
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(TeamMemberElement, {
    name: "TeamMemberElement",
    displayName: "Team member",
    inputs: [
        {
            name: "name",
            displayName: "Name",
            type: "string",
            defaultValue: "Name",
            isTranslatable: true
        },
        {
            name: "position",
            displayName: "Position",
            type: "string",
            defaultValue: "CEO",
            isTranslatable: true
        },
        {
            name: "avatarSrc",
            displayName: "Avatar image",
            type: "image",
            minWidth: 220,
            minHeight: 220
        },
        {
            name: "mediaLinks.facebookLink",
            displayName: "Facebook link",
            type: "string"
        },
        {
            name: "mediaLinks.twitterLink",
            displayName: "Twitter link",
            type: "string"
        },
        {
            name: "mediaLinks.instagramLink",
            displayName: "Instagram link",
            type: "string"
        }
    ]
});
const TeamSectionElement = (props)=>{
    const { title: titleProp , subtitle: subtitleProp , membersCount , maxWidth  } = props;
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    const t = (0,hooks_index__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .qM)({
        basePath: "builder.elements.default_values"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_sections_TeamSection__WEBPACK_IMPORTED_MODULE_4__/* .TeamSection */ .T, {
        ref: (el)=>el && connect(el),
        ...props,
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
            id: "team_section_element_title",
            // @ts-expect-error why types are not compatible?
            is: TeamTextElement,
            // [PREV_VALUES_SUPPORT] - see COMMENTS.md
            text: lodash_merge__WEBPACK_IMPORTED_MODULE_8___default()({
                "en-US": t("text_element_title"),
                "fr-FR": t("text_element_title"),
                "he-IL": t("text_element_title")
            }, titleProp),
            align: "center",
            variant: "h3",
            component: "h3"
        }),
        subtitle: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
            id: "team_section_element_subtitle",
            // @ts-expect-error why types are not compatible?
            is: TeamTextElement,
            // [PREV_VALUES_SUPPORT] - see COMMENTS.md
            text: lodash_merge__WEBPACK_IMPORTED_MODULE_8___default()({
                "en-US": t("text_element_subtitle"),
                "fr-FR": t("text_element_subtitle"),
                "he-IL": t("text_element_subtitle")
            }, subtitleProp),
            align: "center",
            variant: "subtitle1"
        }),
        maxWidth: maxWidth,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_SectionSwiper__WEBPACK_IMPORTED_MODULE_10__/* .SectionSwiper */ .P, {
            slidesPerView: isMobile ? 1 : 3,
            centerInsufficientSlides: true,
            children: Array(Number(membersCount)).fill(null).map((_, index)=>{
                // @ts-expect-error why types are not compatible?
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
                    id: `team_${index + 1}`,
                    is: TeamMemberElement
                }, index);
            })
        })
    });
};
const membersChoices = (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_13__/* .getChoicesFromArray */ .K)(Array(12).fill(null).map((_, i)=>String(i + 1)));
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(TeamSectionElement, {
    name: "TeamSectionElement",
    displayName: "Team section",
    inputs: [
        {
            name: "membersCount",
            displayName: "Team members count",
            type: "select",
            choices: membersChoices,
            defaultValue: "3"
        },
        {
            name: "title",
            displayName: "Title",
            type: "string",
            defaultValue: "Enter some title here...",
            isTranslatable: true
        },
        {
            name: "subtitle",
            displayName: "Subtitle",
            type: "string",
            defaultValue: "Enter some subtitle here...",
            isTranslatable: true
        },
        {
            name: "maxWidth",
            displayName: "Max width",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_13__/* .getChoicesFromArray */ .K)([
                "sm",
                "md",
                "lg",
                "xl"
            ]),
            defaultValue: "lg"
        }
    ]
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42536:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export PageHeadingSectionElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_custom_PageHeadingSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78490);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TextElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_3__]);
hooks_index__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const PageHeadingTextElement = ({ sx , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextElement__WEBPACK_IMPORTED_MODULE_5__/* .TextElement */ .G, {
        sx: {
            wordBreak: "break-word",
            mx: {
                sm: 5,
                md: 0
            },
            ...sx
        },
        ...rest
    });
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(PageHeadingTextElement, {
    ..._TextElement__WEBPACK_IMPORTED_MODULE_5__/* .textElementSettings */ .q,
    name: "PageHeadingTextElement"
});
const PageHeadingSectionElement = (props)=>{
    const { title: titleProp , subtitle: subtitleProp , desktopImageId , mobileImageId  } = props;
    const { getFile  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useFilesContext)();
    const t = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "builder.elements.default_values"
    });
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_custom_PageHeadingSection__WEBPACK_IMPORTED_MODULE_2__/* .PageHeadingSection */ .e, {
        ref: (el)=>el && connect(el),
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
            id: "page_heading_element_title",
            // @ts-expect-error why types are not compatible?
            is: PageHeadingTextElement,
            // [PREV_VALUES_SUPPORT] - see COMMENTS.md
            text: lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({
                "en-US": t("text_element_title"),
                "fr-FR": t("text_element_title"),
                "he-IL": t("text_element_title")
            }, titleProp),
            color: "primary.contrastText",
            align: "center",
            variant: "h1",
            component: "h1"
        }),
        subtitle: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Element, {
            id: "page_heading_element_subtitle",
            // @ts-expect-error why types are not compatible?
            is: PageHeadingTextElement,
            // [PREV_VALUES_SUPPORT] - see COMMENTS.md
            text: lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()({
                "en-US": t("text_element_subtitle"),
                "fr-FR": t("text_element_subtitle"),
                "he-IL": t("text_element_subtitle")
            }, subtitleProp),
            color: "primary.contrastText",
            align: "center",
            variant: "h3",
            component: "h3"
        }),
        desktopImageSrc: getFile(desktopImageId)?.src,
        mobileImageSrc: getFile(mobileImageId)?.src
    });
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(PageHeadingSectionElement, {
    name: "PageHeadingSectionElement",
    displayName: "Page heading",
    inputs: [
        {
            name: "desktopImageId",
            displayName: "Desktop image",
            type: "image",
            minWidth: 1920,
            minHeight: 496
        },
        {
            name: "mobileImageId",
            displayName: "Mobile image",
            type: "image",
            minWidth: 420,
            minHeight: 800
        }
    ]
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 99649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export RichTextElement */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48719);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24298);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25237);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99003);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_8__);









const QuillNoSSRWrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(null, {
    loadableGenerated: {
        modules: [
            "../src/builder/elements/RichTextElement.tsx -> " + "react-quill"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Loading ..."
        })
});
const formats = [
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link"
];
const RichTextElement = (props)=>{
    const { text: textProp  } = props;
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__/* .useLocaleContext */ .PE)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { actions: { setProp  } , connectors: { connect  } , isSelected  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)((node)=>({
            isSelected: node.events.selected
        }));
    const modules = {
        toolbar: isSelected ? [
            [
                {
                    header: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        false
                    ]
                }
            ],
            [
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote"
            ],
            [
                {
                    list: "ordered"
                },
                {
                    list: "bullet"
                },
                {
                    indent: "-1"
                },
                {
                    indent: "+1"
                }
            ],
            [
                "link"
            ],
            [
                "clean"
            ]
        ] : false,
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false
        }
    };
    const text = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(textProp, locale) || lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(textProp, application_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_LOCALE */ .ZW);
    const handleChange = (value)=>{
        if (!isSelected) return;
        setProp((props)=>{
            lodash_set__WEBPACK_IMPORTED_MODULE_6___default()(props, `text.${locale}`, value);
        }, 500);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        ref: (el)=>el && connect(el),
        sx: {
            ".ql-snow": {
                ".ql-editor": {
                    ...theme.typography,
                    p: theme.typography.body1,
                    textAlign: "left",
                    ".ql-size-small": theme.typography.body2
                },
                "&.ql-container, &.ql-toolbar": {
                    border: isSelected ? "1px solid" : "none",
                    borderColor: "action.disabled"
                },
                "& .ql-picker.ql-expanded .ql-picker-options": {
                    zIndex: 1501
                },
                "& .ql-picker .ql-picker-label svg": {
                    left: "unset"
                }
            }
        },
        children: isSelected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(QuillNoSSRWrapper, {
            value: text,
            modules: modules,
            formats: formats,
            theme: "snow",
            onChange: handleChange
        }, "selected") : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(QuillNoSSRWrapper, {
            value: text,
            modules: modules,
            formats: formats,
            theme: "snow",
            readOnly: true
        }, "not-selected")
    });
};
RichTextElement.craft = {
    defaultProps: {
        text: {
            [application_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_LOCALE */ .ZW]: "Enter some text..."
        }
    }
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(RichTextElement, {
    name: "RichTextElement",
    displayName: "Rich text",
    icon: "/icons/richText.svg"
});


/***/ }),

/***/ 33607:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: SpacerElement

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@king-david-it/builder"
var builder_ = __webpack_require__(42864);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
;// CONCATENATED MODULE: ./src/components/custom/Spacer/Spacer.tsx



const Spacer = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const { xSpacing , ySpacing , basis , sx  } = props;
    const theme = (0,material_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        ref: ref,
        width: xSpacing ? theme.spacing(xSpacing) : undefined,
        height: ySpacing ? theme.spacing(ySpacing) : undefined,
        flexBasis: basis ? theme.spacing(basis) : undefined,
        flexGrow: 0,
        flexShrink: 0,
        sx: sx
    });
});
Spacer.displayName = "Spacer";

;// CONCATENATED MODULE: ./src/components/custom/Spacer/index.ts


;// CONCATENATED MODULE: ./src/builder/elements/SpacerElement.tsx



const SpacerElement = (props)=>{
    const { ySpacing  } = props;
    const { connectors: { connect  }  } = (0,builder_.useNode)();
    return /*#__PURE__*/ jsx_runtime_.jsx(Spacer, {
        ySpacing: Number(ySpacing),
        ref: (el)=>el && connect(el)
    });
};
builder_.Builder.registerComponent(SpacerElement, {
    name: "SpacerElement",
    displayName: "Spacer",
    inputs: [
        {
            name: "ySpacing",
            displayName: "Height",
            type: "number",
            min: 0,
            step: 0.5,
            max: 100,
            defaultValue: 5,
            helperText: "Each point is 8px, for example 1.5 * 8 = 12px"
        }
    ]
});


/***/ }),

/***/ 60434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ TextElement),
/* harmony export */   "q": () => (/* binding */ textElementSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41430);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19594);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48719);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70745);







const TextElement = (props)=>{
    const { text: textProp , color , variant , align , sx , component  } = props;
    const { connectors: { connect  }  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useNode)();
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__/* .useLocaleContext */ .PE)();
    const text = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(textProp, locale) || lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(textProp, application_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_LOCALE */ .ZW);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
        ref: (el)=>{
            el?.addEventListener("click", ()=>{
                // Create a new mousedown event
                const mouseDownEvent = new MouseEvent("mousedown", {
                    view: window
                });
                // Dispatch the mousedown event on the element
                el.dispatchEvent(mouseDownEvent);
            });
            if (el) {
                connect(el);
            }
        },
        color: color,
        variant: variant,
        align: align,
        sx: sx,
        ...component && {
            component
        },
        children: text
    });
};
const textElementSettings = {
    name: "TextElement",
    displayName: "Text",
    icon: "/icons/text.svg",
    inputs: [
        {
            name: "text",
            displayName: "Text",
            type: "string",
            defaultValue: "Enter some text...",
            isTranslatable: true
        },
        {
            name: "color",
            displayName: "Color",
            type: "select",
            choices: [
                {
                    id: "primary.main",
                    name: "Primary"
                },
                {
                    id: "secondary.main",
                    name: "Secondary"
                },
                {
                    id: "primary.contrastText",
                    name: "White"
                },
                {
                    id: "text.primary",
                    name: "Text primary"
                },
                {
                    id: "text.secondary",
                    name: "Text secondary"
                },
                {
                    id: "success.main",
                    name: "Success"
                },
                {
                    id: "error.main",
                    name: "Error"
                },
                {
                    id: "info.main",
                    name: "Info"
                },
                {
                    id: "warning.main",
                    name: "Warning"
                }
            ],
            defaultValue: "text.primary"
        },
        {
            name: "variant",
            displayName: "Variant",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_6__/* .getChoicesFromArray */ .K)([
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "body1",
                "body2",
                "subtitle1",
                "subtitle2",
                "button",
                "buttonUnderline",
                "small1",
                "small2"
            ]),
            defaultValue: "body1"
        },
        {
            name: "component",
            displayName: "Component (Impact on SEO and Accessibility)",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_6__/* .getChoicesFromArray */ .K)([
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "p",
                "span",
                "div"
            ])
        },
        {
            name: "align",
            displayName: "Align",
            type: "select",
            choices: (0,_helpers_getChoicesFromArray__WEBPACK_IMPORTED_MODULE_6__/* .getChoicesFromArray */ .K)([
                "left",
                "right",
                "center",
                "justify"
            ])
        }
    ]
};
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.Builder.registerComponent(TextElement, textElementSettings);


/***/ }),

/***/ 19884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kA": () => (/* reexport */ ListingButtonsContextProvider),
  "ts": () => (/* reexport */ useListingButtonsContext),
  "v7": () => (/* reexport */ useListingButtonsController)
});

// UNUSED EXPORTS: ListingButtonsContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "lodash/noop"
var noop_ = __webpack_require__(87553);
var noop_default = /*#__PURE__*/__webpack_require__.n(noop_);
;// CONCATENATED MODULE: ./src/builder/elements/helpers/ListingButtonsContext/ListingButtonsContext.tsx



const defaultContextValue = {
    activeIndex: 0,
    setActiveIndex: (noop_default()),
    listings: {},
    setListings: (noop_default())
};
const ListingButtonsContext = /*#__PURE__*/ (0,external_react_.createContext)(defaultContextValue);
const useListingButtonsContext = ()=>{
    const context = (0,external_react_.useContext)(ListingButtonsContext);
    return context;
};
const ListingButtonsContextProvider = (props)=>{
    const { children , value  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(ListingButtonsContext.Provider, {
        value: value,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/builder/elements/helpers/ListingButtonsContext/useListingButtonsController.ts

const useListingButtonsController = ()=>{
    const [activeIndex, setActiveIndex] = (0,external_react_.useState)(0);
    const [listings, setListings] = (0,external_react_.useState)({});
    const onChangeListings = (0,external_react_.useCallback)((ids, id)=>{
        setListings((prev)=>({
                ...prev,
                [id]: ids
            }));
    }, []);
    return {
        activeIndex,
        setActiveIndex,
        listings,
        setListings: onChangeListings
    };
};

;// CONCATENATED MODULE: ./src/builder/elements/helpers/ListingButtonsContext/index.ts




/***/ }),

/***/ 70745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ getChoicesFromArray)
/* harmony export */ });
const getChoicesFromArray = (array)=>{
    return array.map((item)=>({
            id: item,
            name: item
        }));
};


/***/ }),

/***/ 88268:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41430);


_king_david_it_builder__WEBPACK_IMPORTED_MODULE_0__.Builder.init({
    defaultLocale: application_constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_LOCALE */ .ZW,
    locales: [
        ...application_constants__WEBPACK_IMPORTED_MODULE_1__/* .LOCALES */ .lE
    ]
});


/***/ }),

/***/ 34438:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88268);
/* harmony import */ var _elements_BoxElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13918);
/* harmony import */ var _elements_ButtonElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72454);
/* harmony import */ var _elements_TextElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60434);
/* harmony import */ var _elements_SpacerElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33607);
/* harmony import */ var _elements_HomePageComponents_SearchSectionElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93810);
/* harmony import */ var _elements_HomePageComponents_ContactUsSectionElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68547);
/* harmony import */ var _elements_HomePageComponents_ContactSectionElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76696);
/* harmony import */ var _elements_HomePageComponents_ReviewsSectionElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31250);
/* harmony import */ var _elements_HomePageComponents_TeamSectionElement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89170);
/* harmony import */ var _elements_HomePageComponents_AttributeSectionElement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85279);
/* harmony import */ var _elements_HomePageComponents_SingleListingsCarouselSectionElement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4679);
/* harmony import */ var _elements_HomePageComponents_ListingsCarouselSectionElement__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77625);
/* harmony import */ var _elements_PageHeadingSectionElement__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(42536);
/* harmony import */ var _elements_ContactFormElement__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37319);
/* harmony import */ var _elements_RichTextElement__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99649);
/* harmony import */ var _elements_ContainerElement__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25153);
/* harmony import */ var _elements_ColumnsElement__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(10615);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_elements_HomePageComponents_SearchSectionElement__WEBPACK_IMPORTED_MODULE_6__, _elements_HomePageComponents_ContactUsSectionElement__WEBPACK_IMPORTED_MODULE_7__, _elements_HomePageComponents_ContactSectionElement__WEBPACK_IMPORTED_MODULE_8__, _elements_HomePageComponents_ReviewsSectionElement__WEBPACK_IMPORTED_MODULE_9__, _elements_HomePageComponents_TeamSectionElement__WEBPACK_IMPORTED_MODULE_10__, _elements_HomePageComponents_AttributeSectionElement__WEBPACK_IMPORTED_MODULE_11__, _elements_HomePageComponents_SingleListingsCarouselSectionElement__WEBPACK_IMPORTED_MODULE_12__, _elements_HomePageComponents_ListingsCarouselSectionElement__WEBPACK_IMPORTED_MODULE_13__, _elements_PageHeadingSectionElement__WEBPACK_IMPORTED_MODULE_14__, _elements_ContactFormElement__WEBPACK_IMPORTED_MODULE_15__]);
([_elements_HomePageComponents_SearchSectionElement__WEBPACK_IMPORTED_MODULE_6__, _elements_HomePageComponents_ContactUsSectionElement__WEBPACK_IMPORTED_MODULE_7__, _elements_HomePageComponents_ContactSectionElement__WEBPACK_IMPORTED_MODULE_8__, _elements_HomePageComponents_ReviewsSectionElement__WEBPACK_IMPORTED_MODULE_9__, _elements_HomePageComponents_TeamSectionElement__WEBPACK_IMPORTED_MODULE_10__, _elements_HomePageComponents_AttributeSectionElement__WEBPACK_IMPORTED_MODULE_11__, _elements_HomePageComponents_SingleListingsCarouselSectionElement__WEBPACK_IMPORTED_MODULE_12__, _elements_HomePageComponents_ListingsCarouselSectionElement__WEBPACK_IMPORTED_MODULE_13__, _elements_PageHeadingSectionElement__WEBPACK_IMPORTED_MODULE_14__, _elements_ContactFormElement__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















_king_david_it_builder__WEBPACK_IMPORTED_MODULE_0__.Builder.register("insertMenu", {
    name: "Basics",
    order: 0,
    items: [
        {
            name: "BoxElement"
        },
        {
            name: "ButtonElement"
        },
        {
            name: "TextElement"
        },
        {
            name: "SpacerElement"
        },
        {
            name: "RichTextElement"
        },
        {
            name: "ContainerElement"
        },
        {
            name: "ColumnsElement"
        }
    ]
});
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_0__.Builder.register("insertMenu", {
    name: "Sections",
    order: 1,
    items: [
        {
            name: "SearchSectionElement"
        },
        {
            name: "PageHeadingSectionElement"
        },
        {
            name: "ContactUsSectionElement"
        },
        {
            name: "ContactSectionElement"
        },
        {
            name: "ReviewsSectionElement"
        },
        {
            name: "TeamSectionElement"
        },
        {
            name: "AttributeSectionElement"
        },
        {
            name: "SingleListingsCarouselSectionElement"
        },
        {
            name: "ListingsCarouselSectionElement"
        }
    ]
});
_king_david_it_builder__WEBPACK_IMPORTED_MODULE_0__.Builder.register("insertMenu", {
    name: "Forms",
    order: 2,
    items: [
        {
            name: "ContactFormElement"
        }
    ]
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ WhatsAppFloatButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94605);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getWhatsAppLink = (phone)=>{
    // remove all not digit characters from phone string
    const sanitarizedPhoneNumber = phone.replace(/\D/g, "");
    return `https://wa.me/${sanitarizedPhoneNumber}`;
};
const WhatsAppFloatButton = (props)=>{
    const { sx , className  } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const { data: website  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useGetWebsite */ .Rz)();
    if (!website?.phone) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Fab, {
        variant: "circular",
        color: "success",
        href: getWhatsAppLink(website.phone),
        target: "_blank",
        className: className,
        sx: {
            position: "fixed",
            bottom: "1.5rem",
            right: {
                xs: "1rem",
                sm: "1.5rem"
            },
            bgcolor: "success.main",
            ...sx
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
            icon: "whatsapp",
            size: "large",
            color: theme.palette.primary.contrastText
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (WhatsAppFloatButton)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54294:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* reexport safe */ _WhatsAppFloatButton__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _WhatsAppFloatButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61169);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_WhatsAppFloatButton__WEBPACK_IMPORTED_MODULE_0__]);
_WhatsAppFloatButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2817:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51296);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94605);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__]);
custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Avatar = (props)=>{
    const { src , size , sx , ...restAvatarProps } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            position: "relative",
            borderRadius: "50%",
            overflow: "hidden",
            width: size,
            height: size,
            ...sx
        },
        ...restAvatarProps,
        children: src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_components__WEBPACK_IMPORTED_MODULE_2__/* .NextImage */ .o, {
            src: src,
            fill: true,
            style: {
                objectFit: "cover"
            },
            alt: "Avatar image"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
            icon: "account-circle",
            color: theme.palette.text.disabled,
            sx: {
                fontSize: size
            }
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89512:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _Avatar__WEBPACK_IMPORTED_MODULE_0__.q)
/* harmony export */ });
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2817);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Avatar__WEBPACK_IMPORTED_MODULE_0__]);
_Avatar__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ DarkenedImageBackground)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
;// CONCATENATED MODULE: ./src/components/custom/DarkenedImageBackground/DarkenedImageBackground.tsx


/* We need this Box for blackout image */ const DarkenedImageBackground = (props)=>{
    const { sx , className  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        className: className,
        sx: {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: "rgba(48, 48, 48, 0.72)",
            zIndex: 1,
            ...sx
        }
    });
};

;// CONCATENATED MODULE: ./src/components/custom/DarkenedImageBackground/index.ts



/***/ }),

/***/ 53456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Notification)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var views_NotificationView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23890);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_NotificationView__WEBPACK_IMPORTED_MODULE_2__]);
views_NotificationView__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Notification = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { variant , style , message  } = props;
    const severity = variant === "default" ? "info" : variant;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_NotificationView__WEBPACK_IMPORTED_MODULE_2__/* .NotificationView */ .D, {
        ref: ref,
        severity: severity,
        style: style,
        children: message
    });
});
Notification.displayName = "Notification";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _Notification__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53456);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Notification__WEBPACK_IMPORTED_MODULE_0__]);
_Notification__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* reexport */ PageHeadingSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ../../packages/components/src/index.ts + 2 modules
var src = __webpack_require__(51296);
// EXTERNAL MODULE: ./src/components/custom/DarkenedImageBackground/index.ts + 1 modules
var DarkenedImageBackground = __webpack_require__(27659);
;// CONCATENATED MODULE: ./src/components/custom/PageHeadingSection/PageHeadingSection.tsx





const PageHeadingSection = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const { sx , className , desktopImageSrc , mobileImageSrc , title , subtitle  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        ref: ref,
        className: className,
        sx: {
            height: 496,
            width: "100%",
            position: "relative",
            ...sx
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DarkenedImageBackground/* DarkenedImageBackground */.a, {}),
            mobileImageSrc ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: {
                        md: "none"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(src/* NextImage */.o, {
                    src: mobileImageSrc,
                    alt: "Page heading",
                    fill: true,
                    style: {
                        objectFit: "cover"
                    },
                    priority: true
                })
            }) : null,
            desktopImageSrc ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: {
                        xs: "none",
                        md: "block"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(src/* NextImage */.o, {
                    src: desktopImageSrc,
                    alt: "Page heading",
                    fill: true,
                    style: {
                        objectFit: "cover"
                    },
                    priority: true
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: {
                        sm: "100%",
                        md: "auto"
                    },
                    zIndex: 2
                },
                children: [
                    title,
                    subtitle
                ]
            })
        ]
    });
});
PageHeadingSection.displayName = "PageHeadingSection";

;// CONCATENATED MODULE: ./src/components/custom/PageHeadingSection/index.ts



/***/ }),

/***/ 48398:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ PageLoader)
/* harmony export */ });
/* unused harmony export PageLoaderClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_4__]);
theme_index__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const PREFIX = "PageLoader";
const PageLoaderClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.generateUtilityClasses)(PREFIX, [
    "root",
    "loader"
]);
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    name: `Styled--${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`&.${PageLoaderClasses.root}`]: {
            position: "fixed",
            zIndex: 2000,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            backgroundColor: (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.text.primary, 0.6)
        },
        [`& .${PageLoaderClasses.loader}`]: {
            color: theme.palette.common.white
        }
    };
});
// prevent page scrolling
const bodyHiddenOverflowStyles = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.GlobalStyles, {
    styles: {
        body: {
            overflow: "hidden"
        }
    }
});
const PageLoader = (props)=>{
    const { children  } = props;
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleStart = (_, options)=>{
            if (!options?.shallow) {
                setIsLoading(true);
            }
        };
        const handleComplete = ()=>{
            setIsLoading(false);
        };
        const handleError = ()=>{
            setIsLoading(false);
        };
        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on("routeChangeStart", handleStart);
        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on("routeChangeComplete", handleComplete);
        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on("routeChangeError", handleError);
        return ()=>{
            next_router__WEBPACK_IMPORTED_MODULE_3___default().events.off("routeChangeStart", handleStart);
            next_router__WEBPACK_IMPORTED_MODULE_3___default().events.off("routeChangeComplete", handleComplete);
            next_router__WEBPACK_IMPORTED_MODULE_3___default().events.off("routeChangeError", handleError);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isLoading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledRoot, {
                className: PageLoaderClasses.root,
                children: [
                    bodyHiddenOverflowStyles,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {
                        size: 96,
                        className: PageLoaderClasses.loader
                    })
                ]
            }),
            children
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15197:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* reexport safe */ _PageLoader__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _PageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48398);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PageLoader__WEBPACK_IMPORTED_MODULE_0__]);
_PageLoader__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18605:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49752);
/* harmony import */ var buttons_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49230);
/* harmony import */ var hooks_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1580);
/* harmony import */ var hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59789);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53127);
/* harmony import */ var inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21002);
/* harmony import */ var inputs_TextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52602);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71704);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var templates_GridContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2098);
/* harmony import */ var templates_GridItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(120);
/* harmony import */ var views_FormView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(58403);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(43616);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1164);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(26801);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, hooks_useForm__WEBPACK_IMPORTED_MODULE_5__, inputs_TextInput__WEBPACK_IMPORTED_MODULE_9__, views_FormView__WEBPACK_IMPORTED_MODULE_13__, _api__WEBPACK_IMPORTED_MODULE_14__, _schema__WEBPACK_IMPORTED_MODULE_16__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, hooks_useForm__WEBPACK_IMPORTED_MODULE_5__, inputs_TextInput__WEBPACK_IMPORTED_MODULE_9__, views_FormView__WEBPACK_IMPORTED_MODULE_13__, _api__WEBPACK_IMPORTED_MODULE_14__, _schema__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const ContactForm = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { BuilderButton  } = props;
    const { executeRecaptcha  } = (0,react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_10__.useGoogleReCaptcha)();
    const form = (0,hooks_useForm__WEBPACK_IMPORTED_MODULE_5__/* .useForm */ .c)({
        validationSchema: _schema__WEBPACK_IMPORTED_MODULE_16__/* .contactFormValidationSchema */ .Z
    });
    const { reset  } = form;
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_7__/* .useTranslate */ .q)({
        basePath: "forms.contact"
    });
    const { enqueueSnackbar  } = (0,hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_6__/* .useSnackbar */ .D)();
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)((theme)=>theme.breakpoints.up("md"));
    const handleSuccessfulSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        enqueueSnackbar(translate("success_message"), {
            variant: "success"
        });
        reset();
    }, [
        reset,
        enqueueSnackbar,
        translate
    ]);
    const { mutateAsync , isLoading  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        mutationFn: _api__WEBPACK_IMPORTED_MODULE_14__/* .contact */ .P,
        onSuccess: handleSuccessfulSubmit
    });
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (data)=>{
        await mutateAsync({
            data,
            executeRecaptcha
        });
    }, [
        mutateAsync,
        executeRecaptcha
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        ref: ref,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(views_FormView__WEBPACK_IMPORTED_MODULE_13__/* .FormView */ .m, {
            ...form,
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(templates_GridContainer__WEBPACK_IMPORTED_MODULE_11__/* .GridContainer */ .T, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_12__/* .GridItem */ .P, {
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_TextInput__WEBPACK_IMPORTED_MODULE_9__/* .TextInput */ .o, {
                                name: _constants__WEBPACK_IMPORTED_MODULE_15__/* .SOURCES.first_name */ .L.first_name,
                                label: translate("first_name")
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_12__/* .GridItem */ .P, {
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_TextInput__WEBPACK_IMPORTED_MODULE_9__/* .TextInput */ .o, {
                                name: _constants__WEBPACK_IMPORTED_MODULE_15__/* .SOURCES.last_name */ .L.last_name,
                                label: translate("last_name")
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_12__/* .GridItem */ .P, {
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_TextInput__WEBPACK_IMPORTED_MODULE_9__/* .TextInput */ .o, {
                                name: _constants__WEBPACK_IMPORTED_MODULE_15__/* .SOURCES.email */ .L.email,
                                type: "email",
                                label: translate("email")
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_12__/* .GridItem */ .P, {
                            md: 6,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_8__/* .PhoneInput */ .s, {
                                name: _constants__WEBPACK_IMPORTED_MODULE_15__/* .SOURCES.phone */ .L.phone,
                                label: translate("phone")
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_12__/* .GridItem */ .P, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_TextInput__WEBPACK_IMPORTED_MODULE_9__/* .TextInput */ .o, {
                                name: _constants__WEBPACK_IMPORTED_MODULE_15__/* .SOURCES.note */ .L.note,
                                multiline: true,
                                label: translate("note"),
                                textFieldProps: {
                                    rows: 3
                                }
                            })
                        })
                    ]
                }),
                BuilderButton ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BuilderButton, {
                    sx: {
                        mt: 2
                    },
                    type: "submit",
                    loading: isLoading,
                    // Default text
                    text: {
                        "en-US": "Send",
                        "fr-FR": "Envoyer",
                        "he-IL": "שלח"
                    }
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    variant: "contained",
                    sx: {
                        mt: 2
                    },
                    type: "submit",
                    fullWidth: !isDesktop,
                    loading: isLoading,
                    children: translate.root("buttons.send")
                })
            ]
        })
    });
});
ContactForm.displayName = "ContactForm";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ContactForm)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__]);
_packages_providers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const contact = (params)=>{
    const { data , executeRecaptcha  } = params;
    return _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.post */ .zk.post({
        pathname: application_resources__WEBPACK_IMPORTED_MODULE_1__/* .CONTACT_US_RESOURCE */ .yc,
        data,
        executeRecaptcha
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ SOURCES)
/* harmony export */ });
const SOURCES = {
    first_name: "first_name",
    last_name: "last_name",
    email: "email",
    phone: "phone",
    note: "note"
};


/***/ }),

/***/ 69008:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* reexport safe */ _ContactForm__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18605);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactForm__WEBPACK_IMPORTED_MODULE_0__]);
_ContactForm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26801:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ contactFormValidationSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1164);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const contactFormValidationSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    [_constants__WEBPACK_IMPORTED_MODULE_1__/* .SOURCES.first_name */ .L.first_name]: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(3).max(95).or(zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("")),
    [_constants__WEBPACK_IMPORTED_MODULE_1__/* .SOURCES.last_name */ .L.last_name]: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(3).max(95).or(zod__WEBPACK_IMPORTED_MODULE_0__.z.literal("")),
    [_constants__WEBPACK_IMPORTED_MODULE_1__/* .SOURCES.email */ .L.email]: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1).email().max(191),
    [_constants__WEBPACK_IMPORTED_MODULE_1__/* .SOURCES.phone */ .L.phone]: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().max(191),
    [_constants__WEBPACK_IMPORTED_MODULE_1__/* .SOURCES.note */ .L.note]: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1).max(300)
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 21002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* reexport */ PhoneInputLazy)
});

// UNUSED EXPORTS: PhoneInputLazy

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./src/components/inputs/PhoneInput/PhoneInputLazy.tsx


const PhoneInput = /*#__PURE__*/ (0,external_react_.lazy)(()=>__webpack_require__.e(/* import() */ 688).then(__webpack_require__.bind(__webpack_require__, 20688)));
const PhoneInputLazy = (props)=>{
    const { fallback =null , ...rest } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
        fallback: fallback,
        children: /*#__PURE__*/ jsx_runtime_.jsx(PhoneInput, {
            ...rest
        })
    });
};
/* harmony default export */ const PhoneInput_PhoneInputLazy = ((/* unused pure expression or super */ null && (PhoneInputLazy)));

;// CONCATENATED MODULE: ./src/components/inputs/PhoneInput/index.ts




/***/ }),

/***/ 65844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ WithSectionTitleWrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/components/Typography/index.ts + 1 modules
var Typography = __webpack_require__(19594);
;// CONCATENATED MODULE: ./src/components/layouts/WithSectionTitleWrapper/WithSectionTitleWrapper.tsx



const WithSectionTitleWrapper = (props)=>{
    const { title , subtitle , children , maxWidth ="xl" , titleProps  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
            maxWidth: maxWidth,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    mb: 6,
                    children: [
                        typeof title === "string" ? /*#__PURE__*/ jsx_runtime_.jsx(Typography/* Typography */.Z, {
                            variant: "h3",
                            mb: 1,
                            textAlign: "center",
                            sx: {
                                wordBreak: "break-word"
                            },
                            ...titleProps,
                            children: title
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: title
                        }),
                        subtitle && /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            container: true,
                            justifyContent: "center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                maxWidth: 464,
                                textAlign: "center",
                                children: subtitle
                            })
                        })
                    ]
                }),
                children
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/layouts/WithSectionTitleWrapper/index.ts



/***/ }),

/***/ 45263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ ContactUsSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_links_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50682);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19594);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94605);
/* harmony import */ var templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19572);
/* harmony import */ var theme_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43001);
/* harmony import */ var views_SocialsToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25059);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_6__, theme_theme__WEBPACK_IMPORTED_MODULE_7__, views_SocialsToolbar__WEBPACK_IMPORTED_MODULE_8__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_6__, theme_theme__WEBPACK_IMPORTED_MODULE_7__, views_SocialsToolbar__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ContactUsSection = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { phone , email , address , mediaLinks , text  } = props;
    const defaultWithTitleTemplateProps = {
        sx: {
            display: "flex",
            flexDirection: "column",
            gap: 2
        },
        space: 0
    };
    const defaultLinkProps = {
        sx: {
            display: "block",
            maxWidth: 220,
            mx: "auto",
            textDecoration: "none",
            color: theme_theme__WEBPACK_IMPORTED_MODULE_7__/* .theme.palette.text.primary */ .r.palette.text.primary
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        ref: ref,
        sx: {
            px: {
                xs: 2,
                md: 0
            },
            pt: {
                xs: 11.5,
                md: 6.5
            },
            pb: 5.5,
            background: (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme_theme__WEBPACK_IMPORTED_MODULE_7__/* .theme.palette.primary.background */ .r.palette.primary.background, 0.5)
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
            maxWidth: "lg",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    container: true,
                    flexWrap: "nowrap",
                    flexDirection: {
                        xs: "column",
                        md: "row"
                    },
                    justifyContent: "space-between",
                    columnSpacing: 3,
                    rowSpacing: 7,
                    children: [
                        address ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_links_Link__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .r, {
                                ...defaultLinkProps,
                                href: `http://maps.google.com/?q=${address}`,
                                target: "_blank",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                                    ...defaultWithTitleTemplateProps,
                                    title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
                                        variant: "subtitle1",
                                        children: address
                                    }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__/* .IcoMoon */ .n, {
                                        icon: "pin"
                                    })
                                })
                            })
                        }) : null,
                        email ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_links_Link__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .r, {
                                ...defaultLinkProps,
                                href: `mailto:${email}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                                    ...defaultWithTitleTemplateProps,
                                    title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
                                        variant: "subtitle1",
                                        children: email
                                    }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__/* .IcoMoon */ .n, {
                                        icon: "email"
                                    })
                                })
                            })
                        }) : null,
                        phone ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_links_Link__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .r, {
                                ...defaultLinkProps,
                                href: `tel:${phone}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                                    ...defaultWithTitleTemplateProps,
                                    title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
                                        variant: "subtitle1",
                                        children: phone
                                    }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__/* .IcoMoon */ .n, {
                                        icon: "phone"
                                    })
                                })
                            })
                        }) : null
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                    sx: {
                        my: 5.25
                    }
                }),
                text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    container: true,
                    justifyContent: "center",
                    mb: 3.5,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        textAlign: "center",
                        maxWidth: 464,
                        children: text
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    container: true,
                    justifyContent: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_SocialsToolbar__WEBPACK_IMPORTED_MODULE_8__/* .SocialsToolbar */ ._, {
                        ...mediaLinks
                    })
                })
            ]
        })
    });
});
ContactUsSection.displayName = "ContactUsSection";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* reexport safe */ _ContactUsSection__WEBPACK_IMPORTED_MODULE_0__.L)
/* harmony export */ });
/* harmony import */ var _ContactUsSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45263);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactUsSection__WEBPACK_IMPORTED_MODULE_0__]);
_ContactUsSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35356:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ SearchSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41430);
/* harmony import */ var components_forms_SearchListingsForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35612);
/* harmony import */ var hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49605);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66011);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var templates_ImageTemplate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11513);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_forms_SearchListingsForm__WEBPACK_IMPORTED_MODULE_3__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_8__]);
([components_forms_SearchListingsForm__WEBPACK_IMPORTED_MODULE_3__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const SearchSection = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { sx , className , slots , slotProps , ...rest } = props;
    const { data: popularCitiesData = []  } = (0,hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)();
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((values)=>{
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
        next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
            pathname: `/${application_constants__WEBPACK_IMPORTED_MODULE_2__/* .SEARCH_ROUTE */ .XH}`,
            query: lodash_omitBy__WEBPACK_IMPORTED_MODULE_5___default()(filter, (value)=>!value)
        });
    }, [
        popularCitiesData
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_ImageTemplate__WEBPACK_IMPORTED_MODULE_7__/* .ImageTemplate */ ._, {
        sx: {
            display: "flex",
            justifyContent: "center",
            minHeight: {
                xs: `calc(100vh - ${theme_index__WEBPACK_IMPORTED_MODULE_8__/* .MOBILE_HEADER_HEIGHT */ .ZQ}px)`,
                md: `calc(100vh - ${theme_index__WEBPACK_IMPORTED_MODULE_8__/* .HEADER_HEIGHT */ .Mz}px)`
            },
            ...sx
        },
        className: className,
        ...rest,
        ref: ref,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_forms_SearchListingsForm__WEBPACK_IMPORTED_MODULE_3__/* .SearchListingsForm */ .R, {
            onSubmit: handleSubmit,
            slots: slots,
            slotProps: slotProps
        })
    });
});
SearchSection.displayName = "SearchSection";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31478:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _SearchSection__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _SearchSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35356);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchSection__WEBPACK_IMPORTED_MODULE_0__]);
_SearchSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50329:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _SearchSection__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _SearchSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31478);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchSection__WEBPACK_IMPORTED_MODULE_0__]);
_SearchSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50329);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_0__]);
_components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* reexport */ AttributeSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/components/layouts/WithSectionTitleWrapper/index.ts + 1 modules
var WithSectionTitleWrapper = __webpack_require__(65844);
;// CONCATENATED MODULE: ./src/components/sections/AttributeSection/AttributeSection.tsx




const AttributeSection = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const { title , subtitle , maxWidth ="lg" , children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        ref: ref,
        py: 10,
        children: /*#__PURE__*/ jsx_runtime_.jsx(WithSectionTitleWrapper/* WithSectionTitleWrapper */.a, {
            title: title,
            subtitle: subtitle,
            maxWidth: maxWidth,
            children: children
        })
    });
});
AttributeSection.displayName = "AttributeSection";

;// CONCATENATED MODULE: ./src/components/sections/AttributeSection/index.ts



/***/ }),

/***/ 2614:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ ContactSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_forms_ContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69008);
/* harmony import */ var components_layouts_WithSectionTitleWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65844);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_forms_ContactForm__WEBPACK_IMPORTED_MODULE_3__]);
components_forms_ContactForm__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ContactSection = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { title , subtitle , maxWidth , BuilderButton  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        ref: ref,
        sx: {
            bgcolor: "background.paper",
            py: 10
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layouts_WithSectionTitleWrapper__WEBPACK_IMPORTED_MODULE_4__/* .WithSectionTitleWrapper */ .a, {
            title: title,
            subtitle: subtitle,
            maxWidth: maxWidth,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_forms_ContactForm__WEBPACK_IMPORTED_MODULE_3__/* .ContactForm */ .t, {
                BuilderButton: BuilderButton
            })
        })
    });
});
ContactSection.displayName = "ContactSection";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* reexport safe */ _ContactSection__WEBPACK_IMPORTED_MODULE_0__.U)
/* harmony export */ });
/* harmony import */ var _ContactSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2614);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactSection__WEBPACK_IMPORTED_MODULE_0__]);
_ContactSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* reexport */ HomeReviewsSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/components/layouts/WithSectionTitleWrapper/index.ts + 1 modules
var WithSectionTitleWrapper = __webpack_require__(65844);
;// CONCATENATED MODULE: ./src/components/sections/HomeReviewsSection/HomeReviewsSection.tsx




const HomeReviewsSection = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const { title , subtitle , maxWidth ="lg" , titleProps , children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        ref: ref,
        py: 10,
        id: "review",
        children: /*#__PURE__*/ jsx_runtime_.jsx(WithSectionTitleWrapper/* WithSectionTitleWrapper */.a, {
            title: title,
            subtitle: subtitle,
            maxWidth: maxWidth,
            titleProps: titleProps,
            children: children
        })
    });
});
HomeReviewsSection.displayName = "HomeReviewsSection";

;// CONCATENATED MODULE: ./src/components/sections/HomeReviewsSection/index.ts



/***/ }),

/***/ 78866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ ListingCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51296);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var components_links_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50682);
/* harmony import */ var helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12764);
/* harmony import */ var helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23517);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var templates_GridItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(120);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62430);
/* harmony import */ var views_ListingInfoBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_6__, hooks_index__WEBPACK_IMPORTED_MODULE_7__, theme__WEBPACK_IMPORTED_MODULE_10__, views_ListingInfoBlock__WEBPACK_IMPORTED_MODULE_11__]);
([helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_6__, hooks_index__WEBPACK_IMPORTED_MODULE_7__, theme__WEBPACK_IMPORTED_MODULE_10__, views_ListingInfoBlock__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ListingCard = (props)=>{
    const { id , buttonText  } = props;
    const { data  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_7__/* .useGetListing */ .Mw)(id);
    const getPrice = (0,helpers_useGetPriceInCurrentCurrency__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_7__/* .useTranslate */ .qM)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    // use first image by default
    const src = lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, "gallery.0.src");
    const title = lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, "title") || "";
    const address = lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, "address") || "";
    const formattedFilters = lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, "formatted_filters");
    const listingSlug = lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(data, "slug");
    const [accommodates, bedrooms, bathrooms, basePrice, rating, ratingCount] = (0,helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_5__/* .getFilterValues */ .i)({
        formattedFilters: data?.formatted_filters || [],
        slugs: [
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .ACCOMMODATES_SOURCE */ .s0,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BEDROOMS_SOURCE */ .Bt,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BATHROOMS_SOURCE */ .qA,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .BASE_PRICE_SLUG */ .LI,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .RATING_SLUG */ .gd,
            application_constants__WEBPACK_IMPORTED_MODULE_3__/* .RATING_COUNT_SLUG */ .BN
        ]
    });
    const priceValue = basePrice?.value ? Number(basePrice?.value) : 0; // TODO: convert
    const convertedPrice = getPrice({
        amount: priceValue,
        initialCurrencyCode: data?.currency?.code || ""
    });
    const amenitiesItems = [];
    if (accommodates) {
        amenitiesItems.push({
            id: "1",
            label: translate.root("custom.guest"),
            value: accommodates.value
        });
    }
    if (bedrooms) {
        amenitiesItems.push({
            id: "2",
            label: bedrooms.filterAttribute?.title,
            value: bedrooms.value
        });
    }
    if (bathrooms) {
        amenitiesItems.push({
            id: "3",
            label: bathrooms.filterAttribute?.title,
            value: bathrooms.value
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        height: 742,
        width: 1,
        position: "relative",
        sx: {
            display: "block",
            maxHeight: {
                xs: `calc(100vh - ${theme__WEBPACK_IMPORTED_MODULE_10__/* .MOBILE_HEADER_HEIGHT */ .ZQ}px)`,
                md: `calc(100vh - ${theme__WEBPACK_IMPORTED_MODULE_10__/* .HEADER_HEIGHT */ .Mz}px)`
            },
            ...!src ? {
                background: `linear-gradient(0deg, rgba(48, 48, 48, 0.68), rgba(48, 48, 48, 0.68))`
            } : {}
        },
        children: [
            src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_components__WEBPACK_IMPORTED_MODULE_2__/* .NextImage */ .o, {
                src: src,
                fill: true,
                style: {
                    objectFit: "cover"
                },
                alt: address
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                height: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        container: true,
                        justifyContent: "center",
                        mt: 8,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            xs: 6,
                            md: 2,
                            zIndex: 1,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                                variant: "filled",
                                color: "primary",
                                label: buttonText,
                                sx: {
                                    borderRadius: 6,
                                    width: 1,
                                    ":hover": {
                                        bgcolor: "primary.main"
                                    }
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        container: true,
                        px: 4,
                        pt: {
                            xs: 16,
                            md: 10
                        },
                        pb: 4,
                        zIndex: 1,
                        sx: {
                            background: "linear-gradient(180deg, rgba(38, 50, 56, 0) 0%, #263238 100%)"
                        },
                        justifyContent: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_links_Link__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .r, {
                            href: listingSlug ? application_constants__WEBPACK_IMPORTED_MODULE_3__/* .listingRoute.getPathname */ .oo.getPathname(listingSlug) : "",
                            target: isMobile ? "_self" : "_blank",
                            underline: "none",
                            maxWidth: "100%",
                            "aria-label": title,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_9__/* .GridItem */ .P, {
                                maxWidth: {
                                    md: 600
                                },
                                sx: {
                                    color: "primary.contrastText"
                                },
                                children: formattedFilters && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ListingInfoBlock__WEBPACK_IMPORTED_MODULE_11__/* .ListingInfoBlock */ .R, {
                                    name: title,
                                    address: address,
                                    price: convertedPrice,
                                    pricePrefix: "from",
                                    divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                                        sx: {
                                            borderColor: "primary.contrastText"
                                        },
                                        orientation: "vertical",
                                        flexItem: true
                                    }),
                                    amenitiesItems: amenitiesItems,
                                    amenitiesTypographyProps: {
                                        sx: {
                                            color: "primary.contrastText"
                                        }
                                    },
                                    ratingTypographyProps: {
                                        sx: {
                                            color: "primary.contrastText"
                                        }
                                    },
                                    rating: Number(rating?.value) || 0,
                                    reviewsCount: Number(ratingCount?.value) || 0
                                })
                            })
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

/***/ 78237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ SingleListingsCarouselSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ListingCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78866);
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListingCard__WEBPACK_IMPORTED_MODULE_3__, _swiper__WEBPACK_IMPORTED_MODULE_4__]);
([_ListingCard__WEBPACK_IMPORTED_MODULE_3__, _swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const SingleListingsCarouselSection = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    // added empty string id to have mock view of listings
    const { ids =[
        ""
    ] , buttonText  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        ref: ref,
        sx: {
            ".listing_swiper": {
                ".swiper-pagination-bullet": {
                    width: 10,
                    height: 10,
                    bgcolor: "transparent",
                    border: "1px solid",
                    borderColor: "primary.contrastText",
                    borderRadius: 1
                },
                ".swiper-pagination-bullet-active": {
                    bgcolor: "primary.contrastText"
                }
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_swiper__WEBPACK_IMPORTED_MODULE_4__/* .SingleListingSwiper */ .J2, {
            className: "listing_swiper",
            pagination: true,
            navigation: true,
            children: ids?.map((id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListingCard__WEBPACK_IMPORTED_MODULE_3__/* .ListingCard */ .d, {
                    id: id,
                    buttonText: buttonText
                }, id))
        })
    });
});
SingleListingsCarouselSection.displayName = "SingleListingsCarouselSection";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35071:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* reexport safe */ _SingleListingsCarouselSection__WEBPACK_IMPORTED_MODULE_0__.m)
/* harmony export */ });
/* harmony import */ var _SingleListingsCarouselSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SingleListingsCarouselSection__WEBPACK_IMPORTED_MODULE_0__]);
_SingleListingsCarouselSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J2": () => (/* binding */ SingleListingSwiper)
/* harmony export */ });
/* unused harmony exports SingleListingSwiperClasses, StyledRoot */
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_7__]);
([clsx__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PREFIX = "SingleListingSwiper";
const SingleListingSwiperClasses = {
    navigationButtonWrapper: `${PREFIX}-navigationButtonWrapper`,
    disabledNavigationButtonWrapper: `${PREFIX}-disabledNavigationButtonWrapper`,
    prevButtonWrapper: `${PREFIX}-prevButtonWrapper`,
    nextButtonWrapper: `${PREFIX}-nextButtonWrapper`,
    navigationButton: `${PREFIX}-navigationButton`,
    prevButton: `${PREFIX}-prevButton`,
    nextButton: `${PREFIX}-nextButton`,
    // swiper core and modules classes, add others if need
    paginationContainer: "swiper-pagination",
    paginationBullet: "swiper-pagination-bullet",
    paginationFraction: "swiper-pagination-fraction",
    paginationActiveBullet: "swiper-pagination-bullet-active"
};
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    const isRtl = theme.direction === "rtl";
    return {
        position: "relative",
        [`& .${SingleListingSwiperClasses.navigationButtonWrapper}`]: {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            transition: "0.3s"
        },
        [`& .${SingleListingSwiperClasses.disabledNavigationButtonWrapper}`]: {
            [`& .${SingleListingSwiperClasses.navigationButton}`]: {
                visibility: "hidden"
            }
        },
        [`& .${SingleListingSwiperClasses.prevButtonWrapper}`]: {
            left: theme.spacing(1)
        },
        [`& .${SingleListingSwiperClasses.nextButtonWrapper}`]: {
            right: theme.spacing(1)
        },
        [`& .${SingleListingSwiperClasses.navigationButton}`]: {
            [theme.breakpoints.up("md")]: {
                opacity: 0.8
            },
            backgroundColor: theme.palette.primary.contrastText,
            "& svg": {
                color: theme.palette.text.light
            },
            ":hover": {
                opacity: 1,
                backgroundColor: theme.palette.primary.contrastText
            }
        },
        [`& .${SingleListingSwiperClasses.prevButton}`]: {
            transform: isRtl ? "rotate(180deg)" : "rotate(0deg)"
        },
        [`& .${SingleListingSwiperClasses.nextButton}`]: {
            transform: isRtl ? "rotate(0deg)" : "rotate(180deg)"
        },
        [`& .${SingleListingSwiperClasses.paginationContainer}`]: {
            lineHeight: 0
        },
        [`& .${SingleListingSwiperClasses.paginationBullet}`]: {
            width: 6,
            height: 6,
            opacity: 0.6,
            backgroundColor: theme.palette.primary.contrastText
        },
        [`& .${SingleListingSwiperClasses.paginationFraction}`]: {
            bottom: 24
        },
        [`& .${SingleListingSwiperClasses.paginationActiveBullet}`]: {
            opacity: 1
        }
    };
});
const ArrowButton = (props)=>{
    const { className , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
        size: "small",
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.clsx)(SingleListingSwiperClasses.navigationButton),
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
            icon: "chevron-left",
            size: "small",
            className: className
        })
    });
};
const SingleListingSwiper = (props)=>{
    const { children  } = props;
    const { className: swiperClassName , navigation =false , onResize , onBeforeInit , onAfterInit , onSlideChange , pagination , loop , ...restSwiperBaseProps } = props || {};
    const isNavigationEnabled = Boolean(navigation);
    const navigationParams = typeof navigation !== "boolean" ? navigation : {};
    const [isFirstGroup, setIsFirstGroup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isLastGroup, setIsLastGroup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [prevElement, setPrevElement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [nextElement, setNextElement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const setGroupsStatus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((swiper)=>{
        const { isBeginning , isEnd  } = swiper;
        setIsFirstGroup(isBeginning);
        setIsLastGroup(isEnd);
    }, []);
    const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((swiper)=>{
        onResize?.(swiper);
        setGroupsStatus(swiper);
    }, [
        onResize,
        setGroupsStatus
    ]);
    const handleAfterInit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((swiper)=>{
        onAfterInit?.(swiper);
        setGroupsStatus(swiper);
    }, [
        onAfterInit,
        setGroupsStatus
    ]);
    const handleSlideChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((swiper)=>{
        onSlideChange?.(swiper);
        setGroupsStatus(swiper);
    }, [
        onSlideChange,
        setGroupsStatus
    ]);
    /**
   * We need to assign custom navigation elements before swiper init
   * because they don't work when we just pass it to navigation options
   */ const handleBeforeInit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((swiper)=>{
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
            isNavigationEnabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                ref: setPrevElement,
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.clsx)(SingleListingSwiperClasses.navigationButtonWrapper, SingleListingSwiperClasses.prevButtonWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowButton, {
                    className: SingleListingSwiperClasses.prevButton,
                    disabled: !loop && isFirstGroup
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__/* .Swiper */ .tq, {
                className: swiperClassName,
                modules: [
                    swiper_modules__WEBPACK_IMPORTED_MODULE_5__/* .Navigation */ .W_,
                    swiper_modules__WEBPACK_IMPORTED_MODULE_5__/* .Pagination */ .tl
                ],
                navigation: isNavigationEnabled ? {
                    prevEl: prevElement,
                    nextEl: nextElement,
                    disabledClass: SingleListingSwiperClasses.disabledNavigationButtonWrapper,
                    ...navigationParams
                } : false,
                pagination: {
                    clickable: true,
                    enabled: !!pagination,
                    dynamicBullets: true,
                    dynamicMainBullets: 3
                },
                onBeforeInit: handleBeforeInit,
                onAfterInit: handleAfterInit,
                onResize: handleResize,
                onSlideChange: handleSlideChange,
                loop: loop,
                ...restSwiperBaseProps,
                children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__/* .SwiperSlide */ .o5, {
                        children: child
                    }, index);
                })
            }),
            isNavigationEnabled && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                ref: setNextElement,
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.clsx)(SingleListingSwiperClasses.navigationButtonWrapper, SingleListingSwiperClasses.nextButtonWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowButton, {
                    className: SingleListingSwiperClasses.nextButton,
                    disabled: !loop && isLastGroup
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75215:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J2": () => (/* reexport safe */ _SingleListingSwiper__WEBPACK_IMPORTED_MODULE_0__.J2)
/* harmony export */ });
/* harmony import */ var _SingleListingSwiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74202);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SingleListingSwiper__WEBPACK_IMPORTED_MODULE_0__]);
_SingleListingSwiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ TeamSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/components/layouts/WithSectionTitleWrapper/index.ts + 1 modules
var WithSectionTitleWrapper = __webpack_require__(65844);
;// CONCATENATED MODULE: ./src/components/sections/TeamSection/TeamSection.tsx




const TeamSection = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const { title , subtitle , maxWidth ="lg" , children  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        ref: ref,
        py: 10,
        children: /*#__PURE__*/ jsx_runtime_.jsx(WithSectionTitleWrapper/* WithSectionTitleWrapper */.a, {
            title: title,
            subtitle: subtitle,
            maxWidth: maxWidth,
            children: children
        })
    });
});
TeamSection.displayName = "TeamSection";

;// CONCATENATED MODULE: ./src/components/sections/TeamSection/index.ts



/***/ }),

/***/ 11513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* reexport */ ImageTemplate)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ../../packages/components/src/index.ts + 2 modules
var src = __webpack_require__(51296);
// EXTERNAL MODULE: ./src/components/custom/DarkenedImageBackground/index.ts + 1 modules
var DarkenedImageBackground = __webpack_require__(27659);
;// CONCATENATED MODULE: ./src/components/templates/ImageTemplate/ImageTemplate.tsx





const ImageTemplate = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const { sx , className , mobileImageSrc , desktopImageSrc , children , title , subtitle  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        ref: ref,
        className: className,
        sx: {
            minHeight: 496,
            backgroundSize: "cover",
            position: "relative",
            ...sx
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DarkenedImageBackground/* DarkenedImageBackground */.a, {}),
            mobileImageSrc ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: {
                        md: "none"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(src/* NextImage */.o, {
                    src: mobileImageSrc,
                    alt: "Page heading",
                    fill: true,
                    style: {
                        objectFit: "cover"
                    },
                    priority: true
                })
            }) : null,
            desktopImageSrc ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: {
                        xs: "none",
                        md: "block"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(src/* NextImage */.o, {
                    src: desktopImageSrc,
                    alt: "Page heading",
                    fill: true,
                    style: {
                        objectFit: "cover"
                    },
                    priority: true
                })
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 3,
                    py: 5
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        width: {
                            xs: "100%",
                            md: "auto"
                        },
                        zIndex: 2
                    },
                    children: [
                        title,
                        subtitle,
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: children
                        })
                    ]
                })
            })
        ]
    });
});
ImageTemplate.displayName = "ImageTemplate";

;// CONCATENATED MODULE: ./src/components/templates/ImageTemplate/index.ts



/***/ }),

/***/ 6737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ AttributeSectionView_AttributeSectionView)
});

// UNUSED EXPORTS: AttributeSectionView

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@king-david-it/builder"
var builder_ = __webpack_require__(42864);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ../../packages/components/src/index.ts + 2 modules
var components_src = __webpack_require__(51296);
// EXTERNAL MODULE: ./src/application/constants.ts
var constants = __webpack_require__(41430);
// EXTERNAL MODULE: ./src/components/links/NextLink/index.ts + 1 modules
var NextLink = __webpack_require__(4630);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
;// CONCATENATED MODULE: ./src/components/views/AttributeSectionView/AttributeSectionView.tsx







const AttributeSectionView = (props)=>{
    const { src , altAttributeName , filter , slots , slotProps  } = props;
    const filterSlug = get_default()(filter, "slug") || "";
    const filterValue = get_default()(filter, "value") || get_default()(filter, filterSlug);
    const { actionButton: ActionButton  } = slots;
    const { actionButton: actionButtonProps  } = slotProps || {};
    // TODO: replace with a commented code below in 1.5.0
    const getFormattedFilter = ()=>{
        if (filterSlug === constants/* BASE_PRICE_SLUG */.LI) {
            const [min, max] = Array.isArray(filterValue) ? filterValue : [];
            if (typeof min === "undefined" || typeof max === "undefined") {
                return {};
            }
            return {
                [`${constants/* MIN_RANGABLE_PREFIX */.gR}${constants/* BASE_PRICE_SLUG */.LI}`]: min,
                [`${constants/* MAX_RANGABLE_PREFIX */.Bx}${constants/* BASE_PRICE_SLUG */.LI}`]: max
            };
        }
        return {
            [filterSlug]: filterValue
        };
    };
    const formattedFilter = getFormattedFilter();
    // const formattedFilter = formatFilterValues({
    //   values: {
    //     [filterSlug]: filterValue,
    //   },
    //   filterAttributes,
    //   independentFiltersSlugs: [],
    // });
    // TODOs end
    const { isEditing  } = (0,builder_.useBuilderState)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        ...isEditing ? {
            component: material_.Box
        } : {
            component: NextLink/* default */.Z,
            href: {
                pathname: "s",
                query: formattedFilter
            }
        },
        height: 496,
        width: 1,
        position: "relative",
        borderRadius: 6,
        overflow: "hidden",
        sx: {
            display: "block",
            ...!src ? {
                background: `linear-gradient(0deg, rgba(48, 48, 48, 0.68), rgba(48, 48, 48, 0.68))`
            } : {}
        },
        children: [
            src && /*#__PURE__*/ jsx_runtime_.jsx(components_src/* NextImage */.o, {
                src: src,
                fill: true,
                style: {
                    objectFit: "cover"
                },
                alt: altAttributeName,
                // load smaller image version when on bigger screens
                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ActionButton, {
                ...actionButtonProps
            })
        ]
    });
};
/* harmony default export */ const AttributeSectionView_AttributeSectionView = (AttributeSectionView);

;// CONCATENATED MODULE: ./src/components/views/AttributeSectionView/index.ts




/***/ }),

/***/ 3328:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ContactsInfoView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_links_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50682);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94605);
/* harmony import */ var templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19572);
/* harmony import */ var theme_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43001);
/* harmony import */ var views_SocialsToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25059);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__, theme_theme__WEBPACK_IMPORTED_MODULE_6__, views_SocialsToolbar__WEBPACK_IMPORTED_MODULE_7__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__, theme_theme__WEBPACK_IMPORTED_MODULE_6__, views_SocialsToolbar__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ContactsInfoView = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { phone , email , location , mediaLinks , sx , className  } = props;
    const defaultLinkProps = {
        sx: {
            textDecoration: "none",
            color: theme_theme__WEBPACK_IMPORTED_MODULE_6__/* .theme.palette.text.primary */ .r.palette.text.primary
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 3,
            ...sx
        },
        className: className,
        ref: ref,
        children: [
            phone ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_links_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                ...defaultLinkProps,
                href: `tel:${phone}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                    title: phone,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
                        icon: "phone"
                    })
                })
            }) : null,
            email ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_links_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                ...defaultLinkProps,
                href: `mailto:${email}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                    title: email,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
                        icon: "email"
                    })
                })
            }) : null,
            location ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_links_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                ...defaultLinkProps,
                href: `http://maps.google.com/?q=${location}`,
                target: "_blank",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                    title: location,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
                        icon: "pin"
                    })
                })
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_SocialsToolbar__WEBPACK_IMPORTED_MODULE_7__/* .SocialsToolbar */ ._, {
                ...mediaLinks
            })
        ]
    });
});
ContactsInfoView.displayName = "ContactsInfoView";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49707:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport safe */ _ContactsInfoView__WEBPACK_IMPORTED_MODULE_0__.i)
/* harmony export */ });
/* harmony import */ var _ContactsInfoView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3328);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactsInfoView__WEBPACK_IMPORTED_MODULE_0__]);
_ContactsInfoView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81363:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ SocialsToolbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94605);
/* harmony import */ var helpers_getUrlWithHttp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10775);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function SocialsToolbar(props) {
    const { facebookLink , instagramLink , twitterLink , sx , className , buttonSize ="medium"  } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "social_media"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            display: "flex",
            justifyContent: "center",
            width: 180,
            gap: 3,
            ...sx
        },
        className: className,
        children: [
            facebookLink ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Link, {
                target: "_blank",
                href: (0,helpers_getUrlWithHttp__WEBPACK_IMPORTED_MODULE_4__/* .getUrlWithHttp */ .k)(facebookLink),
                "aria-label": translate("facebook"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                    size: buttonSize,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
                        icon: "facebook"
                    })
                })
            }) : null,
            instagramLink ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Link, {
                target: "_blank",
                href: (0,helpers_getUrlWithHttp__WEBPACK_IMPORTED_MODULE_4__/* .getUrlWithHttp */ .k)(instagramLink),
                "aria-label": translate("instagram"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                    size: buttonSize,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
                        icon: "instagram"
                    })
                })
            }) : null,
            twitterLink ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Link, {
                target: "_blank",
                href: (0,helpers_getUrlWithHttp__WEBPACK_IMPORTED_MODULE_4__/* .getUrlWithHttp */ .k)(twitterLink),
                "aria-label": translate("twitter"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                    size: buttonSize,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
                        icon: "twitter"
                    })
                })
            }) : null
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (SocialsToolbar)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _SocialsToolbar__WEBPACK_IMPORTED_MODULE_0__._)
/* harmony export */ });
/* harmony import */ var _SocialsToolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81363);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SocialsToolbar__WEBPACK_IMPORTED_MODULE_0__]);
_SocialsToolbar__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33905:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ VerticalAvatarView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89512);
/* harmony import */ var views_SocialsToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25059);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_Avatar__WEBPACK_IMPORTED_MODULE_2__, views_SocialsToolbar__WEBPACK_IMPORTED_MODULE_3__]);
([custom_Avatar__WEBPACK_IMPORTED_MODULE_2__, views_SocialsToolbar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function VerticalAvatarView(props) {
    const { title , subtitle , avatarSrc , avatarPropsSx ={} , sx , facebookLink , instagramLink , twitterLink , socialsToolbarProps , className , size =80  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            maxWidth: 220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...sx
        },
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_Avatar__WEBPACK_IMPORTED_MODULE_2__/* .Avatar */ .q, {
                src: avatarSrc,
                size: size,
                sx: {
                    ...avatarPropsSx
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
                variant: "h5",
                sx: {
                    mt: 3,
                    textAlign: "center"
                },
                children: title
            }),
            !!subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
                variant: "subtitle1",
                children: subtitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_SocialsToolbar__WEBPACK_IMPORTED_MODULE_3__/* .SocialsToolbar */ ._, {
                facebookLink: facebookLink,
                instagramLink: instagramLink,
                twitterLink: twitterLink,
                sx: {
                    mt: 3
                },
                ...socialsToolbarProps
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (VerticalAvatarView)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20741:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* reexport safe */ _VerticalAvatarView__WEBPACK_IMPORTED_MODULE_0__.G)
/* harmony export */ });
/* harmony import */ var _VerticalAvatarView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_VerticalAvatarView__WEBPACK_IMPORTED_MODULE_0__]);
_VerticalAvatarView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ getUrlWithHttp)
/* harmony export */ });
const getUrlWithHttp = (url)=>url.toLowerCase().startsWith("http") ? url : `http://${url}`;


/***/ }),

/***/ 14819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export useGetRewiews */
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const getQueryFn = (params)=>async ()=>{
        const { perPage  } = params;
        const { data: { data  }  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.get */ .zk.get({
            pathname: application_resources__WEBPACK_IMPORTED_MODULE_2__/* .REVIEWS_RESOURCE */ .BZ,
            perPage,
            filter: {
                is_promoted: 1
            },
            sort: {
                field: "added_at",
                order: "DESC"
            }
        });
        return _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodReviewSchemas.index.parse */ .lF.index.parse(data);
    };
const useGetRewiews = (params)=>{
    const { perPage  } = params || {};
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: [
            application_resources__WEBPACK_IMPORTED_MODULE_2__/* .REVIEWS_RESOURCE */ .BZ,
            params
        ],
        queryFn: getQueryFn({
            perPage
        }),
        enabled: true,
        refetchOnMount: false
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetRewiews);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33773:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ CaptchaProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71704);
/* harmony import */ var react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_1__]);
hooks_index__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const CaptchaProvider = (props)=>{
    const { children  } = props;
    const { data: websiteData  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_1__/* .useGetWebsite */ .Rz)();
    const captchaKey = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(websiteData, "captcha_key") || "";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_google_recaptcha_v3__WEBPACK_IMPORTED_MODULE_3__.GoogleReCaptchaProvider, {
        reCaptchaKey: captchaKey,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ EmotionCacheProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53139);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48719);
/* harmony import */ var theme_helpers_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37615);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_2__, theme_helpers_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__]);
([_emotion_react__WEBPACK_IMPORTED_MODULE_2__, theme_helpers_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const EmotionCacheProvider = (props)=>{
    const { children  } = props;
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_3__/* .useLocaleContext */ .PE)();
    const [emotionCache, setEmotionCache] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>(0,theme_helpers_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__/* .createEmotionCache */ .S)(locale));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Update emotion cache to correctly switch between rtl and ltr
        setEmotionCache((0,theme_helpers_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__/* .createEmotionCache */ .S)(locale));
    }, [
        locale
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.CacheProvider, {
        value: emotionCache,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66185:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ ErrorHandlingManager)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
/* harmony import */ var hooks_useErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, hooks_useErrorHandler__WEBPACK_IMPORTED_MODULE_2__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, hooks_useErrorHandler__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const ErrorHandlingManager = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    const { handleQueryErrors  } = (0,hooks_useErrorHandler__WEBPACK_IMPORTED_MODULE_2__/* .useErrorHandler */ .U)();
    const onQueryError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((error, query)=>{
        const meta = query.options.meta || {};
        const { errorOptions  } = meta;
        handleQueryErrors(error, errorOptions);
    }, [
        handleQueryErrors
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const queryCache = queryClient.getQueryCache();
        const defaultOnError = queryCache.config.onError;
        queryCache.config.onError = (...args)=>{
            defaultOnError?.(...args);
            onQueryError(...args);
        };
    }, [
        queryClient,
        onQueryError
    ]);
    return null;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ InterceptorsManager)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11900);
/* harmony import */ var contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71583);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48719);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_1__, contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_2__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_1__, contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




/**
 * We can't place interceptors to the related providers controllers
 * because their useEffects will be executed after children's. It means
 * that at first all the `useQuery`s will be called, and only after this
 * the interceptors will be applied. So we create a separate component dedicated
 * to the interceptors, and its useEffect execution time will not be connected
 * to the descendants of the component tree.
 */ const InterceptorsManager = ()=>{
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_3__/* .useLocaleContext */ .PE)();
    const { currency  } = (0,contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_2__/* .useCurrencyContext */ .VT)();
    const currencyCode = currency?.code;
    // update requests' x-locale and x-currency headers
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const interceptors = _packages_providers__WEBPACK_IMPORTED_MODULE_1__/* .axiosInstance.interceptors.request.use */ .be.interceptors.request.use((config)=>{
            if (!config.headers) return config;
            config.headers["x-locale"] = locale;
            if (currencyCode) {
                config.headers["x-currency"] = currencyCode;
            }
            return config;
        });
        return ()=>{
            _packages_providers__WEBPACK_IMPORTED_MODULE_1__/* .axiosInstance.interceptors.request.eject */ .be.interceptors.request.eject(interceptors);
        };
    }, [
        locale,
        currencyCode
    ]);
    return null;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87653:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ SnackbarProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var custom_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14317);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_Notification__WEBPACK_IMPORTED_MODULE_3__]);
custom_Notification__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SnackbarProvider = (props)=>{
    const { children  } = props;
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const snackbarProviderProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            maxSnack: 2,
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
            },
            Components: {
                default: custom_Notification__WEBPACK_IMPORTED_MODULE_3__/* .Notification */ .P,
                error: custom_Notification__WEBPACK_IMPORTED_MODULE_3__/* .Notification */ .P,
                info: custom_Notification__WEBPACK_IMPORTED_MODULE_3__/* .Notification */ .P,
                success: custom_Notification__WEBPACK_IMPORTED_MODULE_3__/* .Notification */ .P,
                warning: custom_Notification__WEBPACK_IMPORTED_MODULE_3__/* .Notification */ .P
            },
            TransitionComponent: isMobile ? _mui_material__WEBPACK_IMPORTED_MODULE_2__.Slide : _mui_material__WEBPACK_IMPORTED_MODULE_2__.Grow
        }), [
        isMobile
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(notistack__WEBPACK_IMPORTED_MODULE_4__.SnackbarProvider, {
        ...snackbarProviderProps,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ TagManagerProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45847);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_2__]);
hooks_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const TagManagerProvider = ()=>{
    const { data: websiteData  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_2__/* .useGetWebsite */ .Rz)();
    const gtmCode = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(websiteData, "gtm_code");
    const { isEditing  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_1__.useBuilderState)();
    if (isEditing || !gtmCode) {
        return null;
    }
    /* <!-- Google Tag Manager --> */ return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
        id: "google-tag-manager",
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${gtmCode}');`
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70880:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22311);
/* harmony import */ var _mui_material_locale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_locale__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90657);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48719);
/* harmony import */ var helpers_getDirectionFromLocale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70225);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_6__, theme_index__WEBPACK_IMPORTED_MODULE_9__]);
([hooks_index__WEBPACK_IMPORTED_MODULE_6__, theme_index__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ThemeProvider = ({ children  })=>{
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_5__/* .useLocaleContext */ .PE)();
    const { data: websiteData  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_6__/* .useGetWebsite */ .Rz)();
    const customFontFamily = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(websiteData, "styles.font_family");
    const theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const primaryColor = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(websiteData, "color_primary") || theme_index__WEBPACK_IMPORTED_MODULE_9__/* .theme.palette.primary.main */ .rS.palette.primary.main;
        const secondaryColor = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(websiteData, "color_secondary") || theme_index__WEBPACK_IMPORTED_MODULE_9__/* .theme.palette.secondary.main */ .rS.palette.secondary.main;
        const buttonBorderRadius = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(websiteData, "styles.button_border_radius") || theme_index__WEBPACK_IMPORTED_MODULE_9__/* .DEFAULT_BUTTON_RADIUS */ .Nb;
        const primaryLight = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.lighten)(primaryColor, 0.88);
        const secondaryLight = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.lighten)(secondaryColor, 0.88);
        const primaryDark = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.darken)(primaryColor, 0.19);
        const secondaryDark = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.darken)(secondaryColor, 0.19);
        // en-US -> enUS. https://mui.com/material-ui/guides/localization/#supported-locales
        const localeImportName = locale.replace("-", "");
        const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.createTheme)((0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.deepmerge)(theme_index__WEBPACK_IMPORTED_MODULE_9__/* .theme */ .rS, {
            direction: (0,helpers_getDirectionFromLocale__WEBPACK_IMPORTED_MODULE_10__/* .getDirectionFromLocale */ .V)(locale),
            palette: {
                primary: {
                    main: primaryColor,
                    light: primaryLight,
                    dark: primaryDark
                },
                secondary: {
                    main: secondaryColor,
                    light: secondaryLight,
                    dark: secondaryDark
                }
            },
            websiteSettings: {
                buttonBorderRadius
            }
        }), _mui_material_locale__WEBPACK_IMPORTED_MODULE_3__[localeImportName]);
        if (customFontFamily) {
            const defaultFontFamily = theme.typography.fontFamily;
            const fontFamily = `${customFontFamily}, ${defaultFontFamily}`;
            /**
       * @see https://github.com/mui/material-ui/issues/35939#issuecomment-1406913737
       * Due to a MUI bug, we can't extend the theme with the new `fontFamily`,
       * so we use the next approach.
       * Note: `JSON.stringify()` removes methods, e.g. `pxToRem()`, etc., but
       * `createTheme()` below will add them again
       */ const stringifiedThemeTypography = JSON.stringify(theme.typography);
            const stringifiedThemeTypographyWithCustomFontFamily = stringifiedThemeTypography.replaceAll(`"${defaultFontFamily}"`, `"${fontFamily}"`);
            return (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.createTheme)({
                ...theme,
                typography: JSON.parse(stringifiedThemeTypographyWithCustomFontFamily)
            });
        }
        return theme;
    }, [
        locale,
        websiteData,
        customFontFamily
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
        theme: theme,
        children: [
            customFontFamily ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomFontLink, {
                    fontFamily: customFontFamily
                })
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CssBaseline, {}),
            children
        ]
    });
};
const CustomFontLink = (props)=>{
    const { fontFamily  } = props;
    const formattedFontFamily = fontFamily.split(" ").join("+");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
            rel: "stylesheet",
            href: `https://fonts.googleapis.com/css2?family=${formattedFontFamily}:wght@300;400;500;600;700&display=swap`
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37615:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8440);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27074);
/* harmony import */ var helpers_getDirectionFromLocale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70225);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44615);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93195);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__, _packages_helpers__WEBPACK_IMPORTED_MODULE_1__, stylis__WEBPACK_IMPORTED_MODULE_2__]);
([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__, _packages_helpers__WEBPACK_IMPORTED_MODULE_1__, stylis__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ltrCache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: "mui",
    prepend: false
});
const rtlCache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: "mui-rtl",
    prepend: false,
    stylisPlugins: [
        stylis__WEBPACK_IMPORTED_MODULE_2__.prefixer,
        (stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_3___default())
    ]
});
const createEmotionCache = (locale)=>{
    const direction = (0,helpers_getDirectionFromLocale__WEBPACK_IMPORTED_MODULE_4__/* .getDirectionFromLocale */ .V)(locale);
    const isRtl = direction === "rtl";
    if (_packages_helpers__WEBPACK_IMPORTED_MODULE_1__/* .isBrowser */ .jU) {
        document.documentElement.dir = direction;
        return isRtl ? rtlCache : ltrCache;
    }
    // Emotion cache must be recreated on each request on server side
    // @see https://mui.com/material-ui/guides/server-rendering/
    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: isRtl ? "mui-rtl" : "mui",
        ...isRtl && {
            stylisPlugins: [
                stylis__WEBPACK_IMPORTED_MODULE_2__.prefixer,
                (stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_3___default())
            ]
        },
        // Append styles to the bottom of head tag to override rtl or ltr previous styles
        prepend: false
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94009:
/***/ (() => {



/***/ }),

/***/ 75284:
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

/***/ 22311:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/locale");

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

/***/ 90657:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils");

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

/***/ 85778:
/***/ ((module) => {

"use strict";
module.exports = require("material-ui-phone-number");

/***/ }),

/***/ 11377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 53918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 45732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

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

/***/ 64486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 82470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ 40420:
/***/ ((module) => {

"use strict";
module.exports = require("pluralize");

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

/***/ 71704:
/***/ ((module) => {

"use strict";
module.exports = require("react-google-recaptcha-v3");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 93195:
/***/ ((module) => {

"use strict";
module.exports = require("stylis-plugin-rtl");

/***/ }),

/***/ 25040:
/***/ ((module) => {

"use strict";
module.exports = require("zod-i18n-map");

/***/ }),

/***/ 8440:
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/cache");;

/***/ }),

/***/ 53139:
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react");;

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

/***/ 19063:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query-devtools");;

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

/***/ 44615:
/***/ ((module) => {

"use strict";
module.exports = import("stylis");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

"use strict";
module.exports = import("zod");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [97,487,876,577,789,857,739,975,31,54,319,822,622,6,797,460,119,370,619,612,286], () => (__webpack_exec__(73401)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=_app.js.map