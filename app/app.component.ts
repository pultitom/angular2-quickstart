import { Component } from '@angular/core';

import { CustomersComponent, CustomerService } from './customer/index';  // actually ./customer/index.ts but index.ts is known by convention

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent],
    providers: [CustomerService]
})
export class AppComponent { 
    title = 'My First Angular 2 App';
    headerColor = 'blue';
    name = 'Tomas';

    buttonClick() {
        var color = this.headerColor === 'blue' ? 'red' : 'blue';
        alert('Button was clicked. changing title color to ' + color);

        this.headerColor = color;
    }
}
