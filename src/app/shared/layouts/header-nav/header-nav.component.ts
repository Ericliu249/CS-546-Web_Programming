import {Component, OnInit, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {Helpers} from '../../../helpers';
import {HttpClient} from "@angular/common/http";
import {ScriptLoaderService} from "../../../_services/script-loader.service";
import {UserInfo} from "../../../interfaces/angular-interfaces";
import {Observable} from "rxjs/index";

declare let mLayout: any;

@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

    user: Observable<UserInfo>;

    constructor(private _script: ScriptLoaderService,
                private http: HttpClient) {

    }

    ngOnInit() {
        let id = localStorage.getItem('currentUser');
        this.user = this._script.getUserById(this.http, JSON.parse(id).id);
    }

    ngAfterViewInit() {

        mLayout.initHeader();

    }

}