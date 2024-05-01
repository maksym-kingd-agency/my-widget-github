"use strict";
exports.id = 319;
exports.ids = [319];
exports.modules = {

/***/ 3180:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mp": () => (/* binding */ LabeledClasses),
/* harmony export */   "PE": () => (/* binding */ Labeled)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62430);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_theme__WEBPACK_IMPORTED_MODULE_3__]);
_theme__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const PREFIX = "Labeled";
const LabeledClasses = {
    label: `${PREFIX}-label`
};
const StyledLabeled = (0,_theme__WEBPACK_IMPORTED_MODULE_3__/* .styled */ .zo)("div", {
    name: "StyledLabeled",
    label: `Sapiens-${PREFIX}`
})(({ theme  })=>{
    return {
        [`& .${LabeledClasses.label}`]: {
            display: "block",
            position: "static",
            ...theme.typography.body2,
            color: theme.palette.text.primary,
            margin: 0,
            marginBottom: 5,
            transform: "translate(0)"
        },
        [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_1__.inputLabelClasses.error}`]: {
            color: theme.palette.error.main
        }
    };
});
/**
 * Labeled
 * Note: Somewhy "click" event on label with `Labeled` does not focus input if `Labeled` is inside `FormControl`.
 * So use it outside `FormControl` and pass `error` prop
 */ function Labeled(props) {
    const { children , className , label , sx , ...rest } = props;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledLabeled, {
        className: className,
        sx: sx,
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.InputLabel, {
                className: LabeledClasses.label,
                ...rest,
                children: typeof label === "string" ? t(label) : label
            }),
            children
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Labeled)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13187:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* reexport safe */ _Labeled__WEBPACK_IMPORTED_MODULE_0__.Mp),
/* harmony export */   "P": () => (/* reexport safe */ _Labeled__WEBPACK_IMPORTED_MODULE_0__.PE)
/* harmony export */ });
/* harmony import */ var _Labeled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Labeled__WEBPACK_IMPORTED_MODULE_0__]);
_Labeled__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J5": () => (/* binding */ useSchemaContext),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports SchemaContext, SchemaContextProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SchemaContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const SchemaContextProvider = SchemaContext.Provider;
const useSchemaContext = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SchemaContext);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemaContextProvider);


/***/ }),

/***/ 7868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ InputTemplate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Labeled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13187);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53127);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Labeled__WEBPACK_IMPORTED_MODULE_3__]);
components_Labeled__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function InputTemplate(props) {
    const { children , label , placeholder , id , error =false , className , fullWidth =true , sx , helperText , formControlProps , startIcon , value , withoutHelperTextSpace =false , ...rest } = props;
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_4__/* .useTranslate */ .q)({
        basePath: "inputs"
    });
    const ownId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    const resultId = id || ownId;
    const getAbornmentColor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (Array.isArray(value) ? value.length > 0 : !!value) {
            return "primary.main";
        } else if (error) {
            return "error.main";
        } else {
            return "text.secondary";
        }
    }, [
        error,
        value
    ]);
    const customPlaceholder = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (typeof placeholder === "string") {
            return placeholder;
        }
        if (typeof label !== "string") {
            return "";
        }
        const lowercaseLabel = label.toLowerCase();
        if (Array.isArray(value)) {
            return translate("select.placeholder", {
                label: lowercaseLabel
            });
        }
        return translate("text.placeholder", {
            label: lowercaseLabel
        });
    }, [
        label,
        placeholder,
        translate,
        value
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Labeled__WEBPACK_IMPORTED_MODULE_3__/* .Labeled */ .P, {
        htmlFor: resultId,
        label: label,
        className: className,
        sx: sx,
        error: error,
        ...rest,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
            error: error,
            fullWidth: fullWidth,
            sx: fullWidth ? {
                ...formControlProps?.sx
            } : {
                width: "auto",
                ...formControlProps?.sx
            },
            hiddenLabel: true,
            ...formControlProps,
            children: [
                children({
                    error,
                    id: String(resultId),
                    placeholder: customPlaceholder,
                    ...(()=>startIcon && {
                            startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputAdornment, {
                                position: "start",
                                sx: {
                                    color: getAbornmentColor
                                },
                                children: startIcon
                            })
                        })()
                }),
                !withoutHelperTextSpace ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormHelperText, {
                    error: error,
                    children: helperText || " " /* Empty space to keep space */ 
                }) : null
            ]
        })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (InputTemplate)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65754:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* reexport safe */ _InputTemplate__WEBPACK_IMPORTED_MODULE_0__.c)
/* harmony export */ });
/* harmony import */ var _InputTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7868);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_InputTemplate__WEBPACK_IMPORTED_MODULE_0__]);
_InputTemplate__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ FormView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_SchemaContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94656);
/* harmony import */ var hooks_useErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20959);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45641);
/* harmony import */ var _helpers_getMessagesFromError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33513);
/* harmony import */ var _helpers_setSubmissionErrors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useErrorHandler__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _helpers_getMessagesFromError__WEBPACK_IMPORTED_MODULE_5__]);
([hooks_useErrorHandler__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _helpers_getMessagesFromError__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const FormView = (props)=>{
    const { children , sx , className , id , schema , ...formMethods } = props;
    const { onSubmit , setError , setFocus  } = formMethods;
    const { handleQueryErrors  } = (0,hooks_useErrorHandler__WEBPACK_IMPORTED_MODULE_3__/* .useErrorHandler */ .U)();
    const handleSubmit = async (values)=>{
        if (!onSubmit) {
            return;
        }
        try {
            await onSubmit(values);
        } catch (error) {
            const { errors  } = (0,_helpers_getMessagesFromError__WEBPACK_IMPORTED_MODULE_5__/* .getMessagesFromError */ .b)(error);
            if (errors) {
                const path = Object.keys(errors)[0] || ""; // get first path with an error
                setFocus(path);
                (0,_helpers_setSubmissionErrors__WEBPACK_IMPORTED_MODULE_6__/* .setSubmissionErrors */ .h)(errors, setError);
                handleQueryErrors(error, {
                    errors: "never"
                });
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.FormProvider, {
        ...formMethods,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_SchemaContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
            value: schema || null,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                id: id,
                className: className,
                sx: sx,
                component: "form",
                onSubmit: formMethods.handleSubmit(handleSubmit),
                noValidate: true,
                children: children
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getMessagesFromError)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const zodResponseErrorSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    response: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        data: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
            message: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().optional(),
            errors: zod__WEBPACK_IMPORTED_MODULE_0__.z.record(zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.string())).optional()
        })
    })
});
const getMessagesFromError = (error)=>{
    const parsedResponseError = zodResponseErrorSchema.safeParse(error);
    const defaultMessage = "notification.http_error";
    if (parsedResponseError.success) {
        const { data: { response: { data: { errors , message: errorMessage  }  }  }  } = parsedResponseError;
        const message = errorMessage || defaultMessage;
        return {
            message,
            errors
        };
    }
    const isError = (error)=>{
        return error instanceof Error;
    };
    if (isError(error)) {
        const message = error.message;
        return {
            message
        };
    }
    return {
        message: defaultMessage
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33513:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* reexport safe */ _getMessagesFromError__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var _getMessagesFromError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getMessagesFromError__WEBPACK_IMPORTED_MODULE_0__]);
_getMessagesFromError__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 87197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ setSubmissionErrors)
/* harmony export */ });
const setSubmissionErrors = (errors, setError)=>{
    if (errors && setError) {
        Object.keys(errors).forEach((key)=>{
            setError(key, {
                type: "server",
                message: errors[key]?.join(". ")
            });
        });
    }
};


/***/ }),

/***/ 58403:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* reexport safe */ _FormView__WEBPACK_IMPORTED_MODULE_0__.m)
/* harmony export */ });
/* harmony import */ var _FormView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84806);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormView__WEBPACK_IMPORTED_MODULE_0__]);
_FormView__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 89382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* reexport */ getFormattedDateRange)
});

// EXTERNAL MODULE: external "date-fns/format"
var format_ = __webpack_require__(14384);
var format_default = /*#__PURE__*/__webpack_require__.n(format_);
;// CONCATENATED MODULE: ./src/helpers/getFormattedDateRange/getFormattedDateRange.ts

const getFormattedDateRange = (params)=>{
    const { startDate , endDate , separator =" - " , dateDisplayFormat  } = params;
    if (!startDate && !endDate) return "";
    const formattedStartDate = startDate ? format_default()(startDate, dateDisplayFormat) : "";
    const formattedEndDate = endDate ? format_default()(endDate, dateDisplayFormat) : "";
    if (startDate === endDate) {
        return `${formattedStartDate}${separator}`;
    }
    return `${formattedStartDate}${separator}${formattedEndDate}`;
};

;// CONCATENATED MODULE: ./src/helpers/getFormattedDateRange/index.ts



/***/ }),

/***/ 20959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* reexport safe */ _useErrorHandler__WEBPACK_IMPORTED_MODULE_0__.U)
/* harmony export */ });
/* harmony import */ var _useErrorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23358);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useErrorHandler__WEBPACK_IMPORTED_MODULE_0__]);
_useErrorHandler__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 23358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useErrorHandler)
/* harmony export */ });
/* unused harmony export HTTP_NOT_FOUND_STATUS */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59789);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var views_FormView_helpers_getMessagesFromError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_FormView_helpers_getMessagesFromError__WEBPACK_IMPORTED_MODULE_3__]);
views_FormView_helpers_getMessagesFromError__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const HTTP_NOT_FOUND_STATUS = 404;
const useErrorHandler = ()=>{
    const { enqueueSnackbar  } = (0,hooks_useSnackbar__WEBPACK_IMPORTED_MODULE_1__/* .useSnackbar */ .D)();
    const handleQueryErrors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((error, options)=>{
        const status = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(error, "response.status");
        const { errors: showErrors = "always" , message: showMessage = "no-errors"  } = options || {};
        const { errors , message  } = (0,views_FormView_helpers_getMessagesFromError__WEBPACK_IMPORTED_MODULE_3__/* .getMessagesFromError */ .b)(error);
        const shouldShowErrors = showErrors === "always";
        const shouldShowMessage = (showMessage === "always" || !errors && showMessage === "no-errors") && status !== HTTP_NOT_FOUND_STATUS;
        if (errors && shouldShowErrors) {
            const messagesArray = Object.values(errors).flat().slice(0, 2);
            messagesArray.forEach((message)=>{
                enqueueSnackbar(message, {
                    variant: "error"
                });
            });
        }
        if (message && shouldShowMessage) {
            enqueueSnackbar(message, {
                variant: "error"
            });
        }
    }, [
        enqueueSnackbar
    ]);
    return {
        handleQueryErrors
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* reexport safe */ _useForm__WEBPACK_IMPORTED_MODULE_0__.c)
/* harmony export */ });
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42484);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useForm__WEBPACK_IMPORTED_MODULE_0__]);
_useForm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useForm)
/* harmony export */ });
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1656);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_0__, react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
([_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_0__, react_hook_form__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useForm = (props = {})=>{
    const { validationSchema , ...originalProps } = props;
    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        ...originalProps,
        resolver: validationSchema ? (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_0__.zodResolver)(validationSchema) : undefined
    });
    return {
        ...form,
        schema: validationSchema
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QQ": () => (/* binding */ isUnionSchema),
/* harmony export */   "d1": () => (/* binding */ isTupleSchema),
/* harmony export */   "n4": () => (/* binding */ isDiscriminatedUnionSchema),
/* harmony export */   "w0": () => (/* binding */ isArraySchema),
/* harmony export */   "w_": () => (/* binding */ isObjectSchema)
/* harmony export */ });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);

const isObjectSchema = (schema)=>{
    const shape = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(schema, "shape");
    return shape instanceof Object;
};
const isArraySchema = (schema)=>{
    return "element" in schema;
};
const isTupleSchema = (schema)=>{
    const items = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(schema, "items");
    return items instanceof Array;
};
const isUnionSchema = (schema)=>{
    const options = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(schema, "options");
    const optionsMap = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(schema, "optionsMap");
    return options instanceof Array && typeof optionsMap === "undefined";
};
const isDiscriminatedUnionSchema = (schema)=>{
    const options = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(schema, "optionsMap");
    return options instanceof Map;
};


/***/ }),

/***/ 25611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* reexport safe */ _useIsRequiredInput__WEBPACK_IMPORTED_MODULE_0__.D)
/* harmony export */ });
/* harmony import */ var _useIsRequiredInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59440);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_0__]);
_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 59440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useIsRequiredInput)
/* harmony export */ });
/* harmony import */ var contexts_SchemaContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94656);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45641);
/* harmony import */ var _helpers_typeguards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96086);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const checkIsSchemaRequired = (schema)=>{
    const isOptional = schema.isOptional();
    const { success: canBeEmptyString  } = schema.safeParse("");
    return !isOptional && !canBeEmptyString;
};
const checkIsNameRequiredInSchema = (params)=>{
    const { name , schema , values  } = params;
    const [mainName = "", ...splittedNestedNames] = name.split(".");
    const nestedNames = splittedNestedNames.join(".");
    const isNameNested = splittedNestedNames.length > 0;
    const nestedValues = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(values, mainName);
    if ((0,_helpers_typeguards__WEBPACK_IMPORTED_MODULE_3__/* .isObjectSchema */ .w_)(schema)) {
        /**
     * `get` returns `ZodTypeAny`, so we correct the return type
     * by passing `undefined` as a default value because it's
     * possible that `mainName` will not be in the `schema`
     */ const nestedSchema = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(schema.shape, mainName, undefined);
        if (!nestedSchema) return false;
        if (isNameNested) {
            return checkIsNameRequiredInSchema({
                name: nestedNames,
                schema: nestedSchema,
                values: nestedValues
            });
        }
        return checkIsSchemaRequired(nestedSchema);
    }
    if ((0,_helpers_typeguards__WEBPACK_IMPORTED_MODULE_3__/* .isArraySchema */ .w0)(schema)) {
        const numericMainName = Number(mainName);
        const isMainNameValidIndex = Number.isInteger(numericMainName);
        if (!isMainNameValidIndex) return false;
        const { element: elementSchema  } = schema;
        if (isNameNested) {
            return checkIsNameRequiredInSchema({
                name: nestedNames,
                schema: elementSchema,
                values: nestedValues
            });
        }
        return checkIsSchemaRequired(elementSchema);
    }
    if ((0,_helpers_typeguards__WEBPACK_IMPORTED_MODULE_3__/* .isTupleSchema */ .d1)(schema)) {
        const numericMainName = Number(mainName);
        const isMainNameValidIndex = Number.isInteger(numericMainName);
        if (!isMainNameValidIndex) return false;
        const { items  } = schema;
        const itemSchema = items[numericMainName];
        if (!itemSchema) return false;
        if (isNameNested) {
            return checkIsNameRequiredInSchema({
                name: nestedNames,
                schema: itemSchema,
                values: nestedValues
            });
        }
        return checkIsSchemaRequired(itemSchema);
    }
    if ((0,_helpers_typeguards__WEBPACK_IMPORTED_MODULE_3__/* .isUnionSchema */ .QQ)(schema)) {
        const { options  } = schema;
        return options.every((optionSchema)=>{
            return checkIsNameRequiredInSchema({
                name,
                schema: optionSchema,
                values
            });
        });
    }
    if ((0,_helpers_typeguards__WEBPACK_IMPORTED_MODULE_3__/* .isDiscriminatedUnionSchema */ .n4)(schema)) {
        const { optionsMap , discriminator  } = schema;
        const discriminatorValue = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(values, discriminator);
        const matchingSchema = optionsMap.get(discriminatorValue);
        if (!matchingSchema) return false;
        return checkIsNameRequiredInSchema({
            name,
            schema: matchingSchema,
            values
        });
    }
    return false;
};
const useIsRequiredInput = (param)=>{
    const { name , rules  } = param;
    const values = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useWatch)();
    const schema = (0,contexts_SchemaContext__WEBPACK_IMPORTED_MODULE_0__/* .useSchemaContext */ .J5)();
    if (!name) return false;
    if (schema) {
        return checkIsNameRequiredInSchema({
            name,
            schema,
            values
        });
    }
    const isInputHasRequiredRule = Boolean(rules?.required);
    return isInputHasRequiredRule;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=319.js.map