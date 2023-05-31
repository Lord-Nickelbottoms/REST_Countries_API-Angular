import { TestBed } from '@angular/core/testing';

import { GetCountryServiceService } from './get-country-service.service';

describe('GetCountryServiceService', () => {
  let service: GetCountryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCountryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
