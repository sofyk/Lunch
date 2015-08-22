import {bootstrap, Component, View, NgIf, bind, Inject, Observable, FormBuilder} from 'angular2/angular2';

import {Main} from './components/main/main';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app.html',
  directives: [Main]
})
class App {
  constructor() {}
}


bootstrap(App);