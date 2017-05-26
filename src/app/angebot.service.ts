import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class AngebotService {

  constructor(private http: Http) {
  }

  listAll(): Observable<Angebot[]> {
    return this.http
      .get('https://stav.atns.de/api/angebot/frontend')
      .map((res: Response) => res.json());
  }
}


export class Angebot {
}
