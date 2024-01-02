import { TestBed } from '@angular/core/testing';

import { VisitorIncService } from './visitor-inc.service';

describe('VisitorIncService', () => {
  let service: VisitorIncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorIncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
