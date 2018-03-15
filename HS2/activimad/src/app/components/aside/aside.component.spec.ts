import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideComponent } from './aside.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivimadService } from '../../services/activimad.service';

describe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [ AsideComponent ],
      providers: [ActivimadService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
