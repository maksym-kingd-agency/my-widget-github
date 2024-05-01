"use strict";
exports.id = 822;
exports.ids = [822];
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

/***/ 45392:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "qX": () => (/* binding */ WithTitleTemplate)
/* harmony export */ });
/* unused harmony export WithTitleTemplateClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16593);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_2__, _theme__WEBPACK_IMPORTED_MODULE_3__]);
([clsx__WEBPACK_IMPORTED_MODULE_2__, _theme__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const PREFIX = "WithTitleTemplate";
const WithTitleTemplateClasses = {
    mainWrapper: `${PREFIX}-mainWrapper`,
    rightSection: `${PREFIX}-rightSection`
};
const StyledRoot = (0,_theme__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: "StyledWithTitleTemplate",
    label: `Sapiens--${PREFIX}`,
    shouldForwardProp: (p)=>{
        return p !== "space";
    }
})(()=>{
    return {
        [`&.${WithTitleTemplateClasses.mainWrapper}`]: {
            display: "flex",
            alignItems: "center"
        },
        [`& .${WithTitleTemplateClasses.rightSection}`]: {
            overflow: "hidden"
        }
    };
});
/**
 * Default template for reusing
 * @param children left side of component - ReactNode
 * @param title rigth side title - ReactNode
 * @param subtitle rigth side subtitle - ReactNode
 */ const WithTitleTemplate = (props)=>{
    const { children , title , subtitle , space =1 , className , sx  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledRoot, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)(className, WithTitleTemplateClasses.mainWrapper),
        sx: sx,
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    marginLeft: space
                },
                className: WithTitleTemplateClasses.rightSection,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            wordBreak: "break-word"
                        },
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: subtitle
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithTitleTemplate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19572:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* reexport safe */ _WithTitleTemplate__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "qX": () => (/* reexport safe */ _WithTitleTemplate__WEBPACK_IMPORTED_MODULE_0__.qX)
/* harmony export */ });
/* harmony import */ var _WithTitleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_0__]);
_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91218:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "i": () => (/* binding */ AmenitiesStackView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94605);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40420);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__]);
custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const defaultDivider = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    sx: {
        borderColor: "text.primary"
    },
    orientation: "vertical",
    flexItem: true
});
const AmenitiesStackView = (props)=>{
    const { items , typographyProps ={} , divider =defaultDivider , ...restStackProps } = props;
    const { sx  } = typographyProps;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        divider: divider,
        spacing: 1,
        ...restStackProps,
        children: items.map((item)=>{
            const { id , label , value , iconName  } = item;
            const numberValue = Number(value);
            if (!numberValue || !label) {
                return null;
            }
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
                        variant: "body1",
                        sx: {
                            color: "text.primary",
                            ...sx
                        },
                        whiteSpace: "nowrap",
                        mr: 0.5,
                        ...typographyProps,
                        children: iconName ? numberValue : pluralize__WEBPACK_IMPORTED_MODULE_3___default()(label, numberValue, true)
                    }),
                    iconName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
                        icon: iconName,
                        size: "small",
                        sx: {
                            ml: 0.5
                        }
                    }) : null
                ]
            }, id);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AmenitiesStackView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9991:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _AmenitiesStackView__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "i": () => (/* reexport safe */ _AmenitiesStackView__WEBPACK_IMPORTED_MODULE_0__.i)
/* harmony export */ });
/* harmony import */ var _AmenitiesStackView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91218);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_0__]);
_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ NoImageView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19594);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94605);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__]);
custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const NoImageView = (props)=>{
    const { iconProps , typographyProps  } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        height: 1,
        width: 1,
        bgcolor: "divider",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            container: true,
            flexDirection: "column",
            height: 1,
            alignItems: "center",
            justifyContent: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                    icon: "no-image",
                    size: "large",
                    color: theme.palette.text.light,
                    ...iconProps
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                    variant: "subtitle2",
                    color: "text.light",
                    mt: 1,
                    textAlign: "center",
                    ...typographyProps,
                    children: "custom.no_image_found"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* reexport safe */ _NoImageView__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _NoImageView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66473);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NoImageView__WEBPACK_IMPORTED_MODULE_0__]);
_NoImageView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56935:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "k": () => (/* binding */ RatingView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94605);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92552);
/* harmony import */ var _templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19572);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19594);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_4__, _templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_4__, _templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const RatingView = (props)=>{
    const { rating , reviewsCount , withoutReviewCountText =false , space =0.5 , typographyProps , iconSx , iconSize ="extraSmall" , starsCount =1 , sx  } = props;
    const { sx: typographySx , ...restTypographyProps } = typographyProps || {};
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .qM)({
        basePath: "custom"
    });
    const renderTitle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (reviewsCount) {
            return withoutReviewCountText ? `${rating} (${reviewsCount})` : `${rating} (${translate("reviews_count", {
                count: reviewsCount
            })})`;
        } else {
            return rating;
        }
    }, [
        rating,
        reviewsCount,
        translate,
        withoutReviewCountText
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_5__/* .WithTitleTemplate */ .qX, {
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .Z, {
            variant: "body2",
            sx: {
                color: "text.primary",
                whiteSpace: "nowrap",
                ...typographySx
            },
            ...restTypographyProps,
            children: renderTitle
        }),
        space: space,
        sx: sx,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Rating, {
                size: "small",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                    icon: "star-solid",
                    color: theme.palette.warning.main,
                    size: iconSize,
                    sx: iconSx
                }),
                emptyIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
                    icon: "star-regular",
                    color: theme.palette.text.disabled,
                    size: iconSize,
                    sx: iconSx
                }),
                defaultValue: Number(rating),
                precision: 0.1,
                max: starsCount,
                readOnly: true
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RatingView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _RatingView__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "k": () => (/* reexport safe */ _RatingView__WEBPACK_IMPORTED_MODULE_0__.k)
/* harmony export */ });
/* harmony import */ var _RatingView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56935);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RatingView__WEBPACK_IMPORTED_MODULE_0__]);
_RatingView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ getFilterValues_getFilterValues),
  "i": () => (/* reexport */ getFilterValues)
});

// EXTERNAL MODULE: ./src/helpers/getValueFromFilter/index.ts + 1 modules
var getValueFromFilter = __webpack_require__(37960);
;// CONCATENATED MODULE: ./src/helpers/getFilterValues/getFilterValues.ts

const getFilterValues = (params)=>{
    const { formattedFilters , slugs  } = params;
    return slugs.map((slug)=>{
        return (0,getValueFromFilter/* getValueFromFilter */.Q)({
            slug: slug,
            filtersArray: formattedFilters
        });
    });
};
/* harmony default export */ const getFilterValues_getFilterValues = (getFilterValues);

;// CONCATENATED MODULE: ./src/helpers/getFilterValues/index.ts




/***/ }),

/***/ 37960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* reexport */ getValueFromFilter)
});

// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
;// CONCATENATED MODULE: ./src/helpers/getValueFromFilter/getValueFromFilter.ts

const getValueFromFilter = (params)=>{
    const { slug , filtersArray =[] , selectSource ="amount"  } = params;
    const selectedFilterBySlug = filtersArray.find((item)=>{
        return item?.filter_attribute?.slug === slug;
    });
    const filterAttribute = selectedFilterBySlug?.filter_attribute;
    const value = get_default()(selectedFilterBySlug, selectSource);
    return {
        value,
        filterAttribute
    };
};

;// CONCATENATED MODULE: ./src/helpers/getValueFromFilter/index.ts



/***/ })

};
;
//# sourceMappingURL=822.js.map