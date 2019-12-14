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
    selector: 'app-place',
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

    constructor(private _script: ScriptLoaderService,
                private toastr: ToastrService,
                private http: HttpClient,
                private _router: ActivatedRoute,
                private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        let id = localStorage.getItem('currentUser');
        this.user = this._script.getUserById(this.http, JSON.parse(id).id);
        this.user.subscribe(success => {
            this.preferredFood = success.preferredFood;
            this.preferDistance = success.preferDistance;
            this.dietaryRestrictions = success.dietaryRestrictions;
            this.interestPlaces = success.interestPlaces;
        });
        $('#updateF').submit((e) => {
            console.log("submit");
            let form = $(e.target).closest('form');
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
            this.update();
        });
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-index', ['assets/app/js/dashboard.js']);
    }

    ngAfterContentInit() {
    }

    update() {
        console.log(this.model);
        this._script.update(this.http, this.model).subscribe(success => {
            console.log(success);
        }, error => {
            console.log(error);
        });
    }
}