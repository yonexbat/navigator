import { Component, OnInit, Input } from '@angular/core';

import {Themenfeld} from '../model/Themenfeld';
import {NavigationServiceService} from '../navigation-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-themenfeld',
  templateUrl: './themenfeld.component.html',
  styleUrls: ['./themenfeld.component.css']
})
export class ThemenfeldComponent implements OnInit {


  constructor(private navigationService: NavigationServiceService, private router: Router) {

   }

  @Input() public themenfeld: Themenfeld;

  ngOnInit() {
  }

  public clicked(): void {
    this.navigationService.selectThemenfeld(this.themenfeld);
    this.router.navigate(['/detail', this.themenfeld.id]);
  }

}
