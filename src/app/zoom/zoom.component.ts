import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements OnInit {

  public  zoom = 50;

  constructor() { }

  ngOnInit() {
  }

  public changeZoom(zoom: number) {
    this.zoom = zoom;
  }

  public getScale(): string {
    return 'background: yellow;';
  }

  setStyles() {

    const scale = this.zoom * 1 * 2 / 100;

    const styles = {
      'transform' : 'scale(' + scale + ')',
      'transform-origin' : '0 0',
    };
    return styles;
  }
}
