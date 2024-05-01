"use strict";
exports.id = 975;
exports.ids = [975];
exports.modules = {

/***/ 19594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Typography)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(11377);
;// CONCATENATED MODULE: ./src/components/Typography/Typography.tsx




const Typography = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const { children , translateOptions , sx , smVariant , mdVariant , lgVariant , bigVariant , variant , withTooltip , component , ...rest } = props;
    const { t: translate  } = (0,external_next_i18next_.useTranslation)();
    const [containerRef, setContainerRef] = (0,external_react_.useState)(null);
    const [isTooltipHidden, setIsTooltipHidden] = (0,external_react_.useState)(false);
    // hide tooltip if we don't have overflow
    (0,external_react_.useEffect)(()=>{
        /* We use setTimeout to skip one additional tick.
    E.g., it is needed on poi map card. */ setTimeout(()=>{
            if (containerRef && containerRef?.scrollWidth <= containerRef?.clientWidth) {
                setIsTooltipHidden(true);
            }
        }, 0);
    }, [
        containerRef
    ]);
    const theme = (0,material_.useTheme)();
    const isSmUp = (0,material_.useMediaQuery)(theme.breakpoints.up("sm"));
    const isMdUp = (0,material_.useMediaQuery)(theme.breakpoints.up("md"));
    const isLgUp = (0,material_.useMediaQuery)(theme.breakpoints.up("lg"));
    const isBig = isMdUp;
    const textValue = typeof children === "string" ? translate(children, translateOptions) : "";
    const handleRef = (0,external_react_.useCallback)((node)=>{
        setContainerRef(node);
        if (!ref) return;
        if (typeof ref === "function") {
            ref(node);
            return;
        }
        ref.current = node;
    }, [
        ref
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
        title: isTooltipHidden || !withTooltip ? "" : textValue,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
            ref: handleRef,
            sx: {
                textOverflow: "ellipsis",
                overflow: "hidden",
                ...sx
            },
            ...rest,
            variant: (()=>{
                if (isBig && bigVariant) return bigVariant;
                if (isLgUp && lgVariant) return lgVariant;
                if (isMdUp && mdVariant) return mdVariant;
                if (isSmUp && smVariant) return smVariant;
                return variant;
            })(),
            children: typeof children === "string" ? textValue : children
        })
    });
});
Typography.displayName = "Typography";
/* harmony default export */ const Typography_Typography = ((/* unused pure expression or super */ null && (Typography)));

;// CONCATENATED MODULE: ./src/components/Typography/index.ts



/***/ }),

/***/ 4630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ NextLink_NextLink)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@king-david-it/builder"
var builder_ = __webpack_require__(42864);
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(39097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/links/NextLink/NextLink.tsx




const NextLink = /*#__PURE__*/ (0,external_react_.forwardRef)(({ href , children , target , className , ...rest }, ref)=>{
    const { isEditing  } = (0,builder_.useBuilderState)();
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        ref: ref,
        href: isEditing && target !== "_blank" ? "#" : href,
        target: target,
        className: className,
        ...rest,
        children: children
    });
});
NextLink.displayName = "NextLink";
/* harmony default export */ const NextLink_NextLink = (NextLink);

;// CONCATENATED MODULE: ./src/components/links/NextLink/index.ts




/***/ })

};
;
//# sourceMappingURL=975.js.map