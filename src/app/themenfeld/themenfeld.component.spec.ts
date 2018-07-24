import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

import { ThemenfeldComponent } from './themenfeld.component';
import { NavigationServiceService } from '../navigation-service.service';
import { NavigatorDataService} from '../navigator-data.service';
import { Kategorie } from '../model/Kategorie';
import { Themenfeld } from '../model/Themenfeld';

describe('ThemenfeldComponent', () => {
  let component: ThemenfeldComponent;
  let fixture: ComponentFixture<ThemenfeldComponent>;

  beforeEach(async(() => {

    const navigationServiceSpy = {
      selectedKategoryObs: of(new Kategorie()),
      selectedThemenfeldBs: of(new Themenfeld()),
    };
    const navigatorDataserviceSpy = jasmine.createSpyObj('NavigatorDataService', ['ba']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ThemenfeldComponent ],
      providers: [
        {provide: NavigationServiceService, useValue: navigationServiceSpy},
        {provide: NavigatorDataService, useValue: navigatorDataserviceSpy},
      ],
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
