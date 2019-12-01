import {ScriptLoaderService} from './../../../_services/script-loader.service';
import {Component, OnInit, ViewEncapsulation, AfterViewInit, AfterContentInit} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {ToastrService} from 'ngx-toastr';
import {Observable} from "rxjs";
import * as _ from 'lodash';
import {tap} from "rxjs/operators";
import {map} from 'rxjs/operators';
import {Todolist} from "../../../interfaces/angular-interfaces";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
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
                <div class="blog-page blog-content-1">
                    <div class="row">
                        <div class="col-lg-12" *ngIf="todolists$ | async as todolists else noData">
                            <div class="row">
                                <div class="col-sm-3" *ngFor="let todolist of todolists">
                                    <div class="blog-post-sm bordered blog-container">
                                        <div class="blog-img-thumb">
                                            <a href="javascript:;">
                                                <img src="{{ todolist.imgurl }}"/>
                                            </a>
                                        </div>
                                        <div class="blog-post-content">
                                            <h2 class="blog-title blog-post-title">
                                                <a href="javascript:;">{{ todolist.name }}</a>
                                            </h2>
                                            <p class="blog-post-desc">{{ todolist.description }}</p>
                                            <div class="blog-post-foot">
                                                <div class="blog-post-meta">
                                                    <i class="flaticon-time font-blue"></i>
                                                    <a href="javascript:;">{{ todolist.days }}</a>
                                                </div>
                                                <div class="blog-post-meta">
                                                    <i class="flaticon-comment font-blue"></i>
                                                    <a href="javascript:;">{{ todolist.likes }} Comments</a>
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
    `
})
export class DashboardComponent implements OnInit, AfterViewInit, AfterContentInit {
    todolists$: Observable<Todolist[]>;

    constructor(private _script: ScriptLoaderService, private toastr: ToastrService, private http: HttpClient) {
    }

    ngOnInit() {
        /*this.http
            .get<Todolist[]>("http://localhost:3000/todolist/getAll")
            .pipe(tap(console.log))
            .pipe(map(data => _.values(data)));*/
        this.todolists$ = this._script.getTodolists(this.http).pipe(map(data => _.values(data)));

    }

    ngAfterViewInit() {
        this._script.loadScripts('app-index',
            ['assets/app/js/dashboard.js']);

    }

    ngAfterContentInit() {
        setTimeout(() => this.toastr.success('Hello world!', 'Toastr fun!'))

    }
}