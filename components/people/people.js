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
var angular2_2 = require('angular2/angular2');
var People = (function () {
    function People(http) {
        var _this = this;
        http.get('../../data/people.json')
            .toRx()
            .map(function (res) { return res.json(); })
            .subscribe(function (people) { return _this.people = people; });
    }
    People = __decorate([
        angular2_1.Component({
            selector: 'people',
            viewInjector: [angular2_2.httpInjectables]
        }),
        angular2_1.View({
            templateUrl: './components/people/people.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [angular2_2.Http])
    ], People);
    return People;
})();
exports.People = People;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGVvcGxlL3Blb3BsZS50cyJdLCJuYW1lcyI6WyJQZW9wbGUiLCJQZW9wbGUuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXlELG1CQUFtQixDQUFDLENBQUE7QUFDN0UseUJBQW9DLG1CQUFtQixDQUFDLENBQUE7QUFFeEQ7SUFZRUEsZ0JBQVlBLElBQVVBO1FBWnhCQyxpQkFzQkNBO1FBVEdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLHdCQUF3QkEsQ0FBQ0E7YUFFL0JBLElBQUlBLEVBQUVBO2FBRU5BLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEVBQVZBLENBQVVBLENBQUNBO2FBR3RCQSxTQUFTQSxDQUFDQSxVQUFBQSxNQUFNQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxFQUFwQkEsQ0FBb0JBLENBQUNBLENBQUNBO0lBQy9DQSxDQUFDQTtJQXJCSEQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLFFBQVFBO1lBQ2xCQSxZQUFZQSxFQUFFQSxDQUFDQSwwQkFBZUEsQ0FBQ0E7U0FDaENBLENBQUNBO1FBRURBLGVBQUlBLENBQUNBO1lBQ0ZBLFdBQVdBLEVBQUVBLGlDQUFpQ0E7WUFDOUNBLFVBQVVBLEVBQUVBLENBQUNBLGdCQUFLQSxDQUFDQTtTQUN0QkEsQ0FBQ0E7O2VBY0RBO0lBQURBLGFBQUNBO0FBQURBLENBdEJBLEFBc0JDQSxJQUFBO0FBWlksY0FBTSxTQVlsQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGVvcGxlL3Blb3BsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBOZ0ZvciwgSW5qZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XHJcbmltcG9ydCB7SHR0cCwgaHR0cEluamVjdGFibGVzfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Blb3BsZScsXHJcbiAgdmlld0luamVjdG9yOiBbaHR0cEluamVjdGFibGVzXVxyXG59KVxyXG5cclxuQFZpZXcoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvcGVvcGxlL3Blb3BsZS5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtOZ0Zvcl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQZW9wbGUge1xyXG4gIHBlb3BsZTogT2JqZWN0O1xyXG4gIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHtcclxuICAgIGh0dHAuZ2V0KCcuLi8uLi9kYXRhL3Blb3BsZS5qc29uJylcclxuICAgIC8vR2V0IHRoZSBSeEpTIFN1YmplY3RcclxuICAgICAgLnRvUngoKVxyXG4gICAgLy8gQ2FsbCBtYXAgb24gdGhlIHJlc3BvbnNlIG9ic2VydmFibGUgdG8gZ2V0IHRoZSBwYXJzZWQgcGVvcGxlIG9iamVjdFxyXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLy8gU3Vic2NyaWJlIHRvIHRoZSBvYnNlcnZhYmxlIHRvIGdldCB0aGUgcGFyc2VkIHBlb3BsZSBvYmplY3QgYW5kIGF0dGFjaCBpdCB0byB0aGVcclxuICAgIC8vIGNvbXBvbmVudFxyXG4gICAgICAuc3Vic2NyaWJlKHBlb3BsZSA9PiB0aGlzLnBlb3BsZSA9IHBlb3BsZSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9