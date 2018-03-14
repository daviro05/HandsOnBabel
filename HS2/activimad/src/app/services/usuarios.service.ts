import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuarios';
import { HttpClient } from '@angular/common/http';

// El servicio usuarios se ocupa de almacenar las sugerencias de los usuarios

const URLAPI = 'http://localhost:3000/sugerencias';

@Injectable()
export class UsuariosService {

  private sURL: string;
  private aUsuarios: Array<any>;

  constructor(public http: HttpClient) {
    this.sURL = URLAPI;
    this.aUsuarios = [];
  }

  getUsuarios() {
    return this.http.get(this.sURL).toPromise()
      .then((response: any) => {
        this.aUsuarios = response;
        return this.aUsuarios;
      });
  }

  setUsuarios(oUsuario) {
    console.log('Enviando datos');
    console.log(oUsuario);
    return this.http.post(this.sURL, oUsuario).toPromise();
  }

  deleteUsuario(i) {
    i++;
    return this.http.delete(this.sURL + '/' + i).toPromise();
  }

}
