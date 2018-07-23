import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, Subscription} from 'rxjs';

import { ContentComponent } from './content.component';
import { NavigationServiceService } from '../navigation-service.service';
import { NavigatorDataService} from '../navigator-data.service';
import { Kategorie } from '../model/Kategorie';
import { Themenfeld } from '../model/Themenfeld';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  let subSpy1;
  let subSpy2;

  beforeEach(async(() => {
    const navigationServiceSpy = {
      selectedKategoryObs: of(new Kategorie()),   
      selectedThemenfeldBs: of(new Themenfeld()),
    }
    subSpy1 = spyOn(navigationServiceSpy.selectedKategoryObs, 'subscribe');
    subSpy2 = spyOn(navigationServiceSpy.selectedThemenfeldBs, 'subscribe');

    const navigatorDataserviceSpy = jasmine.createSpyObj('NavigatorDataService', ['ba']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ContentComponent ],
      providers: [
        {provide: NavigationServiceService, useValue: navigationServiceSpy},
        {provide: NavigatorDataService, useValue: navigatorDataserviceSpy},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(subSpy1).toHaveBeenCalled();
    expect(subSpy2).toHaveBeenCalled();
  });
});
