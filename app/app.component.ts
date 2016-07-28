import { Component } from '@angular/core';

import { CustomerComponent } from './customer/customer.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomerComponent]
})
export class AppComponent { 
    title = 'My First Angular 2 App';
    headerColor = 'blue';
    name = 'Tomas';

    customers = [
        { id: 1, name: "Tomas" },
        { id: 2, name: "John" },
        { id: 3, name: "Arnold" },
        { id: 4, name: "Matt" },
        { id: 5, name: "Katrin" }
    ];


    buttonClick() {
        var color = this.headerColor === 'blue' ? 'red' : 'blue';
        alert('Button was clicked. changing title color to ' + color);

        this.headerColor = color;
    }
}
