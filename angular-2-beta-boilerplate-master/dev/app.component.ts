import {Component} from 'angular2/core';
import {contactListComponent} from './contacts/contact-list-component';


@Component({
    selector: 'my-app',
    template: `
        <contact-list></contact-list>
    `,
    directives: [contactListComponent]
})
export class AppComponent {
    
}