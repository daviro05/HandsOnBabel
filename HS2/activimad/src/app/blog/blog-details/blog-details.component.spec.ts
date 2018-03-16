import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsComponent } from './blog-details.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from '../../services/post.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BlogDetailsComponent', () => {
  let component: BlogDetailsComponent;
  let fixture: ComponentFixture<BlogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [PostService, HttpClient, HttpHandler],
      declarations: [ BlogDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
