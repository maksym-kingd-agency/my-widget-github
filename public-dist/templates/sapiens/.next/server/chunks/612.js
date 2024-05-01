"use strict";
exports.id = 612;
exports.ids = [612];
exports.modules = {

/***/ 26147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ SearchListingsForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41430);
/* harmony import */ var components_forms_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41096);
/* harmony import */ var hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49605);
/* harmony import */ var views_SearchListingsView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38997);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_forms_Form__WEBPACK_IMPORTED_MODULE_2__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_3__, views_SearchListingsView__WEBPACK_IMPORTED_MODULE_4__]);
([components_forms_Form__WEBPACK_IMPORTED_MODULE_2__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_3__, views_SearchListingsView__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const SearchListingsForm = (props)=>{
    const { onSubmit , ...rest } = props;
    /**
   * We provide default city value
   * The popular cities request was prefetched in `getServerSideProps`,
   * so we get existing query data.
   */ const { data: popularCitiesData = []  } = (0,hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();
    const firstPopularCitySlug = popularCitiesData?.[0]?.slug;
    const defaultValues = {
        [application_constants__WEBPACK_IMPORTED_MODULE_1__/* .CITY_SOURCE */ .JJ]: firstPopularCitySlug
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_forms_Form__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .l, {
        onSubmit: onSubmit,
        defaultValues: defaultValues,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_SearchListingsView__WEBPACK_IMPORTED_MODULE_4__/* .SearchListingsView */ .J, {
            ...rest,
            dateRangeProps: {
                fromName: application_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHECKIN_AT_SOURCE */ .I1,
                toName: application_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHECKOUT_AT_SOURCE */ .ob,
                minDate: new Date()
            },
            selectInputProps: {
                name: application_constants__WEBPACK_IMPORTED_MODULE_1__/* .ACCOMMODATES_SOURCE */ .s0
            }
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35612:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* reexport safe */ _SearchListingsForm__WEBPACK_IMPORTED_MODULE_0__.R)
/* harmony export */ });
/* harmony import */ var _SearchListingsForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26147);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchListingsForm__WEBPACK_IMPORTED_MODULE_0__]);
_SearchListingsForm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13464:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SearchListingsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41430);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94605);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92552);
/* harmony import */ var inputs_CityInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88181);
/* harmony import */ var inputs_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71898);
/* harmony import */ var inputs_SelectField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53790);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_4__, inputs_CityInput__WEBPACK_IMPORTED_MODULE_5__, inputs_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_6__, inputs_SelectField__WEBPACK_IMPORTED_MODULE_7__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_4__, inputs_CityInput__WEBPACK_IMPORTED_MODULE_5__, inputs_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_6__, inputs_SelectField__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SearchListingsView = (props)=>{
    const { dateRangeProps , buttonProps , slots , slotProps  } = props;
    const { actionButton: ActionButton  } = slots || {};
    const { actionButton: actionButtonProps  } = slotProps || {};
    const accommodatesChoices = (0,hooks_index__WEBPACK_IMPORTED_MODULE_4__/* .useGetAccommodatesChoices */ .rY)();
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .qM)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            maxWidth: 952,
            borderRadius: 6,
            bgcolor: "background.default",
            alignItems: "center",
            px: 3,
            display: {
                xs: "block",
                md: "flex"
            },
            justifyContent: "space-between",
            pt: {
                xs: 4,
                md: 3
            },
            pb: 1
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_CityInput__WEBPACK_IMPORTED_MODULE_5__/* .CityInput */ .q, {
                name: application_constants__WEBPACK_IMPORTED_MODULE_2__/* .CITY_SOURCE */ .JJ,
                label: "inputs.location",
                sx: {
                    minWidth: {
                        xs: "100%",
                        md: 215
                    },
                    mr: 3
                },
                onlyPopular: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_6__/* .SearchDateRangePickerInput */ .i, {
                label: translate.root("inputs.date_range"),
                sx: {
                    mr: 3,
                    width: {
                        xs: "100%",
                        md: 330
                    }
                },
                ...dateRangeProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_SelectField__WEBPACK_IMPORTED_MODULE_7__/* .SelectField */ .m, {
                name: application_constants__WEBPACK_IMPORTED_MODULE_2__/* .ACCOMMODATES_SOURCE */ .s0,
                label: translate.root("inputs.guests"),
                placeholder: translate.root("pages.search.placeholder.guest"),
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                    icon: "user"
                }),
                items: accommodatesChoices,
                sx: {
                    mr: 3,
                    width: {
                        xs: "100%",
                        md: 330
                    }
                }
            }),
            ActionButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActionButton, {
                sx: {
                    minWidth: {
                        xs: "100%",
                        md: 95
                    },
                    my: {
                        xs: 3,
                        md: 0
                    }
                },
                type: "submit",
                ...buttonProps,
                ...actionButtonProps
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38997:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* reexport safe */ _SearchListingsView__WEBPACK_IMPORTED_MODULE_0__.J)
/* harmony export */ });
/* harmony import */ var _SearchListingsView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13464);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchListingsView__WEBPACK_IMPORTED_MODULE_0__]);
_SearchListingsView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=612.js.map