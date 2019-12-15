import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../_services/authentication.service";
import {Helpers} from "../../helpers";
import {ScriptLoaderService} from "../../_services/script-loader.service";
import {HttpClient} from "@angular/common/http";
import {UserInfo} from "../../interfaces/angular-interfaces";
import {Observable} from "rxjs/index";
import * as $ from "jquery";

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class LogoutComponent implements OnInit {

    constructor(private _router: Router,
                private _authService: AuthenticationService,
                private _script: ScriptLoaderService,
                private http: HttpClient) {
    }

    ngOnInit(): void {
        Helpers.setLoading(true);
        $.ajax({
            url: "http://localhost:3000/admin/logout",
            type: 'GET',
            success: function(res) {
            }
        });
        this.navigate();
    }
    navigate():void{
        this._authService.logout();
        this._router.navigate(['/login']);
    }
}