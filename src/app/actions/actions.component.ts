import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../navigation.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }

  public reload() {
    this.navigationService.reload();
  }

}
