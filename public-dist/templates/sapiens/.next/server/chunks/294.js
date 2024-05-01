"use strict";
exports.id = 294;
exports.ids = [294];
exports.modules = {

/***/ 22294:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GR": () => (/* binding */ FooterClasses),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Footer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49752);
/* harmony import */ var helpers_getNavigatorItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99334);
/* harmony import */ var helpers_getNavigatorPathnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57189);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92552);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62430);
/* harmony import */ var _links_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50682);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_7__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PREFIX = "Footer";
const FooterClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "root"
]);
const StyledFooter = (0,theme_index__WEBPACK_IMPORTED_MODULE_7__/* .styled */ .zo)("div", {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>({
        [`& .${FooterClasses.root}`]: {
            backgroundColor: theme.palette.background.default,
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(3, 5),
            [theme.breakpoints.down("md")]: {
                padding: theme.spacing(3, 5, 2, 5)
            }
        }
    }));
const Footer = ()=>{
    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
    const { data: websiteData  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_5__/* .useGetWebsite */ .Rz)();
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_5__/* .useTranslate */ .qM)({
        basePath: "footer"
    });
    const navigators = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(websiteData, "navigators") || [];
    const companyName = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(websiteData, "company.name");
    const footerItems = (0,helpers_getNavigatorItems__WEBPACK_IMPORTED_MODULE_4__/* .getNavigatorItems */ .I)({
        navigatorsData: _packages_providers__WEBPACK_IMPORTED_MODULE_2__/* .zodNavigatorSchemas.index.parse */ .Jt.index.parse(navigators),
        selector: "footer"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledFooter, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: FooterClasses.root,
                minHeight: theme_index__WEBPACK_IMPORTED_MODULE_7__/* .FOOTER_HEIGHT */ .Tx,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    container: true,
                    gap: {
                        xs: 3,
                        md: 0
                    },
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            md: 4,
                            container: true,
                            justifyContent: {
                                xs: "center",
                                md: "start"
                            },
                            sx: {
                                order: {
                                    xs: 1,
                                    md: 0
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_9__/* .Typography */ .Z, {
                                variant: "body1",
                                component: "span",
                                color: "text.light",
                                dir: "ltr",
                                children: translate("year", {
                                    year: new Date().getFullYear(),
                                    company: companyName
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            md: 8,
                            container: true,
                            justifyContent: {
                                md: "flex-end"
                            },
                            alignItems: "center",
                            flexDirection: {
                                xs: "column",
                                md: "row"
                            },
                            textAlign: {
                                xs: "center",
                                md: "end"
                            },
                            gap: {
                                xs: 2,
                                md: 3
                            },
                            sx: {
                                order: {
                                    xs: 0,
                                    md: 1
                                }
                            },
                            children: footerItems.map((navigator)=>{
                                const { target , title , id , path =""  } = navigator;
                                const { pathname , prefetchPath , isPrefetchPath  } = (0,helpers_getNavigatorPathnames__WEBPACK_IMPORTED_MODULE_10__/* .getNavigatorPathnames */ .k)(path);
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_links_Link__WEBPACK_IMPORTED_MODULE_8__/* .Link */ .r, {
                                    t: title,
                                    sx: {
                                        textDecoration: "none",
                                        wordBreak: "break-word"
                                    },
                                    variant: "body1",
                                    href: {
                                        pathname
                                    },
                                    target: target,
                                    color: "text.light",
                                    onMouseEnter: ()=>{
                                        if (isPrefetchPath) {
                                            (0,hooks_index__WEBPACK_IMPORTED_MODULE_5__/* .prefetchPage */ .aS)(queryClient, undefined, {
                                                path: prefetchPath
                                            });
                                        }
                                    }
                                }, id);
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=294.js.map