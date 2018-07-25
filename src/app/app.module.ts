import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemenfelderComponent } from './themenfelder/themenfelder.component';
import { KategorienComponent } from './kategorien/kategorien.component';
import { KategorieComponent } from './kategorie/kategorie.component';
import { ThemenfeldComponent } from './themenfeld/themenfeld.component';
import { ContentComponent } from './content/content.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContentHostDirective } from './content-host.directive';
import { ContainerComponent } from './container/container.component';
import { BoxesComponent } from './boxes/boxes.component';
import { TableComponent } from './table/table.component';
import { ZoomComponent } from './zoom/zoom.component';
import { PathComponent } from './path/path.component';
import { TextViewComponent } from './text-view/text-view.component';


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
    BoxesComponent,
    TableComponent,
    ZoomComponent,
    PathComponent,
    TextViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ContainerComponent, BoxesComponent, TableComponent, TextViewComponent]
})
export class AppModule { }
