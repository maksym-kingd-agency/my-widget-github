"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 20688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneInput": () => (/* binding */ PhoneInput),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25611);
/* harmony import */ var material_ui_phone_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85778);
/* harmony import */ var material_ui_phone_number__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_phone_number__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45641);
/* harmony import */ var templates_InputTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65754);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, templates_InputTemplate__WEBPACK_IMPORTED_MODULE_4__]);
([hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, templates_InputTemplate__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const onlyNumbers = (value)=>{
    if (typeof value !== "string") return "";
    return value.replace(/[^0-9]/g, "");
};
const parse = (value)=>{
    /* Input has '+' as empty value. Change it to empty string for connect 'isRequired' validation */ const normalizedValue = onlyNumbers(value);
    return normalizedValue ? `+${normalizedValue}` : "";
};
const format = (value)=>`+${onlyNumbers(value)}`;
const PhoneInput = (props)=>{
    const { error =false , helperText , name , id , label , disabled , controllerProps , phoneInputProps ={} , required: requiredFromProps , ...rest } = props;
    const { sx , required: requiredFromPhoneInputProps , ...restPhoneInputProps } = phoneInputProps;
    const finalControllerProps = {
        name,
        defaultValue: "",
        ...controllerProps
    };
    const { field: { value , onChange , ref  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useController)(finalControllerProps);
    const isInputRequired = (0,hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_1__/* .useIsRequiredInput */ .D)(finalControllerProps);
    const isRequired = isInputRequired || requiredFromPhoneInputProps || requiredFromProps;
    const handleChange = (value)=>{
        onChange(parse(value));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(templates_InputTemplate__WEBPACK_IMPORTED_MODULE_4__/* .InputTemplate */ .c, {
        id: id || name,
        label: label,
        error: error,
        helperText: helperText,
        required: isRequired,
        ...rest,
        children: (inputProps)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((material_ui_phone_number__WEBPACK_IMPORTED_MODULE_2___default()), {
                id: inputProps.id,
                value: format(value),
                onChange: handleChange,
                inputProps: {
                    name
                },
                dir: "ltr",
                autoFormat: false,
                disabled: disabled,
                variant: "outlined",
                defaultCountry: "us",
                error: inputProps.error,
                required: isRequired,
                InputProps: {
                    ref
                },
                disableAreaCodes: true,
                sx: {
                    "& .MuiPhoneNumber-flagButton svg": {
                        /**
                   * Fix for Safari and mobile browsers,
                   * flag is not visible: https://github.com/alexplumb/material-ui-phone-number/issues/111
                   */ height: 20
                    },
                    // need to have padding left in rtl direction
                    "& .MuiInputBase-root": {
                        pl: "16px /* @noflip */"
                    },
                    ...sx
                },
                ...restPhoneInputProps
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=688.js.map