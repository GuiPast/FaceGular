import { TestBed } from '@angular/core/testing';

import { BuddiesService } from './buddies.service';

describe('BuddiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuddiesService = TestBed.get(BuddiesService);
    expect(service).toBeTruthy();
  });
});
