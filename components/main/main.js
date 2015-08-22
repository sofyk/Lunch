var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var people_1 = require('../people/people');
var Main = (function () {
    function Main() {
    }
    Main = __decorate([
        angular2_1.Component({
            selector: 'main'
        }),
        angular2_1.View({
            templateUrl: './components/main/main.html',
            directives: [people_1.People]
        }), 
        __metadata('design:paramtypes', [])
    ], Main);
    return Main;
})();
exports.Main = Main;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbi9tYWluLnRzIl0sIm5hbWVzIjpbIk1haW4iLCJNYWluLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUFzRixtQkFBbUIsQ0FBQyxDQUFBO0FBQzFHLHVCQUFxQixrQkFBa0IsQ0FBQyxDQUFBO0FBRXhDO0lBVUVBO0lBQWdCQyxDQUFDQTtJQVZuQkQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLE1BQU1BO1NBQ2pCQSxDQUFDQTtRQUVEQSxlQUFJQSxDQUFDQTtZQUNKQSxXQUFXQSxFQUFFQSw2QkFBNkJBO1lBQzFDQSxVQUFVQSxFQUFFQSxDQUFDQSxlQUFNQSxDQUFDQTtTQUNyQkEsQ0FBQ0E7O2FBSURBO0lBQURBLFdBQUNBO0FBQURBLENBWEEsQUFXQ0EsSUFBQTtBQUZZLFlBQUksT0FFaEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL21haW4vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwLCBDb21wb25lbnQsIFZpZXcsIE5nSWYsIGJpbmQsIEluamVjdCwgT2JzZXJ2YWJsZSwgRm9ybUJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7UGVvcGxlfSBmcm9tICcuLi9wZW9wbGUvcGVvcGxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFpbidcbn0pXG5cbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvbWFpbi9tYWluLmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUGVvcGxlXVxufSlcblxuZXhwb3J0IGNsYXNzIE1haW4ge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==