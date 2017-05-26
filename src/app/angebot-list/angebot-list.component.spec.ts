import {async, TestBed} from "@angular/core/testing";

import {AngebotListComponent} from "./angebot-list.component";
import {AngebotService} from "../angebot.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

describe('AngebotListComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [AngebotListComponent]});
  }));

  it('should render a list of Angebot[2]', async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: AngebotService,
        useValue: {
          listAll: () => Observable.of([
            {id: 1, name: "Angebot 1"},
            {id: 2, name: "Angebot 2"}
          ])
        }
      }]
    });

    const fixture = TestBed.createComponent(AngebotListComponent);
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const list = compiled.querySelectorAll('ul li');
    expect(list.length).toBe(2);
    expect(list[0].textContent).toContain('Angebot 1');
    expect(list[1].textContent).toContain('Angebot 2');
  }));

  it('should render a list of Angebot[1]', async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: AngebotService,
        useValue: {
          listAll: () => Observable.of([
            {id: 1, name: "Angebot 3"}
          ])
        }
      }]
    });

    const fixture = TestBed.createComponent(AngebotListComponent);
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const list = compiled.querySelectorAll('ul li');
    expect(list.length).toBe(1);
    expect(list[1].textContent).toContain('Angebot 3');
  }));

});
