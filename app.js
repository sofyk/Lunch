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
var main_1 = require('./components/main/main');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            templateUrl: 'app.html',
            directives: [main_1.Main]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXNGLG1CQUFtQixDQUFDLENBQUE7QUFFMUcscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFFNUM7SUFRRUE7SUFBZUMsQ0FBQ0E7SUFSbEJEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxLQUFLQTtTQUNoQkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsVUFBVUE7WUFDdkJBLFVBQVVBLEVBQUVBLENBQUNBLFdBQUlBLENBQUNBO1NBQ25CQSxDQUFDQTs7WUFHREE7SUFBREEsVUFBQ0E7QUFBREEsQ0FUQSxBQVNDQSxJQUFBO0FBR0Qsb0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcCwgQ29tcG9uZW50LCBWaWV3LCBOZ0lmLCBiaW5kLCBJbmplY3QsIE9ic2VydmFibGUsIEZvcm1CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbmltcG9ydCB7TWFpbn0gZnJvbSAnLi9jb21wb25lbnRzL21haW4vbWFpbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCdcbn0pXG5AVmlldyh7XG4gIHRlbXBsYXRlVXJsOiAnYXBwLmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbTWFpbl1cbn0pXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cblxuYm9vdHN0cmFwKEFwcCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9