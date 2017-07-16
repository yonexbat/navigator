import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemenfelderComponent } from './themenfelder.component';

describe('ThemenfelderComponent', () => {
  let component: ThemenfelderComponent;
  let fixture: ComponentFixture<ThemenfelderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemenfelderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemenfelderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
