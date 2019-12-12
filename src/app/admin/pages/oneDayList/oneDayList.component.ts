import {ScriptLoaderService} from './../../../_services/script-loader.service';
import {Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit} from '@angular/core';
import {Router, NavigationStart, NavigationEnd, ActivatedRoute} from '@angular/router';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {ToastrService} from 'ngx-toastr';
import {Observable} from "rxjs";
import * as _ from 'lodash';
import {map} from 'rxjs/operators';
import {OneDaylist, Todolist} from "../../../interfaces/angular-interfaces";

@Component({
    selector: 'app-onedaylist',
    templateUrl: './oneDayList.component.html',
    encapsulation: ViewEncapsulation.None,
    template: `
        <!-- BEGIN: Subheader -->
        <div class="m-subheader" appunwraptag="">
            <div class="d-flex align-items-center">
                <div class="mr-auto">
                    <h3 class="m-subheader__title">
                        Dashboard
                    </h3>
                </div>
                <div>
			<span class="m-subheader__daterange" id="m_dashboard_daterangepicker">
				<span class="m-subheader__daterange-label">
					<span class="m-subheader__daterange-title"></span>
					<span class="m-subheader__daterange-date m--font-brand"></span>
				</span>
				<a href="#" class="btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill">
					<i class="la la-angle-down"></i>
				</a>
			</span>
                </div>
            </div>
        </div>
        <!-- END: Subheader -->
        <div class="m-content">
            <!--Begin::Section-->
            <div class="row">
                <div class="col-xl-12 col-lg-12">
                    <div class="m-portlet m-portlet--full-height  ">
                        <div class="m-portlet__body">
                            <div class="m-widget19"*ngIf="todolist | async as todolists else noData">
                                <div class="m-widget19__pic m-portlet-fit--top m-portlet-fit--sides"
                                     style="min-height-: 86px;">
                                    <img src="{{todolists.imgurl}}" alt=""
                                         style="position: relative;height: 280px;">
                                    <h3 class="m-widget19__title m--font-light">
                                        {{todolists.name}}
                                    </h3>
                                    <div class="m-widget19__shadow"></div>
                                </div>
                                <div class="m-widget19__content">
                                    <div class="m-widget19__header">
                                        <div class="m-widget19__user-img">
                                        </div>
                                        <div class="m-widget19__info">
														<span class="m-widget19__username">
															{{todolists.season}}
														</span>
                                            <br>
                                            <span class="m-widget19__time">
															{{todolists.days}} days tour
														</span>
                                        </div>
                                        <div class="m-widget19__stats">
														<span class="m-widget19__number m--font-brand">
															{{todolists.likes}}
														</span>
                                            <span class="m-widget19__comment">
															Likes
														</span>
                                        </div>
                                    </div>
                                    <div class="m-widget19__body">


                                        <div class="m-scrollable mCustomScrollbar _mCS_5 mCS-autoHide"
                                             data-scrollbar-shown="true"
                                             data-scrollable="true"
                                             data-max-height="580"
                                             style="overflow: visible; height: 1380px; max-height: 1380px; position: relative;">
                                            <div class="m-timeline-2"
                                                 *ngIf="onedaylists$ | async as onedaylists else noData;">
                                                <div class="m-timeline-2__items  m&#45;&#45;padding-top-25 m&#45;&#45;padding-bottom-30"
                                                     *ngFor="let onedaylist of onedaylists;let lastItem = last;">
                                                    <div class="m-timeline-2__item">
														<span class="m-timeline-2__item-time">
															{{onedaylist.time}}
														</span>
                                                        <div class="m-timeline-2__item-cricle">
                                                            <i class="fa fa-ticket m&#45;&#45;font-success"></i>
                                                        </div>
                                                        <div class="m-timeline-2__item-text  m&#45;&#45;padding-top-5">
                                                            <div class="m-widget5">
                                                                <div class="m-widget5__item">
                                                                    <div class="m-widget5__pic">
                                                                        <a [routerLink]="['/place',onedaylist._id]"><img class="m-widget7__img"
                                                                             src="{{ onedaylist.imgurl }}" alt="" [routerLink]="['/place',onedaylist._id]">
                                                                        </a></div>
                                                                    <div class="m-widget5__content">
                                                                        <a [routerLink]="['/place',onedaylist._id]">
                                                                        <h4 class="m-widget5__title">
                                                                            {{onedaylist.name}}
                                                                        </h4></a>
                                                                        <span class="m-widget5__desc">
																{{onedaylist.description}}
															</span>
                                                                        <!--<div class="m-widget5__info">
																<span class="m-widget5__author">
																	Author:
																</span>
                                                                            <span class="m-widget5__info-label">
																	author:
																</span>
                                                                            <span class="m-widget5__info-author-name">
																	Fly themes
																</span>
                                                                            <span class="m-widget5__info-label">
																	Released:
																</span>
                                                                            <span class="m-widget5__info-date m&#45;&#45;font-info">
																	23.08.17
																</span>
                                                                        </div>-->
                                                                    </div>
                                                                    <div class="m-widget5__stats1">
															<span class="m-widget5__number">
																{{onedaylist.day}}
															</span>
                                                                        <br>
                                                                        <span class="m-widget5__sales">
																visit time
															</span>
                                                                    </div>
                                                                    <div class="m-widget5__stats2">
															<span class="m-widget5__number">
																{{onedaylist.location}}
															</span>
                                                                        <br>
                                                                        <span class="m-widget5__votes">
																location
															</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="m-timeline-2__item m&#45;&#45;margin-top-30" *ngIf="!lastItem">
														<span class="m-timeline-2__item-time">
															{{ onedaylist.traveltime }}
														</span>
                                                        <div class="m-timeline-2__item-cricle">
                                                            <i class="fa fa-share-square  m--font-info"></i>
                                                        </div>
                                                        <div class="m-timeline-2__item-text m-timeline-2__item-text&#45;&#45;bold">
                                                            straight line distance {{onedaylist.distance}}
                                                        </div>
                                                        <!--<div class="m-list-pics m-list-pics&#45;&#45;sm m&#45;&#45;padding-left-20">
                                                            <a href="../../#">
                                                                <img src="assets/app/media/img/users/100_4.jpg"
                                                                     title="">
                                                            </a>
                                                            <a href="../../#">
                                                                <img src="assets/app/media/img/users/100_13.jpg"
                                                                     title="">
                                                            </a>
                                                            <a href="../../#">
                                                                <img src="assets/app/media/img/users/100_11.jpg"
                                                                     title="">
                                                            </a>
                                                            <a href="../../#">
                                                                <img src="assets/app/media/img/users/100_14.jpg"
                                                                     title="">
                                                            </a>
                                                        </div>-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="m-widget19__action">
                                    <button type="button"
                                            class="btn m-btn&#45;&#45;pill btn-secondary m-btn m-btn&#45;&#45;hover-brand m-btn&#45;&#45;custom">
                                        Read More
                                    </button>
                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    `
})

export class OneDayListComponent implements OnInit, AfterViewInit, AfterContentInit {
    onedaylists$: Observable<OneDaylist[]>;
    model: any = {};
    todolist: Observable<Todolist>;

    constructor(private _script: ScriptLoaderService, private toastr: ToastrService, private http: HttpClient, private _router: ActivatedRoute) {
    }

    ngOnInit() {
        this._router.params.subscribe((params) => {
            this.model.id = params;
        });
        this.todolist = this._script.getTodolistById(this.http, this.model.id['id']);
        this.onedaylists$ = this._script.getOneDaylists(this.http, this.model.id['id']).pipe(map(data => _.values(data)));

    }

    ngAfterViewInit() {
        this._script.loadScripts('app-index',
            ['assets/app/js/dashboard.js']);

    }

    ngAfterContentInit() {
        setTimeout(() => this.toastr.success('Hello world!', 'Toastr fun!'))
    }
}