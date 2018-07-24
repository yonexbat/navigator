import { Component } from '@angular/core';
import { NavigationServiceService } from './navigation-service.service';
import { NavigatorDataService } from './navigator-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavigationServiceService, NavigatorDataService]
})
export class AppComponent {
  title = 'app';
}
