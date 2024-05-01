"use strict";
exports.id = 619;
exports.ids = [619];
exports.modules = {

/***/ 2343:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ ReviewsModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modals_ModalBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37622);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([modals_ModalBase__WEBPACK_IMPORTED_MODULE_2__]);
modals_ModalBase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ReviewsModal = (props)=>{
    const { children , ...rest } = props;
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)((theme)=>theme.breakpoints.down("md"));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modals_ModalBase__WEBPACK_IMPORTED_MODULE_2__/* .ModalBase */ .e, {
        fullScreen: isMobile,
        maxWidth: "md",
        PaperProps: {
            sx: {
                width: 1
            }
        },
        ...rest,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96824:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* reexport safe */ _ReviewsModal__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _ReviewsModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2343);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ReviewsModal__WEBPACK_IMPORTED_MODULE_0__]);
_ReviewsModal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ REVIEW_STARS_COUNT),
/* harmony export */   "l": () => (/* binding */ ListingReviewsSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19594);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
/* harmony import */ var views_RatingView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98852);
/* harmony import */ var views_ReviewsSectionView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6837);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_3__, views_RatingView__WEBPACK_IMPORTED_MODULE_4__, views_ReviewsSectionView__WEBPACK_IMPORTED_MODULE_5__]);
([hooks_index__WEBPACK_IMPORTED_MODULE_3__, views_RatingView__WEBPACK_IMPORTED_MODULE_4__, views_ReviewsSectionView__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const REVIEW_STARS_COUNT = 5;
const ListingReviewsSection = (props)=>{
    const { id , ratingData =[] , averageRating , reviewsCount , maxReviews =6 , className , sx , children  } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "pages.listing"
    });
    const { data: reviewsData , isLoading , hasNextPage , fetchNextPage , isFetchingNextPage  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useGetInfiniteReviews */ .qP)({
        listingId: id
    });
    const finalReviewsData = reviewsData?.map((reviewData)=>({
            ...reviewData,
            firstName: reviewData.firstName || translate.root("custom.guest")
        }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                alignItems: "center",
                gap: 1,
                mb: {
                    xs: 1,
                    sm: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                        variant: "h4",
                        children: translate("titles.review")
                    }),
                    !!averageRating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_RatingView__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        rating: averageRating,
                        reviewsCount: reviewsCount,
                        starsCount: REVIEW_STARS_COUNT,
                        typographyProps: {
                            variant: "body2"
                        }
                    })
                ]
            }),
            finalReviewsData?.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ReviewsSectionView__WEBPACK_IMPORTED_MODULE_5__/* .ReviewsSectionView */ .G, {
                ratingData: ratingData,
                reviewsData: finalReviewsData,
                maxReviews: maxReviews,
                isLoading: isLoading,
                hasMore: hasNextPage,
                onLoadMore: fetchNextPage,
                className: className,
                sx: sx,
                isFetchingNextPage: isFetchingNextPage,
                children: children
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                variant: "subtitle1",
                sx: {
                    mt: 3
                },
                children: translate.root("custom.no_reviews")
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29223:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* reexport safe */ _ListingReviewsSection__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "l": () => (/* reexport safe */ _ListingReviewsSection__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _ListingReviewsSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListingReviewsSection__WEBPACK_IMPORTED_MODULE_0__]);
_ListingReviewsSection__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ GridContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/components/templates/GridItem/index.ts + 1 modules
var GridItem = __webpack_require__(120);
;// CONCATENATED MODULE: ./src/components/templates/GridContainer/GridContainer.tsx




/**
 * Do NOT pass margin/padding, because Grid container uses it
 */ function GridContainer(props) {
    const { children , columnsOrSizes  } = props;
    const resultChildren = (0,external_react_.useMemo)(()=>{
        if (typeof columnsOrSizes === "undefined") return children;
        if (Array.isArray(columnsOrSizes)) {
            return external_react_.Children.map(children, (child, index)=>{
                const md = columnsOrSizes[index] || 12;
                return /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* GridItem */.P, {
                    md: md,
                    children: child
                });
            });
        }
    }, [
        children,
        columnsOrSizes
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        container: true,
        rowSpacing: 1,
        columnSpacing: 3,
        ...props,
        children: resultChildren
    });
}
/* harmony default export */ const GridContainer_GridContainer = ((/* unused pure expression or super */ null && (GridContainer)));

;// CONCATENATED MODULE: ./src/components/templates/GridContainer/index.ts



/***/ }),

/***/ 89423:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27074);
/* harmony import */ var _StyledRatingBarView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29375);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, _StyledRatingBarView__WEBPACK_IMPORTED_MODULE_3__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, _StyledRatingBarView__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const RatingBarView = (props)=>{
    const { label , value , maxProgressValue =5 , ...rest } = props;
    const { className , sx , ...restLinearProgressProps } = rest;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledRatingBarView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: className,
        sx: sx,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: _StyledRatingBarView__WEBPACK_IMPORTED_MODULE_3__/* .RatingBarClasses.labelWrapper */ .z.labelWrapper,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    className: _StyledRatingBarView__WEBPACK_IMPORTED_MODULE_3__/* .RatingBarClasses.text */ .z.text,
                    title: label,
                    children: label
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: _StyledRatingBarView__WEBPACK_IMPORTED_MODULE_3__/* .RatingBarClasses.progressWrapper */ .z.progressWrapper,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.LinearProgress, {
                    ...restLinearProgressProps,
                    className: _StyledRatingBarView__WEBPACK_IMPORTED_MODULE_3__/* .RatingBarClasses.progress */ .z.progress,
                    variant: "determinate",
                    value: (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getPercentValue */ .h1)({
                        value,
                        maxValue: maxProgressValue
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: _StyledRatingBarView__WEBPACK_IMPORTED_MODULE_3__/* .RatingBarClasses.ratingWrapper */ .z.ratingWrapper,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    className: _StyledRatingBarView__WEBPACK_IMPORTED_MODULE_3__/* .RatingBarClasses.text */ .z.text,
                    children: value < 0 ? 0 : value
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RatingBarView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "z": () => (/* binding */ RatingBarClasses)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7802);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_theme_styled__WEBPACK_IMPORTED_MODULE_1__]);
_theme_styled__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const PREFIX = "RatingBarView";
const RatingBarClasses = {
    labelWrapper: `${PREFIX}-labelWrapper`,
    progressWrapper: `${PREFIX}-progressWrapper`,
    ratingWrapper: `${PREFIX}-ratingWrapper`,
    label: `${PREFIX}-label`,
    text: `${PREFIX}-text`,
    progress: `${PREFIX}-progress`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_styled__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .z)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
    label: `Sapiens--${PREFIX}`,
    name: "StyledRatingBarView"
})(({ theme  })=>{
    return {
        height: 48,
        flex: "0 1 524px",
        display: "flex",
        alignItems: "center",
        [`& .${RatingBarClasses.labelWrapper}`]: {
            flex: "0 1 220px",
            marginRight: theme.spacing(2),
            overflow: "hidden"
        },
        [`& .${RatingBarClasses.progressWrapper}`]: {
            flex: "0 0 136px",
            marginRight: theme.spacing(2)
        },
        [`& .${RatingBarClasses.ratingWrapper}`]: {
            flex: "0 1 136px",
            padding: theme.spacing(0, 0, 0, 2),
            overflow: "hidden"
        },
        [`& .${RatingBarClasses.text}`]: {
            ...theme.typography.subtitle2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        },
        [`& .${RatingBarClasses.progress}`]: {
            width: "100%",
            backgroundColor: theme.palette.primary.background,
            borderRadius: 2,
            [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_0__.linearProgressClasses.bar}`]: {
                borderRadius: "inherit"
            }
        }
    };
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52813:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _RatingBarView__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _RatingBarView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89423);
/* harmony import */ var _StyledRatingBarView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29375);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RatingBarView__WEBPACK_IMPORTED_MODULE_0__, _StyledRatingBarView__WEBPACK_IMPORTED_MODULE_1__]);
([_RatingBarView__WEBPACK_IMPORTED_MODULE_0__, _StyledRatingBarView__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92521:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sF": () => (/* binding */ ReviewItemView)
/* harmony export */ });
/* unused harmony exports ReviewItemClasses, StyledReviewItemView */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27074);
/* harmony import */ var components_links_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50682);
/* harmony import */ var components_sections_ListingReviewsSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29223);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19594);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92552);
/* harmony import */ var templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19572);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62430);
/* harmony import */ var _RatingView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98852);
/* harmony import */ var _TextMoreView_TextMoreView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13096);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, components_sections_ListingReviewsSection__WEBPACK_IMPORTED_MODULE_4__, hooks_index__WEBPACK_IMPORTED_MODULE_6__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_7__, _theme__WEBPACK_IMPORTED_MODULE_8__, _RatingView__WEBPACK_IMPORTED_MODULE_9__, _TextMoreView_TextMoreView__WEBPACK_IMPORTED_MODULE_10__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, components_sections_ListingReviewsSection__WEBPACK_IMPORTED_MODULE_4__, hooks_index__WEBPACK_IMPORTED_MODULE_6__, templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_7__, _theme__WEBPACK_IMPORTED_MODULE_8__, _RatingView__WEBPACK_IMPORTED_MODULE_9__, _TextMoreView_TextMoreView__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PREFIX = "ReviewItem";
const ReviewItemClasses = {
    date: `${PREFIX}-date`,
    ratingWrapper: `${PREFIX}-ratingWrapper`,
    ratingValue: `${PREFIX}-ratingValue`
};
const StyledReviewItemView = (0,_theme__WEBPACK_IMPORTED_MODULE_8__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: "StyledReviewItemView",
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`& .${ReviewItemClasses.date}`]: {
            ...theme.typography.small1,
            color: theme.palette.text.light,
            lineHeight: theme.typography.pxToRem(15)
        },
        [`& .${ReviewItemClasses.ratingWrapper}`]: {
            height: 18,
            lineHeight: theme.typography.pxToRem(18)
        },
        [`& .${ReviewItemClasses.ratingValue}`]: {
            ...theme.typography.body1
        }
    };
});
const ReviewItemView = (props)=>{
    const { firstName ="?" , avatarSrc , comment ="" , date =new Date() , rating , place , listingHref , ...rest } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .qM)({
        basePath: "custom"
    });
    const { date: formattedDate  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getFormattedDateAndTime */ .TX)({
        date,
        dateFormat: "dd MMM yyyy"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledReviewItemView, {
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                sx: {
                    mb: 2
                },
                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                    withTooltip: true,
                    variant: "h6",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    children: firstName
                }),
                subtitle: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: !!rating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        className: ReviewItemClasses.ratingWrapper,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RatingView__WEBPACK_IMPORTED_MODULE_9__/* .RatingView */ .k, {
                            typographyProps: {
                                className: ReviewItemClasses.ratingValue
                            },
                            iconSx: {
                                width: 16,
                                height: 16
                            },
                            rating: rating,
                            space: 0.5,
                            starsCount: components_sections_ListingReviewsSection__WEBPACK_IMPORTED_MODULE_4__/* .REVIEW_STARS_COUNT */ .j
                        })
                    })
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                    src: avatarSrc,
                    children: firstName[0]?.toUpperCase()
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TextMoreView_TextMoreView__WEBPACK_IMPORTED_MODULE_10__/* .TextMoreView */ .fi, {
                text: comment,
                dir: "ltr"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                mt: 2,
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 3,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                            className: ReviewItemClasses.date,
                            color: "text.light",
                            children: formattedDate
                        })
                    }),
                    place && listingHref && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        container: true,
                        xs: 9,
                        justifyContent: "flex-end",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Typography__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, {
                            color: "text.light",
                            component: "span",
                            children: [
                                translate("stayed_in"),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_links_Link__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .r, {
                                    target: "_blank",
                                    href: listingHref,
                                    color: "text.light",
                                    sx: {
                                        fontWeight: 700,
                                        wordBreak: "break-word"
                                    },
                                    children: place
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewItemView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ ReviewsSectionView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var buttons_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49230);
/* harmony import */ var custom_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76238);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92552);
/* harmony import */ var modals_ReviewsModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96824);
/* harmony import */ var templates_GridItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(120);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62430);
/* harmony import */ var views_RatingBarView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52813);
/* harmony import */ var views_ReviewItemView_ReviewItemView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92521);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_6__, modals_ReviewsModal__WEBPACK_IMPORTED_MODULE_7__, theme__WEBPACK_IMPORTED_MODULE_9__, views_RatingBarView__WEBPACK_IMPORTED_MODULE_10__, views_ReviewItemView_ReviewItemView__WEBPACK_IMPORTED_MODULE_11__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_6__, modals_ReviewsModal__WEBPACK_IMPORTED_MODULE_7__, theme__WEBPACK_IMPORTED_MODULE_9__, views_RatingBarView__WEBPACK_IMPORTED_MODULE_10__, views_ReviewItemView_ReviewItemView__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const PREFIX = "ReviewsSectionView";
const StyledReviewsSection = (0,theme__WEBPACK_IMPORTED_MODULE_9__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        width: "100%"
    };
});
const ReviewsSectionView = (props)=>{
    const { reviewsData , ratingData , maxReviews , className , sx , onLoadMore , isLoading , hasMore , isFetchingNextPage  } = props;
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)((theme)=>theme.breakpoints.down("sm"));
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .qM)({
        basePath: "buttons"
    });
    const { value: isModalOpen , setTrue: openModal , setFalse: closeModal  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .useBoolean */ .kt)(false);
    const buttonsTranslationOptions = {
        items: translate.root("custom.review", {
            count: 2
        })
    };
    const truncatedReviews = reviewsData.slice(0, maxReviews);
    const isReviewsMoreThanMax = reviewsData.length > maxReviews || hasMore;
    const { targetElementRef  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_6__/* .useIntersectionObserver */ .S1)({
        onIntersection: onLoadMore,
        isEnabled: !isLoading && hasMore && !!onLoadMore,
        rootMargin: "50px"
    });
    const renderItems = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ items , enableLoadMore  })=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            container: true,
            spacing: 3,
            children: items.map((reviewItem, index)=>{
                const { id , ...restReviewItemProps } = reviewItem;
                const isLastRow = isMobile ? index === items.length - 1 : index >= items.length - 2;
                const isLastElement = index === items.length - 1;
                const isAttachTargetRef = isLastElement && enableLoadMore;
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(templates_GridItem__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .P, {
                    ref: isAttachTargetRef ? targetElementRef : undefined,
                    sm: 6,
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ReviewItemView_ReviewItemView__WEBPACK_IMPORTED_MODULE_11__/* .ReviewItemView */ .sF, {
                            ...restReviewItemProps
                        }),
                        !isLastRow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                            sx: {
                                mt: {
                                    xs: 2,
                                    md: 3
                                }
                            }
                        })
                    ]
                }, id);
            })
        });
    }, [
        isMobile,
        targetElementRef
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledReviewsSection, {
        component: "section",
        className: className,
        sx: sx,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                container: true,
                spacing: 3,
                mb: 4,
                children: ratingData.map((ratingItem)=>{
                    const { title , value  } = ratingItem;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_GridItem__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .P, {
                        sm: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_RatingBarView__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            label: title,
                            value: value
                        })
                    }, title);
                })
            }),
            renderItems({
                items: truncatedReviews
            }),
            isReviewsMoreThanMax && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        onClick: openModal,
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
                        children: translate("show_all_items", buttonsTranslationOptions)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(modals_ReviewsModal__WEBPACK_IMPORTED_MODULE_7__/* .ReviewsModal */ .y, {
                        title: translate.root("pages.listing.titles.review"),
                        open: isModalOpen,
                        onClose: closeModal,
                        children: [
                            renderItems({
                                items: reviewsData,
                                enableLoadMore: true
                            }),
                            isFetchingNextPage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_Loader__WEBPACK_IMPORTED_MODULE_5__/* .Loader */ .a, {
                                sx: {
                                    my: 3
                                }
                            }) : null
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

/***/ 6837:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* reexport safe */ _ReviewsSectionView__WEBPACK_IMPORTED_MODULE_0__.G)
/* harmony export */ });
/* harmony import */ var _ReviewsSectionView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9029);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ReviewsSectionView__WEBPACK_IMPORTED_MODULE_0__]);
_ReviewsSectionView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80108:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ SectionSwiper)
/* harmony export */ });
/* unused harmony export SectionSwiperClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58277);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22297);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_4__]);
theme_index__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const PREFIX = "SectionSwiper";
const SectionSwiperClasses = {
    // swiper core and modules classes, add others if need
    swiper: "swiper",
    paginationBullet: "swiper-pagination-bullet",
    paginationActiveBullet: "swiper-pagination-bullet-active",
    paginationContainer: "swiper-pagination",
    paginationFraction: "swiper-pagination-fraction"
};
const StyledSwiper = (0,theme_index__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(swiper_react__WEBPACK_IMPORTED_MODULE_3__/* .Swiper */ .tq, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        position: "relative",
        paddingBottom: 48,
        [`& .${SectionSwiperClasses.paginationContainer}`]: {
            lineHeight: 0,
            bottom: 8
        },
        [`& .${SectionSwiperClasses.paginationBullet}`]: {
            width: 8,
            height: 8,
            border: "1px solid",
            borderColor: theme.palette.primary.main,
            background: "transparent"
        },
        [`& .${SectionSwiperClasses.paginationFraction}`]: {
            bottom: 24
        },
        [`& .${SectionSwiperClasses.paginationActiveBullet}`]: {
            backgroundColor: theme.palette.primary.main
        }
    };
});
const SectionSwiper = (props)=>{
    const { children , ...restSwiperProps } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledSwiper, {
        modules: [
            swiper_modules__WEBPACK_IMPORTED_MODULE_2__/* .Pagination */ .tl
        ],
        pagination: {
            clickable: true,
            enabled: true,
            dynamicBullets: true,
            dynamicMainBullets: 3
        },
        spaceBetween: 24,
        ...restSwiperProps,
        children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, index)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__/* .SwiperSlide */ .o5, {
                children: child
            }, index);
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84872:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _SectionSwiper__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _SectionSwiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SectionSwiper__WEBPACK_IMPORTED_MODULE_0__]);
_SectionSwiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13096:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fi": () => (/* binding */ TextMoreView)
/* harmony export */ });
/* unused harmony exports TextMoreClasses, StyledTextMoreView */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16593);
/* harmony import */ var components_layouts_ShowMoreWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33022);
/* harmony import */ var theme_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7802);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_2__, components_layouts_ShowMoreWrapper__WEBPACK_IMPORTED_MODULE_3__, theme_styled__WEBPACK_IMPORTED_MODULE_4__]);
([clsx__WEBPACK_IMPORTED_MODULE_2__, components_layouts_ShowMoreWrapper__WEBPACK_IMPORTED_MODULE_3__, theme_styled__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const PREFIX = "TextMoreView";
const TextMoreClasses = {
    text: `${PREFIX}-text`,
    button: `${PREFIX}-button`
};
const StyledTextMoreView = (0,theme_styled__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .z)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    label: `Sapiens--${PREFIX}`,
    name: `Styled${PREFIX}`
})(({ theme  })=>{
    return {
        [`& .${TextMoreClasses.text}`]: {
            ...theme.typography.subtitle1,
            wordBreak: "break-word"
        },
        [`& .${TextMoreClasses.button}`]: {
            height: "auto",
            margin: theme.spacing(0, 0, 0, 0),
            padding: 0,
            "&:hover": {
                background: "transparent",
                textDecoration: "none"
            }
        }
    };
});
const TextMoreView = (props)=>{
    const { text , maxTextLength =165 , slotProps , sx , className , dir , ...rest } = props;
    const { toggleButton: toggleButtonProps  } = slotProps || {};
    const { className: toggleButtonClassName , ...toggleButtonRestProps } = toggleButtonProps || {};
    const chars = text.split("");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTextMoreView, {
        sx: sx,
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layouts_ShowMoreWrapper__WEBPACK_IMPORTED_MODULE_3__/* .ShowMoreWrapper */ .G, {
            items: chars,
            maxItems: maxTextLength,
            slotProps: {
                toggleButton: {
                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)(TextMoreClasses.button, toggleButtonClassName),
                    disableRipple: true,
                    ...toggleButtonRestProps
                }
            },
            ...rest,
            children: ({ items , expanded , isItemsMoreThanMax  })=>{
                const joinedText = items.join("");
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: joinedText.split("\n").map((line, index, array)=>{
                        const isTextOverflow = array.length - 1 === index && !expanded && isItemsMoreThanMax;
                        const lastChar = line.slice(-1);
                        const overflowingText = lastChar === "." ? ".." : "...";
                        const finalText = isTextOverflow ? line + overflowingText : line;
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            dir: dir,
                            className: TextMoreClasses.text,
                            children: finalText
                        }, index);
                    })
                });
            }
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TextMoreView)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=619.js.map