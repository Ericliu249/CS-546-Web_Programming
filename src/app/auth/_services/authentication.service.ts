import { Injectable } from "@angular/core";
import { HttpClient   } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient  ) {
    }

    login(id: string) {
        return  localStorage.setItem('currentUser', JSON.stringify({id}));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}