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
  aEvents: Array<any>;
  @Output() outPost: EventEmitter<Post>;

  constructor(public postService: PostService, public activS: ActivimadService) {
    this.outPost = new EventEmitter();
     }

  ngOnInit() {
    this.resetFormulario();
    this.activS.getAllEventos().then(
      response =>  this.aEvents = response
    );
  }

  enviar() {
    this.outPost.emit(this.oPost);
    this.postService.setPosts(this.oPost).then();
    this.resetFormulario();
  }

  btnBorrar() {
    this.formPost.reset();
  }

  private resetFormulario() {
    this.oPost = {nombre: '', email: '', idEvent: '', comentario: ''};
    this.formPost.reset();
  }

}
