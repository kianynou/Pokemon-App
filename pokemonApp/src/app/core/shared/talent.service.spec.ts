import { TestBed } from '@angular/core/testing';

import { TalentService } from './talent.service';

describe('TalentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TalentService = TestBed.get(TalentService);
    expect(service).toBeTruthy();
  });
});
