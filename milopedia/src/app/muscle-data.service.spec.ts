import { TestBed } from '@angular/core/testing';

import { MuscleDataService } from './muscle-data.service';

describe('MuscleDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuscleDataService = TestBed.get(MuscleDataService);
    expect(service).toBeTruthy();
  });
});
