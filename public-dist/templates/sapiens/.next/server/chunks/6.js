"use strict";
exports.id = 6;
exports.ids = [6];
exports.modules = {

/***/ 39272:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export RESET_ICON_BUTTON_TEST_ID */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94605);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__]);
custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const RESET_ICON_BUTTON_TEST_ID = "reset-icon-button_test-id";
const ResetIconButton = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
        size: "small",
        "data-testid": RESET_ICON_BUTTON_TEST_ID,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_2__/* .IcoMoon */ .n, {
            icon: "close",
            size: "small"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetIconButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97455:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _ResetIconButton__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ResetIconButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39272);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ResetIconButton__WEBPACK_IMPORTED_MODULE_0__]);
_ResetIconButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41702:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67871);
/* harmony import */ var _hooks_useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38722);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_1__, _hooks_useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_2__]);
([components_views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_1__, _hooks_useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const DateRangePickerInput = (props)=>{
    const { fromName , toName , saveFormat , defaultValue , required: requriedProp , ...rest } = props;
    const { value , error , required , onBlur , onAccept  } = useDateRangePickerInput({
        fromName,
        toName,
        saveFormat,
        defaultValue,
        required: requriedProp
    });
    return /*#__PURE__*/ _jsx(DateRangePickerInputView, {
        ...rest,
        value: value,
        required: required,
        onAccept: onAccept,
        error: !!error,
        helperText: error,
        slotProps: {
            field: {
                slotProps: {
                    field: {
                        onBlur
                    }
                }
            }
        }
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (DateRangePickerInput)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ DEFAULT_SAVE_FORMAT)
/* harmony export */ });
const DEFAULT_SAVE_FORMAT = "yyyy-MM-dd";


/***/ }),

/***/ 19141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27074);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_0__]);
_packages_helpers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getDateFromRangeValue = (params)=>{
    const { value  } = params;
    const isConvertableToDate = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_0__/* .getIsConvertableToDate */ .Be)(value);
    if (!value || !isConvertableToDate) return undefined;
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isDate)(value)) {
        /** It's important to return the same Date instance we receive
     * because we want to show an empty string after the separator
     * in the text field if the user selects only the start date,
     * but the react-date-range lib passes the same Date instance
     * in the end date instead of undefined or null, so we compare
     * Date objects to check whether they are the same. */ return value;
    }
    const dateWithUserTimezone = new Date(value);
    const timezoneOffset = dateWithUserTimezone.getTimezoneOffset();
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.addMinutes)(dateWithUserTimezone, timezoneOffset);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDateFromRangeValue);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _getDateFromRangeValue__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _getDateFromRangeValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getDateFromRangeValue__WEBPACK_IMPORTED_MODULE_0__]);
_getDateFromRangeValue__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 38722:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* reexport safe */ _useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24432);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__]);
_useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24432:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useDateRangePickerInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27074);
/* harmony import */ var hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25611);
/* harmony import */ var inputs_DateRangePickerInput_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89932);
/* harmony import */ var inputs_DateRangePickerInput_helpers_getDateFromRangeValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90206);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_1__, hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_2__, inputs_DateRangePickerInput_helpers_getDateFromRangeValue__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_1__, hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_2__, inputs_DateRangePickerInput_helpers_getDateFromRangeValue__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const useDateRangePickerInput = (props)=>{
    const { fromName , toName , saveFormat =inputs_DateRangePickerInput_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_SAVE_FORMAT */ .u , defaultValue , required: requiredFromProps , onBlur , onAccept  } = props;
    const fromDefaultValue = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(defaultValue, fromName);
    const toDefaultValue = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(defaultValue, toName);
    const fromControllerProps = {
        ...props,
        name: fromName,
        defaultValue: fromDefaultValue
    };
    const toControllerProps = {
        ...props,
        name: toName,
        defaultValue: toDefaultValue
    };
    const { field: { onChange: onFromChange , onBlur: onFromBlur  } , fieldState: { error: fromError  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useController)(fromControllerProps);
    const { field: { onChange: onToChange , onBlur: onToBlur  } , fieldState: { error: toError  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useController)(toControllerProps);
    const [fromValue, toValue] = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useWatch)({
        name: [
            fromName,
            toName
        ]
    });
    const isFromInputRequired = (0,hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_2__/* .useIsRequiredInput */ .D)(fromControllerProps);
    const isToInputRequired = (0,hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_2__/* .useIsRequiredInput */ .D)(toControllerProps);
    const isRequired = isFromInputRequired || isToInputRequired || requiredFromProps;
    const handleValueChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue)=>{
        const { startDate , endDate  } = newValue;
        const formattedFromValue = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getFormattedDateValue */ .ww)({
            value: startDate,
            format: saveFormat,
            fallbackValue: ""
        });
        const formattedToValue = (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getFormattedDateValue */ .ww)({
            value: endDate,
            format: saveFormat,
            fallbackValue: ""
        });
        onFromChange(formattedFromValue);
        onToChange(formattedToValue);
        onAccept?.(newValue);
    }, [
        onAccept,
        onFromChange,
        onToChange,
        saveFormat
    ]);
    const handleInputBlur = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // we do blur to make inputs touched for showing validation errors
        onFromBlur();
        onToBlur();
        onBlur?.(e);
    }, [
        onBlur,
        onFromBlur,
        onToBlur
    ]);
    const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            startDate: (0,inputs_DateRangePickerInput_helpers_getDateFromRangeValue__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
                value: fromValue
            }),
            endDate: (0,inputs_DateRangePickerInput_helpers_getDateFromRangeValue__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
                value: toValue
            })
        }), [
        fromValue,
        toValue
    ]);
    const fromErrorMessage = fromError?.message;
    const toErrorMessage = toError?.message;
    const error = (fromErrorMessage || toErrorMessage) ?? null;
    return {
        value,
        error,
        required: isRequired,
        onAccept: handleValueChange,
        onBlur: handleInputBlur
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.u)
/* harmony export */ });
/* harmony import */ var _DateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41702);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89932);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__]);
_DateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45386:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ SelectField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49752);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var buttons_ResetIconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97455);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94605);
/* harmony import */ var hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25611);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45641);
/* harmony import */ var templates_InputTemplate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65754);
/* harmony import */ var views_PlaceholderView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89892);
/* harmony import */ var views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48630);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, buttons_ResetIconButton__WEBPACK_IMPORTED_MODULE_5__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__, hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_9__, templates_InputTemplate__WEBPACK_IMPORTED_MODULE_10__, views_PlaceholderView__WEBPACK_IMPORTED_MODULE_11__, views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_12__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, buttons_ResetIconButton__WEBPACK_IMPORTED_MODULE_5__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__, hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_9__, templates_InputTemplate__WEBPACK_IMPORTED_MODULE_10__, views_PlaceholderView__WEBPACK_IMPORTED_MODULE_11__, views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const IconComponent = (props)=>{
    const { className  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_6__/* .IcoMoon */ .n, {
        icon: "arrow-drop-down",
        className: className
    });
};
// TODO: replace with project fetchClient
const fetchClient = (params)=>{
    const { pathname , source =""  } = params;
    return axios__WEBPACK_IMPORTED_MODULE_4___default().get(`/${pathname}/${source}`);
};
function SelectField(props) {
    const { id , label , items =[] , className , sx , helperText , name , pathname , controllerProps , selectProps ={} , startIcon , multiple , disabled , required: requiredFromProps , resettable =true , ...rest } = props;
    const { required: requiredFromSelectProps  } = selectProps;
    const resetValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>multiple ? [] : "", [
        multiple
    ]);
    const finalControllerProps = {
        name,
        ...controllerProps
    };
    const { field: { value =resetValue , onChange , ref  } , fieldState: { error  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useController)(finalControllerProps);
    const isInputRequired = (0,hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_7__/* .useIsRequiredInput */ .D)(finalControllerProps);
    const isRequired = isInputRequired || requiredFromProps || requiredFromSelectProps;
    const isValueEmpty = lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default()(value, resetValue);
    const fetchedOptions = !!pathname;
    const fetchData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!pathname) return [];
        const { data: { data  }  } = await fetchClient({
            pathname,
            source: name
        });
        return Array.isArray(data) ? data : [];
    }, [
        name,
        pathname
    ]);
    const { data , isLoading  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)({
        queryKey: [
            pathname,
            name
        ],
        queryFn: fetchData,
        enabled: fetchedOptions,
        cacheTime: 15 * 1000,
        initialData: []
    });
    const finalItems = pathname && Array.isArray(data) ? data : items;
    const handleResetClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.stopPropagation();
        onChange(resetValue);
    }, [
        resetValue,
        onChange
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_InputTemplate__WEBPACK_IMPORTED_MODULE_10__/* .InputTemplate */ .c, {
        id: id || "",
        label: label,
        required: isRequired,
        className: className,
        sx: sx,
        error: Boolean(error),
        helperText: error?.message || helperText,
        value: value,
        startIcon: startIcon,
        disabled: disabled,
        ...rest,
        children: (inputProps)=>{
            // Select doesn't support placeholder, but we can do it this way
            const renderValue = (selected)=>{
                if (selected === resetValue) {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_PlaceholderView__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        disabled: disabled,
                        children: inputProps.placeholder
                    });
                }
                if (Array.isArray(selected)) {
                    if (!selected.length) {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_PlaceholderView__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            disabled: disabled,
                            children: inputProps.placeholder
                        });
                    }
                    return selected.join(", ");
                }
                return String(selected);
            };
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Select, {
                displayEmpty: true,
                renderValue: renderValue,
                id: inputProps.id,
                value: value,
                placeholder: inputProps.placeholder,
                onChange: onChange,
                fullWidth: true,
                ref: ref,
                startAdornment: inputProps.startAdornment,
                IconComponent: IconComponent,
                endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    sx: {
                        position: "absolute",
                        right: 36
                    },
                    children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {
                        color: "inherit",
                        size: 20
                    }) : !isValueEmpty && resettable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_ResetIconButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        onClick: handleResetClick,
                        disabled: disabled
                    })
                }),
                error: inputProps.error,
                multiple: multiple,
                ...selectProps,
                children: finalItems.map((item)=>{
                    const { title , value  } = item;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                        value: value,
                        children: title
                    }, JSON.stringify(title) + JSON.stringify(value));
                })
            });
        }
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (SelectField)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53790:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* reexport safe */ _SelectField__WEBPACK_IMPORTED_MODULE_0__.m)
/* harmony export */ });
/* harmony import */ var _SelectField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45386);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SelectField__WEBPACK_IMPORTED_MODULE_0__]);
_SelectField__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93531:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ AutocompleteInputView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94605);
/* harmony import */ var _DropdownGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94958);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50396);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, _DropdownGroup__WEBPACK_IMPORTED_MODULE_4__, _Field__WEBPACK_IMPORTED_MODULE_5__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__, _DropdownGroup__WEBPACK_IMPORTED_MODULE_4__, _Field__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const popperOffsetModifier = {
    name: "offset",
    enabled: true,
    options: {
        offset: [
            0,
            4
        ]
    }
};
const AutocompleteInputViewWithRef = (props, ref)=>{
    const { label , startIcon , error , helperText , placeholder , required , withoutHelperTextSpace , loading , componentsProps , slots , slotProps , ...rest } = props;
    const { getOptionLabel  } = rest;
    const { popper: popperComponentProps  } = componentsProps || {};
    const { modifiers: popperModifiers = []  } = popperComponentProps || {};
    const { field: FieldSlot = _Field__WEBPACK_IMPORTED_MODULE_5__/* .Field */ .g  } = slots || {};
    const { field: fieldSlotProps  } = slotProps || {};
    const renderGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params)=>{
        const { key , group , children  } = params;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropdownGroup__WEBPACK_IMPORTED_MODULE_4__/* .DropdownGroup */ .p, {
            title: group,
            children: children
        }, key);
    }, []);
    const renderTags = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value, getTagProps)=>{
        return value.map((option, index)=>{
            const { key , ...tagProps } = getTagProps({
                index
            });
            const label = getOptionLabel?.(option);
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Chip, {
                ...tagProps,
                label: label,
                size: "small"
            }, key);
        });
    }, [
        getOptionLabel
    ]);
    const renderInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldSlot, {
            ref: ref,
            label: label,
            withoutHelperTextSpace: withoutHelperTextSpace,
            startIcon: startIcon,
            error: error,
            helperText: helperText,
            placeholder: placeholder,
            required: required,
            ...params,
            ...fieldSlotProps
        });
    }, [
        FieldSlot,
        error,
        helperText,
        label,
        placeholder,
        ref,
        required,
        startIcon,
        withoutHelperTextSpace,
        fieldSlotProps
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Autocomplete, {
        blurOnSelect: true,
        componentsProps: {
            ...componentsProps,
            popper: {
                ...popperComponentProps,
                modifiers: [
                    ...popperModifiers,
                    popperOffsetModifier
                ]
            }
        },
        popupIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_3__/* .IcoMoon */ .n, {
            icon: "arrow-drop-down"
        }),
        renderGroup: renderGroup,
        renderTags: renderTags,
        renderInput: renderInput,
        ...rest
    });
};
const AutocompleteInputView = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(AutocompleteInputViewWithRef);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94958:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ DropdownGroup)
/* harmony export */ });
/* unused harmony export AutocompleteDropdownGroupClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19594);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_3__]);
theme_index__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const PREFIX = "AutocompleteDropdownGroup";
const AutocompleteDropdownGroupClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "root",
    "titleWrapper",
    "title",
    "childrenWrapper",
    "divider"
]);
const StyledRoot = (0,theme_index__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    name: PREFIX,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`&.${AutocompleteDropdownGroupClasses.root}`]: {
            "&:last-child": {
                [`& > .${AutocompleteDropdownGroupClasses.divider}`]: {
                    display: "none"
                }
            }
        },
        [`& .${AutocompleteDropdownGroupClasses.titleWrapper}`]: {
            padding: theme.spacing(1, 2)
        },
        [`& .${AutocompleteDropdownGroupClasses.divider}`]: {
            margin: theme.spacing(1, 0)
        }
    };
});
/**
 * It works good with our AutocompleteInput styles only. So the component is in folder of AutocompleteInputView.
 * Mui Select has no groups. With default MUI Autocomplete it has other view.
 */ const DropdownGroup = (props)=>{
    const { title , children  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledRoot, {
        component: "li",
        className: AutocompleteDropdownGroupClasses.root,
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: AutocompleteDropdownGroupClasses.titleWrapper,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                    variant: "body2",
                    color: "text.primary",
                    className: AutocompleteDropdownGroupClasses.title,
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                className: AutocompleteDropdownGroupClasses.childrenWrapper,
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                className: AutocompleteDropdownGroupClasses.divider
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var templates_InputTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65754);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([templates_InputTemplate__WEBPACK_IMPORTED_MODULE_4__]);
templates_InputTemplate__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Field = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { label , withoutHelperTextSpace , startIcon , error , helperText , placeholder , required , loading , ...renderInputParams } = props;
    const { id , InputProps , fullWidth  } = renderInputParams;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_InputTemplate__WEBPACK_IMPORTED_MODULE_4__/* .InputTemplate */ .c, {
        label: typeof label === "string" ? t(label) : label,
        id: id,
        required: required,
        placeholder: placeholder,
        fullWidth: fullWidth,
        helperText: helperText,
        error: error,
        startIcon: startIcon,
        withoutHelperTextSpace: withoutHelperTextSpace,
        children: ({ error , id , startAdornment , placeholder  })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                ...renderInputParams,
                inputRef: ref,
                error: error,
                id: id,
                placeholder: placeholder,
                variant: "outlined",
                InputProps: {
                    ...InputProps,
                    startAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            startAdornment,
                            InputProps.startAdornment
                        ]
                    }),
                    endAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {
                                color: "inherit",
                                size: 20
                            }) : null,
                            InputProps.endAdornment
                        ]
                    })
                }
            });
        }
    });
});
Field.displayName = "AutocompleteInputViewField";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95614:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* reexport safe */ _AutocompleteInputView__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _AutocompleteInputView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93531);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50396);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AutocompleteInputView__WEBPACK_IMPORTED_MODULE_0__, _Field__WEBPACK_IMPORTED_MODULE_1__]);
([_AutocompleteInputView__WEBPACK_IMPORTED_MODULE_0__, _Field__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84607:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_getFormattedDateRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89382);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53127);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41682);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15231);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89617);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2509);
/* harmony import */ var _components_Picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70432);
/* harmony import */ var _components_Popper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48694);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61656);
/* harmony import */ var _helpers_getFormattedToolbarLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27952);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Field__WEBPACK_IMPORTED_MODULE_6__, _components_Footer__WEBPACK_IMPORTED_MODULE_7__, _components_Layout__WEBPACK_IMPORTED_MODULE_8__, _components_Modal__WEBPACK_IMPORTED_MODULE_9__, _components_Picker__WEBPACK_IMPORTED_MODULE_10__]);
([_components_Field__WEBPACK_IMPORTED_MODULE_6__, _components_Footer__WEBPACK_IMPORTED_MODULE_7__, _components_Layout__WEBPACK_IMPORTED_MODULE_8__, _components_Modal__WEBPACK_IMPORTED_MODULE_9__, _components_Picker__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const DateRangePickerInputView = (props)=>{
    const { sx , className , value: valueProp , focusedDateBehavior , separator =" - " , ariaLabels , dateDisplayFormat ="dd MMM yyyy" , toolbarFormat ="EEE, MMM d" , monthDisplayFormat , showMonthAndYearPickers =false , view , closeOnSelect , direction , color , months =2 , withoutHelperTextSpace , required , disabled , loadingRanges =[] , error =false , helperText , label , dayDisplayFormat , disabledDates , disabledDay , id , locale , maxDate , minDate , placeholder , weekStartsOn , slotProps , slots , weekdayDisplayFormat , onShownDateChange , onChange , onOpen , onClose , onAccept , open: openProp = false  } = props;
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .q)();
    const { picker: PickerSlot = _components_Picker__WEBPACK_IMPORTED_MODULE_10__/* .Picker */ .cW , field: FieldSlot = _components_Field__WEBPACK_IMPORTED_MODULE_6__/* .Field */ .g , footer: FooterSlot = _components_Footer__WEBPACK_IMPORTED_MODULE_7__/* .Footer */ .$ , layout: LayoutSlot = _components_Layout__WEBPACK_IMPORTED_MODULE_8__/* .Layout */ .A , modal: ModalSlot = _components_Modal__WEBPACK_IMPORTED_MODULE_9__/* .Modal */ .u_ , popper: PopperSlot = _components_Popper__WEBPACK_IMPORTED_MODULE_11__/* .Popper */ .r  } = slots || {};
    const { picker: pickerSlotProps , field: fieldSlotProps , footer: footerSlotProps , layout: layoutSlotProps , modal: modalSlotProps , popper: popperSlotProps  } = slotProps || {};
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(openProp);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(valueProp);
    const { startDate , endDate  } = value;
    const prevAcceptedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(value);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue((prevValue)=>lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(prevValue, valueProp) ? prevValue : valueProp);
        prevAcceptedValue.current = valueProp;
    }, [
        valueProp
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setOpen(openProp);
    }, [
        openProp
    ]);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(theme.breakpoints.down("md"));
    const isViewPassed = view !== undefined;
    const responsiveView = isMobile ? "modal" : "popper";
    const finalView = isViewPassed ? view : responsiveView;
    const isModal = finalView === "modal";
    const finalMonths = isModal ? 1 : months;
    const isCloseOnSelectPassed = closeOnSelect !== undefined;
    const finalCloseOnSelect = isCloseOnSelectPassed ? closeOnSelect : !isModal;
    const toolbarLabel = (0,_helpers_getFormattedToolbarLabel__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)({
        startDate,
        endDate,
        separator,
        format: toolbarFormat
    });
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        if (disabled) return;
        setValue(value);
        onChange?.(value);
    }, [
        disabled,
        onChange
    ]);
    const handleOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (open) return;
        setOpen(true);
        onOpen?.();
    }, [
        open,
        onOpen
    ]);
    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!open) return;
        setOpen(false);
        onClose?.();
    }, [
        open,
        onClose
    ]);
    const handleAccept = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (disabled) return;
        handleClose();
        onAccept?.(value);
        prevAcceptedValue.current = value;
    }, [
        value,
        disabled,
        handleClose,
        onAccept
    ]);
    const handleCancel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        handleChange(prevAcceptedValue.current);
        handleClose();
    }, [
        handleChange,
        handleClose
    ]);
    const handleReset = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const emptyValue = {
            startDate: undefined,
            endDate: undefined
        };
        handleChange(emptyValue);
        onAccept?.(emptyValue);
    }, [
        handleChange,
        onAccept
    ]);
    const handlePopperClickAway = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        handleAccept();
    }, [
        handleAccept
    ]);
    const handleDialogClickAway = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        handleCancel();
    }, [
        handleCancel
    ]);
    const handleTextFieldClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (disabled) return;
        if (open) {
            handleAccept();
            return;
        }
        handleOpen();
    }, [
        open,
        disabled,
        handleOpen,
        handleAccept
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { startDate: prevStartDate , endDate: prevEndDate  } = prevAcceptedValue.current;
        const isFullRangeSelected = startDate && endDate;
        const isNewlySelectedRange = !lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()([
            startDate,
            endDate
        ], [
            prevStartDate,
            prevEndDate
        ]);
        const shouldCloseAutomatically = finalCloseOnSelect && open && isFullRangeSelected && isNewlySelectedRange;
        if (shouldCloseAutomatically) {
            handleAccept();
        }
    }, [
        open,
        startDate,
        endDate,
        finalCloseOnSelect,
        handleAccept
    ]);
    const formattedFieldValue = (0,helpers_getFormattedDateRange__WEBPACK_IMPORTED_MODULE_3__/* .getFormattedDateRange */ .s)({
        startDate,
        endDate,
        separator,
        dateDisplayFormat
    });
    const content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LayoutSlot, {
        ...layoutSlotProps,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PickerSlot, {
                value: value,
                onChange: handleChange,
                ariaLabels: ariaLabels,
                color: color,
                dateDisplayFormat: dateDisplayFormat,
                dayDisplayFormat: dayDisplayFormat,
                direction: direction,
                disabledDates: disabledDates,
                disabledDay: disabledDay,
                focusedDateBehavior: focusedDateBehavior,
                loadingRanges: loadingRanges,
                locale: locale,
                maxDate: maxDate,
                minDate: minDate,
                monthDisplayFormat: monthDisplayFormat,
                months: finalMonths,
                onShownDateChange: onShownDateChange,
                showMonthAndYearPickers: showMonthAndYearPickers,
                weekStartsOn: weekStartsOn,
                weekdayDisplayFormat: weekdayDisplayFormat,
                ...pickerSlotProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterSlot, {
                ...footerSlotProps
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context__WEBPACK_IMPORTED_MODULE_12__/* .DateRangePickerContextProvider */ .K, {
        value: {
            value,
            isOpened: open,
            setValue: handleChange,
            resetValue: handleReset,
            open: handleOpen,
            close: handleClose,
            accept: handleAccept,
            cancel: handleCancel,
            view: finalView
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ClickAwayListener, {
            onClickAway: isModal ? handleDialogClickAway : handlePopperClickAway,
            mouseEvent: open ? "onMouseDown" : false,
            touchEvent: open ? "onTouchEnd" : false,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                sx: sx,
                className: className,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldSlot, {
                        id: id,
                        isActive: open,
                        label: label ?? translate.root("inputs.dateRangePickerInput.date_range"),
                        error: error,
                        disabled: disabled,
                        helperText: helperText,
                        withoutHelperTextSpace: withoutHelperTextSpace,
                        placeholder: placeholder,
                        required: required,
                        ...fieldSlotProps,
                        slotProps: {
                            ...fieldSlotProps?.slotProps,
                            field: {
                                ref: setAnchorEl,
                                value: formattedFieldValue,
                                onClick: handleTextFieldClick,
                                ...fieldSlotProps?.slotProps?.field
                            }
                        }
                    }),
                    isModal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalSlot, {
                        open: open,
                        label: toolbarLabel,
                        content: content,
                        onClose: handleDialogClickAway,
                        ...modalSlotProps
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PopperSlot, {
                        open: open,
                        anchorEl: anchorEl,
                        ...popperSlotProps,
                        children: content
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateRangePickerInputView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var buttons_ResetIconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97455);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16593);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94605);
/* harmony import */ var views_DateRangePickerInputView_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61656);
/* harmony import */ var views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48630);
/* harmony import */ var _StyledField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70829);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([buttons_ResetIconButton__WEBPACK_IMPORTED_MODULE_3__, clsx__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_7__, _StyledField__WEBPACK_IMPORTED_MODULE_8__]);
([buttons_ResetIconButton__WEBPACK_IMPORTED_MODULE_3__, clsx__WEBPACK_IMPORTED_MODULE_4__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__, views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_7__, _StyledField__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Field = (props)=>{
    const { slots , slotProps , isActive , label ="" , startIcon =/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_5__/* .IcoMoon */ .n, {
        icon: "calendar"
    }) , error =false , helperText =null , ...rest } = props;
    const { disabled  } = rest;
    const { field: FieldSlot = _mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField  } = slots || {};
    const { field: fieldSlotProps  } = slotProps || {};
    const { className: fieldClassName , inputProps , InputProps , disabled: fieldDisabled , ...restFieldSlotProps } = fieldSlotProps || {};
    const { resetValue  } = (0,views_DateRangePickerInputView_context__WEBPACK_IMPORTED_MODULE_6__/* .useDateRangePickerContext */ .C)();
    const handleResetClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        // Stop propagation to not to receive field click event
        e.stopPropagation();
        resetValue();
    }, [
        resetValue
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StyledField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        label: label,
        startIcon: startIcon,
        error: error,
        helperText: helperText,
        ...rest,
        children: ({ startAdornment , ...restTemplateProps })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldSlot, {
                ...restTemplateProps,
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.clsx)(fieldClassName, _StyledField__WEBPACK_IMPORTED_MODULE_8__/* .FieldClasses.field */ .x.field, {
                    [_StyledField__WEBPACK_IMPORTED_MODULE_8__/* .FieldClasses.activeField */ .x.activeField]: isActive
                }),
                inputProps: {
                    readOnly: true,
                    ...inputProps
                },
                InputProps: {
                    startAdornment,
                    endAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputAdornment, {
                        position: "end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(buttons_ResetIconButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                className: _StyledField__WEBPACK_IMPORTED_MODULE_8__/* .FieldClasses.resetButton */ .x.resetButton,
                                disabled: disabled || fieldDisabled,
                                onClick: handleResetClick
                            })
                        })
                    }),
                    ...InputProps
                },
                disabled: disabled || fieldDisabled,
                ...restFieldSlotProps
            })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "x": () => (/* binding */ FieldClasses)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var templates_InputTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65754);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62430);
/* harmony import */ var views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48630);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([templates_InputTemplate__WEBPACK_IMPORTED_MODULE_1__, theme_index__WEBPACK_IMPORTED_MODULE_2__, views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_3__]);
([templates_InputTemplate__WEBPACK_IMPORTED_MODULE_1__, theme_index__WEBPACK_IMPORTED_MODULE_2__, views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const PREFIX = "DateRangePickerField";
const FieldClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClasses)(PREFIX, [
    "field",
    "activeField",
    "resetButton"
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,theme_index__WEBPACK_IMPORTED_MODULE_2__/* .styled */ .zo)(templates_InputTemplate__WEBPACK_IMPORTED_MODULE_1__/* .InputTemplate */ .c, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`& .${FieldClasses.field}`]: {
            width: "100%",
            "&:hover": {
                [`& .${FieldClasses.resetButton}`]: {
                    visibility: "visible",
                    [`& + .${views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_3__/* .SeveralAdornmentsClasses.divider */ .L.divider}`]: {
                        visibility: "visible"
                    }
                }
            }
        },
        [`& .${views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_3__/* .SeveralAdornmentsClasses.root */ .L.root}`]: {
            position: "relative"
        },
        [`& .${FieldClasses.resetButton}`]: {
            visibility: "hidden",
            position: "absolute",
            transform: "translateX(-100%)",
            background: theme.palette.common.white,
            [`& + .${views_SeveralAdornments__WEBPACK_IMPORTED_MODULE_3__/* .SeveralAdornmentsClasses.divider */ .L.divider}`]: {
                visibility: "hidden"
            },
            "&:hover": {
                background: theme.palette.actions.background
            }
        },
        [`& .${FieldClasses.activeField}`]: {
            [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_0__.inputAdornmentClasses.positionStart}`]: {
                color: theme.palette.primary.main
            },
            [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_0__.outlinedInputClasses.root}`]: {
                [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_0__.outlinedInputClasses.notchedOutline}`]: {
                    border: `1px solid ${theme.palette.primary.main}`
                },
                "&:hover": {
                    [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_0__.outlinedInputClasses.notchedOutline}`]: {
                        border: `1px solid ${theme.palette.primary.main}`
                    }
                }
            }
        }
    };
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41682:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_0__.g)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43184);
/* harmony import */ var _StyledField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70829);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Field__WEBPACK_IMPORTED_MODULE_0__, _StyledField__WEBPACK_IMPORTED_MODULE_1__]);
([_Field__WEBPACK_IMPORTED_MODULE_0__, _StyledField__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6438:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ClearButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78858);
/* harmony import */ var _components_CloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33211);
/* harmony import */ var _StyledFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46119);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61656);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ClearButton__WEBPACK_IMPORTED_MODULE_3__, _components_CloseButton__WEBPACK_IMPORTED_MODULE_4__, _StyledFooter__WEBPACK_IMPORTED_MODULE_5__]);
([_components_ClearButton__WEBPACK_IMPORTED_MODULE_3__, _components_CloseButton__WEBPACK_IMPORTED_MODULE_4__, _StyledFooter__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const componentsByActions = {
    clear: _components_ClearButton__WEBPACK_IMPORTED_MODULE_3__/* .ClearButton */ .C,
    close: _components_CloseButton__WEBPACK_IMPORTED_MODULE_4__/* .CloseButton */ .P
};
const defaultActions = (params)=>{
    const { view  } = params;
    return view === "modal" ? [
        "clear"
    ] : [
        "clear",
        "close"
    ];
};
const Footer = (props)=>{
    const { subtitle , actions =defaultActions  } = props;
    const context = (0,_context__WEBPACK_IMPORTED_MODULE_6__/* .useDateRangePickerContext */ .C)();
    const finalActions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return Array.isArray(actions) ? actions : actions(context);
    }, [
        actions,
        context
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledFooter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        className: _StyledFooter__WEBPACK_IMPORTED_MODULE_5__/* .FooterClasses.root */ .G.root,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                children: subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    variant: "body2",
                    className: _StyledFooter__WEBPACK_IMPORTED_MODULE_5__/* .FooterClasses.subtitle */ .G.subtitle,
                    children: subtitle
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                className: _StyledFooter__WEBPACK_IMPORTED_MODULE_5__/* .FooterClasses.actions */ .G.actions,
                children: finalActions.map((action, index)=>{
                    const Component = componentsByActions[action];
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {}, index);
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46119:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ FooterClasses),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_1__]);
theme_index__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const PREFIX = "DateRangePickerFooter";
const FooterClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClasses)(PREFIX, [
    "root",
    "subtitle",
    "actions"
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,theme_index__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`&.${FooterClasses.root}`]: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: theme.spacing(3)
        },
        [`& .${FooterClasses.subtitle}`]: {
            color: theme.palette.text.secondary,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            maxWidth: 500
        },
        [`& .${FooterClasses.actions}`]: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1)
        }
    };
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ ClearButton)
/* harmony export */ });
/* unused harmony export ClearButtonClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16593);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62430);
/* harmony import */ var views_DateRangePickerInputView_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61656);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_4__]);
([clsx__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const PREFIX = "DateRangePickerClearButton";
const ClearButtonClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "root"
]);
const StyledButton = (0,theme_index__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>{
    return {
        [`&.${ClearButtonClasses.root}`]: {
            whiteSpace: "nowrap",
            textDecoration: "underline"
        }
    };
});
const ClearButton = (props)=>{
    const { className , ...rest } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)();
    const { resetValue  } = (0,views_DateRangePickerInputView_context__WEBPACK_IMPORTED_MODULE_5__/* .useDateRangePickerContext */ .C)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
        variant: "text",
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)(className, ClearButtonClasses.root),
        onClick: resetValue,
        ...rest,
        children: translate.root("buttons.clear_dates")
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78858:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _ClearButton__WEBPACK_IMPORTED_MODULE_0__.C)
/* harmony export */ });
/* harmony import */ var _ClearButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70535);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ClearButton__WEBPACK_IMPORTED_MODULE_0__]);
_ClearButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66799:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ CloseButton)
/* harmony export */ });
/* unused harmony export CloseButtonClasses */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16593);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92552);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62430);
/* harmony import */ var views_DateRangePickerInputView_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61656);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_4__]);
([clsx__WEBPACK_IMPORTED_MODULE_2__, hooks_index__WEBPACK_IMPORTED_MODULE_3__, theme_index__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const PREFIX = "DateRangePickerCloseButton";
const CloseButtonClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.generateUtilityClasses)(PREFIX, [
    "root"
]);
const StyledButton = (0,theme_index__WEBPACK_IMPORTED_MODULE_4__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(()=>{
    return {
        [`&.${CloseButtonClasses.root}`]: {
            whiteSpace: "nowrap"
        }
    };
});
const CloseButton = (props)=>{
    const { className , ...rest } = props;
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_3__/* .useTranslate */ .qM)();
    const { accept  } = (0,views_DateRangePickerInputView_context__WEBPACK_IMPORTED_MODULE_5__/* .useDateRangePickerContext */ .C)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
        variant: "contained",
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)(className, CloseButtonClasses.root),
        onClick: accept,
        ...rest,
        children: translate.root("buttons.close")
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33211:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _CloseButton__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66799);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CloseButton__WEBPACK_IMPORTED_MODULE_0__]);
_CloseButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__.$)
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6438);
/* harmony import */ var _StyledFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46119);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer__WEBPACK_IMPORTED_MODULE_0__, _StyledFooter__WEBPACK_IMPORTED_MODULE_1__]);
([_Footer__WEBPACK_IMPORTED_MODULE_0__, _StyledFooter__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97591:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16593);
/* harmony import */ var views_DateRangePickerInputView_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61656);
/* harmony import */ var _StyledLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_1__, _StyledLayout__WEBPACK_IMPORTED_MODULE_3__]);
([clsx__WEBPACK_IMPORTED_MODULE_1__, _StyledLayout__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Layout = (props)=>{
    const { className , ...rest } = props;
    const { view  } = (0,views_DateRangePickerInputView_context__WEBPACK_IMPORTED_MODULE_2__/* .useDateRangePickerContext */ .C)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StyledLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ...rest,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.clsx)(className, _StyledLayout__WEBPACK_IMPORTED_MODULE_3__/* .LayoutClasses.root */ .k.root, {
            [_StyledLayout__WEBPACK_IMPORTED_MODULE_3__/* .LayoutClasses.modalView */ .k.modalView]: view === "modal",
            [_StyledLayout__WEBPACK_IMPORTED_MODULE_3__/* .LayoutClasses.popperView */ .k.popperView]: view === "popper"
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "k": () => (/* binding */ LayoutClasses)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_1__]);
theme_index__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const PREFIX = "DateRangePickerLayout";
const LayoutClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClasses)(PREFIX, [
    "root",
    "modalView",
    "popperView"
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,theme_index__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`&.${LayoutClasses.root}`]: {
            background: theme.palette.common.white
        },
        [`&.${LayoutClasses.modalView}`]: {
            padding: theme.spacing(0, 2)
        },
        [`&.${LayoutClasses.popperView}`]: {
            padding: theme.spacing(2)
        }
    };
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89617:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97591);
/* harmony import */ var _StyledLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_0__, _StyledLayout__WEBPACK_IMPORTED_MODULE_1__]);
([_Layout__WEBPACK_IMPORTED_MODULE_0__, _StyledLayout__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92552);
/* harmony import */ var views_DateRangePickerInputView_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61656);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54738);
/* harmony import */ var _StyledModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_index__WEBPACK_IMPORTED_MODULE_2__, _StyledModal__WEBPACK_IMPORTED_MODULE_4__]);
([hooks_index__WEBPACK_IMPORTED_MODULE_2__, _StyledModal__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Modal = (props)=>{
    const { label , content , ...dialogProps } = props;
    const { accept , cancel  } = (0,views_DateRangePickerInputView_context__WEBPACK_IMPORTED_MODULE_3__/* .useDateRangePickerContext */ .C)();
    const translate = (0,hooks_index__WEBPACK_IMPORTED_MODULE_2__/* .useTranslate */ .qM)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...dialogProps,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogTitle, {
                component: "h4",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogContent, {
                children: content
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogActions, {
                sx: {
                    padding: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        variant: "outlined",
                        sx: {
                            flexBasis: "50%"
                        },
                        onClick: cancel,
                        "data-testid": _constants__WEBPACK_IMPORTED_MODULE_5__/* .CANCEL_BUTTON_TEST_ID */ .z,
                        children: translate.root("buttons.cancel")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        variant: "contained",
                        sx: {
                            flexBasis: "50%"
                        },
                        onClick: accept,
                        "data-testid": _constants__WEBPACK_IMPORTED_MODULE_5__/* .APPLY_BUTTON_TEST_ID */ .N,
                        children: translate.root("buttons.apply")
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_1__]);
theme_index__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const PREFIX = "DateRangePickerModal";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,theme_index__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Dialog, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_0__.dialogClasses.paper}`]: {
            width: "auto",
            minWidth: "auto"
        },
        [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_0__.dialogTitleClasses.root}`]: {
            ...theme.typography.h5,
            padding: theme.spacing(2, 2, 3)
        },
        [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_0__.dialogContentClasses.root}`]: {
            padding: 0
        }
    };
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 54738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ APPLY_BUTTON_TEST_ID),
/* harmony export */   "z": () => (/* binding */ CANCEL_BUTTON_TEST_ID)
/* harmony export */ });
const CANCEL_BUTTON_TEST_ID = "picker-modal-cancel";
const APPLY_BUTTON_TEST_ID = "picker-modal-apply";


/***/ }),

/***/ 2509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u_": () => (/* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63760);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Modal__WEBPACK_IMPORTED_MODULE_0__]);
_Modal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53143:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ MonthLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16593);
/* harmony import */ var _StyledMonthLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67090);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_2__, _StyledMonthLoader__WEBPACK_IMPORTED_MODULE_3__]);
([clsx__WEBPACK_IMPORTED_MODULE_2__, _StyledMonthLoader__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const MonthLoader = (props)=>{
    const { sx , className , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StyledMonthLoader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)(_StyledMonthLoader__WEBPACK_IMPORTED_MODULE_3__/* .MonthLoaderClasses.root */ .X.root, className),
        sx: sx,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CircularProgress, {
            size: 32,
            className: _StyledMonthLoader__WEBPACK_IMPORTED_MODULE_3__/* .MonthLoaderClasses.loader */ .X.loader,
            ...rest
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67090:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ MonthLoaderClasses),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_1__]);
theme_index__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const PREFIX = "DateRangePickerMonthLoader";
const MonthLoaderClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClasses)(PREFIX, [
    "root",
    "loader"
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,theme_index__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        [`&.${MonthLoaderClasses.root}`]: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.common.white, 0.85)
        }
    };
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70300:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* reexport safe */ _MonthLoader__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _MonthLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53143);
/* harmony import */ var _StyledMonthLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67090);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MonthLoader__WEBPACK_IMPORTED_MODULE_0__, _StyledMonthLoader__WEBPACK_IMPORTED_MODULE_1__]);
([_MonthLoader__WEBPACK_IMPORTED_MODULE_0__, _StyledMonthLoader__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W_": () => (/* binding */ Navigation)
/* harmony export */ });
/* unused harmony exports LeftArrowIcon, RightArrowIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16593);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94605);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _StyledNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58734);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, _StyledNavigation__WEBPACK_IMPORTED_MODULE_6__]);
([clsx__WEBPACK_IMPORTED_MODULE_3__, custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, _StyledNavigation__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const LeftArrowIcon = (props)=>{
    const { sx , ...rest } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const isRtl = theme.direction === "rtl";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
        ...rest,
        icon: "expand-more",
        sx: {
            transform: isRtl ? "rotate(270deg)" : "rotate(90deg)",
            ...sx
        }
    });
};
const RightArrowIcon = (props)=>{
    const { sx , ...rest } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const isRtl = theme.direction === "rtl";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
        ...rest,
        icon: "expand-more",
        sx: {
            transform: isRtl ? "rotate(90deg)" : "rotate(270deg)",
            ...sx
        }
    });
};
const Navigation = (props)=>{
    const { currentFocusedDate , changeShownDate , calendarProps , className , sx , slots , slotProps  } = props;
    const { previousIconButton: PreviousIconButton = _mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton , nextIconButton: NextIconButton = _mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton , leftArrowIcon: LeftArrowIconSlot = LeftArrowIcon , rightArrowIcon: RightArrowIconSlot = RightArrowIcon  } = slots || {};
    const { previousIconButton: previousIconButtonProps , nextIconButton: nextIconButtonProps , leftArrowIcon: leftArrowIconProps , rightArrowIcon: rightArrowIconProps  } = slotProps || {};
    const { minDate , maxDate , months =2 , monthDisplayFormat , ariaLabels , direction  } = calendarProps;
    const { prevButton: prevButtonAriaLabel , nextButton: nextButtonAriaLabel  } = ariaLabels || {};
    const isPrevButtonDisabled = minDate ? (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInCalendarMonths)(currentFocusedDate, minDate) < 1 : false;
    const isNextButtonDisabled = maxDate ? (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInCalendarMonths)(maxDate, currentFocusedDate) <= months - 1 : false;
    const formattedCurrentMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(currentFocusedDate, monthDisplayFormat || "MMM yyyy");
    const isVerticalDirection = direction === "vertical";
    const moveToPrevMonth = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        changeShownDate(-1, "monthOffset");
    }, [
        changeShownDate
    ]);
    const moveToNextMonth = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        changeShownDate(+1, "monthOffset");
    }, [
        changeShownDate
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledNavigation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.clsx)(_StyledNavigation__WEBPACK_IMPORTED_MODULE_6__/* .NavigationClasses.root */ .b.root, className),
        sx: sx,
        direction: direction,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PreviousIconButton, {
                disabled: isPrevButtonDisabled,
                onClick: moveToPrevMonth,
                "aria-label": prevButtonAriaLabel,
                ...previousIconButtonProps,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LeftArrowIconSlot, {
                    ...leftArrowIconProps
                })
            }),
            isVerticalDirection && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                className: _StyledNavigation__WEBPACK_IMPORTED_MODULE_6__/* .NavigationClasses.monthName */ .b.monthName,
                children: formattedCurrentMonth
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextIconButton, {
                disabled: isNextButtonDisabled,
                onClick: moveToNextMonth,
                "aria-label": nextButtonAriaLabel,
                ...nextIconButtonProps,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RightArrowIconSlot, {
                    ...rightArrowIconProps
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58734:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "b": () => (/* binding */ NavigationClasses)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_1__]);
theme_index__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const PREFIX = "DateRangePickerNavigation";
const NavigationClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClasses)(PREFIX, [
    "root",
    "monthName"
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,theme_index__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`,
    shouldForwardProp: (p)=>{
        return p !== "direction";
    }
})(({ theme , direction  })=>{
    const isVerticalDirection = direction === "vertical";
    return {
        [`&.${NavigationClasses.root}`]: {
            height: 30,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            ...isVerticalDirection ? {
                marginBottom: theme.spacing(1)
            } : {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 5
            }
        },
        [`& .${NavigationClasses.monthName}`]: {
            ...theme.typography.body2,
            color: theme.palette.text.primary
        }
    };
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* reexport safe */ _Navigation__WEBPACK_IMPORTED_MODULE_0__.W_)
/* harmony export */ });
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87150);
/* harmony import */ var _StyledNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58734);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navigation__WEBPACK_IMPORTED_MODULE_0__, _StyledNavigation__WEBPACK_IMPORTED_MODULE_1__]);
([_Navigation__WEBPACK_IMPORTED_MODULE_0__, _StyledNavigation__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24665:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ Picker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16593);
/* harmony import */ var hooks_useDateFnsLocale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31411);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24298);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74304);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_date_range__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(32102);
/* harmony import */ var _helpers_getFocusedRange__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37786);
/* harmony import */ var _helpers_getLoadingMonthsIndexes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66285);
/* harmony import */ var _helpers_getSelectionRange__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1073);
/* harmony import */ var _StyledPicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41876);
/* harmony import */ var _MonthLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70300);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29534);
/* harmony import */ var _PickerDay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7754);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_4__, _StyledPicker__WEBPACK_IMPORTED_MODULE_11__, _MonthLoader__WEBPACK_IMPORTED_MODULE_12__, _Navigation__WEBPACK_IMPORTED_MODULE_13__, _PickerDay__WEBPACK_IMPORTED_MODULE_14__]);
([clsx__WEBPACK_IMPORTED_MODULE_4__, _StyledPicker__WEBPACK_IMPORTED_MODULE_11__, _MonthLoader__WEBPACK_IMPORTED_MODULE_12__, _Navigation__WEBPACK_IMPORTED_MODULE_13__, _PickerDay__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const Picker = (props)=>{
    const { value , focusedDateBehavior , dayDisplayFormat , direction , color , ariaLabels , loadingRanges =[] , months =2 , locale , sx , className , slots , slotProps , onShownDateChange , onChange , ...rest } = props;
    const { startDate , endDate  } = value;
    const { day: DaySlot = _PickerDay__WEBPACK_IMPORTED_MODULE_14__/* .PickerDay */ .I , navigation: NavigationSlot = _Navigation__WEBPACK_IMPORTED_MODULE_13__/* .Navigation */ .W , monthLoader: MonthLoaderSlot = _MonthLoader__WEBPACK_IMPORTED_MODULE_12__/* .MonthLoader */ .z  } = slots || {};
    const { day: daySlotProps , navigation: navigationSlotProps , monthLoader: monthLoaderSlotProps  } = slotProps || {};
    const [rootNode, setRootNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [monthsNodes, setMonthsNodes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [shownDate, setShownDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        return startDate || new Date();
    });
    const dateFnsLocale = (0,hooks_useDateFnsLocale__WEBPACK_IMPORTED_MODULE_5__/* .useDateFnsLocale */ .k)();
    const finalLocale = locale ?? dateFnsLocale;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)(theme.breakpoints.down("md"));
    const isDirectionPassed = direction !== undefined;
    const responsiveDirection = isMobile ? "vertical" : "horizontal";
    const finalDirection = isDirectionPassed ? direction : responsiveDirection;
    const focusedRange = (0,_helpers_getFocusedRange__WEBPACK_IMPORTED_MODULE_15__/* .getFocusedRange */ .m)({
        startDate,
        endDate,
        focusedDateBehavior
    });
    const customColor = color || theme.palette.primary.light;
    const selectionRange = (0,_helpers_getSelectionRange__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)({
        startDate,
        endDate,
        key: _constants__WEBPACK_IMPORTED_MODULE_17__/* .MAIN_RANGE_KEY */ .v
    });
    const handleSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((params)=>{
        const { startDate: newStartDate , endDate: newEndDate  } = params[_constants__WEBPACK_IMPORTED_MODULE_17__/* .MAIN_RANGE_KEY */ .v] || {};
        /**
       * When the end date is not selected, `react-date-range` returns the same instance
       * of `Date` object as a start date, however, when the end date is equal to the start date
       * the instances will be different, even with the same date they represent
       */ const isEndDateSelected = newStartDate !== newEndDate;
        onChange({
            startDate: newStartDate,
            endDate: isEndDateSelected ? newEndDate : undefined
        });
    }, [
        onChange
    ]);
    const navigatorRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((currentMonthDate, changeShownDate, calendarProps)=>{
        /**
       * We need to have an actual current shown date in the state,
       * so we set it from the `navigatorRenderer` because
       * `onShownDateChange` works only when user manually
       * switches months. We do it in timeout in order to
       * not to do a state update in the render phase of the
       * lib calendar component.
       */ if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default()(shownDate, currentMonthDate)) {
            const timer = setTimeout(()=>{
                clearTimeout(timer);
                setShownDate(currentMonthDate);
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavigationSlot, {
            currentFocusedDate: currentMonthDate,
            changeShownDate: changeShownDate,
            calendarProps: calendarProps,
            ...navigationSlotProps
        });
    }, [
        shownDate,
        NavigationSlot,
        navigationSlotProps
    ]);
    const dayContentRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((date)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DaySlot, {
            date: date,
            format: dayDisplayFormat,
            ...daySlotProps
        });
    }, [
        dayDisplayFormat,
        DaySlot,
        daySlotProps
    ]);
    /**
   * @see https://github.com/hypeserver/react-date-range/issues/529
   * @see https://github.com/hypeserver/react-date-range/issues/505
   * Whenever any prop is changed, the `Calendar` component
   * will jump to the initial selected/focused date. Seems like
   * `shownDate` prop doesn't do anything also.
   * Workaround: since the `Calendar` is a class component we can get the
   * instance from the ref and make `updateShownDate` do not do
   * anything, so we will prevent selected months state resetting.
   */ const disableSelectedMonthsResetOnPropsChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((instance)=>{
        if (!instance) return;
        lodash_set__WEBPACK_IMPORTED_MODULE_8___default()(instance, "calendar.updateShownDate", (lodash_noop__WEBPACK_IMPORTED_MODULE_7___default()));
    }, []);
    const updateMonthsNodes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((contentNode)=>{
        if (!contentNode) return;
        const monthsNodesList = contentNode.querySelectorAll(`.${_StyledPicker__WEBPACK_IMPORTED_MODULE_11__/* .PickerLibClasses.month */ ["if"].month}`);
        const monthsNodes = Array.from(monthsNodesList);
        setMonthsNodes(monthsNodes);
    }, []);
    const handleRootNodeChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((node)=>{
        if (!node) return;
        setRootNode(node);
        updateMonthsNodes(node);
    }, [
        updateMonthsNodes
    ]);
    const loadingMonthsIndexes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_helpers_getLoadingMonthsIndexes__WEBPACK_IMPORTED_MODULE_10__/* .getLoadingMonthsIndexes */ .r)({
            loadingRanges,
            months,
            shownDate
        }), [
        months,
        loadingRanges,
        shownDate
    ]);
    const commonProps = {
        ...rest,
        months,
        dayDisplayFormat,
        ranges: [
            selectionRange
        ],
        color: customColor,
        rangeColors: [
            customColor
        ],
        showDateDisplay: false,
        ariaLabels: ariaLabels,
        classNames: _StyledPicker__WEBPACK_IMPORTED_MODULE_11__/* .PickerLibClasses */ ["if"],
        direction: finalDirection,
        locale: finalLocale,
        focusedRange,
        onChange: handleSelect,
        navigatorRenderer,
        dayContentRenderer
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onShownDateChange?.(shownDate);
        updateMonthsNodes(rootNode);
    }, [
        shownDate,
        rootNode,
        onShownDateChange,
        updateMonthsNodes
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledPicker__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
        ref: handleRootNodeChange,
        direction: finalDirection,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.clsx)(_StyledPicker__WEBPACK_IMPORTED_MODULE_11__/* .PickerClasses.picker */ .GR.picker, className),
        sx: sx,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_date_range__WEBPACK_IMPORTED_MODULE_9__.DateRange, {
                ...commonProps,
                ref: disableSelectedMonthsResetOnPropsChange
            }),
            monthsNodes.map((monthNode, index)=>{
                // We use portal to insert loader inside month node
                const isLoading = loadingMonthsIndexes.includes(index);
                return /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    className: _StyledPicker__WEBPACK_IMPORTED_MODULE_11__/* .PickerClasses.loaderWrapper */ .GR.loaderWrapper,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MonthLoaderSlot, {
                        ...monthLoaderSlotProps
                    })
                }) : null, monthNode, String(index));
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41876:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GR": () => (/* binding */ PickerClasses),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "if": () => (/* binding */ PickerLibClasses)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62430);
/* harmony import */ var _PickerDay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7754);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_index__WEBPACK_IMPORTED_MODULE_1__, _PickerDay__WEBPACK_IMPORTED_MODULE_2__]);
([theme_index__WEBPACK_IMPORTED_MODULE_1__, _PickerDay__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const PREFIX = "DateRangePicker";
const PickerLibClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClasses)(PREFIX, [
    "dateRangePickerWrapper",
    "dateRangeWrapper",
    "calendarWrapper",
    "dateDisplay",
    "dateDisplayItem",
    "dateDisplayItemActive",
    "dateDisplayWrapper",
    "day",
    "dayActive",
    "dayDisabled",
    "dayEndOfMonth",
    "dayEndOfWeek",
    "dayEndPreview",
    "dayHovered",
    "dayInPreview",
    "dayNumber",
    "dayPassive",
    "days",
    "daySelected",
    "dayStartOfMonth",
    "dayStartOfWeek",
    "dayStartPreview",
    "dayToday",
    "dayWeekend",
    "definedRangesWrapper",
    "endEdge",
    "infiniteMonths",
    "inRange",
    "month",
    "monthAndYearPickers",
    "monthAndYearWrapper",
    "monthName",
    "monthPicker",
    "months",
    "monthsHorizontal",
    "monthsVertical",
    "nextButton",
    "nextPrevButton",
    "prevButton",
    "selected",
    "startEdge",
    "weekDay",
    "weekDays",
    "yearPicker"
]);
const PickerCustomClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClasses)(PREFIX, [
    "picker",
    "loaderWrapper"
]);
const PickerClasses = {
    ...PickerLibClasses,
    ...PickerCustomClasses
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,theme_index__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`,
    shouldForwardProp: (p)=>{
        return p !== "direction";
    }
})(({ theme , direction  })=>{
    const isVerticalDirection = direction === "vertical";
    const CELL_WIDTH = 40;
    const CELL_HEIGHT = 40;
    const CELLS_GAP = 4;
    const CELLS_IN_WEEK = 7;
    const WEEKS_IN_MONTH = 6;
    const MONTH_WIDTH = CELL_WIDTH * CELLS_IN_WEEK + CELLS_GAP * (CELLS_IN_WEEK - 1);
    const MONTH_HEIGHT = CELL_HEIGHT * WEEKS_IN_MONTH;
    const SELECTION_HEIGHT = CELL_HEIGHT - CELLS_GAP;
    const SELECTION_RADIUS = SELECTION_HEIGHT / 2;
    const SELECTION_VERTICAL_OFFSET = (CELL_HEIGHT - SELECTION_HEIGHT) / 2;
    const SELECTION_HORIZONTAL_OFFSET = CELLS_GAP / 2;
    return {
        // TODO: Extract to slot overriding
        [`& .${PickerClasses.loaderWrapper}`]: {
            height: MONTH_HEIGHT,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 4
        },
        [`&.${PickerClasses.picker}`]: {
            background: theme.palette.common.white
        },
        [`& .${PickerClasses.calendarWrapper}`]: {
            // we use it to position navigation buttons to the one line with month names
            position: "relative"
        },
        [`& .${PickerClasses.month}`]: {
            position: "relative",
            width: MONTH_WIDTH,
            marginRight: isVerticalDirection ? 0 : theme.spacing(3),
            marginBottom: isVerticalDirection ? theme.spacing(3) : 0,
            "&:last-child": {
                marginRight: 0,
                marginBottom: 0
            }
        },
        [`& .${PickerClasses.monthName}`]: {
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.palette.text.primary,
            ...theme.typography.body2,
            marginBottom: theme.spacing(1)
        },
        [`& .${PickerClasses.weekDays}`]: {
            height: CELL_HEIGHT,
            justifyContent: "space-between",
            alignItems: "center"
        },
        [`& .${PickerClasses.weekDay}`]: {
            flexBasis: "auto",
            width: CELL_WIDTH,
            ...theme.typography.body2,
            color: theme.palette.text.primary
        },
        [`& .${PickerClasses.days}`]: {
            height: MONTH_HEIGHT,
            justifyContent: "space-between",
            /**
       * We don't let flex container make gaps between the rows
       * because we want to have an extra row if there is 5
       * weeks in the month (6 is max)
       */ alignContent: "flex-start"
        },
        [`& .${PickerClasses.day}`]: {
            width: CELL_WIDTH,
            height: CELL_HEIGHT,
            ...theme.typography.body1,
            border: "none",
            background: theme.palette.common.white
        },
        [`& .${PickerClasses.dayNumber}`]: {
            position: "absolute",
            top: SELECTION_VERTICAL_OFFSET,
            bottom: SELECTION_VERTICAL_OFFSET,
            right: SELECTION_HORIZONTAL_OFFSET,
            left: SELECTION_HORIZONTAL_OFFSET,
            zIndex: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.palette.text.primary
        },
        [`& .${PickerClasses.dayToday}`]: {
            [`& .${_PickerDay__WEBPACK_IMPORTED_MODULE_2__/* .PickerDayClasses.root */ .C.root}`]: {
                // circle around todays day
                "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: SELECTION_RADIUS,
                    border: `1px solid ${theme.palette.text.light}`
                }
            }
        },
        [`& .${PickerClasses.dayDisabled}`]: {
            // Add line-through and disabled color to disabled day
            [`& .${_PickerDay__WEBPACK_IMPORTED_MODULE_2__/* .PickerDayClasses.root */ .C.root}`]: {
                textDecoration: "line-through",
                color: theme.palette.text.disabled
            },
            // Change selection and preview color for disabled days
            [`& .${PickerClasses.startEdge},
          .${PickerClasses.inRange},
          .${PickerClasses.endEdge},
          .${PickerClasses.dayStartPreview},
          .${PickerClasses.dayInPreview},
          .${PickerClasses.dayEndPreview}
      `]: {
                background: theme.palette.primary.background
            },
            // Make start and end selection circles disabled color for disabled days
            [`& .${PickerClasses.startEdge}, .${PickerClasses.endEdge}`]: {
                "&::before": {
                    background: theme.palette.actions.unactive
                }
            }
        },
        // Hide days from other months
        [`& .${PickerClasses.dayPassive}`]: {
            visibility: "hidden"
        },
        // common styles for selection
        [`& .${PickerClasses.startEdge}, .${PickerClasses.inRange}, .${PickerClasses.endEdge}`]: {
            position: "absolute",
            top: SELECTION_VERTICAL_OFFSET,
            bottom: SELECTION_VERTICAL_OFFSET,
            background: "currentColor"
        },
        // Make day number white in selection start and end
        [`& .${PickerClasses.startEdge}, .${PickerClasses.endEdge}`]: {
            [`& ~ .${PickerClasses.dayNumber}`]: {
                [`& .${_PickerDay__WEBPACK_IMPORTED_MODULE_2__/* .PickerDayClasses.root */ .C.root}`]: {
                    color: theme.palette.common.white
                }
            }
        },
        // styles for selection of one day
        [`& .${PickerClasses.startEdge}.${PickerClasses.endEdge}`]: {
            left: SELECTION_HORIZONTAL_OFFSET,
            right: SELECTION_HORIZONTAL_OFFSET,
            borderRadius: SELECTION_RADIUS,
            "&::before": {
                right: 0,
                left: 0
            }
        },
        // unique styles for selection start
        [`& .${PickerClasses.startEdge}`]: {
            left: SELECTION_HORIZONTAL_OFFSET,
            right: -SELECTION_HORIZONTAL_OFFSET,
            borderRadius: `${SELECTION_RADIUS}px 0 0 ${SELECTION_RADIUS}px`,
            "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                right: SELECTION_HORIZONTAL_OFFSET * 2,
                left: 0,
                zIndex: 2,
                borderRadius: SELECTION_RADIUS,
                background: theme.palette.primary.main
            }
        },
        // unique styles for selection end
        [`& .${PickerClasses.endEdge}`]: {
            left: -SELECTION_HORIZONTAL_OFFSET,
            right: SELECTION_HORIZONTAL_OFFSET,
            borderRadius: `0 ${SELECTION_RADIUS}px ${SELECTION_RADIUS}px 0`,
            "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                zIndex: 2,
                left: SELECTION_HORIZONTAL_OFFSET * 2,
                borderRadius: SELECTION_RADIUS,
                background: theme.palette.primary.main
            }
        },
        // unique styles for selection between start and end
        [`& .${PickerClasses.inRange}`]: {
            right: -SELECTION_HORIZONTAL_OFFSET,
            left: -SELECTION_HORIZONTAL_OFFSET
        },
        // common styles for preview
        [`& .${PickerClasses.dayStartPreview}, .${PickerClasses.dayInPreview}, .${PickerClasses.dayEndPreview}`]: {
            position: "absolute",
            top: SELECTION_VERTICAL_OFFSET,
            bottom: SELECTION_VERTICAL_OFFSET,
            zIndex: 1,
            background: theme.palette.primary.light
        },
        // styles for preview of one day
        [`& .${PickerClasses.dayStartPreview}.${PickerClasses.dayEndPreview}`]: {
            left: SELECTION_HORIZONTAL_OFFSET,
            right: SELECTION_HORIZONTAL_OFFSET,
            borderRadius: SELECTION_RADIUS,
            border: `1px solid ${theme.palette.text.light}`
        },
        // unique styles for preview start
        [`& .${PickerClasses.dayStartPreview}`]: {
            left: SELECTION_HORIZONTAL_OFFSET,
            right: -SELECTION_HORIZONTAL_OFFSET,
            borderTopLeftRadius: SELECTION_RADIUS,
            borderBottomLeftRadius: SELECTION_RADIUS,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
        },
        // unique styles for preview between start and end
        [`& .${PickerClasses.dayInPreview}`]: {
            left: -SELECTION_HORIZONTAL_OFFSET,
            right: -SELECTION_HORIZONTAL_OFFSET
        },
        // unique styles for preview end
        [`& .${PickerClasses.dayEndPreview}`]: {
            left: -SELECTION_HORIZONTAL_OFFSET,
            right: SELECTION_HORIZONTAL_OFFSET,
            borderTopRightRadius: SELECTION_RADIUS,
            borderBottomRightRadius: SELECTION_RADIUS,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
        },
        // edge cases styles of preview and selection for start of week and start of month
        [`& .${PickerClasses.dayStartOfWeek}, .${PickerClasses.dayStartOfMonth}`]: {
            [`& .${PickerClasses.inRange}`]: {
                left: SELECTION_HORIZONTAL_OFFSET,
                borderTopLeftRadius: SELECTION_RADIUS,
                borderBottomLeftRadius: SELECTION_RADIUS
            },
            [`& .${PickerClasses.endEdge}`]: {
                "&::before": {
                    left: 0
                },
                left: SELECTION_HORIZONTAL_OFFSET,
                borderRadius: SELECTION_RADIUS
            },
            [`& .${PickerClasses.dayInPreview}`]: {
                left: SELECTION_HORIZONTAL_OFFSET,
                borderTopLeftRadius: SELECTION_RADIUS,
                borderBottomLeftRadius: SELECTION_RADIUS
            },
            [`& .${PickerClasses.dayEndPreview}`]: {
                left: SELECTION_HORIZONTAL_OFFSET,
                borderRadius: SELECTION_RADIUS
            }
        },
        // edge cases styles of preview and selection for end of week and end of month
        [`& .${PickerClasses.dayEndOfWeek}, .${PickerClasses.dayEndOfMonth}`]: {
            [`& .${PickerClasses.inRange}`]: {
                right: SELECTION_HORIZONTAL_OFFSET,
                borderTopRightRadius: SELECTION_RADIUS,
                borderBottomRightRadius: SELECTION_RADIUS
            },
            [`& .${PickerClasses.startEdge}`]: {
                "&::before": {
                    right: 0
                },
                right: SELECTION_HORIZONTAL_OFFSET,
                borderRadius: SELECTION_RADIUS
            },
            [`& .${PickerClasses.dayInPreview}`]: {
                right: SELECTION_HORIZONTAL_OFFSET,
                borderTopRightRadius: SELECTION_RADIUS,
                borderBottomRightRadius: SELECTION_RADIUS
            },
            [`& .${PickerClasses.dayStartPreview}`]: {
                right: SELECTION_HORIZONTAL_OFFSET,
                borderRadius: SELECTION_RADIUS
            }
        }
    };
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ MAIN_RANGE_KEY)
/* harmony export */ });
const MAIN_RANGE_KEY = "selection";


/***/ }),

/***/ 37786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ getFocusedRange)
/* harmony export */ });
const getFocusedRange = (params)=>{
    const { startDate , endDate , focusedDateBehavior  } = params;
    const startFocusedRange = [
        0,
        0
    ];
    const endFocusedRange = [
        0,
        1
    ];
    if (focusedDateBehavior) {
        return focusedDateBehavior === "start" ? startFocusedRange : endFocusedRange;
    }
    if (startDate && endDate) return startFocusedRange;
    if (startDate && !endDate) return endFocusedRange;
    if (!startDate && endDate) return startFocusedRange;
    return startFocusedRange;
};


/***/ }),

/***/ 66285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* reexport */ getLoadingMonthsIndexes)
});

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(74146);
;// CONCATENATED MODULE: ./src/components/views/DateRangePickerInputView/components/Picker/helpers/getLoadingMonthsIndexes/getLoadingMonthsIndexes.ts

const getLoadingMonthsIndexes = (params)=>{
    const { loadingRanges , months , shownDate  } = params;
    const monthIndexes = [
        ...Array(months).keys()
    ];
    return monthIndexes.filter((monthIndex)=>{
        const visibleFrom = (0,external_date_fns_.startOfMonth)((0,external_date_fns_.addMonths)(shownDate, monthIndex));
        const visibleTo = (0,external_date_fns_.endOfMonth)(visibleFrom);
        const isMonthLoading = loadingRanges.some((range)=>{
            const [loadingFrom, loadingTo] = range;
            return !(0,external_date_fns_.isAfter)(loadingFrom, visibleTo) && !(0,external_date_fns_.isBefore)(loadingTo, visibleFrom);
        });
        return isMonthLoading;
    });
};

;// CONCATENATED MODULE: ./src/components/views/DateRangePickerInputView/components/Picker/helpers/getLoadingMonthsIndexes/index.ts



/***/ }),

/***/ 1073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getSelectionRange = (params)=>{
    const { startDate , endDate , ...rest } = params;
    if (!startDate) {
        /**
     * Workaround: `react-date-range` lib shows all days as selected
     * if we have an empty date range, it's a well known issue.
     * @see https://github.com/hypeserver/react-date-range/issues/330#issuecomment-802601417
     */ return {
            ...rest,
            startDate: undefined,
            endDate: new Date("")
        };
    }
    /**
   * If we receive `undefined` as an end date, we need to assign the `startDate` instance
   * to the `endDate` in order to see the correct selected `startDate` value.
   */ if (startDate && !endDate) {
        return {
            ...rest,
            startDate,
            endDate: startDate
        };
    }
    return params;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSelectionRange);


/***/ }),

/***/ 70432:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GR": () => (/* reexport safe */ _StyledPicker__WEBPACK_IMPORTED_MODULE_1__.GR),
/* harmony export */   "cW": () => (/* reexport safe */ _Picker__WEBPACK_IMPORTED_MODULE_0__.c)
/* harmony export */ });
/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24665);
/* harmony import */ var _StyledPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41876);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Picker__WEBPACK_IMPORTED_MODULE_0__, _StyledPicker__WEBPACK_IMPORTED_MODULE_1__]);
([_Picker__WEBPACK_IMPORTED_MODULE_0__, _StyledPicker__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ PickerDay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16593);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _StyledPickerDay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_3__]);
clsx__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const PickerDay = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { date , className , format: dateFormat = "d" , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        ...rest,
        ref: ref,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.clsx)(className, _StyledPickerDay__WEBPACK_IMPORTED_MODULE_5__/* .PickerDayClasses.root */ .C.root),
        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(date, dateFormat)
    });
});
PickerDay.displayName = "DateRangePickerDay";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ PickerDayClasses)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);

const PREFIX = "DateRangePickerDay";
const PickerDayClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClasses)(PREFIX, [
    "root"
]);


/***/ }),

/***/ 7754:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ _StyledPickerDay__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   "I": () => (/* reexport safe */ _PickerDay__WEBPACK_IMPORTED_MODULE_0__.I)
/* harmony export */ });
/* harmony import */ var _PickerDay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41174);
/* harmony import */ var _StyledPickerDay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PickerDay__WEBPACK_IMPORTED_MODULE_0__]);
_PickerDay__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* reexport */ Popper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
;// CONCATENATED MODULE: ./src/components/views/DateRangePickerInputView/components/Popper/Popper.tsx


// we use popper modifier to have an offset from the input
const offsetModifier = {
    name: "offset",
    options: {
        offset: [
            0,
            8
        ]
    }
};
const Popper = (props)=>{
    const { modifiers =[] , sx , ...rest } = props;
    const theme = (0,material_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Popper, {
        ...rest,
        modifiers: [
            ...modifiers,
            offsetModifier
        ],
        sx: {
            borderRadius: 2,
            overflow: "hidden",
            border: `1px solid ${theme.palette.other.border}`,
            zIndex: theme.zIndex.tooltip,
            ...sx
        }
    });
};

;// CONCATENATED MODULE: ./src/components/views/DateRangePickerInputView/components/Popper/index.ts



/***/ }),

/***/ 61656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useDateRangePickerContext),
/* harmony export */   "K": () => (/* binding */ DateRangePickerContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87553);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);


const DateRangePickerContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    // TODO: [RM-7750] add other props that should be accessable by slots and refactor the flow to avoid prop drilling
    value: {
        startDate: undefined,
        endDate: undefined
    },
    isOpened: false,
    view: "popper",
    setValue: (lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()),
    resetValue: (lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()),
    open: (lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()),
    close: (lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()),
    accept: (lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()),
    cancel: (lodash_noop__WEBPACK_IMPORTED_MODULE_1___default())
});
const DateRangePickerContextProvider = DateRangePickerContext.Provider;
const useDateRangePickerContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DateRangePickerContext);


/***/ }),

/***/ 27952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ getFormattedToolbarLabel_getFormattedToolbarLabel)
});

// EXTERNAL MODULE: ./src/helpers/getFormattedDateRange/index.ts + 1 modules
var getFormattedDateRange = __webpack_require__(89382);
;// CONCATENATED MODULE: ./src/components/views/DateRangePickerInputView/helpers/getFormattedToolbarLabel/getFormattedToolbarLabel.ts

const getFormattedToolbarLabel = (params)=>{
    const { startDate , endDate , separator , format  } = params;
    const label = (0,getFormattedDateRange/* getFormattedDateRange */.s)({
        startDate,
        endDate,
        separator,
        dateDisplayFormat: format
    });
    // MUI like
    return label ? label : "--";
};
/* harmony default export */ const getFormattedToolbarLabel_getFormattedToolbarLabel = (getFormattedToolbarLabel);

;// CONCATENATED MODULE: ./src/components/views/DateRangePickerInputView/helpers/getFormattedToolbarLabel/index.ts




/***/ }),

/***/ 67871:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CP": () => (/* reexport safe */ _components_PickerDay__WEBPACK_IMPORTED_MODULE_8__.C),
/* harmony export */   "Dw": () => (/* reexport safe */ _components_Picker__WEBPACK_IMPORTED_MODULE_7__.cW),
/* harmony export */   "TO": () => (/* reexport safe */ _components_Picker__WEBPACK_IMPORTED_MODULE_7__.GR),
/* harmony export */   "ZP": () => (/* reexport safe */ _DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "w2": () => (/* reexport safe */ _components_PickerDay__WEBPACK_IMPORTED_MODULE_8__.I)
/* harmony export */ });
/* harmony import */ var _DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84607);
/* harmony import */ var _components_Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41682);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15231);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89617);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2509);
/* harmony import */ var _components_MonthLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70300);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29534);
/* harmony import */ var _components_Picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70432);
/* harmony import */ var _components_PickerDay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7754);
/* harmony import */ var _components_Popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48694);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61656);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_0__, _components_Field__WEBPACK_IMPORTED_MODULE_1__, _components_Footer__WEBPACK_IMPORTED_MODULE_2__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__, _components_Modal__WEBPACK_IMPORTED_MODULE_4__, _components_MonthLoader__WEBPACK_IMPORTED_MODULE_5__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__, _components_Picker__WEBPACK_IMPORTED_MODULE_7__, _components_PickerDay__WEBPACK_IMPORTED_MODULE_8__]);
([_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_0__, _components_Field__WEBPACK_IMPORTED_MODULE_1__, _components_Footer__WEBPACK_IMPORTED_MODULE_2__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__, _components_Modal__WEBPACK_IMPORTED_MODULE_4__, _components_MonthLoader__WEBPACK_IMPORTED_MODULE_5__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__, _components_Picker__WEBPACK_IMPORTED_MODULE_7__, _components_PickerDay__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export PlaceholderView */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16593);
/* harmony import */ var components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19594);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_1__, theme__WEBPACK_IMPORTED_MODULE_3__]);
([clsx__WEBPACK_IMPORTED_MODULE_1__, theme__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const PREFIX = "Placeholder";
const PlaceholderClasses = {
    disabled: `${PREFIX}-disabled`
};
const StyledTypography = (0,theme__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)(components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
    name: `Styled${PREFIX}`,
    label: `Sapiens--${PREFIX}`
})(({ theme  })=>{
    return {
        color: theme.palette.text.secondary,
        [`&.${PlaceholderClasses.disabled}`]: {
            color: theme.palette.text.disabled
        }
    };
});
const PlaceholderView = (props)=>{
    const { disabled , children  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTypography, {
        component: "span",
        variant: "body1",
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.clsx)({
            [PlaceholderClasses.disabled]: disabled
        }),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceholderView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _PlaceholderView__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _PlaceholderView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PlaceholderView__WEBPACK_IMPORTED_MODULE_0__]);
_PlaceholderView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16593);
/* harmony import */ var _StyledSeveralAdornments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_3__, _StyledSeveralAdornments__WEBPACK_IMPORTED_MODULE_4__]);
([clsx__WEBPACK_IMPORTED_MODULE_3__, _StyledSeveralAdornments__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const SeveralAdornments = (props)=>{
    const { children , className , dividerProps , ...rest } = props;
    const { className: dividerClassName , ...dividerRestProps } = dividerProps || {};
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StyledSeveralAdornments__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_StyledSeveralAdornments__WEBPACK_IMPORTED_MODULE_4__/* .SeveralAdornmentsClasses.root */ .L.root, className),
        alignItems: "center",
        direction: "row",
        divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_StyledSeveralAdornments__WEBPACK_IMPORTED_MODULE_4__/* .SeveralAdornmentsClasses.divider */ .L.divider, dividerClassName),
            orientation: "vertical",
            flexItem: true,
            ...dividerRestProps
        }),
        spacing: 1,
        ...rest,
        children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child)=>{
            return child;
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeveralAdornments);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 90455:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ SeveralAdornmentsClasses),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7802);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([theme_styled__WEBPACK_IMPORTED_MODULE_1__]);
theme_styled__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const PREFIX = "SeveralAdornments";
const SeveralAdornmentsClasses = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.generateUtilityClasses)(PREFIX, [
    "root",
    "divider"
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,theme_styled__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .z)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Stack, {
    name: `Styled${PREFIX}`,
    label: `Theme--${PREFIX}`
})(()=>{
    return {
        [`& .${SeveralAdornmentsClasses.divider}`]: {
            height: 24,
            alignSelf: "auto"
        }
    };
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48630:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* reexport safe */ _StyledSeveralAdornments__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   "Z": () => (/* reexport safe */ _SeveralAdornments__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _SeveralAdornments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2894);
/* harmony import */ var _StyledSeveralAdornments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SeveralAdornments__WEBPACK_IMPORTED_MODULE_0__, _StyledSeveralAdornments__WEBPACK_IMPORTED_MODULE_1__]);
([_SeveralAdornments__WEBPACK_IMPORTED_MODULE_0__, _StyledSeveralAdornments__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* reexport */ getMinMaxStayDatesRestrictions)
});

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(74146);
// EXTERNAL MODULE: external "lodash/max"
var max_ = __webpack_require__(36625);
var max_default = /*#__PURE__*/__webpack_require__.n(max_);
// EXTERNAL MODULE: external "lodash/min"
var min_ = __webpack_require__(604);
var min_default = /*#__PURE__*/__webpack_require__.n(min_);
;// CONCATENATED MODULE: ./src/helpers/getMinMaxStayDatesRestrictions/getMinMaxStayDatesRestrictions.ts



const getMinMaxStayDatesRestrictions = (params)=>{
    const { selectedRange , minStay =0 , maxStay =0 , minDate: defaultMinDate , maxDate: defaultMaxDate  } = params;
    const [startDate, endDate] = selectedRange;
    const isOnlyStartDateSelected = startDate && !endDate;
    const shouldRestrictMinDate = isOnlyStartDateSelected && minStay && minStay >= 1 && isFinite(minStay);
    const shouldRestrictMaxDate = isOnlyStartDateSelected && maxStay && maxStay >= 1 && isFinite(maxStay);
    const minStayMinDate = shouldRestrictMinDate ? (0,external_date_fns_.addDays)(startDate, minStay) : undefined;
    const maxStayMaxDate = shouldRestrictMaxDate ? (0,external_date_fns_.addDays)(startDate, maxStay) : undefined;
    const minDate = max_default()([
        defaultMinDate,
        minStayMinDate
    ]);
    const maxDate = min_default()([
        defaultMaxDate,
        maxStayMaxDate
    ]);
    return {
        minDate,
        maxDate
    };
};

;// CONCATENATED MODULE: ./src/helpers/getMinMaxStayDatesRestrictions/index.ts



/***/ }),

/***/ 31411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* reexport */ useDateFnsLocale)
});

// EXTERNAL MODULE: ./src/components/contexts/LocaleContext.tsx + 2 modules
var LocaleContext = __webpack_require__(48719);
// EXTERNAL MODULE: ./src/helpers/getDateFnsLocale/index.ts + 2 modules
var getDateFnsLocale = __webpack_require__(55533);
;// CONCATENATED MODULE: ./src/hooks/useDateFnsLocale/useDateFnsLocale.ts


const useDateFnsLocale = ()=>{
    const { locale  } = (0,LocaleContext/* useLocaleContext */.PE)();
    const resultLocale = (0,getDateFnsLocale/* getDateFnsLocale */.G)(locale);
    return resultLocale;
};

;// CONCATENATED MODULE: ./src/hooks/useDateFnsLocale/index.ts



/***/ })

};
;
//# sourceMappingURL=6.js.map