import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesDetailsComponent } from './actividades-details.component';

describe('ActividadesDetailsComponent', () => {
  let component: ActividadesDetailsComponent;
  let fixture: ComponentFixture<ActividadesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesDetailsComponent ]
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
