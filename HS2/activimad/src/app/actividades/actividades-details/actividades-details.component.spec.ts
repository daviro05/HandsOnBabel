import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesDetailsComponent } from './actividades-details.component';
import { BlogComentComponent } from '../../blog/blog-coment/blog-coment.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivimadService } from '../../services/activimad.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PostService } from '../../services/post.service';

describe('ActividadesDetailsComponent', () => {
  let component: ActividadesDetailsComponent;
  let fixture: ComponentFixture<ActividadesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ ActivimadService, HttpClient, HttpHandler, PostService],
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
