"use strict";
exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 49230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* reexport */ Button),
  "Z": () => (/* reexport */ Button_Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@king-david-it/builder"
var builder_ = __webpack_require__(42864);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/components/links/NextLink/index.ts + 1 modules
var NextLink = __webpack_require__(4630);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(11377);
;// CONCATENATED MODULE: ./src/components/buttons/Button/Button.tsx






const Button = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const { children , onClick , loading , disabled , ...rest } = props;
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const { isEditing  } = (0,builder_.useBuilderState)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Button, {
        LinkComponent: NextLink/* default */.Z,
        ref: ref,
        onClick: isEditing ? undefined : onClick,
        disabled: disabled || loading,
        ...rest,
        children: [
            loading ? /*#__PURE__*/ jsx_runtime_.jsx(material_.CircularProgress, {
                size: 20,
                sx: {
                    position: "absolute"
                }
            }) : null,
            typeof children === "string" ? t(children) : children
        ]
    });
});
Button.displayName = "Button";
/* harmony default export */ const Button_Button = (Button);

;// CONCATENATED MODULE: ./src/components/buttons/Button/index.ts





/***/ }),

/***/ 48719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qu": () => (/* binding */ LocaleContextProvider),
  "PE": () => (/* binding */ useLocaleContext)
});

// UNUSED EXPORTS: LocaleContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/application/constants.ts
var constants = __webpack_require__(41430);
// EXTERNAL MODULE: external "@king-david-it/builder"
var builder_ = __webpack_require__(42864);
// EXTERNAL MODULE: ./src/application/cookiesKeys.ts
var cookiesKeys = __webpack_require__(39968);
// EXTERNAL MODULE: ./src/components/custom/Builder/index.ts + 1 modules
var Builder = __webpack_require__(80143);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(74146);
// EXTERNAL MODULE: ./src/helpers/getDateFnsLocale/index.ts + 2 modules
var getDateFnsLocale = __webpack_require__(55533);
// EXTERNAL MODULE: ./src/hooks/useCookie/index.ts + 1 modules
var useCookie = __webpack_require__(95269);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/hooks/useLocaleController/useLocaleController.ts









const useLocaleController = (params)=>{
    const { defaultValue: locale = constants/* DEFAULT_LOCALE */.ZW  } = params;
    const { isEditing  } = (0,builder_.useBuilderState)();
    const { locale: routerLocale  } = (0,router_.useRouter)();
    const prevRouterLocaleRef = (0,external_react_.useRef)(routerLocale);
    const [, setCookieLocale] = (0,useCookie/* useCookie */.B)({
        name: cookiesKeys/* LOCALE_COOKIE_KEY */.P
    });
    const updateRouterLocale = (0,external_react_.useCallback)((locale)=>{
        router_default().push({
            pathname: (router_default()).pathname,
            query: (router_default()).query
        }, undefined, {
            locale,
            /**
         * When we edit the page in the builder we want to call `getServerSideProps`
         * to get new translations since we don't reload the page because user will
         * lose the data he entered after local changing. However, when we not in the
         * editing state we don't want to call `getServerSideProps` since we reload
         * the page after locale change below.
         */ shallow: !isEditing
        });
    }, [
        isEditing
    ]);
    const setLocale = (0,external_react_.useCallback)((locale)=>{
        setCookieLocale(locale);
        updateRouterLocale(locale);
    }, [
        setCookieLocale,
        updateRouterLocale
    ]);
    /**
   * Reload the page if `routerLocale` was changed.
   * We need it to correctly change language of google maps,
   * since we can't change parameters of the google maps script.
   */ (0,external_react_.useEffect)(()=>{
        if (!isEditing && routerLocale !== prevRouterLocaleRef.current) {
            router_default().reload();
        }
    }, [
        routerLocale,
        isEditing
    ]);
    // update date-fns locale to match selected locale
    (0,external_react_.useEffect)(()=>{
        const dateFnsLocale = (0,getDateFnsLocale/* getDateFnsLocale */.G)(locale);
        const defaultOptions = (0,external_date_fns_.getDefaultOptions)();
        (0,external_date_fns_.setDefaultOptions)({
            ...defaultOptions,
            locale: dateFnsLocale
        });
    }, [
        locale
    ]);
    // subscribe to locale change event from builder
    (0,external_react_.useEffect)(()=>{
        const changeLocale = (data)=>{
            if (data?.locale) {
                updateRouterLocale(data.locale);
            }
        };
        if (Builder/* Builder.isEditing */.I.isEditing) {
            Builder/* Builder.on */.I.on(builder_.BUILDER.SET_LOCALE, changeLocale);
        }
        return ()=>{
            if (Builder/* Builder.isEditing */.I.isEditing) {
                Builder/* Builder.off */.I.off(builder_.BUILDER.SET_LOCALE, changeLocale);
            }
        };
    }, [
        updateRouterLocale
    ]);
    return [
        locale,
        setLocale
    ];
};

;// CONCATENATED MODULE: ./src/hooks/useLocaleController/index.ts


// EXTERNAL MODULE: external "lodash/noop"
var noop_ = __webpack_require__(87553);
var noop_default = /*#__PURE__*/__webpack_require__.n(noop_);
;// CONCATENATED MODULE: ./src/components/contexts/LocaleContext.tsx





const LocaleContext = /*#__PURE__*/ (0,external_react_.createContext)({
    locale: constants/* DEFAULT_LOCALE */.ZW,
    setLocale: (noop_default())
});
const LocaleContextProvider = (props)=>{
    const { initialLocale , children  } = props;
    const [locale, setLocale] = useLocaleController({
        defaultValue: initialLocale
    });
    const value = (0,external_react_.useMemo)(()=>({
            locale,
            setLocale
        }), [
        locale,
        setLocale
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(LocaleContext.Provider, {
        value: value,
        children: children
    });
};
const useLocaleContext = ()=>{
    return (0,external_react_.useContext)(LocaleContext);
};


/***/ }),

/***/ 80143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ Builder)
});

// UNUSED EXPORTS: Wrapper

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@king-david-it/builder"
var builder_ = __webpack_require__(42864);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/application/constants.ts
var constants = __webpack_require__(41430);
// EXTERNAL MODULE: ./src/components/contexts/LocaleContext.tsx + 2 modules
var LocaleContext = __webpack_require__(48719);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
;// CONCATENATED MODULE: ./src/components/custom/Builder/Builder.tsx







const Wrapper = (props)=>{
    const { translatable =[] , rootProps , children , withInputRef =false  } = props;
    const { locale  } = (0,LocaleContext/* useLocaleContext */.PE)();
    const { connectors: { connect  }  } = (0,builder_.useNode)();
    const translatableProps = translatable.reduce((acc, translatablePropName)=>{
        const prop = get_default()(props, translatablePropName);
        const translatableProp = get_default()(prop, locale) || get_default()(prop, constants/* DEFAULT_LOCALE */.ZW);
        return {
            ...acc,
            [translatablePropName]: translatableProp
        };
    }, {});
    const inputRef = (el)=>el && connect(el);
    if (withInputRef) {
        return /*#__PURE__*/ (0,external_react_.cloneElement)(children, {
            ...children.props,
            ...translatableProps,
            ref: inputRef
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        ref: inputRef,
        ...rootProps,
        children: /*#__PURE__*/ (0,external_react_.cloneElement)(children, {
            ...children.props,
            ...translatableProps
        })
    });
};
const withWrapperHoc = (Component, params)=>{
    const WrappedComponent = (props)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
            ...params,
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...props
            })
        });
    };
    return WrappedComponent;
};
/**
 * To remove boilerplates, for custom functionality
 */ class Builder extends builder_.Builder {
    /* Probably, It would be better to use object as params here.
 To keep initial params "style" as `(component, spec)` same was used.
 At least such way we can easily replace original and custom Builder */ static registerComponent(component, spec) {
        const { rootProps , withInputRef , ...restSpec } = spec;
        const { inputs  } = restSpec;
        const translatable = inputs?.reduce((acc, inputData)=>{
            if (inputData.isTranslatable) {
                return [
                    ...acc,
                    inputData.name
                ];
            }
            return acc;
        }, []);
        return builder_.Builder.registerComponent(withWrapperHoc(component, {
            rootProps,
            translatable,
            withInputRef
        }), restSpec);
    }
}
/* harmony default export */ const Builder_Builder = ((/* unused pure expression or super */ null && (Builder)));

;// CONCATENATED MODULE: ./src/components/custom/Builder/index.ts



/***/ }),

/***/ 55533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* reexport */ getDateFnsLocale)
});

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(74146);
// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__(1712);
var get_default = /*#__PURE__*/__webpack_require__.n(get_);
// EXTERNAL MODULE: ./src/application/constants.ts
var constants = __webpack_require__(41430);
// EXTERNAL MODULE: external "date-fns/locale"
var locale_ = __webpack_require__(45564);
;// CONCATENATED MODULE: ./src/helpers/getDateFnsLocale/constants.ts

// eslint-disable-next-line import/no-duplicates

const LOCALES_ENUM = constants/* LOCALES.reduce */.lE.reduce((acc, locale)=>({
        ...acc,
        [locale]: locale
    }), {});
const dateFnsLocales = {
    [LOCALES_ENUM["en-US"]]: locale_.enUS,
    [LOCALES_ENUM["fr-FR"]]: locale_.fr,
    [LOCALES_ENUM["he-IL"]]: locale_.he
};

;// CONCATENATED MODULE: ./src/helpers/getDateFnsLocale/getDateFnsLocale.ts



const getDateFnsLocale = (locale)=>{
    const enUSLocale = dateFnsLocales["en-US"];
    if (!locale) {
        const defaultOptions = (0,external_date_fns_.getDefaultOptions)();
        const defaultLocale = get_default()(defaultOptions, "locale");
        return defaultLocale || enUSLocale;
    }
    return get_default()(dateFnsLocales, locale, enUSLocale);
};

;// CONCATENATED MODULE: ./src/helpers/getDateFnsLocale/index.ts



/***/ })

};
;
//# sourceMappingURL=54.js.map