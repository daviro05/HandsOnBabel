import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { RouterModule } from '@angular/router';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { FormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivimadService } from '../services/activimad.service';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogComponent, BlogPostComponent, BlogFormComponent ],
      imports: [RouterModule, FormsModule],
      providers: [PostService, HttpClient, HttpHandler, ActivimadService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
