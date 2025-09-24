import { TestBed } from '@angular/core/testing';

import { UploaderService } from './uploader';

describe('Uploader', () => {
  let service: UploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
