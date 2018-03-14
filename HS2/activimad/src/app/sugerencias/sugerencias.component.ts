import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuarios';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {

  aUsuarios: Array<Usuario>;

  constructor(public usuariosService: UsuariosService) { }

  ngOnInit() {
    this.aUsuarios = [];
    this.usuariosService.getUsuarios().then(
       response =>  this.aUsuarios = response
     );
  }

  deleteUsuario (i) {
    this.usuariosService.deleteUsuario(i)
    .then(
      () => {this.usuariosService.getUsuarios()
        .then(response =>  this.aUsuarios = response);
      });
  }

}
