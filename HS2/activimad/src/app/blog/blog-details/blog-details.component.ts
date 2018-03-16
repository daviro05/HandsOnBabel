import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  post: any;
  constructor(private route: ActivatedRoute, private postS: PostService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postS.getPost(id).then(
      response =>  {
        this.post = response;
      }
    );
  }

}
