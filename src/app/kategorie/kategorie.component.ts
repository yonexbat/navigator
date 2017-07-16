import { Component, OnInit } from '@angular/core';
import {NavigationServiceService} from '../navigation-service.service';

@Component({
  selector: 'app-kategorie',
  templateUrl: './kategorie.component.html',
  styleUrls: ['./kategorie.component.css'],
  providers: [NavigationServiceService]
})
export class KategorieComponent implements OnInit {

  constructor(private navigationService: NavigationServiceService) {
    navigationService.selectedKategoryObs.subscribe(
      kategorie => this.kategorieSelected(kategorie)
    );
  }

  ngOnInit() {
  }

  clicked() : void
  {    
    this.navigationService.selectCategory("meine kategorie 2");
  }

  kategorieSelected(kategorie: string){
    alert(kategorie);
  }

}
