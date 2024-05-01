"use strict";
exports.id = 119;
exports.ids = [119];
exports.modules = {

/***/ 77222:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1580);
/* harmony import */ var views_FormView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58403);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useForm__WEBPACK_IMPORTED_MODULE_1__, views_FormView__WEBPACK_IMPORTED_MODULE_2__]);
([hooks_useForm__WEBPACK_IMPORTED_MODULE_1__, views_FormView__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const Form = (props)=>{
    const { children , onSubmit , sx , className , id , ...formProps } = props;
    const form = (0,hooks_useForm__WEBPACK_IMPORTED_MODULE_1__/* .useForm */ .c)({
        ...formProps
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_FormView__WEBPACK_IMPORTED_MODULE_2__/* .FormView */ .m, {
        ...form,
        id: id,
        sx: sx,
        className: className,
        onSubmit: onSubmit,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41096:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77222);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Form__WEBPACK_IMPORTED_MODULE_0__]);
_Form__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ AutocompleteInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11900);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41430);
/* harmony import */ var hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25611);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93908);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45641);
/* harmony import */ var views_AutocompleteInputView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95614);
/* harmony import */ var _hooks_useSelectedChoices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39443);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_3__, hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_9__, views_AutocompleteInputView__WEBPACK_IMPORTED_MODULE_10__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_3__, hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_9__, views_AutocompleteInputView__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const defaultFilterToQuery = (searchString)=>({
        [application_constants__WEBPACK_IMPORTED_MODULE_4__/* .SEARCH_STRING_FILTER_SOURCE */ .PT]: searchString
    });
function AutocompleteInput(props) {
    const { name: nameProp , optionText ="title" , optionValue ="id" , options , controllerProps , helperText , loading , error , debounce: debounceTime = 500 , onInputChange: onInputChangeProp , filterOptions: filterOptionsProp , filterToQuery =defaultFilterToQuery , ...rest } = props;
    const { multiple , disableClearable  } = rest;
    const { name , allChoices , isFetching , isFromReference , filter , setFilter  } = (0,_packages_providers__WEBPACK_IMPORTED_MODULE_3__/* .useChoicesContext */ .MK)({
        name: nameProp,
        choices: options,
        isFetching: loading
    });
    const finalControllerProps = {
        name,
        ...controllerProps
    };
    const { field: { ref , value , onChange , onBlur  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useController)(finalControllerProps);
    const isRequired = (0,hooks_useIsRequiredInput__WEBPACK_IMPORTED_MODULE_5__/* .useIsRequiredInput */ .D)(finalControllerProps);
    const [typedText, setTypedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [searchString, setSearchString] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(typedText);
    const prevSearchString = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const selectedChoice = (0,_hooks_useSelectedChoices__WEBPACK_IMPORTED_MODULE_11__/* .useSelectedChoice */ .n)({
        choices: allChoices,
        value,
        optionValue,
        multiple,
        disableClearable
    });
    const debouncedSetSearchString = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()((newString)=>{
            setSearchString(newString);
        }, debounceTime);
    }, [
        debounceTime
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        debouncedSetSearchString.cancel();
        /**
     * We reset search string if some choice
     * is selected to show user all the available
     * choices again. Otherwise, he would need to
     * clear the input first
     */ if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(selectedChoice)) {
            setSearchString("");
            return;
        }
        debouncedSetSearchString(typedText);
    }, [
        selectedChoice,
        typedText,
        debouncedSetSearchString
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (prevSearchString.current !== searchString) {
            prevSearchString.current = searchString;
            setFilter({
                ...filter,
                ...filterToQuery(searchString)
            });
        }
    }, [
        filter,
        searchString,
        setFilter,
        filterToQuery
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onInputChangeProp?.(searchString);
    }, [
        searchString,
        onInputChangeProp
    ]);
    const handleInputValueChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((_, newValue)=>{
        setTypedText(newValue);
    }, []);
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((_event, newValue)=>{
        let fieldValue = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(newValue, optionValue, "");
        if (multiple) {
            const values = Array.isArray(newValue) ? newValue : [];
            fieldValue = values.map((item)=>lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(item, optionValue)).filter((item)=>!!item);
        }
        onChange(fieldValue);
    }, [
        multiple,
        optionValue,
        onChange
    ]);
    const isOptionEqualToValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((option, value)=>{
        return lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(option, optionValue) === lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(value, optionValue);
    }, [
        optionValue
    ]);
    const getOptionLabel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((option)=>{
        return String(lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(option, optionText, ""));
    }, [
        optionText
    ]);
    const filterOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((options, state)=>{
        if (filterOptionsProp) {
            return filterOptionsProp(options, state);
        }
        if (isFromReference) return options;
        const defaultFilterOptions = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.createFilterOptions)();
        return defaultFilterOptions(options, state);
    }, [
        filterOptionsProp,
        isFromReference
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_AutocompleteInputView__WEBPACK_IMPORTED_MODULE_10__/* .AutocompleteInputView */ .x, {
        ref: ref,
        value: selectedChoice,
        inputValue: typedText,
        options: allChoices,
        isOptionEqualToValue: isOptionEqualToValue,
        getOptionLabel: getOptionLabel,
        filterOptions: filterOptions,
        onInputChange: handleInputValueChange,
        onChange: handleChange,
        onBlur: onBlur,
        loading: isFetching,
        required: isRequired,
        ...rest
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (AutocompleteInput)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* reexport */ useSelectedChoice)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__(40113);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
;// CONCATENATED MODULE: ./src/components/inputs/AutocompleteInput/helpers/getSelectedChoices/getSelectedChoices.ts

const getSelectedChoices = (params)=>{
    const { choices , value , optionValue , multiple , disableClearable  } = params;
    if (multiple) {
        const values = Array.isArray(value) ? value : [];
        return values.map((item)=>choices.find((choice)=>item === get_default()(choice, optionValue))).filter((item)=>item !== undefined);
    }
    const choice = choices.find((choice)=>get_default()(choice, optionValue) === value);
    if (disableClearable) {
        return choice;
    }
    return choice ?? null;
};

;// CONCATENATED MODULE: ./src/components/inputs/AutocompleteInput/helpers/getSelectedChoices/index.ts


;// CONCATENATED MODULE: ./src/components/inputs/AutocompleteInput/hooks/useSelectedChoices/useSelectedChoices.ts



const useSelectedChoice = (params)=>{
    const selectedChoicesRef = (0,external_react_.useRef)(getSelectedChoices(params));
    const [selectedChoices, setSelectedChoices] = (0,external_react_.useState)(()=>getSelectedChoices(params));
    // As the selected choices are objects, we want to ensure we pass the same
    // reference to the Autocomplete as it would reset its filter value otherwise.
    (0,external_react_.useEffect)(()=>{
        const newSelectedItems = getSelectedChoices(params);
        if (!isEqual_default()(selectedChoicesRef.current, newSelectedItems)) {
            selectedChoicesRef.current = newSelectedItems;
            setSelectedChoices(newSelectedItems);
        }
    }, [
        params
    ]);
    return selectedChoices;
};

;// CONCATENATED MODULE: ./src/components/inputs/AutocompleteInput/hooks/useSelectedChoices/index.ts



/***/ }),

/***/ 77827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _AutocompleteInput__WEBPACK_IMPORTED_MODULE_0__.P)
/* harmony export */ });
/* harmony import */ var _AutocompleteInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13842);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AutocompleteInput__WEBPACK_IMPORTED_MODULE_0__]);
_AutocompleteInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15519:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M4": () => (/* binding */ CityAutocompleteInput),
/* harmony export */   "qg": () => (/* binding */ CityInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var application_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41430);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22825);
/* harmony import */ var custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94605);
/* harmony import */ var hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49605);
/* harmony import */ var hooks_useTranslate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53127);
/* harmony import */ var inputs_AutocompleteInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77827);
/* harmony import */ var inputs_ReferenceInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48504);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1712);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_5__, inputs_AutocompleteInput__WEBPACK_IMPORTED_MODULE_7__, inputs_ReferenceInput__WEBPACK_IMPORTED_MODULE_8__]);
([custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__, hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_5__, inputs_AutocompleteInput__WEBPACK_IMPORTED_MODULE_7__, inputs_ReferenceInput__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const optionValue = "slug";
const optionText = "title";
const sort = {
    field: "title",
    order: "ASC"
};
const CityAutocompleteInput = (props)=>{
    const { optionPopular ="popular" , ...rest } = props;
    const translate = (0,hooks_useTranslate__WEBPACK_IMPORTED_MODULE_6__/* .useTranslate */ .q)();
    const groupBy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((option)=>{
        const isPopularCityOption = !!lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(option, optionPopular);
        if (isPopularCityOption) {
            return translate.root("custom.popular_destinations");
        }
        return "";
    }, [
        translate,
        optionPopular
    ]);
    const renderOption = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((liProps, option)=>{
        const isPopularCityOption = !!lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(option, optionPopular);
        const title = String(lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(option, "title"));
        const subtitle = String(lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(option, "country.title"));
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            component: "li",
            ...liProps,
            children: [
                isPopularCityOption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
                    icon: "pin",
                    sx: {
                        mr: 1
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "body2",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "small1",
                            children: subtitle
                        })
                    ]
                })
            ]
        });
    }, [
        optionPopular
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_AutocompleteInput__WEBPACK_IMPORTED_MODULE_7__/* .AutocompleteInput */ .P, {
        ...rest,
        optionText: optionText,
        optionValue: optionValue,
        placeholder: translate.root("pages.search.placeholder.location"),
        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(custom_IcoMoon__WEBPACK_IMPORTED_MODULE_4__/* .IcoMoon */ .n, {
            icon: "pin"
        }),
        groupBy: groupBy,
        renderOption: renderOption
    });
};
/**
 * When BE will support popular attribute in the cities response, and we will not have
 * only popular cities, we need to remove this component,
 * and use only `NotOnlyPopularCityInput` (renamed to CityInput)
 */ const OnlyPopularCityInput = (props)=>{
    const { data: popularCitiesData = [] , isFetching: arePopularCitiesFetching  } = (0,hooks_queries_useGetPopularCities__WEBPACK_IMPORTED_MODULE_5__/* .useGetPopularCities */ .tt)();
    const popularCitiesChoices = popularCitiesData.map((item)=>{
        return {
            ...item,
            popular: true
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CityAutocompleteInput, {
        ...props,
        options: popularCitiesChoices,
        loading: arePopularCitiesFetching
    });
};
const NotOnlyPopularCityInput = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(inputs_ReferenceInput__WEBPACK_IMPORTED_MODULE_8__/* .ReferenceInput */ .D, {
        name: application_constants__WEBPACK_IMPORTED_MODULE_3__/* .CITY_SOURCE */ .JJ,
        resource: application_resources__WEBPACK_IMPORTED_MODULE_10__/* .CITIES_RESOURCE */ .P1,
        optionValue: optionValue,
        sort: sort,
        selectedChoicesFilterName: "slugs",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CityAutocompleteInput, {
            ...props
        })
    });
};
const CityInput = (props)=>{
    const { onlyPopular , ...rest } = props;
    const Component = onlyPopular ? OnlyPopularCityInput : NotOnlyPopularCityInput;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...rest
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CityInput)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* reexport safe */ _CityInput__WEBPACK_IMPORTED_MODULE_0__.M4),
/* harmony export */   "q": () => (/* reexport safe */ _CityInput__WEBPACK_IMPORTED_MODULE_0__.qg)
/* harmony export */ });
/* harmony import */ var _CityInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15519);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CityInput__WEBPACK_IMPORTED_MODULE_0__]);
_CityInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 50548:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ReferenceInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11900);
/* harmony import */ var lodash_differenceBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50454);
/* harmony import */ var lodash_differenceBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_differenceBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45641);
/* harmony import */ var _useSearchChoicesQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81383);
/* harmony import */ var _useSelectedChoicesQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _useSearchChoicesQuery__WEBPACK_IMPORTED_MODULE_5__, _useSelectedChoicesQuery__WEBPACK_IMPORTED_MODULE_6__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _useSearchChoicesQuery__WEBPACK_IMPORTED_MODULE_5__, _useSelectedChoicesQuery__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ReferenceInput = (props)=>{
    const { name , resource , optionValue ="id" , selectedChoicesFilterName ="ids" , filter , page , perPage , sort , queryOptions , children  } = props;
    const [listParams, setListParams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        return {
            filter: filter ?? _packages_providers__WEBPACK_IMPORTED_MODULE_2__/* .choicesContextDefaultValue.filter */ .v9.filter,
            sort: sort ?? _packages_providers__WEBPACK_IMPORTED_MODULE_2__/* .choicesContextDefaultValue.sort */ .v9.sort,
            page: page ?? _packages_providers__WEBPACK_IMPORTED_MODULE_2__/* .choicesContextDefaultValue.page */ .v9.page,
            perPage: perPage ?? _packages_providers__WEBPACK_IMPORTED_MODULE_2__/* .choicesContextDefaultValue.perPage */ .v9.perPage
        };
    });
    const value = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useWatch)({
        name
    });
    const ids = value ? Array.isArray(value) ? value : [
        value
    ] : [];
    const { data: choices = [] , error: choicesError , isFetching: isChoicesFetching  } = (0,_useSearchChoicesQuery__WEBPACK_IMPORTED_MODULE_5__/* .useSearchChoicesQuery */ .L)({
        resource,
        listParams,
        options: queryOptions
    });
    const { data: selectedChoices = [] , error: selectedChoicesError , isFetching: isSelectedChoicesFetching  } = (0,_useSelectedChoicesQuery__WEBPACK_IMPORTED_MODULE_6__/* .useSelectedChoicesQuery */ .G)({
        resource,
        ids,
        filterName: selectedChoicesFilterName,
        options: {
            enabled: !!value
        }
    });
    const choicesContextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const availableChoices = lodash_differenceBy__WEBPACK_IMPORTED_MODULE_3___default()(choices, selectedChoices, optionValue);
        return {
            name,
            allChoices: [
                ...selectedChoices,
                ...availableChoices
            ],
            availableChoices,
            selectedChoices,
            error: selectedChoicesError || choicesError,
            isFetching: isSelectedChoicesFetching || isChoicesFetching,
            isFromReference: true,
            filter: listParams.filter,
            page: listParams.page,
            perPage: listParams.perPage,
            sort: listParams.sort,
            setFilter: (filter)=>setListParams((prev)=>({
                        ...prev,
                        filter
                    })),
            setPage: (page)=>setListParams((prev)=>({
                        ...prev,
                        page
                    })),
            setPerPage: (perPage)=>setListParams((prev)=>({
                        ...prev,
                        perPage
                    })),
            setSort: (sort)=>setListParams((prev)=>({
                        ...prev,
                        sort
                    }))
        };
    }, [
        name,
        choices,
        choicesError,
        isChoicesFetching,
        isSelectedChoicesFetching,
        listParams,
        optionValue,
        selectedChoices,
        selectedChoicesError
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_packages_providers__WEBPACK_IMPORTED_MODULE_2__/* .ChoicesContextProvider */ .JB, {
        value: choicesContextValue,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48504:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* reexport safe */ _ReferenceInput__WEBPACK_IMPORTED_MODULE_0__.D)
/* harmony export */ });
/* harmony import */ var _ReferenceInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50548);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ReferenceInput__WEBPACK_IMPORTED_MODULE_0__]);
_ReferenceInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81383:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useSearchChoicesQuery)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const getQueryKey = (params)=>{
    const { resource , listParams  } = params;
    return [
        resource,
        listParams
    ];
};
const useSearchChoicesQuery = (params)=>{
    const { resource , listParams , options ={}  } = params;
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: getQueryKey({
            resource,
            listParams
        }),
        queryFn: async ()=>{
            const { data: { data  }  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.get */ .zk.get({
                pathname: resource,
                ...listParams
            });
            const result = Array.isArray(data) ? data : [];
            return result;
        },
        ...options
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useSelectedChoicesQuery)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const getQueryKey = (params)=>{
    const { resource , ids , filterName  } = params;
    return [
        resource,
        filterName,
        ids
    ];
};
const useSelectedChoicesQuery = (params)=>{
    const { resource , ids , filterName , options ={}  } = params;
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: getQueryKey({
            ids,
            filterName,
            resource
        }),
        queryFn: async ()=>{
            const { data: { data  }  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.get */ .zk.get({
                pathname: resource,
                filter: {
                    [filterName]: ids
                }
            });
            const result = Array.isArray(data) ? data : [];
            return result;
        },
        ...options
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8273:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ SearchDateRangePickerInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _packages_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27074);
/* harmony import */ var helpers_getMinMaxStayDatesRestrictions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50622);
/* harmony import */ var inputs_DateRangePickerInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94861);
/* harmony import */ var inputs_DateRangePickerInput_hooks_useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38722);
/* harmony import */ var views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67871);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, inputs_DateRangePickerInput__WEBPACK_IMPORTED_MODULE_4__, inputs_DateRangePickerInput_hooks_useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_5__, views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_6__]);
([_packages_helpers__WEBPACK_IMPORTED_MODULE_2__, inputs_DateRangePickerInput__WEBPACK_IMPORTED_MODULE_4__, inputs_DateRangePickerInput_hooks_useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_5__, views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const SearchDateRangePickerInput = (props)=>{
    const { saveFormat =inputs_DateRangePickerInput__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_SAVE_FORMAT */ .u , minDate: defaultMinDate , maxDate: defaultMaxDate , minStay =1 , maxStay =Infinity , ...rest } = props;
    const { value , error , required , onAccept , onBlur  } = (0,inputs_DateRangePickerInput_hooks_useDateRangePickerInput__WEBPACK_IMPORTED_MODULE_5__/* .useDateRangePickerInput */ .l)({
        ...rest,
        saveFormat
    });
    const [selectedRange, setSelectedRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getParsedToDateValue */ .xI)({
            value: value.startDate,
            format: saveFormat
        }),
        (0,_packages_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getParsedToDateValue */ .xI)({
            value: value.endDate,
            format: saveFormat
        })
    ]);
    const handleValueChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ startDate , endDate  })=>{
        setSelectedRange([
            startDate,
            endDate
        ]);
    }, []);
    const { minDate , maxDate  } = (0,helpers_getMinMaxStayDatesRestrictions__WEBPACK_IMPORTED_MODULE_3__/* .getMinMaxStayDatesRestrictions */ .L)({
        selectedRange,
        minStay,
        maxStay,
        minDate: defaultMinDate,
        maxDate: defaultMaxDate
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_DateRangePickerInputView__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
        ...rest,
        minDate: minDate,
        maxDate: maxDate,
        value: value,
        error: !!error,
        helperText: error,
        required: required,
        onAccept: onAccept,
        onChange: handleValueChange,
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71898:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport safe */ _SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__.i)
/* harmony export */ });
/* harmony import */ var _SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8273);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__]);
_SearchDateRangePickerInput__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49605:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nK": () => (/* binding */ prefetchPopularCities),
/* harmony export */   "tt": () => (/* binding */ useGetPopularCities)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const queryKey = [
    application_resources__WEBPACK_IMPORTED_MODULE_2__/* .POPULAR_CITIES */ .tU
];
const queryFn = async (params)=>{
    const { meta  } = params;
    const context = meta?.context;
    const { data: { data  }  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.get */ .zk.get({
        pathname: application_resources__WEBPACK_IMPORTED_MODULE_2__/* .POPULAR_CITIES */ .tU
    }, {
        context
    });
    return _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodCitySchemas.popular.parse */ .Ic.popular.parse(data);
};
const prefetchPopularCities = (queryClient, context)=>{
    return queryClient.prefetchQuery({
        queryKey,
        queryFn,
        meta: {
            context
        }
    });
};
const useGetPopularCities = (params = {})=>{
    const { enabled  } = params;
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey,
        queryFn: queryFn,
        enabled,
        refetchOnMount: false
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetPopularCities);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=119.js.map