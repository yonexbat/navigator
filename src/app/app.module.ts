import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemenfelderComponent } from './themenfelder/themenfelder.component';
import { KategorienComponent } from './kategorien/kategorien.component';
import { KategorieComponent } from './kategorie/kategorie.component';
import { ThemenfeldComponent } from './themenfeld/themenfeld.component';
import { ContentComponent } from './content/content.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import {AppRoutingModule } from './app-routing/app-routing.module';
import { ContentHostDirective } from './content-host.directive';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemenfelderComponent,
    KategorienComponent,
    KategorieComponent,
    ThemenfeldComponent,
    ContentComponent,
    SafeHtmlPipe,
    ContentHostDirective,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ContainerComponent]
})
export class AppModule { }
