import {async, inject, TestBed} from "@angular/core/testing";

import {AngebotService} from "./angebot.service";
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {AppModule} from "./app.module";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";

describe('AngebotService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions},
        Http
      ]
    }).compileComponents();
  }));


  it('should return a list of Angebot[]', inject([AngebotService, ConnectionBackend], (service, backend) => {
      backend.connections.subscribe((connection) => {
        expect(connection.request.url).toBe("https://stav.atns.de/api/angebot/frontend");

        connection.mockRespond({json: () => [{id: 0, name: 'Angebot1'}]});
      });

      let result;

      service.listAll()
        .subscribe(r => result = r);

      expect(result).toEqual([{id: 0, name: 'Angebot1'}]);
    }
  ));

  // it('should handle errors', inject([AngebotService, ConnectionBackend], (service, backend) => {
  //     backend.connections.subscribe((connection) => {
  //       connection.mockError({status: 404, statusText: 'URL not Found'});
  //     });
  //
  //     let result, error;
  //     service.listAll()
  //       .catch(e => {
  //         error = e;
  //         return Observable.of();
  //       })
  //       .subscribe(r => result = r);
  //
  //     expect(result).toBeFalsy();
  //     expect(error.status).toBe(404);
  //   }
  // ));
});
