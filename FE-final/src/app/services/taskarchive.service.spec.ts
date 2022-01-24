import { TestBed } from '@angular/core/testing';

import { TaskarchiveService } from './taskarchive.service';

describe('TaskarchiveService', () => {
  let service: TaskarchiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskarchiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
