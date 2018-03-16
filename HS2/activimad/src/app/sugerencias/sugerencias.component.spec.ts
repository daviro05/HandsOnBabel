import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciasComponent } from './sugerencias.component';
import { UsuariosService } from '../services/usuarios.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SugerenciasComponent', () => {
  let component: SugerenciasComponent;
  let fixture: ComponentFixture<SugerenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugerenciasComponent ],
      providers: [UsuariosService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
