import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesDetailsComponent } from './actividades-details.component';
import { BlogComentComponent } from '../../blog/blog-coment/blog-coment.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ActividadesDetailsComponent', () => {
  let component: ActividadesDetailsComponent;
  let fixture: ComponentFixture<ActividadesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ActividadesDetailsComponent, BlogComentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
