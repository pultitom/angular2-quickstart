import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CustomerService {

    constructor(private _http: Http) { }

    getCustomers() {
        return this._http.get('app/customers.json')
            .map((response: Response) => response.json())
            .toPromise()
            .catch(this._handleError);
    }

    _handleError(err: any) {
        console.log(err);   // should be customized error
        return Promise.reject(err);
    }

}