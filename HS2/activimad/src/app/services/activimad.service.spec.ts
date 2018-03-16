import { TestBed, inject } from '@angular/core/testing';

import { ActivimadService } from './activimad.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ActivimadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivimadService,
      HttpClient,
    HttpHandler]
    });
  });

  it('should be created', inject([ActivimadService], (service: ActivimadService) => {
    expect(service).toBeTruthy();
  }));
});
