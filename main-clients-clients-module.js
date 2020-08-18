(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-clients-clients-module"],{

/***/ "./src/app/main/clients/client-alter/client-alter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/clients/client-alter/client-alter.component.ts ***!
  \*********************************************************************/
/*! exports provided: ClientAlterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAlterComponent", function() { return ClientAlterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _core_utils_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/utils/validation */ "./src/app/core/utils/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_core_data_skills_skills_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core-data/skills/skills.service */ "./src/app/core/core-data/skills/skills.service.ts");
/* harmony import */ var _core_core_data_clients_clients_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/core-data/clients/clients.service */ "./src/app/core/core-data/clients/clients.service.ts");
/* harmony import */ var _core_core_data_resources_resources_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/core-data/resources/resources.service */ "./src/app/core/core-data/resources/resources.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_core_data_projects_projects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/core-data/projects/projects.service */ "./src/app/core/core-data/projects/projects.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js");













function ClientAlterComponent_div_5_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r1.errors.clientName, ")");
} }
function ClientAlterComponent_div_5_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r2.errors.about, ")");
} }
function ClientAlterComponent_div_5_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r3.errors.projects, ")");
} }
function ClientAlterComponent_div_5_tag_input_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tag-input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientAlterComponent_div_5_tag_input_17_Template_tag_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.clientModel.projects = $event; })("onRemove", function ClientAlterComponent_div_5_tag_input_17_Template_tag_input_onRemove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onProjectRemoved($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.clientModel.projects)("hideForm", true)("identifyBy", "id")("displayBy", "name")("ripple", false);
} }
function ClientAlterComponent_div_5_h1_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search and add projects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientAlterComponent_div_5_div_45_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientAlterComponent_div_5_div_45_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const project_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.addProject(project_r11.id, project_r11.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", project_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r10.plusIcon);
} }
function ClientAlterComponent_div_5_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClientAlterComponent_div_5_div_45_div_2_Template, 6, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.suggestedProjects);
} }
function ClientAlterComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Client Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClientAlterComponent_div_5_span_4_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientAlterComponent_div_5_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.clientModel.clientName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClientAlterComponent_div_5_span_9_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientAlterComponent_div_5_Template_textarea_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.clientModel.about = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Projects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClientAlterComponent_div_5_span_14_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ClientAlterComponent_div_5_tag_input_17_Template, 1, 5, "tag-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ClientAlterComponent_div_5_h1_18_Template, 3, 0, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Client State ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientAlterComponent_div_5_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.activity = $event; })("click", function ClientAlterComponent_div_5_Template_input_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onChangeActivity(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientAlterComponent_div_5_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.activity = $event; })("click", function ClientAlterComponent_div_5_Template_input_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onChangeActivity(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Add projects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ClientAlterComponent_div_5_Template_input_keyup_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onSearchProject($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Enter 3 or more characters to search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ClientAlterComponent_div_5_div_45_Template, 3, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientAlterComponent_div_5_Template_input_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.addClient(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientAlterComponent_div_5_Template_input_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.cancelConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.errors.clientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.clientModel.clientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.errors.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.clientModel.about);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.errors.projects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clientModel.projects.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clientModel.projects.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.activity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.activity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.projectSuggestFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.suggestedProjects && ctx_r0.suggestedProjects.length);
} }
class ClientAlterComponent {
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
        this.suggestedProjects = [{ id: 1, name: 'Hospital Management System' }, { id: 2, name: 'Project Management System' }];
        this.projectSuggestFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        // errors
        this.errors = {
            isValid: false,
            about: '',
            clientName: '',
            projects: '',
        };
        // project state
        this.clientModel = {
            clientName: '',
            about: '',
            isActive: true,
            projects: []
        };
        this.activity = 'Active';
        // edit state
        this.isEditMode = false;
        /**
         * @method preFillFields
         * @description Pre fills all the fields to edit the client
         * @param client The client to be edited
         */
        this.preFillFields = (client) => {
            this.clientModel = {
                clientName: client.clientName,
                about: client.about,
                isActive: client.isActive,
                projects: client.projects.map(project => ({ id: project.projectID, name: project.projectName }))
            };
            this.removeAddedProjects(this.clientModel.projects);
            this.setActivity();
        };
        /**
         * @method setActivity
         * @description sets the activity in the ngModel
         */
        this.setActivity = () => {
            if (this.clientModel.isActive) {
                this.activity = 'Active';
            }
            else {
                this.activity = 'InActive';
            }
        };
        /**
         * @method onChangeActivity
         * @description changes the activity in the client Model
         */
        this.onChangeActivity = (activity) => {
            this.clientModel.isActive = activity;
        };
        /**
         * @param projectname Name of the project to be added
         * @param projectid ID of the project to be added
         */
        this.addProject = (projectid, projectname) => {
            this.clientModel.projects.push({ id: projectid, name: projectname });
            this.removeAddedProjects(this.clientModel.projects);
        };
        /**
         * @description remove all the added projects from suggested projects
         * @param addedProjects Projects alrady added to the client
         * @returns suggestedProjects returns suggested projects with all the added projects removed
         */
        this.removeAddedProjects = (addedProjects) => {
            addedProjects.forEach(addedProject => {
                this.suggestedProjects = this.suggestedProjects.filter(project => project.id !== addedProject.id);
            });
            return this.suggestedProjects;
        };
        /**
         * @description when a project is removed for the client, add it back to suggested project
         * @param project Currently removed project
         */
        this.onProjectRemoved = (project) => {
            this.suggestedProjects.push(project);
        };
        // Will be used with real data instead of mock data
        // /**
        //  * @description suggest a project from the service
        //  */
        // suggestProject = () => {
        //   this.projectSuggestFormControl.valueChanges.pipe(
        //     debounceTime(500),
        //     distinctUntilChanged(),
        //     switchMap(req => {
        //       if (this.projectSuggestFormControl.value.length > 3) {
        //         return this.projectService.getSuggestedProjects(this.projectSuggestFormControl.value);
        //       } else {
        //         return new Observable<Project[]>();
        //       }
        //     })
        //   ).subscribe(res => {
        //      this.suggestedProjects = res;
        //   });
        // }
        /**
         * @description suggest a project from the list of suggested projects
         * @param projectSearched project that is being searched
         */
        this.suggestProject = (projectSearched) => {
            this.suggestedProjects = this.suggestedProjects.filter(suggestedProject => (suggestedProject.name).toLowerCase().match(projectSearched.toLowerCase()));
            this.removeAddedProjects(this.clientModel.projects);
        };
        /**
         * @description this function triggers when a project is searched
         * @param $event To get the target event for the search input
         */
        this.onSearchProject = ($event) => {
            const projectSearched = $event.target.value.trim();
            if (projectSearched.length === 0) {
                // this.getMatchingResources(this.projectModel.requiredSkills);
            }
            else {
                this.suggestProject(projectSearched);
            }
        };
        /**
         * @description confirms the "cancel creating new client" action
         */
        this.cancelConfirm = () => {
            if (confirm('There are unsaved changes, cancel now?')) {
                this.router.navigate(['/clients']);
            }
        };
        /**
         * @description this function converts UI client model to actual request model that has to be sent to server
         */
        this.convertToClientRequestModel = () => {
            const client = {
                clientName: this.clientModel.clientName,
                about: this.clientModel.about,
                projects: [],
                isActive: this.clientModel.isActive
            };
            client.projects = this.clientModel.projects.length ? this.clientModel.projects.map(project => project.id) : [];
            return client;
        };
        /**
         * @description this function handles the add client logic
         */
        this.addClient = () => {
            const client = this.convertToClientRequestModel();
            const validation = Object(_core_utils_validation__WEBPACK_IMPORTED_MODULE_2__["ClientValidation"])(client);
            this.errors = validation;
            if (validation.isValid) {
                if (this.isEditMode) {
                    this.clientService.editClient(client, this.route.snapshot.params.client).subscribe(res => {
                        alert('saved! redirecting to the new client ID');
                        this.router.navigate(['/clients/' + this.route.snapshot.params.client]);
                    });
                }
                else {
                    this.clientService.addClient(client).subscribe((res) => {
                        alert('saved! redirecting to the new client ID');
                        this.router.navigate(['/clients/' + res.clientID]);
                    });
                }
            }
        };
    }
    ngOnInit() {
        // check with the URL if edit or add client mode
        const url = this.route.snapshot.url;
        if (url.length >= 2 && Number(this.route.snapshot.params.client) && url[1].path === 'edit') {
            this.clientService.getClient(this.route.snapshot.params.client).subscribe(res => {
                this.preFillFields(res);
                this.isEditMode = true;
            });
        }
    }
}
ClientAlterComponent.ɵfac = function ClientAlterComponent_Factory(t) { return new (t || ClientAlterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_data_skills_skills_service__WEBPACK_IMPORTED_MODULE_4__["SkillsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_data_clients_clients_service__WEBPACK_IMPORTED_MODULE_5__["ClientsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_data_resources_resources_service__WEBPACK_IMPORTED_MODULE_6__["ResourcesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_core_data_projects_projects_service__WEBPACK_IMPORTED_MODULE_8__["ProjectsService"])); };
ClientAlterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientAlterComponent, selectors: [["app-client-alter"]], decls: 6, vars: 1, consts: [[1, "title-1"], [1, "time-bar"], ["class", "spaced-container", 4, "ngIf"], [1, "spaced-container"], [1, "dynamic-input"], [1, "sub-title-6", "font-grey", "input-head"], ["class", "warning", 4, "ngIf"], ["type", "text", "placeholder", "Enter client name", 1, "input-bar", "sub-title-4", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter description", 1, "input-bar", "sub-title-4", 3, "ngModel", "ngModelChange"], [1, "skills-wrapper"], [1, "skills-container"], ["ngDefaultControl", "", "theme", "minimal-theme", 3, "ngModel", "hideForm", "identifyBy", "displayBy", "ripple", "ngModelChange", "onRemove", 4, "ngIf"], ["class", "sub-title-4 font-grey", 4, "ngIf"], [1, "flex-display", "activity"], ["type", "radio", "id", "activity", "name", "activity", "value", "Active", 3, "ngModel", "ngModelChange", "click"], ["for", "Active"], ["type", "radio", "id", "activity", "name", "activity", "value", "InActive", 3, "ngModel", "ngModelChange", "click"], ["for", "InActive"], [1, "right-view"], [1, "tab-view"], [1, "tabs", "flex-display"], ["rel", "add-projects", 1, "sub-title-6", "tab", "pointer", "cerulean-text", "active"], [1, "time-bar", "tab-container"], ["id", "add-projects", 1, "tab-body"], [1, "top-controls"], [1, "search-bar"], ["type", "text", "placeholder", "Search Projects", 1, "search-input-bar", "sub-title-6", 3, "formControl", "keyup"], [1, "tool-tip-input"], ["class", "projects-wrapper wrapper", 4, "ngIf"], [1, "full-width", "flex-display"], ["type", "button", "value", "Save", 1, "button-xl", "pointer", "sub-title-6", "flex-occupy", 3, "click"], ["type", "button", "value", "Cancel", 1, "button-xl", "pointer", "sub-title-6", "flex-occupy", "warning", 3, "click"], [1, "warning"], ["ngDefaultControl", "", "theme", "minimal-theme", 3, "ngModel", "hideForm", "identifyBy", "displayBy", "ripple", "ngModelChange", "onRemove"], [1, "sub-title-4", "font-grey"], [1, "projects-wrapper", "wrapper"], [1, "project-container"], ["class", " project flex-display", 4, "ngFor", "ngForOf"], [1, "project", "flex-display"], [1, "sub-title-6"], ["type", "button", 1, "add-button", 3, "click"], ["title", "Add Project", 1, "plus-icon", 3, "icon"]], template: function ClientAlterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " New Client ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClientAlterComponent_div_5_Template, 50, 11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", "resourceData.firstName");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], ngx_chips__WEBPACK_IMPORTED_MODULE_10__["TagInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: [".input-bar[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-radius: 8px;\n  outline: none;\n  font-family: Open sans;\n  border: 2px solid #efeaf9;\n  color: #0b4870;\n}\n\n.dynamic-input[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n\n.dynamic-input[_ngcontent-%COMP%]   .client-input[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  background-color: #efeaf9;\n  border-radius: 8px;\n  padding: 5px;\n}\n\n.dynamic-input[_ngcontent-%COMP%]   .client-input[_ngcontent-%COMP%]   .cross-icon[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  color: #eb6262;\n  font-size: 16px;\n  transition: all 0.1s ease-in-out;\n}\n\n.dynamic-input[_ngcontent-%COMP%]   .client-input[_ngcontent-%COMP%]   .cross-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(45deg);\n}\n\n.dynamic-input[_ngcontent-%COMP%]   .resource-wrapper[_ngcontent-%COMP%] {\n  max-height: 150px;\n  background-color: #efeaf9;\n  border-radius: 8px;\n  padding: 5px;\n  overflow: auto;\n}\n\n.dynamic-input[_ngcontent-%COMP%]   .resource-wrapper[_ngcontent-%COMP%]   .resource-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.dynamic-input[_ngcontent-%COMP%]   .resource-wrapper[_ngcontent-%COMP%]   .resource-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: transparent !important;\n}\n\n.project[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.project[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 12px;\n  color: #0b4870;\n  background-color: #efeaf9;\n  border-radius: 4px;\n  transition: all 80ms ease-in-out;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.project[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n  background-color: #e0d6f3;\n}\n\n.project[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.project[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  color: #0b4870;\n  margin-right: 4px;\n  font-size: 12px;\n}\n\n.input-icon[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #ffbe55;\n  height: 100%;\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  border-radius: 8px;\n  color: #fff;\n  margin-left: 10px;\n  border: 2px solid #ffbe55;\n}\n\n.input-icons[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.input-bar[_ngcontent-%COMP%]:hover {\n  background-color: #efeaf9;\n  transition: background-color 0.3s ease;\n  border: 2px solid #efeaf9;\n}\n\n.input-bar[_ngcontent-%COMP%]:focus {\n  border: 2px solid #efeaf9;\n  background-color: #fdfdfd;\n}\n\n.hideIt[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.cerulean-text[_ngcontent-%COMP%] {\n  color: #0b4870;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.input-box-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.input-box[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  border: 1px solid #efeaf9;\n  font-size: 16px;\n}\n\n.input-no-style[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0px;\n  margin: 0px;\n  width: 100%;\n}\n\n.input-head[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  margin-left: 2px;\n}\n\n.items-selector[_ngcontent-%COMP%] {\n  border: 2px solid #efeaf9;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.tab-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  border-radius: 0 0 8px 8px;\n}\n\n.tab-view[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #efeaf9;\n  padding: 10px;\n  margin-bottom: 12px;\n  border-radius: 10px;\n}\n\n.tab-view[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .search-tip[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  margin-bottom: 70px;\n  text-align: center;\n  color: #e6def6;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.tab-view[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  background-color: #efeaf9;\n  padding: 8px 0 8px 0;\n  margin: 0;\n}\n\n.tab-view[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.spaced-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n\n.spaced-container[_ngcontent-%COMP%]   .skills-wrapper[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  max-height: 100px;\n  overflow: auto;\n}\n\n.spaced-container[_ngcontent-%COMP%]   .skills-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: transparent !important;\n}\n\n.tool-tip-input[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  margin-top: -8px;\n  margin-bottom: 15px;\n  color: #d2d2d2;\n}\n\n.client[_ngcontent-%COMP%] {\n  padding-left: 4px;\n}\n\n.tab[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 8px;\n  border-radius: 8px 8px 0px 0px;\n  margin: 2px;\n  width: 100%;\n  text-align: center;\n  margin-bottom: 0px;\n  z-index: 10;\n}\n\n.top-controls[_ngcontent-%COMP%] {\n  width: 100%;\n  align-self: center;\n  margin-top: 22px;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  border: 5px solid #efeaf9;\n  border-radius: 8px;\n  background-color: #efeaf9;\n  padding: 0px;\n  margin: 10px;\n}\n\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #0b4870;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  padding: 3px;\n  margin: 10px;\n  overflow: auto;\n}\n\n.right-view[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin-left: 12px;\n  justify-content: space-between;\n  height: calc(100vh - 180px);\n}\n\n@media only screen and (max-width: 1024px) {\n  .spaced-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .dynamic-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .right-view[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n\n  .search-bar[_ngcontent-%COMP%] {\n    width: -webkit-fill-available;\n  }\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #efeaf9;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ffbe55;\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ffc971;\n}\n\n  tag-input .ng2-tag-input.minimal-theme {\n  padding: 0.25em 0.25em;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag delete-icon path {\n  fill: #0b4870 !important;\n}\n\n  tag-input .ng2-tag-input.minimal-theme {\n  z-index: 0;\n  border-bottom: none;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  color: #0b4870;\n  border-radius: 8px;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n  font-family: \"Open sans\" !important;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag:not(.readonly):not(.tag--editing):focus {\n  background: #fdfdfd;\n  color: #29315a;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag:not(.readonly):not(.tag--editing):active {\n  background: #fdfdfd;\n  color: #29315a;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n  background: #fdfdfd;\n  color: #29315a;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag.readonly {\n  cursor: default;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag.readonly:focus,   tag-input .ng2-tag-input.minimal-theme tag:focus {\n  outline: 0;\n}\n\n  tag-input .ng2-tag-input.minimal-theme tag.tag--editing {\n  cursor: text;\n}\n\n.warning[_ngcontent-%COMP%] {\n  color: white;\n  padding: 0px 4px 0px 4px;\n}\n\n.activity[_ngcontent-%COMP%] {\n  font-family: \"Open sans\";\n  align-items: center;\n}\n\n.activity[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-right: 15px;\n}\n\n.activity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 4px 5px 0 0;\n}\n\n.activity[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 4px 8px 0 0;\n  color: #0b4870;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jbGllbnRzL2NsaWVudC1hbHRlci9jbGllbnQtYWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9uZ3gtY2hpcHMvY29yZS9zdHlsZXMvY29yZS9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNDVlk7QURPaEI7O0FBTUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBSEo7O0FBS0k7RUFDSSw4QkFBQTtFQUNBLHlCQ25CQztFRG9CRCxrQkFBQTtFQUNBLFlBQUE7QUFIUjs7QUFLUTtFQUNJLHdCQUFBO0VBQ0EsY0NiQztFRGNELGVBQUE7RUFDQSxnQ0FBQTtBQUhaOztBQUtZO0VBQ0ksbUNBQUE7QUFIaEI7O0FBUUk7RUFDSSxpQkFBQTtFQUNBLHlCQ3JDQztFRHNDRCxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBTlI7O0FBT1E7RUFDSSxnQkFBQTtBQUxaOztBQU1ZO0VBQ0ksa0NBQUE7QUFKaEI7O0FBVUE7RUFDSSw4QkFBQTtBQVBKOztBQVNJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxjQ3pEUTtFRDBEUix5QkN6REM7RUQwREQsa0JBQUE7RUFDQSxnQ0FBQTtFRTNESiwyQkFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFFQSxpQkFBQTtBRnFESjs7QUFJUTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7QUFGWjs7QUFLUTtFQUNJLGFBQUE7QUFIWjs7QUFNUTtFQUNJLGNDekVJO0VEMEVKLGlCQUFBO0VBQ0EsZUFBQTtBQUpaOztBQVNBO0VBQ0ksYUFBQTtFQUNBLHlCQ2hGWTtFRGlGWixZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFTQTtFQUNJLGtCQUFBO0FBTko7O0FBU0E7RUFDSSx5QkNqR0s7RURrR0wsc0NBQUE7RUFDQSx5QkFBQTtBQU5KOztBQVNBO0VBQ0kseUJBQUE7RUFDQSx5QkNsR007QUQ0RlY7O0FBU0E7RUFDSSxtQkFBQTtBQU5KOztBQVNBO0VBQ0ksY0NqSFk7QUQyR2hCOztBQVNBO0VBQ0ksWUFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7QUFOSjs7QUFTQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFTQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFOSjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFTQTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBTko7O0FBU0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFOSjs7QUFTQTtFQUNJLE9BQUE7RUFDQSx5QkM5Sks7RUQrSkwsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUV4S1IsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7QUZrS0o7O0FBT1E7RUFDSSx5QkMvS0g7RURnTEcsb0JBQUE7RUFDQSxTQUFBO0FBTFo7O0FBTVk7RUFDSSxzQkFBQTtBQUpoQjs7QUFVQTtFQUNJLG1CQUFBO0FBUEo7O0FBU0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVBSOztBQVFRO0VBQ0ksa0NBQUE7QUFOWjs7QUFXQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFSSjs7QUFXQTtFQUNJLGlCQUFBO0FBUko7O0FBV0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFSSjs7QUFXQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUko7O0FBV0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDck9LO0VEc09MLFlBQUE7RUFDQSxZQUFBO0FBUko7O0FBU0k7RUFDSSxjQzFPUTtBRG1PaEI7O0FBV0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFSSjs7QUFXQTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUFSSjs7QUFXQTtFQUNJO0lBQ0ksc0JBQUE7RUFSTjs7RUFXRTtJQUNJLFdBQUE7RUFSTjs7RUFXRTtJQUNJLGdCQUFBO0VBUk47O0VBV0U7SUFDSSw2QkFBQTtFQVJOO0FBQ0Y7O0FBV0E7RUFDSSxVQUFBO0FBVEo7O0FBWUE7RUFDSSxtQkNuUks7QUQwUVQ7O0FBWUE7RUFDSSxtQkN0Ulk7RUR1UlosbUJBQUE7QUFUSjs7QUFZQTtFQUNJLG1CQ3pSTztBRGdSWDs7QUFZQTtFQUNJLHNCQUFBO0FBVEo7O0FBYUk7RUFDSSx3QkFBQTtBQVZSOztBQWNBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBWEo7O0FBMEJBO0VHaFFJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFPQSxjQUFBO0VBQ0Esa0JBQUE7RUFVQSxnQkFBQTtFQUVBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFSHdPQSxtQ0FBQTtBQWJKOztBR3pOSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBSDJOUjs7QUd2Tkk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUh5TlI7O0FHck5JO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FIdU5SOztBR25OSTtFQUNJLGVBQUE7QUhxTlI7O0FHbE5JO0VBRUksVUFBQTtBSG1OUjs7QUdoTkk7RUFHSSxZQUFBO0FIZ05SOztBQUxBO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0FBUUo7O0FBTEE7RUFDSSx3QkFBQTtFQWVBLG1CQUFBO0FBTko7O0FBUkk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7QUFVUjs7QUFQSTtFQUNJLG1CQUFBO0FBU1I7O0FBTkk7RUFDSSxtQkFBQTtFQUNBLGNDbFZRO0FEMFZoQiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2xpZW50cy9jbGllbnQtYWx0ZXIvY2xpZW50LWFsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIn5ub2RlX21vZHVsZXMvbmd4LWNoaXBzL2NvcmUvc3R5bGVzL2NvcmUvX2NvcmUuc2Nzc1wiO1xuXG4uaW5wdXQtYmFyIHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gc2FucztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkcXVhcnR6O1xuICAgIGNvbG9yOiAkZGFyay1jZXJ1bGVhbjtcbn1cblxuLmR5bmFtaWMtaW5wdXQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmNsaWVudC1pbnB1dCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHF1YXJ0ejtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgLmNyb3NzLWljb24ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgY29sb3I6ICRkZWxldGUtcmVkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJlc291cmNlLXdyYXBwZXIge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHF1YXJ0ejtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAucmVzb3VyY2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJvamVjdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmFkZC1idXR0b24ge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICRkYXJrLWNlcnVsZWFuO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcXVhcnR6O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA4MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICBAaW5jbHVkZSBuby1zZWxlY3Q7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRxdWFydHosIDUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgZmEtaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogJGRhcmstY2VydWxlYW47XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmlucHV0LWljb24ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGRlbi10YWlub2k7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkZ29sZGVuLXRhaW5vaTtcbn1cblxuLmlucHV0LWljb25zIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5pbnB1dC1iYXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRxdWFydHo7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gICAgYm9yZGVyOiAycHggc29saWQgJHF1YXJ0ejtcbn1cblxuLmlucHV0LWJhcjpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgJHF1YXJ0ejtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcS1mb2N1cztcbn1cblxuLmhpZGVJdCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmNlcnVsZWFuLXRleHQge1xuICAgIGNvbG9yOiAkZGFyay1jZXJ1bGVhbjtcbn1cblxudGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLmlucHV0LWJveC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlucHV0LWJveCB7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHF1YXJ0ejtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pbnB1dC1uby1zdHlsZSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5wdXQtaGVhZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5pdGVtcy1zZWxlY3RvciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgJHF1YXJ0ejtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi50YWItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xufVxuXG4udGFiLXZpZXcge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHF1YXJ0ejtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIC50YWItYm9keSB7XG4gICAgICAgIC5zZWFyY2gtdGlwIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkcXVhcnR6LCAzKTtcbiAgICAgICAgICAgIEBpbmNsdWRlIG5vLXNlbGVjdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50YWJzIHtcbiAgICAgICAgLnRhYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcXVhcnR6O1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDAgOHB4IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNwYWNlZC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAuc2tpbGxzLXdyYXBwZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udG9vbC10aXAtaW5wdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogI2QyZDJkMjtcbn1cblxuLmNsaWVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi50YWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbiAgICBtYXJnaW46IDJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIHotaW5kZXg6IDEwO1xufVxuXG4udG9wLWNvbnRyb2xzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjJweDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICRxdWFydHo7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRxdWFydHo7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBpbnB1dCB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1jZXJ1bGVhbjtcbiAgICB9XG59XG5cbi53cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucmlnaHQtdmlldyB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE4MHB4KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuc3BhY2VkLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmR5bmFtaWMtaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAucmlnaHQtdmlldyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1iYXIge1xuICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA3cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICRxdWFydHo7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRnb2xkZW4tdGFpbm9pO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICRndC1ob3Zlcjtcbn1cblxuOjpuZy1kZWVwIHRhZy1pbnB1dCAubmcyLXRhZy1pbnB1dC5taW5pbWFsLXRoZW1lIHtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC4yNWVtO1xufVxuXG46Om5nLWRlZXAgdGFnLWlucHV0IC5uZzItdGFnLWlucHV0Lm1pbmltYWwtdGhlbWUgdGFnIGRlbGV0ZS1pY29uIHtcbiAgICBwYXRoIHtcbiAgICAgICAgZmlsbDogJGRhcmstY2VydWxlYW4gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbjo6bmctZGVlcCB0YWctaW5wdXQgLm5nMi10YWctaW5wdXQubWluaW1hbC10aGVtZSB7XG4gICAgei1pbmRleDogMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4kbWluaW1hbC10YWctdGhlbWU6IChcbiAgICBiYWNrZ3JvdW5kOiAjZmZmLFxuICAgIGJhY2tncm91bmQtZm9jdXNlZDogJHEtZm9jdXMsXG4gICAgYmFja2dyb3VuZC1hY3RpdmU6ICRxLWZvY3VzLFxuICAgIGJhY2tncm91bmQtaG92ZXI6ICRxLWZvY3VzLFxuICAgIGNvbG9yOiAkZGFyay1jZXJ1bGVhbixcbiAgICBjb2xvci1ob3ZlcjogJGRjLWhvdmVyLFxuICAgIGNvbG9yLWFjdGl2ZTogJGRjLWhvdmVyLFxuICAgIGNvbG9yLWZvY3VzZWQ6ICRkYy1ob3ZlcixcbiAgICBib3JkZXItcmFkaXVzOiA4cHgsXG4pO1xuXG46Om5nLWRlZXAgdGFnLWlucHV0IC5uZzItdGFnLWlucHV0Lm1pbmltYWwtdGhlbWUgdGFnIHtcbiAgICBAaW5jbHVkZSB0YWctdGhlbWUoJG1pbmltYWwtdGFnLXRoZW1lKTtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIiAhaW1wb3J0YW50O1xufVxuXG4ud2FybmluZyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCA0cHggMHB4IDRweDtcbn1cblxuLmFjdGl2aXR5IHtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIjtcbiAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgICAgbWFyZ2luOiA0cHggNXB4IDAgMDtcbiAgICB9XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIG1hcmdpbjogNHB4IDhweCAwIDA7XG4gICAgICAgIGNvbG9yOiAkZGFyay1jZXJ1bGVhbjtcbiAgICB9XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiJGRhcmstY2VydWxlYW46ICMwYjQ4NzA7XG4kcXVhcnR6OiAjZWZlYWY5O1xuJGdvbGRlbi10YWlub2k6ICNmZmJlNTU7XG5cbiRndC1ob3ZlcjogI2ZmYzk3MTtcbiRkYy1ob3ZlcjogIzI5MzE1YTtcbiRkYy1hY3RpdmU6ICMyMTI5NGQ7XG4kcS1mb2N1czogI2ZkZmRmZDtcblxuJGJsdWUtc2hhZG93OiAwcHggNnB4IDE2cHggLTVweCByZ2IoMTMwIDEzMyAyMjYgLyAxMSUpO1xuJGJ1dHRvbi1zaGFkb3c6IDBweCA2cHggMTFweCAtM3B4IHJnYmEoMTkzLCAxNDcsIDcxLCAwLjIpO1xuXG4kZm9udC1ncmV5OiAjNzA3MjdkO1xuJGRlbGV0ZS1yZWQ6ICNlYjYyNjI7XG4iLCJAbWl4aW4gbm8tc2VsZWN0IHtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4iLCJAbWl4aW4gdGFnLWlucHV0LXRoZW1lKCR0aGVtZSkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCB0cmFuc2l0aW9uKTtcblxuICAgIHBhZGRpbmc6IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLXBhZGRpbmcnKTtcbiAgICBtaW4taGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2NvbnRhaW5lci1oZWlnaHQnKTtcblxuICAgIGN1cnNvcjogdGV4dDtcblxuICAgIGJvcmRlci1ib3R0b206IG1hcC1nZXQoJHRoZW1lLCAnY29udGFpbmVyLWJvcmRlci1ib3R0b20nKTtcbiAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcbiAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvcmRlci1yYWRpdXMnKTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgIH1cblxuICAgICYubmcyLXRhZy1pbnB1dC0tZHJvcHBpbmcge1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuXG4gICAgJi5uZzItdGFnLWlucHV0LS1mb2N1c2VkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItYm9yZGVyLWJvdHRvbS1mb2N1c2VkJyk7XG4gICAgfVxuXG4gICAgJi5uZzItdGFnLWlucHV0LS1pbnZhbGlkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItYm9yZGVyLWJvdHRvbS1pbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgJi5uZzItdGFnLWlucHV0LS1sb2FkaW5nIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgICYubmcyLXRhZy1pbnB1dC0tZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuXG4gICAgZm9ybSB7XG4gICAgICAgIG1hcmdpbjogbWFwLWdldCgkdGhlbWUsICdjb250YWluZXItbWFyZ2luJyk7XG4gICAgfVxuXG4gICAgLm5nMi10YWdzLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG59XG5cbkBtaXhpbiBlcnJvci1tZXNzYWdlKCR0aGVtZSkge1xuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGhlbWUsICdlcnJvci1tZXNzYWdlLWZvbnQtc2l6ZScpO1xuICAgIGNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2Vycm9yLW1lc3NhZ2UtY29sb3InKTtcbiAgICBtYXJnaW46IG1hcC1nZXQoJHRoZW1lLCAnZXJyb3ItbWVzc2FnZS1tYXJnaW4nKTtcbn1cblxuQG1peGluIHRhZy10aGVtZSgkdGhlbWUpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgZm9udC1mYW1pbHk6IG1hcC1nZXQoJHRoZW1lLCAnZm9udC1mYW1pbHknKTtcbiAgICBmb250LXdlaWdodDogbWFwLWdldCgkdGhlbWUsICdmb250LXdlaWdodCcpO1xuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGhlbWUsICdmb250LXNpemUnKTtcbiAgICBsZXR0ZXItc3BhY2luZzogbWFwLWdldCgkdGhlbWUsICdsZXR0ZXItc3BhY2luZycpO1xuXG4gICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnY29sb3InKTtcbiAgICBib3JkZXItcmFkaXVzOiBtYXAtZ2V0KCR0aGVtZSwgJ2JvcmRlci1yYWRpdXMnKTtcblxuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCAndHJhbnNpdGlvbicpO1xuXG4gICAgbWFyZ2luOiBtYXAtZ2V0KCR0aGVtZSwgJ21hcmdpbicpO1xuICAgIHBhZGRpbmc6IG1hcC1nZXQoJHRoZW1lLCAncGFkZGluZycpO1xuXG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2hlaWdodCcpO1xuICAgIGxpbmUtaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2xpbmUtaGVpZ2h0Jyk7XG5cbiAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQnKTtcblxuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3V0bGluZTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpub3QoLnJlYWRvbmx5KTpub3QoLnRhZy0tZWRpdGluZyk6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtZm9jdXNlZCcpO1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1mb2N1c2VkJyk7XG4gICAgICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJHRoZW1lLCAnYm94LXNoYWRvdycpO1xuICAgIH1cblxuICAgICY6bm90KC5yZWFkb25seSk6bm90KC50YWctLWVkaXRpbmcpOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1hY3RpdmUnKTtcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJHRoZW1lLCAnY29sb3ItYWN0aXZlJyk7XG4gICAgICAgIGJveC1zaGFkb3c6IG1hcC1nZXQoJHRoZW1lLCAnYm94LXNoYWRvdycpO1xuICAgIH1cblxuICAgICY6bm90KDpmb2N1cyk6bm90KC50YWctLWVkaXRpbmcpOm5vdCg6YWN0aXZlKTpub3QoLnJlYWRvbmx5KTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCAnYmFja2dyb3VuZC1ob3ZlcicpO1xuICAgICAgICBjb2xvcjogbWFwLWdldCgkdGhlbWUsICdjb2xvci1ob3ZlcicpO1xuICAgICAgICBib3gtc2hhZG93OiBtYXAtZ2V0KCR0aGVtZSwgJ2JveC1zaGFkb3cnKTtcbiAgICB9XG5cbiAgICAmLnJlYWRvbmx5IHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cblxuICAgICYucmVhZG9ubHk6Zm9jdXMsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxuXG4gICAgJi50YWctLWVkaXRpbmcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCR0aGVtZSwgJ2JhY2tncm91bmQtZWRpdGluZycpO1xuICAgICAgICBib3JkZXI6IG1hcC1nZXQoJHRoZW1lLCAnYm9yZGVyLWVkaXRpbmcnKTtcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgIH1cbn1cblxuQG1peGluIHRhZy1pbnB1dC1mb3JtLXRoZW1lKCR0aGVtZSkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgYm9yZGVyOiBtYXAtZ2V0KCR0aGVtZSwgJ2lucHV0LWJvcmRlcicpO1xuICAgIHBhZGRpbmc6IG1hcC1nZXQoJHRoZW1lLCAnaW5wdXQtcGFkZGluZycpO1xuICAgIGhlaWdodDogbWFwLWdldCgkdGhlbWUsICdpbnB1dC1oZWlnaHQnKTtcblxuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGhlbWUsICdpbnB1dC1mb250LXNpemUnKTtcbiAgICBmb250LWZhbWlseTogbWFwLWdldCgkdGhlbWUsICdmb250LWZhbWlseScpO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZD10cnVlXSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB9XG59XG5cbkBtaXhpbiBpY29uLXRoZW1lKCR0aGVtZSkge1xuICAgIHdpZHRoOiBtYXAtZ2V0KCR0aGVtZSwgJ3dpZHRoJyk7XG4gICAgaGVpZ2h0OiBtYXAtZ2V0KCR0aGVtZSwgJ2hlaWdodCcpO1xuICAgIHRyYW5zaXRpb246IG1hcC1nZXQoJHRoZW1lLCAndHJhbnNpdGlvbicpO1xuICAgIGRpc3BsYXk6IG1hcC1nZXQoJHRoZW1lLCAnZGlzcGxheScpO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgcGF0aCB7XG4gICAgICAgIGZpbGw6IG1hcC1nZXQoJHRoZW1lLCAnZmlsbCcpO1xuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgIGhlaWdodDogMzRweDtcbiAgICB9XG59XG5cbkBtaXhpbiBpY29uLXRoZW1lLWZvY3VzZWQoJHRoZW1lKSB7XG4gICAgcGF0aCB7XG4gICAgICAgIGZpbGw6IG1hcC1nZXQoJHRoZW1lLCAnZmlsbC1mb2N1cycpO1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientAlterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-alter',
                templateUrl: './client-alter.component.html',
                styleUrls: ['./client-alter.component.scss']
            }]
    }], function () { return [{ type: _core_core_data_skills_skills_service__WEBPACK_IMPORTED_MODULE_4__["SkillsService"] }, { type: _core_core_data_clients_clients_service__WEBPACK_IMPORTED_MODULE_5__["ClientsService"] }, { type: _core_core_data_resources_resources_service__WEBPACK_IMPORTED_MODULE_6__["ResourcesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: src_app_core_core_data_projects_projects_service__WEBPACK_IMPORTED_MODULE_8__["ProjectsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/clients/client-view/client-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/clients/client-view/client-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClientViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientViewComponent", function() { return ClientViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_core_data_clients_clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/core-data/clients/clients.service */ "./src/app/core/core-data/clients/clients.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/loader/loader.component */ "./src/app/shared/loader/loader.component.ts");






function ClientViewComponent_ng_container_0_h1_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r3.projectName, " ");
} }
function ClientViewComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientViewComponent_ng_container_0_Template_input_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editRedirect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientViewComponent_ng_container_0_Template_input_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Projects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ClientViewComponent_ng_container_0_h1_32_Template, 2, 1, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Client: ", ctx_r0.client.clientName, " #", ctx_r0.client.clientID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.client.clientID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.client.clientName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.client.about, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.client.projects);
} }
function ClientViewComponent_app_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class ClientViewComponent {
    constructor(route, clientsService, router) {
        this.route = route;
        this.clientsService = clientsService;
        this.router = router;
        // state
        this.fetching = true;
        /**
         * @method deleteConfirm
         * @description confirms with user before deleting
         */
        this.deleteConfirm = () => {
            if (confirm('Are you sure? Deleting cannot be undone!')) {
                this.clientsService.deleteClient(this.route.snapshot.params.client).subscribe(res => {
                    this.router.navigate(['/clients']);
                });
            }
        };
        /**
         * @method editRedirect
         * @description redirects to the edit page for that client
         */
        this.editRedirect = () => {
            this.router.navigate(['/clients/' + this.route.snapshot.params.client + '/edit']);
        };
    }
    ngOnInit() {
        this.fetching = true;
        this.clientsService.getClient(this.route.snapshot.params.client).subscribe(res => {
            this.fetching = false;
            this.client = res;
        });
    }
}
ClientViewComponent.ɵfac = function ClientViewComponent_Factory(t) { return new (t || ClientViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_data_clients_clients_service__WEBPACK_IMPORTED_MODULE_2__["ClientsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ClientViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientViewComponent, selectors: [["app-client-view"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "title-1"], [1, "time-bar"], [1, "spaced-container"], [1, "flex-pad"], [1, "profile-container"], [1, "sub-title-2"], [1, "font-grey"], [1, "flex-display"], ["type", "button", "value", "Edit", 1, "button-xl", "pointer", "sub-title-6", 3, "click"], ["type", "button", "value", "Delete", 1, "button-xl", "pointer", "sub-title-6", "warning", 3, "click"], [1, "projects-wrapper"], [1, "project-container"], ["class", "sub-title-4 project", 4, "ngFor", "ngForOf"], [1, "sub-title-4", "project"]], template: function ClientViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ClientViewComponent_ng_container_0_Template, 33, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientViewComponent_app_loader_1_Template, 1, 0, "app-loader", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.client);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fetching);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #efeaf9;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ffbe55;\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #ffc971;\n}\n\n.flex-pad[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n}\n\n.profile-picture[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 100px;\n}\n\n.profile-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 70%;\n}\n\n.flex-display[_ngcontent-%COMP%] {\n  width: 20%;\n  margin-left: auto;\n  flex-direction: column;\n  justify-content: center;\n}\n\n@media only screen and (max-width: 1024px) {\n  .flex-pad[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .flex-pad[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n  .flex-pad[_ngcontent-%COMP%]   .profile-container[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    padding-left: 0px;\n    text-align: center;\n  }\n\n  .flex-display[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .flex-display[_ngcontent-%COMP%]   .button-xl[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jbGllbnRzL2NsaWVudC12aWV3L2NsaWVudC12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFVBQUE7QUFESjs7QUFJQTtFQUNJLG1CQ05LO0FES1Q7O0FBSUE7RUFDSSxtQkNUWTtFRFVaLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxtQkNaTztBRFdYOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EsbUJBQUE7RUFETjtFQUdNO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUFEVjtFQUlNO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBRlY7O0VBTUU7SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQUhOO0VBS007SUFDSSxVQUFBO0VBSFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2xpZW50cy9jbGllbnQtdmlldy9jbGllbnQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDdweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJHF1YXJ0ejtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGdvbGRlbi10YWlub2k7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJGd0LWhvdmVyO1xufVxuXG4uZmxleC1wYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5wcm9maWxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbi5mbGV4LWRpc3BsYXkge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuZmxleC1wYWQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9maWxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZsZXgtZGlzcGxheSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuYnV0dG9uLXhsIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkZGFyay1jZXJ1bGVhbjogIzBiNDg3MDtcbiRxdWFydHo6ICNlZmVhZjk7XG4kZ29sZGVuLXRhaW5vaTogI2ZmYmU1NTtcblxuJGd0LWhvdmVyOiAjZmZjOTcxO1xuJGRjLWhvdmVyOiAjMjkzMTVhO1xuJGRjLWFjdGl2ZTogIzIxMjk0ZDtcbiRxLWZvY3VzOiAjZmRmZGZkO1xuXG4kYmx1ZS1zaGFkb3c6IDBweCA2cHggMTZweCAtNXB4IHJnYigxMzAgMTMzIDIyNiAvIDExJSk7XG4kYnV0dG9uLXNoYWRvdzogMHB4IDZweCAxMXB4IC0zcHggcmdiYSgxOTMsIDE0NywgNzEsIDAuMik7XG5cbiRmb250LWdyZXk6ICM3MDcyN2Q7XG4kZGVsZXRlLXJlZDogI2ViNjI2MjtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-view',
                templateUrl: './client-view.component.html',
                styleUrls: ['./client-view.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _core_core_data_clients_clients_service__WEBPACK_IMPORTED_MODULE_2__["ClientsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/clients/clients-card/clients-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/clients/clients-card/clients-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: ClientsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsCardComponent", function() { return ClientsCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _core_core_data_clients_clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/core-data/clients/clients.service */ "./src/app/core/core-data/clients/clients.service.ts");
/* harmony import */ var src_app_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pagination/pagination.service */ "./src/app/core/pagination/pagination.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/loader/loader.component */ "./src/app/shared/loader/loader.component.ts");











function ClientsCardComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r6, " ");
} }
function ClientsCardComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const count_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", count_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", count_r7, " ");
} }
function ClientsCardComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r8, " ");
} }
function ClientsCardComponent_div_29_app_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 18);
} if (rf & 2) {
    const client_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", client_r10.clientID)("title", client_r10.clientName)("icon", client_r10.icon);
} }
const _c0 = function (a1, a2, a3) { return { id: "client-pagination", itemsPerPage: a1, currentPage: a2, totalItems: a3 }; };
function ClientsCardComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientsCardComponent_div_29_app_card_1_Template, 1, 3, "app-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r3.clientsUIModel, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx_r3.retrievePageState.itemsCount, ctx_r3.retrievePageState.pageNumber, ctx_r3.totalItems)));
} }
function ClientsCardComponent_app_loader_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
function ClientsCardComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No records found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ClientsCardComponent {
    constructor(clientService, paginationService) {
        this.clientService = clientService;
        this.paginationService = paginationService;
        // icons for display
        this.downIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretSquareDown"];
        this.leftIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretSquareLeft"];
        this.expandedIndex = -1;
        this.clientsUIModel = [];
        this.fetching = true;
        // pagination state
        this.countOptions = [10, 20, 40];
        this.sortOptions = ['Client ID', 'Client Name'];
        this.activeOptions = ['All', 'Active', 'Inactive'];
        this.totalItems = 30;
        this.getClientsList = () => {
            this.fetching = true;
            this.clientService.getClients(this.retrievePageState.pageNumber, this.retrievePageState.itemsCount, this.retrievePageState.sortOptions, this.retrievePageState.activeOptions)
                .subscribe(clients => {
                this.fetching = false;
                const clientsModel = [];
                clients.result.forEach(client => {
                    clientsModel.push(this.prepareClientUIModel(client));
                });
                this.totalItems = clients.totalPages * this.retrievePageState.itemsCount;
                this.clientsUIModel = clientsModel;
                this.clients = clients.result;
            }, error => {
                this.fetching = false;
                this.clientsUIModel = [];
            });
        };
        this.prepareClientUIModel = (client) => {
            const clientUIModel = {
                clientID: client.clientID,
                clientName: client.clientName,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUsers"]
            };
            return clientUIModel;
        };
        /**
         * @method changePage
         * @description Changes page number in pagination
         * @param num Page number
         */
        this.changePage = (num) => {
            this.changePageState({
                id: 'client-pagination', pageNumber: num, itemsCount: this.retrievePageState.itemsCount,
                sortOptions: this.retrievePageState.sortOptions, activeOptions: this.retrievePageState.activeOptions
            });
            this.getClientsList();
        };
        /**
         * @method changeItemsCount
         * @description Changes the number of items displayed in per page
         * @param num Items count
         */
        this.changeItemsCount = (num) => {
            this.changePageState({
                id: 'client-pagination', pageNumber: 1, itemsCount: num, sortOptions: this.retrievePageState.sortOptions,
                activeOptions: this.retrievePageState.activeOptions
            });
            this.getClientsList();
        };
        /**
         * @method changeSortOption
         * @description Changes sorting option for the items displayed
         * @param option Sorting format option
         */
        this.changeSortOption = (option) => {
            this.changePageState({
                id: 'client-pagination', pageNumber: 1, itemsCount: this.retrievePageState.itemsCount,
                sortOptions: option, activeOptions: this.retrievePageState.activeOptions
            });
            this.getClientsList();
        };
        /**
         * @method changeActiveOption
         * @description Changes active option for the items displayed
         * @param option active format option
         */
        this.changeActiveOption = (option) => {
            this.changePageState({
                id: 'client-pagination', pageNumber: 1, itemsCount: this.retrievePageState.itemsCount,
                sortOptions: this.retrievePageState.sortOptions, activeOptions: option
            });
            this.getClientsList();
        };
        /**
         * @method changePageState
         * @description Changes the state of pagination in service
         */
        this.changePageState = (pageState) => {
            this.paginationService.setClientsPageState(pageState);
        };
    }
    ngOnInit() {
        this.getClientsList();
    }
    /**
     * @method retrievePageState
     * @description Gets the current pagination state
     */
    get retrievePageState() {
        return this.paginationService.clientPageState;
    }
}
ClientsCardComponent.ɵfac = function ClientsCardComponent_Factory(t) { return new (t || ClientsCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_data_clients_clients_service__WEBPACK_IMPORTED_MODULE_2__["ClientsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"])); };
ClientsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsCardComponent, selectors: [["app-clients-card"]], decls: 36, vars: 10, consts: [[1, "top-controls"], [1, "title-1"], [1, "search-bar"], ["type", "text", "placeholder", "Search clients", 1, "search-input-bar", "sub-title-6"], ["type", "button", "value", "Search", 1, "button-search", "pointer"], [1, "flex-display"], [1, "items-selector"], [1, "sub-title-6", "font-grey"], [1, "drop-down", "sub-title-6", 3, "ngModel", "ngModelChange"], ["class", "drop-option", 3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "stack-row", 4, "ngIf"], ["id", "client-pagination", 1, "sub-title-6", "text-centered", 3, "pageChange"], [4, "ngIf"], ["class", "no-records sub-title-6 text-centered", 4, "ngIf"], ["type", "button", "value", "Add Client", 1, "button-xl", "right-float", "pointer", "sub-title-6", 3, "routerLink"], [1, "drop-option", 3, "ngValue"], [1, "stack-row"], ["class", "appcard", 3, "routerLink", "title", "icon", 4, "ngFor", "ngForOf"], [1, "appcard", 3, "routerLink", "title", "icon"], [1, "no-records", "sub-title-6", "text-centered"]], template: function ClientsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Clients ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientsCardComponent_Template_select_ngModelChange_12_listener($event) { return ctx.changeSortOption($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClientsCardComponent_option_13_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Items \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientsCardComponent_Template_select_ngModelChange_18_listener($event) { return ctx.changeItemsCount($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClientsCardComponent_option_19_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Show \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientsCardComponent_Template_select_ngModelChange_24_listener($event) { return ctx.changeActiveOption($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ClientsCardComponent_option_25_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ClientsCardComponent_div_29_Template, 3, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "pagination-controls", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ClientsCardComponent_Template_pagination_controls_pageChange_30_listener($event) { return ctx.changePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ClientsCardComponent_app_loader_31_Template, 1, 0, "app-loader", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ClientsCardComponent_div_32_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fetching && ctx.clientsUIModel.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fetching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.clientsUIModel.length && !ctx.fetching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "add");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _shared_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]], styles: [".right-float[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.stack-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n}\n\n.appcard[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 25px;\n  box-sizing: border-box;\n  overflow: hidden;\n  flex-basis: 33%;\n}\n\n.appcard[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.appcard[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  box-shadow: none !important;\n}\n\n@media only screen and (max-width: 1024px) {\n  .stack-row[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    flex-wrap: wrap;\n  }\n\n  .appcard[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jbGllbnRzL2NsaWVudHMtY2FyZC9jbGllbnRzLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGlDQUFBO0lBQ0EsZUFBQTtFQUNOOztFQUVFO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VBQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2xpZW50cy9jbGllbnRzLWNhcmQvY2xpZW50cy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0LWZsb2F0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zdGFjay1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5hcHBjYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZsZXgtYmFzaXM6IDMzJTtcbn1cblxuLmFwcGNhcmQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFwcGNhcmQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLnN0YWNrLXJvdyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIC5hcHBjYXJkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients-card',
                templateUrl: './clients-card.component.html',
                styleUrls: ['./clients-card.component.scss']
            }]
    }], function () { return [{ type: _core_core_data_clients_clients_service__WEBPACK_IMPORTED_MODULE_2__["ClientsService"] }, { type: src_app_core_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/clients/clients-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/main/clients/clients-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ClientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsRoutingModule", function() { return ClientsRoutingModule; });
/* harmony import */ var _client_alter_client_alter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-alter/client-alter.component */ "./src/app/main/clients/client-alter/client-alter.component.ts");
/* harmony import */ var _client_view_client_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-view/client-view.component */ "./src/app/main/clients/client-view/client-view.component.ts");
/* harmony import */ var _clients_card_clients_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients-card/clients-card.component */ "./src/app/main/clients/clients-card/clients-card.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients.component */ "./src/app/main/clients/clients.component.ts");








const routes = [
    {
        path: '', component: _clients_component__WEBPACK_IMPORTED_MODULE_5__["ClientsComponent"],
        children: [
            {
                path: '', component: _clients_card_clients_card_component__WEBPACK_IMPORTED_MODULE_2__["ClientsCardComponent"]
            },
            {
                path: 'add',
                component: _client_alter_client_alter_component__WEBPACK_IMPORTED_MODULE_0__["ClientAlterComponent"]
            },
            {
                path: ':client',
                component: _client_view_client_view_component__WEBPACK_IMPORTED_MODULE_1__["ClientViewComponent"]
            },
            {
                path: ':client/edit',
                component: _client_alter_client_alter_component__WEBPACK_IMPORTED_MODULE_0__["ClientAlterComponent"]
            }
        ]
    }
];
class ClientsRoutingModule {
}
ClientsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ClientsRoutingModule });
ClientsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ClientsRoutingModule_Factory(t) { return new (t || ClientsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ClientsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ClientsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/clients/clients.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/clients/clients.component.ts ***!
  \***************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ClientsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClientsComponent.ɵfac = function ClientsComponent_Factory(t) { return new (t || ClientsComponent)(); };
ClientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsComponent, selectors: [["app-clients"]], decls: 2, vars: 0, consts: [[1, "coda-content"]], template: function ClientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients',
                templateUrl: './clients.component.html',
                styleUrls: ['./clients.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/clients/clients.module.ts":
/*!************************************************!*\
  !*** ./src/app/main/clients/clients.module.ts ***!
  \************************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients-routing.module */ "./src/app/main/clients/clients-routing.module.ts");
/* harmony import */ var _clients_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients.component */ "./src/app/main/clients/clients.component.ts");
/* harmony import */ var _clients_card_clients_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clients-card/clients-card.component */ "./src/app/main/clients/clients-card/clients-card.component.ts");
/* harmony import */ var _client_view_client_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-view/client-view.component */ "./src/app/main/clients/client-view/client-view.component.ts");
/* harmony import */ var _client_alter_client_alter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client-alter/client-alter.component */ "./src/app/main/clients/client-alter/client-alter.component.ts");












class ClientsModule {
}
ClientsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClientsModule });
ClientsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClientsModule_Factory(t) { return new (t || ClientsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _clients_routing_module__WEBPACK_IMPORTED_MODULE_6__["ClientsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
            ngx_chips__WEBPACK_IMPORTED_MODULE_4__["TagInputModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientsModule, { declarations: [_clients_component__WEBPACK_IMPORTED_MODULE_7__["ClientsComponent"], _clients_card_clients_card_component__WEBPACK_IMPORTED_MODULE_8__["ClientsCardComponent"], _client_view_client_view_component__WEBPACK_IMPORTED_MODULE_9__["ClientViewComponent"], _client_alter_client_alter_component__WEBPACK_IMPORTED_MODULE_10__["ClientAlterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _clients_routing_module__WEBPACK_IMPORTED_MODULE_6__["ClientsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
        ngx_chips__WEBPACK_IMPORTED_MODULE_4__["TagInputModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]], exports: [_clients_component__WEBPACK_IMPORTED_MODULE_7__["ClientsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_clients_component__WEBPACK_IMPORTED_MODULE_7__["ClientsComponent"], _clients_card_clients_card_component__WEBPACK_IMPORTED_MODULE_8__["ClientsCardComponent"], _client_view_client_view_component__WEBPACK_IMPORTED_MODULE_9__["ClientViewComponent"], _client_alter_client_alter_component__WEBPACK_IMPORTED_MODULE_10__["ClientAlterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _clients_routing_module__WEBPACK_IMPORTED_MODULE_6__["ClientsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                    ngx_chips__WEBPACK_IMPORTED_MODULE_4__["TagInputModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ],
                exports: [
                    _clients_component__WEBPACK_IMPORTED_MODULE_7__["ClientsComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=main-clients-clients-module.js.map