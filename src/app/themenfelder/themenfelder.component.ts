import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger, state, style, animate, transition} from '@angular/animations';
import 'rxjs/add/observable/of';

import { NavigationServiceService } from '../navigation-service.service';
import {Kategorie} from '../model/Kategorie';
import {Themenfeld} from '../model/Themenfeld';


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

  themenfelder: Subject<Themenfeld[]> = new Subject<Themenfeld[]>();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  constructor(private navigationService: NavigationServiceService) {
    this.subscription = navigationService.selectedKategoryObs.subscribe((kategorie : Kategorie) => this.kategorieChanged(kategorie));
  }

  private kategorieChanged(kategorie: Kategorie)
  {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    this.themenfelder.next(kategorie.themenfelder);
  }

  ngOnInit() {
    
  }

}
