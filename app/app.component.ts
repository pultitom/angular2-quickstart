import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 
    title = 'My First Angular 2 App';
    headerColor = 'blue';

    buttonClick() {
        var color = this.headerColor === 'blue' ? 'red' : 'blue';
        alert('Button was clicked. changing title color to ' + color);

        this.headerColor = color;
    }
}
