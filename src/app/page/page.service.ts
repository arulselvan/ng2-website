import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import {Page} from './page';

@Injectable()
export class PageService{
    private _WPApiBase ="http://arulselvan.net/wp-json/wp/v2/";

    constructor(private http:Http){

    }

    getPage(slug):Observable<Page>{
        return this.http
        .get(this._WPApiBase + `pages?slug=${slug}`)
        .map((res:Response)=>res.json());
    }
}