System.register(['angular2/core', './contact-component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_component_1;
    var contactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            contactListComponent = (function () {
                function contactListComponent() {
                    this.contacts = [
                        { firstName: "Mithlesh", LastName: "Dhore", city: "Pune", phoneNo: 9898989898 },
                        { firstName: "Niraj", LastName: "D", city: "Indore", phoneNo: 9000000000 },
                        { firstName: "Ashwin", LastName: "Bhagat", city: "Pune", phoneNo: 9123456789 },
                    ];
                    this.selectedContact = {};
                }
                contactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                contactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        template: "\n\t\t<ul>\n            <li *ngFor = \"#contact of contacts\" \n            \t(click)=\"onSelect(contact)\" \n            \t[class.clicked]= \"selectedContact === contact\">\n            {{contact.firstName}} {{contact.LastName}}\n            </li>\n        </ul>\n         <contact [contact] = \"selectedContact\"></contact>\n\t",
                        directives: [contact_component_1.contactComponent],
                        styleUrls: ["../src/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], contactListComponent);
                return contactListComponent;
            }());
            exports_1("contactListComponent", contactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QtbGlzdC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7b0JBQ1EsYUFBUSxHQUFHO3dCQUNYLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTt3QkFDL0UsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFO3dCQUMxRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7cUJBQ2pGLENBQUM7b0JBQ0ssb0JBQWUsR0FBRyxFQUFFLENBQUM7Z0JBTWhDLENBQUM7Z0JBSkcsdUNBQVEsR0FBUixVQUFTLE9BQU87b0JBQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7Z0JBQ25DLENBQUM7Z0JBMUJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBQywyVUFTUjt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7cUJBQ2pDLENBQUM7O3dDQUFBO2dCQWNGLDJCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCx1REFZQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3QtbGlzdC1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge2NvbnRhY3RDb21wb25lbnR9IGZyb20gJy4vY29udGFjdC1jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250YWN0LWxpc3QnXG5cdHRlbXBsYXRlOmBcblx0XHQ8dWw+XG4gICAgICAgICAgICA8bGkgKm5nRm9yID0gXCIjY29udGFjdCBvZiBjb250YWN0c1wiIFxuICAgICAgICAgICAgXHQoY2xpY2spPVwib25TZWxlY3QoY29udGFjdClcIiBcbiAgICAgICAgICAgIFx0W2NsYXNzLmNsaWNrZWRdPSBcInNlbGVjdGVkQ29udGFjdCA9PT0gY29udGFjdFwiPlxuICAgICAgICAgICAge3tjb250YWN0LmZpcnN0TmFtZX19IHt7Y29udGFjdC5MYXN0TmFtZX19XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICAgPGNvbnRhY3QgW2NvbnRhY3RdID0gXCJzZWxlY3RlZENvbnRhY3RcIj48L2NvbnRhY3Q+XG5cdGAsXG5cdGRpcmVjdGl2ZXM6IFtjb250YWN0Q29tcG9uZW50XSxcblx0c3R5bGVVcmxzOiBbXCIuLi9zcmMvY3NzL2FwcC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBjb250YWN0TGlzdENvbXBvbmVudHtcblx0cHVibGljIGNvbnRhY3RzID0gW1xuICAgICAgICB7IGZpcnN0TmFtZTogXCJNaXRobGVzaFwiLCBMYXN0TmFtZTogXCJEaG9yZVwiLCBjaXR5OiBcIlB1bmVcIiwgcGhvbmVObzogOTg5ODk4OTg5OCB9LFxuICAgICAgICB7IGZpcnN0TmFtZTogXCJOaXJhalwiLCBMYXN0TmFtZTogXCJEXCIsIGNpdHk6IFwiSW5kb3JlXCIsIHBob25lTm86IDkwMDAwMDAwMDAgfSxcbiAgICAgICAgeyBmaXJzdE5hbWU6IFwiQXNod2luXCIsIExhc3ROYW1lOiBcIkJoYWdhdFwiLCBjaXR5OiBcIlB1bmVcIiwgcGhvbmVObzogOTEyMzQ1Njc4OSB9LFxuICAgIF07XG4gICAgcHVibGljIHNlbGVjdGVkQ29udGFjdCA9IHt9O1xuXG4gICAgb25TZWxlY3QoY29udGFjdCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ29udGFjdCA9IGNvbnRhY3Q7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
