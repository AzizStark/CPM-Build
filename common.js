(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/core-data/clients/clients.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/core-data/clients/clients.service.ts ***!
  \***********************************************************/
/*! exports provided: ClientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsService", function() { return ClientsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_queryUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/queryUtils */ "./src/app/core/utils/queryUtils.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







const BASE_URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].SPRINGBOOT_API_ENDPOINT;
class ClientsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.model = 'clients';
        this.getUrl = () => {
            return `${BASE_URL}${this.model}`;
        };
        this.getSuggestedClients = (clientSearched) => {
            return this.httpClient.get(`${this.getUrl()}?name_like=${clientSearched}`);
        };
        this.getClients = (page, items, sortby, active) => {
            sortby = Object(_utils_queryUtils__WEBPACK_IMPORTED_MODULE_1__["convertToSortQueryString"])(sortby);
            active = Object(_utils_queryUtils__WEBPACK_IMPORTED_MODULE_1__["convertToActiveQueryString"])(active);
            return this.httpClient.get(`${this.getUrl()}?page=${page}&limit=${items}&sortby=${sortby}&active=${active}`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)));
        };
        this.getClient = (id) => {
            return this.httpClient.get(`${this.getUrl()}/${id}`);
        };
        this.deleteClient = (id) => {
            return this.httpClient.put(`${this.getUrl()}/${id}`, {
                isActive: false
            });
        };
        this.editClient = (project, id) => {
            return this.httpClient.put(`${this.getUrl()}/${id}`, project);
        };
        this.addClient = (project) => {
            return this.httpClient.post(`${this.getUrl()}`, project);
        };
    }
}
ClientsService.ɵfac = function ClientsService_Factory(t) { return new (t || ClientsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ClientsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientsService, factory: ClientsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core-data/projects/projects.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/core-data/projects/projects.service.ts ***!
  \*************************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_queryUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/queryUtils */ "./src/app/core/utils/queryUtils.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







const BASE_URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].SPRINGBOOT_API_ENDPOINT;
class ProjectsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // listmodel = 'projectslist';
        this.model = 'projects';
        this.getSuggestedProjects = (projectSearched) => {
            return this.httpClient.get(`${BASE_URL}${this.model}?name_like=${projectSearched}`);
        };
        this.getProjects = (page, items, sortby, active) => {
            sortby = Object(_utils_queryUtils__WEBPACK_IMPORTED_MODULE_1__["convertToSortQueryString"])(sortby);
            active = Object(_utils_queryUtils__WEBPACK_IMPORTED_MODULE_1__["convertToActiveQueryString"])(active);
            return this.httpClient.get(`${BASE_URL}${this.model}?page=${page}&limit=${items}&sortby=${sortby}&active=${active}`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)));
        };
        this.getProject = (id) => {
            return this.httpClient.get(`${BASE_URL}${this.model}/${id}`);
        };
        this.deleteProject = (id) => {
            return this.httpClient.put(`${BASE_URL}${this.model}/${id}`, {
                isDeleted: true
            });
        };
        this.editProject = (project, id) => {
            return this.httpClient.put(`${BASE_URL}${this.model}/update/${id}`, project);
        };
        this.addProject = (project) => {
            return this.httpClient.post(`${BASE_URL}${this.model}`, project);
        };
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

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

/***/ "./src/app/core/utils/validation.ts":
/*!******************************************!*\
  !*** ./src/app/core/utils/validation.ts ***!
  \******************************************/
/*! exports provided: ProjectValidation, ClientValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectValidation", function() { return ProjectValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientValidation", function() { return ClientValidation; });
const ProjectValidation = (project) => {
    let isValid = true;
    const errors = {
        isValid: false,
        about: '',
        projectName: '',
        clientId: '',
        duration: '',
        requiredSkills: '',
        resources: ''
    };
    if (project.about.trim().split(' ').length < 5) {
        errors.about = 'Project description should have minimum 5 words';
        isValid = false;
    }
    if (project.projectName.trim().length < 5) {
        errors.projectName = 'Project Name should have minimum 5 characters';
        isValid = false;
    }
    if (!project.clientID) {
        errors.clientId = 'Client must be assigned';
        isValid = false;
    }
    if (!(project.startDate || project.endDate)) {
        errors.duration = 'Duration must be specified';
        isValid = false;
    }
    if (!project.requiredSkills.length) {
        errors.requiredSkills = 'Assign skills for the project';
        isValid = false;
    }
    if (!project.resources.length) {
        errors.resources = 'Assign resources for the project';
        isValid = false;
    }
    errors.isValid = isValid;
    return errors;
};
const ClientValidation = (client) => {
    let isValid = true;
    const errors = {
        isValid: false,
        about: '',
        clientName: '',
        projects: '',
    };
    if (client.about.trim().split(' ').length < 5) {
        errors.about = 'Client description should have minimum 5 words';
        isValid = false;
    }
    if (!client.projects.length) {
        errors.projects = 'Assign project for the client';
        isValid = false;
    }
    errors.isValid = isValid;
    return errors;
};


/***/ })

}]);
//# sourceMappingURL=common.js.map