import { TestBed, inject } from '@angular/core/testing';

import { SetjwtserviceService } from './setjwtservice.service';

describe('SetjwtserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetjwtserviceService]
    });
  });

  it('should be created', inject([SetjwtserviceService], (service: SetjwtserviceService) => {
    expect(service).toBeTruthy();
  }));
});
