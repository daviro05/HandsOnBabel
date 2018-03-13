import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ActivimadService {
  urlBase: string;
  aEventos: Array<any>;

  constructor(public http: HttpClient) {
    /* this.urlBase = 'https://goo.gl/9HNjkd'; */
    // tslint:disable-next-line:max-line-length
    this.urlBase = 'https://datos.madrid.es/portal/site/egob/menuitem.ac61933d6ee3c31cae77ae7784f1a5a0/?vgnextoid=00149033f2201410VgnVCM100000171f5a0aRCRD&format=json&file=0&filename=206974-0-agenda-eventos-culturales-100&mgmtid=6c0b6d01df986410VgnVCM2000000c205a0aRCRD&preview=full';
    this.aEventos = [];
  }

  getAllEventos() {
    this.aEventos = [];
    const url = this.urlBase;
    return this.http.get(url).toPromise()
      .then(
        (response: any) => {
          if (response.items) {
            response.items.forEach(element => {
              this.aEventos.push(element.title);
            });
            return new Promise((resolve, reject) => resolve(this.aEventos));
          }
        }
      );
  }

  getNext5Events() {

  }

}
