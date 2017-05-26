import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {AngebotListComponent} from "./angebot-list/angebot-list.component";
import {AngebotService} from "./angebot.service";

@NgModule({
  declarations: [
    AppComponent,
    AngebotListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AngebotService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
