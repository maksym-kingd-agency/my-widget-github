"use strict";
exports.id = 404;
exports.ids = [404];
exports.modules = {

/***/ 51296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* reexport */ NextImage_NextImage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ../../node_modules/next/image.js
var next_image = __webpack_require__(96577);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ../../packages/components/src/NextImage/NextImage.tsx


const imageLoader = (props)=>{
    const { src , width  } = props;
    const divider = src?.includes("?") ? "&" : "?";
    return `${src}${divider}w=${width}`;
};
const NextImage = (props)=>{
    const { src , ...rest } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        loader: imageLoader,
        src: src,
        ...rest
    });
};
/* harmony default export */ const NextImage_NextImage = (NextImage);

;// CONCATENATED MODULE: ../../packages/components/src/NextImage/index.ts


;// CONCATENATED MODULE: ../../packages/components/src/index.ts



/***/ }),

/***/ 93752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ LocalesCurrencyButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var buttons_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49230);
/* harmony import */ var contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71583);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48719);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94605);
/* harmony import */ var helpers_getCurrencyCodeWithSign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40602);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4193);
/* harmony import */ var modals_LocalesAndCurrenciesModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24759);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__, hooks_index__WEBPACK_IMPORTED_MODULE_7__, hooks_queries__WEBPACK_IMPORTED_MODULE_8__, modals_LocalesAndCurrenciesModal__WEBPACK_IMPORTED_MODULE_9__]);
([contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__, hooks_index__WEBPACK_IMPORTED_MODULE_7__, hooks_queries__WEBPACK_IMPORTED_MODULE_8__, modals_LocalesAndCurrenciesModal__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const LocalesCurrencyButton = (props)=>{
    const { isOnlyIcon  } = props;
    const { currency  } = (0,contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__/* .useCurrencyContext */ .VT)();
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_5__/* .useLocaleContext */ .PE)();
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_7__/* .useTranslate */ .qM)({
        basePath: "modals.locales_and_currencies"
    });
    const { data: websiteData  } = (0,hooks_queries__WEBPACK_IMPORTED_MODULE_8__/* .useGetWebsite */ .Rz)();
    const { locales =[]  } = websiteData || {};
    const localeRecord = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return locales.find((record)=>record.locale === locale);
    }, [
        locale,
        locales
    ]);
    const [isLocalesAndCurrenciesModalOpen, setIsLocalesAndCurrenciesModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleCloseModalClick = ()=>{
        setIsLocalesAndCurrenciesModalOpen(false);
    };
    const handleOpenModalClick = ()=>{
        setIsLocalesAndCurrenciesModalOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_LocalesAndCurrenciesModal__WEBPACK_IMPORTED_MODULE_9__/* .LocalesAndCurrenciesModal */ .K, {
                open: isLocalesAndCurrenciesModalOpen,
                onClose: handleCloseModalClick
            }),
            isOnlyIcon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                onClick: handleOpenModalClick,
                "aria-label": translate("title"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__/* .IcoMoon */ .n, {
                    icon: "globe"
                })
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(buttons_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__/* .IcoMoon */ .n, {
                    icon: "globe",
                    color: "inherit"
                }),
                color: "secondary",
                onClick: handleOpenModalClick,
                "aria-label": translate("title"),
                children: [
                    localeRecord?.title,
                    " -",
                    " ",
                    (0,helpers_getCurrencyCodeWithSign__WEBPACK_IMPORTED_MODULE_10__/* .getCurrencyCodeWithSign */ .b)({
                        currencyCode: currency?.code || "",
                        currencySign: currency?.sign || ""
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29792:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ _LocalesCurrencyButton__WEBPACK_IMPORTED_MODULE_0__.$)
/* harmony export */ });
/* harmony import */ var _LocalesCurrencyButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LocalesCurrencyButton__WEBPACK_IMPORTED_MODULE_0__]);
_LocalesCurrencyButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ OwnerLoginButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./src/components/buttons/Button/index.ts + 1 modules
var Button = __webpack_require__(49230);
;// CONCATENATED MODULE: ./src/components/buttons/OwnerLoginButton/OwnerLoginButton.tsx


const OwnerLoginButton = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
        href: "https://owner-roomizer-alpha.thedevelopmentserver.com/",
        target: "_blank",
        variant: "outlined",
        color: "secondary",
        children: "buttons.owner_log_in"
    });
};

;// CONCATENATED MODULE: ./src/components/buttons/OwnerLoginButton/index.ts



/***/ }),

/***/ 11281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ CustomButton)
/* harmony export */ });
/* unused harmony export CustomButtonClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94605);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, theme_index__WEBPACK_IMPORTED_MODULE_3__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, theme_index__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const PREFIX = "CustomButton";
const CustomButtonClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "iconWrapper",
    "checkIconRoot",
    "contentWrapper"
]);
const StyledCustomButton = (0,theme_index__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
    name: `Styled--${PREFIX}`,
    label: `Sapiens--${PREFIX}`,
    shouldForwardProp: (p)=>{
        return p !== "isSelected";
    }
})(({ theme , isSelected  })=>{
    return {
        position: "relative",
        width: "100%",
        height: 64,
        borderRadius: 12,
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        border: `1px solid ${isSelected ? theme.palette.primary.main : theme.palette.primary.border}`,
        background: theme.palette.background.default,
        padding: theme.spacing(1.5, 2),
        textDecoration: "none",
        textAlign: "start",
        "&:hover": {
            textDecoration: "none",
            background: "inherit",
            ":not(:disabled)": {
                cursor: "pointer",
                borderColor: theme.palette.primary.main,
                transition: theme.transitions.create("border-color", {
                    duration: theme.transitions.duration.standard
                })
            }
        },
        [`& .${CustomButtonClasses.iconWrapper}`]: {
            display: "flex",
            marginRight: theme.spacing(2)
        },
        [`& .${CustomButtonClasses.contentWrapper}`]: {
            textAlign: "start"
        },
        [`& .${CustomButtonClasses.checkIconRoot}`]: {
            position: "absolute",
            right: 16
        }
    };
});
const CustomButton = (props)=>{
    const { title , subtitle , isSelected =false , icon , ...rest } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCustomButton, {
        isSelected: isSelected,
        ...rest,
        children: [
            isSelected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
                icon: "check",
                color: theme.palette.primary.main,
                className: CustomButtonClasses.checkIconRoot
            }),
            icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: CustomButtonClasses.iconWrapper,
                children: icon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: CustomButtonClasses.contentWrapper,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "subtitle2",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "subtitle1",
                        color: "text.light",
                        children: subtitle
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* reexport safe */ _CustomButton__WEBPACK_IMPORTED_MODULE_0__.o)
/* harmony export */ });
/* harmony import */ var _CustomButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CustomButton__WEBPACK_IMPORTED_MODULE_0__]);
_CustomButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40175:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ MenuDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49752);
/* harmony import */ var buttons_LocalesCurrencyButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29792);
/* harmony import */ var buttons_OwnerLoginButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47693);
/* harmony import */ var components_links_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50682);
/* harmony import */ var helpers_getNavigatorPathnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57189);
/* harmony import */ var hooks_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4193);
/* harmony import */ var theme_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19018);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, buttons_LocalesCurrencyButton__WEBPACK_IMPORTED_MODULE_3__, hooks_queries__WEBPACK_IMPORTED_MODULE_6__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, buttons_LocalesCurrencyButton__WEBPACK_IMPORTED_MODULE_3__, hooks_queries__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const MenuDrawer = (props)=>{
    const { onClose , headerItems , ...rest } = props;
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Drawer, {
        anchor: "right",
        hideBackdrop: true,
        PaperProps: {
            sx: {
                width: "100%",
                background: (theme)=>theme.palette.background.default,
                border: "none",
                paddingTop: `${theme_constants__WEBPACK_IMPORTED_MODULE_7__/* .MOBILE_HEADER_HEIGHT */ .ZQ}px`,
                paddingBottom: 3
            }
        },
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
            sx: {
                height: "100%"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                height: "100%",
                px: {
                    xs: 0,
                    sm: 2,
                    md: 4
                },
                divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    flexItem: true
                }),
                spacing: 4,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        height: "1px",
                        flexGrow: 1,
                        justifyContent: "space-between",
                        spacing: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                pt: 3,
                                spacing: 4,
                                overflow: "auto",
                                children: headerItems.map((item)=>{
                                    const { title , target , path ="" , id  } = item;
                                    const { pathname , prefetchPath , isPrefetchPath  } = (0,helpers_getNavigatorPathnames__WEBPACK_IMPORTED_MODULE_8__/* .getNavigatorPathnames */ .k)(path);
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_links_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        variant: "body2",
                                        t: title,
                                        href: {
                                            pathname
                                        },
                                        target: target,
                                        color: "text.primary",
                                        sx: {
                                            textDecoration: "none",
                                            wordBreak: "break-word",
                                            ":hover, :focus": {
                                                color: "primary.main"
                                            }
                                        },
                                        onClick: onClose,
                                        onMouseEnter: ()=>{
                                            if (isPrefetchPath) {
                                                (0,hooks_queries__WEBPACK_IMPORTED_MODULE_6__/* .prefetchPage */ .aS)(queryClient, undefined, {
                                                    path: prefetchPath
                                                });
                                            }
                                        },
                                        onTouchStart: ()=>{
                                            if (isPrefetchPath) {
                                                (0,hooks_queries__WEBPACK_IMPORTED_MODULE_6__/* .prefetchPage */ .aS)(queryClient, undefined, {
                                                    path: prefetchPath
                                                });
                                            }
                                        }
                                    }, id);
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_LocalesCurrencyButton__WEBPACK_IMPORTED_MODULE_3__/* .LocalesCurrencyButton */ .$, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_OwnerLoginButton__WEBPACK_IMPORTED_MODULE_4__/* .OwnerLoginButton */ .Z, {})
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 77899:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _MenuDrawer__WEBPACK_IMPORTED_MODULE_0__._)
/* harmony export */ });
/* harmony import */ var _MenuDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40175);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MenuDrawer__WEBPACK_IMPORTED_MODULE_0__]);
_MenuDrawer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 136:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42864);
/* harmony import */ var _king_david_it_builder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51296);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27074);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49752);
/* harmony import */ var buttons_LocalesCurrencyButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29792);
/* harmony import */ var buttons_OwnerLoginButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47693);
/* harmony import */ var components_drawers_MenuDrawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77899);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19594);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94605);
/* harmony import */ var helpers_getNavigatorItems__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99334);
/* harmony import */ var helpers_getNavigatorPathnames__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(57189);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(62430);
/* harmony import */ var _useResponsiveHeaderItems__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(30817);
/* harmony import */ var _links_Link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(50682);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_5__, _packages_providers__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__, buttons_LocalesCurrencyButton__WEBPACK_IMPORTED_MODULE_8__, components_drawers_MenuDrawer__WEBPACK_IMPORTED_MODULE_10__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_12__, hooks_index__WEBPACK_IMPORTED_MODULE_14__, theme_index__WEBPACK_IMPORTED_MODULE_16__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_5__, _packages_providers__WEBPACK_IMPORTED_MODULE_6__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__, buttons_LocalesCurrencyButton__WEBPACK_IMPORTED_MODULE_8__, components_drawers_MenuDrawer__WEBPACK_IMPORTED_MODULE_10__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_12__, hooks_index__WEBPACK_IMPORTED_MODULE_14__, theme_index__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const MenuToolbar = ()=>{
    const [overflowingItemsMenuAnchor, setOverflowingItemsMenuAnchor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_14__/* .useTranslate */ .qM)({
        basePath: "menu.app_bar"
    });
    const { data: websiteData  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_14__/* .useGetWebsite */ .Rz)();
    const { value: isMobileDrawerOpen , setFalse: closeMobileDrawer , toggle: toggleMobileDrawer  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_5__/* .useBoolean */ .kt)(false);
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient)();
    const headerHeight = isMobile ? theme_index__WEBPACK_IMPORTED_MODULE_16__/* .MOBILE_HEADER_HEIGHT */ .ZQ : theme_index__WEBPACK_IMPORTED_MODULE_16__/* .HEADER_HEIGHT */ .Mz;
    const navigators = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>lodash_get__WEBPACK_IMPORTED_MODULE_15___default()(websiteData, "navigators") || [], [
        websiteData
    ]);
    const logo = lodash_get__WEBPACK_IMPORTED_MODULE_15___default()(websiteData, "logo_landscape");
    const logoName = lodash_get__WEBPACK_IMPORTED_MODULE_15___default()(logo, "name");
    const logoSrc = lodash_get__WEBPACK_IMPORTED_MODULE_15___default()(logo, "src");
    const headerItems = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,helpers_getNavigatorItems__WEBPACK_IMPORTED_MODULE_13__/* .getNavigatorItems */ .I)({
            navigatorsData: _packages_providers__WEBPACK_IMPORTED_MODULE_6__/* .zodNavigatorSchemas.index.parse */ .Jt.index.parse(navigators),
            selector: "header"
        }), [
        navigators
    ]);
    const [headerItemsContainer, setHeaderItemsContainer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [visibleItems, menuItems] = (0,_useResponsiveHeaderItems__WEBPACK_IMPORTED_MODULE_17__/* .useResponsiveHeaderItems */ .j)({
        container: headerItemsContainer,
        items: headerItems
    });
    const areVisibleItemsExist = Boolean(visibleItems.length);
    const areMenuItemsExist = Boolean(menuItems.length);
    const shouldShowMenuIcon = areVisibleItemsExist && areMenuItemsExist;
    const isOverflowingItemsMenuOpen = Boolean(overflowingItemsMenuAnchor) && areMenuItemsExist;
    const handleOverflowingItemsButtonClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        setOverflowingItemsMenuAnchor(e.currentTarget);
    }, []);
    const handleOverflowingItemsMenuClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setOverflowingItemsMenuAnchor(null);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
        maxWidth: "xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_drawers_MenuDrawer__WEBPACK_IMPORTED_MODULE_10__/* .MenuDrawer */ ._, {
                open: isMobileDrawerOpen,
                onClose: closeMobileDrawer,
                headerItems: headerItems
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Menu, {
                open: isOverflowingItemsMenuOpen,
                anchorEl: overflowingItemsMenuAnchor,
                onClose: handleOverflowingItemsMenuClose,
                children: menuItems.map((item)=>{
                    const { title , target , path ="" , id  } = item;
                    const { pathname , prefetchPath , isPrefetchPath  } = (0,helpers_getNavigatorPathnames__WEBPACK_IMPORTED_MODULE_19__/* .getNavigatorPathnames */ .k)(path);
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                        component: "a",
                        LinkComponent: _links_Link__WEBPACK_IMPORTED_MODULE_18__/* .Link */ .r,
                        href: pathname,
                        target: target,
                        sx: {
                            ":hover, :focus": {
                                color: "primary.main"
                            }
                        },
                        onMouseEnter: ()=>{
                            if (isPrefetchPath) {
                                (0,hooks_index__WEBPACK_IMPORTED_MODULE_14__/* .prefetchPage */ .aS)(queryClient, undefined, {
                                    path: prefetchPath
                                });
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_11__/* .Typography */ .Z, {
                            variant: "body2",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            children: title
                        })
                    }, id);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {
                disableGutters: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            flexShrink: 0,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_links_Link__WEBPACK_IMPORTED_MODULE_18__/* .Link */ .r, {
                                href: "/",
                                "aria-label": translate("home"),
                                sx: {
                                    display: "flex"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_components__WEBPACK_IMPORTED_MODULE_4__/* .NextImage */ .o, {
                                    src: logoSrc || "/icons/MaveriksLogo.svg",
                                    width: 124,
                                    height: headerHeight,
                                    alt: logoName || "Logo",
                                    priority: true,
                                    style: {
                                        objectFit: "contain"
                                    }
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            sx: {
                                display: {
                                    xs: "none",
                                    md: "flex"
                                }
                            },
                            justifyContent: "space-between",
                            alignItems: "center",
                            ml: 9,
                            mr: "auto",
                            overflow: "hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    ref: setHeaderItemsContainer,
                                    display: "flex",
                                    flexGrow: 1,
                                    gap: 5,
                                    mr: 3,
                                    overflow: "hidden",
                                    children: visibleItems.map((item)=>{
                                        const { title , target , path ="" , id  } = item;
                                        const { pathname , prefetchPath , isPrefetchPath  } = (0,helpers_getNavigatorPathnames__WEBPACK_IMPORTED_MODULE_19__/* .getNavigatorPathnames */ .k)(path);
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                            flexShrink: 0,
                                            maxWidth: 191,
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_links_Link__WEBPACK_IMPORTED_MODULE_18__/* .Link */ .r, {
                                                variant: "body2",
                                                t: title,
                                                href: {
                                                    pathname
                                                },
                                                target: target,
                                                color: "text.primary",
                                                sx: {
                                                    textDecoration: "none",
                                                    whiteSpace: "nowrap",
                                                    ":hover, :focus": {
                                                        color: "primary.main"
                                                    }
                                                },
                                                onMouseEnter: ()=>{
                                                    if (isPrefetchPath) {
                                                        (0,hooks_index__WEBPACK_IMPORTED_MODULE_14__/* .prefetchPage */ .aS)(queryClient, undefined, {
                                                            path: prefetchPath
                                                        });
                                                    }
                                                }
                                            })
                                        }, id);
                                    })
                                }),
                                shouldShowMenuIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                    onClick: handleOverflowingItemsButtonClick,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_12__/* .IcoMoon */ .n, {
                                        icon: "dots"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            display: "flex",
                            gap: 3,
                            justifyContent: "flex-end",
                            alignItems: "center",
                            flexWrap: "nowrap",
                            flexShrink: 0,
                            marginLeft: 3,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    sx: {
                                        display: {
                                            md: "none"
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        children: !isMobileDrawerOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_LocalesCurrencyButton__WEBPACK_IMPORTED_MODULE_8__/* .LocalesCurrencyButton */ .$, {
                                            isOnlyIcon: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    sx: {
                                        display: {
                                            xs: "none",
                                            md: "block"
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                        children: !isMobileDrawerOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_LocalesCurrencyButton__WEBPACK_IMPORTED_MODULE_8__/* .LocalesCurrencyButton */ .$, {})
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    sx: {
                                        display: {
                                            xs: "none",
                                            md: "block"
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_OwnerLoginButton__WEBPACK_IMPORTED_MODULE_9__/* .OwnerLoginButton */ .Z, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    sx: {
                                        display: {
                                            md: "none"
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                                        onClick: toggleMobileDrawer,
                                        children: isMobileDrawerOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_12__/* .IcoMoon */ .n, {
                                            icon: "close"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_12__/* .IcoMoon */ .n, {
                                            icon: "menu"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const Header = (props)=>{
    const { sx  } = props;
    const { isEditing  } = (0,_king_david_it_builder__WEBPACK_IMPORTED_MODULE_2__.useBuilderState)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !isEditing && // default app bar to hold space
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AppBar, {
                component: "div",
                position: "static",
                color: "transparent",
                sx: {
                    border: "none",
                    boxShadow: "none",
                    height: {
                        xs: theme_index__WEBPACK_IMPORTED_MODULE_16__/* .MOBILE_HEADER_HEIGHT */ .ZQ,
                        md: theme_index__WEBPACK_IMPORTED_MODULE_16__/* .HEADER_HEIGHT */ .Mz
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AppBar, {
                position: isEditing ? "static" : "fixed",
                color: "transparent",
                sx: {
                    bgcolor: "background.default",
                    color: "text.primary",
                    zIndex: "modal",
                    boxShadow: "none",
                    height: {
                        xs: theme_index__WEBPACK_IMPORTED_MODULE_16__/* .MOBILE_HEADER_HEIGHT */ .ZQ,
                        md: theme_index__WEBPACK_IMPORTED_MODULE_16__/* .HEADER_HEIGHT */ .Mz
                    },
                    borderBottom: `1px solid ${theme_index__WEBPACK_IMPORTED_MODULE_16__/* .theme.palette.primary.background */ .rS.palette.primary.background}`,
                    ...sx
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuToolbar, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84404:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_0__]);
_Header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useResponsiveHeaderItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useResponsiveHeaderItems = (params)=>{
    const { container , items  } = params;
    const [visibleItems, setVisibleItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const visibleItemsLength = visibleItems.length;
    const hiddenItems = items.slice(visibleItemsLength);
    const adjustItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        if (!container) return;
        const isEvent = Boolean(e);
        const { offsetWidth: containerWidth , scrollWidth: containerScrollWidth  } = container;
        const isContainerOverflowed = containerScrollWidth > containerWidth;
        const firstHiddenItem = hiddenItems[0];
        if (isContainerOverflowed && visibleItemsLength) {
            setVisibleItems((prev)=>prev.slice(0, -1));
            return;
        }
        /**
       * We want to try to add one more element and check whether it
       * will overflow the container. We do it only if the function is
       * called due to some event, e.g. `resize` or `load`.
       */ if (firstHiddenItem && isEvent) {
            setVisibleItems((prev)=>[
                    ...prev,
                    firstHiddenItem
                ]);
        }
    }, [
        container,
        visibleItemsLength,
        hiddenItems
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setVisibleItems(items);
    }, [
        items
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        /**
     * If the `visibleItems` are changed, we call the `adjustItems`
     * function to check whether container is still overflowed
     * after we removed the last item when some event was emitted.
     * There is no event argument passed now, so the `adjustItems`
     * function will not try to add an extra item.
     */ adjustItems();
    }, [
        visibleItems,
        adjustItems
    ]);
    /**
   * We use the `useLayoutEffect` because we don't want
   * to see an "intermediate" state after `adjustItems`
   * function added an extra item to check if it's fit.
   * We are interested in the result container's `scrollWidth`
   * after this change, so the browser will do repaint after
   * all the changes of states.
   */ (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        /**
     * We use the `load` event to make a first check
     * when all the styles were applied, elements'
     * dimensions are known, etc.
     */ window.addEventListener("load", adjustItems);
        window.addEventListener("resize", adjustItems);
        return ()=>{
            window.removeEventListener("load", adjustItems);
            window.removeEventListener("resize", adjustItems);
        };
    }, [
        adjustItems
    ]);
    return [
        visibleItems,
        hiddenItems
    ];
};


/***/ }),

/***/ 19173:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ LocalesAndCurrenciesModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71583);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48719);
/* harmony import */ var custom_CustomButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68509);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94605);
/* harmony import */ var helpers_getCurrencyCodeWithSign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40602);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63858);
/* harmony import */ var hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82153);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32027);
/* harmony import */ var lodash_partition__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_partition__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var modals_ModalBase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37622);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_3__, custom_CustomButton__WEBPACK_IMPORTED_MODULE_5__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__, hooks_index__WEBPACK_IMPORTED_MODULE_7__, hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_8__, hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_9__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_11__, theme_index__WEBPACK_IMPORTED_MODULE_12__]);
([contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_3__, custom_CustomButton__WEBPACK_IMPORTED_MODULE_5__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__, hooks_index__WEBPACK_IMPORTED_MODULE_7__, hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_8__, hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_9__, modals_ModalBase__WEBPACK_IMPORTED_MODULE_11__, theme_index__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const mainCurrenciesCodes = [
    "USD",
    "EUR"
];
const a11yTabPanelProps = (index)=>{
    return {
        id: `locales-currencies-tabpanel-${index}`,
        "aria-labelledby": `locales-currencies-tab-${index}`
    };
};
// ----------------------------------------------
//                    Locales Tab
// ----------------------------------------------
const LocalesTabPanel = (props)=>{
    const { value , index , onModalClose , ...rest } = props;
    const { data: locales = []  } = (0,hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_9__/* .useGetLocales */ ._)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const { locale: selectedLocale , setLocale: setSelectedLocale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_4__/* .useLocaleContext */ .PE)();
    const handleLocaleClick = (selectedLocale)=>{
        const { locale  } = selectedLocale;
        setSelectedLocale(locale);
        onModalClose?.({}, "backdropClick");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        role: "tabpanel",
        hidden: value !== index,
        ...a11yTabPanelProps(index),
        ...rest,
        children: value === index && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            spacing: isMobile ? 2 : 3,
            children: locales.map((localeRecord, index)=>{
                const { country , locale , native  } = localeRecord;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 6,
                    sm: 6,
                    md: 4,
                    lg: 3,
                    xl: 3,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_CustomButton__WEBPACK_IMPORTED_MODULE_5__/* .CustomButton */ .o, {
                        title: native,
                        subtitle: country?.title,
                        onClick: ()=>handleLocaleClick(localeRecord),
                        isSelected: selectedLocale === locale
                    })
                }, index);
            })
        })
    });
};
// ----------------------------------------------
//                    Currencies Tab
// ----------------------------------------------
const CurrenciesTabPanel = (props)=>{
    const { value , index , onModalClose , ...rest } = props;
    const { currency: currentCurrency , setCurrency: setCurrentCurrency  } = (0,contexts_CurrencyContext__WEBPACK_IMPORTED_MODULE_3__/* .useCurrencyContext */ .VT)();
    const { data: currencies = []  } = (0,hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_8__/* .useGetCurrencies */ .Wn)();
    const [mainCurrencies, additionalCurrencies] = lodash_partition__WEBPACK_IMPORTED_MODULE_10___default()(currencies, (currency)=>mainCurrenciesCodes.includes(currency.code));
    const sortedCurrencies = additionalCurrencies.sort((a, b)=>a.title.localeCompare(b.title));
    const finalCurrencies = [
        ...mainCurrencies,
        ...sortedCurrencies
    ];
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const handleCurrencySelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((code)=>{
        setCurrentCurrency(code);
        onModalClose?.({}, "backdropClick");
    }, [
        onModalClose,
        setCurrentCurrency
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        role: "tabpanel",
        hidden: value !== index,
        ...a11yTabPanelProps(index),
        ...rest,
        children: value === index && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            spacing: isMobile ? 2 : 3,
            children: finalCurrencies.map((currency, index)=>{
                const { title , code , sign  } = currency;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    xs: 6,
                    sm: 6,
                    md: 4,
                    lg: 3,
                    xl: 3,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_CustomButton__WEBPACK_IMPORTED_MODULE_5__/* .CustomButton */ .o, {
                        title: title,
                        subtitle: (0,helpers_getCurrencyCodeWithSign__WEBPACK_IMPORTED_MODULE_13__/* .getCurrencyCodeWithSign */ .b)({
                            currencyCode: code,
                            currencySign: sign
                        }),
                        onClick: ()=>handleCurrencySelect(code),
                        isSelected: currentCurrency?.code === code
                    })
                }, index);
            })
        })
    });
};
const PREFIX = "LocalesAndCurrenciesModal";
const StyledLocalesAndCurrenciesModal = (0,theme_index__WEBPACK_IMPORTED_MODULE_12__/* .styled */ .zo)(modals_ModalBase__WEBPACK_IMPORTED_MODULE_11__/* .ModalBase */ .e, {
    name: `Styled--${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>{
    return {
        [`&& .${_mui_material__WEBPACK_IMPORTED_MODULE_2__.dialogClasses.paper}`]: {
            maxWidth: "none",
            width: 1196
        }
    };
});
const a11yProps = (index)=>{
    return {
        id: `locales-currencies-tab-${index}`,
        "aria-controls": `locales-currencies-${index}`
    };
};
const LocalesAndCurrenciesModal = (props)=>{
    const { onClose  } = props;
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_7__/* .useTranslate */ .qM)({
        basePath: "modals.locales_and_currencies"
    });
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    const handleChangeTab = (_, newValue)=>{
        setActiveTab(newValue);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledLocalesAndCurrenciesModal, {
        title: translate("title"),
        subtitle: translate("subtitle"),
        fullScreen: isMobile,
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
                value: activeTab,
                onChange: handleChangeTab,
                "aria-label": "locales and currencies",
                sx: {
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                        label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            direction: "row",
                            spacing: 1,
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__/* .IcoMoon */ .n, {
                                    icon: "globe",
                                    color: "inherit"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    children: translate("tab_labels.first_tab")
                                })
                            ]
                        }),
                        ...a11yProps(0)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                        label: translate("tab_labels.second_tab"),
                        ...a11yProps(1)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LocalesTabPanel, {
                value: activeTab,
                index: 0,
                onModalClose: onClose
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CurrenciesTabPanel, {
                value: activeTab,
                index: 1,
                onModalClose: onClose
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24759:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* reexport safe */ _LocalesAndCurrenciesModal__WEBPACK_IMPORTED_MODULE_0__.K)
/* harmony export */ });
/* harmony import */ var _LocalesAndCurrenciesModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19173);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LocalesAndCurrenciesModal__WEBPACK_IMPORTED_MODULE_0__]);
_LocalesAndCurrenciesModal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getCurrencyCodeWithSign)
/* harmony export */ });
const getCurrencyCodeWithSign = (params)=>{
    const { currencyCode , currencySign  } = params;
    if (!currencyCode || !currencySign) return "";
    return `${currencyCode} ${currencySign}`;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (getCurrencyCodeWithSign)));


/***/ })

};
;
//# sourceMappingURL=404.js.map