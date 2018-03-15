import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesComponent } from './actividades.component';
import { FormsModule } from '@angular/forms';
import { ActivimadService } from '../services/activimad.service';
import { PostService } from '../services/post.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { EventComponent } from '../components/event/event.component';
import { RouterModule } from '@angular/router';

describe('ActividadesComponent', () => {
  let component: ActividadesComponent;
  let fixture: ComponentFixture<ActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesComponent, EventComponent ],
      imports: [FormsModule, RouterModule],
      providers: [PostService ,ActivimadService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
