(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/core-data/resources/resources.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/core-data/resources/resources.service.ts ***!
  \***************************************************************/
/*! exports provided: ResourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesService", function() { return ResourcesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVERLESS_API_ENDPOINT;
class ResourcesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.model = 'resources';
        this.getResources = (page, items, unassigned) => {
            if (unassigned === 'All') {
                return this.httpClient.get(`${BASE_URL}${this.model}?page=${page}&limit=${items}`);
            }
            else {
                return this.httpClient.get(`${BASE_URL}${this.model}?page=${page}&limit=${items}&unassigned=true`);
            }
        };
        this.getResource = (id) => {
            return this.httpClient.get(`${BASE_URL}${this.model}/${id}`);
        };
        this.getSuggestedResources = (searchedResource) => {
            return this.httpClient.get(`${BASE_URL}${this.model}?firstName_like=${searchedResource}`);
        };
        this.getMatchingResources = (skills) => {
            // replace the actual implementation when connecting with API
            return this.httpClient.get(`${BASE_URL}${this.model}?_limit=10`);
        };
    }
}
ResourcesService.ɵfac = function ResourcesService_Factory(t) { return new (t || ResourcesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ResourcesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResourcesService, factory: ResourcesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourcesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core-data/skills/skills.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/core-data/skills/skills.service.ts ***!
  \*********************************************************/
/*! exports provided: SkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsService", function() { return SkillsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVERLESS_API_ENDPOINT;
class SkillsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.model = 'skills';
        this.allSkills = () => {
            return this.httpClient.get(`${BASE_URL}${this.model}`);
        };
        this.getSkills = (page, items) => {
            return this.httpClient.get(`${BASE_URL}${this.model}?_page=${page}&_limit=${items}`);
        };
        this.getUrl = () => {
            return `${BASE_URL}${this.model}`;
        };
        this.createSkill = (skill) => {
            return this.httpClient.post(this.getUrl(), skill);
        };
        this.updateSkill = (skill) => {
            return this.httpClient.patch(`${this.getUrl()}/${skill.id}`, skill);
        };
        this.removeSkill = (id) => {
            return this.httpClient.delete(`${this.getUrl()}/${id}`);
        };
        this.getTopX = (topX) => {
            return this.httpClient.get(`${this.getUrl()}?_sort=resourcescount&_order=desc&_limit=${topX}`);
        };
        this.getSuggestedSkills = skillSearched => {
            return this.httpClient.get(`${this.getUrl()}/search/?q=${skillSearched}`);
        };
    }
}
SkillsService.ɵfac = function SkillsService_Factory(t) { return new (t || SkillsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SkillsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SkillsService, factory: SkillsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map