import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NavigationServiceService } from '../navigation-service.service';
import { Subscription }   from 'rxjs/Subscription';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-themenfelder',
  templateUrl: './themenfelder.component.html',
  styleUrls: ['./themenfelder.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        width: '0px',
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
         width: '300px',
      })),      
    transition('inactive => active', animate('1000ms ease-in')),
    transition('active => inactive', animate('1000ms ease-out'))
  ])
  ]
})
export class ThemenfelderComponent implements OnInit, OnDestroy {
  
  private subscription: Subscription;

  state: string = 'inactive';

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  constructor(private navigationService: NavigationServiceService) {
    this.subscription = navigationService.selectedKategoryObs.subscribe((kategorie : string) => this.kategorieChanged(kategorie));
  }

  private kategorieChanged(kategorie: string)
  {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

  ngOnInit() {
    
  }

}
