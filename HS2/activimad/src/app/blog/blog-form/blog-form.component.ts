import { Component, OnInit, ViewChild, Output, EventEmitter  } from '@angular/core';
import { Post } from '../../modelos/post';
import { PostService } from '../../services/post.service';
import { ActivimadService } from '../../services/activimad.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  @ViewChild('form2') formPost: any;
  oPost: Post;
  aIdEvents: Array<any>;
  @Output() outAddSugerencia: EventEmitter<Post>;

  constructor(public postService: PostService, public activS: ActivimadService) {   }

  ngOnInit() {
    this.resetFormulario();
  }

  enviar() {
    console.log('Datos enviados');
    this.postService.setPosts(this.oPost).then();
    this.resetFormulario();
  }

  private resetFormulario() {
    this.oPost = {nombre: '', email: '', idEvent: '', comentario: ''};
   /*  this.activS.getAllIds().then(
      response =>  this.aIdEvents = response
    ); */
    this.formPost.reset();
  }

}
