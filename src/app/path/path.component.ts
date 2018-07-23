import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationServiceService } from '../navigation-service.service';
import {Kategorie} from '../model/Kategorie';
import {Themenfeld} from '../model/Themenfeld';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {


  private subscriptionKategorie: Subscription;

  private subscriptionThemenfeld: Subscription;

  public kategorieName: string;
  public themenfeldName: string;

  constructor(private navigationService: NavigationServiceService) { 
     this.subscriptionKategorie = navigationService.selectedKategoryObs
      .subscribe((kategorie : Kategorie) => this.kategorieChanged(kategorie));

      this.subscriptionKategorie = navigationService.selectedThemenfeldBs
        .subscribe((themenfeld) => {this.themenfeldChanged(themenfeld)});
  }

  private kategorieChanged(kategorie: Kategorie)
  {
    this.kategorieName = kategorie.name;     
  }

  private themenfeldChanged(themenfeld: Themenfeld)
  {
    this.themenfeldName = themenfeld.name;
  }

  ngOnInit() {
  }

}
