import { TestBed, inject } from '@angular/core/testing';

import { UsuariosService } from './usuarios.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('UsuariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuariosService, HttpClient,
        HttpHandler]
    });
  });

  it('should be created', inject([UsuariosService], (service: UsuariosService) => {
    expect(service).toBeTruthy();
  }));
});
