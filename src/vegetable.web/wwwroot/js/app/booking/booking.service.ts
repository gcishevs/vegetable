import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class BookingService {
    private _servicesUrl = 'api/booking/services';

    constructor(private _http: Http) { }

    getServices(): Observable<string[]> {
        return this._http.get(this._servicesUrl)
            .map((response: Response) => <string[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }



}