"use strict";
(() => {
var exports = {};
exports.id = 690;
exports.ids = [690];
exports.modules = {

/***/ 76374:
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
/* harmony import */ var components_pageTemplates_ThankYouTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73595);
/* harmony import */ var helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71093);
/* harmony import */ var hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63858);
/* harmony import */ var hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82153);
/* harmony import */ var hooks_queries_useGetReservation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96970);
/* harmony import */ var hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8459);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(30378);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__, components_pageTemplates_ThankYouTemplate__WEBPACK_IMPORTED_MODULE_4__, helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_5__, hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_6__, hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_7__, hooks_queries_useGetReservation__WEBPACK_IMPORTED_MODULE_8__, hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_9__, providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_12__, theme_index__WEBPACK_IMPORTED_MODULE_13__]);
([components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__, components_pageTemplates_ThankYouTemplate__WEBPACK_IMPORTED_MODULE_4__, helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_5__, hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_6__, hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_7__, hooks_queries_useGetReservation__WEBPACK_IMPORTED_MODULE_8__, hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_9__, providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_12__, theme_index__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const PREFIX = "ThankYouPage";
const StyledMainLayout = (0,theme_index__WEBPACK_IMPORTED_MODULE_13__/* .styled */ .zo)(components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__/* .MainLayout */ .Z, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>({
        [`&& .${components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__/* .MainLayoutClasses.main */ .P.main}`]: {
            alignItems: "center",
            display: "flex"
        }
    }));
const ThankYouPage = ()=>{
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const reference = lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(query, hooks_queries_useMutationReservation__WEBPACK_IMPORTED_MODULE_9__/* .RESERVATION_RESPONSE_SOURCES.reference */ .YV.reference);
    const { data: reservation , isSuccess  } = (0,hooks_queries_useGetReservation__WEBPACK_IMPORTED_MODULE_8__/* .useGetReservation */ .T)(reference);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(providers_NextSeoProvider__WEBPACK_IMPORTED_MODULE_12__/* .NextSeoProvider */ .L, {
                title: reservation?.reference
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledMainLayout, {
                children: isSuccess && reservation && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(components_pageTemplates_ThankYouTemplate__WEBPACK_IMPORTED_MODULE_4__/* .ThankYouTemplate */ ._, {
                    reservationData: reservation
                })
            })
        ]
    });
};
const getServerSideProps$1 = (0,helpers_withServerSideProps__WEBPACK_IMPORTED_MODULE_5__/* .withServerSideProps */ .l)({
    fetchers: [
        hooks_queries_useGetReservation__WEBPACK_IMPORTED_MODULE_8__/* .prefetchReservation */ .H,
        hooks_queries_useGetLocales__WEBPACK_IMPORTED_MODULE_7__/* .prefetchLocales */ .n,
        hooks_queries_useGetCurrencies__WEBPACK_IMPORTED_MODULE_6__/* .prefetchCurrencies */ .GJ
    ]
});

var serverComponentModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': ThankYouPage,
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

const getInitialPropsWrapper = getInitialPropsWrappers['/r/thank-you/[reference]'] || _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetInitialPropsWithSentry;

if (pageComponent && typeof origGetInitialProps === 'function') {
  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;
}

const getStaticProps =
  typeof origGetStaticProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetStaticPropsWithSentry(origGetStaticProps, '/r/thank-you/[reference]')
    : undefined;
const getServerSideProps =
  typeof origGetServerSideProps === 'function'
    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/r/thank-you/[reference]')
    : undefined;

const pageWrapperTemplate = pageComponent ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.wrapPageComponentWithSentry(pageComponent ) : pageComponent;



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 73853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ ThankYouTemplate)
/* harmony export */ });
/* unused harmony export ThankYouTemplateClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51296);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27074);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41430);
/* harmony import */ var components_links_NextLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4630);
/* harmony import */ var helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12764);
/* harmony import */ var helpers_getValueFromFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37960);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92552);
/* harmony import */ var hooks_queries_useGetFilterLabels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17449);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53127);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40420);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(62430);
/* harmony import */ var views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9991);
/* harmony import */ var views_NoImageView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(48113);
/* harmony import */ var views_RatingView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(98852);
/* harmony import */ var views_RequirementView_RequirementView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4606);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_8__, hooks_queries_useGetFilterLabels__WEBPACK_IMPORTED_MODULE_9__, theme_index__WEBPACK_IMPORTED_MODULE_13__, views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_14__, views_NoImageView__WEBPACK_IMPORTED_MODULE_15__, views_RatingView__WEBPACK_IMPORTED_MODULE_16__, views_RequirementView_RequirementView__WEBPACK_IMPORTED_MODULE_17__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_3__, hooks_index__WEBPACK_IMPORTED_MODULE_8__, hooks_queries_useGetFilterLabels__WEBPACK_IMPORTED_MODULE_9__, theme_index__WEBPACK_IMPORTED_MODULE_13__, views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_14__, views_NoImageView__WEBPACK_IMPORTED_MODULE_15__, views_RatingView__WEBPACK_IMPORTED_MODULE_16__, views_RequirementView_RequirementView__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const PREFIX = "ThankYouTemplate";
const ThankYouTemplateClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "link"
]);
const StyledThankYouTemplateContainer = (0,theme_index__WEBPACK_IMPORTED_MODULE_13__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
    name: `Styled--${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`& .${ThankYouTemplateClasses.link}`]: {
            color: theme.palette.text.primary,
            ...theme.typography.buttonUnderline
        }
    };
});
const ThankYouTemplate = (props)=>{
    const { reservationData: { reference , checkin_at , checkout_at , users_count , listing: { address , country , slug , gallery , title , formatted_filters  }  }  } = props;
    const countryTitle = lodash_get__WEBPACK_IMPORTED_MODULE_11___default()(country, "title");
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_10__/* .useTranslate */ .q)({
        basePath: "pages.thank_you"
    });
    const imageSrc = gallery[0]?.src || "";
    const { date: checkInDate , time: checkInTime  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getFormattedDateAndTime */ .TX)({
        date: new Date(checkin_at.slice(0, 16)),
        dateVariant: "full"
    });
    const { date: checkOutDate , time: checkotTime  } = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getFormattedDateAndTime */ .TX)({
        date: new Date(checkout_at.slice(0, 16)),
        dateVariant: "full"
    });
    const formattedCheckIn = `${checkInDate} | ${checkInTime}`;
    const formattedCheckOut = `${checkOutDate} | ${checkotTime}`;
    const [accommodates, bedrooms, bathrooms, rating, ratingCount] = (0,helpers_getFilterValues__WEBPACK_IMPORTED_MODULE_6__/* .getFilterValues */ .i)({
        formattedFilters: formatted_filters,
        slugs: [
            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .ACCOMMODATES_SOURCE */ .s0,
            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BEDROOMS_SOURCE */ .Bt,
            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .BATHROOMS_SOURCE */ .qA,
            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .RATING_SLUG */ .gd,
            application_constants__WEBPACK_IMPORTED_MODULE_4__/* .RATING_COUNT_SLUG */ .BN
        ]
    });
    const bedroomsCount = bedrooms?.value;
    const bathroomsCount = bathrooms?.value;
    const accommodatesCount = accommodates?.value;
    const bedroomsLabel = bedrooms?.filterAttribute?.title;
    const bathroomsLabel = bathrooms?.filterAttribute?.title;
    const accommodatesLabel = translate.root("custom.guest");
    const mainAmenities = [
        {
            id: "1",
            value: bedroomsCount,
            label: bedroomsLabel,
            iconName: "bedrooms"
        },
        {
            id: "2",
            value: bathroomsCount,
            label: bathroomsLabel,
            iconName: "bathrooms"
        },
        {
            id: "3",
            value: accommodatesCount,
            label: accommodatesLabel,
            iconName: "user"
        }
    ];
    const houseRulesFormattedFilters = formatted_filters.filter((v)=>v.filter_attribute?.slug === application_constants__WEBPACK_IMPORTED_MODULE_4__/* .HOUSE_RULES_SOURCE */ .mP);
    const { data: filterAttributes  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_8__/* .useGetFilterAttributes */ .xe)({
        purpose: application_constants__WEBPACK_IMPORTED_MODULE_4__/* .PURPOSE_TYPES.searching */ .NZ.searching
    });
    const { filterAttribute: houseRulesFA  } = (0,helpers_getValueFromFilter__WEBPACK_IMPORTED_MODULE_7__/* .getValueFromFilter */ .Q)({
        filtersArray: filterAttributes || [],
        slug: application_constants__WEBPACK_IMPORTED_MODULE_4__/* .HOUSE_RULES_SOURCE */ .mP
    });
    const { data: houseRulesFAs = []  } = (0,hooks_queries_useGetFilterLabels__WEBPACK_IMPORTED_MODULE_9__/* .useGetFilterLabels */ .K)(houseRulesFA?.id || "");
    const houseRules = houseRulesFAs?.map((rule)=>{
        const isAllowed = houseRulesFormattedFilters.some((el)=>el.slug === rule.slug);
        return {
            ...rule,
            isAllowed
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledThankYouTemplateContainer, {
        maxWidth: "sm",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            bgcolor: "background.paper",
            py: 3,
            px: {
                xs: 2,
                md: 3
            },
            borderRadius: 4,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "h5",
                    children: translate("title", {
                        country: countryTitle
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "subtitle1",
                    mb: 2,
                    children: translate("reservation_code", {
                        code: reference
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    container: true,
                    columnSpacing: 2,
                    flexWrap: "nowrap",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                position: "relative",
                                overflow: "hidden",
                                width: 80,
                                height: 80,
                                borderRadius: 4,
                                children: imageSrc ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_components__WEBPACK_IMPORTED_MODULE_2__/* .NextImage */ .o, {
                                    src: imageSrc,
                                    fill: true,
                                    style: {
                                        objectFit: "cover"
                                    },
                                    alt: "Listing image"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_NoImageView__WEBPACK_IMPORTED_MODULE_15__/* .NoImageView */ .N, {
                                    typographyProps: {
                                        variant: "body1"
                                    },
                                    iconProps: {
                                        size: "medium"
                                    }
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            container: true,
                            flexDirection: "column",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    variant: "h6",
                                    sx: {
                                        wordBreak: "break-word"
                                    },
                                    children: title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_AmenitiesStackView__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    items: mainAmenities,
                                    typographyProps: {
                                        variant: "body1"
                                    }
                                }),
                                rating?.value ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_RatingView__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    rating: Number(rating?.value) || 0,
                                    reviewsCount: Number(ratingCount?.value) || 0,
                                    typographyProps: {
                                        variant: "body1"
                                    }
                                }) : null,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_links_NextLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        href: application_constants__WEBPACK_IMPORTED_MODULE_4__/* .listingRoute.getPathname */ .oo.getPathname(slug),
                                        target: "_blank",
                                        className: ThankYouTemplateClasses.link,
                                        children: translate("view_listing")
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    sx: {
                        my: 2
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    container: true,
                    flexDirection: "column",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "h6",
                            children: translate("guests")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "subtitle1",
                            children: pluralize__WEBPACK_IMPORTED_MODULE_12___default()(translate.root("custom.guest_count", {
                                count: users_count
                            }), users_count)
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    sx: {
                        my: 2
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    container: true,
                    columnSpacing: 3,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            container: true,
                            xs: 6,
                            flexDirection: "column",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    variant: "h6",
                                    children: translate("check_in")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    variant: "subtitle1",
                                    children: formattedCheckIn
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            container: true,
                            xs: 6,
                            flexDirection: "column",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    variant: "h6",
                                    children: [
                                        " ",
                                        translate("check_out")
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    variant: "subtitle1",
                                    children: formattedCheckOut
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    sx: {
                        my: 2
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    container: true,
                    flexDirection: "column",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "h6",
                            children: translate("address")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "subtitle1",
                            children: address
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    sx: {
                        my: 2
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    container: true,
                    flexDirection: "column",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "h6",
                            children: translate("rules")
                        }),
                        houseRules.map((item, index)=>{
                            const { title , isAllowed  } = item;
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                item: true,
                                sx: {
                                    mt: 1
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_RequirementView_RequirementView__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    allowed: isAllowed,
                                    label: title
                                })
                            }, title + index /* Add 'index' because title may be technically same */ );
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

/***/ 73595:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _ThankYouTemplate__WEBPACK_IMPORTED_MODULE_0__._)
/* harmony export */ });
/* harmony import */ var _ThankYouTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73853);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ThankYouTemplate__WEBPACK_IMPORTED_MODULE_0__]);
_ThankYouTemplate__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getLabelResource)
/* harmony export */ });
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22825);

const getLabelResource = (attributeId)=>{
    return `${application_resources__WEBPACK_IMPORTED_MODULE_0__/* .ATTRIBUTES_RESOURCE */ .aT}/${attributeId}/filter-labels`;
};


/***/ }),

/***/ 96970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* reexport safe */ _useGetReservation__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   "T": () => (/* reexport safe */ _useGetReservation__WEBPACK_IMPORTED_MODULE_0__.T)
/* harmony export */ });
/* harmony import */ var _useGetReservation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useGetReservation__WEBPACK_IMPORTED_MODULE_0__]);
_useGetReservation__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43588:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ prefetchReservation),
/* harmony export */   "T": () => (/* binding */ useGetReservation)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41430);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22825);
/* harmony import */ var _useMutationReservation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8459);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _useMutationReservation__WEBPACK_IMPORTED_MODULE_3__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _useMutationReservation__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const getQueryKey = (reference)=>[
        reference,
        "reservation",
        "getOne"
    ];
const getReservation = async (params)=>{
    const { queryKey , meta  } = params;
    const [reference] = queryKey;
    const context = meta?.context;
    const res = await _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.get */ .zk.get({
        pathname: `${application_resources__WEBPACK_IMPORTED_MODULE_4__/* .RESERVATIONS_RESOURCE */ .pk}/${reference}`
    }, {
        context
    });
    return _useMutationReservation__WEBPACK_IMPORTED_MODULE_3__/* .reservationResponseZodSchema.parse */ .nG.parse(res.data.data);
};
const prefetchReservation = (queryClient, context)=>{
    const reference = context.query?.[application_constants__WEBPACK_IMPORTED_MODULE_2__/* .thankYouRoute.param */ .po.param];
    return queryClient.prefetchQuery({
        queryKey: getQueryKey(typeof reference === "string" ? reference : ""),
        queryFn: getReservation,
        meta: {
            context
        }
    });
};
const useGetReservation = (reference)=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: getQueryKey(typeof reference === "string" ? reference : ""),
        queryFn: getReservation,
        refetchOnMount: false,
        enabled: !!reference
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

/***/ 25040:
/***/ ((module) => {

module.exports = require("zod-i18n-map");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [97,487,876,577,789,975,31,367,822,268,459,755], () => (__webpack_exec__(76374)));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=[reference].js.map