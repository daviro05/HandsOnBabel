import { TestBed, inject } from '@angular/core/testing';

import { ActivimadService } from './activimad.service';

describe('ActivimadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivimadService]
    });
  });

  it('should be created', inject([ActivimadService], (service: ActivimadService) => {
    expect(service).toBeTruthy();
  }));
});
