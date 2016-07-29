import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { CustomersComponent } from './customer/customers.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent],
    providers: [HTTP_PROVIDERS]
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
