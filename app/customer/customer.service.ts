import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }

    getCustomers() {
        return [
            { id: 1, name: "Tomas" },
            { id: 2, name: "John" },
            { id: 3, name: "Arnold" },
            { id: 4, name: "Matt" },
            { id: 5, name: "Katrin" }
        ];
    }

}