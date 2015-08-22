import {Component, View, NgFor, Inject, Observable} from 'angular2/angular2';
import {Http, httpInjectables} from 'angular2/angular2';

@Component({
  selector: 'people',
  viewInjector: [httpInjectables]
})

@View({
    templateUrl: './components/people/people.html',
    directives: [NgFor]
})

export class People {
  people: Object;
  constructor(http: Http) {
    http.get('<%= APP_BASE %>data/people.json')
    //Get the RxJS Subject
      .toRx()
    // Call map on the response observable to get the parsed people object
      .map(res => res.json())
    // Subscribe to the observable to get the parsed people object and attach it to the
    // component
      .subscribe(people => this.people = people);
  }
}