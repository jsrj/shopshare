import { TestBed, inject } from '@angular/core/testing';

import { ActiveSessionService } from './active-session.service';

describe('ActiveSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveSessionService]
    });
  });

  it('should be created', inject([ActiveSessionService], (service: ActiveSessionService) => {
    expect(service).toBeTruthy();
  }));
});
