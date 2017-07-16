import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NavigationServiceService } from './navigation-service.service';
import { NavigatorDataService } from './navigator-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavigationServiceService, NavigatorDataService]
})
export class AppComponent {
  title = 'app';
}
