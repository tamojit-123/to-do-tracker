import { TestBed } from '@angular/core/testing';

import { TaskreminderService } from './taskreminder.service';

describe('TaskreminderService', () => {
  let service: TaskreminderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskreminderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
