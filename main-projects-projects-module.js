(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-projects-projects-module"],{

/***/ "./node_modules/angular-mydatepicker/__ivy_ngcc__/fesm2015/angular-mydatepicker.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/angular-mydatepicker/__ivy_ngcc__/fesm2015/angular-mydatepicker.js ***!
  \*****************************************************************************************/
/*! exports provided: AngularMyDatePickerModule, AngularMyDatePickerDirective, CalendarComponent, DayViewComponent, MonthViewComponent, YearViewComponent, SelectionBarComponent, UtilService, DefaultConfigService, LocaleService, AngularMyDatePickerCalendarDirective, CalToggle, KeyCode, KeyName, MonthId, Year, DefaultView, ActiveView, CalAnimation, HeaderAction, D, DD, M, MM, MMM, Y, YYYY, DATE_ROW_COUNT, DATE_COL_COUNT, MONTH_ROW_COUNT, MONTH_COL_COUNT, YEAR_ROW_COUNT, YEAR_COL_COUNT, DOT, UNDER_LINE, PIPE, YEAR_SEPARATOR, SU, MO, TU, WE, TH, FR, SA, DEFAULT_LOCALE, ZERO_STR, EMPTY_STR, SPACE_STR, CLICK, KEYUP, BLUR, DISABLED, BODY, VALUE, OPTIONS, DEFAULT_MONTH, LOCALE, OBJECT, PX, STYLE, INNER_HTML, OPTS, YEARS_DURATION, YEARS, VISIBLE_MONTH, SELECT_MONTH, SELECT_YEAR, PREV_VIEW_DISABLED, NEXT_VIEW_DISABLED, DATES, WEEK_DAYS, SELECTED_DATE, SELECTED_DATE_RANGE, MONTHS, ANIMATION_END, ANIMATION_TIMEOUT, MY_DP_ANIMATION, ANIMATION_NAMES, IN, OUT, TABINDEX, TD_SELECTOR, PREVENT_CLOSE_TIMEOUT, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMyDatePickerModule", function() { return AngularMyDatePickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMyDatePickerDirective", function() { return AngularMyDatePickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewComponent", function() { return DayViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthViewComponent", function() { return MonthViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearViewComponent", function() { return YearViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionBarComponent", function() { return SelectionBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultConfigService", function() { return DefaultConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleService", function() { return LocaleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMyDatePickerCalendarDirective", function() { return AngularMyDatePickerCalendarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalToggle", function() { return CalToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCode", function() { return KeyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyName", function() { return KeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthId", function() { return MonthId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Year", function() { return Year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultView", function() { return DefaultView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveView", function() { return ActiveView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalAnimation", function() { return CalAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderAction", function() { return HeaderAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DD", function() { return DD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MM", function() { return MM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MMM", function() { return MMM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YYYY", function() { return YYYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_ROW_COUNT", function() { return DATE_ROW_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_COL_COUNT", function() { return DATE_COL_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH_ROW_COUNT", function() { return MONTH_ROW_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH_COL_COUNT", function() { return MONTH_COL_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEAR_ROW_COUNT", function() { return YEAR_ROW_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEAR_COL_COUNT", function() { return YEAR_COL_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOT", function() { return DOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNDER_LINE", function() { return UNDER_LINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIPE", function() { return PIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEAR_SEPARATOR", function() { return YEAR_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SU", function() { return SU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MO", function() { return MO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TU", function() { return TU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WE", function() { return WE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TH", function() { return TH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FR", function() { return FR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SA", function() { return SA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LOCALE", function() { return DEFAULT_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO_STR", function() { return ZERO_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_STR", function() { return EMPTY_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE_STR", function() { return SPACE_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLICK", function() { return CLICK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYUP", function() { return KEYUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUR", function() { return BLUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISABLED", function() { return DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BODY", function() { return BODY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE", function() { return VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS", function() { return OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MONTH", function() { return DEFAULT_MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALE", function() { return LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECT", function() { return OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PX", function() { return PX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE", function() { return STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INNER_HTML", function() { return INNER_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTS", function() { return OPTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEARS_DURATION", function() { return YEARS_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEARS", function() { return YEARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISIBLE_MONTH", function() { return VISIBLE_MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MONTH", function() { return SELECT_MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_YEAR", function() { return SELECT_YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREV_VIEW_DISABLED", function() { return PREV_VIEW_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT_VIEW_DISABLED", function() { return NEXT_VIEW_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATES", function() { return DATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEK_DAYS", function() { return WEEK_DAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_DATE", function() { return SELECTED_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_DATE_RANGE", function() { return SELECTED_DATE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHS", function() { return MONTHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_END", function() { return ANIMATION_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_TIMEOUT", function() { return ANIMATION_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_DP_ANIMATION", function() { return MY_DP_ANIMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_NAMES", function() { return ANIMATION_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IN", function() { return IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUT", function() { return OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABINDEX", function() { return TABINDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TD_SELECTOR", function() { return TD_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREVENT_CLOSE_TIMEOUT", function() { return PREVENT_CLOSE_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FooterBarComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */



const _c0 = ["selectorEl"];
const _c1 = ["styleEl"];
function CalendarComponent_lib_day_view_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "lib-day-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dayCellClicked", function CalendarComponent_lib_day_view_6_Template_lib_day_view_dayCellClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onDayCellClicked($event); })("dayCellKeyDown", function CalendarComponent_lib_day_view_6_Template_lib_day_view_dayCellKeyDown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onDayCellKeyDown($event); })("viewActivated", function CalendarComponent_lib_day_view_6_Template_lib_day_view_viewActivated_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.onViewActivated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("opts", ctx_r2.opts)("dates", ctx_r2.dates)("weekDays", ctx_r2.weekDays)("selectedDate", ctx_r2.selectedDate)("selectedDateRange", ctx_r2.selectedDateRange)("viewChanged", ctx_r2.viewChanged);
} }
function CalendarComponent_lib_month_view_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "lib-month-view", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("monthCellClicked", function CalendarComponent_lib_month_view_7_Template_lib_month_view_monthCellClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.onMonthCellClicked($event); })("monthCellKeyDown", function CalendarComponent_lib_month_view_7_Template_lib_month_view_monthCellKeyDown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.onMonthCellKeyDown($event); })("viewActivated", function CalendarComponent_lib_month_view_7_Template_lib_month_view_viewActivated_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.onViewActivated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("opts", ctx_r3.opts)("months", ctx_r3.months)("viewChanged", ctx_r3.viewChanged);
} }
function CalendarComponent_lib_year_view_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "lib-year-view", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("yearCellClicked", function CalendarComponent_lib_year_view_8_Template_lib_year_view_yearCellClicked_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onYearCellClicked($event); })("yearCellKeyDown", function CalendarComponent_lib_year_view_8_Template_lib_year_view_yearCellKeyDown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.onYearCellKeyDown($event); })("viewActivated", function CalendarComponent_lib_year_view_8_Template_lib_year_view_viewActivated_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.onViewActivated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("opts", ctx_r4.opts)("years", ctx_r4.years)("viewChanged", ctx_r4.viewChanged);
} }
function CalendarComponent_lib_footer_bar_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "lib-footer-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("footerBarTxtClicked", function CalendarComponent_lib_footer_bar_9_Template_lib_footer_bar_footerBarTxtClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.onTodayFooterClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("opts", ctx_r5.opts);
} }
const _c2 = function (a0, a1, a2, a3) { return { inline: a0, selectorWidth: a1, selectorHeight: a2, selectorPos: a3 }; };
const _c3 = function (a0, a1, a2, a3, a4) { return { "myDpSelectorArrow": a0, "myDpSelectorArrowLeft": a1, "myDpSelectorArrowRight": a2, "myDpSelectorAbsolute": a3, "myDpSelectorPosInitial": a4 }; };
const _c4 = function (a0, a1) { return { "myDpMonthLabel": a0, "myDpHeaderLabelBtnNotEdit": a1 }; };
function SelectionBarComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectionBarComponent_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.opts.monthSelector && ctx_r1.onMonthViewBtnClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("tabindex", ctx_r0.opts.monthSelector ? "0" : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c4, ctx_r0.opts.monthSelector, !ctx_r0.opts.monthSelector));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.visibleMonth.monthTxt);
} }
const _c5 = function (a0) { return { "myDpHeaderBtnDisabled": a0 }; };
const _c6 = function (a0, a1) { return { "myDpYearLabel": a0, "myDpHeaderLabelBtnNotEdit": a1 }; };
function DayViewComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DayViewComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](d_r3);
} }
function DayViewComponent_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](w_r4.weekNbr);
} }
const _c7 = function (a0) { return { "border-top": a0 }; };
function DayViewComponent_tr_6_td_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 12);
} if (rf & 2) {
    const d_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c7, "8px solid " + d_r8.markedDate.color));
} }
const _c8 = function (a0, a1, a2, a3, a4, a5, a6) { return { "myDpRangeColor": a0, "myDpPrevMonth": a1, "myDpCurrMonth": a2, "myDpNextMonth": a3, "myDpSelectedDay": a4, "myDpDisabled": a5, "myDpTableSingleDay": a6 }; };
const _c9 = function (a0, a1, a2) { return { "myDpMarkCurrDay": a0, "myDpDimDay": a1, "myDpHighlight": a2 }; };
function DayViewComponent_tr_6_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DayViewComponent_tr_6_td_2_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const d_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.onDayCellClicked($event, d_r8); })("keydown", function DayViewComponent_tr_6_td_2_Template_td_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const d_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.onDayCellKeyDown($event, d_r8); })("mouseenter", function DayViewComponent_tr_6_td_2_Template_td_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const d_r8 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.onDayCellMouseEnter(d_r8); })("mouseleave", function DayViewComponent_tr_6_td_2_Template_td_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.onDayCellMouseLeave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DayViewComponent_tr_6_td_2_span_1_Template, 1, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate4"]("d_", d_r8.row, "_", d_r8.col, " myDpDaycell ", d_r8.markedDate.styleClass, " ", d_r8.disabledDate.styleClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "d_", d_r8.row, "_", d_r8.col, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction7"](13, _c8, ctx_r6.isDateInRange(d_r8.dateObj) || d_r8.range, d_r8.cmo === ctx_r6.prevMonthId, d_r8.cmo === ctx_r6.currMonthId && !d_r8.disabledDate.disabled, d_r8.cmo === ctx_r6.nextMonthId, !ctx_r6.opts.dateRange && ctx_r6.isDateSame(d_r8.dateObj) || ctx_r6.opts.dateRange && ctx_r6.isDateRangeBeginOrEndSame(d_r8.dateObj), d_r8.disabledDate.disabled && !d_r8.disabledDate.styleClass.length, !d_r8.disabledDate.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", !d_r8.disabledDate.disabled ? 0 : 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", d_r8.markedDate.marked && d_r8.markedDate.color.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](21, _c9, d_r8.currDay && ctx_r6.opts.markCurrentDay, d_r8.highlight && (d_r8.cmo === ctx_r6.prevMonthId || d_r8.cmo === ctx_r6.nextMonthId || d_r8.disabledDate.disabled), d_r8.highlight));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](d_r8.dateObj.day);
} }
function DayViewComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DayViewComponent_tr_6_td_1_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DayViewComponent_tr_6_td_2_Template, 4, 25, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.opts.showWeekNumbers && ctx_r2.opts.firstDayOfWeek === "mo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", w_r4.week);
} }
const _c10 = function (a0, a1, a2, a3) { return { "ng-myrtl": a0, "myDpFooter": a1, "myDpNoFooter": a2, "myDpViewChangeAnimation": a3 }; };
function MonthViewComponent_tr_2_td_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](m_r3.nbr);
} }
const _c11 = function (a0, a1, a2) { return { "myDpSelectedMonth": a0, "myDpDisabled": a1, "myDpTableSingleMonth": a2 }; };
const _c12 = function (a0) { return { "myDpMarkCurrMonth": a0 }; };
function MonthViewComponent_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MonthViewComponent_tr_2_td_1_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const m_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.onMonthCellClicked($event, m_r3); })("keydown", function MonthViewComponent_tr_2_td_1_Template_td_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const m_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.onMonthCellKeyDown($event, m_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MonthViewComponent_tr_2_td_1_span_1_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("m_", m_r3.row, "_", m_r3.col, " myDpMonthcell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "m_", m_r3.row, "_", m_r3.col, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](11, _c11, m_r3.selected, m_r3.disabled, !m_r3.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", !m_r3.disabled ? 0 : 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.opts.showMonthNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c12, m_r3.currMonth && ctx_r2.opts.markCurrentMonth));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](m_r3.name);
} }
function MonthViewComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MonthViewComponent_tr_2_td_1_Template, 4, 17, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", mr_r1);
} }
const _c13 = function (a0, a1, a2) { return { "myDpSelectedYear": a0, "myDpDisabled": a1, "myDpTableSingleYear": a2 }; };
const _c14 = function (a0) { return { "myDpMarkCurrYear": a0 }; };
function YearViewComponent_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function YearViewComponent_tr_2_td_1_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const y_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r4.onYearCellClicked($event, y_r3); })("keydown", function YearViewComponent_tr_2_td_1_Template_td_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const y_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.onYearCellKeyDown($event, y_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const y_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("y_", y_r3.row, "_", y_r3.col, " myDpYearcell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("id", "y_", y_r3.row, "_", y_r3.col, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](10, _c13, y_r3.selected, y_r3.disabled, !y_r3.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", !y_r3.disabled ? 0 : 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c14, y_r3.currYear && ctx_r2.opts.markCurrentYear));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](y_r3.year);
} }
function YearViewComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, YearViewComponent_tr_2_td_1_Template, 3, 16, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const yr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", yr_r1);
} }
const KeyCode = {
    enter: 13,
    esc: 27,
    space: 32,
    leftArrow: 37,
    upArrow: 38,
    rightArrow: 39,
    downArrow: 40,
    tab: 9,
    shift: 16,
};
KeyCode[KeyCode.enter] = 'enter';
KeyCode[KeyCode.esc] = 'esc';
KeyCode[KeyCode.space] = 'space';
KeyCode[KeyCode.leftArrow] = 'leftArrow';
KeyCode[KeyCode.upArrow] = 'upArrow';
KeyCode[KeyCode.rightArrow] = 'rightArrow';
KeyCode[KeyCode.downArrow] = 'downArrow';
KeyCode[KeyCode.tab] = 'tab';
KeyCode[KeyCode.shift] = 'shift';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const KeyName = {
    enter: "Enter",
    esc: "Escape|Esc",
    space: " |Spacebar",
    leftArrow: "ArrowLeft|Left",
    upArrow: "ArrowUp|Up",
    rightArrow: "ArrowRight|Right",
    downArrow: "ArrowDown|Down",
    tab: "Tab",
    shift: "Shift",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Constants
 * @type {?}
 */
const D = "d";
/** @type {?} */
const DD = "dd";
/** @type {?} */
const M = "m";
/** @type {?} */
const MM = "mm";
/** @type {?} */
const MMM = "mmm";
/** @type {?} */
const Y = "y";
/** @type {?} */
const YYYY = "yyyy";
/** @type {?} */
const DATE_ROW_COUNT = 5;
/** @type {?} */
const DATE_COL_COUNT = 6;
/** @type {?} */
const MONTH_ROW_COUNT = 3;
/** @type {?} */
const MONTH_COL_COUNT = 2;
/** @type {?} */
const YEAR_ROW_COUNT = 4;
/** @type {?} */
const YEAR_COL_COUNT = 4;
/** @type {?} */
const DOT = ".";
/** @type {?} */
const UNDER_LINE = "_";
/** @type {?} */
const PIPE = "|";
/** @type {?} */
const YEAR_SEPARATOR = " - ";
/** @type {?} */
const SU = "su";
/** @type {?} */
const MO = "mo";
/** @type {?} */
const TU = "tu";
/** @type {?} */
const WE = "we";
/** @type {?} */
const TH = "th";
/** @type {?} */
const FR = "fr";
/** @type {?} */
const SA = "sa";
/** @type {?} */
const DEFAULT_LOCALE = "en";
/** @type {?} */
const ZERO_STR = "0";
/** @type {?} */
const EMPTY_STR = "";
/** @type {?} */
const SPACE_STR = " ";
/** @type {?} */
const CLICK = "click";
/** @type {?} */
const KEYUP = "keyup";
/** @type {?} */
const BLUR = "blur";
/** @type {?} */
const DISABLED = "disabled";
/** @type {?} */
const BODY = "body";
/** @type {?} */
const VALUE = "value";
/** @type {?} */
const OPTIONS = "options";
/** @type {?} */
const DEFAULT_MONTH = "defaultMonth";
/** @type {?} */
const LOCALE = "locale";
/** @type {?} */
const OBJECT = "object";
/** @type {?} */
const PX = "px";
/** @type {?} */
const STYLE = "style";
/** @type {?} */
const INNER_HTML = "innerHTML";
/** @type {?} */
const OPTS = "opts";
/** @type {?} */
const YEARS_DURATION = "yearsDuration";
/** @type {?} */
const YEARS = "years";
/** @type {?} */
const VISIBLE_MONTH = "visibleMonth";
/** @type {?} */
const SELECT_MONTH = "selectMonth";
/** @type {?} */
const SELECT_YEAR = "selectYear";
/** @type {?} */
const PREV_VIEW_DISABLED = "prevViewDisabled";
/** @type {?} */
const NEXT_VIEW_DISABLED = "nextViewDisabled";
/** @type {?} */
const DATES = "dates";
/** @type {?} */
const WEEK_DAYS = "weekDays";
/** @type {?} */
const SELECTED_DATE = "selectedDate";
/** @type {?} */
const SELECTED_DATE_RANGE = "selectedDateRange";
/** @type {?} */
const MONTHS = "months";
/** @type {?} */
const ANIMATION_END = "animationend";
/** @type {?} */
const ANIMATION_TIMEOUT = 550;
/** @type {?} */
const MY_DP_ANIMATION = "myDpAnimation";
/** @type {?} */
const ANIMATION_NAMES = ["Fade", "ScaleTop", "ScaleCenter", "Rotate", "FlipDiagonal", "Own"];
/** @type {?} */
const IN = "In";
/** @type {?} */
const OUT = "Out";
/** @type {?} */
const TABINDEX = "tabindex";
/** @type {?} */
const TD_SELECTOR = "table tbody tr td:not(.myDpDaycellWeekNbr)";
/** @type {?} */
const PREVENT_CLOSE_TIMEOUT = 50;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UtilService {
    constructor() {
        this.weekDays = [SU, MO, TU, WE, TH, FR, SA];
    }
    /**
     * @param {?} dateStr
     * @param {?} options
     * @param {?} validateOpts
     * @return {?}
     */
    isDateValid(dateStr, options, validateOpts) {
        const { dateFormat, minYear, maxYear, monthLabels } = options;
        /** @type {?} */
        const returnDate = this.resetDate();
        /** @type {?} */
        const datesInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        /** @type {?} */
        const isMonthStr = dateFormat.indexOf(MMM) !== -1;
        /** @type {?} */
        const delimeters = dateFormat.match(/[^(dmy)]{1,}/g);
        if (!dateStr || dateStr === EMPTY_STR) {
            return returnDate;
        }
        /** @type {?} */
        const dateValues = this.getDateValue(dateStr, dateFormat, delimeters);
        /** @type {?} */
        let year = 0;
        /** @type {?} */
        let month = 0;
        /** @type {?} */
        let day = 0;
        for (const dv of dateValues) {
            const { format } = dv;
            if (format.indexOf(YYYY) !== -1) {
                year = this.getNumberByValue(dv);
            }
            else if (format.indexOf(M) !== -1) {
                month = isMonthStr ? this.getMonthNumberByMonthName(dv, monthLabels) : this.getNumberByValue(dv);
            }
            else if (format.indexOf(D) !== -1) {
                day = this.getNumberByValue(dv);
            }
        }
        const { validateDisabledDates, selectedValue } = validateOpts;
        year = year === 0 && selectedValue ? selectedValue.year : year;
        month = month === 0 && selectedValue ? selectedValue.month : month;
        day = day === 0 && selectedValue ? selectedValue.day : day;
        /** @type {?} */
        const today = this.getToday();
        if (year === 0 && (month !== 0 || day !== 0)) {
            year = today.year;
        }
        if (month === 0 && (year !== 0 || day !== 0)) {
            month = today.month;
        }
        if (day === 0 && (year !== 0 || month !== 0)) {
            day = today.day;
        }
        if (month !== -1 && day !== -1 && year !== -1) {
            if (year < minYear || year > maxYear || month < 1 || month > 12) {
                return returnDate;
            }
            /** @type {?} */
            const date = { year, month, day };
            if (validateDisabledDates && this.isDisabledDate(date, options).disabled) {
                return returnDate;
            }
            if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
                datesInMonth[1] = 29;
            }
            if (day < 1 || day > datesInMonth[month - 1]) {
                return returnDate;
            }
            // Valid date
            return date;
        }
        return returnDate;
    }
    /**
     * @param {?} dateRangeStr
     * @param {?} options
     * @param {?} validateOpts
     * @return {?}
     */
    isDateValidDateRange(dateRangeStr, options, validateOpts) {
        /** @type {?} */
        let dateRange = { begin: this.resetDate(), end: this.resetDate() };
        if (dateRangeStr && dateRangeStr.length) {
            /** @type {?} */
            const dates = dateRangeStr.split(options.dateRangeDatesDelimiter);
            if (dates && dates.length === 2) {
                const [beginDate, endDate] = dates;
                let { selectedValue } = validateOpts;
                if (selectedValue) {
                    validateOpts.selectedValue = selectedValue.begin;
                }
                /** @type {?} */
                const begin = this.isDateValid(beginDate, options, validateOpts);
                if (this.isInitializedDate(begin)) {
                    if (selectedValue) {
                        validateOpts.selectedValue = selectedValue.end;
                    }
                    /** @type {?} */
                    const end = this.isDateValid(endDate, options, validateOpts);
                    if (this.isInitializedDate(end) && this.isDateSameOrEarlier(begin, end)) {
                        dateRange = { begin, end };
                    }
                }
            }
        }
        return dateRange;
    }
    /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} delimeters
     * @return {?}
     */
    getDateValue(dateStr, dateFormat, delimeters) {
        /** @type {?} */
        let del = EMPTY_STR;
        if (delimeters) {
            for (const d of delimeters) {
                if (del.indexOf(d) === -1) {
                    del += d;
                }
            }
        }
        /** @type {?} */
        const re = new RegExp("[" + del + "]");
        /** @type {?} */
        const ds = dateStr.split(re);
        /** @type {?} */
        const df = dateFormat.split(re);
        /** @type {?} */
        const da = [];
        for (let i = 0; i < df.length; i++) {
            if (df[i].indexOf(YYYY) !== -1) {
                da.push({ value: ds[i], format: df[i] });
            }
            if (df[i].indexOf(M) !== -1) {
                da.push({ value: ds[i], format: df[i] });
            }
            if (df[i].indexOf(D) !== -1) {
                da.push({ value: ds[i], format: df[i] });
            }
        }
        return da;
    }
    /**
     * @param {?} df
     * @param {?} monthLabels
     * @return {?}
     */
    getMonthNumberByMonthName(df, monthLabels) {
        if (df.value) {
            for (let key = 1; key <= 12; key++) {
                if (df.value.toLowerCase() === monthLabels[key].toLowerCase()) {
                    return key;
                }
            }
        }
        return -1;
    }
    /**
     * @param {?} df
     * @return {?}
     */
    getNumberByValue(df) {
        if (!/^\d+$/.test(df.value)) {
            return -1;
        }
        /** @type {?} */
        let nbr = Number(df.value);
        if (df.format.length === 1 && df.value.length !== 1 && nbr < 10 || df.format.length === 1 && df.value.length !== 2 && nbr >= 10) {
            nbr = -1;
        }
        else if (df.format.length === 2 && df.value.length > 2) {
            nbr = -1;
        }
        return nbr;
    }
    /**
     * @param {?} monthString
     * @return {?}
     */
    parseDefaultMonth(monthString) {
        /** @type {?} */
        const month = { monthTxt: EMPTY_STR, monthNbr: 0, year: 0 };
        if (monthString !== EMPTY_STR) {
            /** @type {?} */
            const split = monthString.split(monthString.match(/[^0-9]/)[0]);
            month.monthNbr = split[0].length === 2 ? Number(split[0]) : Number(split[1]);
            month.year = split[0].length === 2 ? Number(split[1]) : Number(split[0]);
        }
        return month;
    }
    /**
     * @param {?} date
     * @param {?} options
     * @return {?}
     */
    isDisabledDate(date, options) {
        const { minYear, maxYear, disableUntil, disableSince, disableWeekends, disableDates, disableDateRanges, disableWeekdays, enableDates } = options;
        if (this.dateMatchToDates(date, enableDates)) {
            return this.getDisabledValue(false, EMPTY_STR);
        }
        if (date.year < minYear && date.month === 12 || date.year > maxYear && date.month === 1) {
            return this.getDisabledValue(true, EMPTY_STR);
        }
        /** @type {?} */
        const inputDates = (/** @type {?} */ (disableDates));
        /** @type {?} */
        const result = inputDates.find((/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            return d.dates;
        }));
        if (!result) {
            if (this.dateMatchToDates(date, inputDates)) {
                return this.getDisabledValue(true, EMPTY_STR);
            }
        }
        else {
            for (const dd of inputDates) {
                if (this.dateMatchToDates(date, dd.dates)) {
                    return this.getDisabledValue(true, dd.styleClass);
                }
            }
        }
        if (this.isDisabledByDisableUntil(date, disableUntil)) {
            return this.getDisabledValue(true, EMPTY_STR);
        }
        if (this.isDisabledByDisableSince(date, disableSince)) {
            return this.getDisabledValue(true, EMPTY_STR);
        }
        if (disableWeekends) {
            /** @type {?} */
            const dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return this.getDisabledValue(true, EMPTY_STR);
            }
        }
        /** @type {?} */
        const dn = this.getDayNumber(date);
        if (disableWeekdays.length > 0) {
            for (const wd of disableWeekdays) {
                if (dn === this.getWeekdayIndex(wd)) {
                    return this.getDisabledValue(true, EMPTY_STR);
                }
            }
        }
        if (this.isDisabledByDisableDateRange(date, date, disableDateRanges)) {
            return this.getDisabledValue(true, EMPTY_STR);
        }
        return this.getDisabledValue(false, EMPTY_STR);
    }
    /**
     * @param {?} disabled
     * @param {?} styleClass
     * @return {?}
     */
    getDisabledValue(disabled, styleClass) {
        return { disabled, styleClass };
    }
    /**
     * @param {?} date
     * @param {?} dates
     * @return {?}
     */
    dateMatchToDates(date, dates) {
        for (const d of dates) {
            if ((d.year === 0 || d.year === date.year) && (d.month === 0 || d.month === date.month) && d.day === date.day) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} options
     * @return {?}
     */
    isDisabledMonth(year, month, options) {
        const { disableUntil, disableSince, disableDateRanges, enableDates } = options;
        /** @type {?} */
        const dateEnd = { year, month, day: this.datesInMonth(month, year) };
        /** @type {?} */
        const dateBegin = { year, month, day: 1 };
        if (this.isDatesEnabled(dateBegin, dateEnd, enableDates)) {
            return false;
        }
        if (this.isDisabledByDisableUntil(dateEnd, disableUntil)) {
            return true;
        }
        if (this.isDisabledByDisableSince(dateBegin, disableSince)) {
            return true;
        }
        if (this.isDisabledByDisableDateRange(dateBegin, dateEnd, disableDateRanges)) {
            return true;
        }
        return false;
    }
    /**
     * @param {?} year
     * @param {?} options
     * @return {?}
     */
    isDisabledYear(year, options) {
        const { disableUntil, disableSince, disableDateRanges, enableDates, minYear, maxYear } = options;
        /** @type {?} */
        const dateEnd = { year, month: 12, day: 31 };
        /** @type {?} */
        const dateBegin = { year, month: 1, day: 1 };
        if (this.isDatesEnabled(dateBegin, dateEnd, enableDates)) {
            return false;
        }
        if (this.isDisabledByDisableUntil(dateEnd, disableUntil)) {
            return true;
        }
        if (this.isDisabledByDisableSince(dateBegin, disableSince)) {
            return true;
        }
        if (this.isDisabledByDisableDateRange(dateBegin, dateEnd, disableDateRanges)) {
            return true;
        }
        if (year < minYear || year > maxYear) {
            return true;
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    isDisabledByDisableUntil(date, disableUntil) {
        return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
    }
    /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    isDisabledByDisableSince(date, disableSince) {
        return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
    }
    /**
     * @param {?} date
     * @param {?} enableDates
     * @return {?}
     */
    isPastDatesEnabled(date, enableDates) {
        for (const d of enableDates) {
            if (this.getTimeInMilliseconds(d) <= this.getTimeInMilliseconds(date)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} enableDates
     * @return {?}
     */
    isFutureDatesEnabled(date, enableDates) {
        for (const d of enableDates) {
            if (this.getTimeInMilliseconds(d) >= this.getTimeInMilliseconds(date)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} dateBegin
     * @param {?} dateEnd
     * @param {?} enableDates
     * @return {?}
     */
    isDatesEnabled(dateBegin, dateEnd, enableDates) {
        for (const d of enableDates) {
            if (this.getTimeInMilliseconds(d) >= this.getTimeInMilliseconds(dateBegin)
                && this.getTimeInMilliseconds(d) <= this.getTimeInMilliseconds(dateEnd)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} dateBegin
     * @param {?} dateEnd
     * @param {?} disableDateRanges
     * @return {?}
     */
    isDisabledByDisableDateRange(dateBegin, dateEnd, disableDateRanges) {
        /** @type {?} */
        const dateMsBegin = this.getTimeInMilliseconds(dateBegin);
        /** @type {?} */
        const dateMsEnd = this.getTimeInMilliseconds(dateEnd);
        for (const d of disableDateRanges) {
            if (this.isInitializedDate(d.begin) && this.isInitializedDate(d.end)
                && dateMsBegin >= this.getTimeInMilliseconds(d.begin) && dateMsEnd <= this.getTimeInMilliseconds(d.end)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} options
     * @return {?}
     */
    isMarkedDate(date, options) {
        const { markDates, markWeekends } = options;
        for (const md of markDates) {
            if (this.dateMatchToDates(date, md.dates)) {
                return this.getMarkedValue(true, md.color, md.styleClass);
            }
        }
        if (markWeekends && markWeekends.marked) {
            /** @type {?} */
            const dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return this.getMarkedValue(true, markWeekends.color, EMPTY_STR);
            }
        }
        return this.getMarkedValue(false, EMPTY_STR, EMPTY_STR);
    }
    /**
     * @param {?} marked
     * @param {?} color
     * @param {?} styleClass
     * @return {?}
     */
    getMarkedValue(marked, color, styleClass) {
        return { marked, color: color ? color : EMPTY_STR, styleClass: styleClass ? styleClass : EMPTY_STR };
    }
    /**
     * @param {?} date
     * @param {?} options
     * @return {?}
     */
    isHighlightedDate(date, options) {
        const { sunHighlight, satHighlight, highlightDates } = options;
        /** @type {?} */
        const dayNbr = this.getDayNumber(date);
        if (sunHighlight && dayNbr === 0 || satHighlight && dayNbr === 6) {
            return true;
        }
        if (this.dateMatchToDates(date, highlightDates)) {
            return true;
        }
        return false;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekNumber(date) {
        /** @type {?} */
        const d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round(((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000) / 7) + 1;
    }
    /**
     * @param {?} date
     * @param {?} dateRange
     * @param {?} dateFormat
     * @param {?} monthLabels
     * @param {?} rangeDelimiter
     * @param {?=} dateStr
     * @return {?}
     */
    getDateModel(date, dateRange, dateFormat, monthLabels, rangeDelimiter, dateStr = EMPTY_STR) {
        /** @type {?} */
        let singleDateModel = null;
        /** @type {?} */
        let dateRangeModel = null;
        if (date) {
            singleDateModel = {
                date,
                jsDate: this.myDateToJsDate(date),
                formatted: dateStr.length ? dateStr : this.formatDate(date, dateFormat, monthLabels),
                epoc: this.getEpocTime(date)
            };
        }
        else {
            dateRangeModel = {
                beginDate: dateRange.begin,
                beginJsDate: this.myDateToJsDate(dateRange.begin),
                beginEpoc: this.getEpocTime(dateRange.begin),
                endDate: dateRange.end,
                endJsDate: this.myDateToJsDate(dateRange.end),
                endEpoc: this.getEpocTime(dateRange.end),
                formatted: this.formatDate(dateRange.begin, dateFormat, monthLabels) + rangeDelimiter + this.formatDate(dateRange.end, dateFormat, monthLabels)
            };
        }
        return {
            isRange: date === null,
            singleDate: singleDateModel,
            dateRange: dateRangeModel
        };
    }
    /**
     * @param {?} date
     * @param {?} dateFormat
     * @param {?} monthLabels
     * @return {?}
     */
    formatDate(date, dateFormat, monthLabels) {
        /** @type {?} */
        let formatted = dateFormat.replace(YYYY, String(date.year));
        if (dateFormat.indexOf(MMM) !== -1) {
            formatted = formatted.replace(MMM, monthLabels[date.month]);
        }
        else if (dateFormat.indexOf(MM) !== -1) {
            formatted = formatted.replace(MM, this.preZero(date.month));
        }
        else {
            formatted = formatted.replace(M, String(date.month));
        }
        if (dateFormat.indexOf(DD) !== -1) {
            formatted = formatted.replace(DD, this.preZero(date.day));
        }
        else {
            formatted = formatted.replace(D, String(date.day));
        }
        return formatted;
    }
    /**
     * @param {?} model
     * @return {?}
     */
    getFormattedDate(model) {
        return !model.isRange ? model.singleDate.formatted : model.dateRange.formatted;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    preZero(val) {
        return val < 10 ? ZERO_STR + val : String(val);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isInitializedDate(date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
    }
    /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    isDateEarlier(firstDate, secondDate) {
        return this.getTimeInMilliseconds(firstDate) < this.getTimeInMilliseconds(secondDate);
    }
    /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    isDateSameOrEarlier(firstDate, secondDate) {
        return this.getTimeInMilliseconds(firstDate) <= this.getTimeInMilliseconds(secondDate);
    }
    /**
     * @param {?} firstDate
     * @param {?} secondDate
     * @return {?}
     */
    isDateSame(firstDate, secondDate) {
        return this.getTimeInMilliseconds(firstDate) === this.getTimeInMilliseconds(secondDate);
    }
    /**
     * @param {?} dateRange
     * @param {?} date
     * @return {?}
     */
    isDateRangeBeginOrEndSame(dateRange, date) {
        /** @type {?} */
        const dateMs = this.getTimeInMilliseconds(date);
        return this.getTimeInMilliseconds(dateRange.begin) === dateMs || this.getTimeInMilliseconds(dateRange.end) === dateMs;
    }
    /**
     * @param {?} date
     * @param {?} dateRange
     * @return {?}
     */
    isDateInRange(date, dateRange) {
        if (!this.isInitializedDate(dateRange.begin) || !this.isInitializedDate(dateRange.end)) {
            return false;
        }
        return this.isDateSameOrEarlier(dateRange.begin, date) && this.isDateSameOrEarlier(date, dateRange.end);
    }
    /**
     * @return {?}
     */
    resetDate() {
        return { year: 0, month: 0, day: 0 };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getTimeInMilliseconds(date) {
        return this.myDateToJsDate(date).getTime();
    }
    /**
     * @return {?}
     */
    getToday() {
        /** @type {?} */
        const date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayNumber(date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getDay();
    }
    /**
     * @param {?} wd
     * @return {?}
     */
    getWeekdayIndex(wd) {
        return this.weekDays.indexOf(wd);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getEpocTime(date) {
        return Math.round(this.getTimeInMilliseconds(date) / 1000.0);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    jsDateToMyDate(date) {
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    myDateToJsDate(date) {
        const { year, month, day } = date;
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    datesInMonth(m, y) {
        return new Date(y, m, 0).getDate();
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    datesInPrevMonth(m, y) {
        /** @type {?} */
        const d = this.getJsDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.datesInMonth(d.getMonth() + 1, d.getFullYear());
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @return {?}
     */
    getJsDate(year, month, day) {
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    }
    /**
     * @param {?} selectedValue
     * @param {?} dateRange
     * @return {?}
     */
    getSelectedValue(selectedValue, dateRange) {
        if (!selectedValue) {
            return null;
        }
        if (!dateRange) {
            return selectedValue.date;
        }
        else {
            const { beginDate, endDate } = selectedValue;
            return { begin: beginDate, end: endDate };
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getKeyCodeFromEvent(event) {
        /** @type {?} */
        let key = event.key || event.keyCode || event.which;
        if (this.checkKeyName(key, KeyName.enter) || key === KeyCode.enter) {
            return KeyCode.enter;
        }
        else if (this.checkKeyName(key, KeyName.esc) || key === KeyCode.esc) {
            return KeyCode.esc;
        }
        else if (this.checkKeyName(key, KeyName.space) || key === KeyCode.space) {
            return KeyCode.space;
        }
        else if (this.checkKeyName(key, KeyName.leftArrow) || key === KeyCode.leftArrow) {
            return KeyCode.leftArrow;
        }
        else if (this.checkKeyName(key, KeyName.upArrow) || key === KeyCode.upArrow) {
            return KeyCode.upArrow;
        }
        else if (this.checkKeyName(key, KeyName.rightArrow) || key === KeyCode.rightArrow) {
            return KeyCode.rightArrow;
        }
        else if (this.checkKeyName(key, KeyName.downArrow) || key === KeyCode.downArrow) {
            return KeyCode.downArrow;
        }
        else if (this.checkKeyName(key, KeyName.tab) || key === KeyCode.tab) {
            return KeyCode.tab;
        }
        else if (this.checkKeyName(key, KeyName.shift) || key === KeyCode.shift) {
            return KeyCode.shift;
        }
        else {
            return null;
        }
    }
    /**
     * @param {?} key
     * @param {?} keyName
     * @return {?}
     */
    checkKeyName(key, keyName) {
        /** @type {?} */
        const arr = keyName.split(PIPE);
        return arr.indexOf(key) !== -1;
    }
}
UtilService.ɵfac = function UtilService_Factory(t) { return new (t || UtilService)(); };
UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UtilService, factory: UtilService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UtilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const MonthId = {
    prev: 1,
    curr: 2,
    next: 3,
};
MonthId[MonthId.prev] = 'prev';
MonthId[MonthId.curr] = 'curr';
MonthId[MonthId.next] = 'next';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const DefaultView = {
    Date: 1,
    Month: 2,
    Year: 3,
};
DefaultView[DefaultView.Date] = 'Date';
DefaultView[DefaultView.Month] = 'Month';
DefaultView[DefaultView.Year] = 'Year';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const CalAnimation = {
    None: 0,
    Fade: 1,
    ScaleTop: 2,
    ScaleCenter: 3,
    Rotate: 4,
    FlipDiagonal: 5,
    Own: 6,
};
CalAnimation[CalAnimation.None] = 'None';
CalAnimation[CalAnimation.Fade] = 'Fade';
CalAnimation[CalAnimation.ScaleTop] = 'ScaleTop';
CalAnimation[CalAnimation.ScaleCenter] = 'ScaleCenter';
CalAnimation[CalAnimation.Rotate] = 'Rotate';
CalAnimation[CalAnimation.FlipDiagonal] = 'FlipDiagonal';
CalAnimation[CalAnimation.Own] = 'Own';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const HeaderAction = {
    PrevBtnClick: 1,
    NextBtnClick: 2,
    MonthBtnClick: 3,
    YearBtnClick: 4,
};
HeaderAction[HeaderAction.PrevBtnClick] = 'PrevBtnClick';
HeaderAction[HeaderAction.NextBtnClick] = 'NextBtnClick';
HeaderAction[HeaderAction.MonthBtnClick] = 'MonthBtnClick';
HeaderAction[HeaderAction.YearBtnClick] = 'YearBtnClick';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CalendarComponent {
    /**
     * @param {?} elem
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} utilService
     */
    constructor(elem, renderer, cdr, utilService) {
        this.elem = elem;
        this.renderer = renderer;
        this.cdr = cdr;
        this.utilService = utilService;
        this.position = "static";
        this.visibleMonth = { monthTxt: EMPTY_STR, monthNbr: 0, year: 0 };
        this.selectedMonth = { monthNbr: 0, year: 0 };
        this.selectedDate = { year: 0, month: 0, day: 0 };
        this.selectedDateRange = { begin: { year: 0, month: 0, day: 0 }, end: { year: 0, month: 0, day: 0 } };
        this.weekDays = [];
        this.dates = [];
        this.months = [];
        this.years = [];
        this.yearsDuration = "";
        this.dayIdx = 0;
        this.weekDayOpts = [SU, MO, TU, WE, TH, FR, SA];
        this.selectMonth = false;
        this.selectYear = false;
        this.viewChanged = false;
        this.selectorPos = null;
        this.prevViewDisabled = false;
        this.nextViewDisabled = false;
        this.clickListener = renderer.listen(elem.nativeElement, CLICK, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if ((this.opts.monthSelector || this.opts.yearSelector) && event.target) {
                this.resetMonthYearSelect();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const { stylesData, calendarAnimation, inline } = this.opts;
        if (stylesData.styles.length) {
            /** @type {?} */
            const styleElTemp = this.renderer.createElement(STYLE);
            this.renderer.appendChild(styleElTemp, this.renderer.createText(stylesData.styles));
            this.renderer.appendChild(this.styleEl.nativeElement, styleElTemp);
        }
        if (calendarAnimation.in !== CalAnimation.None) {
            this.setCalendarAnimation(calendarAnimation, true);
        }
        if (!inline) {
            this.focusToSelector();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clickListener();
    }
    /**
     * @param {?} opts
     * @param {?} defaultMonth
     * @param {?} selectedValue
     * @param {?} inputValue
     * @param {?} selectorPos
     * @param {?} dc
     * @param {?} cvc
     * @param {?} rds
     * @param {?} va
     * @param {?} cbe
     * @return {?}
     */
    initializeComponent(opts, defaultMonth, selectedValue, inputValue, selectorPos, dc, cvc, rds, va, cbe) {
        this.opts = opts;
        this.selectorPos = selectorPos;
        this.dateChanged = dc;
        this.calendarViewChanged = cvc;
        this.rangeDateSelection = rds;
        this.viewActivated = va;
        this.closedByEsc = cbe;
        const { defaultView, firstDayOfWeek, dayLabels } = opts;
        this.weekDays.length = 0;
        this.dayIdx = this.weekDayOpts.indexOf(firstDayOfWeek);
        if (this.dayIdx !== -1) {
            /** @type {?} */
            let idx = this.dayIdx;
            for (let i = 0; i < this.weekDayOpts.length; i++) {
                this.weekDays.push(dayLabels[this.weekDayOpts[idx]]);
                idx = this.weekDayOpts[idx] === SA ? 0 : idx + 1;
            }
        }
        this.initializeView(defaultMonth, selectedValue, inputValue);
        this.setCalendarVisibleMonth();
        this.setDefaultView(defaultView);
    }
    /**
     * @param {?} defaultMonth
     * @param {?} selectedValue
     * @param {?} inputValue
     * @return {?}
     */
    initializeView(defaultMonth, selectedValue, inputValue) {
        const { dateRange } = this.opts;
        // use today as a selected month
        /** @type {?} */
        const today = this.utilService.getToday();
        this.selectedMonth = { monthNbr: today.month, year: today.year };
        // If default month attribute valur given use it as a selected month
        const { defMonth, overrideSelection } = defaultMonth;
        if (defMonth && defMonth.length) {
            this.selectedMonth = this.utilService.parseDefaultMonth(defMonth);
        }
        /** @type {?} */
        let validateOpts = null;
        if (!dateRange) {
            // Single date mode - If date selected use it as selected month
            validateOpts = { validateDisabledDates: false, selectedValue: this.utilService.getSelectedValue(selectedValue, dateRange) };
            /** @type {?} */
            const date = this.utilService.isDateValid(inputValue, this.opts, validateOpts);
            if (this.utilService.isInitializedDate(date)) {
                this.selectedDate = date;
                if (!overrideSelection) {
                    this.selectedMonth = { monthNbr: date.month, year: date.year };
                }
            }
        }
        else {
            // Date range mode - If date range selected use begin date as selected month
            validateOpts = { validateDisabledDates: false, selectedValue: this.utilService.getSelectedValue(selectedValue, dateRange) };
            const { begin, end } = this.utilService.isDateValidDateRange(inputValue, this.opts, validateOpts);
            if (this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end)) {
                this.selectedDateRange = { begin, end };
                if (!overrideSelection) {
                    this.selectedMonth = { monthNbr: begin.month, year: begin.year };
                }
            }
        }
    }
    /**
     * @param {?} opts
     * @param {?} defaultMonth
     * @param {?} selectedValue
     * @param {?} inputValue
     * @return {?}
     */
    refreshComponent(opts, defaultMonth, selectedValue, inputValue) {
        this.opts = opts;
        const { defaultView } = opts;
        this.initializeView(defaultMonth, selectedValue, inputValue);
        this.setCalendarVisibleMonth();
        this.setDefaultView(defaultView);
    }
    /**
     * @param {?} headerAction
     * @return {?}
     */
    headerAction(headerAction) {
        const { monthSelector, yearSelector } = this.opts;
        if (headerAction === HeaderAction.PrevBtnClick) {
            if (!this.prevViewDisabled) {
                this.onPrevNavigateBtnClicked();
            }
        }
        else if (headerAction === HeaderAction.NextBtnClick) {
            if (!this.nextViewDisabled) {
                this.onNextNavigateBtnClicked();
            }
        }
        else if (headerAction === HeaderAction.MonthBtnClick) {
            if (monthSelector) {
                this.onMonthViewBtnClicked();
            }
        }
        else if (headerAction === HeaderAction.YearBtnClick) {
            if (yearSelector) {
                this.onYearViewBtnClicked();
            }
        }
    }
    /**
     * @param {?} defaultView
     * @return {?}
     */
    setDefaultView(defaultView) {
        if (defaultView === DefaultView.Month) {
            this.monthViewBtnClicked();
        }
        else if (defaultView === DefaultView.Year) {
            this.yearViewBtnClicked();
        }
    }
    /**
     * @param {?} calAnimation
     * @param {?} isOpen
     * @return {?}
     */
    setCalendarAnimation(calAnimation, isOpen) {
        const { nativeElement } = this.selectorEl;
        const { renderer } = this;
        /** @type {?} */
        const classIn = MY_DP_ANIMATION + ANIMATION_NAMES[calAnimation.in - 1];
        if (isOpen) {
            renderer.addClass(nativeElement, classIn + IN);
        }
        else {
            /** @type {?} */
            const classOut = MY_DP_ANIMATION + ANIMATION_NAMES[calAnimation.out - 1];
            renderer.removeClass(nativeElement, classIn + IN);
            renderer.addClass(nativeElement, classOut + OUT);
        }
    }
    /**
     * @return {?}
     */
    resetDateValue() {
        if (!this.opts.dateRange) {
            this.selectedDate = this.utilService.resetDate();
        }
        else {
            this.selectedDateRange.begin = this.utilService.resetDate();
            this.selectedDateRange.end = this.utilService.resetDate();
        }
    }
    /**
     * @return {?}
     */
    clearDate() {
        const { month, year } = this.utilService.getToday();
        this.selectedMonth = { monthNbr: month, year: year };
        this.resetDateValue();
        this.setCalendarVisibleMonth();
        this.resetMonthYearSelect();
    }
    /**
     * @return {?}
     */
    resetMonthYearSelect() {
        this.selectMonth = false;
        this.selectYear = false;
    }
    /**
     * @return {?}
     */
    onMonthViewBtnClicked() {
        this.viewChanged = true;
        this.monthViewBtnClicked();
    }
    /**
     * @return {?}
     */
    monthViewBtnClicked() {
        this.selectMonth = !this.selectMonth;
        this.selectYear = false;
        this.cdr.detectChanges();
        if (this.selectMonth) {
            this.generateMonths();
        }
        else {
            const { year, monthNbr } = this.selectedMonth;
            this.visibleMonth = { monthTxt: this.opts.monthLabels[monthNbr], monthNbr, year };
            this.generateCalendar(monthNbr, year, true);
        }
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    onMonthCellClicked(cell) {
        this.viewChanged = true;
        const { year, monthNbr } = this.visibleMonth;
        /** @type {?} */
        const monthChange = cell.nbr !== monthNbr;
        this.visibleMonth = { monthTxt: this.opts.monthLabels[cell.nbr], monthNbr: cell.nbr, year };
        this.selectedMonth.year = year;
        this.generateCalendar(cell.nbr, year, monthChange);
        this.selectMonth = false;
        this.focusToSelector();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMonthCellKeyDown(event) {
        // Move focus by arrow keys
        const { sourceRow, sourceCol } = this.getSourceRowAndColumnFromEvent(event);
        const { moveFocus, targetRow, targetCol, direction } = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, MONTH_ROW_COUNT, MONTH_COL_COUNT);
        if (moveFocus) {
            this.focusCellElement(M, targetRow, targetCol, direction, MONTH_COL_COUNT);
        }
    }
    /**
     * @return {?}
     */
    onYearViewBtnClicked() {
        this.viewChanged = true;
        this.yearViewBtnClicked();
    }
    /**
     * @return {?}
     */
    yearViewBtnClicked() {
        this.selectYear = !this.selectYear;
        this.selectMonth = false;
        this.cdr.detectChanges();
        if (this.selectYear) {
            this.generateYears(this.visibleMonth.year);
        }
        else {
            const { year, monthNbr } = this.selectedMonth;
            this.visibleMonth = { monthTxt: this.opts.monthLabels[monthNbr], monthNbr, year };
            this.generateCalendar(monthNbr, year, true);
        }
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    onYearCellClicked(cell) {
        this.viewChanged = true;
        const { year, monthNbr, monthTxt } = this.visibleMonth;
        /** @type {?} */
        const yc = cell.year !== year;
        this.visibleMonth = { monthTxt, monthNbr, year: cell.year };
        this.selectedMonth.year = cell.year;
        this.generateCalendar(monthNbr, cell.year, yc);
        this.selectYear = false;
        this.focusToSelector();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onYearCellKeyDown(event) {
        // Move focus by arrow keys
        const { sourceRow, sourceCol } = this.getSourceRowAndColumnFromEvent(event);
        const { moveFocus, targetRow, targetCol, direction } = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, YEAR_ROW_COUNT, YEAR_COL_COUNT);
        if (moveFocus) {
            this.focusCellElement(Y, targetRow, targetCol, direction, YEAR_COL_COUNT);
        }
    }
    /**
     * @return {?}
     */
    generateMonths() {
        /** @type {?} */
        const today = this.utilService.getToday();
        this.months.length = 0;
        const { year, monthNbr } = this.visibleMonth;
        const { rtl, monthLabels } = this.opts;
        /** @type {?} */
        let row = 0;
        for (let i = 1; i <= 12; i += 3) {
            /** @type {?} */
            const rowData = [];
            /** @type {?} */
            let col = rtl ? 2 : 0;
            for (let j = i; j < i + 3; j++) {
                /** @type {?} */
                const disabled = this.utilService.isDisabledMonth(year, j, this.opts);
                rowData.push({
                    nbr: j,
                    name: monthLabels[j],
                    currMonth: j === today.month && year === today.year,
                    selected: j === monthNbr && year === this.selectedMonth.year,
                    disabled,
                    row,
                    col: rtl ? col-- : col++
                });
            }
            row++;
            this.months.push(rowData);
        }
        this.setMonthViewHeaderBtnDisabledState(year);
    }
    /**
     * @param {?} inputYear
     * @return {?}
     */
    generateYears(inputYear) {
        const { minYear, maxYear, rtl } = this.opts;
        /** @type {?} */
        let y = inputYear - 12;
        if (inputYear < minYear) {
            y = minYear;
        }
        if (inputYear + 25 > maxYear) {
            y = maxYear - 24;
        }
        const { year } = this.visibleMonth;
        this.years.length = 0;
        /** @type {?} */
        const today = this.utilService.getToday();
        /** @type {?} */
        let row = 0;
        for (let i = y; i < y + 25; i += 5) {
            /** @type {?} */
            const rowData = [];
            /** @type {?} */
            let col = rtl ? 4 : 0;
            for (let j = i; j < i + 5; j++) {
                /** @type {?} */
                const disabled = this.utilService.isDisabledYear(j, this.opts);
                rowData.push({
                    year: j,
                    currYear: j === today.year,
                    selected: j === year,
                    disabled,
                    row,
                    col: rtl ? col-- : col++
                });
            }
            row++;
            this.years.push(rowData);
        }
        /** @type {?} */
        const beginYear = this.getYearValueByRowAndCol(0, 0);
        /** @type {?} */
        const endYear = beginYear + 24;
        this.yearsDuration = (!rtl ? beginYear : endYear) + YEAR_SEPARATOR + (!rtl ? endYear : beginYear);
        this.setYearViewHeaderBtnDisabledState(beginYear, endYear);
    }
    /**
     * @return {?}
     */
    onTodayFooterClicked() {
        /** @type {?} */
        const date = this.utilService.getToday();
        this.selectDate(date);
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    getYearValueByRowAndCol(row, col) {
        const { years } = this;
        if (!years || years.length === 0) {
            const { year } = this.utilService.getToday();
            return year;
        }
        return years[row][col].year;
    }
    /**
     * @return {?}
     */
    setCalendarVisibleMonth() {
        // Sets visible month of calendar
        const { year, monthNbr } = this.selectedMonth;
        this.visibleMonth = { monthTxt: this.opts.monthLabels[monthNbr], monthNbr, year };
        // Create current month
        this.generateCalendar(monthNbr, year, true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onViewActivated(event) {
        this.viewActivated(event);
    }
    /**
     * @return {?}
     */
    onPrevNavigateBtnClicked() {
        if (!this.selectMonth && !this.selectYear) {
            this.setDateViewMonth(false);
        }
        else if (this.selectMonth) {
            this.visibleMonth.year--;
            this.generateMonths();
        }
        else if (this.selectYear) {
            this.generateYears(this.getYearValueByRowAndCol(2, 2) - 25);
        }
    }
    /**
     * @return {?}
     */
    onNextNavigateBtnClicked() {
        if (!this.selectMonth && !this.selectYear) {
            this.setDateViewMonth(true);
        }
        else if (this.selectMonth) {
            this.visibleMonth.year++;
            this.generateMonths();
        }
        else if (this.selectYear) {
            this.generateYears(this.getYearValueByRowAndCol(2, 2) + 25);
        }
    }
    /**
     * @param {?} isNext
     * @return {?}
     */
    setDateViewMonth(isNext) {
        /** @type {?} */
        let change = isNext ? 1 : -1;
        const { year, monthNbr } = this.visibleMonth;
        /** @type {?} */
        const d = this.utilService.getJsDate(year, monthNbr, 1);
        d.setMonth(d.getMonth() + change);
        /** @type {?} */
        const y = d.getFullYear();
        /** @type {?} */
        const m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCloseSelector(event) {
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode === KeyCode.esc) {
            this.closedByEsc();
        }
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    onDayCellClicked(cell) {
        // Cell clicked on the calendar
        this.selectDate(cell.dateObj);
        this.resetMonthYearSelect();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDayCellKeyDown(event) {
        // Move focus by arrow keys
        const { sourceRow, sourceCol } = this.getSourceRowAndColumnFromEvent(event);
        const { moveFocus, targetRow, targetCol, direction } = this.getTargetFocusRowAndColumn(event, sourceRow, sourceCol, DATE_ROW_COUNT, DATE_COL_COUNT);
        if (moveFocus) {
            this.focusCellElement(D, targetRow, targetCol, direction, DATE_COL_COUNT);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getSourceRowAndColumnFromEvent(event) {
        /** @type {?} */
        let sourceRow = 0;
        /** @type {?} */
        let sourceCol = 0;
        if (event.target && event.target.id) {
            // value of id is for example: m_0_1 (first number = row, second number = column)
            /** @type {?} */
            const arr = event.target.id.split(UNDER_LINE);
            sourceRow = Number(arr[1]);
            sourceCol = Number(arr[2]);
        }
        return { sourceRow, sourceCol };
    }
    /**
     * @param {?} event
     * @param {?} row
     * @param {?} col
     * @param {?} rowCount
     * @param {?} colCount
     * @return {?}
     */
    getTargetFocusRowAndColumn(event, row, col, rowCount, colCount) {
        /** @type {?} */
        let moveFocus = true;
        /** @type {?} */
        let targetRow = row;
        /** @type {?} */
        let targetCol = col;
        /** @type {?} */
        let direction = false;
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode === KeyCode.upArrow && row > 0) {
            targetRow--;
        }
        else if (keyCode === KeyCode.downArrow && row < rowCount) {
            targetRow++;
            direction = true;
        }
        else if (keyCode === KeyCode.leftArrow && col > 0) {
            targetCol--;
        }
        else if (keyCode === KeyCode.rightArrow && col < colCount) {
            targetCol++;
            direction = true;
        }
        else {
            moveFocus = false;
        }
        return { moveFocus, targetRow, targetCol, direction };
    }
    /**
     * @param {?} type
     * @param {?} row
     * @param {?} col
     * @param {?} direction
     * @param {?} colCount
     * @return {?}
     */
    focusCellElement(type, row, col, direction, colCount) {
        /** @type {?} */
        const className = type + UNDER_LINE + row + UNDER_LINE + col;
        /** @type {?} */
        let elem = this.selectorEl.nativeElement.querySelector(DOT + className);
        if (elem.getAttribute(TABINDEX) !== ZERO_STR) {
            // if the selected element is disabled move a focus to next/previous enabled element
            /** @type {?} */
            let tdList = this.getCalendarElements();
            /** @type {?} */
            const idx = row * (colCount + 1) + col;
            /** @type {?} */
            let enabledElem = null;
            if (direction) {
                // find next enabled
                enabledElem = tdList.slice(idx).find((/**
                 * @param {?} td
                 * @return {?}
                 */
                (td) => td.getAttribute(TABINDEX) === ZERO_STR));
            }
            else {
                // find previous enabled
                enabledElem = tdList.slice(0, idx).reverse().find((/**
                 * @param {?} td
                 * @return {?}
                 */
                (td) => td.getAttribute(TABINDEX) === ZERO_STR));
            }
            elem = enabledElem ? enabledElem : this.selectorEl.nativeElement;
        }
        else {
            elem.focus();
        }
    }
    /**
     * @return {?}
     */
    focusToSelector() {
        this.selectorEl.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    getCalendarElements() {
        return Array.from(this.selectorEl.nativeElement.querySelectorAll(TD_SELECTOR));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    selectDate(date) {
        const { dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter, closeSelectorOnDateSelect } = this.opts;
        if (dateRange) {
            // Date range
            /** @type {?} */
            const isBeginDateInitialized = this.utilService.isInitializedDate(this.selectedDateRange.begin);
            /** @type {?} */
            const isEndDateInitialized = this.utilService.isInitializedDate(this.selectedDateRange.end);
            if (isBeginDateInitialized && isEndDateInitialized) {
                // both already selected - set begin date and reset end date
                this.selectedDateRange.begin = date;
                this.selectedDateRange.end = this.utilService.resetDate();
                this.rangeDateSelection({
                    isBegin: true,
                    date,
                    jsDate: this.utilService.myDateToJsDate(date),
                    dateFormat: dateFormat,
                    formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
                    epoc: this.utilService.getEpocTime(date)
                });
            }
            else if (!isBeginDateInitialized) {
                // begin date
                this.selectedDateRange.begin = date;
                this.rangeDateSelection({
                    isBegin: true,
                    date,
                    jsDate: this.utilService.myDateToJsDate(date),
                    dateFormat: dateFormat,
                    formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
                    epoc: this.utilService.getEpocTime(date)
                });
            }
            else {
                // second selection
                /** @type {?} */
                const firstDateEarlier = this.utilService.isDateEarlier(date, this.selectedDateRange.begin);
                if (firstDateEarlier) {
                    this.selectedDateRange.begin = date;
                    this.rangeDateSelection({
                        isBegin: true,
                        date,
                        jsDate: this.utilService.myDateToJsDate(date),
                        dateFormat: dateFormat,
                        formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
                        epoc: this.utilService.getEpocTime(date)
                    });
                }
                else {
                    this.selectedDateRange.end = date;
                    this.rangeDateSelection({
                        isBegin: false,
                        date,
                        jsDate: this.utilService.myDateToJsDate(date),
                        dateFormat: dateFormat,
                        formatted: this.utilService.formatDate(date, dateFormat, monthLabels),
                        epoc: this.utilService.getEpocTime(date)
                    });
                    this.dateChanged(this.utilService.getDateModel(null, this.selectedDateRange, dateFormat, monthLabels, dateRangeDatesDelimiter), closeSelectorOnDateSelect);
                }
            }
        }
        else {
            // Single date
            this.selectedDate = date;
            this.dateChanged(this.utilService.getDateModel(this.selectedDate, null, dateFormat, monthLabels, dateRangeDatesDelimiter), closeSelectorOnDateSelect);
        }
    }
    /**
     * @param {?} y
     * @param {?} m
     * @return {?}
     */
    monthStartIdx(y, m) {
        // Month start index
        /** @type {?} */
        const d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        /** @type {?} */
        const idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    }
    /**
     * @param {?} d
     * @param {?} m
     * @param {?} y
     * @param {?} today
     * @return {?}
     */
    isCurrDay(d, m, y, today) {
        // Check is a given date the today
        return d === today.day && m === today.month && y === today.year;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayNumber(date) {
        // Get day number: su=0, mo=1, tu=2, we=3 ...
        const { year, month, day } = date;
        /** @type {?} */
        const d = this.utilService.getJsDate(year, month, day);
        return d.getDay();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekday(date) {
        // Get weekday: su, mo, tu, we ...
        return this.weekDayOpts[this.getDayNumber(date)];
    }
    /**
     * @return {?}
     */
    sundayIdx() {
        // Index of Sunday day
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    }
    /**
     * @param {?} m
     * @param {?} y
     * @param {?} notifyChange
     * @return {?}
     */
    generateCalendar(m, y, notifyChange) {
        this.dates.length = 0;
        /** @type {?} */
        const today = this.utilService.getToday();
        /** @type {?} */
        const monthStart = this.monthStartIdx(y, m);
        /** @type {?} */
        const dInThisM = this.utilService.datesInMonth(m, y);
        /** @type {?} */
        const dInPrevM = this.utilService.datesInPrevMonth(m, y);
        /** @type {?} */
        let dayNbr = 1;
        /** @type {?} */
        let month = m;
        /** @type {?} */
        let cmo = MonthId.prev;
        const { rtl, showWeekNumbers, firstDayOfWeek } = this.opts;
        for (let i = 1; i < 7; i++) {
            /** @type {?} */
            let col = rtl ? 6 : 0;
            /** @type {?} */
            const week = [];
            if (i === 1) {
                // First week
                /** @type {?} */
                const pm = dInPrevM - monthStart + 1;
                // Previous month
                for (let j = pm; j <= dInPrevM; j++) {
                    /** @type {?} */
                    const date = { year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: j };
                    week.push({
                        dateObj: date,
                        cmo,
                        currDay: this.isCurrDay(j, month - 1, y, today),
                        disabledDate: this.utilService.isDisabledDate(date, this.opts),
                        markedDate: this.utilService.isMarkedDate(date, this.opts),
                        highlight: this.utilService.isHighlightedDate(date, this.opts),
                        row: i - 1,
                        col: rtl ? col-- : col++
                    });
                }
                cmo = MonthId.curr;
                // Current month
                /** @type {?} */
                const daysLeft = 7 - week.length;
                for (let j = 0; j < daysLeft; j++) {
                    /** @type {?} */
                    const date = { year: y, month: m, day: dayNbr };
                    week.push({
                        dateObj: date,
                        cmo,
                        currDay: this.isCurrDay(dayNbr, m, y, today),
                        disabledDate: this.utilService.isDisabledDate(date, this.opts),
                        markedDate: this.utilService.isMarkedDate(date, this.opts),
                        highlight: this.utilService.isHighlightedDate(date, this.opts),
                        row: i - 1,
                        col: rtl ? col-- : col++
                    });
                    dayNbr++;
                }
            }
            else {
                // Rest of the weeks
                for (let j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        // Next month
                        dayNbr = 1;
                        cmo = MonthId.next;
                        month = m + 1;
                    }
                    /** @type {?} */
                    const date = { year: cmo === MonthId.next && m === 12 ? y + 1 : y, month: cmo === MonthId.curr ? m : cmo === MonthId.next && m < 12 ? m + 1 : 1, day: dayNbr };
                    week.push({
                        dateObj: date,
                        cmo,
                        currDay: this.isCurrDay(dayNbr, month, y, today),
                        disabledDate: this.utilService.isDisabledDate(date, this.opts),
                        markedDate: this.utilService.isMarkedDate(date, this.opts),
                        highlight: this.utilService.isHighlightedDate(date, this.opts),
                        row: i - 1,
                        col: rtl ? col-- : col++
                    });
                    dayNbr++;
                }
            }
            /** @type {?} */
            const weekNbr = showWeekNumbers && firstDayOfWeek === MO ? this.utilService.getWeekNumber(week[0].dateObj) : 0;
            this.dates.push({ week, weekNbr });
        }
        this.setDateViewHeaderBtnDisabledState(m, y);
        if (notifyChange) {
            // Notify parent
            this.calendarViewChanged({ year: y, month: m, first: { number: 1, weekday: this.getWeekday({ year: y, month: m, day: 1 }) }, last: { number: dInThisM, weekday: this.getWeekday({ year: y, month: m, day: dInThisM }) } });
        }
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    setDateViewHeaderBtnDisabledState(m, y) {
        /** @type {?} */
        let dpm = false;
        /** @type {?} */
        let dnm = false;
        const { disableHeaderButtons, disableUntil, disableSince, enableDates, minYear, maxYear, rtl } = this.opts;
        if (disableHeaderButtons) {
            /** @type {?} */
            const duDate = { year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: this.utilService.datesInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y) };
            /** @type {?} */
            const dsDate = { year: m === 12 ? y + 1 : y, month: m === 12 ? 1 : m + 1, day: 1 };
            dpm = this.utilService.isDisabledByDisableUntil(duDate, disableUntil)
                && !this.utilService.isPastDatesEnabled(duDate, enableDates);
            dnm = this.utilService.isDisabledByDisableSince(dsDate, disableSince)
                && !this.utilService.isFutureDatesEnabled(dsDate, enableDates);
        }
        this.prevViewDisabled = m === 1 && y === minYear || dpm;
        this.nextViewDisabled = m === 12 && y === maxYear || dnm;
        if (rtl) {
            this.swapHeaderBtnDisabled();
        }
    }
    /**
     * @param {?} y
     * @return {?}
     */
    setMonthViewHeaderBtnDisabledState(y) {
        /** @type {?} */
        let dpm = false;
        /** @type {?} */
        let dnm = false;
        const { disableHeaderButtons, disableUntil, disableSince, enableDates, minYear, maxYear, rtl } = this.opts;
        if (disableHeaderButtons) {
            /** @type {?} */
            const duDate = { year: y - 1, month: 12, day: 31 };
            /** @type {?} */
            const dsDate = { year: y + 1, month: 1, day: 1 };
            dpm = this.utilService.isDisabledByDisableUntil(duDate, disableUntil)
                && !this.utilService.isPastDatesEnabled(duDate, enableDates);
            dnm = this.utilService.isDisabledByDisableSince(dsDate, disableSince)
                && !this.utilService.isFutureDatesEnabled(dsDate, enableDates);
        }
        this.prevViewDisabled = y === minYear || dpm;
        this.nextViewDisabled = y === maxYear || dnm;
        if (rtl) {
            this.swapHeaderBtnDisabled();
        }
    }
    /**
     * @param {?} yp
     * @param {?} yn
     * @return {?}
     */
    setYearViewHeaderBtnDisabledState(yp, yn) {
        /** @type {?} */
        let dpy = false;
        /** @type {?} */
        let dny = false;
        const { disableHeaderButtons, disableUntil, disableSince, enableDates, minYear, maxYear, rtl } = this.opts;
        if (disableHeaderButtons) {
            /** @type {?} */
            const duDate = { year: yp - 1, month: 12, day: 31 };
            /** @type {?} */
            const dsDate = { year: yn + 1, month: 1, day: 1 };
            dpy = this.utilService.isDisabledByDisableUntil(duDate, disableUntil)
                && !this.utilService.isPastDatesEnabled(duDate, enableDates);
            dny = this.utilService.isDisabledByDisableSince(dsDate, disableSince)
                && !this.utilService.isFutureDatesEnabled(dsDate, enableDates);
        }
        this.prevViewDisabled = yp <= minYear || dpy;
        this.nextViewDisabled = yn >= maxYear || dny;
        if (rtl) {
            this.swapHeaderBtnDisabled();
        }
    }
    /**
     * @return {?}
     */
    swapHeaderBtnDisabled() {
        [this.prevViewDisabled, this.nextViewDisabled] = [this.nextViewDisabled, this.prevViewDisabled];
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](UtilService)); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["lib-angular-mydatepicker-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selectorEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.styleEl = _t.first);
    } }, hostVars: 2, hostBindings: function CalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("position", ctx.position);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([UtilService])], decls: 10, vars: 27, consts: [["styleEl", ""], ["tabindex", "0", 1, "myDpSelector", 3, "libAngularMyDatePickerCalendar", "ngClass", "keyup"], ["selectorEl", ""], [3, "opts", "yearsDuration", "visibleMonth", "selectMonth", "selectYear", "prevViewDisabled", "nextViewDisabled", "prevNavigateBtnClicked", "nextNavigateBtnClicked", "monthViewBtnClicked", "yearViewBtnClicked"], [3, "opts", "dates", "weekDays", "selectedDate", "selectedDateRange", "viewChanged", "dayCellClicked", "dayCellKeyDown", "viewActivated", 4, "ngIf"], [3, "opts", "months", "viewChanged", "monthCellClicked", "monthCellKeyDown", "viewActivated", 4, "ngIf"], [3, "opts", "years", "viewChanged", "yearCellClicked", "yearCellKeyDown", "viewActivated", 4, "ngIf"], [3, "opts", "footerBarTxtClicked", 4, "ngIf"], [3, "opts", "dates", "weekDays", "selectedDate", "selectedDateRange", "viewChanged", "dayCellClicked", "dayCellKeyDown", "viewActivated"], [3, "opts", "months", "viewChanged", "monthCellClicked", "monthCellKeyDown", "viewActivated"], [3, "opts", "years", "viewChanged", "yearCellClicked", "yearCellKeyDown", "viewActivated"], [3, "opts", "footerBarTxtClicked"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function CalendarComponent_Template_div_keyup_3_listener($event) { return ctx.onCloseSelector($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "lib-selection-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("prevNavigateBtnClicked", function CalendarComponent_Template_lib_selection_bar_prevNavigateBtnClicked_5_listener() { return ctx.onPrevNavigateBtnClicked(); })("nextNavigateBtnClicked", function CalendarComponent_Template_lib_selection_bar_nextNavigateBtnClicked_5_listener() { return ctx.onNextNavigateBtnClicked(); })("monthViewBtnClicked", function CalendarComponent_Template_lib_selection_bar_monthViewBtnClicked_5_listener() { return ctx.onMonthViewBtnClicked(); })("yearViewBtnClicked", function CalendarComponent_Template_lib_selection_bar_yearViewBtnClicked_5_listener() { return ctx.onYearViewBtnClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CalendarComponent_lib_day_view_6_Template, 1, 6, "lib-day-view", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CalendarComponent_lib_month_view_7_Template, 1, 3, "lib-month-view", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CalendarComponent_lib_year_view_8_Template, 1, 3, "lib-year-view", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CalendarComponent_lib_footer_bar_9_Template, 1, 1, "lib-footer-bar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("ng-mydp ", (ctx.opts.stylesData == null ? null : ctx.opts.stylesData.selector) || "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("libAngularMyDatePickerCalendar", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](16, _c2, ctx.opts.inline, ctx.opts.selectorWidth, ctx.opts.selectorHeight, ctx.selectorPos))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](21, _c3, ctx.opts.showSelectorArrow, ctx.opts.showSelectorArrow && !ctx.opts.alignSelectorRight, ctx.opts.showSelectorArrow && ctx.opts.alignSelectorRight, !ctx.opts.inline, ctx.opts.inline));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("opts", ctx.opts)("yearsDuration", ctx.yearsDuration)("visibleMonth", ctx.visibleMonth)("selectMonth", ctx.selectMonth)("selectYear", ctx.selectYear)("prevViewDisabled", ctx.prevViewDisabled)("nextViewDisabled", ctx.nextViewDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selectMonth && !ctx.selectYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectMonth);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.opts.showFooterToday);
    } }, directives: function () { return [AngularMyDatePickerCalendarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], SelectionBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], DayViewComponent, MonthViewComponent, YearViewComponent, FooterBarComponent]; }, styles: [".ng-mydp{position:static}.ng-myrtl{direction:rtl}.ng-mydp *{box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;padding:0;margin:0}.ng-mydp table{display:table;border-spacing:0}.ng-mydp table td,.ng-mydp table th{padding:0;margin:0;vertical-align:middle;border:none}.myDpSelector{padding:4px;border:1px solid #ccc;background-color:#fff;border-radius:4px;z-index:100000}.myDpViewChangeAnimation{-webkit-animation:.2s linear myDpViewChangeAnimation;animation:.2s linear myDpViewChangeAnimation}@-webkit-keyframes myDpViewChangeAnimation{0%{transform:scale(.75);opacity:.1}100%{transform:scale(1);opacity:1}}@keyframes myDpViewChangeAnimation{0%{transform:scale(.75);opacity:.1}100%{transform:scale(1);opacity:1}}.myDpAnimationFadeIn{-webkit-animation:.5s linear myDpAnimationFadeIn;animation:.5s linear myDpAnimationFadeIn}@-webkit-keyframes myDpAnimationFadeIn{0%{transform:translateY(-50px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes myDpAnimationFadeIn{0%{transform:translateY(-50px);opacity:0}100%{transform:translateY(0);opacity:1}}.myDpAnimationFadeOut{-webkit-animation:.3s linear forwards myDpAnimationFadeOut;animation:.3s linear forwards myDpAnimationFadeOut}@-webkit-keyframes myDpAnimationFadeOut{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-50px);opacity:0}}@keyframes myDpAnimationFadeOut{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-50px);opacity:0}}.myDpAnimationScaleTopIn{-webkit-animation:.3s linear myDpAnimationScaleTopIn;animation:.3s linear myDpAnimationScaleTopIn}@-webkit-keyframes myDpAnimationScaleTopIn{0%{transform:scaleY(0);transform-origin:100% 0}100%{transform:scaleY(1);transform-origin:100% 0}}@keyframes myDpAnimationScaleTopIn{0%{transform:scaleY(0);transform-origin:100% 0}100%{transform:scaleY(1);transform-origin:100% 0}}.myDpAnimationScaleTopOut{-webkit-animation:.3s linear forwards myDpAnimationScaleTopOut;animation:.3s linear forwards myDpAnimationScaleTopOut}@-webkit-keyframes myDpAnimationScaleTopOut{0%{transform:scaleY(1);transform-origin:100% 0;opacity:1}100%{transform:scaleY(0);transform-origin:100% 0;opacity:0}}@keyframes myDpAnimationScaleTopOut{0%{transform:scaleY(1);transform-origin:100% 0;opacity:1}100%{transform:scaleY(0);transform-origin:100% 0;opacity:0}}.myDpAnimationScaleCenterIn{-webkit-animation:.3s linear myDpAnimationScaleCenterIn;animation:.3s linear myDpAnimationScaleCenterIn}@-webkit-keyframes myDpAnimationScaleCenterIn{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes myDpAnimationScaleCenterIn{0%{transform:scale(0)}100%{transform:scale(1)}}.myDpAnimationScaleCenterOut{-webkit-animation:.3s linear forwards myDpAnimationScaleCenterOut;animation:.3s linear forwards myDpAnimationScaleCenterOut}@-webkit-keyframes myDpAnimationScaleCenterOut{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}@keyframes myDpAnimationScaleCenterOut{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}.myDpAnimationRotateIn{-webkit-animation:.3s linear myDpAnimationRotateIn;animation:.3s linear myDpAnimationRotateIn}@-webkit-keyframes myDpAnimationRotateIn{0%{transform:scale(.3) rotate(-45deg);opacity:0}100%{transform:scale(1) rotate(0);opacity:1}}@keyframes myDpAnimationRotateIn{0%{transform:scale(.3) rotate(-45deg);opacity:0}100%{transform:scale(1) rotate(0);opacity:1}}.myDpAnimationRotateOut{-webkit-animation:.3s linear forwards myDpAnimationRotateOut;animation:.3s linear forwards myDpAnimationRotateOut}@-webkit-keyframes myDpAnimationRotateOut{0%{transform:scale(1) rotate(0);opacity:1}100%{transform:scale(.3) rotate(-45deg);opacity:0}}@keyframes myDpAnimationRotateOut{0%{transform:scale(1) rotate(0);opacity:1}100%{transform:scale(.3) rotate(-45deg);opacity:0}}.myDpAnimationFlipDiagonalIn{-webkit-animation:.3s linear myDpAnimationFlipDiagonalIn;animation:.3s linear myDpAnimationFlipDiagonalIn}@-webkit-keyframes myDpAnimationFlipDiagonalIn{0%{transform:rotate3d(1,1,0,-78deg)}100%{transform:rotate3d(1,1,0,0deg)}}@keyframes myDpAnimationFlipDiagonalIn{0%{transform:rotate3d(1,1,0,-78deg)}100%{transform:rotate3d(1,1,0,0deg)}}.myDpAnimationFlipDiagonalOut{-webkit-animation:.3s linear forwards myDpAnimationFlipDiagonalOut;animation:.3s linear forwards myDpAnimationFlipDiagonalOut}@-webkit-keyframes myDpAnimationFlipDiagonalOut{0%{transform:rotate3d(1,1,0,0deg);opacity:1}100%{transform:rotate3d(1,1,0,78deg);opacity:0}}@keyframes myDpAnimationFlipDiagonalOut{0%{transform:rotate3d(1,1,0,0deg);opacity:1}100%{transform:rotate3d(1,1,0,78deg);opacity:0}}.myDpSelectorAbsolute{position:absolute}.myDpSelectorPosInitial{position:initial}.myDpSelector:focus{box-shadow:-1px 1px 6px 0 #add8e6;outline:0}.myDpSelectorArrow{background:#fff}.myDpSelectorArrow:after,.myDpSelectorArrow:before{bottom:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute}.myDpSelectorArrow:after{border-color:rgba(250,250,250,0);border-bottom-color:#fafafa;border-width:10px;margin-left:-10px}.myDpSelectorArrow:before{border-color:rgba(204,204,204,0);border-bottom-color:#ccc;border-width:11px;margin-left:-11px}.myDpSelectorArrow:focus:before{border-bottom-color:#add8e6}.myDpSelectorArrowLeft:after,.myDpSelectorArrowLeft:before{left:24px}.myDpSelectorArrowRight:after,.myDpSelectorArrowRight:before{left:86%}::-ms-clear{display:none}.myDpCalTable,.myDpFooterBar,.myDpMonthTable,.myDpYearTable{border-radius:0 0 4px 4px}.myDpCalTable.myDpNoFooter tbody tr:nth-child(6) td:first-child,.myDpMonthTable.myDpNoFooter tbody tr:nth-child(4) td:first-child,.myDpYearTable.myDpNoFooter tbody tr:nth-child(5) td:first-child{border-bottom-left-radius:4px}.myDpCalTable.myDpNoFooter tbody tr:nth-child(6) td:last-child,.myDpMonthTable.myDpNoFooter tbody tr:nth-child(4) td:last-child,.myDpYearTable.myDpNoFooter tbody tr:nth-child(5) td:last-child{border-bottom-right-radius:4px}.myDpCalTable,.myDpMonthTable,.myDpYearTable{table-layout:fixed;width:100%;background-color:#fff;font-size:14px}.myDpFooter{height:calc(100% - 60px)}.myDpNoFooter{height:calc(100% - 30px)}.myDpCalTable,.myDpDaycell,.myDpMonthTable,.myDpMonthcell,.myDpWeekDayTitle,.myDpYearTable,.myDpYearcell{border-collapse:collapse;color:#333;line-height:1.1}.myDpDaycell,.myDpMonthcell,.myDpYearcell{padding:4px;text-align:center;outline:0}.myDpDaycell{background-color:#fff;position:relative}.myDpWeekDayTitle{background-color:transparent;color:#333;font-size:13px;font-weight:400;vertical-align:middle;max-width:36px;overflow:hidden;white-space:nowrap;height:23px;text-align:center}.myDpWeekDayTitleWeekNbr{width:20px}.myDpMonthcell{background-color:#fff;overflow:hidden;white-space:nowrap}.myDpYearcell{background-color:#fff;width:20%}.myDpMonthNbr{font-size:10px;display:block}.myDpDaycellWeekNbr{font-size:9px;cursor:default;text-align:center;color:#333}.myDpNextMonth,.myDpPrevMonth{color:#999}.myDpMonthYearSelBar{display:flex;height:30px;background-color:#fff;border-top-left-radius:4px;border-top-right-radius:4px}.myDpPrevBtn{margin-left:10px}.myDpNextBtn{margin-left:auto;margin-right:10px}.myDpMonthYearText{width:100%;line-height:30px;text-align:center}.myDpFooterBar{display:flex;align-items:center;justify-content:center;height:30px;background-color:#fff}.myDpHeaderBtn{background:0 0;padding:0;border:none;line-height:30px;height:28px;margin-top:1px;color:#000;outline:0;cursor:default}.myDpFooterBtn{margin:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.myDpMonthBtn,.myDpYearBtn{font-size:16px}.myDpMonthBtn{margin-right:6px}.myDpHighlight{color:#c30000}.myDpDimDay{opacity:.5}.myDpCurrMonth{background-color:#fff;font-weight:400}.myDpMarkDate{position:absolute;top:2px;left:2px;border-right:8px solid transparent}.myDpMarkCurrDay,.myDpMarkCurrMonth,.myDpMarkCurrYear{border-bottom:2px solid #333}.myDpHeaderLabelBtnNotEdit{cursor:default}.myDpHeaderBtn::-moz-focus-inner,.myDpNextBtn::-moz-focus-inner,.myDpPrevBtn::-moz-focus-inner{border:0}.myDpFooterBtn:focus,.myDpHeaderBtn:focus,.myDpMonthLabel:focus,.myDpYearLabel:focus{color:#66afe9;outline:0}.myDpDaycell:focus,.myDpMonthcell:focus,.myDpYearcell:focus{box-shadow:inset 0 0 0 1px #66afe9}.myDpTableSingleDay:hover,.myDpTableSingleMonth:hover,.myDpTableSingleYear:hover{background-color:#ddd}.myDpDaycell,.myDpMonthLabel,.myDpMonthcell,.myDpYearLabel,.myDpYearcell{cursor:pointer}.myDpFooterBtn:hover,.myDpHeaderBtnEnabled:hover,.myDpMonthLabel:hover,.myDpYearLabel:hover{color:#777}.myDpHeaderBtnEnabled{cursor:pointer}.myDpHeaderBtnDisabled{cursor:not-allowed;opacity:.65}.myDpDisabled{cursor:default;color:#777;background:repeating-linear-gradient(-45deg,#ccc 7px,#ccc 8px,transparent 7px,transparent 14px)}.myDpRangeColor{background-color:#dbeaff}.myDpSelectedDay,.myDpSelectedMonth,.myDpSelectedYear{border:none;background-color:#8ebfff}@font-face{font-family:angular-mydatepicker;src:url(data:application/octet-stream;base64,d09GRgABAAAAAAs4AA8AAAAAE+gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABWAAAADsAAABUIIslek9TLzIAAAGUAAAAQwAAAFY+IEi5Y21hcAAAAdgAAABQAAABfohD7KljdnQgAAACKAAAABMAAAAgBtX/BGZwZ20AAAI8AAAFkAAAC3CKkZBZZ2FzcAAAB8wAAAAIAAAACAAAABBnbHlmAAAH1AAAAL8AAAEAS//bfWhlYWQAAAiUAAAAMQAAADYW6nhraGhlYQAACMgAAAAbAAAAJAc8A1ZobXR4AAAI5AAAAAwAAAAMCXwAAGxvY2EAAAjwAAAACAAAAAgAQACAbWF4cAAACPgAAAAgAAAAIACmC5tuYW1lAAAJGAAAAXcAAALNzJ0fIXBvc3QAAAqQAAAAKwAAAEAj+eC8cHJlcAAACrwAAAB6AAAAhuVBK7x4nGNgZGBg4GIwYLBjYHJx8wlh4MtJLMljkGJgYYAAkDwymzEnMz2RgQPGA8qxgGkOIGaDiAIAJjsFSAB4nGNgZNZknMDAysDAVMW0h4GBoQdCMz5gMGRkAooysDIzYAUBaa4pDA4vGF4wMgf9z2KIYg5imAYUZgTJAQDMhAtXAHic7ZCxDYAwDATPiaFAjEFBwTBU7F+yRfK2GYOX7qR/uTKwAF1cwsEejMit1XLvbLk7R9547K+NIRNW93STVv7s6fNrLf5U1OcK2gTMuAtdeJxjYEADEhDIHPQ/C4QBEmwD3QB4nK1WaXfTRhQdeUmchCwlCy1qYcTEabBGJmzBgAlBsmMgXZytlaCLFDvpvvGJ3+Bf82Tac+g3flrvGy8kkLTncJqTo3fnzdXM22USWpLYC+uRlJsvxdTWJo3sPAnphk3LUXwoO3shZYrJ3wVREK2W2rcdh0REIlC1rrBEEPseWZpkfOhRRsu2pFdNyi096S5b40G9Vd9+GjrKsTuhpGYzdGg9siVVGFWiSKY9UtKmZaj6K0krvL/CzFfNUMKITiJpvBnG0EjeG2e0ymg1tuMoimyy3ChSJJrhQRR5lNUS5+SKCQzKB82Q8sqnEeXD/Iis2KOcVrBLttP8vi95p3c5P7Ffb1G25EAfyI7s4Ox0JV+EW1th3LST7ShUEXbXd0Js2exU/2aP8ppGA7crMr3QjGCpfIUQKz+hzP4hWS2cT/mSR6NaspETQetlTuxLPoHW44gpcc0YWdDd0QkR1P2SMwz2mD4e/PHeKZYLEwJ4HMt6RyWcCBMpYXM0SdowcmAlZYsqqfWumDjldVrEW8J+7drRl85o41B3YjxbDx1bOVHJ8WhSp5lMndpJzaMpDaKUdCZ4zK8DKD+iSV5tYzWJlUfTOGbGhEQiAi3cS1NBLDuxpCkEzaMZvbkbprl2LVqkyQP13KP39OZWuLnTU9oO9LNGf1anYjrYC9PpaeQv8Wna5SJF6frpGX5M4kHWAjKRLTbDlIMHb/0O0svXlhyF1wbY7u3zK6h91kTwpAH7G9AeT9UpCUyFmFWIVkBirWtZlsnVrBapyNR3Q5pWvqzTBIpyHBfHvoxx/V8zM5aYEr7fidOzIy49c+1LCNMcfJt1PZrXqcVyAXFmeU6nWZbv6zTH8gOd5lme1+kIS1unoyw/1GmB5Uc6HWN5QQuadN/BkIsw5AIOkDCEpQNDWF6CISwVDGG5CENYFmEIyyUYwvJjGMJyGYawvKxl1dRTSePamVgGbEJgYo4eucxF5WoquVRCu2hUakOeEm6VVBTPqn9loF488oY5sBZIl8iaXzHOlY9G5fjWFS1vGjtXwLHqbx+O9jnxUtaLhT8F/9XWVCW9Ys3Dk6vwG4aebCeqNql4dE2Xz1U9uv5fVFRYC/QbSIVYKMqybHBnIoSPOp2GaqCVQ8xszDy063XLmp/D/TcxQhZQ/fg3FBoL3INOWUlZ7eCs1dfbstw7g3I4EyxJMTfz+lb4IiOz0n6RWcqej3wecAWMSmXYagOtFbzZJzEPmd4kzwRxW1E2SNrYzgSJDRzzgHnznQQmYeqqDeRO4YYN+AVhbsF5J1yieqMsh+5F7PMopPxbp+JE9qhojMCz2Rthr+9Cym9xDCQ0+aV+DFQVoakYNRXQNFJuqAZfxtm6bULGDvQjKnbDsqziw8cW95WSbRmEfKSI1aOjn9Zeok6q3H5mFJfvnb4FwSA1MX9733RxkMq7WskyR20DU7calVPXmkPjVYfq5lH1vePsEzlrmm66Jx56X9Oq28HFXCyw9m0O0lImF9T1YYUNosvFpVDqZTRJ77gHGBYY0O9Qio3/q/rYfJ4rVYXRcSTfTtS30edgDPwP2H9H9QPQ92Pocg0uz/eaE59u9OFsma6iF+un6Dcwa625WboG3NB0A+IhR62OuMoNfKcGcXqkuRzpIeBj3RXiAcAmgMXgE921jOZTAKP5jDk+wOfMYdBkDoMt5jDYZs4awA5zGOwyh8Eecxh8wZx1gC+ZwyBkDoOIOQyeMCcAeMocBl8xh8HXzGHwDXPuA3zLHAYxcxgkzGGwr+nWMMwtXtBdoLZBVaADU09Y3MPiUFNlyP6OF4b9vUHM/sEgpv6o6faQ+hMvDPVng5j6i0FM/VXTnSH1N14Y6u8GMfUPg5j6TL8Yy2UGv4x8lwoHlF1sPufvifcP28VAuQABAAH//wAPeJxjYGRg+H+AaQazC4MIg+5WRkYGRkZ37w0qAREO3AwMjAwFQD4Po6e0AyeQw5jPwMCQFrlFXJyJVUybk0lMhJ+RTUmdUc3EnNHMSJ5RTISp7991Rk0urlhuGe5/SdzcjPO45LhiuZhW/bvx7zqYycU4H0gzzuPmjuWSYwBZAbK/BGo/J1H2ywiB7QfarQ+ymxNI2AMdIA5yQBbQWhnuWKDVGv9ugC0BWsbFmPkvEeIqRk1GDYgCkEIGAB9cLoQAeJxjYGRgYABic9F3f+P5bb4ycDO/AIow3Pw4yxFB/z/A/ILZBcjlYGACiQIAcjgNFAAAAHicY2BkYGAO+p8FJF8wMIBJRgZUwAwAXPcDmgAD6AAAAsoAAALKAAAAAAAAAEAAgAABAAAAAwAVAAEAAAAAAAIABAAUAHMAAAAqC3AAAAAAeJx1kMtOwkAUhv+RiwqJGk3cOisDMZZL4gISEhIMbHRDDFtTSmlLSodMBxJew3fwYXwJn8WfdjAGYpvpfOebM2dOB8A1viGQP08cOQucMcr5BKfoWS7QP1sukl8sl1DFm+Uy/bvlCh4QWK7iBh+sIIrnjBb4tCxwJS4tn+BC3Fku0D9aLpJ7lku4Fa+Wy/Se5QomIrVcxb34GqjVVkdBaGRtUJftZqsjp1upqKLEjaW7NqHSqezLuUqMH8fK8dRyz2M/WMeu3of7eeLrNFKJbDnNvRr5ia9d48921dNN0DZmLudaLeXQZsiVVgvfM05ozKrbaPw9DwMorLCFRsSrCmEgUaOtc26jiRY6pCkzJDPzrAgJXMQ0LtbcEWYrKeM+x5xRQuszIyY78PhdHvkxKeD+mFX00ephPCHtzogyL9mXw+4Os0akJMt0Mzv77T3Fhqe1aQ137brUWVcSw4MakvexW1vQePROdiuGtosG33/+7wfseIRVAHicY2BigAAuBuyAmZGJkZmRhYEzJzWtRDe/IDWPqygzPQPCZGAAAGN+B7YAeJxj8N7BcCIoYiMjY1/kBsadHAwcDMkFGxlYnTYxMDJogRibuZgYOSAsPgYwi81pF9MBoDQnkM3utIvBAcJmZnDZqMLYERixwaEjYiNzistGNRBvF0cDAyOLQ0dySARISSQQbOZhYuTR2sH4v3UDS+9GJgYXAAx2I/QAAA==) format('woff');font-weight:400;font-style:normal}.myDpIcon{font-family:angular-mydatepicker;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#222;font-size:20px}.myDpIconLeftArrow:before{content:\"\\e800\"}.myDpIconRightArrow:before{content:\"\\e801\"}"], encapsulation: 2 });
/** @nocollapse */
CalendarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: UtilService }
];
CalendarComponent.propDecorators = {
    selectorEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["selectorEl",] }],
    styleEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["styleEl",] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ["style.position",] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: "lib-angular-mydatepicker-calendar",
                template: "<span #styleEl></span>\n<div class=\"ng-mydp {{opts.stylesData?.selector || ''}}\">\n  <div class=\"myDpSelector\" #selectorEl \n    [libAngularMyDatePickerCalendar]=\"{inline: opts.inline, selectorWidth: opts.selectorWidth, selectorHeight: opts.selectorHeight, selectorPos: selectorPos}\" \n    [ngClass]=\"{'myDpSelectorArrow': opts.showSelectorArrow, 'myDpSelectorArrowLeft': opts.showSelectorArrow && !opts.alignSelectorRight, \n      'myDpSelectorArrowRight': opts.showSelectorArrow&&opts.alignSelectorRight, 'myDpSelectorAbsolute': !opts.inline, 'myDpSelectorPosInitial': opts.inline}\" \n    (keyup)=\"onCloseSelector($event)\" tabindex=\"0\">\n\n    <lib-selection-bar [opts]=\"opts\" [yearsDuration]=\"yearsDuration\" [visibleMonth]=\"visibleMonth\" [selectMonth]=\"selectMonth\" [selectYear]=\"selectYear\"\n                    [prevViewDisabled]=\"prevViewDisabled\" [nextViewDisabled]=\"nextViewDisabled\"\n                    (prevNavigateBtnClicked)=\"onPrevNavigateBtnClicked()\" (nextNavigateBtnClicked)=\"onNextNavigateBtnClicked()\"\n                    (monthViewBtnClicked)=\"onMonthViewBtnClicked()\" (yearViewBtnClicked)=\"onYearViewBtnClicked()\"></lib-selection-bar>\n\n    <lib-day-view *ngIf=\"!selectMonth && !selectYear\" [opts]=\"opts\" [dates]=\"dates\" [weekDays]=\"weekDays\"\n                    [selectedDate]=\"selectedDate\" [selectedDateRange]=\"selectedDateRange\" [viewChanged]=\"viewChanged\"\n                    (dayCellClicked)=\"onDayCellClicked($event)\"\n                    (dayCellKeyDown)=\"onDayCellKeyDown($event)\"\n                    (viewActivated)=\"onViewActivated($event)\"></lib-day-view>\n\n    <lib-month-view *ngIf=\"selectMonth\" [opts]=\"opts\" [months]=\"months\" [viewChanged]=\"viewChanged\"\n                    (monthCellClicked)=\"onMonthCellClicked($event)\"\n                    (monthCellKeyDown)=\"onMonthCellKeyDown($event)\"\n                    (viewActivated)=\"onViewActivated($event)\"></lib-month-view>\n\n    <lib-year-view *ngIf=\"selectYear\" [opts]=\"opts\" [years]=\"years\" [viewChanged]=\"viewChanged\"\n                    (yearCellClicked)=\"onYearCellClicked($event)\"\n                    (yearCellKeyDown)=\"onYearCellKeyDown($event)\"\n                    (viewActivated)=\"onViewActivated($event)\"></lib-year-view>\n\n    <lib-footer-bar *ngIf=\"opts.showFooterToday\" [opts]=\"opts\"\n                    (footerBarTxtClicked)=\"onTodayFooterClicked()\"></lib-footer-bar>\n  </div>\n</div>\n",
                providers: [UtilService],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                styles: [".ng-mydp{position:static}.ng-myrtl{direction:rtl}.ng-mydp *{box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;padding:0;margin:0}.ng-mydp table{display:table;border-spacing:0}.ng-mydp table td,.ng-mydp table th{padding:0;margin:0;vertical-align:middle;border:none}.myDpSelector{padding:4px;border:1px solid #ccc;background-color:#fff;border-radius:4px;z-index:100000}.myDpViewChangeAnimation{-webkit-animation:.2s linear myDpViewChangeAnimation;animation:.2s linear myDpViewChangeAnimation}@-webkit-keyframes myDpViewChangeAnimation{0%{transform:scale(.75);opacity:.1}100%{transform:scale(1);opacity:1}}@keyframes myDpViewChangeAnimation{0%{transform:scale(.75);opacity:.1}100%{transform:scale(1);opacity:1}}.myDpAnimationFadeIn{-webkit-animation:.5s linear myDpAnimationFadeIn;animation:.5s linear myDpAnimationFadeIn}@-webkit-keyframes myDpAnimationFadeIn{0%{transform:translateY(-50px);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes myDpAnimationFadeIn{0%{transform:translateY(-50px);opacity:0}100%{transform:translateY(0);opacity:1}}.myDpAnimationFadeOut{-webkit-animation:.3s linear forwards myDpAnimationFadeOut;animation:.3s linear forwards myDpAnimationFadeOut}@-webkit-keyframes myDpAnimationFadeOut{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-50px);opacity:0}}@keyframes myDpAnimationFadeOut{0%{transform:translateY(0);opacity:1}100%{transform:translateY(-50px);opacity:0}}.myDpAnimationScaleTopIn{-webkit-animation:.3s linear myDpAnimationScaleTopIn;animation:.3s linear myDpAnimationScaleTopIn}@-webkit-keyframes myDpAnimationScaleTopIn{0%{transform:scaleY(0);transform-origin:100% 0}100%{transform:scaleY(1);transform-origin:100% 0}}@keyframes myDpAnimationScaleTopIn{0%{transform:scaleY(0);transform-origin:100% 0}100%{transform:scaleY(1);transform-origin:100% 0}}.myDpAnimationScaleTopOut{-webkit-animation:.3s linear forwards myDpAnimationScaleTopOut;animation:.3s linear forwards myDpAnimationScaleTopOut}@-webkit-keyframes myDpAnimationScaleTopOut{0%{transform:scaleY(1);transform-origin:100% 0;opacity:1}100%{transform:scaleY(0);transform-origin:100% 0;opacity:0}}@keyframes myDpAnimationScaleTopOut{0%{transform:scaleY(1);transform-origin:100% 0;opacity:1}100%{transform:scaleY(0);transform-origin:100% 0;opacity:0}}.myDpAnimationScaleCenterIn{-webkit-animation:.3s linear myDpAnimationScaleCenterIn;animation:.3s linear myDpAnimationScaleCenterIn}@-webkit-keyframes myDpAnimationScaleCenterIn{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes myDpAnimationScaleCenterIn{0%{transform:scale(0)}100%{transform:scale(1)}}.myDpAnimationScaleCenterOut{-webkit-animation:.3s linear forwards myDpAnimationScaleCenterOut;animation:.3s linear forwards myDpAnimationScaleCenterOut}@-webkit-keyframes myDpAnimationScaleCenterOut{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}@keyframes myDpAnimationScaleCenterOut{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}.myDpAnimationRotateIn{-webkit-animation:.3s linear myDpAnimationRotateIn;animation:.3s linear myDpAnimationRotateIn}@-webkit-keyframes myDpAnimationRotateIn{0%{transform:scale(.3) rotate(-45deg);opacity:0}100%{transform:scale(1) rotate(0);opacity:1}}@keyframes myDpAnimationRotateIn{0%{transform:scale(.3) rotate(-45deg);opacity:0}100%{transform:scale(1) rotate(0);opacity:1}}.myDpAnimationRotateOut{-webkit-animation:.3s linear forwards myDpAnimationRotateOut;animation:.3s linear forwards myDpAnimationRotateOut}@-webkit-keyframes myDpAnimationRotateOut{0%{transform:scale(1) rotate(0);opacity:1}100%{transform:scale(.3) rotate(-45deg);opacity:0}}@keyframes myDpAnimationRotateOut{0%{transform:scale(1) rotate(0);opacity:1}100%{transform:scale(.3) rotate(-45deg);opacity:0}}.myDpAnimationFlipDiagonalIn{-webkit-animation:.3s linear myDpAnimationFlipDiagonalIn;animation:.3s linear myDpAnimationFlipDiagonalIn}@-webkit-keyframes myDpAnimationFlipDiagonalIn{0%{transform:rotate3d(1,1,0,-78deg)}100%{transform:rotate3d(1,1,0,0deg)}}@keyframes myDpAnimationFlipDiagonalIn{0%{transform:rotate3d(1,1,0,-78deg)}100%{transform:rotate3d(1,1,0,0deg)}}.myDpAnimationFlipDiagonalOut{-webkit-animation:.3s linear forwards myDpAnimationFlipDiagonalOut;animation:.3s linear forwards myDpAnimationFlipDiagonalOut}@-webkit-keyframes myDpAnimationFlipDiagonalOut{0%{transform:rotate3d(1,1,0,0deg);opacity:1}100%{transform:rotate3d(1,1,0,78deg);opacity:0}}@keyframes myDpAnimationFlipDiagonalOut{0%{transform:rotate3d(1,1,0,0deg);opacity:1}100%{transform:rotate3d(1,1,0,78deg);opacity:0}}.myDpSelectorAbsolute{position:absolute}.myDpSelectorPosInitial{position:initial}.myDpSelector:focus{box-shadow:-1px 1px 6px 0 #add8e6;outline:0}.myDpSelectorArrow{background:#fff}.myDpSelectorArrow:after,.myDpSelectorArrow:before{bottom:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute}.myDpSelectorArrow:after{border-color:rgba(250,250,250,0);border-bottom-color:#fafafa;border-width:10px;margin-left:-10px}.myDpSelectorArrow:before{border-color:rgba(204,204,204,0);border-bottom-color:#ccc;border-width:11px;margin-left:-11px}.myDpSelectorArrow:focus:before{border-bottom-color:#add8e6}.myDpSelectorArrowLeft:after,.myDpSelectorArrowLeft:before{left:24px}.myDpSelectorArrowRight:after,.myDpSelectorArrowRight:before{left:86%}::-ms-clear{display:none}.myDpCalTable,.myDpFooterBar,.myDpMonthTable,.myDpYearTable{border-radius:0 0 4px 4px}.myDpCalTable.myDpNoFooter tbody tr:nth-child(6) td:first-child,.myDpMonthTable.myDpNoFooter tbody tr:nth-child(4) td:first-child,.myDpYearTable.myDpNoFooter tbody tr:nth-child(5) td:first-child{border-bottom-left-radius:4px}.myDpCalTable.myDpNoFooter tbody tr:nth-child(6) td:last-child,.myDpMonthTable.myDpNoFooter tbody tr:nth-child(4) td:last-child,.myDpYearTable.myDpNoFooter tbody tr:nth-child(5) td:last-child{border-bottom-right-radius:4px}.myDpCalTable,.myDpMonthTable,.myDpYearTable{table-layout:fixed;width:100%;background-color:#fff;font-size:14px}.myDpFooter{height:calc(100% - 60px)}.myDpNoFooter{height:calc(100% - 30px)}.myDpCalTable,.myDpDaycell,.myDpMonthTable,.myDpMonthcell,.myDpWeekDayTitle,.myDpYearTable,.myDpYearcell{border-collapse:collapse;color:#333;line-height:1.1}.myDpDaycell,.myDpMonthcell,.myDpYearcell{padding:4px;text-align:center;outline:0}.myDpDaycell{background-color:#fff;position:relative}.myDpWeekDayTitle{background-color:transparent;color:#333;font-size:13px;font-weight:400;vertical-align:middle;max-width:36px;overflow:hidden;white-space:nowrap;height:23px;text-align:center}.myDpWeekDayTitleWeekNbr{width:20px}.myDpMonthcell{background-color:#fff;overflow:hidden;white-space:nowrap}.myDpYearcell{background-color:#fff;width:20%}.myDpMonthNbr{font-size:10px;display:block}.myDpDaycellWeekNbr{font-size:9px;cursor:default;text-align:center;color:#333}.myDpNextMonth,.myDpPrevMonth{color:#999}.myDpMonthYearSelBar{display:flex;height:30px;background-color:#fff;border-top-left-radius:4px;border-top-right-radius:4px}.myDpPrevBtn{margin-left:10px}.myDpNextBtn{margin-left:auto;margin-right:10px}.myDpMonthYearText{width:100%;line-height:30px;text-align:center}.myDpFooterBar{display:flex;align-items:center;justify-content:center;height:30px;background-color:#fff}.myDpHeaderBtn{background:0 0;padding:0;border:none;line-height:30px;height:28px;margin-top:1px;color:#000;outline:0;cursor:default}.myDpFooterBtn{margin:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.myDpMonthBtn,.myDpYearBtn{font-size:16px}.myDpMonthBtn{margin-right:6px}.myDpHighlight{color:#c30000}.myDpDimDay{opacity:.5}.myDpCurrMonth{background-color:#fff;font-weight:400}.myDpMarkDate{position:absolute;top:2px;left:2px;border-right:8px solid transparent}.myDpMarkCurrDay,.myDpMarkCurrMonth,.myDpMarkCurrYear{border-bottom:2px solid #333}.myDpHeaderLabelBtnNotEdit{cursor:default}.myDpHeaderBtn::-moz-focus-inner,.myDpNextBtn::-moz-focus-inner,.myDpPrevBtn::-moz-focus-inner{border:0}.myDpFooterBtn:focus,.myDpHeaderBtn:focus,.myDpMonthLabel:focus,.myDpYearLabel:focus{color:#66afe9;outline:0}.myDpDaycell:focus,.myDpMonthcell:focus,.myDpYearcell:focus{box-shadow:inset 0 0 0 1px #66afe9}.myDpTableSingleDay:hover,.myDpTableSingleMonth:hover,.myDpTableSingleYear:hover{background-color:#ddd}.myDpDaycell,.myDpMonthLabel,.myDpMonthcell,.myDpYearLabel,.myDpYearcell{cursor:pointer}.myDpFooterBtn:hover,.myDpHeaderBtnEnabled:hover,.myDpMonthLabel:hover,.myDpYearLabel:hover{color:#777}.myDpHeaderBtnEnabled{cursor:pointer}.myDpHeaderBtnDisabled{cursor:not-allowed;opacity:.65}.myDpDisabled{cursor:default;color:#777;background:repeating-linear-gradient(-45deg,#ccc 7px,#ccc 8px,transparent 7px,transparent 14px)}.myDpRangeColor{background-color:#dbeaff}.myDpSelectedDay,.myDpSelectedMonth,.myDpSelectedYear{border:none;background-color:#8ebfff}@font-face{font-family:angular-mydatepicker;src:url(data:application/octet-stream;base64,d09GRgABAAAAAAs4AA8AAAAAE+gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABWAAAADsAAABUIIslek9TLzIAAAGUAAAAQwAAAFY+IEi5Y21hcAAAAdgAAABQAAABfohD7KljdnQgAAACKAAAABMAAAAgBtX/BGZwZ20AAAI8AAAFkAAAC3CKkZBZZ2FzcAAAB8wAAAAIAAAACAAAABBnbHlmAAAH1AAAAL8AAAEAS//bfWhlYWQAAAiUAAAAMQAAADYW6nhraGhlYQAACMgAAAAbAAAAJAc8A1ZobXR4AAAI5AAAAAwAAAAMCXwAAGxvY2EAAAjwAAAACAAAAAgAQACAbWF4cAAACPgAAAAgAAAAIACmC5tuYW1lAAAJGAAAAXcAAALNzJ0fIXBvc3QAAAqQAAAAKwAAAEAj+eC8cHJlcAAACrwAAAB6AAAAhuVBK7x4nGNgZGBg4GIwYLBjYHJx8wlh4MtJLMljkGJgYYAAkDwymzEnMz2RgQPGA8qxgGkOIGaDiAIAJjsFSAB4nGNgZNZknMDAysDAVMW0h4GBoQdCMz5gMGRkAooysDIzYAUBaa4pDA4vGF4wMgf9z2KIYg5imAYUZgTJAQDMhAtXAHic7ZCxDYAwDATPiaFAjEFBwTBU7F+yRfK2GYOX7qR/uTKwAF1cwsEejMit1XLvbLk7R9547K+NIRNW93STVv7s6fNrLf5U1OcK2gTMuAtdeJxjYEADEhDIHPQ/C4QBEmwD3QB4nK1WaXfTRhQdeUmchCwlCy1qYcTEabBGJmzBgAlBsmMgXZytlaCLFDvpvvGJ3+Bf82Tac+g3flrvGy8kkLTncJqTo3fnzdXM22USWpLYC+uRlJsvxdTWJo3sPAnphk3LUXwoO3shZYrJ3wVREK2W2rcdh0REIlC1rrBEEPseWZpkfOhRRsu2pFdNyi096S5b40G9Vd9+GjrKsTuhpGYzdGg9siVVGFWiSKY9UtKmZaj6K0krvL/CzFfNUMKITiJpvBnG0EjeG2e0ymg1tuMoimyy3ChSJJrhQRR5lNUS5+SKCQzKB82Q8sqnEeXD/Iis2KOcVrBLttP8vi95p3c5P7Ffb1G25EAfyI7s4Ox0JV+EW1th3LST7ShUEXbXd0Js2exU/2aP8ppGA7crMr3QjGCpfIUQKz+hzP4hWS2cT/mSR6NaspETQetlTuxLPoHW44gpcc0YWdDd0QkR1P2SMwz2mD4e/PHeKZYLEwJ4HMt6RyWcCBMpYXM0SdowcmAlZYsqqfWumDjldVrEW8J+7drRl85o41B3YjxbDx1bOVHJ8WhSp5lMndpJzaMpDaKUdCZ4zK8DKD+iSV5tYzWJlUfTOGbGhEQiAi3cS1NBLDuxpCkEzaMZvbkbprl2LVqkyQP13KP39OZWuLnTU9oO9LNGf1anYjrYC9PpaeQv8Wna5SJF6frpGX5M4kHWAjKRLTbDlIMHb/0O0svXlhyF1wbY7u3zK6h91kTwpAH7G9AeT9UpCUyFmFWIVkBirWtZlsnVrBapyNR3Q5pWvqzTBIpyHBfHvoxx/V8zM5aYEr7fidOzIy49c+1LCNMcfJt1PZrXqcVyAXFmeU6nWZbv6zTH8gOd5lme1+kIS1unoyw/1GmB5Uc6HWN5QQuadN/BkIsw5AIOkDCEpQNDWF6CISwVDGG5CENYFmEIyyUYwvJjGMJyGYawvKxl1dRTSePamVgGbEJgYo4eucxF5WoquVRCu2hUakOeEm6VVBTPqn9loF488oY5sBZIl8iaXzHOlY9G5fjWFS1vGjtXwLHqbx+O9jnxUtaLhT8F/9XWVCW9Ys3Dk6vwG4aebCeqNql4dE2Xz1U9uv5fVFRYC/QbSIVYKMqybHBnIoSPOp2GaqCVQ8xszDy063XLmp/D/TcxQhZQ/fg3FBoL3INOWUlZ7eCs1dfbstw7g3I4EyxJMTfz+lb4IiOz0n6RWcqej3wecAWMSmXYagOtFbzZJzEPmd4kzwRxW1E2SNrYzgSJDRzzgHnznQQmYeqqDeRO4YYN+AVhbsF5J1yieqMsh+5F7PMopPxbp+JE9qhojMCz2Rthr+9Cym9xDCQ0+aV+DFQVoakYNRXQNFJuqAZfxtm6bULGDvQjKnbDsqziw8cW95WSbRmEfKSI1aOjn9Zeok6q3H5mFJfvnb4FwSA1MX9733RxkMq7WskyR20DU7calVPXmkPjVYfq5lH1vePsEzlrmm66Jx56X9Oq28HFXCyw9m0O0lImF9T1YYUNosvFpVDqZTRJ77gHGBYY0O9Qio3/q/rYfJ4rVYXRcSTfTtS30edgDPwP2H9H9QPQ92Pocg0uz/eaE59u9OFsma6iF+un6Dcwa625WboG3NB0A+IhR62OuMoNfKcGcXqkuRzpIeBj3RXiAcAmgMXgE921jOZTAKP5jDk+wOfMYdBkDoMt5jDYZs4awA5zGOwyh8Eecxh8wZx1gC+ZwyBkDoOIOQyeMCcAeMocBl8xh8HXzGHwDXPuA3zLHAYxcxgkzGGwr+nWMMwtXtBdoLZBVaADU09Y3MPiUFNlyP6OF4b9vUHM/sEgpv6o6faQ+hMvDPVng5j6i0FM/VXTnSH1N14Y6u8GMfUPg5j6TL8Yy2UGv4x8lwoHlF1sPufvifcP28VAuQABAAH//wAPeJxjYGRg+H+AaQazC4MIg+5WRkYGRkZ37w0qAREO3AwMjAwFQD4Po6e0AyeQw5jPwMCQFrlFXJyJVUybk0lMhJ+RTUmdUc3EnNHMSJ5RTISp7991Rk0urlhuGe5/SdzcjPO45LhiuZhW/bvx7zqYycU4H0gzzuPmjuWSYwBZAbK/BGo/J1H2ywiB7QfarQ+ymxNI2AMdIA5yQBbQWhnuWKDVGv9ugC0BWsbFmPkvEeIqRk1GDYgCkEIGAB9cLoQAeJxjYGRgYABic9F3f+P5bb4ycDO/AIow3Pw4yxFB/z/A/ILZBcjlYGACiQIAcjgNFAAAAHicY2BkYGAO+p8FJF8wMIBJRgZUwAwAXPcDmgAD6AAAAsoAAALKAAAAAAAAAEAAgAABAAAAAwAVAAEAAAAAAAIABAAUAHMAAAAqC3AAAAAAeJx1kMtOwkAUhv+RiwqJGk3cOisDMZZL4gISEhIMbHRDDFtTSmlLSodMBxJew3fwYXwJn8WfdjAGYpvpfOebM2dOB8A1viGQP08cOQucMcr5BKfoWS7QP1sukl8sl1DFm+Uy/bvlCh4QWK7iBh+sIIrnjBb4tCxwJS4tn+BC3Fku0D9aLpJ7lku4Fa+Wy/Se5QomIrVcxb34GqjVVkdBaGRtUJftZqsjp1upqKLEjaW7NqHSqezLuUqMH8fK8dRyz2M/WMeu3of7eeLrNFKJbDnNvRr5ia9d48921dNN0DZmLudaLeXQZsiVVgvfM05ozKrbaPw9DwMorLCFRsSrCmEgUaOtc26jiRY6pCkzJDPzrAgJXMQ0LtbcEWYrKeM+x5xRQuszIyY78PhdHvkxKeD+mFX00ephPCHtzogyL9mXw+4Os0akJMt0Mzv77T3Fhqe1aQ137brUWVcSw4MakvexW1vQePROdiuGtosG33/+7wfseIRVAHicY2BigAAuBuyAmZGJkZmRhYEzJzWtRDe/IDWPqygzPQPCZGAAAGN+B7YAeJxj8N7BcCIoYiMjY1/kBsadHAwcDMkFGxlYnTYxMDJogRibuZgYOSAsPgYwi81pF9MBoDQnkM3utIvBAcJmZnDZqMLYERixwaEjYiNzistGNRBvF0cDAyOLQ0dySARISSQQbOZhYuTR2sH4v3UDS+9GJgYXAAx2I/QAAA==) format('woff');font-weight:400;font-style:normal}.myDpIcon{font-family:angular-mydatepicker;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#222;font-size:20px}.myDpIconLeftArrow:before{content:\"\\e800\"}.myDpIconRightArrow:before{content:\"\\e801\"}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: UtilService }]; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ["style.position"]
        }], selectorEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ["selectorEl"]
        }], styleEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ["styleEl"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectionBarComponent {
    constructor() {
        this.prevNavigateBtnClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nextNavigateBtnClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.monthViewBtnClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.yearViewBtnClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(YEARS_DURATION)) {
            this.yearsDuration = changes[YEARS_DURATION].currentValue;
        }
        if (changes.hasOwnProperty(VISIBLE_MONTH)) {
            this.visibleMonth = changes[VISIBLE_MONTH].currentValue;
        }
        if (changes.hasOwnProperty(SELECT_MONTH)) {
            this.selectMonth = changes[SELECT_MONTH].currentValue;
        }
        if (changes.hasOwnProperty(SELECT_YEAR)) {
            this.selectYear = changes[SELECT_YEAR].currentValue;
        }
        if (changes.hasOwnProperty(PREV_VIEW_DISABLED)) {
            this.prevViewDisabled = changes[PREV_VIEW_DISABLED].currentValue;
        }
        if (changes.hasOwnProperty(NEXT_VIEW_DISABLED)) {
            this.nextViewDisabled = changes[NEXT_VIEW_DISABLED].currentValue;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPrevNavigateBtnClicked(event) {
        event.stopPropagation();
        this.opts.rtl ? this.nextNavigateBtnClicked.emit() : this.prevNavigateBtnClicked.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onNextNavigateBtnClicked(event) {
        event.stopPropagation();
        this.opts.rtl ? this.prevNavigateBtnClicked.emit() : this.nextNavigateBtnClicked.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMonthViewBtnClicked(event) {
        event.stopPropagation();
        this.monthViewBtnClicked.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onYearViewBtnClicked(event) {
        event.stopPropagation();
        this.yearViewBtnClicked.emit();
    }
}
SelectionBarComponent.ɵfac = function SelectionBarComponent_Factory(t) { return new (t || SelectionBarComponent)(); };
SelectionBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SelectionBarComponent, selectors: [["lib-selection-bar"]], inputs: { opts: "opts", yearsDuration: "yearsDuration", visibleMonth: "visibleMonth", selectMonth: "selectMonth", selectYear: "selectYear", prevViewDisabled: "prevViewDisabled", nextViewDisabled: "nextViewDisabled" }, outputs: { prevNavigateBtnClicked: "prevNavigateBtnClicked", nextNavigateBtnClicked: "nextNavigateBtnClicked", monthViewBtnClicked: "monthViewBtnClicked", yearViewBtnClicked: "yearViewBtnClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 19, consts: [[1, "myDpMonthYearSelBar"], [1, "myDpPrevBtn"], ["type", "button", 1, "myDpHeaderBtn", "myDpIcon", "myDpIconLeftArrow", "myDpHeaderBtnEnabled", 3, "tabindex", "disabled", "ngClass", "click"], [1, "myDpMonthYearText"], ["type", "button", "class", "myDpHeaderBtn myDpMonthBtn", 3, "tabindex", "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "myDpHeaderBtn", "myDpYearBtn", 3, "tabindex", "ngClass", "click"], [1, "myDpNextBtn"], ["type", "button", 1, "myDpHeaderBtn", "myDpIcon", "myDpIconRightArrow", "myDpHeaderBtnEnabled", 3, "tabindex", "disabled", "ngClass", "click"], ["type", "button", 1, "myDpHeaderBtn", "myDpMonthBtn", 3, "tabindex", "ngClass", "click"]], template: function SelectionBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectionBarComponent_Template_button_click_2_listener($event) { return ctx.onPrevNavigateBtnClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SelectionBarComponent_button_4_Template, 2, 6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectionBarComponent_Template_button_click_5_listener($event) { return ctx.opts.yearSelector && ctx.onYearViewBtnClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectionBarComponent_Template_button_click_8_listener($event) { return ctx.onNextNavigateBtnClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("tabindex", !ctx.prevViewDisabled ? "0" : "-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.prevViewDisabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c5, ctx.prevViewDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.opts.ariaLabelPrevMonth);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selectYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("tabindex", ctx.opts.yearSelector ? "0" : "-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](14, _c6, ctx.opts.yearSelector, !ctx.opts.yearSelector));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](!ctx.selectYear ? ctx.visibleMonth.year : ctx.yearsDuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("tabindex", !ctx.nextViewDisabled ? "0" : "-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.nextViewDisabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c5, ctx.nextViewDisabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.opts.ariaLabelNextMonth);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]], encapsulation: 2 });
/** @nocollapse */
SelectionBarComponent.ctorParameters = () => [];
SelectionBarComponent.propDecorators = {
    opts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    yearsDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    visibleMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    selectMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    selectYear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    prevViewDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nextViewDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    prevNavigateBtnClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nextNavigateBtnClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    monthViewBtnClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    yearViewBtnClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SelectionBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: "lib-selection-bar",
                template: "<div class=\"myDpMonthYearSelBar\">\n  <div class=\"myDpPrevBtn\">\n    <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevMonth\" class=\"myDpHeaderBtn myDpIcon myDpIconLeftArrow myDpHeaderBtnEnabled\" (click)=\"onPrevNavigateBtnClicked($event)\" tabindex=\"{{!prevViewDisabled ? '0':'-1'}}\"  [disabled]=\"prevViewDisabled\" [ngClass]=\"{'myDpHeaderBtnDisabled': prevViewDisabled}\"></button>\n  </div>\n  <div class=\"myDpMonthYearText\">\n    <button type=\"button\" class=\"myDpHeaderBtn myDpMonthBtn\" *ngIf=\"!selectYear\" (click)=\"opts.monthSelector && onMonthViewBtnClicked($event)\" tabindex=\"{{opts.monthSelector ? '0':'-1'}}\" [ngClass]=\"{'myDpMonthLabel': opts.monthSelector, 'myDpHeaderLabelBtnNotEdit': !opts.monthSelector}\">{{visibleMonth.monthTxt}}</button>\n    <button type=\"button\" class=\"myDpHeaderBtn myDpYearBtn\" (click)=\"opts.yearSelector && onYearViewBtnClicked($event)\" tabindex=\"{{opts.yearSelector ? '0':'-1'}}\" [ngClass]=\"{'myDpYearLabel': opts.yearSelector, 'myDpHeaderLabelBtnNotEdit': !opts.yearSelector}\">{{!selectYear ? visibleMonth.year : yearsDuration}}</button>\n  </div>\n  <div class=\"myDpNextBtn\">\n    <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextMonth\" class=\"myDpHeaderBtn myDpIcon myDpIconRightArrow myDpHeaderBtnEnabled\" (click)=\"onNextNavigateBtnClicked($event)\" tabindex=\"{{!nextViewDisabled ? '0':'-1'}}\" [disabled]=\"nextViewDisabled\" [ngClass]=\"{'myDpHeaderBtnDisabled': nextViewDisabled}\"></button>\n  </div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { prevNavigateBtnClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nextNavigateBtnClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], monthViewBtnClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], yearViewBtnClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], opts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], yearsDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], visibleMonth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], selectMonth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], selectYear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], prevViewDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nextViewDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ActiveView = {
    Date: 1,
    Month: 2,
    Year: 3,
};
ActiveView[ActiveView.Date] = 'Date';
ActiveView[ActiveView.Month] = 'Month';
ActiveView[ActiveView.Year] = 'Year';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DayViewComponent {
    /**
     * @param {?} utilService
     */
    constructor(utilService) {
        this.utilService = utilService;
        this.dayCellClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dayCellKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.viewActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.prevMonthId = MonthId.prev;
        this.currMonthId = MonthId.curr;
        this.nextMonthId = MonthId.next;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(DATES)) {
            this.dates = changes[DATES].currentValue;
        }
        if (changes.hasOwnProperty(WEEK_DAYS)) {
            this.weekDays = changes[WEEK_DAYS].currentValue;
        }
        if (changes.hasOwnProperty(SELECTED_DATE)) {
            this.selectedDate = changes[SELECTED_DATE].currentValue;
        }
        if (changes.hasOwnProperty(SELECTED_DATE_RANGE)) {
            this.selectedDateRange = changes[SELECTED_DATE_RANGE].currentValue;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.viewActivated.emit(ActiveView.Date);
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onDayCellClicked(event, cell) {
        event.stopPropagation();
        if (cell.disabledDate.disabled) {
            return;
        }
        this.dayCellClicked.emit(cell);
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onDayCellKeyDown(event, cell) {
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode !== KeyCode.tab) {
            event.preventDefault();
            if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
                this.onDayCellClicked(event, cell);
            }
            else if (this.opts.moveFocusByArrowKeys) {
                this.dayCellKeyDown.emit(event);
            }
        }
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    onDayCellMouseEnter(cell) {
        if (this.utilService.isInitializedDate(this.selectedDateRange.begin) && !this.utilService.isInitializedDate(this.selectedDateRange.end)) {
            for (const w of this.dates) {
                for (const day of w.week) {
                    day.range = this.utilService.isDateSameOrEarlier(this.selectedDateRange.begin, day.dateObj) && this.utilService.isDateSameOrEarlier(day.dateObj, cell.dateObj);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    onDayCellMouseLeave() {
        for (const w of this.dates) {
            for (const day of w.week) {
                day.range = false;
            }
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isDateInRange(date) {
        return this.utilService.isDateInRange(date, this.selectedDateRange);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isDateSame(date) {
        return this.utilService.isDateSame(this.selectedDate, date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isDateRangeBeginOrEndSame(date) {
        return this.utilService.isDateRangeBeginOrEndSame(this.selectedDateRange, date);
    }
}
DayViewComponent.ɵfac = function DayViewComponent_Factory(t) { return new (t || DayViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](UtilService)); };
DayViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DayViewComponent, selectors: [["lib-day-view"]], inputs: { opts: "opts", dates: "dates", weekDays: "weekDays", selectedDate: "selectedDate", selectedDateRange: "selectedDateRange", viewChanged: "viewChanged" }, outputs: { dayCellClicked: "dayCellClicked", dayCellKeyDown: "dayCellKeyDown", viewActivated: "viewActivated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([UtilService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 9, consts: [[1, "myDpCalTable", 3, "ngClass"], ["class", "myDpWeekDayTitle myDpWeekDayTitleWeekNbr", 4, "ngIf"], ["class", "myDpWeekDayTitle", "scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "myDpWeekDayTitle", "myDpWeekDayTitleWeekNbr"], ["scope", "col", 1, "myDpWeekDayTitle"], ["class", "myDpDaycellWeekNbr", 4, "ngIf"], [3, "id", "class", "ngClass", "click", "keydown", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "myDpDaycellWeekNbr"], [3, "id", "ngClass", "click", "keydown", "mouseenter", "mouseleave"], ["class", "myDpMarkDate", 3, "ngStyle", 4, "ngIf"], [1, "myDpDayValue", 3, "ngClass"], [1, "myDpMarkDate", 3, "ngStyle"]], template: function DayViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DayViewComponent_th_3_Template, 2, 0, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DayViewComponent_th_4_Template, 2, 1, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DayViewComponent_tr_6_Template, 3, 2, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](4, _c10, ctx.opts.rtl, ctx.opts.showFooterToday, !ctx.opts.showFooterToday, ctx.opts.viewChangeAnimation && ctx.viewChanged));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.opts.showWeekNumbers && ctx.opts.firstDayOfWeek === "mo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.weekDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dates);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"]], encapsulation: 2 });
/** @nocollapse */
DayViewComponent.ctorParameters = () => [
    { type: UtilService }
];
DayViewComponent.propDecorators = {
    opts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    dates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    weekDays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    selectedDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    selectedDateRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    viewChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    dayCellClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    dayCellKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    viewActivated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DayViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: "lib-day-view",
                template: "<table class=\"myDpCalTable\" [ngClass]=\"{'ng-myrtl': opts.rtl, 'myDpFooter': opts.showFooterToday, 'myDpNoFooter': !opts.showFooterToday, 'myDpViewChangeAnimation': opts.viewChangeAnimation && viewChanged}\">\n  <thead>\n    <tr>\n      <th class=\"myDpWeekDayTitle myDpWeekDayTitleWeekNbr\" *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek==='mo'\">#</th>\n      <th class=\"myDpWeekDayTitle\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let w of dates\">\n      <td class=\"myDpDaycellWeekNbr\" *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td>\n      <td id=\"d_{{d.row}}_{{d.col}}\" class=\"d_{{d.row}}_{{d.col}} myDpDaycell {{d.markedDate.styleClass}} {{d.disabledDate.styleClass}}\" *ngFor=\"let d of w.week\"\n          [ngClass]=\"{'myDpRangeColor': isDateInRange(d.dateObj) || d.range,\n                'myDpPrevMonth': d.cmo === prevMonthId,\n                'myDpCurrMonth':d.cmo === currMonthId && !d.disabledDate.disabled,\n                'myDpNextMonth': d.cmo === nextMonthId,\n                'myDpSelectedDay':!this.opts.dateRange && isDateSame(d.dateObj) || this.opts.dateRange && isDateRangeBeginOrEndSame(d.dateObj),\n                'myDpDisabled': d.disabledDate.disabled && !d.disabledDate.styleClass.length,\n                'myDpTableSingleDay': !d.disabledDate.disabled}\"\n          (click)=\"onDayCellClicked($event, d)\" (keydown)=\"onDayCellKeyDown($event, d)\"\n          (mouseenter)=\"onDayCellMouseEnter(d)\" (mouseleave)=\"onDayCellMouseLeave()\" [attr.tabindex]=\"!d.disabledDate.disabled ? 0 : -1\">\n        <span *ngIf=\"d.markedDate.marked && d.markedDate.color.length\" class=\"myDpMarkDate\" [ngStyle]=\"{'border-top': '8px solid ' + d.markedDate.color}\"></span>\n        <span  class=\"myDpDayValue\" [ngClass]=\"{'myDpMarkCurrDay': d.currDay && opts.markCurrentDay, 'myDpDimDay': d.highlight && (d.cmo===prevMonthId || d.cmo===nextMonthId || d.disabledDate.disabled), 'myDpHighlight': d.highlight}\">{{d.dateObj.day}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                providers: [UtilService],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: UtilService }]; }, { dayCellClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], dayCellKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], viewActivated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], opts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], dates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], weekDays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], selectedDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], selectedDateRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], viewChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MonthViewComponent {
    /**
     * @param {?} utilService
     */
    constructor(utilService) {
        this.utilService = utilService;
        this.monthCellClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.monthCellKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.viewActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(MONTHS)) {
            this.months = changes[MONTHS].currentValue;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.viewActivated.emit(ActiveView.Month);
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onMonthCellClicked(event, cell) {
        event.stopPropagation();
        if (cell.disabled) {
            return;
        }
        this.monthCellClicked.emit(cell);
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onMonthCellKeyDown(event, cell) {
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode !== KeyCode.tab) {
            event.preventDefault();
            if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
                this.onMonthCellClicked(event, cell);
            }
            else if (this.opts.moveFocusByArrowKeys) {
                this.monthCellKeyDown.emit(event);
            }
        }
    }
}
MonthViewComponent.ɵfac = function MonthViewComponent_Factory(t) { return new (t || MonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](UtilService)); };
MonthViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MonthViewComponent, selectors: [["lib-month-view"]], inputs: { opts: "opts", months: "months", viewChanged: "viewChanged" }, outputs: { monthCellClicked: "monthCellClicked", monthCellKeyDown: "monthCellKeyDown", viewActivated: "viewActivated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([UtilService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 7, consts: [[1, "myDpMonthTable", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "id", "class", "ngClass", "click", "keydown", 4, "ngFor", "ngForOf"], [3, "id", "ngClass", "click", "keydown"], ["class", "myDpMonthNbr", 4, "ngIf"], [1, "myDpMonthValue", 3, "ngClass"], [1, "myDpMonthNbr"]], template: function MonthViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MonthViewComponent_tr_2_Template, 2, 1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](2, _c10, ctx.opts.rtl, ctx.opts.showFooterToday, !ctx.opts.showFooterToday, ctx.opts.viewChangeAnimation && ctx.viewChanged));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.months);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]], encapsulation: 2 });
/** @nocollapse */
MonthViewComponent.ctorParameters = () => [
    { type: UtilService }
];
MonthViewComponent.propDecorators = {
    opts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    months: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    viewChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    monthCellClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    monthCellKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    viewActivated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MonthViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: "lib-month-view",
                template: "<table class=\"myDpMonthTable\" [ngClass]=\"{'ng-myrtl': opts.rtl, 'myDpFooter': opts.showFooterToday, 'myDpNoFooter': !opts.showFooterToday, 'myDpViewChangeAnimation': opts.viewChangeAnimation && viewChanged}\">\n  <tbody>\n    <tr *ngFor=\"let mr of months\">\n      <td id=\"m_{{m.row}}_{{m.col}}\" class=\"m_{{m.row}}_{{m.col}} myDpMonthcell\"\n          [ngClass]=\"{'myDpSelectedMonth': m.selected, 'myDpDisabled': m.disabled, 'myDpTableSingleMonth': !m.disabled}\"\n          *ngFor=\"let m of mr\" (click)=\"onMonthCellClicked($event, m)\" (keydown)=\"onMonthCellKeyDown($event, m)\" [attr.tabindex]=\"!m.disabled ? 0 : -1\">\n        <span class=\"myDpMonthNbr\" *ngIf=\"opts.showMonthNumber\">{{m.nbr}}</span>\n        <span class=\"myDpMonthValue\" [ngClass]=\"{'myDpMarkCurrMonth': m.currMonth && opts.markCurrentMonth}\">{{m.name}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                providers: [UtilService],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: UtilService }]; }, { monthCellClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], monthCellKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], viewActivated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], opts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], months: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], viewChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class YearViewComponent {
    /**
     * @param {?} utilService
     */
    constructor(utilService) {
        this.utilService = utilService;
        this.yearCellClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.yearCellKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.viewActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
        }
        if (changes.hasOwnProperty(YEARS)) {
            this.years = changes[YEARS].currentValue;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.viewActivated.emit(ActiveView.Year);
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onYearCellClicked(event, cell) {
        event.stopPropagation();
        if (cell.disabled) {
            return;
        }
        this.yearCellClicked.emit(cell);
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    onYearCellKeyDown(event, cell) {
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (keyCode !== KeyCode.tab) {
            event.preventDefault();
            if (keyCode === KeyCode.enter || keyCode === KeyCode.space) {
                this.onYearCellClicked(event, cell);
            }
            else if (this.opts.moveFocusByArrowKeys) {
                this.yearCellKeyDown.emit(event);
            }
        }
    }
}
YearViewComponent.ɵfac = function YearViewComponent_Factory(t) { return new (t || YearViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](UtilService)); };
YearViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: YearViewComponent, selectors: [["lib-year-view"]], inputs: { opts: "opts", years: "years", viewChanged: "viewChanged" }, outputs: { yearCellClicked: "yearCellClicked", yearCellKeyDown: "yearCellKeyDown", viewActivated: "viewActivated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([UtilService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 7, consts: [[1, "myDpYearTable", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "id", "class", "ngClass", "click", "keydown", 4, "ngFor", "ngForOf"], [3, "id", "ngClass", "click", "keydown"], [1, "myDpYearValue", 3, "ngClass"]], template: function YearViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, YearViewComponent_tr_2_Template, 2, 1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](2, _c10, ctx.opts.rtl, ctx.opts.showFooterToday, !ctx.opts.showFooterToday, ctx.opts.viewChangeAnimation && ctx.viewChanged));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.years);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], encapsulation: 2 });
/** @nocollapse */
YearViewComponent.ctorParameters = () => [
    { type: UtilService }
];
YearViewComponent.propDecorators = {
    opts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    years: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    viewChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    yearCellClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    yearCellKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    viewActivated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](YearViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: "lib-year-view",
                template: "<table class=\"myDpYearTable\" [ngClass]=\"{'ng-myrtl': opts.rtl, 'myDpFooter': opts.showFooterToday, 'myDpNoFooter': !opts.showFooterToday, 'myDpViewChangeAnimation': opts.viewChangeAnimation && viewChanged}\">\n  <tbody>\n    <tr *ngFor=\"let yr of years\">\n      <td id=\"y_{{y.row}}_{{y.col}}\" class=\"y_{{y.row}}_{{y.col}} myDpYearcell\"\n          [ngClass]=\"{'myDpSelectedYear': y.selected, 'myDpDisabled': y.disabled, 'myDpTableSingleYear': !y.disabled}\"\n          *ngFor=\"let y of yr\" (click)=\"onYearCellClicked($event, y)\" (keydown)=\"onYearCellKeyDown($event, y)\" [attr.tabindex]=\"!y.disabled ? 0 : -1\">\n        <span class=\"myDpYearValue\" [ngClass]=\"{'myDpMarkCurrYear': y.currYear && opts.markCurrentYear}\">{{y.year}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                providers: [UtilService],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: UtilService }]; }, { yearCellClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], yearCellKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], viewActivated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], opts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], years: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], viewChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterBarComponent {
    /**
     * @param {?} utilService
     */
    constructor(utilService) {
        this.utilService = utilService;
        this.footerBarTxtClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.footerBarTxt = EMPTY_STR;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(OPTS)) {
            this.opts = changes[OPTS].currentValue;
            const { dateFormat, monthLabels, todayTxt } = this.opts;
            /** @type {?} */
            const today = this.utilService.getToday();
            this.footerBarTxt = todayTxt + (todayTxt.length > 0 ? SPACE_STR : EMPTY_STR) +
                this.utilService.formatDate(today, dateFormat, monthLabels);
        }
    }
    /**
     * @return {?}
     */
    onFooterBarTxtClicked() {
        this.footerBarTxtClicked.emit();
    }
}
FooterBarComponent.ɵfac = function FooterBarComponent_Factory(t) { return new (t || FooterBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](UtilService)); };
FooterBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FooterBarComponent, selectors: [["lib-footer-bar"]], inputs: { opts: "opts" }, outputs: { footerBarTxtClicked: "footerBarTxtClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([UtilService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 1, consts: [[1, "myDpFooterBar"], ["type", "button", 1, "myDpHeaderBtn", "myDpFooterBtn", 3, "click"]], template: function FooterBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FooterBarComponent_Template_button_click_1_listener() { return ctx.onFooterBarTxtClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.footerBarTxt);
    } }, encapsulation: 2 });
/** @nocollapse */
FooterBarComponent.ctorParameters = () => [
    { type: UtilService }
];
FooterBarComponent.propDecorators = {
    opts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    footerBarTxtClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FooterBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: "lib-footer-bar",
                template: "<div class=\"myDpFooterBar\">\n    <button type=\"button\" class=\"myDpHeaderBtn myDpFooterBtn\" (click)=\"onFooterBarTxtClicked()\">{{footerBarTxt}}</button>\n</div>",
                providers: [UtilService],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: UtilService }]; }, { footerBarTxtClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], opts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocaleService {
    constructor() {
        this.locales = {
            "en": {
                dayLabels: { su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" },
                dateFormat: "mm/dd/yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Today"
            },
            "he": {
                dayLabels: { su: "רא", mo: "שנ", tu: "של", we: "רב", th: "חמ", fr: "שי", sa: "שב" },
                monthLabels: { 1: "ינו", 2: "פבר", 3: "מרץ", 4: "אפר", 5: "מאי", 6: "יונ", 7: "יול", 8: "אוג", 9: "ספט", 10: "אוק", 11: "נוב", 12: "דצמ" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "su",
                sunHighlight: false,
                todayTxt: "היום"
            },
            "ja": {
                dayLabels: { su: "日", mo: "月", tu: "火", we: "水", th: "木", fr: "金", sa: "土" },
                monthLabels: { 1: "１月", 2: "２月", 3: "３月", 4: "４月", 5: "５月", 6: "６月", 7: "７月", 8: "８月", 9: "９月", 10: "１０月", 11: "１１月", 12: "１２月" },
                dateFormat: "yyyy.mm.dd",
                sunHighlight: false,
                todayTxt: "今日"
            },
            "fr": {
                dayLabels: { su: "Dim", mo: "Lun", tu: "Mar", we: "Mer", th: "Jeu", fr: "Ven", sa: "Sam" },
                monthLabels: { 1: "Jan", 2: "Fév", 3: "Mar", 4: "Avr", 5: "Mai", 6: "Juin", 7: "Juil", 8: "Aoû", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Déc" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Aujourd'hui"
            },
            "fr-ch": {
                dayLabels: { su: "Dim", mo: "Lun", tu: "Mar", we: "Mer", th: "Jeu", fr: "Ven", sa: "Sam" },
                monthLabels: { 1: "Jan", 2: "Fév", 3: "Mar", 4: "Avr", 5: "Mai", 6: "Juin", 7: "Juil", 8: "Aoû", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Déc" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Aujourd'hui"
            },
            "fi": {
                dayLabels: { su: "Su", mo: "Ma", tu: "Ti", we: "Ke", th: "To", fr: "Pe", sa: "La" },
                monthLabels: { 1: "Tam", 2: "Hel", 3: "Maa", 4: "Huh", 5: "Tou", 6: "Kes", 7: "Hei", 8: "Elo", 9: "Syy", 10: "Lok", 11: "Mar", 12: "Jou" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Tänään"
            },
            "es": {
                dayLabels: { su: "Do", mo: "Lu", tu: "Ma", we: "Mi", th: "Ju", fr: "Vi", sa: "Sa" },
                monthLabels: { 1: "Ene", 2: "Feb", 3: "Mar", 4: "Abr", 5: "May", 6: "Jun", 7: "Jul", 8: "Ago", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dic" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Hoy"
            },
            "hu": {
                dayLabels: { su: "Vas", mo: "Hét", tu: "Kedd", we: "Sze", th: "Csü", fr: "Pén", sa: "Szo" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Már", 4: "Ápr", 5: "Máj", 6: "Jún", 7: "Júl", 8: "Aug", 9: "Szep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Ma"
            },
            "sv": {
                dayLabels: { su: "Sön", mo: "Mån", tu: "Tis", we: "Ons", th: "Tor", fr: "Fre", sa: "Lör" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Maj", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: false,
                todayTxt: "Idag"
            },
            "nl": {
                dayLabels: { su: "Zon", mo: "Maa", tu: "Din", we: "Woe", th: "Don", fr: "Vri", sa: "Zat" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mei", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd-mm-yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: false,
                todayTxt: "Vandaag"
            },
            "ru": {
                dayLabels: { su: "Вс", mo: "Пн", tu: "Вт", we: "Ср", th: "Чт", fr: "Пт", sa: "Сб" },
                monthLabels: { 1: "Янв", 2: "Фев", 3: "Март", 4: "Апр", 5: "Май", 6: "Июнь", 7: "Июль", 8: "Авг", 9: "Сент", 10: "Окт", 11: "Ноя", 12: "Дек" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Сегодня"
            },
            "uk": {
                dayLabels: { su: "Нд", mo: "Пн", tu: "Вт", we: "Ср", th: "Чт", fr: "Пт", sa: "Сб" },
                monthLabels: { 1: "Січ", 2: "Лют", 3: "Бер", 4: "Кві", 5: "Тра", 6: "Чер", 7: "Лип", 8: "Сер", 9: "Вер", 10: "Жов", 11: "Лис", 12: "Гру" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Сьогодні"
            },
            "uz": {
                dayLabels: { su: "Yak", mo: "Du", tu: "Se", we: "Cho", th: "Pay", fr: "Ju", sa: "Sha" },
                monthLabels: { 1: "Yan", 2: "Fev", 3: "Mar", 4: "Apr", 5: "May", 6: "Iyn", 7: "Iyl", 8: "Avg", 9: "Sen", 10: "Okt", 11: "Noy", 12: "Dek" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Bugun"
            },
            "no": {
                dayLabels: { su: "Søn", mo: "Man", tu: "Tir", we: "Ons", th: "Tor", fr: "Fre", sa: "Lør" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Des" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: false,
                todayTxt: "I dag"
            },
            "tr": {
                dayLabels: { su: "Paz", mo: "Pzt", tu: "Sal", we: "Çar", th: "Per", fr: "Cum", sa: "Cmt" },
                monthLabels: { 1: "Oca", 2: "Şub", 3: "Mar", 4: "Nis", 5: "May", 6: "Haz", 7: "Tem", 8: "Ağu", 9: "Eyl", 10: "Eki", 11: "Kas", 12: "Ara" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: false,
                todayTxt: "Bugün"
            },
            "pt-br": {
                dayLabels: { su: "Dom", mo: "Seg", tu: "Ter", we: "Qua", th: "Qui", fr: "Sex", sa: "Sab" },
                monthLabels: { 1: "Jan", 2: "Fev", 3: "Mar", 4: "Abr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Ago", 9: "Set", 10: "Out", 11: "Nov", 12: "Dez" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "su",
                sunHighlight: true,
                todayTxt: "Hoje"
            },
            "de": {
                dayLabels: { su: "So", mo: "Mo", tu: "Di", we: "Mi", th: "Do", fr: "Fr", sa: "Sa" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mär", 4: "Apr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dez" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Heute"
            },
            "de-ch": {
                dayLabels: { su: "So", mo: "Mo", tu: "Di", we: "Mi", th: "Do", fr: "Fr", sa: "Sa" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mär", 4: "Apr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dez" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Heute"
            },
            "it": {
                dayLabels: { su: "Dom", mo: "Lun", tu: "Mar", we: "Mer", th: "Gio", fr: "Ven", sa: "Sab" },
                monthLabels: { 1: "Gen", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mag", 6: "Giu", 7: "Lug", 8: "Ago", 9: "Set", 10: "Ott", 11: "Nov", 12: "Dic" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Oggi"
            },
            "it-ch": {
                dayLabels: { su: "Dom", mo: "Lun", tu: "Mar", we: "Mer", th: "Gio", fr: "Ven", sa: "Sab" },
                monthLabels: { 1: "Gen", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mag", 6: "Giu", 7: "Lug", 8: "Ago", 9: "Set", 10: "Ott", 11: "Nov", 12: "Dic" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Oggi"
            },
            "pl": {
                dayLabels: { su: "Nie", mo: "Pon", tu: "Wto", we: "Śro", th: "Czw", fr: "Pią", sa: "Sob" },
                monthLabels: { 1: "Sty", 2: "Lut", 3: "Mar", 4: "Kwi", 5: "Maj", 6: "Cze", 7: "Lip", 8: "Sie", 9: "Wrz", 10: "Paź", 11: "Lis", 12: "Gru" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Dzisiaj"
            },
            "my": {
                dayLabels: { su: "တနင်္ဂနွေ", mo: "တနင်္လာ", tu: "အင်္ဂါ", we: "ဗုဒ္ဓဟူး", th: "ကြသပတေး", fr: "သောကြာ", sa: "စနေ" },
                monthLabels: { 1: "ဇန်နဝါရီ", 2: "ဖေဖော်ဝါရီ", 3: "မတ်", 4: "ဧပြီ", 5: "မေ", 6: "ဇွန်", 7: "ဇူလိုင်", 8: "ဩဂုတ်", 9: "စက်တင်ဘာ", 10: "အောက်တိုဘာ", 11: "နိုဝင်ဘာ", 12: "ဒီဇင်ဘာ" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "ယနေ့"
            },
            "sk": {
                dayLabels: { su: "Ne", mo: "Po", tu: "Ut", we: "St", th: "Št", fr: "Pi", sa: "So" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Máj", 6: "Jún", 7: "Júl", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Dnes"
            },
            "sl": {
                dayLabels: { su: "Ned", mo: "Pon", tu: "Tor", we: "Sre", th: "Čet", fr: "Pet", sa: "Sob" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Maj", 6: "Jun", 7: "Jul", 8: "Avg", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd. mm. yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Danes"
            },
            "zh-cn": {
                dayLabels: { su: "日", mo: "一", tu: "二", we: "三", th: "四", fr: "五", sa: "六" },
                monthLabels: { 1: "1月", 2: "2月", 3: "3月", 4: "4月", 5: "5月", 6: "6月", 7: "7月", 8: "8月", 9: "9月", 10: "10月", 11: "11月", 12: "12月" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "今天"
            },
            "ro": {
                dayLabels: { su: "du", mo: "lu", tu: "ma", we: "mi", th: "jo", fr: "vi", sa: "sa" },
                monthLabels: { 1: "ian", 2: "feb", 3: "mart", 4: "apr", 5: "mai", 6: "iun", 7: "iul", 8: "aug", 9: "sept", 10: "oct", 11: "nov", 12: "dec" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Astăzi"
            },
            "ca": {
                dayLabels: { su: "dg", mo: "dl", tu: "dt", we: "dc", th: "dj", fr: "dv", sa: "ds" },
                monthLabels: { 1: "Gen", 2: "Febr", 3: "Març", 4: "Abr", 5: "Maig", 6: "Juny", 7: "Jul", 8: "Ag", 9: "Set", 10: "Oct", 11: "Nov", 12: "Des" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Avui"
            },
            "id": {
                dayLabels: { su: "Min", mo: "Sen", tu: "Sel", we: "Rab", th: "Kam", fr: "Jum", sa: "Sab" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mei", 6: "Jun", 7: "Jul", 8: "Ags", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Des" },
                dateFormat: "dd-mm-yyyy",
                firstDayOfWeek: "su",
                sunHighlight: true,
                todayTxt: "Hari ini"
            },
            "en-au": {
                dayLabels: { su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Today"
            },
            "en-gb": {
                dayLabels: { su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Today"
            },
            "am-et": {
                dayLabels: { su: "እሑድ", mo: "ሰኞ", tu: "ማክሰኞ", we: "ረቡዕ", th: "ሐሙስ", fr: "ዓርብ", sa: "ቅዳሜ" },
                monthLabels: { 1: "ጃንዩ", 2: "ፌብሩ", 3: "ማርች", 4: "ኤፕረ", 5: "ሜይ", 6: "ጁን", 7: "ጁላይ", 8: "ኦገስ", 9: "ሴፕቴ", 10: "ኦክተ", 11: "ኖቬም", 12: "ዲሴም" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "ዛሬ"
            },
            "cs": {
                dayLabels: { su: "Ne", mo: "Po", tu: "Út", we: "St", th: "Čt", fr: "Pá", sa: "So" },
                monthLabels: { 1: "Led", 2: "Úno", 3: "Bře", 4: "Dub", 5: "Kvě", 6: "Čvn", 7: "Čvc", 8: "Srp", 9: "Zář", 10: "Říj", 11: "Lis", 12: "Pro" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Dnes"
            },
            "el": {
                dayLabels: { su: "Κυρ", mo: "Δευ", tu: "Τρι", we: "Τετ", th: "Πεμ", fr: "Παρ", sa: "Σαβ" },
                monthLabels: { 1: "Ιαν", 2: "Φεβ", 3: "Μαρ", 4: "Απρ", 5: "Μαι", 6: "Ιουν", 7: "Ιουλ", 8: "Αυγ", 9: "Σεπ", 10: "Οκτ", 11: "Νοε", 12: "Δεκ" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Σήμερα"
            },
            "kk": {
                dayLabels: { su: "Жк", mo: "Дс", tu: "Сс", we: "Ср", th: "Бс", fr: "Жм", sa: "Сб" },
                monthLabels: { 1: "Қаң", 2: "Ақп", 3: "Нау", 4: "Сәу", 5: "Мам", 6: "Мау", 7: "Шіл", 8: "Там", 9: "Қырк", 10: "Қаз", 11: "Қар", 12: "Желт" },
                dateFormat: "dd-mmm-yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Бүгін"
            },
            "th": {
                dayLabels: { su: "อา", mo: "จ", tu: "อ", we: "พ", th: "พฤ", fr: "ศ", sa: "ส" },
                monthLabels: { 1: "ม.ค", 2: "ก.พ.", 3: "มี.ค.", 4: "เม.ย.", 5: "พ.ค.", 6: "มิ.ย.", 7: "ก.ค.", 8: "ส.ค.", 9: "ก.ย.", 10: "ต.ค.", 11: "พ.ย.", 12: "ธ.ค." },
                dateFormat: "dd-mm-yyyy",
                firstDayOfWeek: "su",
                sunHighlight: true,
                todayTxt: "วันนี้"
            },
            "ko-kr": {
                dayLabels: { su: "일", mo: "월", tu: "화", we: "수", th: "목", fr: "금", sa: "토" },
                monthLabels: { 1: "1월", 2: "2월", 3: "3월", 4: "4월", 5: "5월", 6: "6월", 7: "7월", 8: "8월", 9: "9월", 10: "10월", 11: "11월", 12: "12월" },
                dateFormat: "yyyy mm dd",
                firstDayOfWeek: "su",
                sunHighlight: true,
                todayTxt: "오늘"
            },
            "da": {
                dayLabels: { su: "Søn", mo: "Man", tu: "Tir", we: "Ons", th: "Tor", fr: "Fre", sa: "Lør" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Maj", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd-mm-yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "I dag"
            },
            "lt": {
                dayLabels: { su: "Sk", mo: "Pr", tu: "An", we: "Tr", th: "Kt", fr: "Pn", sa: "Št" },
                monthLabels: { 1: "Saus.", 2: "Vas.", 3: "Kov.", 4: "Bal.", 5: "Geg.", 6: "Birž.", 7: "Liep.", 8: "Rugp.", 9: "Rugs.", 10: "Sapl.", 11: "Lapkr.", 12: "Gruod." },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Šianien"
            },
            "vi": {
                dayLabels: { su: "CN", mo: "T2", tu: "T3", we: "T4", th: "T5", fr: "T6", sa: "T7" },
                monthLabels: { 1: "THG 1", 2: "THG 2", 3: "THG 3", 4: "THG 4", 5: "THG 5", 6: "THG 6", 7: "THG 7", 8: "THG 8", 9: "THG 9", 10: "THG 10", 11: "THG 11", 12: "THG 12" },
                dateFormat: "dd/mm/yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Hôm nay"
            },
            "bn": {
                dayLabels: { su: "রবি", mo: "সোম", tu: "মঙ্গল", we: "বুধ", th: "বৃহঃ", fr: "শুক্র", sa: "শনি" },
                monthLabels: { 1: "জানু", 2: "ফেব্রু", 3: "মার্চ", 4: "এপ্রিল", 5: "মে", 6: "জুন", 7: "জুলাই", 8: "আগস্ট", 9: "সেপ্টে", 10: "অক্টো", 11: "নভে", 12: "ডিসে" },
                dateFormat: "dd-mm-yyyy",
                firstDayOfWeek: "su",
                sunHighlight: true,
                todayTxt: "আজ"
            },
            "bg": {
                dayLabels: { su: "нд", mo: "пн", tu: "вт", we: "ср", th: "чт", fr: "пт", sa: "сб" },
                monthLabels: { 1: "яну.", 2: "фев.", 3: "март", 4: "апр.", 5: "май", 6: "юни", 7: "юли", 8: "авг.", 9: "сеп.", 10: "окт.", 11: "ное.", 12: "дек." },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "днес"
            },
            "hr": {
                dayLabels: { su: "Ne", mo: "Po", tu: "Ul", we: "Sr", th: "Če", fr: "Pe", sa: "Su" },
                monthLabels: { 1: "Sij", 2: "Vel", 3: "Ožu", 4: "Tra", 5: "Svi", 6: "Lip", 7: "Srp", 8: "Kol", 9: "Ruj", 10: "Lis", 11: "Stu", 12: "Pro" },
                dateFormat: "dd.mm.yyyy.",
                firstDayOfWeek: "su",
                sunHighlight: true,
                todayTxt: "danas"
            },
            "ar": {
                dayLabels: { su: "الأحد", mo: "الاثنين", tu: "الثلاثاء", we: "الاربعاء", th: "الخميس", fr: "الجمعة", sa: "السبت" },
                monthLabels: { 1: "يناير", 2: "فبراير", 3: "مارس", 4: "ابريل", 5: "مايو", 6: "يونيو", 7: "يوليو", 8: "أغسطس", 9: "سبتمبر", 10: "أكتوبر", 11: "نوفمبر", 12: "ديسمبر" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "sa",
                sunHighlight: true,
                todayTxt: "اليوم"
            },
            "is": {
                dayLabels: { su: "sun", mo: "mán", tu: "þri", we: "mið", th: "fim", fr: "fös", sa: "lau" },
                monthLabels: { 1: "jan", 2: "feb", 3: "mar", 4: "apr", 5: "maí", 6: "jún", 7: "júl", 8: "ágú", 9: "sep", 10: "okt", 11: "nóv", 12: "des" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "su",
                sunHighlight: true,
                todayTxt: "Í dag"
            },
            "tw": {
                dayLabels: { su: "週日", mo: "週一", tu: "週二", we: "週三", th: "週四", fr: "週五", sa: "週六" },
                monthLabels: { 1: "一月", 2: "二月", 3: "三月", 4: "四月", 5: "五月", 6: "六月", 7: "七月", 8: "八月", 9: "九月", 10: "十月", 11: "十一月", 12: "十二月" },
                dateFormat: "yyyy-mm-dd",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "今天"
            },
            "lv": {
                dayLabels: { su: "S", mo: "P", tu: "O", we: "T", th: "C", fr: "P", sa: "S" },
                monthLabels: { 1: "Janv", 2: "Febr", 3: "Marts", 4: "Apr", 5: "Maijs", 6: "Jūn", 7: "Jūl", 8: "Aug", 9: "Sept", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Šodien"
            },
            "et": {
                dayLabels: { su: "P", mo: "E", tu: "T", we: "K", th: "N", fr: "R", sa: "L" },
                monthLabels: { 1: "Jaan", 2: "Veebr", 3: "Märts", 4: "Apr", 5: "Mai", 6: "Juuni", 7: "Juuli", 8: "Aug", 9: "Sept", 10: "Okt", 11: "Nov", 12: "Dets" },
                dateFormat: "dd.mm.yyyy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
                todayTxt: "Täna"
            }
        };
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    getLocaleOptions(locale) {
        if (locale && this.locales.hasOwnProperty(locale)) {
            // User given locale
            return this.locales[locale];
        }
        // Default: en
        return this.locales[DEFAULT_LOCALE];
    }
}
LocaleService.ɵfac = function LocaleService_Factory(t) { return new (t || LocaleService)(); };
LocaleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LocaleService, factory: LocaleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LocaleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Year = {
    min: 1000,
    max: 9999,
};
Year[Year.min] = 'min';
Year[Year.max] = 'max';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultConfigService {
    constructor() {
        this.defaultConfig = {
            dateRange: false,
            inline: false,
            dayLabels: { su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat" },
            monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" },
            dateFormat: "yyyy-mm-dd",
            defaultView: DefaultView.Date,
            firstDayOfWeek: "mo",
            satHighlight: false,
            sunHighlight: true,
            highlightDates: [],
            markCurrentDay: true,
            markCurrentMonth: true,
            markCurrentYear: true,
            monthSelector: true,
            yearSelector: true,
            disableHeaderButtons: true,
            showWeekNumbers: false,
            selectorHeight: "266px",
            selectorWidth: "266px",
            disableUntil: { year: 0, month: 0, day: 0 },
            disableSince: { year: 0, month: 0, day: 0 },
            disableDates: [],
            disableDateRanges: [],
            disableWeekends: false,
            disableWeekdays: [],
            enableDates: [],
            markDates: [],
            markWeekends: { marked: false, color: "" },
            alignSelectorRight: false,
            openSelectorTopOfInput: false,
            closeSelectorOnDateSelect: true,
            closeSelectorOnDocumentClick: true,
            minYear: Year.min,
            maxYear: Year.max,
            showSelectorArrow: true,
            appendSelectorToBody: false,
            focusInputOnDateSelect: true,
            moveFocusByArrowKeys: true,
            dateRangeDatesDelimiter: " - ",
            inputFieldValidation: true,
            showMonthNumber: true,
            todayTxt: "",
            showFooterToday: false,
            calendarAnimation: { in: CalAnimation.None, out: CalAnimation.None },
            viewChangeAnimation: true,
            rtl: false,
            stylesData: { selector: "", styles: "" },
            divHostElement: { enabled: false, placeholder: "" },
            ariaLabelPrevMonth: "Previous Month",
            ariaLabelNextMonth: "Next Month"
        };
    }
    /**
     * @return {?}
     */
    getDefaultConfig() {
        return this.defaultConfig;
    }
}
DefaultConfigService.ɵfac = function DefaultConfigService_Factory(t) { return new (t || DefaultConfigService)(); };
DefaultConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DefaultConfigService, factory: DefaultConfigService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DefaultConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const CalToggle = {
    Open: 1,
    CloseByDateSel: 2,
    CloseByCalBtn: 3,
    CloseByOutClick: 4,
    CloseByEsc: 5,
};
CalToggle[CalToggle.Open] = 'Open';
CalToggle[CalToggle.CloseByDateSel] = 'CloseByDateSel';
CalToggle[CalToggle.CloseByCalBtn] = 'CloseByCalBtn';
CalToggle[CalToggle.CloseByOutClick] = 'CloseByOutClick';
CalToggle[CalToggle.CloseByEsc] = 'CloseByEsc';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NGX_DP_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((/**
     * @return {?}
     */
    () => AngularMyDatePickerDirective)),
    multi: true
};
/** @type {?} */
const NGX_DP_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((/**
     * @return {?}
     */
    () => AngularMyDatePickerDirective)),
    multi: true
};
class AngularMyDatePickerDirective {
    /**
     * @param {?} localeService
     * @param {?} utilService
     * @param {?} vcRef
     * @param {?} cfr
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} elem
     * @param {?} config
     */
    constructor(localeService, utilService, vcRef, cfr, renderer, cdr, elem, config) {
        this.localeService = localeService;
        this.utilService = utilService;
        this.vcRef = vcRef;
        this.cfr = cfr;
        this.renderer = renderer;
        this.cdr = cdr;
        this.elem = elem;
        this.config = config;
        this.defaultMonth = { defMonth: EMPTY_STR, overrideSelection: false };
        this.dateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.inputFieldChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.calendarViewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.calendarToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeDateSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.viewActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cRef = null;
        this.hostText = EMPTY_STR;
        this.preventClose = false;
        this.disabled = false;
        this.selectedValue = null;
        this.onChangeCb = (/**
         * @return {?}
         */
        () => { });
        this.onTouchedCb = (/**
         * @return {?}
         */
        () => { });
        this.onClickWrapper = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.onClick(event));
        this.onAnimateWrapper = (/**
         * @param {?} reason
         * @return {?}
         */
        (reason) => this.animationEnd(reason));
        this.opts = this.config.getDefaultConfig();
        this.parseOptions(this.opts);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp(event) {
        /** @type {?} */
        const keyCode = this.utilService.getKeyCodeFromEvent(event);
        if (this.ignoreKeyPress(keyCode)) {
            return;
        }
        if (keyCode === KeyCode.esc) {
            this.closeSelector(CalToggle.CloseByEsc);
        }
        else {
            const { dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter } = this.opts;
            /** @type {?} */
            const value = this.getHostValue();
            /** @type {?} */
            let dateModel = null;
            /** @type {?} */
            let valid = false;
            /** @type {?} */
            let validateOpts = null;
            if (!dateRange) {
                validateOpts = { validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, false) };
                /** @type {?} */
                const date = this.utilService.isDateValid(value, this.opts, validateOpts);
                valid = this.utilService.isInitializedDate(date);
                if (valid) {
                    dateModel = this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter);
                }
            }
            else {
                validateOpts = { validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, true) };
                /** @type {?} */
                const range = this.utilService.isDateValidDateRange(value, this.opts, validateOpts);
                const { begin, end } = range;
                valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
                if (valid) {
                    dateModel = this.utilService.getDateModel(null, range, dateFormat, monthLabels, dateRangeDatesDelimiter);
                }
            }
            this.onChangeCb(dateModel);
            this.emitInputFieldChanged(value, valid);
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        const { inputFieldValidation, dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter, closeSelectorOnDateSelect } = this.opts;
        if (inputFieldValidation) {
            /** @type {?} */
            const value = this.getHostValue();
            /** @type {?} */
            let valid = false;
            /** @type {?} */
            let validateOpts = null;
            if (!dateRange) {
                validateOpts = { validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, false) };
                /** @type {?} */
                const date = this.utilService.isDateValid(value, this.opts, validateOpts);
                valid = this.utilService.isInitializedDate(date);
                if (valid && this.hostText !== value) {
                    // Valid date
                    /** @type {?} */
                    const dateModel = this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter);
                    this.emitDateChanged(dateModel);
                    this.updateModel(dateModel);
                    if (closeSelectorOnDateSelect) {
                        this.closeSelector(CalToggle.CloseByDateSel);
                    }
                }
            }
            else {
                validateOpts = { validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, true) };
                /** @type {?} */
                const dateRange = this.utilService.isDateValidDateRange(value, this.opts, validateOpts);
                const { begin, end } = dateRange;
                valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
                if (valid && this.hostText !== value) {
                    // Valid date range
                    /** @type {?} */
                    const dateModel = this.utilService.getDateModel(null, dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter);
                    this.emitDateChanged(dateModel);
                    this.updateModel(dateModel);
                    if (closeSelectorOnDateSelect) {
                        this.closeSelector(CalToggle.CloseByDateSel);
                    }
                }
            }
            if (!valid && this.hostText !== value) {
                if (value === EMPTY_STR) {
                    this.clearDate();
                }
                else {
                    this.onChangeCb(null);
                }
            }
            this.hostText = value;
        }
        this.onTouchedCb();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.opts.closeSelectorOnDocumentClick && !this.preventClose && event.target && this.cRef
            && this.elem.nativeElement !== event.target && !this.cRef.location.nativeElement.contains(event.target)
            && !this.disabled) {
            this.closeSelector(CalToggle.CloseByOutClick);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty(LOCALE)) {
            this.setLocaleOptions();
        }
        if (changes.hasOwnProperty(DEFAULT_MONTH)) {
            /** @type {?} */
            let dm = changes[DEFAULT_MONTH].currentValue;
            if (typeof dm === OBJECT) {
                if (!dm.overrideSelection) {
                    dm.overrideSelection = false;
                }
            }
            else {
                dm = { defMonth: dm, overrideSelection: false };
            }
            this.defaultMonth = dm;
        }
        if (changes.hasOwnProperty(OPTIONS)) {
            this.parseOptions(changes[OPTIONS].currentValue);
        }
        if (this.cRef) {
            this.cRef.instance.refreshComponent(this.opts, this.defaultMonth, this.selectedValue, this.getHostValue());
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.closeCalendar();
    }
    /**
     * @return {?}
     */
    setLocaleOptions() {
        /** @type {?} */
        const opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach((/**
         * @param {?} k
         * @return {?}
         */
        (k) => {
            ((/** @type {?} */ (this.opts)))[k] = opts[k];
        }));
    }
    /**
     * @param {?} opts
     * @return {?}
     */
    parseOptions(opts) {
        if (opts) {
            Object.keys(opts).forEach((/**
             * @param {?} k
             * @return {?}
             */
            (k) => {
                ((/** @type {?} */ (this.opts)))[k] = opts[k];
            }));
        }
        const { minYear, maxYear, openSelectorTopOfInput, inline } = this.opts;
        if (minYear < Year.min) {
            this.opts.minYear = Year.min;
        }
        if (maxYear > Year.max) {
            this.opts.maxYear = Year.max;
        }
        if (openSelectorTopOfInput || inline) {
            this.opts.showSelectorArrow = false;
        }
        if (inline) {
            this.openCalendar();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        let validateOpts = null;
        const { dateFormat, monthLabels, dateRangeDatesDelimiter, inline } = this.opts;
        if (!value) {
            this.setHostValue(EMPTY_STR);
            this.emitInputFieldChanged(EMPTY_STR, false);
            if (this.cRef) {
                this.cRef.instance.resetDateValue();
            }
        }
        else if (!value.isRange && value.singleDate) {
            // single date
            let { date, jsDate } = value.singleDate;
            if (!date) {
                date = this.utilService.jsDateToMyDate(jsDate);
            }
            /** @type {?} */
            const formatted = this.utilService.formatDate(date, dateFormat, monthLabels);
            validateOpts = { validateDisabledDates: false, selectedValue: this.utilService.getSelectedValue(this.selectedValue, false) };
            /** @type {?} */
            const valid = this.utilService.isInitializedDate(this.utilService.isDateValid(formatted, this.opts, validateOpts));
            if (valid) {
                this.setHostValue(formatted);
                this.emitInputFieldChanged(formatted, valid);
                this.setSelectedValue(this.utilService.getDateModel(date, null, dateFormat, monthLabels, dateRangeDatesDelimiter));
                if (this.cRef) {
                    this.cRef.instance.refreshComponent(this.opts, this.defaultMonth, this.selectedValue, this.getHostValue());
                }
            }
        }
        else if (value.isRange && value.dateRange) {
            // date range
            let { beginDate, beginJsDate, endDate, endJsDate } = value.dateRange;
            if (!beginDate || !endDate) {
                beginDate = this.utilService.jsDateToMyDate(beginJsDate);
                endDate = this.utilService.jsDateToMyDate(endJsDate);
            }
            /** @type {?} */
            const formatted = this.utilService.formatDate(beginDate, dateFormat, monthLabels) + dateRangeDatesDelimiter +
                this.utilService.formatDate(endDate, dateFormat, monthLabels);
            validateOpts = { validateDisabledDates: false, selectedValue: this.utilService.getSelectedValue(this.selectedValue, true) };
            const { begin, end } = this.utilService.isDateValidDateRange(formatted, this.opts, validateOpts);
            /** @type {?} */
            const valid = this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end);
            if (valid) {
                this.setHostValue(formatted);
                this.emitInputFieldChanged(formatted, valid);
                /** @type {?} */
                const dateRange = { begin: beginDate, end: endDate };
                this.setSelectedValue(this.utilService.getDateModel(null, dateRange, dateFormat, monthLabels, dateRangeDatesDelimiter));
                if (this.cRef) {
                    this.cRef.instance.refreshComponent(this.opts, this.defaultMonth, this.selectedValue, this.getHostValue());
                }
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCb = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCb = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.renderer.setProperty(this.elem.nativeElement, DISABLED, isDisabled);
        if (isDisabled) {
            this.closeCalendar();
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        const value = this.getHostValue();
        if (value === null || value === EMPTY_STR) {
            return null;
        }
        /** @type {?} */
        let validateOpts = null;
        if (!this.opts.dateRange) {
            validateOpts = { validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, false) };
            /** @type {?} */
            const date = this.utilService.isDateValid(value, this.opts, validateOpts);
            if (!this.utilService.isInitializedDate(date)) {
                return { invalidDateFormat: true };
            }
        }
        else {
            validateOpts = { validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, true) };
            const { begin, end } = this.utilService.isDateValidDateRange(value, this.opts, validateOpts);
            if (!this.utilService.isInitializedDate(begin) || !this.utilService.isInitializedDate(end)) {
                return { invalidDateFormat: true };
            }
        }
        return null;
    }
    /**
     * @return {?}
     */
    openCalendar() {
        if (this.disabled) {
            return;
        }
        this.preventClose = true;
        this.cdr.detectChanges();
        if (this.cRef === null) {
            this.cRef = this.vcRef.createComponent(this.cfr.resolveComponentFactory(CalendarComponent));
            this.appendSelector(this.cRef.location.nativeElement);
            this.cRef.instance.initializeComponent(this.opts, this.defaultMonth, this.selectedValue, this.getHostValue(), this.getSelectorPosition(this.elem.nativeElement), (/**
             * @param {?} dm
             * @param {?} close
             * @return {?}
             */
            (dm, close) => {
                this.focusToInput();
                this.emitDateChanged(dm);
                this.emitInputFieldChanged(this.utilService.getFormattedDate(dm), true);
                this.updateModel(dm);
                if (close) {
                    this.closeSelector(CalToggle.CloseByDateSel);
                }
            }), (/**
             * @param {?} cvc
             * @return {?}
             */
            (cvc) => {
                this.emitCalendarChanged(cvc);
            }), (/**
             * @param {?} rds
             * @return {?}
             */
            (rds) => {
                this.emitRangeDateSelection(rds);
            }), (/**
             * @param {?} va
             * @return {?}
             */
            (va) => {
                this.emitViewActivated(va);
            }), (/**
             * @return {?}
             */
            () => {
                this.closeSelector(CalToggle.CloseByEsc);
            }));
            this.emitCalendarToggle(CalToggle.Open);
            if (!this.opts.inline) {
                document.addEventListener(CLICK, this.onClickWrapper);
            }
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.preventClose = false;
        }), PREVENT_CLOSE_TIMEOUT);
    }
    /**
     * @return {?}
     */
    closeCalendar() {
        this.closeSelector(CalToggle.CloseByCalBtn);
    }
    /**
     * @return {?}
     */
    toggleCalendar() {
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        const isOpen = this.cRef === null;
        if (isOpen) {
            this.openCalendar();
        }
        else {
            this.closeSelector(CalToggle.CloseByCalBtn);
        }
        return isOpen;
    }
    /**
     * @return {?}
     */
    clearDate() {
        if (this.disabled) {
            return;
        }
        const { inline } = this.opts;
        this.setHostValue(EMPTY_STR);
        this.emitDateChanged({
            isRange: this.opts.dateRange,
            singleDate: {
                date: this.utilService.resetDate(),
                jsDate: null,
                formatted: EMPTY_STR,
                epoc: 0
            },
            dateRange: {
                beginDate: this.utilService.resetDate(),
                beginJsDate: null,
                beginEpoc: 0,
                endDate: this.utilService.resetDate(),
                endJsDate: null,
                endEpoc: 0,
                formatted: EMPTY_STR
            }
        });
        this.onChangeCb(null);
        this.onTouchedCb();
        if (this.cRef) {
            this.cRef.instance.clearDate();
        }
        if (!inline) {
            this.closeSelector(CalToggle.CloseByCalBtn);
        }
    }
    /**
     * @return {?}
     */
    isDateValid() {
        /** @type {?} */
        const value = this.getHostValue();
        if (value === null || value === EMPTY_STR) {
            return false;
        }
        /** @type {?} */
        let validateOpts = null;
        if (!this.opts.dateRange) {
            validateOpts = { validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, false) };
            /** @type {?} */
            const date = this.utilService.isDateValid(value, this.opts, validateOpts);
            if (this.utilService.isInitializedDate(date)) {
                this.emitInputFieldChanged(value, true);
                return true;
            }
        }
        else {
            validateOpts = { validateDisabledDates: true, selectedValue: this.utilService.getSelectedValue(this.selectedValue, true) };
            const { begin, end } = this.utilService.isDateValidDateRange(value, this.opts, validateOpts);
            if (this.utilService.isInitializedDate(begin) && this.utilService.isInitializedDate(end)) {
                this.emitInputFieldChanged(value, true);
                return true;
            }
        }
        this.emitInputFieldChanged(value, false);
        return false;
    }
    /**
     * @param {?} headerAction
     * @return {?}
     */
    headerAction(headerAction) {
        if (this.cRef) {
            this.cRef.instance.headerAction(headerAction);
        }
    }
    /**
     * @private
     * @param {?} keyCode
     * @return {?}
     */
    ignoreKeyPress(keyCode) {
        return keyCode === KeyCode.leftArrow || keyCode === KeyCode.rightArrow || keyCode === KeyCode.upArrow || keyCode === KeyCode.downArrow || keyCode === KeyCode.tab || keyCode === KeyCode.shift;
    }
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    animationEnd(reason) {
        if (this.cRef) {
            this.cRef.instance.selectorEl.nativeElement.removeEventListener(ANIMATION_END, this.onAnimateWrapper);
            this.removeComponent();
            this.emitCalendarToggle(reason);
        }
    }
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    closeSelector(reason) {
        const { inline, calendarAnimation } = this.opts;
        if (this.cRef && !inline) {
            if (calendarAnimation.out !== CalAnimation.None) {
                const { instance } = this.cRef;
                instance.selectorEl.nativeElement.addEventListener(ANIMATION_END, this.onAnimateWrapper.bind(this, reason));
                instance.setCalendarAnimation(calendarAnimation, false);
                // In case the animationend event is not fired
                setTimeout(this.onAnimateWrapper.bind(this, reason), ANIMATION_TIMEOUT);
            }
            else {
                this.removeComponent();
                this.emitCalendarToggle(reason);
            }
            document.removeEventListener(CLICK, this.onClickWrapper);
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeComponent() {
        if (this.vcRef !== null) {
            this.vcRef.remove(this.vcRef.indexOf(this.cRef.hostView));
            this.cRef = null;
        }
    }
    /**
     * @private
     * @param {?} model
     * @return {?}
     */
    updateModel(model) {
        this.setHostValue(this.utilService.getFormattedDate(model));
        this.onChangeCb(model);
        this.onTouchedCb();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setHostValue(value) {
        const { divHostElement } = this.opts;
        this.hostText = value;
        /** @type {?} */
        const valueType = !divHostElement.enabled ? VALUE : INNER_HTML;
        value = valueType === INNER_HTML && value === EMPTY_STR ? divHostElement.placeholder : value;
        this.renderer.setProperty(this.elem.nativeElement, valueType, value);
    }
    /**
     * @private
     * @return {?}
     */
    getHostValue() {
        const { value, innerHTML } = this.elem.nativeElement;
        return !this.opts.divHostElement.enabled ? value : innerHTML;
    }
    /**
     * @private
     * @return {?}
     */
    focusToInput() {
        const { focusInputOnDateSelect, divHostElement } = this.opts;
        if (focusInputOnDateSelect && !divHostElement.enabled) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.elem.nativeElement.focus();
            }));
        }
    }
    /**
     * @private
     * @param {?} dateModel
     * @return {?}
     */
    emitDateChanged(dateModel) {
        this.dateChanged.emit(dateModel);
        this.setSelectedValue(dateModel);
    }
    /**
     * @private
     * @param {?} dateModel
     * @return {?}
     */
    setSelectedValue(dateModel) {
        const { isRange, dateRange, singleDate } = dateModel;
        this.selectedValue = isRange ? dateRange : singleDate;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} valid
     * @return {?}
     */
    emitInputFieldChanged(value, valid) {
        this.inputFieldChanged.emit({ value, dateFormat: this.opts.dateFormat, valid });
    }
    /**
     * @private
     * @param {?} cvc
     * @return {?}
     */
    emitCalendarChanged(cvc) {
        this.calendarViewChanged.emit(cvc);
    }
    /**
     * @private
     * @param {?} rds
     * @return {?}
     */
    emitRangeDateSelection(rds) {
        this.rangeDateSelection.emit(rds);
    }
    /**
     * @private
     * @param {?} va
     * @return {?}
     */
    emitViewActivated(va) {
        this.viewActivated.emit(va);
    }
    /**
     * @private
     * @param {?} reason
     * @return {?}
     */
    emitCalendarToggle(reason) {
        this.calendarToggle.emit(reason);
    }
    /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    appendSelector(elem) {
        if (this.opts.appendSelectorToBody) {
            document.querySelector(BODY).appendChild(elem);
        }
    }
    /**
     * @private
     * @param {?} elem
     * @return {?}
     */
    getSelectorPosition(elem) {
        /** @type {?} */
        let top = 0;
        /** @type {?} */
        let left = 0;
        const { appendSelectorToBody, openSelectorTopOfInput, selectorHeight, selectorWidth, showSelectorArrow, alignSelectorRight } = this.opts;
        if (appendSelectorToBody) {
            /** @type {?} */
            const b = document.body.getBoundingClientRect();
            /** @type {?} */
            const e = elem.getBoundingClientRect();
            top = e.top - b.top;
            left = e.left - b.left;
        }
        if (openSelectorTopOfInput) {
            top = top - this.getSelectorDimension(selectorHeight) - 2;
        }
        else {
            top = top + elem.offsetHeight + (showSelectorArrow ? 12 : 2);
        }
        if (alignSelectorRight) {
            left = left + elem.offsetWidth - this.getSelectorDimension(selectorWidth);
        }
        return { top: top + PX, left: left + PX };
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getSelectorDimension(value) {
        return Number(value.replace(PX, EMPTY_STR));
    }
}
AngularMyDatePickerDirective.ɵfac = function AngularMyDatePickerDirective_Factory(t) { return new (t || AngularMyDatePickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](LocaleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DefaultConfigService)); };
AngularMyDatePickerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AngularMyDatePickerDirective, selectors: [["", "angular-mydatepicker", ""]], hostBindings: function AngularMyDatePickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function AngularMyDatePickerDirective_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event); })("blur", function AngularMyDatePickerDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } }, inputs: { defaultMonth: "defaultMonth", options: "options", locale: "locale" }, outputs: { dateChanged: "dateChanged", inputFieldChanged: "inputFieldChanged", calendarViewChanged: "calendarViewChanged", calendarToggle: "calendarToggle", rangeDateSelection: "rangeDateSelection", viewActivated: "viewActivated" }, exportAs: ["angular-mydatepicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([UtilService, LocaleService, DefaultConfigService, NGX_DP_VALUE_ACCESSOR, NGX_DP_VALIDATORS]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
AngularMyDatePickerDirective.ctorParameters = () => [
    { type: LocaleService },
    { type: UtilService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: DefaultConfigService }
];
AngularMyDatePickerDirective.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    defaultMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    dateChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    inputFieldChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    calendarViewChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    calendarToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    rangeDateSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    viewActivated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    onKeyUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: [KEYUP, ["$event"],] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: [BLUR,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularMyDatePickerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: "[angular-mydatepicker]",
                exportAs: "angular-mydatepicker",
                providers: [UtilService, LocaleService, DefaultConfigService, NGX_DP_VALUE_ACCESSOR, NGX_DP_VALIDATORS]
            }]
    }], function () { return [{ type: LocaleService }, { type: UtilService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: DefaultConfigService }]; }, { defaultMonth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], dateChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], inputFieldChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], calendarViewChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], calendarToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], rangeDateSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], viewActivated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: [KEYUP, ["$event"]]
        }], 
    /**
     * @return {?}
     */
    onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: [BLUR]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularMyDatePickerCalendarDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const { inline, selectorHeight, selectorWidth, selectorPos } = this.libAngularMyDatePickerCalendar;
        const { style } = this.el.nativeElement;
        style.height = selectorHeight;
        style.width = selectorWidth;
        style.top = !inline ? selectorPos.top : "0";
        style.left = !inline ? selectorPos.left : "0";
    }
}
AngularMyDatePickerCalendarDirective.ɵfac = function AngularMyDatePickerCalendarDirective_Factory(t) { return new (t || AngularMyDatePickerCalendarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
AngularMyDatePickerCalendarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AngularMyDatePickerCalendarDirective, selectors: [["", "libAngularMyDatePickerCalendar", ""]], inputs: { libAngularMyDatePickerCalendar: "libAngularMyDatePickerCalendar" } });
/** @nocollapse */
AngularMyDatePickerCalendarDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
AngularMyDatePickerCalendarDirective.propDecorators = {
    libAngularMyDatePickerCalendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularMyDatePickerCalendarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: "[libAngularMyDatePickerCalendar]"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { libAngularMyDatePickerCalendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularMyDatePickerModule {
}
AngularMyDatePickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AngularMyDatePickerModule });
AngularMyDatePickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AngularMyDatePickerModule_Factory(t) { return new (t || AngularMyDatePickerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AngularMyDatePickerModule, { declarations: function () { return [CalendarComponent, SelectionBarComponent, DayViewComponent, MonthViewComponent, YearViewComponent, FooterBarComponent, AngularMyDatePickerDirective, AngularMyDatePickerCalendarDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]; }, exports: function () { return [CalendarComponent, SelectionBarComponent, DayViewComponent, MonthViewComponent, YearViewComponent, FooterBarComponent, AngularMyDatePickerDirective, AngularMyDatePickerCalendarDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AngularMyDatePickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
                declarations: [
                    CalendarComponent,
                    SelectionBarComponent,
                    DayViewComponent,
                    MonthViewComponent,
                    YearViewComponent,
                    FooterBarComponent,
                    AngularMyDatePickerDirective,
                    AngularMyDatePickerCalendarDirective
                ],
                entryComponents: [CalendarComponent],
                exports: [
                    CalendarComponent,
                    SelectionBarComponent,
                    DayViewComponent,
                    MonthViewComponent,
                    YearViewComponent,
                    FooterBarComponent,
                    AngularMyDatePickerDirective,
                    AngularMyDatePickerCalendarDirective
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-mydatepicker.js.map

/***/ }),

/***/ "./src/app/main/projects/project-read-view/project-read-view.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/projects/project-read-view/project-read-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProjectReadViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectReadViewComponent", function() { return ProjectReadViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_core_data_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/core-data/projects/projects.service */ "./src/app/core/core-data/projects/projects.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/loader/loader.component */ "./src/app/shared/loader/loader.component.ts");






function ProjectReadViewComponent_ng_container_0_h1_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r4.skillName, "");
} }
function ProjectReadViewComponent_ng_container_0_h1_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resource_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", resource_r5.user.firstName + " " + resource_r5.user.lastName, " ");
} }
function ProjectReadViewComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Project Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Duration: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Client Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectReadViewComponent_ng_container_0_Template_input_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.editRedirect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectReadViewComponent_ng_container_0_Template_input_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Required Skills ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProjectReadViewComponent_ng_container_0_h1_42_Template, 2, 1, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Assigned Resources ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ProjectReadViewComponent_ng_container_0_h1_50_Template, 2, 1, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Project: ", ctx_r0.project.projectName, " #", ctx_r0.project.projectID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.project.projectID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.project.projectName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 10, ctx_r0.project.startDate), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 12, ctx_r0.project.endDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.project.client.clientName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.project.about, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.project.skill);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.project.resources);
} }
function ProjectReadViewComponent_app_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class ProjectReadViewComponent {
    constructor(route, projectsService, router) {
        this.route = route;
        this.projectsService = projectsService;
        this.router = router;
        // state
        this.fetching = true;
        /**
         * @method deleteConfirm
         * @description confirms with user before deleting
         */
        this.deleteConfirm = () => {
            if (confirm('Are you sure? Deleting cannot be undone!')) {
                this.projectsService.deleteProject(this.route.snapshot.params.project).subscribe(res => {
                    this.router.navigate(['/projects']);
                });
            }
        };
        /**
         * @method editRedirect
         * @description redirects to the edit page for that project
         */
        this.editRedirect = () => {
            this.router.navigate(['/projects/' + this.route.snapshot.params.project + '/edit']);
        };
    }
    ngOnInit() {
        this.fetching = true;
        this.projectsService.getProject(this.route.snapshot.params.project).subscribe(res => {
            this.fetching = false;
            this.project = res;
            this.project.startDate = new Date(this.project.startDate);
            this.project.endDate = new Date(this.project.endDate);
        });
    }
}
ProjectReadViewComponent.ɵfac = function ProjectReadViewComponent_Factory(t) { return new (t || ProjectReadViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_core_data_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProjectReadViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectReadViewComponent, selectors: [["app-project-read-view"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "title-1"], [1, "time-bar"], [1, "spaced-container"], [1, "flex-pad"], [1, "profile-container"], [1, "sub-title-2"], [1, "font-grey"], [1, "flex-display"], ["type", "button", "value", "Edit", 1, "button-xl", "pointer", "sub-title-6", 3, "click"], ["type", "button", "value", "Delete", 1, "button-xl", "pointer", "sub-title-6", "warning", 3, "click"], [1, "skills-wrapper"], [1, "skills-container"], ["class", "sub-title-4 skill", 4, "ngFor", "ngForOf"], [1, "projects-wrapper"], [1, "project-container"], ["class", "sub-title-4 project", 4, "ngFor", "ngForOf"], [1, "sub-title-4", "skill"], [1, "sub-title-4", "project"]], template: function ProjectReadViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectReadViewComponent_ng_container_0_Template, 51, 14, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectReadViewComponent_app_loader_1_Template, 1, 0, "app-loader", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fetching);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #efeaf9;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ffbe55;\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ffc971;\n}\n\n.flex-pad[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n}\n\n.profile-picture[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 100px;\n}\n\n.profile-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 70%;\n}\n\n.flex-display[_ngcontent-%COMP%] {\n  width: 20%;\n  margin-left: auto;\n  flex-direction: column;\n  justify-content: center;\n}\n\n@media only screen and (max-width: 1024px) {\n  .flex-pad[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .flex-pad[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n  .flex-pad[_ngcontent-%COMP%]   .profile-container[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-left: 0px;\n    text-align: center;\n  }\n\n  .flex-display[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .flex-display[_ngcontent-%COMP%]   .button-xl[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wcm9qZWN0cy9wcm9qZWN0LXJlYWQtdmlldy9wcm9qZWN0LXJlYWQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxVQUFBO0FBREo7O0FBSUE7RUFDSSxtQkNOSztBREtUOztBQUlBO0VBQ0ksbUJDVFk7RURVWixtQkFBQTtBQURKOztBQUlBO0VBQ0ksbUJDWk87QURXWDs7QUFJQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0k7SUFDSSxzQkFBQTtJQUNBLG1CQUFBO0VBRE47RUFHTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBRFY7RUFJTTtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQUZWOztFQU1FO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUFITjtFQUtNO0lBQ0ksVUFBQTtFQUhWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL3Byb2plY3RzL3Byb2plY3QtcmVhZC12aWV3L3Byb2plY3QtcmVhZC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogN3B4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkcXVhcnR6O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkZ29sZGVuLXRhaW5vaTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkZ3QtaG92ZXI7XG59XG5cbi5mbGV4LXBhZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLnByb2ZpbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuLmZsZXgtZGlzcGxheSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5mbGV4LXBhZCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2ZpbGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZmxleC1kaXNwbGF5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIC5idXR0b24teGwge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIiRkYXJrLWNlcnVsZWFuOiAjMGI0ODcwO1xuJHF1YXJ0ejogI2VmZWFmOTtcbiRnb2xkZW4tdGFpbm9pOiAjZmZiZTU1O1xuXG4kZ3QtaG92ZXI6ICNmZmM5NzE7XG4kZGMtaG92ZXI6ICMyOTMxNWE7XG4kZGMtYWN0aXZlOiAjMjEyOTRkO1xuJHEtZm9jdXM6ICNmZGZkZmQ7XG5cbiRibHVlLXNoYWRvdzogMHB4IDZweCAxNnB4IC01cHggcmdiKDEzMCAxMzMgMjI2IC8gMTElKTtcbiRidXR0b24tc2hhZG93OiAwcHggNnB4IDExcHggLTNweCByZ2JhKDE5MywgMTQ3LCA3MSwgMC4yKTtcblxuJGZvbnQtZ3JleTogIzcwNzI3ZDtcbiRkZWxldGUtcmVkOiAjZWI2MjYyO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectReadViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-read-view',
                templateUrl: './project-read-view.component.html',
                styleUrls: ['./project-read-view.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_core_core_data_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/projects/projects-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/projects/projects-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.component */ "./src/app/main/projects/projects.component.ts");
/* harmony import */ var _projects_table_projects_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-table/projects-table.component */ "./src/app/main/projects/projects-table/projects-table.component.ts");
/* harmony import */ var _projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-view/projects-view.component */ "./src/app/main/projects/projects-view/projects-view.component.ts");
/* harmony import */ var _project_read_view_project_read_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-read-view/project-read-view.component */ "./src/app/main/projects/project-read-view/project-read-view.component.ts");








const routes = [
    {
        path: '', component: _projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"],
        children: [
            {
                path: '',
                component: _projects_table_projects_table_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsTableComponent"],
            },
            {
                path: 'add',
                component: _projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsViewComponent"]
            },
            {
                path: ':project',
                component: _project_read_view_project_read_view_component__WEBPACK_IMPORTED_MODULE_5__["ProjectReadViewComponent"]
            },
            {
                path: ':project/edit',
                component: _projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsViewComponent"]
            }
        ]
    },
];
class ProjectsRoutingModule {
}
ProjectsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectsRoutingModule });
ProjectsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectsRoutingModule_Factory(t) { return new (t || ProjectsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/projects/projects-table/projects-table.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/projects/projects-table/projects-table.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProjectsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsTableComponent", function() { return ProjectsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _core_core_data_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/core-data/projects/projects.service */ "./src/app/core/core-data/projects/projects.service.ts");
/* harmony import */ var src_app_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pagination/pagination.service */ "./src/app/core/pagination/pagination.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/loader/loader.component */ "./src/app/shared/loader/loader.component.ts");










function ProjectsTableComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r6, " ");
} }
function ProjectsTableComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const count_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", count_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", count_r7, " ");
} }
function ProjectsTableComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r8, " ");
} }
function ProjectsTableComponent_div_27_tr_16_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r10.skill.truncated + ", ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r10.skill.remaining + "+");
} }
function ProjectsTableComponent_div_27_tr_16_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r10.skill.truncated, " ");
} }
function ProjectsTableComponent_div_27_tr_16_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r10.resources.truncated + ", ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r10.skill.remaining + "+");
} }
function ProjectsTableComponent_div_27_tr_16_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r10.resources.truncated, " ");
} }
function ProjectsTableComponent_div_27_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsTableComponent_div_27_tr_16_span_9_Template, 4, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectsTableComponent_div_27_tr_16_span_10_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectsTableComponent_div_27_tr_16_span_12_Template, 4, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectsTableComponent_div_27_tr_16_span_13_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", project_r10.projectID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r10.projectID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", project_r10.projectID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r10.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r10.client.clientName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", project_r10.skill.all);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r10.skill.remaining);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !project_r10.skill.remaining);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", project_r10.resources.all);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r10.resources.remaining);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !project_r10.resources.remaining);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 12, project_r10.createdAt));
} }
const _c0 = function (a1, a2, a3) { return { id: "project-pagination", itemsPerPage: a1, currentPage: a2, totalItems: a3 }; };
function ProjectsTableComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Project Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Skill Set");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Resources Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectsTableComponent_div_27_tr_16_Template, 17, 14, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pagination-controls", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ProjectsTableComponent_div_27_Template_pagination_controls_pageChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.changePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 1, ctx_r3.projectsUIModel, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx_r3.retrievePageState.itemsCount, ctx_r3.retrievePageState.pageNumber, ctx_r3.totalItems)));
} }
function ProjectsTableComponent_app_loader_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
function ProjectsTableComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No records found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProjectsTableComponent {
    constructor(projectService, paginationService) {
        this.projectService = projectService;
        this.paginationService = paginationService;
        // icons for display
        this.downIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretSquareDown"];
        this.leftIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretSquareLeft"];
        this.expandedIndex = -1;
        this.projectsUIModel = [];
        this.fetching = true;
        // pagination state
        this.countOptions = [10, 20, 40];
        this.sortOptions = ['Project ID', 'Project Name', 'Start Date'];
        this.activeOptions = ['All', 'Active', 'Inactive'];
        this.totalItems = 30;
        this.getProjectsList = () => {
            this.fetching = true;
            this.projectService.getProjects(this.retrievePageState.pageNumber, this.retrievePageState.itemsCount, this.retrievePageState.sortOptions, this.retrievePageState.activeOptions)
                .subscribe(projects => {
                this.fetching = false;
                const projectsModel = [];
                projects.result.forEach(project => {
                    projectsModel.push(this.prepareProjectUIModel(project));
                });
                this.totalItems = projects.totalPages * this.retrievePageState.itemsCount;
                this.projectsUIModel = projectsModel;
                this.projects = projects.result;
            }, error => {
                // alert(error.statusText);
                this.fetching = false;
                this.projectsUIModel = [];
            });
        };
        this.prepareProjectUIModel = (project) => {
            const projectUIModel = {
                projectID: project.projectID,
                projectName: project.projectName,
                createdAt: new Date(project.createdAt),
                client: {
                    clientName: project.client.clientName
                },
                skill: this.getTruncatedSkills(project.skill),
                resources: this.getTruncatedResources(project.resources)
            };
            return projectUIModel;
        };
        /**
         * @method getTruncatedSkills
         * @description gets truncated skills string to display in table
         * @param skills Skill array of the project
         */
        this.getTruncatedSkills = (skills) => {
            const result = {
                truncated: '',
                remaining: 0,
                all: ''
            };
            if (!skills.length) {
                return result;
            }
            const skillNames = skills.map(skill => skill.skillName);
            if (skills.length <= 2) {
                result.truncated = result.all = skillNames.join(', ');
            }
            else {
                result.truncated = [skillNames[0], skillNames[1]].join(', ');
                result.remaining = skillNames.length - 2;
                result.all = skillNames.join(', ');
            }
            return result;
        };
        /**
         * @method getTruncatedResources
         * @description gets truncated resources string to display in table
         * @param resources Resources array of the project
         */
        this.getTruncatedResources = (resources) => {
            const result = {
                truncated: '',
                remaining: 0,
                all: ''
            };
            if (!resources.length) {
                return result;
            }
            const resourceNames = resources.map(resource => resource.user.firstName);
            if (resources.length <= 2) {
                result.truncated = result.all = resourceNames.join(', ');
            }
            else {
                result.truncated = [resourceNames[0], resourceNames[1]].join(', ');
                result.remaining = resourceNames.length - 2;
                result.all = resourceNames.join(', ');
            }
            return result;
        };
        /**
         * @method changePage
         * @description Changes page number in pagination
         * @param num Page number
         */
        this.changePage = (num) => {
            this.changePageState({
                id: 'project-pagination', pageNumber: num, itemsCount: this.retrievePageState.itemsCount,
                sortOptions: this.retrievePageState.sortOptions, activeOptions: this.retrievePageState.activeOptions
            });
            this.getProjectsList();
        };
        /**
         * @method changeItemsCount
         * @description Changes the number of items displayed in per page
         * @param num Items count
         */
        this.changeItemsCount = (num) => {
            this.changePageState({
                id: 'project-pagination', pageNumber: 1, itemsCount: num, sortOptions: this.retrievePageState.sortOptions,
                activeOptions: this.retrievePageState.activeOptions
            });
            this.getProjectsList();
        };
        /**
         * @method changeSortOption
         * @description Changes sorting option for the items displayed
         * @param option Sorting format option
         */
        this.changeSortOption = (option) => {
            this.changePageState({
                id: 'project-pagination', pageNumber: 1, itemsCount: this.retrievePageState.itemsCount,
                sortOptions: option, activeOptions: this.retrievePageState.activeOptions
            });
            this.getProjectsList();
        };
        /**
         * @method changeActiveOption
         * @description Changes active option for the items displayed
         * @param option active format option
         */
        this.changeActiveOption = (option) => {
            this.changePageState({
                id: 'project-pagination', pageNumber: 1, itemsCount: this.retrievePageState.itemsCount,
                sortOptions: this.retrievePageState.sortOptions, activeOptions: option
            });
            this.getProjectsList();
        };
        /**
         * @method changePageState
         * @description Changes the state of pagination in service
         */
        this.changePageState = (pageState) => {
            this.paginationService.setProjectsPageState(pageState);
        };
    }
    ngOnInit() {
        this.getProjectsList();
    }
    /**
     * @method retrievePageState
     * @description Gets the current pagination state
     */
    get retrievePageState() {
        return this.paginationService.projectPageState;
    }
}
ProjectsTableComponent.ɵfac = function ProjectsTableComponent_Factory(t) { return new (t || ProjectsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_data_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"])); };
ProjectsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsTableComponent, selectors: [["app-projects-table"]], decls: 31, vars: 10, consts: [[1, "top-controls"], [1, "title-1"], [1, "search-bar"], ["type", "text", "placeholder", "Search projects", 1, "search-input-bar", "sub-title-6"], ["type", "button", "value", "Search", 1, "button-search", "pointer"], [1, "flex-display"], [1, "items-selector"], [1, "sub-title-6", "font-grey"], [1, "drop-down", "sub-title-6", 3, "ngModel", "ngModelChange"], ["class", "drop-option", 3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "table-responsive", 4, "ngIf"], [4, "ngIf"], ["class", "no-records sub-title-6 text-centered", 4, "ngIf"], ["type", "button", "value", "Add Project", 1, "button-xl", "right-float", "pointer", "sub-title-6", 3, "routerLink"], [1, "drop-option", 3, "ngValue"], [1, "table-responsive"], [1, "sub-title-6"], [3, "routerLink", 4, "ngFor", "ngForOf"], ["id", "project-pagination", 1, "sub-title-6", "text-centered", 3, "pageChange"], [3, "routerLink"], [1, "text-no-wrap"], [3, "title"], [1, "remaining"], [1, "no-records", "sub-title-6", "text-centered"]], template: function ProjectsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Sort ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsTableComponent_Template_select_ngModelChange_12_listener($event) { return ctx.changeSortOption($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectsTableComponent_option_13_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Items \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsTableComponent_Template_select_ngModelChange_18_listener($event) { return ctx.changeItemsCount($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProjectsTableComponent_option_19_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Show \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsTableComponent_Template_select_ngModelChange_24_listener($event) { return ctx.changeActiveOption($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProjectsTableComponent_option_25_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProjectsTableComponent_div_27_Template, 20, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProjectsTableComponent_app_loader_28_Template, 1, 0, "app-loader", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProjectsTableComponent_div_29_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.retrievePageState.sortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.retrievePageState.itemsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.retrievePageState.activeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fetching && ctx.projectsUIModel.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fetching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.projectsUIModel.length && !ctx.fetching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "add");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".items-selector[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: baseline;\n}\n\n.remaining[_ngcontent-%COMP%] {\n  color: #9799a2;\n}\n\n.right-float[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wcm9qZWN0cy9wcm9qZWN0cy10YWJsZS9wcm9qZWN0cy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL21haW4vcHJvamVjdHMvcHJvamVjdHMtdGFibGUvcHJvamVjdHMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5pdGVtcy1zZWxlY3RvciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4ucmVtYWluaW5nIHtcbiAgICBjb2xvcjogbGlnaHRlbigkZm9udC1ncmV5LCAxNSk7XG59XG5cbi5yaWdodC1mbG9hdCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-table',
                templateUrl: './projects-table.component.html',
                styleUrls: ['./projects-table.component.scss']
            }]
    }], function () { return [{ type: _core_core_data_projects_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }, { type: src_app_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/projects/projects-view/projects-view.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/projects/projects-view/projects-view.component.ts ***!
  \************************************************************************/
/*! exports provided: ProjectsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsViewComponent", function() { return ProjectsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _core_utils_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/utils/validation */ "./src/app/core/utils/validation.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_core_data_skills_skills_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/core-data/skills/skills.service */ "./src/app/core/core-data/skills/skills.service.ts");
/* harmony import */ var _core_core_data_clients_clients_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/core-data/clients/clients.service */ "./src/app/core/core-data/clients/clients.service.ts");
/* harmony import */ var _core_core_data_resources_resources_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/core-data/resources/resources.service */ "./src/app/core/core-data/resources/resources.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_core_data_projects_projects_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/core-data/projects/projects.service */ "./src/app/core/core-data/projects/projects.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_mydatepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-mydatepicker */ "./node_modules/angular-mydatepicker/__ivy_ngcc__/fesm2015/angular-mydatepicker.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js");

















function ProjectsViewComponent_div_5_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r1.errors.projectName, ")");
} }
function ProjectsViewComponent_div_5_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r2.errors.clientId, ")");
} }
function ProjectsViewComponent_div_5_h1_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.projectModel.client.name, "");
} }
function ProjectsViewComponent_div_5_h1_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search and assign a client");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsViewComponent_div_5_fa_icon_13_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsViewComponent_div_5_fa_icon_13_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.removeClient(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.plusIcon);
} }
function ProjectsViewComponent_div_5_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r6.errors.about, ")");
} }
function ProjectsViewComponent_div_5_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r7.errors.duration, ")");
} }
function ProjectsViewComponent_div_5_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r9.errors.requiredSkills, ")");
} }
function ProjectsViewComponent_div_5_tag_input_32_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tag-input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsViewComponent_div_5_tag_input_32_Template_tag_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.projectModel.requiredSkills = $event; })("onRemove", function ProjectsViewComponent_div_5_tag_input_32_Template_tag_input_onRemove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.onSkillRemoved($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.projectModel.requiredSkills)("hideForm", true)("identifyBy", "id")("displayBy", "title")("ripple", false);
} }
function ProjectsViewComponent_div_5_h1_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search and add skills ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsViewComponent_div_5_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r12.errors.resources, ")");
} }
function ProjectsViewComponent_div_5_tag_input_40_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tag-input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsViewComponent_div_5_tag_input_40_Template_tag_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.projectModel.resources = $event; })("onRemove", function ProjectsViewComponent_div_5_tag_input_40_Template_tag_input_onRemove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.onResourceRemoved($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.projectModel.resources)("hideForm", true)("identifyBy", "id")("displayBy", "firstName")("ripple", false);
} }
function ProjectsViewComponent_div_5_h1_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search and add resources ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsViewComponent_div_5_div_64_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsViewComponent_div_5_div_64_div_7_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const skill_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r29.addSkill(skill_r28.id, skill_r28.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r28.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r27.plusIcon);
} }
function ProjectsViewComponent_div_5_div_64_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsViewComponent_div_5_div_64_div_7_div_2_Template, 6, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.suggestedSkills);
} }
function ProjectsViewComponent_div_5_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProjectsViewComponent_div_5_div_64_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.onSearchSkill($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter 3 or more characters to search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectsViewComponent_div_5_div_64_div_7_Template, 3, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r15.skillSuggestFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.suggestedSkills && ctx_r15.suggestedSkills.length);
} }
function ProjectsViewComponent_div_5_div_65_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsViewComponent_div_5_div_65_div_4_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const resource_r36 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r37.addResource(resource_r36.id, resource_r36.firstName, resource_r36.lastName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resource_r36 = ctx.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", resource_r36.firstName + " " + resource_r36.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r35.plusIcon);
} }
function ProjectsViewComponent_div_5_div_65_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsViewComponent_div_5_div_65_div_4_div_2_Template, 6, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.suggestedResources);
} }
function ProjectsViewComponent_div_5_div_65_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add skills to search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsViewComponent_div_5_div_65_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProjectsViewComponent_div_5_div_65_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.onSearchResource($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsViewComponent_div_5_div_65_div_4_Template, 3, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsViewComponent_div_5_div_65_h2_5_Template, 2, 0, "h2", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.suggestedResources && ctx_r16.suggestedResources.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r16.suggestedResources && ctx_r16.suggestedResources.length));
} }
function ProjectsViewComponent_div_5_div_66_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsViewComponent_div_5_div_66_div_4_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const client_r44 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r45.addClient(client_r44.id, client_r44.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Assign ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r44 = ctx.$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", client_r44.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r43.plusIcon);
} }
function ProjectsViewComponent_div_5_div_66_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsViewComponent_div_5_div_66_div_4_div_2_Template, 6, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.suggestedClients);
} }
function ProjectsViewComponent_div_5_div_66_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter 3 or more characters to search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsViewComponent_div_5_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsViewComponent_div_5_div_66_div_4_Template, 3, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsViewComponent_div_5_div_66_h2_5_Template, 2, 0, "h2", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r17.clientSuggestFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.suggestedClients && ctx_r17.suggestedClients.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r17.suggestedClients && ctx_r17.suggestedClients.length));
} }
function ProjectsViewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Project Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectsViewComponent_div_5_span_4_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsViewComponent_div_5_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.projectModel.projectName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Client Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsViewComponent_div_5_span_9_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectsViewComponent_div_5_h1_11_Template, 2, 1, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectsViewComponent_div_5_h1_12_Template, 3, 0, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectsViewComponent_div_5_fa_icon_13_Template, 1, 1, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProjectsViewComponent_div_5_span_17_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsViewComponent_div_5_Template_textarea_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.projectModel.about = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Project Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectsViewComponent_div_5_span_22_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsViewComponent_div_5_Template_input_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return _r8.toggleCalendar(); })("ngModelChange", function ProjectsViewComponent_div_5_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.model = $event; })("dateChanged", function ProjectsViewComponent_div_5_Template_input_dateChanged_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.onDateChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Skills needed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProjectsViewComponent_div_5_span_29_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProjectsViewComponent_div_5_tag_input_32_Template, 1, 5, "tag-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProjectsViewComponent_div_5_h1_33_Template, 3, 0, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Assigned Resources ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ProjectsViewComponent_div_5_span_37_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProjectsViewComponent_div_5_tag_input_40_Template, 1, 5, "tag-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ProjectsViewComponent_div_5_h1_41_Template, 3, 0, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Activity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsViewComponent_div_5_Template_input_ngModelChange_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.activity = $event; })("click", function ProjectsViewComponent_div_5_Template_input_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.onChangeActivity(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectsViewComponent_div_5_Template_input_ngModelChange_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.activity = $event; })("click", function ProjectsViewComponent_div_5_Template_input_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.onChangeActivity(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h1", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsViewComponent_div_5_Template_h1_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r57.currentTab = "add-skills"; return ctx_r57.borderRadiusStyleSwitch = { "border-radius": "0 8px 8px 8px" }; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Add skills ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h1", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsViewComponent_div_5_Template_h1_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r58.currentTab = "add-resources"; return ctx_r58.borderRadiusStyleSwitch = { "border-radius": "8px 8px 8px 8px" }; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Add resources ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsViewComponent_div_5_Template_h1_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r59.currentTab = "add-client"; return ctx_r59.borderRadiusStyleSwitch = { "border-radius": "8px 0 8px 8px" }; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Add client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ProjectsViewComponent_div_5_div_64_Template, 8, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ProjectsViewComponent_div_5_div_65_Template, 6, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ProjectsViewComponent_div_5_div_66_Template, 6, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsViewComponent_div_5_Template_input_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.addProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsViewComponent_div_5_Template_input_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.cancelConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.errors.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.projectModel.projectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.errors.clientId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.projectModel.client.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.projectModel.client.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.projectModel.client.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.errors.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.projectModel.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.errors.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.model)("options", ctx_r0.myDpOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.errors.requiredSkills);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.projectModel.requiredSkills.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.projectModel.requiredSkills.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.errors.resources);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.projectModel.resources.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.projectModel.resources.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.activity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.activity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.currentTab == "add-skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.currentTab == "add-resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.currentTab == "add-client");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.currentTab)("ngStyle", ctx_r0.borderRadiusStyleSwitch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "add-skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "add-resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "add-client");
} }
class ProjectsViewComponent {
    constructor(skillsService, clientService, resourceService, router, route, projectService) {
        this.skillsService = skillsService;
        this.clientService = clientService;
        this.resourceService = resourceService;
        this.router = router;
        this.route = route;
        this.projectService = projectService;
        this.checkIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheck"];
        this.crossicon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"];
        this.plusIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        this.suggestedClients = [{ id: 1, name: 'google' }, { id: 2, name: 'facebook' }];
        this.suggestedResources = [{ id: 1, firstName: 'Kishan', lastName: 'Lal' }, { id: 2, firstName: 'Karan', lastName: 'Kumar' },
            { id: 4, firstName: 'Jane', lastName: 'Doe' }, { id: 5, firstName: 'Kishan', lastName: 'Kuamr' }];
        this.skillSuggestFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.clientSuggestFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        // errors
        this.errors = {
            isValid: false,
            about: '',
            projectName: '',
            clientId: '',
            duration: '',
            requiredSkills: '',
            resources: ''
        };
        // project state
        this.projectModel = {
            projectName: '',
            about: '',
            startDate: null,
            endDate: null,
            isActive: true,
            client: {
                id: 0,
                name: ''
            },
            requiredSkills: [],
            resources: []
        };
        this.activity = 'Active';
        // Date picker states
        this.myDpOptions = {
            dateRange: true,
            dateFormat: 'yyyy-mm-dd'
        };
        this.myDateInit = true;
        this.model = null;
        // edit state
        this.isEditMode = false;
        // tab switching
        this.currentTab = 'add-skills';
        // change border radius on tab switch
        this.borderRadiusStyleSwitch = {
            'border-radius': '0 8px 8px 8px'
        };
        /**
         * @method preFillFields
         * @description Pre fills all the fields to edit the project
         * @param project The project to be edited
         */
        this.preFillFields = (project) => {
            this.projectModel = {
                projectName: project.projectName,
                about: project.about,
                startDate: project.startDate,
                isActive: project.isActive,
                endDate: project.endDate,
                client: {
                    id: project.client.clientID,
                    name: project.client.clientName
                },
                requiredSkills: project.skill.map(skill => ({ id: skill.skillID, title: skill.skillName })),
                resources: project.resources.map(resource => ({
                    id: resource.user.userID,
                    firstName: resource.user.firstName, lastName: resource.user.lastName
                }))
            };
            this.removeAddedResources(this.projectModel.resources);
            // this.getMatchingResources(this.projectModel.requiredSkills);
            this.setDate();
            this.setActivity();
        };
        /**
         * @method setDate
         * @description set the duration for the project on edit
         */
        this.setDate = () => {
            const begin = new Date(this.projectModel.startDate);
            const end = new Date(this.projectModel.endDate);
            this.model = {
                isRange: true,
                singleDate: null,
                dateRange: {
                    beginDate: {
                        year: begin.getFullYear(), month: begin.getMonth() + 1, day: begin.getDate()
                    },
                    endDate: {
                        year: end.getFullYear(), month: end.getMonth() + 1, day: end.getDate()
                    }
                }
            };
        };
        /**
         * @method setActivity
         * @description sets the activity in the ngModel
         */
        this.setActivity = () => {
            if (this.projectModel.isActive) {
                this.activity = 'Active';
            }
            else {
                this.activity = 'InActive';
            }
        };
        /**
         * @method onChangeActivity
         * @description changes the activity in the project Model
         */
        this.onChangeActivity = (activity) => {
            this.projectModel.isActive = activity;
        };
        /**
         * @method getTopXSkills
         * @description gets the top X skills for the service
         * @param topX top X
         */
        this.getTopXSkills = (topX) => {
            this.skillsService.getTopX(topX).subscribe(res => {
                this.suggestedSkills = res;
                this.removeAddedSkills(this.projectModel.requiredSkills);
            });
        };
        /**
         * @method getMatchingResources
         * @description gets the matching resources based on skillset match from service
         * @param skills the required skills
         */
        this.getMatchingResources = (skills) => {
            this.resourceService.getMatchingResources(skills).subscribe(res => {
                this.suggestedResources = res;
                this.removeAddedResources(this.projectModel.resources);
            });
        };
        /**
         * @method onDateChanged
         * @description Triggered when date is changeds
         * @param event Object containing date information
         */
        this.onDateChanged = ($event) => {
            const dateRange = $event.dateRange.formatted.split(' ');
            this.projectModel.startDate = dateRange[0];
            this.projectModel.endDate = dateRange[2];
        };
        /**
         * @param skillname Name of the skill to be added
         * @param skillid ID of the skill to be added
         */
        this.addSkill = (skillid, skillname) => {
            this.projectModel.requiredSkills.push({ id: skillid, title: skillname });
            this.removeAddedSkills(this.projectModel.requiredSkills);
            // this.getMatchingResources(this.projectModel.requiredSkills);
        };
        /**
         * @param clientid ID of the client to be added
         * @param clientname Name of the client to be added
         */
        this.addClient = (clientid, clientname) => {
            this.projectModel.client = { id: clientid, name: clientname };
        };
        /**
         * @param resourceID ID of the resource to be added
         * @param resourceName Name of the resource to be added
         */
        this.addResource = (resourceID, resourceFirstName, resourceLastName) => {
            this.projectModel.resources.push({ id: resourceID, firstName: resourceFirstName, lastName: resourceLastName });
            this.removeAddedResources(this.projectModel.resources);
        };
        /**
         * @description remove all the added skills from suggested skills
         * @param addedSkills Skills alrady added to the project
         * @returns suggestedSkills returns suggested skills with all the added skills removed
         */
        this.removeAddedSkills = (addedSkills) => {
            addedSkills.forEach(addedSkill => {
                this.suggestedSkills = this.suggestedSkills.filter(skill => skill.id !== addedSkill.id);
            });
            return this.suggestedSkills;
        };
        /**
         * @description remove all the added resources from suggested resources
         * @param addedResources Resources alrady added to the project
         * @returns suggestedResources returns suggested resources with all the added resources removed
         */
        this.removeAddedResources = (addedResources) => {
            addedResources.forEach(addedResource => {
                this.suggestedResources = this.suggestedResources.filter(resource => resource.id !== addedResource.id);
            });
            return this.suggestedResources;
        };
        /**
         * @description when a skill is removed for the project, add it back to suggested skills
         * @param skill Currently removed skill
         */
        this.onSkillRemoved = (skill) => {
            this.suggestedSkills.push(skill);
        };
        /**
         * @description when a resource is removed for the project, add it back to suggested resources
         * @param resource Currently removed resource
         */
        this.onResourceRemoved = (resource) => {
            this.suggestedResources.push(resource);
        };
        /**
         * @description remove client from model
         */
        this.removeClient = () => {
            this.projectModel.client = { id: 0, name: '' };
        };
        /**
         * @description suggest skills from the service
         */
        this.suggestSkill = () => {
            this.skillSuggestFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(req => {
                if (this.skillSuggestFormControl.value.length >= 3) {
                    return this.skillsService.getSuggestedSkills(this.skillSuggestFormControl.value);
                }
                else {
                    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
                }
            })).subscribe(res => {
                this.suggestedSkills = res.skills;
                this.removeAddedSkills(this.projectModel.requiredSkills);
            });
        };
        /**
         * @description suggest a client from the service
         */
        this.suggestClient = () => {
            this.clientSuggestFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(req => {
                if (this.clientSuggestFormControl.value.length > 3) {
                    return this.clientService.getSuggestedClients(this.clientSuggestFormControl.value);
                }
                else {
                    return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
                }
            })).subscribe(res => {
                // this.suggestedClients = res;
            });
        };
        /**
         * @description suggest a resource from the list of suggested resources
         * @param resourceSearched client that is being searched
         */
        this.suggestResource = (resourceSearched) => {
            this.suggestedResources = this.suggestedResources.filter(suggestedResource => (suggestedResource.firstName + ' ' + suggestedResource.lastName).toLowerCase().match(resourceSearched.toLowerCase()));
            this.removeAddedResources(this.projectModel.resources);
        };
        /**
         * @description this function triggers when a skill is searched
         * @param $event To get the target event for the search input
         */
        this.onSearchSkill = ($event) => {
            const skillSearched = $event.target.value.trim();
            // if nothing is searched, get top 10 skills
            if (skillSearched.length === 0) {
                this.getTopXSkills(10);
            }
        };
        /**
         * @description this function triggers when a resource is searched
         * @param $event To get the target event for the search input
         */
        this.onSearchResource = ($event) => {
            const resourceSearched = $event.target.value.trim();
            if (this.projectModel.requiredSkills.length) {
                if (resourceSearched.length === 0) {
                    // this.getMatchingResources(this.projectModel.requiredSkills);
                }
                else {
                    this.suggestResource(resourceSearched);
                }
            }
        };
        /**
         * @description confirms the "cancel creating new project" action
         */
        this.cancelConfirm = () => {
            if (confirm('There are unsaved changes, cancel now?')) {
                this.router.navigate(['/projects']);
            }
        };
        /**
         * @description this function converts UI project model to actual request model that has to be sent to server
         */
        this.convertToProjectRequestModel = () => {
            const project = {
                projectName: this.projectModel.projectName,
                about: this.projectModel.about,
                clientID: this.projectModel.client.id,
                requiredSkills: [],
                resources: [],
                isActive: this.projectModel.isActive,
                startDate: this.projectModel.startDate,
                endDate: this.projectModel.endDate
            };
            project.requiredSkills = this.projectModel.requiredSkills.length ? this.projectModel.requiredSkills.map(skill => skill.id) : [];
            project.resources = this.projectModel.resources.length ? this.projectModel.resources.map(resource => resource.id) : [];
            return project;
        };
        /**
         * @description this function handles the add project logic
         */
        this.addProject = () => {
            const project = this.convertToProjectRequestModel();
            const validation = Object(_core_utils_validation__WEBPACK_IMPORTED_MODULE_2__["ProjectValidation"])(project);
            this.errors = validation;
            if (validation.isValid) {
                if (this.isEditMode) {
                    this.projectService.editProject(project, this.route.snapshot.params.project).subscribe(res => {
                        alert('saved! redirecting to the new project ID');
                        this.router.navigate(['/projects/' + this.route.snapshot.params.project]);
                    });
                }
                else {
                    this.projectService.addProject(project).subscribe((res) => {
                        alert('saved! redirecting to the new project ID');
                        this.router.navigate(['/projects/' + res.projectID]);
                    });
                }
            }
        };
    }
    // get top 10 skills on init
    ngOnInit() {
        // check with the URL if edit or add project mode
        const url = this.route.snapshot.url;
        if (url.length >= 2 && Number(this.route.snapshot.params.project) && url[1].path === 'edit') {
            this.projectService.getProject(this.route.snapshot.params.project).subscribe(res => {
                this.preFillFields(res);
                this.isEditMode = true;
            });
        }
        // this.getTopXSkills(10);
        // this.suggestClient();
        this.suggestSkill();
    }
}
ProjectsViewComponent.ɵfac = function ProjectsViewComponent_Factory(t) { return new (t || ProjectsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_data_skills_skills_service__WEBPACK_IMPORTED_MODULE_6__["SkillsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_data_clients_clients_service__WEBPACK_IMPORTED_MODULE_7__["ClientsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_data_resources_resources_service__WEBPACK_IMPORTED_MODULE_8__["ResourcesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_core_data_projects_projects_service__WEBPACK_IMPORTED_MODULE_10__["ProjectsService"])); };
ProjectsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsViewComponent, selectors: [["app-projects-view"]], decls: 6, vars: 1, consts: [[1, "title-1"], [1, "time-bar"], ["class", "spaced-container", 4, "ngIf"], [1, "spaced-container"], [1, "dynamic-input"], [1, "sub-title-6", "font-grey", "input-head"], ["class", "warning", 4, "ngIf"], ["type", "text", "placeholder", "Enter project name", 1, "input-bar", "sub-title-4", 3, "ngModel", "ngModelChange"], [1, "flex-display", "client-input"], ["class", "sub-title-4 client", 4, "ngIf"], ["class", "sub-title-4 font-grey", 4, "ngIf"], ["class", "cross-icon pointer", 3, "icon", "click", 4, "ngIf"], ["type", "text", "placeholder", "Enter description", 1, "input-bar", "sub-title-4", 3, "ngModel", "ngModelChange"], [1, "input-box-container", "input-bar"], ["placeholder", "Click to select a date", "angular-mydatepicker", "", "name", "mydate", 1, "sub-title-4", "input-no-style", 3, "ngModel", "options", "click", "ngModelChange", "dateChanged"], ["dp", "angular-mydatepicker"], [1, "skills-wrapper"], [1, "skills-container"], ["ngDefaultControl", "", "theme", "minimal-theme", 3, "ngModel", "hideForm", "identifyBy", "displayBy", "ripple", "ngModelChange", "onRemove", 4, "ngIf"], [1, "resource-wrapper"], [1, "resource-container"], [1, "flex-display", "activity"], ["type", "radio", "id", "activity", "name", "activity", "value", "Active", 3, "ngModel", "ngModelChange", "click"], ["for", "Active"], ["type", "radio", "id", "activity", "name", "activity", "value", "InActive", 3, "ngModel", "ngModelChange", "click"], ["for", "InActive"], [1, "right-view"], [1, "tab-view"], [1, "tabs", "flex-display"], ["rel", "add-skills", 1, "sub-title-6", "tab", "pointer", "cerulean-text", 3, "click"], ["rel", "add-resources", 1, "sub-title-6", "tab", "pointer", "cerulean-text", 3, "click"], ["rel", "add-client", 1, "sub-title-6", "tab", "pointer", "cerulean-text", 3, "click"], [1, "time-bar", "tab-container", 3, "ngSwitch", "ngStyle"], ["class", "tab-body", "id", "add-skills", 4, "ngSwitchCase"], ["class", "tab-body", "id", "add-resources", 4, "ngSwitchCase"], ["class", "tab-body", "id", "add-client", 4, "ngSwitchCase"], [1, "full-width", "flex-display"], ["type", "button", "value", "Save", 1, "button-xl", "pointer", "sub-title-6", "flex-occupy", 3, "click"], ["type", "button", "value", "Cancel", 1, "button-xl", "pointer", "sub-title-6", "flex-occupy", "warning", 3, "click"], [1, "warning"], [1, "sub-title-4", "client"], [1, "sub-title-4", "font-grey"], [1, "cross-icon", "pointer", 3, "icon", "click"], ["ngDefaultControl", "", "theme", "minimal-theme", 3, "ngModel", "hideForm", "identifyBy", "displayBy", "ripple", "ngModelChange", "onRemove"], ["id", "add-skills", 1, "tab-body"], [1, "top-controls"], [1, "search-bar"], ["type", "text", "placeholder", "Search Skills", 1, "search-input-bar", "sub-title-6", 3, "formControl", "keyup"], [1, "tool-tip-input"], ["class", "projects-wrapper wrapper", 4, "ngIf"], [1, "projects-wrapper", "wrapper"], [1, "project-container"], ["class", " project flex-display", 4, "ngFor", "ngForOf"], [1, "project", "flex-display"], [1, "sub-title-6"], ["type", "button", 1, "add-button", 3, "click"], ["title", "Add Skill", 1, "plus-icon", 3, "icon"], ["id", "add-resources", 1, "tab-body"], ["type", "text", "placeholder", "Search Resources", 1, "search-input-bar", "sub-title-6", 3, "keyup"], ["class", "search-tip", 4, "ngIf"], ["title", "Add Resource", 1, "plus-icon", 3, "icon"], [1, "search-tip"], ["id", "add-client", 1, "tab-body"], ["type", "text", "placeholder", "Search Clients", 1, "search-input-bar", "sub-title-6", 3, "formControl"], ["class", " projects-wrapper wrapper", 4, "ngIf"], ["title", "Assign Client", 1, "plus-icon", 3, "icon"]], template: function ProjectsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " New Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsViewComponent_div_5_Template, 71, 30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", "resourceData.firstName");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], angular_mydatepicker__WEBPACK_IMPORTED_MODULE_12__["AngularMyDatePickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchCase"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaIconComponent"], ngx_chips__WEBPACK_IMPORTED_MODULE_14__["TagInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], styles: [".input-bar[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-radius: 8px;\n  outline: none;\n  font-family: Open sans;\n  border: 2px solid #efeaf9;\n  color: #0b4870;\n}\n\n.dynamic-input[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n\n.dynamic-input[_ngcontent-%COMP%]   .client-input[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  background-color: #efeaf9;\n  border-radius: 8px;\n  padding: 5px;\n}\n\n.dynamic-input[_ngcontent-%COMP%]   .client-input[_ngcontent-%COMP%]   .cross-icon[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  color: #eb6262;\n  font-size: 16px;\n  transition: all 0.1s ease-in-out;\n}\n\n.dynamic-input[_ngcontent-%COMP%]   .client-input[_ngcontent-%COMP%]   .cross-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(45deg);\n}\n\n.dynamic-input[_ngcontent-%COMP%]   .resource-wrapper[_ngcontent-%COMP%] {\n  max-height: 150px;\n  background-color: #efeaf9;\n  border-radius: 8px;\n  padding: 5px;\n  overflow: auto;\n}\n\n.dynamic-input[_ngcontent-%COMP%]   .resource-wrapper[_ngcontent-%COMP%]   .resource-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.dynamic-input[_ngcontent-%COMP%]   .resource-wrapper[_ngcontent-%COMP%]   .resource-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: transparent !important;\n}\n\n.project[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.project[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 12px;\n  color: #0b4870;\n  background-color: #efeaf9;\n  border-radius: 4px;\n  transition: all 80ms ease-in-out;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.project[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n  background-color: #e0d6f3;\n}\n\n.project[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.project[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  color: #0b4870;\n  margin-right: 4px;\n  font-size: 12px;\n}\n\n.input-icon[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #ffbe55;\n  height: 100%;\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  border-radius: 8px;\n  color: #fff;\n  margin-left: 10px;\n  border: 2px solid #ffbe55;\n}\n\n.input-icons[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.input-bar[_ngcontent-%COMP%]:hover {\n  background-color: #efeaf9;\n  transition: background-color 0.3s ease;\n  border: 2px solid #efeaf9;\n}\n\n.input-bar[_ngcontent-%COMP%]:focus {\n  border: 2px solid #efeaf9;\n  background-color: #fdfdfd;\n}\n\n.hideIt[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.cerulean-text[_ngcontent-%COMP%] {\n  color: #0b4870;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.input-box-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.input-box[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  border: 1px solid #efeaf9;\n  font-size: 16px;\n}\n\n.input-no-style[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0px;\n  margin: 0px;\n  width: 100%;\n}\n\n.input-head[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  margin-left: 2px;\n}\n\n.items-selector[_ngcontent-%COMP%] {\n  border: 2px solid #efeaf9;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.tab-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  border-radius: 0 0 8px 8px;\n}\n\n.tab-view[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #efeaf9;\n  padding: 10px;\n  margin-bottom: 12px;\n  border-radius: 10px;\n}\n\n.tab-view[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .search-tip[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  margin-bottom: 70px;\n  text-align: center;\n  color: #e6def6;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.tab-view[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  background-color: #efeaf9;\n  padding: 8px 0 8px 0;\n  margin: 0;\n}\n\n.tab-view[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.spaced-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n\n.spaced-container[_ngcontent-%COMP%]   .skills-wrapper[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  max-height: 100px;\n  overflow: auto;\n}\n\n.spaced-container[_ngcontent-%COMP%]   .skills-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: transparent !important;\n}\n\n.tool-tip-input[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  margin-top: -8px;\n  margin-bottom: 15px;\n  color: #d2d2d2;\n}\n\n.client[_ngcontent-%COMP%] {\n  padding-left: 4px;\n}\n\n.tab[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 8px;\n  border-radius: 8px 8px 0px 0px;\n  margin: 2px;\n  width: 100%;\n  text-align: center;\n  margin-bottom: 0px;\n  z-index: 10;\n}\n\n.top-controls[_ngcontent-%COMP%] {\n  width: 100%;\n  align-self: center;\n  margin-top: 22px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  border: 5px solid #efeaf9;\n  border-radius: 8px;\n  background-color: #efeaf9;\n  padding: 0px;\n  margin: 10px;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #0b4870;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  padding: 3px;\n  margin: 10px;\n  overflow: auto;\n}\n\n.right-view[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin-left: 12px;\n  justify-content: space-between;\n  height: calc(100vh - 180px);\n}\n\n@media only screen and (max-width: 1024px) {\n  .spaced-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .dynamic-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .right-view[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n\n  .search-bar[_ngcontent-%COMP%] {\n    width: -webkit-fill-available;\n  }\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #efeaf9;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ffbe55;\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ffc971;\n}\n\n  tag-input .ng2-tag-input.minimal-theme {\n  padding: 0.25em 0.25em;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag delete-icon path {\n  fill: #0b4870 !important;\n}\n\n  tag-input .ng2-tag-input.minimal-theme {\n  z-index: 0;\n  border-bottom: none;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  color: #0b4870;\n  border-radius: 8px;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n  font-family: \"Open sans\" !important;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag:not(.readonly):not(.tag--editing):focus {\n  background: #fdfdfd;\n  color: #29315a;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag:not(.readonly):not(.tag--editing):active {\n  background: #fdfdfd;\n  color: #29315a;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #fdfdfd;\n  color: #29315a;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag.readonly {\n  cursor: default;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag.readonly:focus,   tag-input .ng2-tag-input.minimal-theme tag:focus {\n  outline: 0;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag.tag--editing {\n  cursor: text;\n}\n\n.warning[_ngcontent-%COMP%] {\n  color: white;\n  padding: 0px 4px 0px 4px;\n}\n\n.activity[_ngcontent-%COMP%] {\n  font-family: \"Open sans\";\n  align-items: center;\n}\n\n.activity[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-right: 15px;\n}\n\n.activity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 4px 5px 0 0;\n}\n\n.activity[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 4px 8px 0 0;\n  color: #0b4870;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wcm9qZWN0cy9wcm9qZWN0cy12aWV3L3Byb2plY3RzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9uZ3gtY2hpcHMvY29yZS9zdHlsZXMvY29yZS9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNDVlk7QURPaEI7O0FBTUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBSEo7O0FBS0k7RUFDSSw4QkFBQTtFQUNBLHlCQ25CQztFRG9CRCxrQkFBQTtFQUNBLFlBQUE7QUFIUjs7QUFLUTtFQUNJLHdCQUFBO0VBQ0EsY0NiQztFRGNELGVBQUE7RUFDQSxnQ0FBQTtBQUhaOztBQUtZO0VBQ0ksbUNBQUE7QUFIaEI7O0FBUUk7RUFDSSxpQkFBQTtFQUNBLHlCQ3JDQztFRHNDRCxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBTlI7O0FBT1E7RUFDSSxnQkFBQTtBQUxaOztBQU1ZO0VBQ0ksa0NBQUE7QUFKaEI7O0FBVUE7RUFDSSw4QkFBQTtBQVBKOztBQVNJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxjQ3pEUTtFRDBEUix5QkN6REM7RUQwREQsa0JBQUE7RUFDQSxnQ0FBQTtFRTNESiwyQkFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFFQSxpQkFBQTtBRnFESjs7QUFJUTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7QUFGWjs7QUFLUTtFQUNJLGFBQUE7QUFIWjs7QUFNUTtFQUNJLGNDekVJO0VEMEVKLGlCQUFBO0VBQ0EsZUFBQTtBQUpaOztBQVNBO0VBQ0ksYUFBQTtFQUNBLHlCQ2hGWTtFRGlGWixZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFTQTtFQUNJLGtCQUFBO0FBTko7O0FBU0E7RUFDSSx5QkNqR0s7RURrR0wsc0NBQUE7RUFDQSx5QkFBQTtBQU5KOztBQVNBO0VBQ0kseUJBQUE7RUFDQSx5QkNsR007QUQ0RlY7O0FBU0E7RUFDSSxtQkFBQTtBQU5KOztBQVNBO0VBQ0ksY0NqSFk7QUQyR2hCOztBQVNBO0VBQ0ksWUFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7QUFOSjs7QUFTQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFTQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFOSjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFTQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBTko7O0FBU0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFOSjs7QUFTQTtFQUNJLE9BQUE7RUFDQSx5QkM5Sks7RUQrSkwsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUV4S1IsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7QUZrS0o7O0FBT1E7RUFDSSx5QkMvS0g7RURnTEcsb0JBQUE7RUFDQSxTQUFBO0FBTFo7O0FBTVk7RUFDSSxzQkFBQTtBQUpoQjs7QUFVQTtFQUNJLG1CQUFBO0FBUEo7O0FBU0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVBSOztBQVFRO0VBQ0ksa0NBQUE7QUFOWjs7QUFXQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFSSjs7QUFXQTtFQUNJLGlCQUFBO0FBUko7O0FBV0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFSSjs7QUFXQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUko7O0FBV0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDck9LO0VEc09MLFlBQUE7RUFDQSxZQUFBO0FBUko7O0FBU0k7RUFDSSxjQzFPUTtBRG1PaEI7O0FBV0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFSSjs7QUFXQTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUFSSjs7QUFXQTtFQUNJO0lBQ0ksc0JBQUE7RUFSTjs7RUFXRTtJQUNJLFdBQUE7RUFSTjs7RUFXRTtJQUNJLGdCQUFBO0VBUk47O0VBV0U7SUFDSSw2QkFBQTtFQVJOO0FBQ0Y7O0FBV0E7RUFDSSxVQUFBO0FBVEo7O0FBWUE7RUFDSSxtQkNuUks7QUQwUVQ7O0FBWUE7RUFDSSxtQkN0Ulk7RUR1UlosbUJBQUE7QUFUSjs7QUFZQTtFQUNJLG1CQ3pSTztBRGdSWDs7QUFZQTtFQUNJLHNCQUFBO0FBVEo7O0FBYUk7RUFDSSx3QkFBQTtBQVZSOztBQWNBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBWEo7O0FBMEJBO0VHaFFJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFPQSxjQUFBO0VBQ0Esa0JBQUE7RUFVQSxnQkFBQTtFQUVBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFSHdPQSxtQ0FBQTtBQWJKOztBR3pOSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBSDJOUjs7QUd2Tkk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUh5TlI7O0FHck5JO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FIdU5SOztBR25OSTtFQUNJLGVBQUE7QUhxTlI7O0FHbE5JO0VBRUksVUFBQTtBSG1OUjs7QUdoTkk7RUFHSSxZQUFBO0FIZ05SOztBQUxBO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0FBUUo7O0FBTEE7RUFDSSx3QkFBQTtFQWVBLG1CQUFBO0FBTko7O0FBUkk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7QUFVUjs7QUFQSTtFQUNJLG1CQUFBO0FBU1I7O0FBTkk7RUFDSSxtQkFBQTtFQUNBLGNDbFZRO0FEMFZoQiIsImZpbGUiOiJzcmMvYXBwL21haW4vcHJvamVjdHMvcHJvamVjdHMtdmlldy9wcm9qZWN0cy12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIn5ub2RlX21vZHVsZXMvbmd4LWNoaXBzL2NvcmUvc3R5bGVzL2NvcmUvX2NvcmUuc2Nzc1wiO1xuXG4uaW5wdXQtYmFyIHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gc2FucztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkcXVhcnR6O1xuICAgIGNvbG9yOiAkZGFyay1jZXJ1bGVhbjtcbn1cblxuLmR5bmFtaWMtaW5wdXQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmNsaWVudC1pbnB1dCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHF1YXJ0ejtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgLmNyb3NzLWljb24ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgY29sb3I6ICRkZWxldGUtcmVkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJlc291cmNlLXdyYXBwZXIge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHF1YXJ0ejtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAucmVzb3VyY2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJvamVjdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmFkZC1idXR0b24ge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICRkYXJrLWNlcnVsZWFuO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcXVhcnR6O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA4MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICBAaW5jbHVkZSBuby1zZWxlY3Q7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRxdWFydHosIDUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgZmEtaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogJGRhcmstY2VydWxlYW47XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmlucHV0LWljb24ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbi10YWlub2k7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkZ29sZGVuLXRhaW5vaTtcbn1cblxuLmlucHV0LWljb25zIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5pbnB1dC1iYXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRxdWFydHo7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gICAgYm9yZGVyOiAycHggc29saWQgJHF1YXJ0ejtcbn1cblxuLmlucHV0LWJhcjpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgJHF1YXJ0ejtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcS1mb2N1cztcbn1cblxuLmhpZGVJdCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmNlcnVsZWFuLXRleHQge1xuICAgIGNvbG9yOiAkZGFyay1jZXJ1bGVhbjtcbn1cblxudGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLmlucHV0LWJveC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlucHV0LWJveCB7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHF1YXJ0ejtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pbnB1dC1uby1zdHlsZSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5wdXQtaGVhZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5pdGVtcy1zZWxlY3RvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgJHF1YXJ0ejtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi50YWItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xufVxuXG4udGFiLXZpZXcge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHF1YXJ0ejtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIC50YWItYm9keSB7XG4gICAgICAgIC5zZWFyY2gtdGlwIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkcXVhcnR6LCAzKTtcbiAgICAgICAgICAgIEBpbmNsdWRlIG5vLXNlbGVjdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50YWJzIHtcbiAgICAgICAgLnRhYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcXVhcnR6O1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDAgOHB4IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNwYWNlZC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAuc2tpbGxzLXdyYXBwZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udG9vbC10aXAtaW5wdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogI2QyZDJkMjtcbn1cblxuLmNsaWVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi50YWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbiAgICBtYXJnaW46IDJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIHotaW5kZXg6IDEwO1xufVxuXG4udG9wLWNvbnRyb2xzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjJweDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICRxdWFydHo7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRxdWFydHo7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBpbnB1dCB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1jZXJ1bGVhbjtcbiAgICB9XG59XG5cbi53cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucmlnaHQtdmlldyB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE4MHB4KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuc3BhY2VkLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmR5bmFtaWMtaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAucmlnaHQtdmlldyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1iYXIge1xuICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA3cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICRxdWFydHo7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRnb2xkZW4tdGFpbm9pO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICRndC1ob3Zlcjtcbn1cblxuOjpuZy1kZWVwIHRhZy1pbnB1dCAubmcyLXRhZy1pbnB1dC5taW5pbWFsLXRoZW1lIHtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC4yNWVtO1xufVxuXG46Om5nLWRlZXAgdGFnLWlucHV0IC5uZzItdGFnLWlucHV0Lm1pbmltYWwtdGhlbWUgdGFnIGRlbGV0ZS1pY29uIHtcbiAgICBwYXRoIHtcbiAgICAgICAgZmlsbDogJGRhcmstY2VydWxlYW4gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbjo6bmctZGVlcCB0YWctaW5wdXQgLm5nMi10YWctaW5wdXQubWluaW1hbC10aGVtZSB7XG4gICAgei1pbmRleDogMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4kbWluaW1hbC10YWctdGhlbWU6IChcbiAgICBiYWNrZ3JvdW5kOiAjZmZmLFxuICAgIGJhY2tncm91bmQtZm9jdXNlZDogJHEtZm9jdXMsXG4gICAgYmFja2dyb3VuZC1hY3RpdmU6ICRxLWZvY3VzLFxuICAgIGJhY2tncm91bmQtaG92ZXI6ICRxLWZvY3VzLFxuICAgIGNvbG9yOiAkZGFyay1jZXJ1bGVhbixcbiAgICBjb2xvci1ob3ZlcjogJGRjLWhvdmVyLFxuICAgIGNvbG9yLWFjdGl2ZTogJGRjLWhvdmVyLFxuICAgIGNvbG9yLWZvY3VzZWQ6ICRkYy1ob3ZlcixcbiAgICBib3JkZXItcmFkaXVzOiA4cHgsXG4pO1xuXG46Om5nLWRlZXAgdGFnLWlucHV0IC5uZzItdGFnLWlucHV0Lm1pbmltYWwtdGhlbWUgdGFnIHtcbiAgICBAaW5jbHVkZSB0YWctdGhlbWUoJG1pbmltYWwtdGFnLXRoZW1lKTtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIiAhaW1wb3J0YW50O1xufVxuXG4ud2FybmluZyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCA0cHggMHB4IDRweDtcbn1cblxuLmFjdGl2aXR5IHtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIjtcbiAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgICAgbWFyZ2luOiA0cHggNXB4IDAgMDtcbiAgICB9XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIG1hcmdpbjogNHB4IDhweCAwIDA7XG4gICAgICAgIGNvbG9yOiAkZGFyay1jZXJ1bGVhbjtcbiAgICB9XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiJGRhcmstY2VydWxlYW46ICMwYjQ4NzA7XG4kcXVhcnR6OiAjZWZlYWY5O1xuJGdvbGRlbi10YWlub2k6ICNmZmJlNTU7XG5cbiRndC1ob3ZlcjogI2ZmYzk3MTtcbiRkYy1ob3ZlcjogIzI5MzE1YTtcbiRkYy1hY3RpdmU6ICMyMTI5NGQ7XG4kcS1mb2N1czogI2ZkZmRmZDtcblxuJGJsdWUtc2hhZG93OiAwcHggNnB4IDE2cHggLTVweCByZ2IoMTMwIDEzMyAyMjYgLyAxMSUpO1xuJGJ1dHRvbi1zaGFkb3c6IDBweCA2cHggMTFweCAtM3B4IHJnYmEoMTkzLCAxNDcsIDcxLCAwLjIpO1xuXG4kZm9udC1ncmV5OiAjNzA3MjdkO1xuJGRlbGV0ZS1yZWQ6ICNlYjYyNjI7XG4iLCJAbWl4aW4gbm8tc2VsZWN0IHtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4iLCJAbWl4aW4gdGFnLWlucHV0LXRoZW1lKCR0aGVtZSkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCB0cmFuc2l0aW9uKTtcblxuICAgIHBhZGRpbmc6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLXBhZGRpbmcnKTtcbiAgICBtaW4taGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1oZWlnaHQnKTtcblxuICAgIGN1cnNvcjogdGV4dDtcblxuICAgIGJvcmRlci1ib3R0b206IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWJvcmRlci1ib3R0b20nKTtcbiAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcbiAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvcmRlci1yYWRpdXMnKTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgIH1cblxuICAgICYubmcyLXRhZy1pbnB1dC0tZHJvcHBpbmcge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuXG4gICAgJi5uZzItdGFnLWlucHV0LS1mb2N1c2VkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItYm9yZGVyLWJvdHRvbS1mb2N1c2VkJyk7XG4gICAgfVxuXG4gICAgJi5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItYm9yZGVyLWJvdHRvbS1pbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgJi5uZzItdGFnLWlucHV0LS1sb2FkaW5nIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgICYubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuXG4gICAgZm9ybSB7XG4gICAgICAgIG1hcmdpbjogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItbWFyZ2luJyk7XG4gICAgfVxuXG4gICAgLm5nMi10YWdzLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG59XG5cbkBtaXhpbiBlcnJvci1tZXNzYWdlKCR0aGVtZSkge1xuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGhlbWUsICdlcnJvci1tZXNzYWdlLWZvbnQtc2l6ZScpO1xuICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2Vycm9yLW1lc3NhZ2UtY29sb3InKTtcbiAgICBtYXJnaW46IG1hcC1nZXQoJHRoZW1lLCAnZXJyb3ItbWVzc2FnZS1tYXJnaW4nKTtcbn1cblxuQG1peGluIHRhZy10aGVtZSgkdGhlbWUpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgZm9udC1mYW1pbHk6IG1hcC1nZXQoJHRoZW1lLCAnZm9udC1mYW1pbHknKTtcbiAgICBmb250LXdlaWdodDogbWFwLWdldCgkdGhlbWUsICdmb250LXdlaWdodCcpO1xuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGhlbWUsICdmb250LXNpemUnKTtcbiAgICBsZXR0ZXItc3BhY2luZzogbWFwLWdldCgkdGhlbWUsICdsZXR0ZXItc3BhY2luZycpO1xuXG4gICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnY29sb3InKTtcbiAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvcmRlci1yYWRpdXMnKTtcblxuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCAndHJhbnNpdGlvbicpO1xuXG4gICAgbWFyZ2luOiBtYXAtZ2V0KCR0aGVtZSwgJ21hcmdpbicpO1xuICAgIHBhZGRpbmc6IG1hcC1nZXQoJHRoZW1lLCAncGFkZGluZycpO1xuXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2hlaWdodCcpO1xuICAgIGxpbmUtaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2xpbmUtaGVpZ2h0Jyk7XG5cbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQnKTtcblxuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3V0bGluZTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtZm9jdXNlZCcpO1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1mb2N1c2VkJyk7XG4gICAgICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJHRoZW1lLCAnYm94LXNoYWRvdycpO1xuICAgIH1cblxuICAgICY6bm90KC5yZWFkb25seSk6bm90KC50YWctLWVkaXRpbmcpOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1hY3RpdmUnKTtcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnY29sb3ItYWN0aXZlJyk7XG4gICAgICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJHRoZW1lLCAnYm94LXNoYWRvdycpO1xuICAgIH1cblxuICAgICY6bm90KDpmb2N1cyk6bm90KC50YWctLWVkaXRpbmcpOm5vdCg6YWN0aXZlKTpub3QoLnJlYWRvbmx5KTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1ob3ZlcicpO1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1ob3ZlcicpO1xuICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcbiAgICB9XG5cbiAgICAmLnJlYWRvbmx5IHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cblxuICAgICYucmVhZG9ubHk6Zm9jdXMsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxuXG4gICAgJi50YWctLWVkaXRpbmcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtZWRpdGluZycpO1xuICAgICAgICBib3JkZXI6IG1hcC1nZXQoJHRoZW1lLCAnYm9yZGVyLWVkaXRpbmcnKTtcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgIH1cbn1cblxuQG1peGluIHRhZy1pbnB1dC1mb3JtLXRoZW1lKCR0aGVtZSkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgYm9yZGVyOiBtYXAtZ2V0KCR0aGVtZSwgJ2lucHV0LWJvcmRlcicpO1xuICAgIHBhZGRpbmc6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtcGFkZGluZycpO1xuICAgIGhlaWdodDogbWFwLWdldCgkdGhlbWUsICdpbnB1dC1oZWlnaHQnKTtcblxuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGhlbWUsICdpbnB1dC1mb250LXNpemUnKTtcbiAgICBmb250LWZhbWlseTogbWFwLWdldCgkdGhlbWUsICdmb250LWZhbWlseScpO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZD10cnVlXSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB9XG59XG5cbkBtaXhpbiBpY29uLXRoZW1lKCR0aGVtZSkge1xuICAgIHdpZHRoOiBtYXAtZ2V0KCR0aGVtZSwgJ3dpZHRoJyk7XG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2hlaWdodCcpO1xuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCAndHJhbnNpdGlvbicpO1xuICAgIGRpc3BsYXk6IG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheScpO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgcGF0aCB7XG4gICAgICAgIGZpbGw6IG1hcC1nZXQoJHRoZW1lLCAnZmlsbCcpO1xuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgIGhlaWdodDogMzRweDtcbiAgICB9XG59XG5cbkBtaXhpbiBpY29uLXRoZW1lLWZvY3VzZWQoJHRoZW1lKSB7XG4gICAgcGF0aCB7XG4gICAgICAgIGZpbGw6IG1hcC1nZXQoJHRoZW1lLCAnZmlsbC1mb2N1cycpO1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-view',
                templateUrl: './projects-view.component.html',
                styleUrls: ['./projects-view.component.scss']
            }]
    }], function () { return [{ type: _core_core_data_skills_skills_service__WEBPACK_IMPORTED_MODULE_6__["SkillsService"] }, { type: _core_core_data_clients_clients_service__WEBPACK_IMPORTED_MODULE_7__["ClientsService"] }, { type: _core_core_data_resources_resources_service__WEBPACK_IMPORTED_MODULE_8__["ResourcesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }, { type: src_app_core_core_data_projects_projects_service__WEBPACK_IMPORTED_MODULE_10__["ProjectsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/projects/projects.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/projects/projects.component.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 2, vars: 0, consts: [[1, "coda-content"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/projects/projects.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/projects/projects.module.ts ***!
  \**************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/main/projects/projects-routing.module.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/main/projects/projects.component.ts");
/* harmony import */ var _projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-view/projects-view.component */ "./src/app/main/projects/projects-view/projects-view.component.ts");
/* harmony import */ var _projects_table_projects_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-table/projects-table.component */ "./src/app/main/projects/projects-table/projects-table.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var angular_mydatepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-mydatepicker */ "./node_modules/angular-mydatepicker/__ivy_ngcc__/fesm2015/angular-mydatepicker.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _project_read_view_project_read_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project-read-view/project-read-view.component */ "./src/app/main/projects/project-read-view/project-read-view.component.ts");














class ProjectsModule {
}
ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectsModule });
ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectsModule_Factory(t) { return new (t || ProjectsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            angular_mydatepicker__WEBPACK_IMPORTED_MODULE_9__["AngularMyDatePickerModule"],
            ngx_chips__WEBPACK_IMPORTED_MODULE_10__["TagInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsModule, { declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], _projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsViewComponent"], _projects_table_projects_table_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsTableComponent"], _project_read_view_project_read_view_component__WEBPACK_IMPORTED_MODULE_12__["ProjectReadViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        angular_mydatepicker__WEBPACK_IMPORTED_MODULE_9__["AngularMyDatePickerModule"],
        ngx_chips__WEBPACK_IMPORTED_MODULE_10__["TagInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]], exports: [_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], _projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsViewComponent"], _projects_table_projects_table_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsTableComponent"], _project_read_view_project_read_view_component__WEBPACK_IMPORTED_MODULE_12__["ProjectReadViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _projects_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProjectsRoutingModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    angular_mydatepicker__WEBPACK_IMPORTED_MODULE_9__["AngularMyDatePickerModule"],
                    ngx_chips__WEBPACK_IMPORTED_MODULE_10__["TagInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ],
                exports: [
                    _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=main-projects-projects-module.js.map