import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemenfelderComponent } from './themenfelder/themenfelder.component';
import { KategorienComponent } from './kategorien/kategorien.component';
import { KategorieComponent } from './kategorie/kategorie.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemenfelderComponent,
    KategorienComponent,
    KategorieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
