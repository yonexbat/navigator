import { Component } from '@angular/core';
import { NavigationService } from './navigation.service';
import { NavigatorDataService } from './navigator-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavigationService, NavigatorDataService]
})
export class AppComponent {
  title = 'app';
}
