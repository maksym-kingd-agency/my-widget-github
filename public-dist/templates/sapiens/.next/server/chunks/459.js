"use strict";
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 45924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RM": () => (/* binding */ GUEST_RESERVATION_SOURCES),
/* harmony export */   "YV": () => (/* binding */ RESERVATION_RESPONSE_SOURCES),
/* harmony export */   "rR": () => (/* binding */ PAYER_RESERVATION_SOURCES),
/* harmony export */   "vd": () => (/* binding */ CHECKOUT_FORM_SOURCES)
/* harmony export */ });
const GUEST_RESERVATION_SOURCES = {
    first_name: "first_name",
    last_name: "last_name",
    email: "email"
};
const PAYER_RESERVATION_SOURCES = {
    first_name: "first_name",
    last_name: "last_name",
    email: "email"
};
const CHECKOUT_FORM_SOURCES = {
    quote: "quote",
    driver_payment_method_id: "driver_payment_method_id",
    rate_plan_id: "rate_plan_id",
    guest: "guest",
    payer: "payer",
    cc_token: "cc_token",
    is_apply_for_billing: "is_apply_for_billing"
};
const RESERVATION_RESPONSE_SOURCES = {
    checkin_at: "checkin_at",
    checkout_at: "checkout_at",
    reference: "reference",
    users_count: "users_count",
    listing: "listing"
};


/***/ }),

/***/ 8459:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KS": () => (/* reexport safe */ _useMutationReservation__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   "RM": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.RM),
/* harmony export */   "YV": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.YV),
/* harmony export */   "lc": () => (/* reexport safe */ _schemas__WEBPACK_IMPORTED_MODULE_1__.l),
/* harmony export */   "nG": () => (/* reexport safe */ _schemas__WEBPACK_IMPORTED_MODULE_1__.n),
/* harmony export */   "rR": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.rR),
/* harmony export */   "vd": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.vd)
/* harmony export */ });
/* harmony import */ var _useMutationReservation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66651);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56121);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useMutationReservation__WEBPACK_IMPORTED_MODULE_0__, _schemas__WEBPACK_IMPORTED_MODULE_1__]);
([_useMutationReservation__WEBPACK_IMPORTED_MODULE_0__, _schemas__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ reservationFormValidationSchema),
/* harmony export */   "n": () => (/* binding */ reservationResponseZodSchema)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9926);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const payerReservationSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .PAYER_RESERVATION_SOURCES.first_name */ .rR.first_name]: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(2).max(95),
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .PAYER_RESERVATION_SOURCES.last_name */ .rR.last_name]: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(2).max(95),
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .PAYER_RESERVATION_SOURCES.email */ .rR.email]: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().email()
});
const optionalPayerReservationSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .PAYER_RESERVATION_SOURCES.first_name */ .rR.first_name]: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().max(95),
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .PAYER_RESERVATION_SOURCES.last_name */ .rR.last_name]: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().max(95),
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .PAYER_RESERVATION_SOURCES.email */ .rR.email]: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().email().or(zod__WEBPACK_IMPORTED_MODULE_1__.z.literal(""))
}).optional();
const reservationFormValidationBaseSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHECKOUT_FORM_SOURCES.guest */ .vd.guest]: zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        [_constants__WEBPACK_IMPORTED_MODULE_2__/* .GUEST_RESERVATION_SOURCES.first_name */ .RM.first_name]: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(2).max(95),
        [_constants__WEBPACK_IMPORTED_MODULE_2__/* .GUEST_RESERVATION_SOURCES.last_name */ .RM.last_name]: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(2).max(95),
        [_constants__WEBPACK_IMPORTED_MODULE_2__/* .GUEST_RESERVATION_SOURCES.email */ .RM.email]: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().email()
    })
});
const notAppliedForBillingSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHECKOUT_FORM_SOURCES.is_apply_for_billing */ .vd.is_apply_for_billing]: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal(false),
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHECKOUT_FORM_SOURCES.payer */ .vd.payer]: payerReservationSchema
}).merge(reservationFormValidationBaseSchema);
const appliedForBillingSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHECKOUT_FORM_SOURCES.is_apply_for_billing */ .vd.is_apply_for_billing]: zod__WEBPACK_IMPORTED_MODULE_1__.z.literal(true),
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHECKOUT_FORM_SOURCES.payer */ .vd.payer]: optionalPayerReservationSchema
}).merge(reservationFormValidationBaseSchema);
const reservationFormValidationSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.discriminatedUnion(_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHECKOUT_FORM_SOURCES.is_apply_for_billing */ .vd.is_apply_for_billing, [
    notAppliedForBillingSchema,
    appliedForBillingSchema
]);
const reservationResponseZodSchema = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .RESERVATION_RESPONSE_SOURCES.checkin_at */ .YV.checkin_at]: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .RESERVATION_RESPONSE_SOURCES.checkout_at */ .YV.checkout_at]: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .RESERVATION_RESPONSE_SOURCES.reference */ .YV.reference]: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .RESERVATION_RESPONSE_SOURCES.users_count */ .YV.users_count]: zod__WEBPACK_IMPORTED_MODULE_1__.z.number(),
    [_constants__WEBPACK_IMPORTED_MODULE_2__/* .RESERVATION_RESPONSE_SOURCES.listing */ .YV.listing]: _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .zodListingSchemas.show */ .vW.show
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 66651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useMutationReservation)
/* harmony export */ });
/* harmony import */ var _packages_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11900);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49752);
/* harmony import */ var application_resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22825);
/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56121);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _schemas__WEBPACK_IMPORTED_MODULE_2__]);
([_packages_providers__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _schemas__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const reservationMutationFn = async (params)=>{
    const { data , listingId  } = params;
    const { data: { data: reservationResponseData  }  } = await _packages_providers__WEBPACK_IMPORTED_MODULE_0__/* .fetchClient.post */ .zk.post({
        pathname: `${application_resources__WEBPACK_IMPORTED_MODULE_3__/* .LISTINGS_RESOURCE */ .t8}/${listingId}/${application_resources__WEBPACK_IMPORTED_MODULE_3__/* .RESERVATIONS_RESOURCE */ .pk}`,
        data
    });
    return _schemas__WEBPACK_IMPORTED_MODULE_2__/* .reservationResponseZodSchema.parse */ .n.parse(reservationResponseData);
};
const useMutationReservation = ()=>{
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({
        mutationFn: reservationMutationFn
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
//# sourceMappingURL=459.js.map