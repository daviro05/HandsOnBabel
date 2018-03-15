import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComentComponent } from './blog-coment.component';

describe('BlogComentComponent', () => {
  let component: BlogComentComponent;
  let fixture: ComponentFixture<BlogComentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogComentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
