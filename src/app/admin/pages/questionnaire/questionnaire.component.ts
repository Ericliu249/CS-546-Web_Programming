///<reference path="../../../interfaces/angular-interfaces.ts"/>
import {ScriptLoaderService} from './../../../_services/script-loader.service';
import {Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit, Input} from '@angular/core';
import {Router, NavigationStart, NavigationEnd, ActivatedRoute} from '@angular/router';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {ToastrService} from 'ngx-toastr';
import {Observable} from "rxjs";
import * as _ from 'lodash';
import {map} from 'rxjs/operators';
import {Place, UserInfo} from "../../../interfaces/angular-interfaces";
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import * as $ from 'jquery';
import {noop} from "rxjs/internal-compatibility";

@Component({
    selector: 'app-update',
    templateUrl: './questionnaire.component.html',
    encapsulation: ViewEncapsulation.None
})

export class QuestionnaireComponent implements OnInit, AfterViewInit, AfterContentInit {
    user: Observable<UserInfo>;
    preferredFood: {};
    interestPlaces: {};
    preferDistance: {};
    dietaryRestrictions: {};
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(private _script: ScriptLoaderService,
                private toastr: ToastrService,
                private http: HttpClient,
                private sanitizer: DomSanitizer,
                private _router: Router,
                private _route: ActivatedRoute,) {
    }

    ngOnInit() {
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/profile';
        let id = localStorage.getItem('currentUser');
        this.user = this._script.getUserById(this.http, JSON.parse(id).id);
        this.user.subscribe(success => {
            this.preferredFood = success.preferredFood;
            this.preferDistance = success.preferDistance;
            this.dietaryRestrictions = success.dietaryRestrictions;
            this.interestPlaces = success.interestPlaces;
        });
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-index', ['assets/app/js/dashboard.js']);
    }

    ngAfterContentInit() {
    }

    updateMyProfile() {
        let ip = [{
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
                    $('[name=interestPlaces]:checked').each(function (index) {
                        if (value == $(this).val()) {
                            obj['isChecked'] = true;
                        }
                    });
                }
            }
        }
        let dr = [{
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
                    $('[name=dietaryRestrictions]:checked').each(function (index) {
                        if (value == $(this).val()) {
                            obj['isChecked'] = true;
                        }
                    });
                }
            }
        }
        let pf = [{
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
                    $('[name=preferredFood]:checked').each(function (index) {
                        if (value == $(this).val()) {
                            obj['isChecked'] = true;
                        }
                    });
                }
            }
        }
        let pd = [{
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
                    $('[name=preferDistance]:checked').each(function (index) {
                        if (value == $(this).val()) {
                            obj['isChecked'] = true;
                        }
                    });
                }
            }
        }
        let id = localStorage.getItem('currentUser');
        this.model._id = JSON.parse(id).id;
        this.model.preferredFood = pf;
        this.model.preferDistance = pd;
        this.model.dietaryRestrictions = dr;
        this.model.interestPlaces = ip;
        this.loading = true;
        this._script.update(this.http, this.model).subscribe(success => {
            this._router.navigate([this.returnUrl]);
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        });
    }
}