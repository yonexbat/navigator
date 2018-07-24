import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NavigatorDataService } from './navigator-data.service';

describe('NavigatorDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NavigatorDataService],
    });
  });

  it('should be created', inject([NavigatorDataService], (service: NavigatorDataService) => {
    expect(service).toBeTruthy();
  }));
});
