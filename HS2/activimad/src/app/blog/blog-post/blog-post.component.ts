import { Component, OnInit } from '@angular/core';
import { Post } from '../../modelos/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  aPosts: Array<any>;

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.postService.getAllPosts().then(
      response =>  {
        this.aPosts = response;
        this.aPosts.sort((left, right): number => {
          if (left.id > right.id) return -1;
          if (left.id < right.id) return 1;
          return 0;
        });
      }
    );
  }

  newPost(oPost: Post) {
    this.aPosts.unshift(oPost);
  }

}
