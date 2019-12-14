(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-questionnaire-questionnaire-module"],{

/***/ "./src/app/admin/pages/questionnaire/questionnaire.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/pages/questionnaire/questionnaire.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <!--begin::Portlet-->\n            <div class=\"m-portlet m-portlet--tab\">\n                <div class=\"m-portlet__head\">\n                    <div class=\"m-portlet__head-caption\">\n                        <div class=\"m-portlet__head-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                            <h3 class=\"m-portlet__head-text\">\n                                My Profile\n                            </h3>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"m-portlet__body\">\n                    <!--begin::Section-->\n                    <div class=\"m-section\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-section__sub\">\n\t\t\t\t\t\t\t\t\t\t\t</span>\n                        <div class=\"m-section__content\">\n                            <div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\n                                <div class=\"m-demo__preview\">\n                                    <!--begin::Form-->\n                                    <form class=\"m-form\" (ngSubmit)=\"update()\" action=\"\" id=\"updateF\">\n                                        <div class=\"m-form__group form-group\">\n                                            <label for=\"\">\n                                                What type of places do you like to visit?\n                                            </label>\n                                            <div class=\"m-checkbox-list\">\n                                                <label class=\"m-checkbox\" *ngFor=\"let test of interestPlaces\" >\n                                                    <input type=\"checkbox\" name=\"{{test.name}}\" value=\"{{test.value}}\" [checked]=\"test.isChecked\">\n                                                    {{test.selected}}\n                                                    <span></span>\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"m-form__group form-group\">\n                                            <label>\n                                                How far are you willing to travel from your hotel?\n                                            </label>\n                                            <div class=\"m-radio-list\">\n                                                <label class=\"m-radio m-radio--state-success\" *ngFor=\"let test of preferDistance\" >\n                                                    <input type=\"radio\" name=\"{{test.name}}\" value=\"{{test.value}}\" [checked]=\"test.isChecked\">\n                                                    {{test.selected}}\n                                                    <span></span>\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"m-form__group form-group\">\n                                            <label>\n                                                Do you have any dietary restrictions?\n                                            </label>\n                                            <div class=\"m-checkbox-list\">\n                                                <label class=\"m-checkbox m-checkbox--state-brand\" *ngFor=\"let test of dietaryRestrictions\" >\n                                                    <input type=\"checkbox\" name=\"{{test.name}}\" value=\"{{test.value}}\" [checked]=\"test.isChecked\">\n                                                    {{test.selected}}\n                                                    <span></span>\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"m-form__group form-group\">\n                                            <label>\n                                                What type of food do you like?\n                                            </label>\n                                            <div class=\"m-checkbox-list\">\n                                                <label class=\"m-checkbox m-checkbox--state-primary\" *ngFor=\"let test of preferredFood\" >\n                                                    <input type=\"checkbox\" name=\"{{test.name}}\" value=\"{{test.value}}\" [checked]=\"test.isChecked\">\n                                                    {{test.selected}}\n                                                    <span></span>\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"m-login__form-action\">\n                                        <button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_update\"\n                                                class=\"btn btn-focus m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;custom m-btn&#45;&#45;air\">\n                                            Update\n                                        </button>\n                                        </div>\n                                    </form>\n                                    <!--end::Form-->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--end::Section-->\n                </div>\n            </div>\n            <!--end::Portlet-->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/pages/questionnaire/questionnaire.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/pages/questionnaire/questionnaire.component.ts ***!
  \**********************************************************************/
/*! exports provided: QuestionnaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireComponent", function() { return QuestionnaireComponent; });
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../interfaces/angular-interfaces.ts"/>







var QuestionnaireComponent = /** @class */ (function () {
    function QuestionnaireComponent(_script, toastr, http, _router, sanitizer) {
        this._script = _script;
        this.toastr = toastr;
        this.http = http;
        this._router = _router;
        this.sanitizer = sanitizer;
        this.model = {};
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = localStorage.getItem('currentUser');
        this.user = this._script.getUserById(this.http, JSON.parse(id).id);
        this.user.subscribe(function (success) {
            _this.preferredFood = success.preferredFood;
            _this.preferDistance = success.preferDistance;
            _this.dietaryRestrictions = success.dietaryRestrictions;
            _this.interestPlaces = success.interestPlaces;
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__('#updateF').submit(function (e) {
            console.log("submit");
            var form = jquery__WEBPACK_IMPORTED_MODULE_6__(e.target).closest('form');
            form.validate({
                rules: {
                /*email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                },*/
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
            _this.update();
        });
    };
    QuestionnaireComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-index', ['assets/app/js/dashboard.js']);
    };
    QuestionnaireComponent.prototype.ngAfterContentInit = function () {
    };
    QuestionnaireComponent.prototype.update = function () {
        console.log(this.model);
        this._script.update(this.http, this.model).subscribe(function (success) {
            console.log(success);
        }, function (error) {
            console.log(error);
        });
    };
    QuestionnaireComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-place',
            template: __webpack_require__(/*! ./questionnaire.component.html */ "./src/app/admin/pages/questionnaire/questionnaire.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_0__["ScriptLoaderService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/questionnaire/questionnaire.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/pages/questionnaire/questionnaire.module.ts ***!
  \*******************************************************************/
/*! exports provided: QuestionnaireModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireModule", function() { return QuestionnaireModule; });
/* harmony import */ var _shared_layouts_template_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/layouts/template/template.component */ "./src/app/shared/layouts/template/template.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _questionnaire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questionnaire.component */ "./src/app/admin/pages/questionnaire/questionnaire.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        'path': '',
        'component': _shared_layouts_template_template_component__WEBPACK_IMPORTED_MODULE_0__["TemplateComponent"],
        'children': [
            {
                'path': '',
                'component': _questionnaire_component__WEBPACK_IMPORTED_MODULE_4__["QuestionnaireComponent"],
            },
        ],
    },
];
var QuestionnaireModule = /** @class */ (function () {
    function QuestionnaireModule() {
    }
    QuestionnaireModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ], declarations: [
                _questionnaire_component__WEBPACK_IMPORTED_MODULE_4__["QuestionnaireComponent"],
            ],
        })
    ], QuestionnaireModule);
    return QuestionnaireModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-questionnaire-questionnaire-module.js.map