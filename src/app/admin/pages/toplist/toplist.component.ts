import {ScriptLoaderService} from '../../../_services/script-loader.service';
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
    templateUrl: './toplist.component.html',
    encapsulation: ViewEncapsulation.None,

})
export class ToplistComponent implements OnInit, AfterViewInit, AfterContentInit {
    todolists$: Observable<Todolist[]>;
    safeHtml: SafeHtml;
    model: any = {};
    count = [1,2,3,4,5];

    constructor(private _script: ScriptLoaderService, private toastr: ToastrService, private http: HttpClient, private sanitizer: DomSanitizer, private _router: ActivatedRoute) {
    }

    ngOnInit() {
        this._router.queryParams.subscribe((params) => {
          this.model.location = params['location'];
        });
        /*if (this.model.location == null) {
            this.model.location = "New York";
        }*/
        this.todolists$ = this._script.getTopTodolists(this.http).pipe(map(data => _.values(data)));
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