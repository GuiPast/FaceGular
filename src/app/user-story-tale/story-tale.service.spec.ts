import { TestBed } from '@angular/core/testing';

import { StoryTaleService } from './story-tale.service';

describe('StoryTaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoryTaleService = TestBed.get(StoryTaleService);
    expect(service).toBeTruthy();
  });
});
