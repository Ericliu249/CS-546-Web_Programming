(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts"
	],
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts"
	],
	"./pages/dashboard/dashboard.module": [
		"./src/app/admin/pages/dashboard/dashboard.module.ts",
		"default~pages-dashboard-dashboard-module~pages-oneDayList-oneDayList-module",
		"pages-dashboard-dashboard-module"
	],
	"./pages/oneDayList/oneDayList.module": [
		"./src/app/admin/pages/oneDayList/oneDayList.module.ts",
		"default~pages-dashboard-dashboard-module~pages-oneDayList-oneDayList-module",
		"pages-oneDayList-oneDayList-module"
	],
	"./pages/place/place.module": [
		"./src/app/admin/pages/place/place.module.ts",
		"pages-place-place-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_directives/href-prevent-default.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/_directives/href-prevent-default.directive.ts ***!
  \***************************************************************/
/*! exports provided: HrefPreventDefaultDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrefPreventDefaultDirective", function() { return HrefPreventDefaultDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HrefPreventDefaultDirective = /** @class */ (function () {
    function HrefPreventDefaultDirective(el) {
        this.el = el;
    }
    HrefPreventDefaultDirective.prototype.ngAfterViewInit = function () {
    };
    HrefPreventDefaultDirective.prototype.preventDefault = function (event) {
        if (this.href.length === 0 || this.href === '#') {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HrefPreventDefaultDirective.prototype, "href", void 0);
    HrefPreventDefaultDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[href]",
            host: { '(click)': 'preventDefault($event)' },
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HrefPreventDefaultDirective);
    return HrefPreventDefaultDirective;
}());



/***/ }),

/***/ "./src/app/_directives/unwrap-tag.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/_directives/unwrap-tag.directive.ts ***!
  \*****************************************************/
/*! exports provided: UnwrapTagDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnwrapTagDirective", function() { return UnwrapTagDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnwrapTagDirective = /** @class */ (function () {
    function UnwrapTagDirective(el) {
        this.el = el;
    }
    UnwrapTagDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.el.nativeElement;
        _helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].unwrapTag(nativeElement);
    };
    UnwrapTagDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[appunwraptag]",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UnwrapTagDirective);
    return UnwrapTagDirective;
}());



/***/ }),

/***/ "./src/app/_services/script-loader.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/script-loader.service.ts ***!
  \****************************************************/
/*! exports provided: ScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        scripts.forEach(function (src) {
            if (!_this._scripts[src]) {
                _this._scripts[src] = { src: src, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (src) { return promises.push(_this.loadScript(tag, src)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.loadScripts = function (tag, scripts, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        scripts.forEach(function (script) {
            if (!_this._scripts[script]) {
                _this._scripts[script] = { src: script, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(tag, script, loadOnce)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param loadOnce
     * @returns {Promise<any>}
     */
    ScriptLoaderService.prototype.loadScript = function (tag, src, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        if (!this._scripts[src]) {
            this._scripts[src] = { src: src, loaded: false };
        }
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this._scripts[src].loaded && loadOnce) {
                resolve({ src: src, loaded: true });
            }
            else {
                // load script tag
                var scriptTag = jquery__WEBPACK_IMPORTED_MODULE_1__('<script/>').attr('type', 'text/javascript').attr('src', _this._scripts[src].src);
                jquery__WEBPACK_IMPORTED_MODULE_1__(tag).append(scriptTag);
                _this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    };
    ScriptLoaderService.prototype.getTodolists = function (http, city) {
        return http.get("http://localhost:3000/todolist/getTodolistByLocation/" + city);
    };
    ScriptLoaderService.prototype.getTodolistById = function (http, id) {
        return http.get("http://localhost:3000/todolist/getById/" + id);
    };
    ScriptLoaderService.prototype.getOneDaylists = function (http, id) {
        return http.get("http://localhost:3000/todolist/getAllOnedaylist/" + id);
    };
    ScriptLoaderService.prototype.getPlace = function (http, id) {
        return http.get("http://localhost:3000/todolist/getPlaceByOnedaylistId/" + id);
    };
    ScriptLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        'canActivate': [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        'children': [
            {
                'path': 'admin',
                'loadChildren': '.\/pages\/dashboard\/dashboard.module#DashboardModule',
                'data': { location: 'location' }
            },
            /*{
                'path': 'admin',
                'loadChildren': '.\/pages\/dashboard\/dashboard.module#DashboardModule',
                'params': ''
            },*/
            {
                'path': 'onedaylist/:id',
                'loadChildren': '.\/pages\/oneDayList\/oneDayList.module#OneDayListModule'
            },
            {
                'path': 'place/:id',
                'loadChildren': '.\/pages\/place\/place.module#PlaceModule'
            },
            {
                'path': '',
                'redirectTo': 'admin',
                'pathMatch': 'full',
            },
        ],
    },
    {
        'path': '**',
        'redirectTo': 'admin',
        'pathMatch': 'full',
    },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-nav></app-header-nav>\n<!-- begin::Body -->\n<router-outlet></router-outlet>\n<!-- end:: Body -->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(_script, _router) {
        this._script = _script;
        this._router = _router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js'], true)
            .then(function (result) {
            _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
            // optional js to be loaded once
            _this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
        });
        this._router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                mLayout.closeMobileAsideMenuOffcanvas();
                mLayout.closeMobileHorMenuOffcanvas();
                mApp.scrollTop();
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(true);
                // hide visible popover
                $('[data-toggle="m-popover"]').popover('hide');
            }
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // init required js
                mApp.init();
                mUtil.init();
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
                // content m-wrapper animation
                var animation_1 = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation_1);
                }).removeClass(animation_1).addClass(animation_1);
            }
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"]
            ],
            declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"]],
            exports: [
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'logout', component: _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"] },
    { path: '', loadChildren: './admin/admin.module#AdminModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Page loader -->\n<div class=\"m-page-loader m-page-loader--base m-page-loader--non-block\" style=\"margin-left: -80px; margin-top: -20px;\">\n\t<div class=\"m-blockui\">\n\t\t<span>\n\t\t\tPlease wait...\n\t\t</span>\n\t\t<span>\n\t\t\t<div class=\"m-loader m-loader--brand\"></div>\n\t\t</span>\n\t</div>\n</div>\n<!-- end::Page loader -->                      \t<!-- begin:: Page -->\n<router-outlet></router-outlet>\n<!-- end:: Page -->\n<app-quick-sidebar></app-quick-sidebar>\n<app-scroll-top></app-scroll-top>\n<app-tooltips></app-tooltips>\n<!--begin::Base Scripts -->             \t    \t \t\t    \t \t\t\t\t<!--end::Base Scripts -->                       <!--begin::Page Vendors -->                                   <!--end::Page Vendors -->                                                              <!--begin::Page Snippets -->                                   <!--end::Page Snippets -->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
        this.globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(true);
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].bodyClass(_this.globalBodyClass);
            }
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'body',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot({
                    timeOut: 10000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"],
            ],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_6__["ScriptLoaderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/_directives/alert.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/_directives/alert.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"m-alert m-alert--outline alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\n\t<span>{{message.text}}</span>\n</div>"

/***/ }),

/***/ "./src/app/auth/_directives/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/_directives/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/index */ "./src/app/auth/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(_alertService) {
        this._alertService = _alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/auth/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/auth/_guards/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/auth/_guards/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/auth/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log("authguard", localStorage.getItem('currentUser'));
        var data = localStorage.getItem('currentUser');
        if (data !== null) {
            // logged in so return true
            console.log("logged in", data);
            return true;
        }
        // error when verify so redirect to login page with the return url
        this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/_helpers/login-custom.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/_helpers/login-custom.ts ***!
  \***********************************************/
/*! exports provided: LoginCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCustom", function() { return LoginCustom; });
var LoginCustom = /** @class */ (function () {
    function LoginCustom() {
    }
    LoginCustom.handleSignInFormSubmit = function () {
        $('#m_login_signin_submit').click(function (e) {
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.displaySignUpForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signin');
        login.addClass('m-login--signup');
        login.find('.m-login__signup').animateClass('flipInX animated');
    };
    LoginCustom.displaySignInForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signup');
        try {
            $('form').data('validator').resetForm();
        }
        catch (e) {
        }
        login.addClass('m-login--signin');
        login.find('.m-login__signin').animateClass('flipInX animated');
    };
    LoginCustom.displayForgetPasswordForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--signin');
        login.removeClass('m-login--signup');
        login.addClass('m-login--forget-password');
        login.find('.m-login__forget-password').animateClass('flipInX animated');
    };
    LoginCustom.handleFormSwitch = function () {
        $('#m_login_forget_password').click(function (e) {
            e.preventDefault();
            LoginCustom.displayForgetPasswordForm();
        });
        $('#m_login_forget_password_cancel').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignInForm();
        });
        $('#m_login_signup').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignUpForm();
        });
        $('#m_login_signup_cancel').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignInForm();
        });
    };
    LoginCustom.handleSignUpFormSubmit = function () {
        $('#m_login_signup_submit').click(function (e) {
            var btn = $(e.target);
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    fullname: {
                        required: true,
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true,
                    },
                    rpassword: {
                        required: true,
                    },
                    agree: {
                        required: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.handleForgetPasswordFormSubmit = function () {
        $('#m_login_forget_password_submit').click(function (e) {
            var btn = $(e.target);
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.init = function () {
        LoginCustom.handleFormSwitch();
        LoginCustom.handleSignInFormSubmit();
        LoginCustom.handleSignUpFormSubmit();
        LoginCustom.handleForgetPasswordFormSubmit();
    };
    return LoginCustom;
}());



/***/ }),

/***/ "./src/app/auth/_services/alert.service.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/_services/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(_router) {
        var _this = this;
        this._router = _router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        _router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'danger', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/auth/_services/authentication.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/_services/authentication.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (email, password) {
        return localStorage.setItem('currentUser', JSON.stringify({ email: email, password: password }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/auth/_services/index.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/_services/index.ts ***!
  \*****************************************/
/*! exports provided: AlertService, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/auth/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/auth/_services/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/auth/_services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.verify = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/auth-routing.routing.ts ***!
  \**********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/auth/_services/user.service.ts");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_directives/alert.component */ "./src/app/auth/_directives/alert.component.ts");
/* harmony import */ var _helpers_login_custom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers/login-custom */ "./src/app/auth/_helpers/login-custom.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthComponent = /** @class */ (function () {
    function AuthComponent(_router, _script, _userService, _route, _authService, _alertService, cfr) {
        this._router = _router;
        this._script = _script;
        this._userService = _userService;
        this._route = _route;
        this._authService = _authService;
        this._alertService = _alertService;
        this.cfr = cfr;
        this.model = {};
        this.loading = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.model.remember = true;
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);
        this._script.loadScripts('body', [
            'assets/vendors/base/vendors.bundle.js',
            'assets/demo/default/base/scripts.bundle.js'
        ], true).then(function () {
            _helpers__WEBPACK_IMPORTED_MODULE_8__["Helpers"].setLoading(false);
            _helpers_login_custom__WEBPACK_IMPORTED_MODULE_7__["LoginCustom"].init();
        });
    };
    AuthComponent.prototype.signin = function () {
        this.loading = true;
        this._authService.login(this.model.email, this.model.password);
        this._router.navigate([this.returnUrl]);
        this.showAlert('alertSignin');
        this.loading = false;
    };
    AuthComponent.prototype.signup = function () {
        this.loading = true;
        this._alertService.success('Thank you. To complete your registration please check your email.', true);
        this.loading = false;
        _helpers_login_custom__WEBPACK_IMPORTED_MODULE_7__["LoginCustom"].displaySignInForm();
        this.model = {};
    };
    AuthComponent.prototype.forgotPass = function () {
        this.loading = true;
        this.showAlert('alertSignin');
        this._alertService.success('Cool! Password recovery instruction has been sent to your email.', true);
        this.loading = false;
        _helpers_login_custom__WEBPACK_IMPORTED_MODULE_7__["LoginCustom"].displaySignInForm();
        this.model = {};
    };
    AuthComponent.prototype.showAlert = function (target) {
        this[target].clear();
        var factory = this.cfr.resolveComponentFactory(_directives_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]);
        var ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertSignin', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertSignin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertSignup', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertSignup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alertForgotPass', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertForgotPass", void 0);
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
            template: __webpack_require__(/*! ./templates/login-1.component.html */ "./src/app/auth/templates/login-1.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__["ScriptLoaderService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.routing */ "./src/app/auth/auth-routing.routing.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _directives_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_directives/alert.component */ "./src/app/auth/_directives/alert.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/auth/_guards/auth.guard.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services/alert.service */ "./src/app/auth/_services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/auth/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"],
                _directives_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _auth_routing_routing__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]
            ],
            entryComponents: [_directives_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"]],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/logout/logout.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/auth/_services/authentication.service.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/app/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Helpers"].setLoading(true);
        // reset login status
        this._authService.logout();
        this._router.navigate(['/login']);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/auth/logout/logout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/templates/login-1.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/templates/login-1.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin\" id=\"m_login\">\n\t<div class=\"m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside\">\n\t\t<div class=\"m-stack m-stack--hor m-stack--desktop\">\n\t\t\t<div class=\"m-stack__item m-stack__item--fluid\">\n\t\t\t\t<div class=\"m-login__wrapper\">\n\t\t\t\t\t<div class=\"m-login__logo\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//logos/logo-2.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-login__signin\">\n\t\t\t\t\t\t<div class=\"m-login__head\">\n\t\t\t\t\t\t\t<h3 class=\"m-login__title\">\n\t\t\t\t\t\t\t\tSign In To Admin\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<div class=\"m--margin-top-40 m-alert m-alert--outline m-alert--outline-2x alert alert-success fade show\" role=\"alert\">\n\t\t\t\t\t\t\t\tUse username\n\t\t\t\t\t\t\t\t<span style=\"font-weight: 500;\">\n\t\t\t\t\t\t\t\t\tdemo@demo.com\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\tand password\n\t\t\t\t\t\t\t\t<span style=\"font-weight: 500;\">\n\t\t\t\t\t\t\t\t\tdemo\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\tto continue or singup.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<form (ngSubmit)=\"f.form.valid && signin()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\n\t\t\t\t\t\t\t<ng-template #alertSignin></ng-template>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" autocomplete=\"off\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row m-login__form-sub\">\n\t\t\t\t\t\t\t\t<div class=\"col m--align-left\">\n\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox m-checkbox--focus\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"remember\" [(ngModel)]=\"model.remember\" #remember=\"ngModel\">\n\t\t\t\t\t\t\t\t\t\tRemember me\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col m--align-right\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_login_forget_password\" class=\"m-link\">\n\t\t\t\t\t\t\t\t\t\tForget Password ?\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_signin_submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\n\t\t\t\t\t\t\t\t\tSign In\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-login__signup\">\n\t\t\t\t\t\t<div class=\"m-login__head\">\n\t\t\t\t\t\t\t<h3 class=\"m-login__title\">\n\t\t\t\t\t\t\t\tSign Up\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<div class=\"m-login__desc\">\n\t\t\t\t\t\t\t\tEnter your details to create your account:\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<form (ngSubmit)=\"f.form.valid && signup()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\n\t\t\t\t\t\t\t<ng-template #alertSignup></ng-template>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Fullname\" name=\"fullname\" [(ngModel)]=\"model.fullname\" #fullname=\"ngModel\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" autocomplete=\"off\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"Confirm Password\" name=\"rpassword\" [(ngModel)]=\"model.rpassword\" #rpassword=\"ngModel\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row form-group m-form__group m-login__form-sub\">\n\t\t\t\t\t\t\t\t<div class=\"col m--align-left\">\n\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox m-checkbox--focus\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"agree\" [(ngModel)]=\"model.agree\" #agree=\"ngModel\">\n\t\t\t\t\t\t\t\t\t\tI Agree the\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-link m-link--focus\">\n\t\t\t\t\t\t\t\t\t\t\tterms and conditions\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t.\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_signup_submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\n\t\t\t\t\t\t\t\t\tSign Up\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\"  id=\"m_login_signup_cancel\" class=\"btn btn-outline-focus  m-btn m-btn--pill m-btn--custom\">\n\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-login__forget-password\">\n\t\t\t\t\t\t<div class=\"m-login__head\">\n\t\t\t\t\t\t\t<h3 class=\"m-login__title\">\n\t\t\t\t\t\t\t\tForgotten Password ?\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<div class=\"m-login__desc\">\n\t\t\t\t\t\t\t\tEnter your email to reset your password:\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<form (ngSubmit)=\"f.form.valid && forgotPass()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\n\t\t\t\t\t\t\t<ng-template #alertForgotPass></ng-template>\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" id=\"m_email\" autocomplete=\"off\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_forget_password_submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\n\t\t\t\t\t\t\t\t\tRequest\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\"  id=\"m_login_forget_password_cancel\" class=\"btn btn-outline-focus m-btn m-btn--pill m-btn--custom\">\n\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"m-stack__item m-stack__item--center\">\n\t\t\t\t<div class=\"m-login__account\">\n\t\t\t\t\t<span class=\"m-login__account-msg\">\n\t\t\t\t\t\tDon't have an account yet ?\n\t\t\t\t\t</span>\n\t\t\t\t\t&nbsp;&nbsp;\n\t\t\t\t\t<a href=\"javascript:;\" id=\"m_login_signup\" class=\"m-link m-link--focus m-login__account-link\">\n\t\t\t\t\t\tSign Up\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1\tm-login__content\" style=\"background-image: url(./assets/app/media/img//bg/bg-4.jpg)\">\n\t\t<div class=\"m-grid__item m-grid__item--middle\">\n\t\t\t<h3 class=\"m-login__welcome\">\n\t\t\t\tJoin Our Community\n\t\t\t</h3>\n\t\t\t<p class=\"m-login__msg\">\n\t\t\t\tLorem ipsum dolor sit amet, coectetuer adipiscing\n\t\t\t\t<br>\n\t\t\t\telit sed diam nonummy et nibh euismod\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/helpers.ts":
/*!****************************!*\
  !*** ./src/app/helpers.ts ***!
  \****************************/
/*! exports provided: Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return Helpers; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.loadStyles = function (tag, src) {
        if (Array.isArray(src)) {
            jquery__WEBPACK_IMPORTED_MODULE_0__["each"](src, function (k, s) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(tag).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<link/>').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css'));
            });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(tag).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<link/>').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css'));
        }
    };
    Helpers.unwrapTag = function (element) {
        jquery__WEBPACK_IMPORTED_MODULE_0__(element).removeAttr('appunwraptag').unwrap();
    };
    /**
     * Set title markup
     * @param title
     */
    Helpers.setTitle = function (title) {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__title').text(title);
    };
    /**
     * Breadcrumbs markup
     * @param breadcrumbs
     */
    Helpers.setBreadcrumbs = function (breadcrumbs) {
        if (breadcrumbs)
            jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__title').addClass('m-subheader__title--separator');
        var ul = jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__breadcrumbs');
        if (jquery__WEBPACK_IMPORTED_MODULE_0__(ul).length === 0) {
            ul = jquery__WEBPACK_IMPORTED_MODULE_0__('<ul/>').addClass('m-subheader__breadcrumbs m-nav m-nav--inline')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__item')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<a/>').addClass('m-nav__link m-nav__link--icon')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<i/>').addClass('m-nav__link-icon la la-home'))));
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(ul).find('li:not(:first-child)').remove();
        jquery__WEBPACK_IMPORTED_MODULE_0__["each"](breadcrumbs, function (k, v) {
            var li = jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__item')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<a/>').addClass('m-nav__link m-nav__link--icon').attr('routerLink', v.href).attr('title', v.title)
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<span/>').addClass('m-nav__link-text').text(v.text)));
            jquery__WEBPACK_IMPORTED_MODULE_0__(ul).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__separator').text('-')).append(li);
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader .m-stack__item:first-child').append(ul);
    };
    Helpers.setLoading = function (enable) {
        var body = jquery__WEBPACK_IMPORTED_MODULE_0__('body');
        if (enable) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(body).addClass('m-page--loading-non-block');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(body).removeClass('m-page--loading-non-block');
        }
    };
    Helpers.bodyClass = function (strClass) {
        jquery__WEBPACK_IMPORTED_MODULE_0__('body').attr('class', strClass);
    };
    return Helpers;
}());



/***/ }),

/***/ "./src/app/shared/layouts/aside-nav/aside-nav.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/layouts/aside-nav/aside-nav.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Left Aside -->\n<button class=\"m-aside-left-close  m-aside-left-close--skin-dark\" id=\"m_aside_left_close_btn\" appunwraptag=\"\">\n\t<i class=\"la la-close\"></i>\n</button>\n<div id=\"m_aside_left\" class=\"m-grid__item\tm-aside-left  m-aside-left--skin-dark\">\n\t<!-- BEGIN: Aside Menu -->\n\t<div  \t\tid=\"m_ver_menu\"  \t\tclass=\"m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark\"  \t\tdata-menu-vertical=\"true\" \t\t data-menu-scrollable=\"false\" data-menu-dropdown-timeout=\"500\"   \t\t>\n\t\t<ul class=\"m-menu__nav  m-menu__nav--dropdown-submenu-arrow\">\n\t\t\t<li class=\"m-menu__item  \" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t<a  routerLink=\"/admin\" class=\"m-menu__link\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-line-graph\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\tDashboard\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<!-- <span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger\">\n\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t<!-- \t\t<li class=\"m-menu__section\">\n\t\t\t\t<h4 class=\"m-menu__section-text\">\n\t\t\t\t\tAngular\n\t\t\t\t</h4>\n\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t<a  routerLink=\"/angular/ng-bootstrap\" class=\"m-menu__link\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-settings\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tNg-Bootstrap\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-settings\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tPrimeNG\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tPrimeNG\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/angular/primeng/input\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tInput\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/angular/primeng/button\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tButton\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/angular/primeng/panel\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tPanel\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__section\">\n\t\t\t\t<h4 class=\"m-menu__section-text\">\n\t\t\t\t\tComponents\n\t\t\t\t</h4>\n\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-layers\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tBase\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tBase\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/state\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tState Colors\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/typography\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tTypography\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/stack\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tStack\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/tables\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tTables\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/progress\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tProgress\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/modal\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tModal\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/alerts\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tAlerts\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/popover\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tPopover\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/tooltip\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tTooltip\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/blockui\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tBlock UI\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/spinners\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tSpinners\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/scrollable\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tScrollable\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/dropdown\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tDropdown\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tTabs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/base/tabs/bootstrap\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tBootstrap Tabs\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/base/tabs/line\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tLine Tabs\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/accordions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tAccordions\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/navs\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tNavs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/lists\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tLists\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/treeview\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tTree View\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/bootstrap-notify\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tBootstrap Notify\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/toastr\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tToastr\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/sweetalert2\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tSweetAlert2\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-share\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tIcons\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/icons/flaticon\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tFlaticon\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/icons/fontawesome\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tFontawesome\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/icons/lineawesome\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tLineawesome\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/icons/socicons\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tSocicons\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-multimedia-1\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tButtons\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tButtons\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tButton Base\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/base/default\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tDefault Style\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/base/square\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSquare Style\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/base/pill\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tPill Style\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/base/air\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tAir Style\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/group\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tButton Group\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/dropdown\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tButton Dropdown\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tButton Icon\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/icon/lineawesome\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tLineawesome Icons\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/icon/fontawesome\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tFontawesome Icons\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/icon/flaticon\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tFlaticon Icons\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-interface-7\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tForms\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tForms\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tForm Controls\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/controls/base\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tBase Inputs\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/controls/checkbox-radio\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tCheckbox & Radio\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/controls/input-group\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tInput Groups\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/controls/switch\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSwitch\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/controls/option\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMega Options\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tForm Widgets\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-datepicker\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tDatepicker\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-datetimepicker\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tDatetimepicker\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-timepicker\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tTimepicker\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-daterangepicker\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tDaterangepicker\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-touchspin\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tTouchspin\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-maxlength\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMaxlength\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-switch\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSwitch\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-multipleselectsplitter\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMultiple Select Splitter\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-select\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tBootstrap Select\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/select2\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSelect2\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/typeahead\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tTypeahead\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/nouislider\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tnoUiSlider\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/form-repeater\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tForm Repeater\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/ion-range-slider\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tIon Range Slider\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/input-mask\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tInput Masks\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/summernote\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tSummernote WYSIWYG\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-markdown\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMarkdown Editor\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/autosize\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tAutosize\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/clipboard\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tClipboard\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/dropzone\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tDropzone\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/recaptcha\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tGoogle reCaptcha\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tForm Layouts\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/layouts/default-forms\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tDefault Forms\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/layouts/multi-column-forms\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMulti Column Forms\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/layouts/action-bars\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tAction Bars\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tForm Validation\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/validation/states\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tValidation States\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/validation/form-controls\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tForm Controls\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/validation/form-widgets\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tForm Widgets\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tForm Wizard\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/wizard/wizard-1\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tForm Wizard 1\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/wizard/wizard-2\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tForm Wizard 2\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/wizard/wizard-3\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tForm Wizard 3\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/wizard/wizard-4\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tForm Wizard 4\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/wizard/wizard-5\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tForm Wizard 5\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-tabs\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tDatatables\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tDatatables\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tBase\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/data-local\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tLocal Data\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/data-json\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tJSON Data\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/data-ajax\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tAjax Data\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/html-table\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tHTML Table\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/record-selection\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tRecord Selection\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/local-sort\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tLocal Sort\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/row-details\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tRow Details\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/column-rendering\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tColumn Rendering\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/column-width\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tColumn Width\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/responsive-columns\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tResponsive Columns\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/translation\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tTranslation\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tScrolling\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/scrolling/vertical\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tVertical Scrolling\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/scrolling/horizontal\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tHorizontal Scrolling\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/scrolling/both\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tBoth Scrolling\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tLocked Columns\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/locked/left\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tLeft Locked Columns\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/locked/right\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tRight Locked Columns\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/locked/both\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tBoth Locked Columns\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/locked/html-table\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tHTML Table\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tChild Datatables\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/child/data-local\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tLocal Data\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/child/data-ajax\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tRemote Data\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tAPI\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/api/methods\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tAPI Methods\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/api/events\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tEvents\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-interface-1\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tPortlets\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tPortlets\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/portlets/base\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tBase Portlets\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/portlets/advanced\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tAdvanced Portlets\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/portlets/creative\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tCreative Portlets\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/portlets/tabbed\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tTabbed Portlets\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/portlets/draggable\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tDraggable Portlets\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/portlets/tools\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tPortlet Tools\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-interface-6\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tTimeline\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tTimeline\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/timeline/timeline-1\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tTimeline 1\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/timeline/timeline-2\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tTimeline 2\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-network\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tWidgets\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tWidgets\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/widgets/general\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tGeneral Widgets\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/widgets/chart\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tChart Widgets\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-calendar\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tCalendar\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tCalendar\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/calendar/basic\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tBasic Calendar\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/calendar/list-view\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tList Views\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/calendar/google\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tGoogle Calendar\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/calendar/external-events\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tExternal Events\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/calendar/background-events\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tBackground Events\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-diagram\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tCharts\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tCharts\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tamCharts\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/charts/amcharts/charts\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tamCharts Charts\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/charts/amcharts/stock-charts\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tamCharts Stock Charts\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/charts/amcharts/maps\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tamCharts Maps\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/charts/flotcharts\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tFlot Charts\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/charts/google-charts\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tGoogle Charts\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/charts/morris-charts\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tMorris Charts\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-placeholder-1\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tMaps\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tMaps\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/maps/google-maps\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tGoogle Maps\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/maps/jqvmap\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tJQVMap\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-signs-2\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tUtils\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tUtils\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/utils/session-timeout\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tSession Timeout\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/components/utils/idle-timer\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tIdle Timer\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__section\">\n\t\t\t\t<h4 class=\"m-menu__section-text\">\n\t\t\t\t\tSnippets\n\t\t\t\t</h4>\n\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-interface-9\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tPricing Tables\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tPricing Tables\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/general/pricing-tables/pricing-table-1\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tPricing Tables v1\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/general/pricing-tables/pricing-table-2\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tPricing Tables v2\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/general/pricing-tables/pricing-table-3\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tPricing Tables v3\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/general/pricing-tables/pricing-table-4\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tPricing Tables v4\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-piggy-bank\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tInvoices\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tInvoices\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/invoices/invoice-1\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tInvoice v1\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/invoices/invoice-2\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tInvoice v2\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-exclamation\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tFAQS\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tFAQS\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/faq/faq-1\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tFAQ v1\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-suitcase\"></i>\n\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\tCustom Pages\n\t\t\t\t\t</span>\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tCustom Pages\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tUser Pages\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/user/login-1\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tLogin - 1\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/user/login-2\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tLogin - 2\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/user/login-3\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tLogin - 3\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/user/login-4\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tLogin - 4\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/user/login-5\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tLogin - 5\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tError Pages\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/errors/error-1\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tError 1\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/errors/error-2\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tError 2\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/errors/error-3\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tError 3\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/errors/error-4\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tError 4\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/errors/error-5\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tError 5\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/errors/error-6\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tError 6\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</li> -->\n\t\t</ul>\n\t</div>\n\t<!-- END: Aside Menu -->\n</div>\n<!-- END: Left Aside -->\n"

/***/ }),

/***/ "./src/app/shared/layouts/aside-nav/aside-nav.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/layouts/aside-nav/aside-nav.component.ts ***!
  \*****************************************************************/
/*! exports provided: AsideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideNavComponent", function() { return AsideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideNavComponent = /** @class */ (function () {
    function AsideNavComponent() {
    }
    AsideNavComponent.prototype.ngOnInit = function () {
    };
    AsideNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initAside();
    };
    AsideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-aside-nav",
            template: __webpack_require__(/*! ./aside-nav.component.html */ "./src/app/shared/layouts/aside-nav/aside-nav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], AsideNavComponent);
    return AsideNavComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/footer/footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/layouts/footer/footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Footer -->\n<footer class=\"m-grid__item\t\tm-footer\" appunwraptag=\"\">\n\t<div class=\"m-container m-container--fluid m-container--full-height m-page__container\">\n\t\t<div class=\"m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop\">\n\t\t\t<div class=\"m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last\">\n\t\t\t\t<span class=\"m-footer__copyright\">\n\t\t\t\t\t2017 &copy; Metronic theme by\n\t\t\t\t\t<a href=\"https://keenthemes.com\" class=\"m-link\">\n\t\t\t\t\t\tKeenthemes\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first\">\n\t\t\t\t<ul class=\"m-footer__nav m-nav m-nav--inline m--pull-right\">\n\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\tAbout\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\"  class=\"m-nav__link\">\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\tPrivacy\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\tT&C\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\tPurchase\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"m-nav__item m-nav__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\" data-toggle=\"m-tooltip\" title=\"Support Center\" data-placement=\"left\">\n\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info m--icon-font-size-lg3\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n<!-- end::Footer -->\n"

/***/ }),

/***/ "./src/app/shared/layouts/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/layouts/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/layouts/footer/footer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/header-nav/header-nav.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/header-nav/header-nav.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Header -->\n<header class=\"m-grid__item    m-header\"  data-minimize-offset=\"200\" data-minimize-mobile-offset=\"200\" appunwraptag=\"\" >\n\t<div class=\"m-container m-container--fluid m-container--full-height\">\n\t\t<div class=\"m-stack m-stack--ver m-stack--desktop\">\n\t\t\t<!-- BEGIN: Brand -->\n\t\t\t<div class=\"m-stack__item m-brand  m-brand--skin-dark\">\n\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general\">\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\n\t\t\t\t\t\t<a routerLink=\"/index\" class=\"m-brand__logo-wrapper\">\n\t\t\t\t\t\t\t<img alt=\"\" src=\"./assets/demo/default/media/img/logo/logo_default_dark.png\"/>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__tools\">\n\t\t\t\t\t\t<!-- BEGIN: Left Aside Minimize Toggle -->\n\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_aside_left_minimize_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!-- END --> \t\t\t \t\t\t\t\t\t\t<!-- BEGIN: Responsive Aside Left Menu Toggler -->\n\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_aside_left_offcanvas_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!-- END --> \t\t\t \t\t\t\t\t\t  \t\t\t\t\t\t\t<!-- BEGIN: Responsive Header Menu Toggler -->\n\t\t\t\t\t\t<a id=\"m_aside_header_menu_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!-- END --> \t\t\t\t\t\t  \t\t\t<!-- BEGIN: Topbar Toggler -->\n\t\t\t\t\t\t<a id=\"m_aside_header_topbar_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<i class=\"flaticon-more\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!-- BEGIN: Topbar Toggler -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- END: Brand -->\n\t\t\t<div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\">\n\t\t\t\t<!-- BEGIN: Horizontal Menu -->\n\t\t\t\t<button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark\" id=\"m_aside_header_menu_mobile_close_btn\">\n\t\t\t\t\t<i class=\"la la-close\"></i>\n\t\t\t\t</button>\n\t\t\t\t<div id=\"m_header_menu\" class=\"m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark\"  >\n\t\t\t\t\t<ul class=\"m-menu__nav  m-menu__nav--submenu-arrow\">\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\"  data-menu-submenu-toggle=\"click\" data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-add\"></i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow m-menu__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"   aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tCreate New Post\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-diagram\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tGenerate Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\"  data-menu-submenu-toggle=\"hover\" data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-business\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tManage Orders\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLatest Orders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPending Orders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProcessed Orders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelivery Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPayments\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCustomers\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\"  data-menu-submenu-toggle=\"hover\" data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tCustomer Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCustomer Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupplier Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReviewed Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tResolved Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFeedback Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-users\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tRegister Member\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\"  data-menu-submenu-toggle=\"click\" data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-line-graph\"></i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tReports\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu  m-menu__submenu--fixed m-menu__submenu--left\" style=\"width:1000px\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow m-menu__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t<div class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__content\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" >\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-menu__heading m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tFinance Reports\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-map\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAnnual Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHR Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPO Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFinance Margins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-2\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRevenue Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" >\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-menu__heading m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tProject Reports\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCoca Cola CRM\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelta Airlines Booking Site\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMalibu Accounting\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tVineseed Website Rewamp\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tZircon Mobile App\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMercury CMS\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" >\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-menu__heading m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tHR Reports\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStaff Directory\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tClient Directory\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSalary Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStaff Payslips\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCorporate Expenses\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProject Expenses\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" >\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-menu__heading m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tReporting Apps\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReport Adjusments\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSources & Mediums\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReporting Settings\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tConversions\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReport Flows\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAudit & Logs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\"  data-menu-submenu-toggle=\"click\" data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-paper-plane\"></i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\tApps\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--brand m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\t\t\tnew\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow m-menu__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-business\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\teCommerce\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\"  data-menu-submenu-toggle=\"hover\" data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/crud/datatable_v1\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-computer\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tAudience\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-users\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActive Users\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-interface-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUser Explorer\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUsers Flows\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMarket Segments\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUser Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-map\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMarketing\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-2\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tCampaigns\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\"  data-menu-submenu-toggle=\"hover\" data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-infinity\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tCloud Manager\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-add\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFile Upload\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-signs-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFile Attributes\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-folder\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFolders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\"  data-redirect=\"true\" aria-haspopup=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/header/actions\" class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-cogwheel-2\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem Settings\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- END: Horizontal Menu -->\t\t\t\t\t\t\t\t<!-- BEGIN: Topbar -->\n\t\t\t\t<div id=\"m_header_topbar\" class=\"m-topbar  m-stack m-stack--ver m-stack--general\">\n\t\t\t\t\t<div class=\"m-stack__item m-topbar__nav-wrapper\">\n\t\t\t\t\t\t<ul class=\"m-topbar__nav m-nav m-nav--inline\">\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light\tm-list-search m-list-search--skin-light\"  \tdata-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\" id=\"m_quicksearch\" data-search-type=\"dropdown\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-search-1\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header\">\n\t\t\t\t\t\t\t\t\t\t\t<form  class=\"m-list-search__form\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-search__form-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-input-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"m_quicksearch_input\" autocomplete=\"off\" type=\"text\" name=\"q\" class=\"m-list-search__form-input\" value=\"\" placeholder=\"Search...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-icon-close\" id=\"m_quicksearch_close\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-remove\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__scrollable m-scrollable\" data-max-height=\"300\" data-mobile-max-height=\"200\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center \tm-dropdown--mobile-full-width\" data-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\" id=\"m_topbar_notification_icon\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-music-2\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/misc/notification_bg.jpg); background-size: cover;\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t9 New\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-subtitle\">\n\t\t\t\t\t\t\t\t\t\t\t\tUser Notifications\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#topbar_notifications_notifications\" role=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAlerts\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_events\" role=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEvents\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_logs\" role=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"topbar_notifications_notifications\" role=\"tabpanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" data-scrollable=\"true\" data-max-height=\"250\" data-mobile-max-height=\"200\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline m-list-timeline--skin-light\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge -m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpending\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t14 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDB overloaded 80%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsettled\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem error -\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCheck\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item m-list-timeline__item--read\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\turgent\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item m-list-timeline__item--read\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"topbar_notifications_events\" role=\"tabpanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" data-max-height=\"250\" data-mobile-max-height=\"200\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline m-list-timeline--skin-light\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-danger\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"topbar_notifications_logs\" role=\"tabpanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general\" style=\"min-height: 180px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAll caught up!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo new logs.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light\"  data-dropdown-toggle=\"click\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide\"></span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/misc/quick_actions_bg.jpg); background-size: cover;\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\n\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-subtitle\">\n\t\t\t\t\t\t\t\t\t\t\t\tShortcuts\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body m-dropdown__body--paddingless\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" data-scrollable=\"false\" data-max-height=\"380\" data-mobile-max-height=\"200\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid m-nav-grid--skin-light\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid__row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGenerate Report\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-time\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd New Event\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid__row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-folder\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCreate New Task\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCompleted Tasks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\" data-dropdown-toggle=\"click\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__userpic\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img/users/user4.jpg\" class=\"m--img-rounded m--marginless m--img-centered\" alt=\"\"/>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__username m--hide\">\n\t\t\t\t\t\t\t\t\t\tNick\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/misc/user_profile_bg.jpg); background-size: cover;\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user m-card-user--skin-dark\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__pic\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img/users/user4.jpg\" class=\"m--img-rounded m--marginless\" alt=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__details\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-card-user__name m--font-weight-500\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tMark Andre\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-card-user__email m--font-weight-300 m-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tmark.andre@gmail.com\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav m-nav--skin-light\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m--hide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSection\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-profile-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMy Profile\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMessages\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupport\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/snippets/pages/user/login-1\" class=\"btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\" routerLink=\"/logout\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogout\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li id=\"m_quick_sidebar_toggle\" class=\"m-nav__item\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-grid-menu\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- END: Topbar -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</header>\n<!-- END: Header -->\n"

/***/ }),

/***/ "./src/app/shared/layouts/header-nav/header-nav.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/layouts/header-nav/header-nav.component.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function() { return HeaderNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderNavComponent = /** @class */ (function () {
    function HeaderNavComponent() {
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
    };
    HeaderNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initHeader();
    };
    HeaderNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header-nav",
            template: __webpack_require__(/*! ./header-nav.component.html */ "./src/app/shared/layouts/header-nav/header-nav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/layout.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/layouts/layout.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _directives_href_prevent_default_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_directives/href-prevent-default.directive */ "./src/app/_directives/href-prevent-default.directive.ts");
/* harmony import */ var _directives_unwrap_tag_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../_directives/unwrap-tag.directive */ "./src/app/_directives/unwrap-tag.directive.ts");
/* harmony import */ var _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aside-nav/aside-nav.component */ "./src/app/shared/layouts/aside-nav/aside-nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/layouts/footer/footer.component.ts");
/* harmony import */ var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-nav/header-nav.component */ "./src/app/shared/layouts/header-nav/header-nav.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/shared/layouts/layout/layout.component.ts");
/* harmony import */ var _quick_sidebar_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quick-sidebar/quick-sidebar.component */ "./src/app/shared/layouts/quick-sidebar/quick-sidebar.component.ts");
/* harmony import */ var _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scroll-top/scroll-top.component */ "./src/app/shared/layouts/scroll-top/scroll-top.component.ts");
/* harmony import */ var _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tooltips/tooltips.component */ "./src/app/shared/layouts/tooltips/tooltips.component.ts");
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./template/template.component */ "./src/app/shared/layouts/template/template.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _template_template_component__WEBPACK_IMPORTED_MODULE_12__["TemplateComponent"],
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_7__["HeaderNavComponent"],
                _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_5__["AsideNavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _quick_sidebar_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["QuickSidebarComponent"],
                _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_10__["ScrollTopComponent"],
                _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_11__["TooltipsComponent"],
                _directives_href_prevent_default_directive__WEBPACK_IMPORTED_MODULE_3__["HrefPreventDefaultDirective"],
                _directives_unwrap_tag_directive__WEBPACK_IMPORTED_MODULE_4__["UnwrapTagDirective"],
            ],
            exports: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _template_template_component__WEBPACK_IMPORTED_MODULE_12__["TemplateComponent"],
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_7__["HeaderNavComponent"],
                _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_5__["AsideNavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _quick_sidebar_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["QuickSidebarComponent"],
                _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_10__["ScrollTopComponent"],
                _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_11__["TooltipsComponent"],
                _directives_href_prevent_default_directive__WEBPACK_IMPORTED_MODULE_3__["HrefPreventDefaultDirective"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/shared/layouts/layout/layout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/layouts/layout/layout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-aside-nav></app-aside-nav>\n<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/layouts/layout/layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/layouts/layout/layout.component.ts ***!
  \***********************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/shared/layouts/layout/layout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/quick-sidebar/quick-sidebar.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/layouts/quick-sidebar/quick-sidebar.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Quick Sidebar -->\n<div id=\"m_quick_sidebar\" class=\"m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light\" appunwraptag=\"\">\n\t<div class=\"m-quick-sidebar__content m--hide\">\n\t\t<span id=\"m_quick_sidebar_close\" class=\"m-quick-sidebar__close\">\n\t\t\t<i class=\"la la-close\"></i>\n\t\t</span>\n\t\t<ul id=\"m_quick_sidebar_tabs\" class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\n\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_messenger\" role=\"tab\">\n\t\t\t\t\tMessages\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t<a class=\"nav-link m-tabs__link\" \t\tdata-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_settings\" role=\"tab\">\n\t\t\t\t\tSettings\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item m-tabs__item\">\n\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_logs\" role=\"tab\">\n\t\t\t\t\tLogs\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t\t<div class=\"tab-content\">\n\t\t\t<div class=\"tab-pane active m-scrollable\" id=\"m_quick_sidebar_tabs_messenger\" role=\"tabpanel\">\n\t\t\t\t<div class=\"m-messenger m-messenger--message-arrow m-messenger--skin-light\">\n\t\t\t\t\t<div class=\"m-messenger__messages\">\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tHi Bob. What time will be the meeting ?\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tHi Megan. It's at 2.30PM\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tWill the development team be joining ?\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tYes sure. I invited them as well\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\n\t\t\t\t\t\t\t2:30PM\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tNoted. For the Coca-Cola Mobile App project as well ?\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tYes, sure.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tPlease also prepare the quotation for the Loop CRM project as well.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\n\t\t\t\t\t\t\t3:15PM\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-no-pic m--bg-fill-danger\">\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\tM\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tNoted. I will prepare it.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tThanks Megan. I will see you later.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\n\t\t\t\t\t\t\t\t\t\t\tSure. See you in the meeting soon.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-messenger__seperator\"></div>\n\t\t\t\t\t<div class=\"m-messenger__form\">\n\t\t\t\t\t\t<div class=\"m-messenger__form-controls\">\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" placeholder=\"Type here...\" class=\"m-messenger__form-input\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-messenger__form-tools\">\n\t\t\t\t\t\t\t<a href=\"\" class=\"m-messenger__form-attachment\">\n\t\t\t\t\t\t\t\t<i class=\"la la-paperclip\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_settings\" role=\"tabpanel\">\n\t\t\t\t<div class=\"m-list-settings\">\n\t\t\t\t\t<div class=\"m-list-settings__group\">\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\n\t\t\t\t\t\t\tGeneral Settings\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tEmail Notifications\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tSite Tracking\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tSMS Alerts\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tBackup Storage\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tAudit Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-list-settings__group\">\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\n\t\t\t\t\t\t\tSystem Settings\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tSystem Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tError Reporting\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tApplications Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tBackup Servers\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\n\t\t\t\t\t\t\t\tAudit Logs\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\n\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_logs\" role=\"tabpanel\">\n\t\t\t\t<div class=\"m-list-timeline\">\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\n\t\t\t\t\t\t\tSystem Logs\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--warning m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\timportant\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\tresolved\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem error\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\tpending\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\n\t\t\t\t\t\t\tApplications Logs\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\turgent\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew invoices received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem error\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\tpending\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\n\t\t\t\t\t\t\tServer Logs\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tSystem error\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t1117 hrs\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- end::Quick Sidebar -->\n"

/***/ }),

/***/ "./src/app/shared/layouts/quick-sidebar/quick-sidebar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/layouts/quick-sidebar/quick-sidebar.component.ts ***!
  \*************************************************************************/
/*! exports provided: QuickSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickSidebarComponent", function() { return QuickSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuickSidebarComponent = /** @class */ (function () {
    function QuickSidebarComponent() {
    }
    QuickSidebarComponent.prototype.ngOnInit = function () {
    };
    QuickSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-quick-sidebar",
            template: __webpack_require__(/*! ./quick-sidebar.component.html */ "./src/app/shared/layouts/quick-sidebar/quick-sidebar.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], QuickSidebarComponent);
    return QuickSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/scroll-top/scroll-top.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/scroll-top/scroll-top.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Scroll Top -->\n<div class=\"m-scroll-top m-scroll-top--skin-top\" data-toggle=\"m-scroll-top\" data-scroll-offset=\"500\" data-scroll-speed=\"300\" appunwraptag=\"\">\n\t<i class=\"la la-arrow-up\"></i>\n</div>\n<!-- end::Scroll Top -->\n"

/***/ }),

/***/ "./src/app/shared/layouts/scroll-top/scroll-top.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/layouts/scroll-top/scroll-top.component.ts ***!
  \*******************************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollTopComponent = /** @class */ (function () {
    function ScrollTopComponent() {
    }
    ScrollTopComponent.prototype.ngOnInit = function () {
    };
    ScrollTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-scroll-top",
            template: __webpack_require__(/*! ./scroll-top.component.html */ "./src/app/shared/layouts/scroll-top/scroll-top.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], ScrollTopComponent);
    return ScrollTopComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/template/template.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/layouts/template/template.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-aside-nav></app-aside-nav>\n<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/layouts/template/template.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/layouts/template/template.component.ts ***!
  \***************************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateComponent = /** @class */ (function () {
    function TemplateComponent() {
    }
    TemplateComponent.prototype.ngOnInit = function () {
    };
    TemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '.m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body',
            template: __webpack_require__(/*! ./template.component.html */ "./src/app/shared/layouts/template/template.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/tooltips/tooltips.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/layouts/tooltips/tooltips.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Quick Nav -->\n<ul class=\"m-nav-sticky\" style=\"margin-top: 30px;\" appunwraptag=\"\">\n\t<!--\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Showcase\" data-placement=\"left\">\n\t\t<a href=\"\">\n\t\t\t<i class=\"la la-eye\"></i>\n\t\t</a>\n\t</li>\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Pre-sale Chat\" data-placement=\"left\">\n\t\t<a href=\"\" >\n\t\t\t<i class=\"la la-comments-o\"></i>\n\t\t</a>\n\t</li>\n\t-->\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Purchase\" data-placement=\"left\">\n\t\t<a href=\"https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes\" >\n\t\t\t<i class=\"la la-cart-arrow-down\"></i>\n\t\t</a>\n\t</li>\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Documentation\" data-placement=\"left\">\n\t\t<a href=\"https://keenthemes.com/metronic/documentation.html\" >\n\t\t\t<i class=\"la la-code-fork\"></i>\n\t\t</a>\n\t</li>\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Support\" data-placement=\"left\">\n\t\t<a href=\"https://keenthemes.com/forums/forum/support/metronic5/\" >\n\t\t\t<i class=\"la la-life-ring\"></i>\n\t\t</a>\n\t</li>\n</ul>\n<!-- begin::Quick Nav -->\n"

/***/ }),

/***/ "./src/app/shared/layouts/tooltips/tooltips.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/layouts/tooltips/tooltips.component.ts ***!
  \***************************************************************/
/*! exports provided: TooltipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function() { return TooltipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TooltipsComponent = /** @class */ (function () {
    function TooltipsComponent() {
    }
    TooltipsComponent.prototype.ngOnInit = function () {
    };
    TooltipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-tooltips",
            template: __webpack_require__(/*! ./tooltips.component.html */ "./src/app/shared/layouts/tooltips/tooltips.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], TooltipsComponent);
    return TooltipsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layouts_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/layout.module */ "./src/app/shared/layouts/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layouts_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]
            ],
            declarations: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layouts_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lily/Downloads/angular5-metronic-master 2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map