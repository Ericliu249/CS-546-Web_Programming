import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Todolist, UserInfo} from "../../interfaces/angular-interfaces";
import {Observable} from "rxjs/index";

@Injectable()
export class UserService {
    verify() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
}
