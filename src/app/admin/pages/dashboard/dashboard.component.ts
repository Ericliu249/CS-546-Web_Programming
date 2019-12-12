import {ScriptLoaderService} from './../../../_services/script-loader.service';
import {Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {ToastrService} from 'ngx-toastr';
import {Observable} from "rxjs";
import * as _ from 'lodash';
import {tap} from "rxjs/operators";
import {map} from 'rxjs/operators';
import {Todolist} from "../../../interfaces/angular-interfaces";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div *ngIf="todolists$ | async as todolists else noData">
            <!-- BEGIN: Subheader -->
            <div class="m-subheader" appunwraptag="">
                <div class="d-flex align-items-center">
                    <div class="mr-auto">
                        <h3 class="m-subheader__title" [innerHtml]="safeHtml">
                        </h3>
                    </div>
                    <div>
                        <!--<span class="m-subheader__daterange" id="m_dashboard_daterangepicker">
                            <span class="m-subheader__daterange-label">
                                <span class="m-subheader__daterange-title"></span>
                                <span class="m-subheader__daterange-date m&#45;&#45;font-brand"></span>
                            </span>
                            <a href="#" class="btn btn-sm btn-brand m-btn m-btn&#45;&#45;icon m-btn&#45;&#45;icon-only m-btn&#45;&#45;custom m-btn&#45;&#45;pill">
                                <i class="la la-angle-down"></i>
                            </a>
                        </span>-->
                    </div>
                </div>
            </div>
            <!-- END: Subheader -->
            <div class="m-content">
                <!--Begin::Section-->
                <div class="row">
                    <div class="blog-page blog-content-1">
                        <div class="row">
                            <div class="col-lg-5" style="margin-bottom:20px;"></div>
                            <div class="col-lg-7" style="margin-bottom:20px;">


                                <div class="m-dropdown m-dropdown--inline  m-dropdown--arrow m-dropdown--align-right"
                                     data-dropdown-toggle="hover">
                                    <a href="#" class="m-badge m-badge--brand m-badge--wide"
                                       style="line-height: 30px;font-size: 14px;">
                                        <i class="m-nav__link-icon flaticon-search"></i>Search by location
                                        <i class="m-menu__hor-arrow la la-angle-down"></i>
                                    </a>
                                    <div class="m-dropdown__wrapper">
                                        <span class="m-dropdown__arrow m-dropdown__arrow--right"></span>
                                        <div class="m-dropdown__inner">
                                            <div class="m-dropdown__body">
                                                <div class="m-dropdown__content">
                                                    <ul class="m-nav">
                                                        <li class="m-nav__section m-nav__section--first">
													<span class="m-nav__section-text">
														Location
													</span>
                                                        </li>
                                                        <li class="m-nav__item">
                                                            <a class="m-nav__link" href="http://localhost:3000/admin">
                                                                <span class="m-nav__link-text">All cities</span>
                                                            </a>
                                                        </li>
                                                        <li class="m-nav__item">
                                                            <a class="m-nav__link" href="http://localhost:3000/admin/?location=New York">
                                                                <span class="m-nav__link-text">New york</span>
                                                            </a>
                                                        </li>
                                                        <li class="m-nav__item">
                                                            <a class="m-nav__link" href="http://localhost:3000/admin/?location=Tokyo">
                                                                <span class="m-nav__link-text">Tokyo</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-sm-3" *ngFor="let todolist of todolists">
                                        <div class="blog-post-sm bordered blog-container">
                                            <div class="blog-img-thumb" style="height: 70px;">
                                                <a [routerLink]="['/onedaylist',todolist._id]">
                                                    <img src="{{ todolist.imgurl }}"/>
                                                </a>
                                            </div>
                                            <div class="blog-post-content">
                                                <h2 class="blog-title blog-post-title">
                                                    <a [routerLink]="['/onedaylist',todolist._id]">{{ todolist.name
                                                        }}</a>
                                                </h2>
                                                <p class="blog-post-desc">{{ todolist.description }}</p>
                                                <div class="blog-post-foot">
                                                    <div class="blog-post-meta">
                                                        <i class="flaticon-time font-blue"></i>
                                                        <a [routerLink]="['/onedaylist',todolist._id]">{{ todolist.days
                                                            }}</a>
                                                    </div>
                                                    <div class="blog-post-meta">
                                                        <i class="flaticon-comment font-blue"></i>
                                                        <a [routerLink]="['/onedaylist',todolist._id]">{{ todolist.likes
                                                            }} Comments</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ng-template #noData>No Data Available</ng-template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class DashboardComponent implements OnInit, AfterViewInit, AfterContentInit {
    todolists$: Observable<Todolist[]>;
    safeHtml: SafeHtml;
    model: any = {};

    constructor(private _script: ScriptLoaderService, private toastr: ToastrService, private http: HttpClient, private sanitizer: DomSanitizer, private _router: ActivatedRoute) {
    }

    ngOnInit() {
        this._router.queryParams.subscribe((params) => {
            this.model.location = params['location'];
        });
        /*if (this.model.location == null) {
            this.model.location = "New York";
        }*/
        this.todolists$ = this._script.getTodolists(this.http, this.model.location).pipe(map(data => _.values(data)));
        this.todolists$.subscribe(ress => {
            this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(ress[0]['oneDayListId'][0]['location']);
        });
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-index',
            ['assets/app/js/dashboard.js']);

    }

    ngAfterContentInit() {
        setTimeout(() => this.toastr.success('Welcome to Buddy Vacation!', 'Have fun!'))
    }
}