import { Component, OnInit, Input } from '@angular/core';
import {Themenfeld} from '../model/Themenfeld';

@Component({
  selector: 'app-themenfeld',
  templateUrl: './themenfeld.component.html',
  styleUrls: ['./themenfeld.component.css']
})
export class ThemenfeldComponent implements OnInit {

  constructor() { }

  @Input() public themenfeld: Themenfeld;

  ngOnInit() {
  }

}
