import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransazioniListComponent } from './transazioni-list/transazioni-list.component';
import { TransazioneDetailComponent } from './transazione-detail/transazione-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TransazioniListComponent,
    TransazioneDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
