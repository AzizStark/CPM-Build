(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/not-found/not-found.component */ "./src/app/main/not-found/not-found.component.ts");





// angular routing for multiple views
const routes = [
    { path: '', loadChildren: () => Promise.all(/*! import() | main-dashboard-dashboard-module */[__webpack_require__.e("default~main-clients-clients-module~main-dashboard-dashboard-module~main-projects-projects-module~ma~2639cc16"), __webpack_require__.e("main-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./main/dashboard/dashboard.module */ "./src/app/main/dashboard/dashboard.module.ts")).then(m => m.DashboardModule), },
    { path: 'clients', loadChildren: () => Promise.all(/*! import() | main-clients-clients-module */[__webpack_require__.e("default~main-clients-clients-module~main-dashboard-dashboard-module~main-projects-projects-module~ma~2639cc16"), __webpack_require__.e("default~main-clients-clients-module~main-projects-projects-module~main-resources-resources-module~ma~9b4ca8e5"), __webpack_require__.e("default~main-clients-clients-module~main-projects-projects-module~main-skills-skills-module"), __webpack_require__.e("common"), __webpack_require__.e("main-clients-clients-module")]).then(__webpack_require__.bind(null, /*! ./main/clients/clients.module */ "./src/app/main/clients/clients.module.ts")).then(m => m.ClientsModule), },
    { path: 'projects', loadChildren: () => Promise.all(/*! import() | main-projects-projects-module */[__webpack_require__.e("default~main-clients-clients-module~main-dashboard-dashboard-module~main-projects-projects-module~ma~2639cc16"), __webpack_require__.e("default~main-clients-clients-module~main-projects-projects-module~main-resources-resources-module~ma~9b4ca8e5"), __webpack_require__.e("default~main-clients-clients-module~main-projects-projects-module~main-skills-skills-module"), __webpack_require__.e("common"), __webpack_require__.e("main-projects-projects-module")]).then(__webpack_require__.bind(null, /*! ./main/projects/projects.module */ "./src/app/main/projects/projects.module.ts")).then(m => m.ProjectsModule), },
    { path: 'resources', loadChildren: () => Promise.all(/*! import() | main-resources-resources-module */[__webpack_require__.e("default~main-clients-clients-module~main-dashboard-dashboard-module~main-projects-projects-module~ma~2639cc16"), __webpack_require__.e("default~main-clients-clients-module~main-projects-projects-module~main-resources-resources-module~ma~9b4ca8e5"), __webpack_require__.e("common"), __webpack_require__.e("main-resources-resources-module")]).then(__webpack_require__.bind(null, /*! ./main/resources/resources.module */ "./src/app/main/resources/resources.module.ts")).then(m => m.ResourcesModule), },
    { path: 'skills', loadChildren: () => Promise.all(/*! import() | main-skills-skills-module */[__webpack_require__.e("default~main-clients-clients-module~main-dashboard-dashboard-module~main-projects-projects-module~ma~2639cc16"), __webpack_require__.e("default~main-clients-clients-module~main-projects-projects-module~main-resources-resources-module~ma~9b4ca8e5"), __webpack_require__.e("default~main-clients-clients-module~main-projects-projects-module~main-skills-skills-module"), __webpack_require__.e("main-skills-skills-module")]).then(__webpack_require__.bind(null, /*! ./main/skills/skills.module */ "./src/app/main/skills/skills.module.ts")).then(m => m.SkillsModule), },
    { path: '404', component: _main_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/sidebar/sidebar.service */ "./src/app/core/sidebar/sidebar.service.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/leftbar/leftbar.component */ "./src/app/shared/leftbar/leftbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const _c0 = function (a0) { return { "box-container-flex": a0 }; };
class AppComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.title = 'coda-project-management';
    }
    /**
     * @method isSidebarVisible
     * @description To know the status of the side bar
     */
    get isSidebarVisible() {
        return this.sidebarService.isSidebarVisible;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 3, consts: [[1, "main-container"], [1, "box-container", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-leftbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isSidebarVisible));
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _shared_leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_3__["LeftbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  display: flex;\n  min-height: calc(100% - 60px);\n}\n\n.box-container[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: all 0.2s linear;\n}\n\n@media only screen and (min-width: 1025px) {\n  .box-container-flex[_ngcontent-%COMP%] {\n    margin-left: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEpBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVFO0VBQ0UsU0FBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVFO0VBQ0U7SUFDRSxrQkFBQTtFQUNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAubWFpbi1jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICB9XG5cbiAgLmJveC1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgICAuYm94LWNvbnRhaW5lci1mbGV4e1xuICAgICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xuICAgIH1cbiAgfVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: src_app_core_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _interceptor_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptor/httpconfig.interceptor */ "./src/app/interceptor/httpconfig.interceptor.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptor_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_8__["HttpConfigInterceptor"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ],
                providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptor_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_8__["HttpConfigInterceptor"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/sidebar/sidebar.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.service.ts ***!
  \*************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class SidebarService {
    constructor() {
        this.isSidebarVisible = true;
        this.sidebarVisibilityChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.toggleSidebarVisibility = () => {
            this.sidebarVisibilityChange.next(!this.isSidebarVisible);
        };
        this.sidebarVisibilityChange.subscribe((value) => {
            this.isSidebarVisible = value;
        });
    }
}
SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(); };
SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/interceptor/httpconfig.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/interceptor/httpconfig.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: HttpConfigInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function() { return HttpConfigInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



class HttpConfigInterceptor {
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((event) => {
            // if (event instanceof HttpResponse) {
            // console.log('event--->>>', event);
            // }
            return event;
        }));
    }
}
HttpConfigInterceptor.ɵfac = function HttpConfigInterceptor_Factory(t) { return new (t || HttpConfigInterceptor)(); };
HttpConfigInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpConfigInterceptor, factory: HttpConfigInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpConfigInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/not-found/not-found.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/not-found/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 6, vars: 0, consts: [[1, "text-centered", "not-found"], ["href", "/"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ":(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Whoops! The page you've requested does not exist, return back to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");



class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { title: "title", count: "count", icon: "icon" }, decls: 9, vars: 3, consts: [[1, "card-lg"], [1, "card-icon", 3, "icon"], [1, "card-container"], [1, "sub-title-2"], [1, "sub-title-2", "numtext-color"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.count, " ");
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FaIconComponent"]], styles: ["@media only screen and (max-width: 1024px) {\n  .card-lg[_ngcontent-%COMP%] {\n    margin-right: 0px !important;\n    padding: 20px !important;\n  }\n}\n.card-lg[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 30px;\n  border-radius: 10px;\n  color: #0b4870;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  margin-right: 16px;\n  box-shadow: 0px 6px 16px -5px rgba(130, 133, 226, 0.11);\n}\n.card-icon[_ngcontent-%COMP%] {\n  color: #ffbe55;\n  align-self: center;\n  padding-right: 30px;\n  font-size: calc(3vh + 2vw);\n  display: flex;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.numtext-color[_ngcontent-%COMP%] {\n  color: #70727d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSTtJQUNJLDRCQUFBO0lBQ0Esd0JBQUE7RUFETjtBQUNGO0FBSUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNDYlk7RURjWixhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1RENWVTtBRFFkO0FBS0E7RUFDSSxjQ3JCWTtFRHNCWixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0FBRko7QUFLQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRko7QUFLQTtFQUNJLGNDekJRO0FEdUJaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmNhcmQtbGcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uY2FyZC1sZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiAkZGFyay1jZXJ1bGVhbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBib3gtc2hhZG93OiAkYmx1ZS1zaGFkb3c7XG59XG5cbi5jYXJkLWljb24ge1xuICAgIGNvbG9yOiAkZ29sZGVuLXRhaW5vaTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IGNhbGMoM3ZoICsgMnZ3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm51bXRleHQtY29sb3J7XG4gICAgY29sb3I6ICRmb250LWdyZXk7XG59IiwiJGRhcmstY2VydWxlYW46ICMwYjQ4NzA7XG4kcXVhcnR6OiAjZWZlYWY5O1xuJGdvbGRlbi10YWlub2k6ICNmZmJlNTU7XG5cbiRndC1ob3ZlcjogI2ZmYzk3MTtcbiRkYy1ob3ZlcjogIzI5MzE1YTtcbiRkYy1hY3RpdmU6ICMyMTI5NGQ7XG4kcS1mb2N1czogI2ZkZmRmZDtcblxuJGJsdWUtc2hhZG93OiAwcHggNnB4IDE2cHggLTVweCByZ2IoMTMwIDEzMyAyMjYgLyAxMSUpO1xuJGJ1dHRvbi1zaGFkb3c6IDBweCA2cHggMTFweCAtM3B4IHJnYmEoMTkzLCAxNDcsIDcxLCAwLjIpO1xuXG4kZm9udC1ncmV5OiAjNzA3MjdkO1xuJGRlbGV0ZS1yZWQ6ICNlYjYyNjI7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/leftbar/leftbar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/leftbar/leftbar.component.ts ***!
  \*****************************************************/
/*! exports provided: LeftbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftbarComponent", function() { return LeftbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_core_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/sidebar/sidebar.service */ "./src/app/core/sidebar/sidebar.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");







const _c0 = function (a0) { return { "slide-out-left": a0 }; };
const _c1 = function () { return { exact: true }; };
class LeftbarComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.icons = [_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTh"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faThList"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUsersCog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserFriends"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaptopCode"]];
        this.scrolltop = () => {
            window.scrollTo(0, 0);
        };
    }
    ngOnInit() {
    }
    get isSidebarVisible() {
        return this.sidebarService.isSidebarVisible;
    }
}
LeftbarComponent.ɵfac = function LeftbarComponent_Factory(t) { return new (t || LeftbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"])); };
LeftbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftbarComponent, selectors: [["app-leftbar"]], decls: 16, vars: 10, consts: [[1, "sidenav", "slide-in-left", 3, "ngClass"], ["routerLink", "/", "routerLinkActive", "tab-active", 3, "routerLinkActiveOptions", "click"], [2, "margin-left", "4px", 3, "icon"], ["routerLink", "/projects", "routerLinkActive", "tab-active", 3, "click"], [2, "margin-left", "4px", "margin-right", "1px", 3, "icon"], ["routerLink", "/resources", "routerLinkActive", "tab-active", 3, "click"], [3, "icon"], ["routerLink", "/clients", "routerLinkActive", "tab-active", 3, "click"], ["routerLink", "/skills", "routerLinkActive", "tab-active", 3, "click"]], template: function LeftbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftbarComponent_Template_a_click_1_listener() { return ctx.scrolltop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0\u00A0 Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftbarComponent_Template_a_click_4_listener() { return ctx.scrolltop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0 Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftbarComponent_Template_a_click_7_listener() { return ctx.scrolltop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0 Resources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftbarComponent_Template_a_click_10_listener() { return ctx.scrolltop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0\u00A0 Clients ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftbarComponent_Template_a_click_13_listener() { return ctx.scrolltop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0\u00A0 Skill set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, !ctx.isSidebarVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons[4]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  background-color: #0b4870;\n  overflow-x: hidden;\n  height: 100%;\n}\n\na[_ngcontent-%COMP%] {\n  font-family: \"Open sans\", sans-serif;\n  padding: 14px 8px 14px 16px;\n  text-decoration: none;\n  font-size: 20px;\n  color: #ffffff;\n  display: block;\n}\n\na[_ngcontent-%COMP%]:hover {\n  background-color: #29315a;\n}\n\n.tab-active[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:focus {\n  background-color: #ffbe55;\n}\n\na[_ngcontent-%COMP%]:active {\n  background-color: #21294d;\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.slide-in-left[_ngcontent-%COMP%] {\n  animation: slide-in-left 0.3s cubic-bezier(0.77, 0, 0.175, 1) both;\n}\n\n.slide-out-left[_ngcontent-%COMP%] {\n  animation: slide-out-left 0.3s cubic-bezier(0.86, 0, 0.07, 1) both;\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-out-left {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(-1000px);\n    opacity: 0;\n  }\n}\n\n@media only screen and (max-width: 1024px) {\n  .slide-in-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .slide-out-left[_ngcontent-%COMP%] {\n    transition: all 0.2s linear;\n    display: block;\n    animation: slide-in-left 0.3s cubic-bezier(0.77, 0, 0.175, 1) both;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xlZnRiYXIvbGVmdGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EseUJDUGM7RURRZCxrQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UseUJDakJTO0FEZ0JYOztBQUlBOztFQUVFLHlCQ3pCYztBRHdCaEI7O0FBSUE7RUFDRSx5QkN6QlU7QUR3Qlo7O0FBSUE7RUFDRSxXQUFBO0FBREY7O0FBSUE7RUFFRSxrRUFBQTtBQURGOztBQUlBO0VBRUUsa0VBQUE7QUFERjs7QUFrQkE7RUFDRTtJQUVFLDhCQUFBO0lBQ0EsVUFBQTtFQUhGO0VBTUE7SUFFRSx3QkFBQTtJQUNBLFVBQUE7RUFKRjtBQUNGOztBQXFCQTtFQUNFO0lBRUUsd0JBQUE7SUFDQSxVQUFBO0VBUEY7RUFVQTtJQUVFLDhCQUFBO0lBQ0EsVUFBQTtFQVJGO0FBQ0Y7O0FBV0E7RUFDRTtJQUNFLGFBQUE7RUFURjs7RUFZQTtJQUNFLDJCQUFBO0lBQ0EsY0FBQTtJQUVBLGtFQUFBO0VBVEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sZWZ0YmFyL2xlZnRiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWNlcnVsZWFuO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gc2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxNHB4IDhweCAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGMtaG92ZXI7XG59XG5cbi50YWItYWN0aXZlLFxuYTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW4tdGFpbm9pO1xufVxuXG5hOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRkYy1hY3RpdmU7XG59XG5cbmZhLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNsaWRlLWluLWxlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4tbGVmdCAwLjNzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSkgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDAuM3MgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKSBib3RoO1xufVxuXG4uc2xpZGUtb3V0LWxlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtb3V0LWxlZnQgMC4zcyBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSkgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1vdXQtbGVmdCAwLjNzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKSBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tbGVmdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtaW4tbGVmdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1vdXQtbGVmdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtb3V0LWxlZnQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuc2xpZGUtaW4tbGVmdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zbGlkZS1vdXQtbGVmdCB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDAuM3MgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKSBib3RoO1xuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4tbGVmdCAwLjNzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSkgYm90aDtcbiAgfVxufVxuIiwiJGRhcmstY2VydWxlYW46ICMwYjQ4NzA7XG4kcXVhcnR6OiAjZWZlYWY5O1xuJGdvbGRlbi10YWlub2k6ICNmZmJlNTU7XG5cbiRndC1ob3ZlcjogI2ZmYzk3MTtcbiRkYy1ob3ZlcjogIzI5MzE1YTtcbiRkYy1hY3RpdmU6ICMyMTI5NGQ7XG4kcS1mb2N1czogI2ZkZmRmZDtcblxuJGJsdWUtc2hhZG93OiAwcHggNnB4IDE2cHggLTVweCByZ2IoMTMwIDEzMyAyMjYgLyAxMSUpO1xuJGJ1dHRvbi1zaGFkb3c6IDBweCA2cHggMTFweCAtM3B4IHJnYmEoMTkzLCAxNDcsIDcxLCAwLjIpO1xuXG4kZm9udC1ncmV5OiAjNzA3MjdkO1xuJGRlbGV0ZS1yZWQ6ICNlYjYyNjI7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-leftbar',
                templateUrl: './leftbar.component.html',
                styleUrls: ['./leftbar.component.scss']
            }]
    }], function () { return [{ type: src_app_core_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 4, vars: 0, consts: [[1, "spinner"], [1, "bounce1"], [1, "bounce2"], [1, "bounce3"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".spinner[_ngcontent-%COMP%] {\n  margin: 20px auto 0;\n  width: 90px;\n  text-align: center;\n}\n\n.spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background-color: #0b4870;\n  margin: 4px;\n  border-radius: 100%;\n  display: inline-block;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\n  animation-delay: -0.32s;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\n  animation-delay: -0.16s;\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJDWGM7RURZZCxXQUFBO0VBRUEsbUJBQUE7RUFDQSxxQkFBQTtFQUVBLHdEQUFBO0FBRkY7O0FBS0E7RUFFRSx1QkFBQTtBQUZGOztBQUtBO0VBRUUsdUJBQUE7QUFGRjs7QUFnQkE7RUFDRTtJQUlFLG1CQUFBO0VBUEY7RUFTQTtJQUVFLG1CQUFBO0VBUEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uc3Bpbm5lciB7XG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XG4gIHdpZHRoOiA5MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcGlubmVyID4gZGl2IHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstY2VydWxlYW47XG4gIG1hcmdpbjogNHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi5zcGlubmVyIC5ib3VuY2UxIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG59XG5cbi5zcGlubmVyIC5ib3VuY2UyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLFxuICA4MCUsXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsXG4gIDgwJSxcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuIiwiJGRhcmstY2VydWxlYW46ICMwYjQ4NzA7XG4kcXVhcnR6OiAjZWZlYWY5O1xuJGdvbGRlbi10YWlub2k6ICNmZmJlNTU7XG5cbiRndC1ob3ZlcjogI2ZmYzk3MTtcbiRkYy1ob3ZlcjogIzI5MzE1YTtcbiRkYy1hY3RpdmU6ICMyMTI5NGQ7XG4kcS1mb2N1czogI2ZkZmRmZDtcblxuJGJsdWUtc2hhZG93OiAwcHggNnB4IDE2cHggLTVweCByZ2IoMTMwIDEzMyAyMjYgLyAxMSUpO1xuJGJ1dHRvbi1zaGFkb3c6IDBweCA2cHggMTFweCAtM3B4IHJnYmEoMTkzLCAxNDcsIDcxLCAwLjIpO1xuXG4kZm9udC1ncmV5OiAjNzA3MjdkO1xuJGRlbGV0ZS1yZWQ6ICNlYjYyNjI7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_core_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/sidebar/sidebar.service */ "./src/app/core/sidebar/sidebar.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");





class NavbarComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.bars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
        this.toggleSidebar = () => {
            this.sidebarService.toggleSidebarVisibility();
        };
    }
    ngOnInit() {
    }
    get isSidebarVisible() {
        return this.sidebarService.isSidebarVisible;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 7, vars: 1, consts: [["role", "banner", 1, "toolbar"], ["size", "2x", 1, "pointer", 3, "icon", "click"], ["width", "120", "alt", "Angular Logo", "src", "https://coda.global/assets/images/coda-logo-color-c.png", 1, "no-pointer"], [1, "spacer"], [1, "sub-title-4"], ["width", "40", "height", "40", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSP3-alqRxPH3i2TWR8lIMwq9eirRpcxifLUA&usqp=CAU", 1, "image-dp"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_fa_icon_click_1_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Steinfeld ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.bars);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #ffffff;\n  color: white;\n  font-weight: 600;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  color: #0b4870;\n  margin-left: 20px;\n}\n\n.image-dp[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border-radius: 50px;\n}\n\n.no-pointer[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsT0FBQTtBQURGOztBQUlBO0VBQ0UsY0N4QmM7RUR5QmQsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xuXG4udG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50b29sYmFyIGltZyB7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMTtcbn1cblxuZmEtaWNvbiB7XG4gIGNvbG9yOiAkZGFyay1jZXJ1bGVhbjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5pbWFnZS1kcCB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4ubm8tcG9pbnRlcntcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59IiwiJGRhcmstY2VydWxlYW46ICMwYjQ4NzA7XG4kcXVhcnR6OiAjZWZlYWY5O1xuJGdvbGRlbi10YWlub2k6ICNmZmJlNTU7XG5cbiRndC1ob3ZlcjogI2ZmYzk3MTtcbiRkYy1ob3ZlcjogIzI5MzE1YTtcbiRkYy1hY3RpdmU6ICMyMTI5NGQ7XG4kcS1mb2N1czogI2ZkZmRmZDtcblxuJGJsdWUtc2hhZG93OiAwcHggNnB4IDE2cHggLTVweCByZ2IoMTMwIDEzMyAyMjYgLyAxMSUpO1xuJGJ1dHRvbi1zaGFkb3c6IDBweCA2cHggMTFweCAtM3B4IHJnYmEoMTkzLCAxNDcsIDcxLCAwLjIpO1xuXG4kZm9udC1ncmV5OiAjNzA3MjdkO1xuJGRlbGV0ZS1yZWQ6ICNlYjYyNjI7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: src_app_core_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leftbar/leftbar.component */ "./src/app/shared/leftbar/leftbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _smooth_height_smooth_height_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./smooth-height/smooth-height.component */ "./src/app/shared/smooth-height/smooth-height.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/shared/loader/loader.component.ts");










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_2__["LeftbarComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _smooth_height_smooth_height_component__WEBPACK_IMPORTED_MODULE_6__["SmoothHeightComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]], exports: [_leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_2__["LeftbarComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _smooth_height_smooth_height_component__WEBPACK_IMPORTED_MODULE_6__["SmoothHeightComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_2__["LeftbarComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _smooth_height_smooth_height_component__WEBPACK_IMPORTED_MODULE_6__["SmoothHeightComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
                ],
                providers: [],
                exports: [
                    _leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_2__["LeftbarComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _smooth_height_smooth_height_component__WEBPACK_IMPORTED_MODULE_6__["SmoothHeightComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/smooth-height/smooth-height.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/smooth-height/smooth-height.component.ts ***!
  \*****************************************************************/
/*! exports provided: SmoothHeightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothHeightComponent", function() { return SmoothHeightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");



const _c0 = ["*"];
class SmoothHeightComponent {
    constructor(element) {
        this.element = element;
        this.setStartHeight = () => {
            this.startHeight = this.element.nativeElement.clientHeight;
        };
    }
    get grow() {
        return { value: this.trigger, params: { startHeight: this.startHeight } };
    }
    ngOnChanges() {
        this.setStartHeight();
    }
}
SmoothHeightComponent.ɵfac = function SmoothHeightComponent_Factory(t) { return new (t || SmoothHeightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SmoothHeightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmoothHeightComponent, selectors: [["app-smooth-height"]], hostVars: 1, hostBindings: function SmoothHeightComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@grow", ctx.grow);
    } }, inputs: { trigger: "trigger" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SmoothHeightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%] {\n      display: block;\n      overflow: hidden;\n    }"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('grow', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void <=> *', []),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '{{startHeight}}px', opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease'),
                ], { params: { startHeight: 0 } })
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmoothHeightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-smooth-height',
                template: `
    <ng-content></ng-content>
  `,
                styles: [`
    :host {
      display: block;
      overflow: hidden;
    }
  `],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('grow', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void <=> *', []),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '{{startHeight}}px', opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease'),
                        ], { params: { startHeight: 0 } })
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], grow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['@grow']
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // SERVERLESS_API_ENDPOINT: 'http://localhost:3000/',
    // SPRINGBOOT_API_ENDPOINT: 'http://localhost:3000/'
    SPRINGBOOT_API_ENDPOINT: 'https://spring.azizstark.tech/',
    SERVERLESS_API_ENDPOINT: 'https://bugy1jhj2b.execute-api.us-east-1.amazonaws.com/dev/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aziz/Desktop/coda_project_management_ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map