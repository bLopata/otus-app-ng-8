import { TestBed } from '@angular/core/testing';

import { CourseUtilsService } from './course-utils.service';

describe('CourseUtilsService', () => {
  let service: CourseUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
