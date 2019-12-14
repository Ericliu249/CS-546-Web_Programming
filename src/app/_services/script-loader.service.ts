import {Injectable} from '@angular/core';
import * as $ from 'jquery';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OneDaylist, Place, Todolist, UserInfo} from '../interfaces/angular-interfaces';

declare let document: any;

interface Script {
    src: string;
    loaded: boolean;
}

@Injectable()
export class ScriptLoaderService {
    public _scripts: Script[] = [];
    private id: string;

    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    load(tag, ...scripts: string[]) {
        scripts.forEach((src: string) => {
            if (!this._scripts[src]) {
                this._scripts[src] = {src: src, loaded: false};
            }
        });

        let promises: any[] = [];
        scripts.forEach((src) => promises.push(this.loadScript(tag, src)));

        return Promise.all(promises);
    }

    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    loadScripts(tag, scripts, loadOnce?: boolean) {
        loadOnce = loadOnce || false;

        scripts.forEach((script: string) => {
            if (!this._scripts[script]) {
                this._scripts[script] = {src: script, loaded: false};
            }
        });

        let promises: any[] = [];
        scripts.forEach(
            (script) => promises.push(this.loadScript(tag, script, loadOnce)));

        return Promise.all(promises);
    }

    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param loadOnce
     * @returns {Promise<any>}
     */
    loadScript(tag, src: string, loadOnce?: boolean) {
        loadOnce = loadOnce || false;

        if (!this._scripts[src]) {
            this._scripts[src] = {src: src, loaded: false};
        }

        return new Promise((resolve, reject) => {
            // resolve if already loaded
            if (this._scripts[src].loaded && loadOnce) {
                resolve({src: src, loaded: true});
            }
            else {
                // load script tag
                let scriptTag = $('<script/>').attr('type', 'text/javascript').attr('src', this._scripts[src].src);

                $(tag).append(scriptTag);

                this._scripts[src] = {src: src, loaded: true};
                resolve({src: src, loaded: true});
            }
        });
    }

    getTodolists(http: HttpClient, city): Observable<Todolist[]> {
        return http.get<Todolist[]>("http://localhost:3000/todolist/getTodolistByLocation/" + city);
    }

    getTodolistById(http: HttpClient, id): Observable<Todolist> {
        return http.get<Todolist>("http://localhost:3000/todolist/getById/" + id);
    }

    getOneDaylists(http: HttpClient, id): Observable<OneDaylist[]> {
        return http.get<OneDaylist[]>("http://localhost:3000/todolist/getAllOnedaylist/" + id);
    }

    getPlace(http: HttpClient, id): Observable<Place> {
        return http.get<Place>("http://localhost:3000/todolist/getPlaceByOnedaylistId/" + id);
    }

    signup(http: HttpClient, user): Observable<UserInfo> {
        return http.post<UserInfo>("http://localhost:3000/admin/signup", user);
    }

    signin(http: HttpClient, user): Observable<UserInfo> {
        return http.post<UserInfo>("http://localhost:3000/admin/login", user);
    }

    logout(http: HttpClient) {
        return http.get("http://localhost:3000/admin/logout");
    }

    getUserById(http: HttpClient, id) {
        return http.get<UserInfo>("http://localhost:3000/admin/getById/" + id);
    }

    update(http:HttpClient,user){
        return http.post<UserInfo>("http://localhost:3000/admin/update", user);
    }
}