/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DisproduservService } from './disproduserv.service';

describe('Service: Disproduserv', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisproduservService]
    });
  });

  it('should ...', inject([DisproduservService], (service: DisproduservService) => {
    expect(service).toBeTruthy();
  }));
});
