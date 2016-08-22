System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var contactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            contactComponent = (function () {
                function contactComponent() {
                    this.contact = {};
                }
                contactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "\n        <input [(ngModel)] = \"contact.firstName\" type=\"text\">\n        <div>\n        \tCity: {{contact.city}} <br>\n        \tPhone No: {{contact.phoneNo}}\n        </div>\n    ",
                        inputs: ["contact"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], contactComponent);
                return contactComponent;
            }());
            exports_1("contactComponent", contactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQUE7b0JBRVcsWUFBTyxHQUFFLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQztnQkFkRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUsMExBTVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUN0QixDQUFDOztvQ0FBQTtnQkFJRix1QkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsK0NBR0MsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9jb250YWN0LWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb250YWN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV0gPSBcImNvbnRhY3QuZmlyc3ROYW1lXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgXHRDaXR5OiB7e2NvbnRhY3QuY2l0eX19IDxicj5cbiAgICAgICAgXHRQaG9uZSBObzoge3tjb250YWN0LnBob25lTm99fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgaW5wdXRzOiBbXCJjb250YWN0XCJdXG59KVxuZXhwb3J0IGNsYXNzIGNvbnRhY3RDb21wb25lbnQge1xuICAgIFxuICAgIHB1YmxpYyBjb250YWN0ID17fTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
