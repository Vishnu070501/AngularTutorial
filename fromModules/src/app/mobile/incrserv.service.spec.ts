import { TestBed } from '@angular/core/testing';

import { IncrservService } from './incrserv.service';

describe('IncrservService', () => {
  let service: IncrservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncrservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
