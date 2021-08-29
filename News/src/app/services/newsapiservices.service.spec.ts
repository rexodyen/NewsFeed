import { TestBed } from '@angular/core/testing';

import { NewsapiService } from './newsapiservices.service';

describe('NewsapiService', () => {
  let service: NewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
