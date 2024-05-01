"use strict";
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 98330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D5": () => (/* binding */ Map),
/* harmony export */   "nc": () => (/* binding */ MapClasses)
/* harmony export */ });
/* unused harmony exports MIN_ZOOM_VALUE, WORLD_BORDER_BOUNDS */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62430);
/* harmony import */ var _components_ZoomControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18535);
/* harmony import */ var _mapStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83811);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme__WEBPACK_IMPORTED_MODULE_4__, _components_ZoomControl__WEBPACK_IMPORTED_MODULE_5__]);
([theme__WEBPACK_IMPORTED_MODULE_4__, _components_ZoomControl__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const MIN_ZOOM_VALUE = 2;
const WORLD_BORDER_BOUNDS = {
    north: 85,
    south: -85,
    west: -180,
    east: 180
};
const PREFIX = "Map";
const MapClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "map"
]);
const StyledRoot = (0,theme__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>({
        width: "100%",
        height: "100%",
        [`& .${MapClasses.map}`]: {
            width: "100%",
            height: "100%",
            position: "relative"
        }
    }));
const Map = (props)=>{
    const { children , options ={} , sx , className , header =null , ...rest } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledRoot, {
        sx: sx,
        className: className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {
            mapContainerClassName: MapClasses.map,
            options: {
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                disableDefaultUI: true,
                restriction: {
                    latLngBounds: WORLD_BORDER_BOUNDS,
                    strictBounds: true
                },
                /**
           * We should remove our styles because they can conflict with
           * user styles from google cloud that we get via the map id
           */ styles: options.mapId ? undefined : _mapStyles__WEBPACK_IMPORTED_MODULE_6__/* .customMapStyle */ .P,
                minZoom: MIN_ZOOM_VALUE,
                ...options
            },
            zoom: application_constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_MAP_ZOOM_VALUE */ .aA,
            ...rest,
            children: [
                children,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        margin: theme.spacing(2),
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2
                    },
                    children: [
                        header,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ZoomControl__WEBPACK_IMPORTED_MODULE_5__/* .ZoomControl */ .L, {
                            sx: {
                                marginLeft: "auto"
                            }
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

/***/ 97773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ MapPoint)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);




const getMarkerPixelPositionOffset = (width, height)=>{
    return {
        x: -(width / 2),
        y: -(height / 2)
    };
};
const MapPoint = (props)=>{
    const { position , card , point , showCard , infoBoxOverride  } = props;
    const [markerOverlay, setMarkerOverlay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const getInfoBoxPixelPositionOffset = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((width)=>{
        const pointNode = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(markerOverlay, "container"); // are types wrong here? Avoid 'as' if possible
        const pointHeight = pointNode?.offsetHeight;
        return {
            x: -width / 2,
            y: pointHeight || 0
        };
    }, [
        markerOverlay
    ]);
    const defaultInfoBox = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.OverlayViewF, {
            position: position,
            mapPaneName: _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.OverlayView.FLOAT_PANE,
            getPixelPositionOffset: getInfoBoxPixelPositionOffset,
            children: card
        });
    }, [
        getInfoBoxPixelPositionOffset,
        position,
        card
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.OverlayViewF, {
                position: position,
                mapPaneName: _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.OverlayView.OVERLAY_MOUSE_TARGET,
                getPixelPositionOffset: getMarkerPixelPositionOffset,
                onLoad: setMarkerOverlay,
                children: point
            }),
            showCard && (infoBoxOverride || defaultInfoBox)
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MapPoint)));


/***/ }),

/***/ 25266:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ MapWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var custom_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76238);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92552);
/* harmony import */ var providers_GoogleMapsAPIProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85871);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_4__, providers_GoogleMapsAPIProvider__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_6__]);
([hooks_index__WEBPACK_IMPORTED_MODULE_4__, providers_GoogleMapsAPIProvider__WEBPACK_IMPORTED_MODULE_5__, theme_index__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const PREFIX = "MapWrapper";
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_6__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>({
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));
const MapWrapper = (props)=>{
    const { sx , className , children  } = props;
    const { isLoaded , error , isLoading  } = (0,providers_GoogleMapsAPIProvider__WEBPACK_IMPORTED_MODULE_5__/* .useGoogleMapsAPI */ .Y)();
    const { enqueueSnackbar  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_4__/* .useSnackbar */ .Ds)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (error) {
            enqueueSnackbar(error.message, {
                variant: "error"
            });
        }
    }, [
        error,
        enqueueSnackbar
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledRoot, {
        sx: sx,
        className: className,
        children: [
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_Loader__WEBPACK_IMPORTED_MODULE_3__/* .Loader */ .a, {}),
            isLoaded && !error && children
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81859:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ ZoomControl)
/* harmony export */ });
/* unused harmony export ZoomControlClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16593);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62430);
/* harmony import */ var views_ZoomButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9317);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_5__, views_ZoomButton__WEBPACK_IMPORTED_MODULE_6__]);
([clsx__WEBPACK_IMPORTED_MODULE_4__, theme_index__WEBPACK_IMPORTED_MODULE_5__, views_ZoomButton__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const PREFIX = "ZoomControl";
const ZoomControlClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.generateUtilityClasses)(PREFIX, [
    "root"
]);
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_5__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`&.${ZoomControlClasses.root}`]: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(1)
        }
    };
});
const ZoomControl = (props)=>{
    const { className , sx  } = props;
    const map = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.useGoogleMap)();
    const [isMapReady, setIsMapReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    /**
   * We load zoom control only when all the tiles are loaded
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!map) return;
        const listener = map.addListener("tilesloaded", ()=>{
            setIsMapReady(true);
        });
        return ()=>{
            listener.remove();
        };
    }, [
        map
    ]);
    const handleZoomIncrease = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!map) return;
        const currentZoom = map.getZoom() || 0;
        map.setZoom(currentZoom + 1);
    }, [
        map
    ]);
    const handleZoomDecrease = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!map) return;
        const currentZoom = map.getZoom() || 0;
        map.setZoom(currentZoom - 1);
    }, [
        map
    ]);
    if (!isMapReady) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledRoot, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(ZoomControlClasses.root, className),
        sx: sx,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ZoomButton__WEBPACK_IMPORTED_MODULE_6__/* .ZoomButton */ .u, {
                zoomType: "increase",
                onClick: handleZoomIncrease
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_ZoomButton__WEBPACK_IMPORTED_MODULE_6__/* .ZoomButton */ .u, {
                zoomType: "decrease",
                onClick: handleZoomDecrease
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* reexport safe */ _ZoomControl__WEBPACK_IMPORTED_MODULE_0__.L)
/* harmony export */ });
/* harmony import */ var _ZoomControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81859);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ZoomControl__WEBPACK_IMPORTED_MODULE_0__]);
_ZoomControl__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D5": () => (/* reexport safe */ _Map__WEBPACK_IMPORTED_MODULE_0__.D5),
/* harmony export */   "fk": () => (/* reexport safe */ _MapWrapper__WEBPACK_IMPORTED_MODULE_1__.f),
/* harmony export */   "nc": () => (/* reexport safe */ _Map__WEBPACK_IMPORTED_MODULE_0__.nc)
/* harmony export */ });
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98330);
/* harmony import */ var _MapWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25266);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Map__WEBPACK_IMPORTED_MODULE_0__, _MapWrapper__WEBPACK_IMPORTED_MODULE_1__]);
([_Map__WEBPACK_IMPORTED_MODULE_0__, _MapWrapper__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ customMapStyle)
/* harmony export */ });
const customMapStyle = [
    {
        featureType: "administrative.province",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.business",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.government",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.medical",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.place_of_worship",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.school",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.sports_complex",
        stylers: [
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road.highway",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit.line",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit.station.bus",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit.station.rail",
        stylers: [
            {
                visibility: "off"
            }
        ]
    }
];


/***/ }),

/***/ 25823:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ IconWithTitleView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94605);
/* harmony import */ var _templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19572);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, _templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_3__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, _templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const IconWithTitleView = (props)=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const { icon , title , iconColor =theme.palette.text.primary  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_templates_WithTitleTemplate__WEBPACK_IMPORTED_MODULE_3__/* .WithTitleTemplate */ .qX, {
        title: title,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
            icon: icon,
            color: iconColor
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63243:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* reexport safe */ _IconWithTitleView__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _IconWithTitleView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25823);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_IconWithTitleView__WEBPACK_IMPORTED_MODULE_0__]);
_IconWithTitleView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ ZoomButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94605);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const ZoomButton = (props)=>{
    const { zoomType , sx , ...rest } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)({
        basePath: "actions"
    });
    const icon = zoomType === "increase" ? "add" : "remove";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "outlined",
        sx: {
            zIndex: theme.zIndex.fab,
            background: theme.palette.background.default,
            padding: theme.spacing(1),
            "&:hover": {
                background: theme.palette.background.default
            },
            width: 32,
            height: 32,
            minWidth: 32,
            minHeight: 32,
            [theme.breakpoints.up("md")]: {
                width: 40,
                height: 40,
                minWidth: 40,
                minHeight: 40
            },
            ...sx
        },
        color: "secondary",
        "aria-label": translate(zoomType),
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
            icon: icon,
            color: "inherit"
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* reexport safe */ _ZoomButton__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _ZoomButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91940);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ZoomButton__WEBPACK_IMPORTED_MODULE_0__]);
_ZoomButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


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

/***/ 85871:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useGoogleMapsAPI),
/* harmony export */   "q": () => (/* binding */ GoogleMapsAPIProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48719);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92552);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_4__]);
hooks_index__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const GoogleMapsAPIContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    isLoaded: false,
    isLoading: false,
    error: null
});
const GoogleMapsAPIProvider = (props)=>{
    const { children , ...scriptOptions } = props;
    const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    const { locale  } = (0,contexts_LocaleContext__WEBPACK_IMPORTED_MODULE_3__/* .useLocaleContext */ .PE)();
    const { data: website  } = (0,hooks_index__WEBPACK_IMPORTED_MODULE_4__/* .useGetWebsite */ .Rz)();
    const googleMapsApiKey = website?.map_key || "";
    /**
   * These options can't be changed, otherwise
   * we can get duplicated google maps api error.
   * So, it's important that website must be prefetched
   * in order to get the correct api key
   */ const loadScriptOptionsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        id,
        googleMapsApiKey,
        language: locale,
        ...scriptOptions
    });
    const { isLoaded , loadError  } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.useLoadScript)(loadScriptOptionsRef.current);
    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            isLoaded,
            isLoading: !isLoaded && !loadError,
            error: loadError ?? null
        }), [
        isLoaded,
        loadError
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GoogleMapsAPIContext.Provider, {
        value: value,
        children: children
    });
};
const useGoogleMapsAPI = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GoogleMapsAPIContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=634.js.map