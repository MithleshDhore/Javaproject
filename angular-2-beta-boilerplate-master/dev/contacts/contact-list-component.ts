import {Component} from 'angular2/core';
import {contactComponent} from './contact-component';

@Component({
	selector: 'contact-list'
	template:`
		<ul>
            <li *ngFor = "#contact of contacts" 
            	(click)="onSelect(contact)" 
            	[class.clicked]= "selectedContact === contact">
            {{contact.firstName}} {{contact.LastName}}
            </li>
        </ul>
         <contact [contact] = "selectedContact"></contact>
	`,
	directives: [contactComponent],
	styleUrls: ["../src/css/app.css"]
})

export class contactListComponent{
	public contacts = [
        { firstName: "Mithlesh", LastName: "Dhore", city: "Pune", phoneNo: 9898989898 },
        { firstName: "Niraj", LastName: "D", city: "Indore", phoneNo: 9000000000 },
        { firstName: "Ashwin", LastName: "Bhagat", city: "Pune", phoneNo: 9123456789 },
    ];
    public selectedContact = {};

    onSelect(contact) {
        this.selectedContact = contact;
    }

}