import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URLAPI = 'http://localhost:3000/events';

@Injectable()
export class ActivimadService {
  urlBase: string;
  aEventos: Array<any>;

  constructor(public http: HttpClient) {
    /* this.urlBase = 'https://goo.gl/9HNjkd'; */
    // tslint:disable-next-line:max-line-length
   /*  this.urlBase = 'http://datos.madrid.es/egob/catalogo/300107-0-agenda-actividades-eventos.json'; */
    this.urlBase = URLAPI;
    this.aEventos = [];
  }

  getAllEventos() {
    // const aLibros: Array<string>  = [];
    return this.http.get(this.urlBase).toPromise()
    .then((response: any) => {
      this.aEventos = response;
      return this.aEventos;
    });
}

  /* getAllEventos() {
    this.aEventos = [];
    const url = this.urlBase;
    return this.http.get(url).toPromise()
      .then(
        (response: any) => {
          if (response.items) {
            console.dir(response.items["@graph"]);
            /* response.items.forEach(element => {
              this.aEventos.push(element.title);
            }); 
            // result["@graph"].forEach((item)=>(console.log(item.title)));
            return new Promise((resolve, reject) => resolve(this.aEventos));
          }
        }
      );
  } */

  getNext5Events() {
    return this.http.get(this.urlBase+'?_limit=5').toPromise()
    .then((response: any) => {
      this.aEventos = response;
      return this.aEventos;
    });
  }

}