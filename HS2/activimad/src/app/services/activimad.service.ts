import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URLAPI = 'http://localhost:3000/events';

@Injectable()
export class ActivimadService {
  urlBase: string;
  aEventos: Array<any>;
  opcion: string;

  constructor(public http: HttpClient) {
    this.urlBase = URLAPI;
    this.aEventos = [];

  }

  getAllEventos() {
    return this.http.get(this.urlBase).toPromise()
      .then((response: any) => {
        this.aEventos = response;
        return this.aEventos;
      });
  }

  getNextEvents(limit: number, ordenado: boolean) {
    if (ordenado) {
      this.opcion = '?_sort=dtstart&_order=asc&_limit=';
    } else {
      this.opcion = '?_limit=';
    }
    return this.http.get(this.urlBase + this.opcion + limit).toPromise()
      .then((response: any) => {
        this.aEventos = response;
        return this.aEventos;
      });
  }

  getAllEventsContains(text: string) {
    return this.http.get(this.urlBase + '?title_like=' + text).toPromise()
      .then((response: any) => {
        this.aEventos = response;
        return this.aEventos;
      });
  }

  getEvento(id: string) {
    const empty = {};
    return this.http.get(this.urlBase + '?id=' + id).toPromise()
      .then((response: any) => {
        this.aEventos = response;
        if (this.aEventos) {
          return this.aEventos[0];
        } else {
          return empty;
        }
      });
  }

}
