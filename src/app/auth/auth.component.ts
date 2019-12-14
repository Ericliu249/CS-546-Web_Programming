import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ScriptLoaderService} from '../_services/script-loader.service';
import {AuthenticationService} from './_services/authentication.service';
import {AlertService} from './_services/alert.service';
import {UserService} from './_services/user.service';
import {AlertComponent} from './_directives/alert.component';
import {LoginCustom} from './_helpers/login-custom';
import {Helpers} from '../helpers';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInfo} from "../interfaces/angular-interfaces";
import * as $ from 'jquery';

@Component({
    selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
    templateUrl: './templates/login-1.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class AuthComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    user: Observable<UserInfo>;


    @ViewChild('alertSignin',
        {read: ViewContainerRef}) alertSignin: ViewContainerRef;
    @ViewChild('alertSignup',
        {read: ViewContainerRef}) alertSignup: ViewContainerRef;
    @ViewChild('alertForgotPass',
        {read: ViewContainerRef}) alertForgotPass: ViewContainerRef;

    constructor(
        private _router: Router,
        private _script: ScriptLoaderService,
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _authService: AuthenticationService,
        private _alertService: AlertService,
        private http: HttpClient,
        private cfr: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.model.remember = true;
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);

        this._script.loadScripts('body', [
            'assets/vendors/base/vendors.bundle.js',
            'assets/demo/default/base/scripts.bundle.js'], true).then(() => {
            Helpers.setLoading(false);
            LoginCustom.init();
        });
    }

    signin() {
        this.loading = true;
        this._script.signin(this.http, this.model).subscribe(success => {
            this._authService.login(success._id);
            this._router.navigate([this.returnUrl]);
            this.showAlert('alertSignin');
            this.loading = false;
        }, error => {
            this.showError(error.error);
            this.showAlert('alertSignin');
            this.loading = false;
        });
    }

    signup() {
        this.loading = true;

        this._alertService.success(
            'Thank you. To complete your registration please check your email.',
            true);
        this.loading = false;
        this._script.signup(this.http, this.model).subscribe(success => {
            LoginCustom.displaySignInForm();
            this.model = {};
        }, error => {
            LoginCustom.displaySignUpForm();
            this.model = {};
        });
    }

    forgotPass() {
        this.loading = true;

        this.showAlert('alertSignin');
        this._alertService.success(
            'Cool! Password recovery instruction has been sent to your email.',
            true);
        this.loading = false;
        LoginCustom.displaySignInForm();
        this.model = {};

    }

    showAlert(target) {
        this[target].clear();
        let factory = this.cfr.resolveComponentFactory(AlertComponent);
        let ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }

    showError(error) {
        $("#errorMsg").text(error.error);
        $("#errorMsg").addClass("form-control-feedback");
        //this['errorMsg'].display();
    }
}