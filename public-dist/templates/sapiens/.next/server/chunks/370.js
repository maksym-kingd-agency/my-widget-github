"use strict";
exports.id = 370;
exports.ids = [370];
exports.modules = {

/***/ 12720:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oi": () => (/* binding */ TextInput)
/* harmony export */ });
/* unused harmony export TextInputView */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25611);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45641);
/* harmony import */ var templates_InputTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65754);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, templates_InputTemplate__WEBPACK_IMPORTED_MODULE_6__]);
([hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, templates_InputTemplate__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const TextInputView = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { id , label , sx , className , fullWidth =true , error , textFieldProps , helperText , multiline , type , onChange , value , startIcon , rows , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_InputTemplate__WEBPACK_IMPORTED_MODULE_6__/* .InputTemplate */ .c, {
        id: id || "",
        label: label,
        sx: sx,
        className: className,
        fullWidth: fullWidth,
        error: !!error,
        helperText: helperText,
        value: value,
        startIcon: startIcon,
        ...rest,
        children: ({ error , id , startAdornment , placeholder  })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                variant: "outlined",
                id: id,
                inputRef: ref,
                placeholder: placeholder,
                error: error,
                multiline: multiline,
                rows: rows,
                type: type,
                fullWidth: true,
                onChange: onChange,
                InputProps: {
                    startAdornment
                },
                value: value,
                ...textFieldProps
            });
        }
    });
});
TextInputView.displayName = "TextInputView";
const TextInput = (props)=>{
    const { id , name , controllerProps , placeholder , options , helperText , required: requiredFromProps , ...rest } = props;
    const { required: requiredFromOptions  } = options || {};
    const { t: translate  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const finalControllerProps = {
        name,
        defaultValue: "",
        ...controllerProps
    };
    const { field: { value , onChange , ref  } , fieldState: { error  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useController)(finalControllerProps);
    const isInputRequired = (0,hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_3__/* .useIsRequiredInput */ .D)(finalControllerProps);
    const isRequired = isInputRequired || requiredFromOptions || requiredFromProps;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextInputView, {
        id: id || name,
        required: isRequired,
        value: value,
        onChange: onChange,
        placeholder: typeof placeholder === "string" ? translate(placeholder) : placeholder,
        error: !!error,
        helperText: helperText || error?.message,
        ref: ref,
        ...rest,
        ...options
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TextInput)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52602:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* reexport safe */ _TextInput__WEBPACK_IMPORTED_MODULE_0__.oi)
/* harmony export */ });
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12720);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TextInput__WEBPACK_IMPORTED_MODULE_0__]);
_TextInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getDirectionFromLocale)
/* harmony export */ });
const getDirectionFromLocale = (locale)=>{
    if (locale?.startsWith("he")) {
        return "rtl";
    }
    return "ltr";
};


/***/ })

};
;
//# sourceMappingURL=370.js.map