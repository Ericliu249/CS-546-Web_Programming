(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-toplist-toplist-module"],{

/***/ "./src/app/admin/pages/toplist/toplist.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/pages/toplist/toplist.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin:: Widgets/Support Tickets -->\r\n<div class=\"m-portlet m-portlet--full-height \">\r\n    <div class=\"m-portlet__head\">\r\n        <div class=\"m-portlet__head-caption\">\r\n            <div class=\"m-portlet__head-title\">\r\n                <h3 class=\"m-portlet__head-text\">\r\n                    Top List\r\n                </h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"m-portlet__head-tools\">\r\n            <ul class=\"m-portlet__nav\">\r\n                <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\"\r\n                    data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n                    <a href=\"#\"\r\n                       class=\"m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl m-dropdown__toggle\">\r\n                        <i class=\"la la-ellipsis-h m--font-brand\"></i>\r\n                    </a>\r\n                    <div class=\"m-dropdown__wrapper\">\r\n                        <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n                        <div class=\"m-dropdown__inner\">\r\n                            <div class=\"m-dropdown__body\">\r\n                                <div class=\"m-dropdown__content\">\r\n                                    <ul class=\"m-nav\">\r\n                                        <li class=\"m-nav__item\">\r\n                                            <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                    Activity\r\n                                                </span>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"m-nav__item\">\r\n                                            <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                    Messages\r\n                                                </span>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"m-nav__item\">\r\n                                            <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-info\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                    FAQ\r\n                                                </span>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"m-nav__item\">\r\n                                            <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                    Support\r\n                                                </span>\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"m-portlet__body\">\r\n        <div *ngIf=\"todolists$ | async as toplists else noData\">\r\n            <div class=\"m-widget3\">\r\n                <div class=\"m-widget3__item\"  *ngFor=\"let todolist of toplists\">\r\n                    <div>\r\n                        {{todolist}}\r\n                    </div>\r\n                    <div class=\"m-widget3__header\">\r\n                        <div class=\"m-widget3__user-img\">\r\n                            <img class=\"m-widget3__img\" src=\"{{todolist.imgurl}}\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"m-widget3__info\">\r\n                            <span class=\"m-widget3__username\" [innerHtml]=\"safeHtml\">\r\n                                <a [routerLink]=\"['/onedaylist',todolist._id]\">\r\n                                    {{ todolist.name }}\r\n                                </a>\r\n                            </span>\r\n                            <br>\r\n                            <span class=\"m-widget3__time\">\r\n                                    {{ todolist.days}}}\r\n                            </span>\r\n                        </div>\r\n                        <span class=\"m-widget3__status m--font-info\">\r\n                                {{ todolist.likes}}}\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"m-widget3__body\">\r\n                        <p class=\"m-widget3__text\">\r\n                            {{ todolist.description }}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-template #noData>No Data Available</ng-template>\r\n    </div>\r\n</div>\r\n<!--end:: Widgets/Support Tickets -->"

/***/ }),

/***/ "./src/app/admin/pages/toplist/toplist.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/pages/toplist/toplist.component.ts ***!
  \**********************************************************/
/*! exports provided: ToplistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToplistComponent", function() { return ToplistComponent; });
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ToplistComponent = /** @class */ (function () {
    function ToplistComponent(_script, toastr, http, sanitizer, _router) {
        this._script = _script;
        this.toastr = toastr;
        this.http = http;
        this.sanitizer = sanitizer;
        this._router = _router;
        this.model = {};
    }
    ToplistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.queryParams.subscribe(function (params) {
            _this.model.location = params['location'];
        });
        /*if (this.model.location == null) {
            this.model.location = "New York";
        }*/
        this.todolists$ = this._script.getTopTodolists(this.http).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return lodash__WEBPACK_IMPORTED_MODULE_4__["values"](data); }));
        console.log(this.todolists$);
        this.todolists$.subscribe(function (ress) {
            _this.safeHtml = _this.sanitizer.bypassSecurityTrustHtml(ress[0]['oneDayListId'][0]['location']);
        });
    };
    ToplistComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('app-index', ['assets/app/js/dashboard.js']);
    };
    ToplistComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () { return _this.toastr.success('Welcome to Buddy Vacation!', 'Have fun!'); });
    };
    ToplistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./toplist.component.html */ "./src/app/admin/pages/toplist/toplist.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_0__["ScriptLoaderService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], ToplistComponent);
    return ToplistComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/toplist/toplist.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/pages/toplist/toplist.module.ts ***!
  \*******************************************************/
/*! exports provided: ToplistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToplistModule", function() { return ToplistModule; });
/* harmony import */ var _shared_layouts_template_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/layouts/template/template.component */ "./src/app/shared/layouts/template/template.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _toplist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toplist.component */ "./src/app/admin/pages/toplist/toplist.component.ts");
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
                'component': _toplist_component__WEBPACK_IMPORTED_MODULE_4__["ToplistComponent"],
            }
        ],
    },
];
var ToplistModule = /** @class */ (function () {
    function ToplistModule() {
    }
    ToplistModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ], declarations: [
                _toplist_component__WEBPACK_IMPORTED_MODULE_4__["ToplistComponent"],
            ],
        })
    ], ToplistModule);
    return ToplistModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-toplist-toplist-module.js.map