import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ThemenfelderComponent } from './themenfelder.component';
import {ThemenfeldComponent} from '../themenfeld/themenfeld.component';
import { NavigationService } from '../navigation.service';
import { NavigatorDataService} from '../navigator-data.service';
import { Kategorie } from '../model/Kategorie';
import { Themenfeld } from '../model/Themenfeld';
describe('ThemenfelderComponent', () => {
  let component: ThemenfelderComponent;
  let fixture: ComponentFixture<ThemenfelderComponent>;
  let subSpy1;
  let subSpy2;

  beforeEach(async(() => {

    const navigationServiceSpy = {
      selectedKategoryObs: of(new Kategorie()),
      selectedThemenfeldObs: of(new Themenfeld()),
    };
    subSpy1 = spyOn(navigationServiceSpy.selectedKategoryObs, 'subscribe');
    subSpy2 = spyOn(navigationServiceSpy.selectedThemenfeldObs, 'subscribe');

    const navigatorDataserviceSpy = jasmine.createSpyObj('NavigatorDataService', ['ba']);


    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ ThemenfelderComponent, ThemenfeldComponent ],
      providers: [
        {provide: NavigationService, useValue: navigationServiceSpy},
        {provide: NavigatorDataService, useValue: navigatorDataserviceSpy},
      ],
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
