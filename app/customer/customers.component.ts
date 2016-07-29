import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent],
    providers: [CustomerService, HTTP_PROVIDERS]
})
export class CustomersComponent implements OnInit {
    customers: any[];

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        this._customerService.getCustomers()
            .then((customers: any) => {
                this.customers = customers;
            })
            .catch((err: any) => {
                console.log(err); // friendly error should go here
            });
    }
}