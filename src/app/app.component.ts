import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  template: `<h1>
    {{title}}
  </h1>

  <app-angebot-list></app-angebot-list>
  `
})
export class AppComponent {
  title = 'app works!';
}
