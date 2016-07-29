import { Component, OnInit } from '@angular/core';

import { CustomerComponent } from './customer.component';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {
    customers = [
        { id: 1, name: "Tomas" },
        { id: 2, name: "John" },
        { id: 3, name: "Arnold" },
        { id: 4, name: "Matt" },
        { id: 5, name: "Katrin" }
    ];

    constructor() { }

    ngOnInit() { }

}