import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFormComponent } from './blog-form.component';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivimadService } from '../../services/activimad.service';

describe('BlogFormComponent', () => {
  let component: BlogFormComponent;
  let fixture: ComponentFixture<BlogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFormComponent ],
      imports: [FormsModule],
      providers: [PostService,ActivimadService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
