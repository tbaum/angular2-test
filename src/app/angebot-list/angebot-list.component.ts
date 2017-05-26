import {Component, OnInit} from "@angular/core";
import {Angebot, AngebotService} from "../angebot.service";

@Component({
  selector: 'app-angebot-list',
  template: `
    <ul>
      <li *ngFor="let a of angebote">{{a.name}}</li>
    </ul>`
})
export class AngebotListComponent implements OnInit {

  angebote: Angebot[];

  constructor(private angebotService: AngebotService) {
  }

  ngOnInit() {
    this.angebotService.listAll()
      .subscribe(angebote => this.angebote = angebote);
  }
}
