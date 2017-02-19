import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TimeService {

    timeurl = "http://<url>/timeloggerapi/api/timeapi";
    url: string;

    constructor(public http : Http) {
        this.url = this.timeurl.replace("<url>", document.location.hostname);
    }

    public getDetails() : Observable<Response> {
        return this.http.get(this.url + "/getdetails")
                            .map((res: Response) => res)
                            .catch(TimeService.handleError);
    }

    public addTimestamp(): Observable<Response> {
        return this.http.get(this.url + "/addtimestamp")
            .map((res: Response) => res)
            .catch(TimeService.handleError);
    }

    static handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}