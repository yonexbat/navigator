import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemenfeldComponent } from './themenfeld.component';

describe('ThemenfeldComponent', () => {
  let component: ThemenfeldComponent;
  let fixture: ComponentFixture<ThemenfeldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemenfeldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemenfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
