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
		"default~pages-dashboard-dashboard-module~pages-oneDayList-oneDayList-module~pages-toplist-toplist-mo~1cfa40a0",
		"pages-dashboard-dashboard-module"
	],
	"./pages/oneDayList/oneDayList.module": [
		"./src/app/admin/pages/oneDayList/oneDayList.module.ts",
		"default~pages-dashboard-dashboard-module~pages-oneDayList-oneDayList-module~pages-toplist-toplist-mo~1cfa40a0",
		"pages-oneDayList-oneDayList-module"
	],
	"./pages/place/place.module": [
		"./src/app/admin/pages/place/place.module.ts",
		"pages-place-place-module"
	],
	"./pages/questionnaire/questionnaire.module": [
		"./src/app/admin/pages/questionnaire/questionnaire.module.ts",
		"pages-questionnaire-questionnaire-module"
	],
	"./pages/toplist/toplist.module": [
		"./src/app/admin/pages/toplist/toplist.module.ts",
		"default~pages-dashboard-dashboard-module~pages-oneDayList-oneDayList-module~pages-toplist-toplist-mo~1cfa40a0",
		"pages-toplist-toplist-module"
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
    ScriptLoaderService.prototype.signup = function (http, user) {
        return http.post("http://localhost:3000/admin/signup", user);
    };
    ScriptLoaderService.prototype.signin = function (http, user) {
        return http.post("http://localhost:3000/admin/login", user);
    };
    ScriptLoaderService.prototype.logout = function (http) {
        return http.get("http://localhost:3000/admin/logout");
    };
    ScriptLoaderService.prototype.getUserById = function (http, id) {
        return http.get("http://localhost:3000/admin/getById/" + id);
    };
    ScriptLoaderService.prototype.update = function (http, user) {
        return http.post("http://localhost:3000/admin/update", user);
    };
    ScriptLoaderService.prototype.getTopTodolists = function (http) {
        return http.get("http://localhost:3000/todolist/getTop/");
    };
    ScriptLoaderService.prototype.getTodolistByPreference = function (http, id) {
        return http.get("http://localhost:3000/todolist/getTodolistByPreference/" + id);
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
            {
                'path': 'toplist',
                'loadChildren': '.\/pages\/toplist\/toplist.module#ToplistModule',
            },
            {
                'path': 'profile',
                'loadChildren': '.\/pages\/questionnaire\/questionnaire.module#QuestionnaireModule'
            },
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

module.exports = "<app-header-nav></app-header-nav>\r\n<!-- begin::Body -->\r\n<router-outlet></router-outlet>\r\n<!-- end:: Body -->\r\n<app-footer></app-footer>\r\n"

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
        $('#m_update_submit').click(function (e) {
            var btn = $(e.target);
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    firstname: {
                        required: true
                    },
                    lastname: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    username: {
                        required: true
                    },
                    password: {
                        required: true
                    },
                    rpassword: {
                        required: true
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
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

module.exports = "<!-- begin::Page loader -->\r\n<div class=\"m-page-loader m-page-loader--base m-page-loader--non-block\" style=\"margin-left: -80px; margin-top: -20px;\">\r\n\t<div class=\"m-blockui\">\r\n\t\t<span>\r\n\t\t\tPlease wait...\r\n\t\t</span>\r\n\t\t<span>\r\n\t\t\t<div class=\"m-loader m-loader--brand\"></div>\r\n\t\t</span>\r\n\t</div>\r\n</div>\r\n<!-- end::Page loader -->                      \t<!-- begin:: Page -->\r\n<router-outlet></router-outlet>\r\n<!-- end:: Page -->\r\n<app-quick-sidebar></app-quick-sidebar>\r\n<app-scroll-top></app-scroll-top>\r\n<app-tooltips></app-tooltips>\r\n<!--begin::Base Scripts -->             \t    \t \t\t    \t \t\t\t\t<!--end::Base Scripts -->                       <!--begin::Page Vendors -->                                   <!--end::Page Vendors -->                                                              <!--begin::Page Snippets -->                                   <!--end::Page Snippets -->\r\n"

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

module.exports = "<div *ngIf=\"message\" class=\"m-alert m-alert--outline alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\r\n\t<span>{{message.text}}</span>\r\n</div>"

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
        //console.log("authguard", localStorage.getItem('currentUser'));
        var data = localStorage.getItem('currentUser');
        if (data !== null) {
            // logged in so return true
            //console.log("logged in", data);
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
                    firstname: {
                        required: true
                    },
                    lastname: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    username: {
                        required: true
                    },
                    password: {
                        required: true
                    },
                    rpassword: {
                        required: true
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
    AuthenticationService.prototype.login = function (id) {
        return localStorage.setItem('currentUser', JSON.stringify({ id: id }));
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

var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.verify = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
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
    function AuthComponent(_router, _script, _userService, _route, _authService, _alertService, http, cfr) {
        this._router = _router;
        this._script = _script;
        this._userService = _userService;
        this._route = _route;
        this._authService = _authService;
        this._alertService = _alertService;
        this.http = http;
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
        var _this = this;
        this.loading = true;
        this._script.signin(this.http, this.model).subscribe(function (success) {
            _this._authService.login(success._id);
            _this._router.navigate([_this.returnUrl]);
            _this.showAlert('alertSignin');
            _this.loading = false;
        }, function (error) {
            _this.showError(error.error);
            _this.showAlert('alertSignin');
            _this.loading = false;
        });
    };
    AuthComponent.prototype.signup = function () {
        var _this = this;
        this.loading = true;
        this._alertService.success('Thank you. To complete your registration please check your email.', true);
        this.loading = false;
        this._script.signup(this.http, this.model).subscribe(function (success) {
            _helpers_login_custom__WEBPACK_IMPORTED_MODULE_7__["LoginCustom"].displaySignInForm();
            _this.model = {};
        }, function (error) {
            _helpers_login_custom__WEBPACK_IMPORTED_MODULE_7__["LoginCustom"].displaySignUpForm();
            _this.model = {};
        });
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
    AuthComponent.prototype.showError = function (error) {
        jquery__WEBPACK_IMPORTED_MODULE_10__("#errorMsg").text(error.error);
        jquery__WEBPACK_IMPORTED_MODULE_10__("#errorMsg").addClass("form-control-feedback");
        //this['errorMsg'].display();
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
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
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
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function LogoutComponent(_router, _authService, _script, http) {
        this._router = _router;
        this._authService = _authService;
        this._script = _script;
        this.http = http;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Helpers"].setLoading(true);
        this._script.logout(this.http).subscribe(function (success) {
            // reset login status
            _this._authService.logout();
            _this._router.navigate(['/login']);
        }, function (error) {
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/auth/logout/logout.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_script_loader_service__WEBPACK_IMPORTED_MODULE_4__["ScriptLoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
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

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin\"\r\n     id=\"m_login\">\r\n    <div class=\"m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside\">\r\n        <div class=\"m-stack m-stack--hor m-stack--desktop\">\r\n            <div class=\"m-stack__item m-stack__item--fluid\">\r\n                <div class=\"m-login__wrapper\">\r\n                    <div class=\"m-login__logo\">\r\n                        <a href=\"#\">\r\n                            <img src=\"./assets/img/logo.png\" style=\"width: 200px;\">\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"m-login__signin\">\r\n                        <div class=\"m-login__head\">\r\n                            <h3 class=\"m-login__title\">\r\n                                Sign In Form\r\n                            </h3>\r\n                            <div class=\"m--margin-top-40 m-alert m-alert--outline m-alert--outline-2x alert alert-success fade show\"\r\n                                 role=\"alert\">\r\n                                Use username\r\n                                <span style=\"font-weight: 500;\">\r\n\t\t\t\t\t\t\t\t\tHarry@aa.com\r\n\t\t\t\t\t\t\t\t</span>\r\n                                and password\r\n                                <span style=\"font-weight: 500;\">\r\n\t\t\t\t\t\t\t\t\tquidditch\r\n\t\t\t\t\t\t\t\t</span>\r\n                                to continue or singup.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"has-danger\">\r\n                            <div id=\"errorMsg\"></div>\r\n                        </div>\r\n                        <form (ngSubmit)=\"f.form.valid && signin()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\r\n                            <ng-template #alertSignin></ng-template>\r\n                            <div class=\"form-group m-form__group\">\r\n                                <input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\"\r\n                                       [(ngModel)]=\"model.email\" #email=\"ngModel\" autocomplete=\"off\">\r\n                            </div>\r\n                            <div class=\"form-group m-form__group\">\r\n                                <input class=\"form-control m-input m-login__form-input--last\" type=\"password\"\r\n                                       placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\"\r\n                                       #password=\"ngModel\">\r\n                            </div>\r\n                            <!-- <div class=\"row m-login__form-sub\">\r\n                                <div class=\"col m--align-left\">\r\n                                    <label class=\"m-checkbox m-checkbox--focus\">\r\n                                        <input type=\"checkbox\" name=\"remember\" [(ngModel)]=\"model.remember\" #remember=\"ngModel\">\r\n                                        Remember me\r\n                                        <span></span>\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"col m--align-right\">\r\n                                    <a href=\"javascript:;\" id=\"m_login_forget_password\" class=\"m-link\">\r\n                                        Forget Password ?\r\n                                    </a>\r\n                                </div>\r\n                            </div> -->\r\n                            <div class=\"m-login__form-action\">\r\n                                <button [disabled]=\"loading\"\r\n                                        [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\"\r\n                                        id=\"m_login_signin_submit\"\r\n                                        class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\r\n                                    Sign In\r\n                                </button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"m-login__signup\">\r\n                        <div class=\"m-login__head\">\r\n                            <h3 class=\"m-login__title\">\r\n                                Sign Up Form\r\n                            </h3>\r\n                            <div class=\"m-login__desc\">\r\n                                Enter your details to create your account:\r\n                            </div>\r\n                        </div>\r\n                        <!--\t\t\t\t\t\t<form (ngSubmit)=\"f.form.valid && signup()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">-->\r\n                        <!--\t\t\t\t\t\t\t<ng-template #alertSignup></ng-template>-->\r\n                        <!--\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">-->\r\n                        <!--\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Fullname\" name=\"fullname\" [(ngModel)]=\"model.fullname\" #fullname=\"ngModel\">-->\r\n                        <!--\t\t\t\t\t\t\t</div>-->\r\n                        <!--\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">-->\r\n                        <!--\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" autocomplete=\"off\">-->\r\n                        <!--\t\t\t\t\t\t\t</div>-->\r\n                        <!--\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">-->\r\n                        <!--\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">-->\r\n                        <!--\t\t\t\t\t\t\t</div>-->\r\n                        <!--\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">-->\r\n                        <!--\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-login__form-input&#45;&#45;last\" type=\"password\" placeholder=\"Confirm Password\" name=\"rpassword\" [(ngModel)]=\"model.rpassword\" #rpassword=\"ngModel\">-->\r\n                        <!--\t\t\t\t\t\t\t</div>-->\r\n                        <!--\t\t\t\t\t\t\t<div class=\"row form-group m-form__group m-login__form-sub\">-->\r\n                        <!--\t\t\t\t\t\t\t\t<div class=\"col m&#45;&#45;align-left\">-->\r\n                        <!--\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox m-checkbox&#45;&#45;focus\">-->\r\n                        <!--\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"agree\" [(ngModel)]=\"model.agree\" #agree=\"ngModel\">-->\r\n                        <!--\t\t\t\t\t\t\t\t\t\tI Agree the-->\r\n                        <!--\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-link m-link&#45;&#45;focus\">-->\r\n                        <!--\t\t\t\t\t\t\t\t\t\t\tterms and conditions-->\r\n                        <!--\t\t\t\t\t\t\t\t\t\t</a>-->\r\n                        <!--\t\t\t\t\t\t\t\t\t\t.-->\r\n                        <!--\t\t\t\t\t\t\t\t\t\t<span></span>-->\r\n                        <!--\t\t\t\t\t\t\t\t\t</label>-->\r\n                        <!--\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\"></span>-->\r\n                        <!--\t\t\t\t\t\t\t\t</div>-->\r\n                        <!--\t\t\t\t\t\t\t</div>-->\r\n                        <!--\t\t\t\t\t\t\t<div class=\"m-login__form-action\">-->\r\n                        <!--\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader&#45;&#45;right m-loader&#45;&#45;light': loading}\" id=\"m_login_signup_submit\" class=\"btn btn-focus m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;custom m-btn&#45;&#45;air\">-->\r\n                        <!--\t\t\t\t\t\t\t\t\tSign Up-->\r\n                        <!--\t\t\t\t\t\t\t\t</button>-->\r\n                        <!--\t\t\t\t\t\t\t\t<button [disabled]=\"loading\"  id=\"m_login_signup_cancel\" class=\"btn btn-outline-focus  m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;custom\">-->\r\n                        <!--\t\t\t\t\t\t\t\t\tCancel-->\r\n                        <!--\t\t\t\t\t\t\t\t</button>-->\r\n                        <!--\t\t\t\t\t\t\t</div>-->\r\n                        <!--\t\t\t\t\t\t</form>-->\r\n                        <form (ngSubmit)=\"f.form.valid && signup()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\r\n                            <!--                            action=\"/signup\" method=\"post\" id=\"signup-form\"-->\r\n                            <ng-template #alertSignup></ng-template>\r\n                            <div class=\"form-group m-form__group\">\r\n                                <label for=\"firstname\">FirstName:</label>\r\n                                <input class=\"form-control m-input\" type=\"text\" id=\"firstname\" placeholder=\"firstname\"\r\n                                       name=\"firstname\" [(ngModel)]=\"model.firstname\" #firstname=\"ngModel\">\r\n                            </div>\r\n                            <div class=\"form-group m-form__group\">\r\n                                <label for=\"lastname\">LastName:</label>\r\n                                <input class=\"form-control m-input\" id=\"lastname\" type=\"text\" placeholder=\"lastname\"\r\n                                       name=\"lastname\" [(ngModel)]=\"model.lastname\" #lastname=\"ngModel\">\r\n                            </div>\r\n                            <div class=\"form-group m-form__group\">\r\n                                <label for=\"email\">Email:</label>\r\n                                <input class=\"form-control m-input\" id=\"email\" type=\"email\" placeholder=\"email\"\r\n                                       name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\">\r\n                            </div>\r\n                            <div class=\"form-group m-form__group\">\r\n                                <label for=\"username\">UserName:</label>\r\n                                <input class=\"form-control m-input\" id=\"username\" type=\"text\" placeholder=\"username\"\r\n                                       name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\">\r\n                            </div>\r\n                            <div class=\"form-group m-form__group\">\r\n                                <label for=\"password\">Password:</label>\r\n                                <input class=\"form-control m-input\" id=\"password\" type=\"password\" placeholder=\"password\"\r\n                                       name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">\r\n                            </div>\r\n                            <div class=\"form-group m-form__group\">\r\n                                <label>Confirm Password:\r\n                                    <input class=\"form-control m-input m-login__form-input&#45;&#45;last\"\r\n                                           type=\"password\" placeholder=\"Confirm Password\" name=\"rpassword\"\r\n                                           [(ngModel)]=\"model.rpassword\" #rpassword=\"ngModel\">\r\n                                </label>\r\n                            </div>\r\n\r\n                            <div class=\"m-login__form-action\">\r\n                                <label for=\"m_login_signup_submit\"></label>\r\n                                <button [disabled]=\"loading\"\r\n                                        [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\"\r\n                                        id=\"m_login_signup_submit\"\r\n                                        class=\"btn btn-focus m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;custom m-btn&#45;&#45;air\">\r\n                                    sign up\r\n                                </button>\r\n                                <label for=\"m_login_signup_cancel\"></label>\r\n                                <button [disabled]=\"loading\" id=\"m_login_signup_cancel\"\r\n                                        class=\"btn btn-outline-focus  m-btn m-btn--pill m-btn--custom\">\r\n                                    back login\r\n                                </button>\r\n                            </div>\r\n\r\n                        </form>\r\n                    </div>\r\n                    <!--\t\t\t\t\t<div class=\"m-login__forget-password\">-->\r\n                    <!--\t\t\t\t\t\t<div class=\"m-login__head\">-->\r\n                    <!--\t\t\t\t\t\t\t<h3 class=\"m-login__title\">-->\r\n                    <!--\t\t\t\t\t\t\t\tForgotten Password ?-->\r\n                    <!--\t\t\t\t\t\t\t</h3>-->\r\n                    <!--\t\t\t\t\t\t\t<div class=\"m-login__desc\">-->\r\n                    <!--\t\t\t\t\t\t\t\tEnter your email to reset your password:-->\r\n                    <!--\t\t\t\t\t\t\t</div>-->\r\n                    <!--\t\t\t\t\t\t</div>-->\r\n                    <!--\t\t\t\t\t\t<form (ngSubmit)=\"f.form.valid && forgotPass()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">-->\r\n                    <!--\t\t\t\t\t\t\t<ng-template #alertForgotPass></ng-template>-->\r\n                    <!--\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">-->\r\n                    <!--\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" id=\"m_email\" autocomplete=\"off\">-->\r\n                    <!--\t\t\t\t\t\t\t</div>-->\r\n                    <!--\t\t\t\t\t\t\t<div class=\"m-login__form-action\">-->\r\n                    <!--\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader&#45;&#45;right m-loader&#45;&#45;light': loading}\" id=\"m_login_forget_password_submit\" class=\"btn btn-focus m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;custom m-btn&#45;&#45;air\">-->\r\n                    <!--\t\t\t\t\t\t\t\t\tRequest-->\r\n                    <!--\t\t\t\t\t\t\t\t</button>-->\r\n                    <!--\t\t\t\t\t\t\t\t<button [disabled]=\"loading\"  id=\"m_login_forget_password_cancel\" class=\"btn btn-outline-focus m-btn m-btn&#45;&#45;pill m-btn&#45;&#45;custom\">-->\r\n                    <!--\t\t\t\t\t\t\t\t\tCancel-->\r\n                    <!--\t\t\t\t\t\t\t\t</button>-->\r\n                    <!--\t\t\t\t\t\t\t</div>-->\r\n                    <!--\t\t\t\t\t\t</form>-->\r\n                    <!--\t\t\t\t\t</div>-->\r\n                </div>\r\n            </div>\r\n            <div class=\"m-stack__item m-stack__item--center\">\r\n                <div class=\"m-login__account\">\r\n\t\t\t\t\t<span class=\"m-login__account-msg\">\r\n\t\t\t\t\t\tDon't have an account yet ?\r\n\t\t\t\t\t</span>\r\n                    <!--\t\t\t\t\t&nbsp;&nbsp;-->\r\n                    <!-- <a href=\"javascript:;\" id=\"m_login_signup\" class=\"m-link m-link--focus m-login__account-link\">\r\n                        Sign Up\r\n                    </a> -->\r\n                    <button href=\"javascript:;\" id=\"m_login_signup\"\r\n                            class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\r\n                        Sign Up\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1\tm-login__content\"\r\n         style=\"background-image: url(./assets/app/media/img//bg/bg-4.jpg)\">\r\n        <div class=\"m-grid__item m-grid__item--middle\">\r\n            <h3 class=\"m-login__welcome\">\r\n                Vacation Buddy\r\n            </h3>\r\n            <p class=\"m-login__msg\">\r\n                Welcome to Vacation Buddy! In our website we can help you to find following data:\r\n                <br>\r\n                Popular Attractions\r\n                <br>\r\n                Popular Restaurants\r\n                <br>\r\n                Personalized tour todo list\r\n                <br>\r\n                Searched travel schedules based on location\r\n                <br>\r\n                Let's start your journey right now.\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>"

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

module.exports = "<!-- BEGIN: Left Aside -->\r\n<button class=\"m-aside-left-close  m-aside-left-close--skin-dark\" id=\"m_aside_left_close_btn\" appunwraptag=\"\">\r\n\t<i class=\"la la-close\"></i>\r\n</button>\r\n<div id=\"m_aside_left\" class=\"m-grid__item\tm-aside-left  m-aside-left--skin-dark\">\r\n\t<!-- BEGIN: Aside Menu -->\r\n\t<div  \t\tid=\"m_ver_menu\"  \t\tclass=\"m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark\"  \t\tdata-menu-vertical=\"true\" \t\t data-menu-scrollable=\"false\" data-menu-dropdown-timeout=\"500\"   \t\t>\r\n\t\t<ul class=\"m-menu__nav  m-menu__nav--dropdown-submenu-arrow\">\r\n\t\t\t<li class=\"m-menu__item  \" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t<a  routerLink=\"/\" class=\"m-menu__link\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-line-graph\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-title\">\r\n\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\tDashboard\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<!-- <span class=\"m-menu__link-badge\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger\">\r\n\t\t\t\t\t\t\t\t\t2\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  \" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t<a  routerLink=\"/toplist\" class=\"m-menu__link\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-line-graph\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-title\">\r\n\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\tTopList\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<!-- <span class=\"m-menu__link-badge\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger\">\r\n\t\t\t\t\t\t\t\t\t2\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t<!-- \t\t<li class=\"m-menu__section\">\r\n\t\t\t\t<h4 class=\"m-menu__section-text\">\r\n\t\t\t\t\tAngular\r\n\t\t\t\t</h4>\r\n\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t<a  routerLink=\"/angular/ng-bootstrap\" class=\"m-menu__link\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-settings\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tNg-Bootstrap\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-settings\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tPrimeNG\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tPrimeNG\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/angular/primeng/input\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tInput\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/angular/primeng/button\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tButton\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/angular/primeng/panel\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tPanel\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__section\">\r\n\t\t\t\t<h4 class=\"m-menu__section-text\">\r\n\t\t\t\t\tComponents\r\n\t\t\t\t</h4>\r\n\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-layers\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tBase\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tBase\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/state\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tState Colors\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/typography\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tTypography\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/stack\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tStack\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/tables\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tTables\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/progress\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tProgress\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/modal\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tModal\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/alerts\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tAlerts\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/popover\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tPopover\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/tooltip\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tTooltip\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/blockui\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tBlock UI\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/spinners\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tSpinners\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/scrollable\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tScrollable\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/dropdown\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tDropdown\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tTabs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/base/tabs/bootstrap\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tBootstrap Tabs\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/base/tabs/line\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLine Tabs\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/accordions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tAccordions\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/navs\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tNavs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/lists\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tLists\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/treeview\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tTree View\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/bootstrap-notify\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tBootstrap Notify\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/toastr\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tToastr\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/base/sweetalert2\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tSweetAlert2\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tIcons\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/icons/flaticon\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tFlaticon\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/icons/fontawesome\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tFontawesome\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/icons/lineawesome\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tLineawesome\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/icons/socicons\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tSocicons\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-multimedia-1\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tButtons\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tButtons\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tButton Base\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/base/default\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tDefault Style\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/base/square\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSquare Style\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/base/pill\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tPill Style\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/base/air\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tAir Style\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/group\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tButton Group\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/dropdown\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tButton Dropdown\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tButton Icon\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/icon/lineawesome\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLineawesome Icons\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/icon/fontawesome\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tFontawesome Icons\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/buttons/icon/flaticon\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tFlaticon Icons\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-interface-7\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tForms\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tForms\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tForm Controls\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/controls/base\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tBase Inputs\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/controls/checkbox-radio\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tCheckbox & Radio\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/controls/input-group\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tInput Groups\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/controls/switch\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSwitch\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/controls/option\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMega Options\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tForm Widgets\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-datepicker\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tDatepicker\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-datetimepicker\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tDatetimepicker\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-timepicker\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tTimepicker\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-daterangepicker\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tDaterangepicker\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-touchspin\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tTouchspin\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-maxlength\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMaxlength\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-switch\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSwitch\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-multipleselectsplitter\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMultiple Select Splitter\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-select\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tBootstrap Select\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/select2\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSelect2\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/typeahead\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tTypeahead\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/nouislider\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tnoUiSlider\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/form-repeater\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tForm Repeater\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/ion-range-slider\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tIon Range Slider\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/input-mask\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tInput Masks\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/summernote\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSummernote WYSIWYG\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/bootstrap-markdown\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMarkdown Editor\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/autosize\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tAutosize\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/clipboard\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tClipboard\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/dropzone\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tDropzone\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/widgets/recaptcha\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tGoogle reCaptcha\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tForm Layouts\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/layouts/default-forms\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tDefault Forms\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/layouts/multi-column-forms\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMulti Column Forms\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/layouts/action-bars\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tAction Bars\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tForm Validation\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/validation/states\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tValidation States\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/validation/form-controls\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tForm Controls\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/validation/form-widgets\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tForm Widgets\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tForm Wizard\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/wizard/wizard-1\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tForm Wizard 1\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/wizard/wizard-2\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tForm Wizard 2\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/wizard/wizard-3\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tForm Wizard 3\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/wizard/wizard-4\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tForm Wizard 4\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/forms/wizard/wizard-5\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tForm Wizard 5\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-tabs\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tDatatables\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tDatatables\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tBase\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/data-local\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLocal Data\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/data-json\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tJSON Data\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/data-ajax\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tAjax Data\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/html-table\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHTML Table\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/record-selection\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tRecord Selection\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/local-sort\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLocal Sort\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/row-details\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tRow Details\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/column-rendering\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tColumn Rendering\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/column-width\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tColumn Width\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/responsive-columns\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tResponsive Columns\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/base/translation\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tTranslation\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tScrolling\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/scrolling/vertical\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tVertical Scrolling\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/scrolling/horizontal\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHorizontal Scrolling\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/scrolling/both\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tBoth Scrolling\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tLocked Columns\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/locked/left\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLeft Locked Columns\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/locked/right\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tRight Locked Columns\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/locked/both\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tBoth Locked Columns\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/locked/html-table\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tHTML Table\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tChild Datatables\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/child/data-local\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLocal Data\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/child/data-ajax\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tRemote Data\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tAPI\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/api/methods\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tAPI Methods\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/datatables/api/events\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tEvents\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-interface-1\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tPortlets\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tPortlets\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/portlets/base\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tBase Portlets\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/portlets/advanced\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tAdvanced Portlets\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/portlets/creative\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tCreative Portlets\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/portlets/tabbed\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tTabbed Portlets\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/portlets/draggable\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tDraggable Portlets\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/portlets/tools\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tPortlet Tools\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-interface-6\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tTimeline\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tTimeline\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/timeline/timeline-1\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tTimeline 1\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/timeline/timeline-2\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tTimeline 2\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-network\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tWidgets\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tWidgets\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/widgets/general\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tGeneral Widgets\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/widgets/chart\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tChart Widgets\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-calendar\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tCalendar\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tCalendar\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/calendar/basic\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tBasic Calendar\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/calendar/list-view\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tList Views\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/calendar/google\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tGoogle Calendar\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/calendar/external-events\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tExternal Events\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/calendar/background-events\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tBackground Events\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-diagram\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tCharts\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tCharts\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tamCharts\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/charts/amcharts/charts\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tamCharts Charts\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/charts/amcharts/stock-charts\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tamCharts Stock Charts\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/components/charts/amcharts/maps\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tamCharts Maps\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/charts/flotcharts\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tFlot Charts\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/charts/google-charts\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tGoogle Charts\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/charts/morris-charts\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tMorris Charts\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-placeholder-1\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tMaps\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tMaps\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/maps/google-maps\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tGoogle Maps\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/maps/jqvmap\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tJQVMap\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-signs-2\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tUtils\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tUtils\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/utils/session-timeout\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tSession Timeout\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/components/utils/idle-timer\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tIdle Timer\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__section\">\r\n\t\t\t\t<h4 class=\"m-menu__section-text\">\r\n\t\t\t\t\tSnippets\r\n\t\t\t\t</h4>\r\n\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-interface-9\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tPricing Tables\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tPricing Tables\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/general/pricing-tables/pricing-table-1\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tPricing Tables v1\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/general/pricing-tables/pricing-table-2\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tPricing Tables v2\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/general/pricing-tables/pricing-table-3\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tPricing Tables v3\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/general/pricing-tables/pricing-table-4\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tPricing Tables v4\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-piggy-bank\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tInvoices\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tInvoices\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/invoices/invoice-1\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tInvoice v1\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/invoices/invoice-2\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tInvoice v2\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-exclamation\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tFAQS\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tFAQS\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<a  routerLink=\"/snippets/faq/faq-1\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tFAQ v1\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-suitcase\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tCustom Pages\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tCustom Pages\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tUser Pages\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/user/login-1\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLogin - 1\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/user/login-2\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLogin - 2\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/user/login-3\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLogin - 3\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/user/login-4\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLogin - 4\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/user/login-5\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLogin - 5\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tError Pages\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/errors/error-1\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tError 1\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/errors/error-2\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tError 2\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/errors/error-3\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tError 3\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/errors/error-4\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tError 4\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/errors/error-5\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tError 5\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/snippets/pages/errors/error-6\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tError 6\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li> -->\r\n\t\t</ul>\r\n\t</div>\r\n\t<!-- END: Aside Menu -->\r\n</div>\r\n<!-- END: Left Aside -->\r\n"

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

module.exports = "<!-- begin::Footer -->\r\n<footer class=\"m-grid__item\t\tm-footer\" appunwraptag=\"\">\r\n\t<div class=\"m-container m-container--fluid m-container--full-height m-page__container\">\r\n\t\t<div class=\"m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop\">\r\n\t\t\t<div class=\"m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last\">\r\n\t\t\t\t<span class=\"m-footer__copyright\">\r\n\t\t\t\t\t2017 &copy; Metronic theme by\r\n\t\t\t\t\t<a href=\"https://keenthemes.com\" class=\"m-link\">\r\n\t\t\t\t\t\tKeenthemes\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first\">\r\n\t\t\t\t<ul class=\"m-footer__nav m-nav m-nav--inline m--pull-right\">\r\n\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\tAbout\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t<a href=\"#\"  class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\tPrivacy\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\tT&C\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\tPurchase\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__item m-nav__item\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\" data-toggle=\"m-tooltip\" title=\"Support Center\" data-placement=\"left\">\r\n\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info m--icon-font-size-lg3\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</footer>\r\n<!-- end::Footer -->\r\n"

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

module.exports = "<!-- BEGIN: Header -->\r\n<header class=\"m-grid__item    m-header\" data-minimize-offset=\"200\" data-minimize-mobile-offset=\"200\" appunwraptag=\"\">\r\n    <div class=\"m-container m-container--fluid m-container--full-height\">\r\n        <div class=\"m-stack m-stack--ver m-stack--desktop\">\r\n            <!-- BEGIN: Brand -->\r\n            <div class=\"m-stack__item m-brand  m-brand--skin-dark\">\r\n                <div class=\"m-stack m-stack--ver m-stack--general\">\r\n                    <div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\r\n                        <a routerLink=\"/index\" class=\"m-brand__logo-wrapper\">\r\n                            <img alt=\"\" src=\"./assets/img/logo.png\" style=\"width: 100px;\"/>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"m-stack__item m-stack__item--middle m-brand__tools\">\r\n                        <!-- BEGIN: Left Aside Minimize Toggle -->\r\n                        <a href=\"javascript:;\" id=\"m_aside_left_minimize_toggle\"\r\n                           class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block\">\r\n                            <span></span>\r\n                        </a>\r\n                        <!-- END -->\r\n                        <!-- BEGIN: Responsive Aside Left Menu Toggler -->\r\n                        <a href=\"javascript:;\" id=\"m_aside_left_offcanvas_toggle\"\r\n                           class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block\">\r\n                            <span></span>\r\n                        </a>\r\n                        <!-- END -->\r\n                        <!-- BEGIN: Responsive Header Menu Toggler -->\r\n                        <a id=\"m_aside_header_menu_mobile_toggle\" href=\"javascript:;\"\r\n                           class=\"m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block\">\r\n                            <span></span>\r\n                        </a>\r\n                        <!-- END -->                                    <!-- BEGIN: Topbar Toggler -->\r\n                        <a id=\"m_aside_header_topbar_mobile_toggle\" href=\"javascript:;\"\r\n                           class=\"m-brand__icon m--visible-tablet-and-mobile-inline-block\">\r\n                            <i class=\"flaticon-more\"></i>\r\n                        </a>\r\n                        <!-- BEGIN: Topbar Toggler -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- END: Brand -->\r\n            <div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\">\r\n                <!-- BEGIN: Horizontal Menu -->\r\n                <button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark\"\r\n                        id=\"m_aside_header_menu_mobile_close_btn\">\r\n                    <i class=\"la la-close\"></i>\r\n                </button>\r\n                <!--<div id=\"m_header_menu\"\r\n                     class=\"m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile&#45;&#45;offcanvas  m-header-menu&#45;&#45;skin-light m-header-menu&#45;&#45;submenu-skin-light m-aside-header-menu-mobile&#45;&#45;skin-dark m-aside-header-menu-mobile&#45;&#45;submenu-skin-dark\">\r\n                    <ul class=\"m-menu__nav  m-menu__nav&#45;&#45;submenu-arrow\">\r\n                        <li class=\"m-menu__item  m-menu__item&#45;&#45;submenu m-menu__item&#45;&#45;rel\"\r\n                            data-menu-submenu-toggle=\"click\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                            <a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n                                <i class=\"m-menu__link-icon flaticon-add\"></i>\r\n                                <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tActions\r\n\t\t\t\t\t\t\t\t</span>\r\n                                <i class=\"m-menu__hor-arrow la la-angle-down\"></i>\r\n                                <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n                            </a>\r\n                            <div class=\"m-menu__submenu m-menu__submenu&#45;&#45;classic m-menu__submenu&#45;&#45;left\">\r\n                                <span class=\"m-menu__arrow m-menu__arrow&#45;&#45;adjust\"></span>\r\n                                <ul class=\"m-menu__subnav\">\r\n                                    <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item&#45;&#45;active\"\r\n                                        routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                                        <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                            <i class=\"m-menu__link-icon flaticon-file\"></i>\r\n                                            <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tCreate New Post\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                        <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                            <i class=\"m-menu__link-icon flaticon-diagram\"></i>\r\n                                            <span class=\"m-menu__link-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tGenerate Reports\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge&#45;&#45;success\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item  m-menu__item&#45;&#45;submenu\" data-menu-submenu-toggle=\"hover\"\r\n                                        data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                        <a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n                                            <i class=\"m-menu__link-icon flaticon-business\"></i>\r\n                                            <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tManage Orders\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                            <i class=\"m-menu__hor-arrow la la-angle-right\"></i>\r\n                                            <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n                                        </a>\r\n                                        <div class=\"m-menu__submenu m-menu__submenu&#45;&#45;classic m-menu__submenu&#45;&#45;right\">\r\n                                            <span class=\"m-menu__arrow\"></span>\r\n                                            <ul class=\"m-menu__subnav\">\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLatest Orders\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPending Orders\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProcessed Orders\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelivery Reports\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPayments\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCustomers\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item  m-menu__item&#45;&#45;submenu\" data-menu-submenu-toggle=\"hover\"\r\n                                        data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                        <a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n                                            <i class=\"m-menu__link-icon flaticon-chat-1\"></i>\r\n                                            <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tCustomer Feedbacks\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                            <i class=\"m-menu__hor-arrow la la-angle-right\"></i>\r\n                                            <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n                                        </a>\r\n                                        <div class=\"m-menu__submenu m-menu__submenu&#45;&#45;classic m-menu__submenu&#45;&#45;right\">\r\n                                            <span class=\"m-menu__arrow\"></span>\r\n                                            <ul class=\"m-menu__subnav\">\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCustomer Feedbacks\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupplier Feedbacks\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReviewed Feedbacks\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tResolved Feedbacks\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFeedback Reports\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                        <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                            <i class=\"m-menu__link-icon flaticon-users\"></i>\r\n                                            <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tRegister Member\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"m-menu__item  m-menu__item&#45;&#45;submenu m-menu__item&#45;&#45;rel\"\r\n                            data-menu-submenu-toggle=\"click\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                            <a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n                                <i class=\"m-menu__link-icon flaticon-line-graph\"></i>\r\n                                <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tReports\r\n\t\t\t\t\t\t\t\t</span>\r\n                                <i class=\"m-menu__hor-arrow la la-angle-down\"></i>\r\n                                <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n                            </a>\r\n                            <div class=\"m-menu__submenu  m-menu__submenu&#45;&#45;fixed m-menu__submenu&#45;&#45;left\"\r\n                                 style=\"width:1000px\">\r\n                                <span class=\"m-menu__arrow m-menu__arrow&#45;&#45;adjust\"></span>\r\n                                <div class=\"m-menu__subnav\">\r\n                                    <ul class=\"m-menu__content\">\r\n                                        <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item&#45;&#45;active\"\r\n                                            routerLinkActiveOptions=\"{ exact: true }\">\r\n                                            <h3 class=\"m-menu__heading m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tFinance Reports\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n                                            </h3>\r\n                                            <ul class=\"m-menu__inner\">\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-map\"></i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAnnual Reports\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-user\"></i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHR Reports\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-clipboard\"></i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPO Reports\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-graphic-1\"></i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFinance Margins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-graphic-2\"></i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRevenue Reports\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                        <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item&#45;&#45;active\"\r\n                                            routerLinkActiveOptions=\"{ exact: true }\">\r\n                                            <h3 class=\"m-menu__heading m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tProject Reports\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n                                            </h3>\r\n                                            <ul class=\"m-menu__inner\">\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;line\">\r\n                                                            <span></span>\r\n                                                        </i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCoca Cola CRM\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;line\">\r\n                                                            <span></span>\r\n                                                        </i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelta Airlines Booking Site\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;line\">\r\n                                                            <span></span>\r\n                                                        </i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMalibu Accounting\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;line\">\r\n                                                            <span></span>\r\n                                                        </i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tVineseed Website Rewamp\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;line\">\r\n                                                            <span></span>\r\n                                                        </i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tZircon Mobile App\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;line\">\r\n                                                            <span></span>\r\n                                                        </i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMercury CMS\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                        <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item&#45;&#45;active\"\r\n                                            routerLinkActiveOptions=\"{ exact: true }\">\r\n                                            <h3 class=\"m-menu__heading m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tHR Reports\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n                                            </h3>\r\n                                            <ul class=\"m-menu__inner\">\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;dot\">\r\n                                                            <span></span>\r\n                                                        </i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStaff Directory\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;dot\">\r\n                                                            <span></span>\r\n                                                        </i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tClient Directory\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;dot\">\r\n                                                            <span></span>\r\n                                                        </i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSalary Reports\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;dot\">\r\n                                                            <span></span>\r\n                                                        </i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStaff Payslips\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;dot\">\r\n                                                            <span></span>\r\n                                                        </i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCorporate Expenses\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;dot\">\r\n                                                            <span></span>\r\n                                                        </i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProject Expenses\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                        <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item&#45;&#45;active\"\r\n                                            routerLinkActiveOptions=\"{ exact: true }\">\r\n                                            <h3 class=\"m-menu__heading m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tReporting Apps\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n                                            </h3>\r\n                                            <ul class=\"m-menu__inner\">\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReport Adjusments\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSources & Mediums\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReporting Settings\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tConversions\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReport Flows\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAudit & Logs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"m-menu__item  m-menu__item&#45;&#45;submenu m-menu__item&#45;&#45;rel\"\r\n                            data-menu-submenu-toggle=\"click\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                            <a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n                                <i class=\"m-menu__link-icon flaticon-paper-plane\"></i>\r\n                                <span class=\"m-menu__link-title\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tApps\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge&#45;&#45;brand m-badge&#45;&#45;wide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tnew\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n                                <i class=\"m-menu__hor-arrow la la-angle-down\"></i>\r\n                                <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n                            </a>\r\n                            <div class=\"m-menu__submenu m-menu__submenu&#45;&#45;classic m-menu__submenu&#45;&#45;left\">\r\n                                <span class=\"m-menu__arrow m-menu__arrow&#45;&#45;adjust\"></span>\r\n                                <ul class=\"m-menu__subnav\">\r\n                                    <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                        <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                            <i class=\"m-menu__link-icon flaticon-business\"></i>\r\n                                            <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\teCommerce\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item  m-menu__item&#45;&#45;submenu\" data-menu-submenu-toggle=\"hover\"\r\n                                        data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                        <a routerLink=\"/crud/datatable_v1\" class=\"m-menu__link m-menu__toggle\">\r\n                                            <i class=\"m-menu__link-icon flaticon-computer\"></i>\r\n                                            <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tAudience\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                            <i class=\"m-menu__hor-arrow la la-angle-right\"></i>\r\n                                            <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n                                        </a>\r\n                                        <div class=\"m-menu__submenu m-menu__submenu&#45;&#45;classic m-menu__submenu&#45;&#45;right\">\r\n                                            <span class=\"m-menu__arrow\"></span>\r\n                                            <ul class=\"m-menu__subnav\">\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-users\"></i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActive Users\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-interface-1\"></i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUser Explorer\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-lifebuoy\"></i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUsers Flows\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-graphic-1\"></i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMarket Segments\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-graphic\"></i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUser Reports\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                        <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                            <i class=\"m-menu__link-icon flaticon-map\"></i>\r\n                                            <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tMarketing\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                        <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                            <i class=\"m-menu__link-icon flaticon-graphic-2\"></i>\r\n                                            <span class=\"m-menu__link-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tCampaigns\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge&#45;&#45;success\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item  m-menu__item&#45;&#45;submenu\" data-menu-submenu-toggle=\"hover\"\r\n                                        data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                        <a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n                                            <i class=\"m-menu__link-icon flaticon-infinity\"></i>\r\n                                            <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tCloud Manager\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                            <i class=\"m-menu__hor-arrow la la-angle-right\"></i>\r\n                                            <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n                                        </a>\r\n                                        <div class=\"m-menu__submenu m-menu__submenu&#45;&#45;classic m-menu__submenu&#45;&#45;left\">\r\n                                            <span class=\"m-menu__arrow\"></span>\r\n                                            <ul class=\"m-menu__subnav\">\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-add\"></i>\r\n                                                        <span class=\"m-menu__link-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFile Upload\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge&#45;&#45;danger\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-signs-1\"></i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFile Attributes\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-folder\"></i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFolders\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/header/actions\" class=\"m-menu__link\">\r\n                                                        <i class=\"m-menu__link-icon flaticon-cogwheel-2\"></i>\r\n                                                        <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem Settings\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>-->\r\n                <!-- END: Horizontal Menu -->                                <!-- BEGIN: Topbar -->\r\n                <div id=\"m_header_topbar\" class=\"m-topbar  m-stack m-stack--ver m-stack--general\">\r\n                    <div class=\"m-stack__item m-topbar__nav-wrapper\">\r\n                        <ul class=\"m-topbar__nav m-nav m-nav--inline\">\r\n                            <!--<li class=\"m-nav__item m-dropdown m-dropdown&#45;&#45;large m-dropdown&#45;&#45;arrow m-dropdown&#45;&#45;align-center m-dropdown&#45;&#45;mobile-full-width m-dropdown&#45;&#45;skin-light\tm-list-search m-list-search&#45;&#45;skin-light\"\r\n                                data-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\" id=\"m_quicksearch\"\r\n                                data-search-type=\"dropdown\">\r\n                                <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-search-1\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow&#45;&#45;center\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__header\">\r\n                                            <form class=\"m-list-search__form\">\r\n                                                <div class=\"m-list-search__form-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"m_quicksearch_input\" autocomplete=\"off\" type=\"text\"\r\n                                                               name=\"q\" class=\"m-list-search__form-input\" value=\"\"\r\n                                                               placeholder=\"Search...\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    <span class=\"m-list-search__form-icon-close\"\r\n                                                          id=\"m_quicksearch_close\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-remove\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                        <div class=\"m-dropdown__body\">\r\n                                            <div class=\"m-dropdown__scrollable m-scrollable\" data-max-height=\"300\"\r\n                                                 data-mobile-max-height=\"200\">\r\n                                                <div class=\"m-dropdown__content\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>-->\r\n                            <li class=\"m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center \tm-dropdown--mobile-full-width\"\r\n                                data-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\">\r\n                                <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\" id=\"m_topbar_notification_icon\">\r\n                                    <span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger\"></span>\r\n                                    <span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-music-2\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__header m--align-center\"\r\n                                             style=\"background: url(./assets/app/media/img/misc/notification_bg.jpg); background-size: cover;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t9 New\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                            <span class=\"m-dropdown__header-subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tUser Notifications\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                        </div>\r\n                                        <div class=\"m-dropdown__body\">\r\n                                            <div class=\"m-dropdown__content\">\r\n                                                <ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\"\r\n                                                    role=\"tablist\">\r\n                                                    <li class=\"nav-item m-tabs__item\">\r\n                                                        <a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\"\r\n                                                           href=\"#topbar_notifications_notifications\" role=\"tab\">\r\n                                                            Alerts\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"nav-item m-tabs__item\">\r\n                                                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\"\r\n                                                           href=\"#topbar_notifications_events\" role=\"tab\">\r\n                                                            Events\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"nav-item m-tabs__item\">\r\n                                                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\"\r\n                                                           href=\"#topbar_notifications_logs\" role=\"tab\">\r\n                                                            Logs\r\n                                                        </a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                                <div class=\"tab-content\">\r\n                                                    <div class=\"tab-pane active\" id=\"topbar_notifications_notifications\"\r\n                                                         role=\"tabpanel\">\r\n                                                        <div class=\"m-scrollable\" data-scrollable=\"true\"\r\n                                                             data-max-height=\"250\" data-mobile-max-height=\"200\">\r\n                                                            <div class=\"m-list-timeline m-list-timeline--skin-light\">\r\n                                                                <div class=\"m-list-timeline__items\">\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge -m-list-timeline__badge--state-success\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t12 new users registered\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpending\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t14 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew invoice received\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDB overloaded 80%\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsettled\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem error -\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCheck\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item m-list-timeline__item--read\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\turgent\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item m-list-timeline__item--read\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"tab-pane\" id=\"topbar_notifications_events\"\r\n                                                         role=\"tabpanel\">\r\n                                                        <div class=\"m-scrollable\" data-max-height=\"250\"\r\n                                                             data-mobile-max-height=\"200\">\r\n                                                            <div class=\"m-list-timeline m-list-timeline--skin-light\">\r\n                                                                <div class=\"m-list-timeline__items\">\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            New order received\r\n                                                                        </a>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-danger\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            New invoice received\r\n                                                                        </a>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            Production server up\r\n                                                                        </a>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            New order received\r\n                                                                        </a>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            System shutdown\r\n                                                                        </a>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            Production server down\r\n                                                                        </a>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"tab-pane\" id=\"topbar_notifications_logs\"\r\n                                                         role=\"tabpanel\">\r\n                                                        <div class=\"m-stack m-stack--ver m-stack--general\"\r\n                                                             style=\"min-height: 180px;\">\r\n                                                            <div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAll caught up!\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo new logs.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light\"\r\n                                data-dropdown-toggle=\"click\">\r\n                                <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n                                    <span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide\"></span>\r\n                                    <span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__header m--align-center\"\r\n                                             style=\"background: url(./assets/app/media/img/misc/quick_actions_bg.jpg); background-size: cover;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                            <span class=\"m-dropdown__header-subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tShortcuts\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                        </div>\r\n                                        <div class=\"m-dropdown__body m-dropdown__body--paddingless\">\r\n                                            <div class=\"m-dropdown__content\">\r\n                                                <div class=\"m-scrollable\" data-scrollable=\"false\" data-max-height=\"380\"\r\n                                                     data-mobile-max-height=\"200\">\r\n                                                    <div class=\"m-nav-grid m-nav-grid--skin-light\">\r\n                                                        <div class=\"m-nav-grid__row\">\r\n                                                            <a href=\"#\" class=\"m-nav-grid__item\">\r\n                                                                <i class=\"m-nav-grid__icon flaticon-file\"></i>\r\n                                                                <span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGenerate Report\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                            </a>\r\n                                                            <a href=\"#\" class=\"m-nav-grid__item\">\r\n                                                                <i class=\"m-nav-grid__icon flaticon-time\"></i>\r\n                                                                <span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd New Event\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                            </a>\r\n                                                        </div>\r\n                                                        <div class=\"m-nav-grid__row\">\r\n                                                            <a href=\"#\" class=\"m-nav-grid__item\">\r\n                                                                <i class=\"m-nav-grid__icon flaticon-folder\"></i>\r\n                                                                <span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCreate New Task\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                            </a>\r\n                                                            <a href=\"#\" class=\"m-nav-grid__item\">\r\n                                                                <i class=\"m-nav-grid__icon flaticon-clipboard\"></i>\r\n                                                                <span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCompleted Tasks\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                            </a>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\"\r\n                                data-dropdown-toggle=\"click\" *ngIf=\"user | async as users else noData\">\r\n                                <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__userpic\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{users.imgurl}}\"\r\n                                             class=\"m--img-rounded m--marginless m--img-centered\" alt=\"\"/>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                    <span class=\"m-topbar__username m--hide\">\r\n\t\t\t\t\t\t\t\t\t\tNick\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__header m--align-center\"\r\n                                             style=\"background: url(./assets/app/media/img/misc/user_profile_bg.jpg); background-size: cover;\">\r\n                                            <div class=\"m-card-user m-card-user--skin-dark\">\r\n                                                <div class=\"m-card-user__pic\">\r\n                                                    <img src=\"{{users.imgurl}}\"\r\n                                                         class=\"m--img-rounded m--marginless\" alt=\"\"/>\r\n                                                </div>\r\n                                                <div class=\"m-card-user__details\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-card-user__name m--font-weight-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{users.username}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    <a href=\"\" class=\"m-card-user__email m--font-weight-300 m-link\">\r\n                                                        {{users.email}}\r\n                                                    </a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-dropdown__body\">\r\n                                            <div class=\"m-dropdown__content\">\r\n                                                <ul class=\"m-nav m-nav--skin-light\">\r\n                                                    <li class=\"m-nav__section m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSection\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a [routerLink]=\"['/profile']\" class=\"m-nav__link\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-profile-1\"></i>\r\n                                                            <span class=\"m-nav__link-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-wrap\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMy Profile\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a routerLink=\"/header/profile\" class=\"m-nav__link\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a routerLink=\"/header/profile\" class=\"m-nav__link\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMessages\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a routerLink=\"/header/profile\" class=\"m-nav__link\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-info\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFAQ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a routerLink=\"/header/profile\" class=\"m-nav__link\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a routerLink=\"/snippets/pages/user/login-1\"\r\n                                                           class=\"btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\"\r\n                                                           routerLink=\"/logout\">\r\n                                                            Logout\r\n                                                        </a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li id=\"m_quick_sidebar_toggle\" class=\"m-nav__item\">\r\n                                <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-grid-menu\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <!-- END: Topbar -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n<!-- END: Header -->\r\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
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
    function HeaderNavComponent(_script, http) {
        this._script = _script;
        this.http = http;
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
        var id = localStorage.getItem('currentUser');
        this.user = this._script.getUserById(this.http, JSON.parse(id).id);
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
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_2__["ScriptLoaderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
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

module.exports = "<app-aside-nav></app-aside-nav>\r\n<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n"

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

module.exports = "<!-- begin::Quick Sidebar -->\r\n<div id=\"m_quick_sidebar\" class=\"m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light\" appunwraptag=\"\">\r\n\t<div class=\"m-quick-sidebar__content m--hide\">\r\n\t\t<span id=\"m_quick_sidebar_close\" class=\"m-quick-sidebar__close\">\r\n\t\t\t<i class=\"la la-close\"></i>\r\n\t\t</span>\r\n\t\t<ul id=\"m_quick_sidebar_tabs\" class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\r\n\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_messenger\" role=\"tab\">\r\n\t\t\t\t\tMessages\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t<a class=\"nav-link m-tabs__link\" \t\tdata-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_settings\" role=\"tab\">\r\n\t\t\t\t\tSettings\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_logs\" role=\"tab\">\r\n\t\t\t\t\tLogs\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<div class=\"tab-content\">\r\n\t\t\t<div class=\"tab-pane active m-scrollable\" id=\"m_quick_sidebar_tabs_messenger\" role=\"tabpanel\">\r\n\t\t\t\t<div class=\"m-messenger m-messenger--message-arrow m-messenger--skin-light\">\r\n\t\t\t\t\t<div class=\"m-messenger__messages\">\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tHi Bob. What time will be the meeting ?\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tHi Megan. It's at 2.30PM\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tWill the development team be joining ?\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tYes sure. I invited them as well\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\r\n\t\t\t\t\t\t\t2:30PM\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tNoted. For the Coca-Cola Mobile App project as well ?\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tYes, sure.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tPlease also prepare the quotation for the Loop CRM project as well.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\r\n\t\t\t\t\t\t\t3:15PM\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-no-pic m--bg-fill-danger\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tNoted. I will prepare it.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tThanks Megan. I will see you later.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tSure. See you in the meeting soon.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-messenger__seperator\"></div>\r\n\t\t\t\t\t<div class=\"m-messenger__form\">\r\n\t\t\t\t\t\t<div class=\"m-messenger__form-controls\">\r\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" placeholder=\"Type here...\" class=\"m-messenger__form-input\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__form-tools\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"m-messenger__form-attachment\">\r\n\t\t\t\t\t\t\t\t<i class=\"la la-paperclip\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_settings\" role=\"tabpanel\">\r\n\t\t\t\t<div class=\"m-list-settings\">\r\n\t\t\t\t\t<div class=\"m-list-settings__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\r\n\t\t\t\t\t\t\tGeneral Settings\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tEmail Notifications\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tSite Tracking\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tSMS Alerts\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tBackup Storage\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tAudit Logs\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-list-settings__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\r\n\t\t\t\t\t\t\tSystem Settings\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tSystem Logs\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tError Reporting\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tApplications Logs\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tBackup Servers\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tAudit Logs\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_logs\" role=\"tabpanel\">\r\n\t\t\t\t<div class=\"m-list-timeline\">\r\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\r\n\t\t\t\t\t\t\tSystem Logs\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t12 new users registered\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--warning m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\timportant\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew invoice received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\tresolved\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem error\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\tpending\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\r\n\t\t\t\t\t\t\tApplications Logs\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\turgent\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t12 new users registered\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew invoices received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem error\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\tpending\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\r\n\t\t\t\t\t\t\tServer Logs\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t12 new users registered\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew invoice received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem error\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1117 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- end::Quick Sidebar -->\r\n"

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

module.exports = "<!-- begin::Scroll Top -->\r\n<div class=\"m-scroll-top m-scroll-top--skin-top\" data-toggle=\"m-scroll-top\" data-scroll-offset=\"500\" data-scroll-speed=\"300\" appunwraptag=\"\">\r\n\t<i class=\"la la-arrow-up\"></i>\r\n</div>\r\n<!-- end::Scroll Top -->\r\n"

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

module.exports = "<app-aside-nav></app-aside-nav>\r\n<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n"

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

module.exports = "<!-- begin::Quick Nav -->\r\n<ul class=\"m-nav-sticky\" style=\"margin-top: 30px;\" appunwraptag=\"\">\r\n\t<!--\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Showcase\" data-placement=\"left\">\r\n\t\t<a href=\"\">\r\n\t\t\t<i class=\"la la-eye\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Pre-sale Chat\" data-placement=\"left\">\r\n\t\t<a href=\"\" >\r\n\t\t\t<i class=\"la la-comments-o\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t-->\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Purchase\" data-placement=\"left\">\r\n\t\t<a href=\"https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes\" >\r\n\t\t\t<i class=\"la la-cart-arrow-down\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Documentation\" data-placement=\"left\">\r\n\t\t<a href=\"https://keenthemes.com/metronic/documentation.html\" >\r\n\t\t\t<i class=\"la la-code-fork\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Support\" data-placement=\"left\">\r\n\t\t<a href=\"https://keenthemes.com/forums/forum/support/metronic5/\" >\r\n\t\t\t<i class=\"la la-life-ring\"></i>\r\n\t\t</a>\r\n\t</li>\r\n</ul>\r\n<!-- begin::Quick Nav -->\r\n"

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

module.exports = __webpack_require__(/*! C:\Users\jason\Documents\Git\CS-546-Web_Programming\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map