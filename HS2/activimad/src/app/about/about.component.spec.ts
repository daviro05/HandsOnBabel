import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AboutComponent } from './about.component';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent, DesarrolladorComponent, FormularioComponent ],
      imports: [FormsModule],
      providers: [UsuariosService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
