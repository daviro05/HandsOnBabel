import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-coment',
  templateUrl: './blog-coment.component.html',
  styleUrls: ['./blog-coment.component.css']
})
export class BlogComentComponent implements OnInit {
  @Input() coment: any;
  constructor() { }

  ngOnInit() {
  }

}
