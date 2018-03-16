import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostComponent } from './blog-post.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BlogFormComponent } from '../blog-form/blog-form.component';
import { PostService } from '../../services/post.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivimadService } from '../../services/activimad.service';

describe('BlogPostComponent', () => {
  let component: BlogPostComponent;
  let fixture: ComponentFixture<BlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostComponent, BlogFormComponent ],
      imports: [FormsModule,
      RouterModule],
      providers: [PostService, HttpClient, HttpHandler, ActivimadService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
