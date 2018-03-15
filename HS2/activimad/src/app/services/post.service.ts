import { Injectable } from '@angular/core';
import { Post } from '../modelos/post';
import { HttpClient } from '@angular/common/http';

const URLAPI = 'http://localhost:3000/comentarios';

@Injectable()
export class PostService {

  private sURL: string;
  private aPosts: Array<any>;
  private post: any;

  constructor(public http: HttpClient) {
    this.sURL = URLAPI;
    this.aPosts = [];
    this.post = {};
  }

  getAllPosts() {
    return this.http.get(this.sURL).toPromise()
      .then((response: any) => {
        this.aPosts = response;
        return this.aPosts;
      });
  }

  setPosts(oPost) {
    console.log('Enviando datos');
    console.log(oPost);
    return this.http.post(this.sURL, oPost).toPromise();
  }

  getPostsFromIdEvent(idEv: string) {
    return this.http.get(this.sURL + '?idEvent=' + idEv).toPromise()
      .then((response: any) => {
        this.aPosts = response;
        return this.aPosts;
      });
  }

  getPost(id: string) {
    return this.http.get(this.sURL + '?id=' + id).toPromise()
      .then((response: any) => {
        this.post = response[0];
        return this.post;
      });
  }

}
