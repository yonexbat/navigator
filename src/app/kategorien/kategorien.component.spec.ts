import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorienComponent } from './kategorien.component';

describe('KategorienComponent', () => {
  let component: KategorienComponent;
  let fixture: ComponentFixture<KategorienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
