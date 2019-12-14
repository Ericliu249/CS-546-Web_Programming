import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import {Helpers} from '../helpers';
import {ScriptLoaderService} from '../_services/script-loader.service';
import {Observable} from "rxjs/internal/Observable";
import {UserInfo} from "../interfaces/angular-interfaces";

declare let mApp: any;
declare let mUtil: any;
declare let mLayout: any;

@Component({
    selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
    templateUrl: "./admin.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
    user: Observable<UserInfo>;

    constructor(private _script: ScriptLoaderService, private _router: Router) {

    }

    ngOnInit() {
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js'], true)
            .then(result => {
                Helpers.setLoading(false);
                // optional js to be loaded once
                this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
            });
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
                (<any>mLayout).closeMobileAsideMenuOffcanvas();
                (<any>mLayout).closeMobileHorMenuOffcanvas();
                (<any>mApp).scrollTop();
                Helpers.setLoading(true);
                // hide visible popover
                (<any>$('[data-toggle="m-popover"]')).popover('hide');
            }
            if (route instanceof NavigationEnd) {
                // init required js
                (<any>mApp).init();
                (<any>mUtil).init();
                Helpers.setLoading(false);
                // content m-wrapper animation
                let animation = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation);
                }).removeClass(animation).addClass(animation);
            }
        });

        $('#m_update_submit').click((e) => {
            let btn = $(e.target);
            let form = $(e.target).closest('form');
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
    }

}