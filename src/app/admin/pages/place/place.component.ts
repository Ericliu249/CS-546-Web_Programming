///<reference path="../../../interfaces/angular-interfaces.ts"/>
import {ScriptLoaderService} from './../../../_services/script-loader.service';
import {Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit} from '@angular/core';
import {Router, NavigationStart, NavigationEnd, ActivatedRoute} from '@angular/router';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {ToastrService} from 'ngx-toastr';
import {Observable} from "rxjs";
import * as _ from 'lodash';
import {map} from 'rxjs/operators';
import {Place, Review, UserInfo} from "../../../interfaces/angular-interfaces";
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
                        <p [innerHtml]="safeHtml"></p><a [routerLink]="[places.wiki]">Wikipedia</a>
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
                                <a href="{{places.map}}" [routerLink]="[places.map]">Map</a>
                            </li>
                        </ul>
                    </div>
                    <div class="blog-comments">
                <h3 class="sbold blog-comments-title">Reviews</h3>
                <div class="c-comment-list" *ngFor="let rev of reviews$ | async">
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" alt="" src="../assets/pages/img/avatars/team1.jpg"> </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">
                                <a>{{rev.name}}</a> on
                                <span class="c-date">{{rev.date}}</span>
                            </h4> {{rev.description}}
                        </div>
                    </div>
                </div>
                <h3 class="sbold blog-comments-title">Share your reviews!</h3>
                <form (ngSubmit)="onSubmit()" action="" id= "review-form">
                    
                    <div class="form-group">
                        <textarea rows="8" name="content" placeholder="Write review here ..."
                                  class="form-control c-square" id="content" [(ngModel)]="model.content"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn blue uppercase btn-md sbold btn-block" form="review-form">Submit</button>
                    </div>

                    <div class="col-lg-12" *ngIf="place | async as places else noData">
                        <a [routerLink]="['/']">Reload</a>
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
    reviews$: Observable<Review[]>;
    returnUrl: string;
    user: Observable<UserInfo>;

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

        this.reviews$ = this._script.getReviews(this.http, this.model.id['id']);
    }
    onSubmit(){
        
        this.place.subscribe(ress => {
            let id = localStorage.getItem('currentUser');
            this.user = this._script.getUserById(this.http, JSON.parse(id).id);
            this.user.subscribe(data => {
                this._script.postReviews(this.http, ress._id ,this.model.content, data.username, data._id).subscribe(res => {
                    setTimeout(() => this.toastr.success('Review has been sent!', 'Please reload page!'))
    
                });

            });
            
            
        });
        
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-index',['assets/app/js/dashboard.js']);
    }

    ngAfterContentInit() {
        setTimeout(() => this.toastr.success('Hello world!', 'Toastr fun!'))
    }
}