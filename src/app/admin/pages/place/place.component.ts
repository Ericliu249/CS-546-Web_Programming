///<reference path="../../../interfaces/angular-interfaces.ts"/>
import {ScriptLoaderService} from './../../../_services/script-loader.service';
import {Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit} from '@angular/core';
import {Router, NavigationStart, NavigationEnd, ActivatedRoute} from '@angular/router';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {ToastrService} from 'ngx-toastr';
import {Observable} from "rxjs";
import * as _ from 'lodash';
import {map} from 'rxjs/operators';
import {Place} from "../../../interfaces/angular-interfaces";
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-place',
    templateUrl: './place.component.html',
    encapsulation: ViewEncapsulation.None,
    template: `
        <!-- BEGIN PAGE TITLE-->
        <h1 class="page-title">

        </h1>
        <!-- END PAGE TITLE-->
        <!-- END PAGE HEADER-->
        <div class="blog-page blog-content-2">
            <div class="row">
                <div class="col-lg-12" *ngIf="place | async as places else noData">
                    <div class="blog-single-content bordered blog-container">
                        <div class="blog-single-head">
                            <h1 class="blog-single-head-title">{{places.name}}</h1>
                            <div class="blog-single-head-date">
                                <i class="icon-calendar font-blue"></i>
                                <a href="javascript:;">{{places.typeOfPlace}}</a>
                            </div>
                        </div>
                        <div class="blog-single-img">
                            <img src="{{places.image}}" style="height: 200px;"/></div>
                        <div class="blog-single-desc">
                            <p [innerHtml]="safeHtml"></p><a href="{{places.wiki}}">Wikipedia</a>
                            <div class="m-widget13">
                                <div class="m-widget13__item">
												<span class="m-widget13__desc m--align-right" style="width: 10%">
													Address:
												</span>
                                    <span class="m-widget13__text m-widget13__text-bolder" style="width: 90%">
													{{places.location}}
												</span>
                                </div>
                                <div class="m-widget13__item">
												<span class="m-widget13__desc m--align-right" style="width: 10%">
													Hours:
												</span>
                                    <span class="m-widget13__text m-widget13__text-bolder" style="width: 90%" [innerHtml]="safeHtml1">
													
												</span>
                                </div>
                                <div class="m-widget13__item">
												<span class="m-widget13__desc m--align-right" style="width: 10%">
													Adminsion:
												</span>
                                    <span class="m-widget13__text m-widget13__text-bolder" style="width: 90%" [innerHtml]="safeHtml2">
													
												</span>
                                </div>
                                <div class="m-widget13__item">
												<span class="m-widget13__desc m--align-right" style="width: 10%">
													Visit time:
												</span>
                                    <span class="m-widget13__text m-widget13__text-bolder" style="width: 90%">
												{{places.time}}
                            </span>
                                </div>
                                <div class="m-widget13__item">
												<span class="m-widget13__desc m--align-right" style="width: 10%">
													Tag:
												</span>
                                    <span class="m-widget13__text m-widget13__number-bolder m--font-brand"
                                          style="width: 90%">
													{{places.tag}}
												</span>
                                </div>
                            </div>
                        </div>
                        <div class="blog-single-foot">
                            <ul class="blog-post-tags">
                                <li class="uppercase">
                                    <a href="{{places.map}}" routerLink="{{places.map}}">Map</a>
                                </li>
                            </ul>
                        </div>
                        <div class="blog-comments">
                            <h3 class="sbold blog-comments-title">Comments(30)</h3>
                            <div class="c-comment-list">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" alt="" src="../assets/pages/img/avatars/team1.jpg"> </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">
                                            <a href="#">Sean</a> on
                                            <span class="c-date">23 May 2015, 10:40AM</span>
                                        </h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                        turpis.
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" alt="" src="../assets/pages/img/avatars/team3.jpg"> </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">
                                            <a href="#">Strong Strong</a> on
                                            <span class="c-date">21 May 2015, 11:40AM</span>
                                        </h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                        turpis.
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#">
                                                    <img class="media-object" alt=""
                                                         src="../assets/pages/img/avatars/team4.jpg"> </a>
                                            </div>
                                            <div class="media-body">
                                                <h4 class="media-heading">
                                                    <a href="#">Emma Stone</a> on
                                                    <span class="c-date">30 May 2015, 9:40PM</span>
                                                </h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus
                                                viverra turpis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" alt="" src="../assets/pages/img/avatars/team7.jpg"> </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">
                                            <a href="#">Nick Nilson</a> on
                                            <span class="c-date">30 May 2015, 9:40PM</span>
                                        </h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                        turpis.
                                    </div>
                                </div>
                            </div>
                            <h3 class="sbold blog-comments-title">Leave A Comment</h3>
                            <form action="#">
                                <div class="form-group">
                                    <input type="text" placeholder="Your Name" class="form-control c-square"></div>
                                <div class="form-group">
                                    <input type="text" placeholder="Your Email" class="form-control c-square"></div>
                                <div class="form-group">
                                    <input type="text" placeholder="Your Website" class="form-control c-square"></div>
                                <div class="form-group">
                            <textarea rows="8" name="message" placeholder="Write comment here ..."
                                      class="form-control c-square"></textarea>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn blue uppercase btn-md sbold btn-block">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class PlaceComponent implements OnInit, AfterViewInit, AfterContentInit {
    model: any = {};
    place: Observable<Place>;
    safeHtml: SafeHtml;
    safeHtml1: SafeHtml;
    safeHtml2: SafeHtml;

    constructor(private _script: ScriptLoaderService,
                private toastr: ToastrService,
                private http: HttpClient,
                private _router: ActivatedRoute,
                private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this._router.params.subscribe((params) => {
            this.model.id = params;
        });
        this.place = this._script.getPlace(this.http, this.model.id['id']);
        this.place.subscribe(ress => {
            this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(ress['description']);
            this.safeHtml1 = this.sanitizer.bypassSecurityTrustHtml(ress['tips']);
            this.safeHtml2 = this.sanitizer.bypassSecurityTrustHtml(ress['ticket']);
        });
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-index',['assets/app/js/dashboard.js']);
    }

    ngAfterContentInit() {
        setTimeout(() => this.toastr.success('Hello world!', 'Toastr fun!'))
    }
}