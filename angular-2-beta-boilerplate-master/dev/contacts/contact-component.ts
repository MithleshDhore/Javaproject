import {Component} from 'angular2/core';

@Component({
    selector: 'contact',
    template: `
        <input [(ngModel)] = "contact.firstName" type="text">
        <div>
        	City: {{contact.city}} <br>
        	Phone No: {{contact.phoneNo}}
        </div>
    `
    inputs: ["contact"]
})
export class contactComponent {
    
    public contact ={};
}