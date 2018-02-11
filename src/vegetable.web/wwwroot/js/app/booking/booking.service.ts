import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ITimeResult } from './timeResult';


@Injectable()
export class BookingService {
    private _servicesUrl = 'api/booking/services';
    private _timeAvailabilityUrl = 'api/booking/timeAvailabilty';

    constructor(private _http: Http) { }

    getServices(): Observable<string[]> {
        return this._http.get(this._servicesUrl)
            .map((response: Response) => <string[]>response.json())
            .catch(this.handleError);
    }

    getMonthAvailableTime(service: string, year: number, month: number): Observable<{ [id: string]: ITimeResult; }> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('service', service);
        params.set('year', year.toString());
        params.set('month', month.toString());


        return this._http.get(this._timeAvailabilityUrl, { search: params })
            .map((response: Response) => <{ [id: string]: ITimeResult; }>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }



}