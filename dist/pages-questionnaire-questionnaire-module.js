(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-questionnaire-questionnaire-module"],{

/***/ "./src/app/admin/pages/questionnaire/questionnaire.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/pages/questionnaire/questionnaire.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <!--begin::Portlet-->\r\n            <div class=\"m-portlet m-portlet--tab\">\r\n                <div class=\"m-portlet__head\">\r\n                    <div class=\"m-portlet__head-caption\">\r\n                        <div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                            <h3 class=\"m-portlet__head-text\">\r\n                                My Profile\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-portlet__body\">\r\n                    <!--begin::Section-->\r\n                    <div class=\"m-section\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-section__sub\">\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                        <div class=\"m-section__content\">\r\n                            <div class=\"m-demo\" data-code-preview=\"true\" data-code-html=\"true\" data-code-js=\"false\">\r\n                                <div class=\"m-demo__preview\">\r\n                                    <!--begin::Form-->\r\n                                    <form class=\"m-form\" (ngSubmit)=\"updateMyProfile()\" #f=\"ngForm\">\r\n                                        <div class=\"m-form__group form-group\">\r\n                                            <label for=\"\">\r\n                                                What type of places do you like to visit?\r\n                                            </label>\r\n                                            <div class=\"m-checkbox-list\">\r\n                                                <label class=\"m-checkbox\" *ngFor=\"let test of interestPlaces\" >\r\n                                                    <input type=\"checkbox\" name=\"{{test.name}}\" value=\"{{test.value}}\" [checked]=\"test.isChecked\">\r\n                                                    {{test.selected}}\r\n                                                    <span></span>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-form__group form-group\">\r\n                                            <label>\r\n                                                How far are you willing to travel from your hotel?\r\n                                            </label>\r\n                                            <div class=\"m-radio-list\">\r\n                                                <label class=\"m-radio m-radio--state-success\" *ngFor=\"let test of preferDistance\" >\r\n                                                    <input type=\"radio\" name=\"{{test.name}}\" value=\"{{test.value}}\" [checked]=\"test.isChecked\">\r\n                                                    {{test.selected}}\r\n                                                    <span></span>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-form__group form-group\">\r\n                                            <label>\r\n                                                Do you have any dietary restrictions?\r\n                                            </label>\r\n                                            <div class=\"m-checkbox-list\">\r\n                                                <label class=\"m-checkbox m-checkbox--state-brand\" *ngFor=\"let test of dietaryRestrictions\" >\r\n                                                    <input type=\"checkbox\" name=\"{{test.name}}\" value=\"{{test.value}}\" [checked]=\"test.isChecked\">\r\n                                                    {{test.selected}}\r\n                                                    <span></span>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-form__group form-group\">\r\n                                            <label>\r\n                                                What type of food do you like?\r\n                                            </label>\r\n                                            <div class=\"m-checkbox-list\">\r\n                                                <label class=\"m-checkbox m-checkbox--state-primary\" *ngFor=\"let test of preferredFood\" >\r\n                                                    <input type=\"checkbox\" name=\"{{test.name}}\" value=\"{{test.value}}\" [checked]=\"test.isChecked\">\r\n                                                    {{test.selected}}\r\n                                                    <span></span>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-login__form-action\">\r\n                                        <button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_update\"\r\n                                                class=\"btn btn-focus m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;custom m-btn&#45;&#45;air\">\r\n                                            Update\r\n                                        </button>\r\n                                        </div>\r\n                                    </form>\r\n                                    <!--end::Form-->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--end::Section-->\r\n                </div>\r\n            </div>\r\n            <!--end::Portlet-->\r\n        </div>\r\n    </div>\r\n</div>"

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
    function QuestionnaireComponent(_script, toastr, http, sanitizer, _router, _route) {
        this._script = _script;
        this.toastr = toastr;
        this.http = http;
        this.sanitizer = sanitizer;
        this._router = _router;
        this._route = _route;
        this.model = {};
        this.loading = false;
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/profile';
        var id = localStorage.getItem('currentUser');
        this.user = this._script.getUserById(this.http, JSON.parse(id).id);
        this.user.subscribe(function (success) {
            _this.preferredFood = success.preferredFood;
            _this.preferDistance = success.preferDistance;
            _this.dietaryRestrictions = success.dietaryRestrictions;
            _this.interestPlaces = success.interestPlaces;
        });
    };
    QuestionnaireComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-index', ['assets/app/js/dashboard.js']);
    };
    QuestionnaireComponent.prototype.ngAfterContentInit = function () {
    };
    QuestionnaireComponent.prototype.updateMyProfile = function () {
        var _this = this;
        var ip = [{
                value: 1, name: 'interestPlaces', isChecked: true, selected: "Cities"
            },
            {
                value: 2, name: 'interestPlaces', isChecked: false, selected: "Nature"
            },
            {
                value: 3, name: 'interestPlaces', isChecked: false, selected: "Mountain/Hills"
            },
            {
                value: 4, name: 'interestPlaces', isChecked: true, selected: "Beaches"
            },
            {
                value: 5, name: 'interestPlaces', isChecked: true, selected: "Historic"
            }];
        for (var i = 0; i < ip.length; i++) {
            var obj = ip[i];
            for (var key in obj) {
                if (key == 'value') {
                    var value = obj[key];
                    jquery__WEBPACK_IMPORTED_MODULE_6__('[name=interestPlaces]:checked').each(function (index) {
                        if (value == jquery__WEBPACK_IMPORTED_MODULE_6__(this).val()) {
                            obj['isChecked'] = true;
                        }
                    });
                }
            }
        }
        var dr = [{
                value: 1, name: 'dietaryRestrictions', isChecked: false, selected: "Vegetarian"
            },
            {
                value: 2, name: 'dietaryRestrictions', isChecked: true, selected: "Gluten free"
            },
            {
                value: 3, name: 'dietaryRestrictions', isChecked: false, selected: "Seafood allergy"
            }];
        for (var i = 0; i < dr.length; i++) {
            var obj = dr[i];
            for (var key in obj) {
                if (key == 'value') {
                    var value = obj[key];
                    jquery__WEBPACK_IMPORTED_MODULE_6__('[name=dietaryRestrictions]:checked').each(function (index) {
                        if (value == jquery__WEBPACK_IMPORTED_MODULE_6__(this).val()) {
                            obj['isChecked'] = true;
                        }
                    });
                }
            }
        }
        var pf = [{
                value: 1, name: 'preferredFood', isChecked: false, selected: "Spanish/Hispanic"
            },
            {
                value: 2, name: 'preferredFood', isChecked: false, selected: "Asian"
            },
            {
                value: 3, name: 'preferredFood', isChecked: false, selected: "American"
            },
            {
                value: 4, name: 'preferredFood', isChecked: false, selected: "Middle Eastern"
            },
            {
                value: 5, name: 'preferredFood', isChecked: false, selected: "European"
            }];
        for (var i = 0; i < pf.length; i++) {
            var obj = pf[i];
            for (var key in obj) {
                if (key == 'value') {
                    var value = obj[key];
                    jquery__WEBPACK_IMPORTED_MODULE_6__('[name=preferredFood]:checked').each(function (index) {
                        if (value == jquery__WEBPACK_IMPORTED_MODULE_6__(this).val()) {
                            obj['isChecked'] = true;
                        }
                    });
                }
            }
        }
        var pd = [{
                value: 1, name: 'preferDistance', isChecked: false, selected: "<5 miles"
            },
            {
                value: 2, name: 'preferDistance', isChecked: false, selected: "5 miles - 10 miles"
            },
            {
                value: 3, name: 'preferDistance', isChecked: false, selected: "10 miles - 20 miles"
            },
            {
                value: 4, name: 'preferDistance', isChecked: false, selected: ">20 miles"
            }];
        for (var i = 0; i < pd.length; i++) {
            var obj = pd[i];
            for (var key in obj) {
                if (key == 'value') {
                    var value = obj[key];
                    jquery__WEBPACK_IMPORTED_MODULE_6__('[name=preferDistance]:checked').each(function (index) {
                        if (value == jquery__WEBPACK_IMPORTED_MODULE_6__(this).val()) {
                            obj['isChecked'] = true;
                        }
                    });
                }
            }
        }
        var id = localStorage.getItem('currentUser');
        this.model._id = JSON.parse(id).id;
        this.model.preferredFood = pf;
        this.model.preferDistance = pd;
        this.model.dietaryRestrictions = dr;
        this.model.interestPlaces = ip;
        this.loading = true;
        this._script.update(this.http, this.model).subscribe(function (success) {
            _this._router.navigate([_this.returnUrl]);
            _this.loading = false;
        }, function (error) {
            console.log(error);
            _this.loading = false;
        });
    };
    QuestionnaireComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./questionnaire.component.html */ "./src/app/admin/pages/questionnaire/questionnaire.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_0__["ScriptLoaderService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
            declarations: [
                _questionnaire_component__WEBPACK_IMPORTED_MODULE_4__["QuestionnaireComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            providers: [
                _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]
            ]
        })
    ], QuestionnaireModule);
    return QuestionnaireModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-questionnaire-questionnaire-module.js.map