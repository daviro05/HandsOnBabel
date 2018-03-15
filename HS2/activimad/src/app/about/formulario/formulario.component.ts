import { Component, OnInit, ViewChild, Output, EventEmitter  } from '@angular/core';
import { Usuario } from '../../modelos/usuarios';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('form1') formUsuario: any;
  mostrar: boolean;
  etiqueta: string;
  oUsuario: Usuario;

  constructor(public usuariosService: UsuariosService) {
  }

  ngOnInit() {
    this.resetFormulario();
    this.mostrar = true;
    this.etiqueta = 'Abrir ';
  }

  btnMostrarOcultar() {
      if (this.mostrar) {
        this.mostrar = false;
        this.etiqueta = 'Cerrar ';
      } else {
        this.mostrar = true;
        this.etiqueta = 'Abrir ';
      }
    }

    btnBorrar() {
      this.formUsuario.reset();
    }

    enviar() {
      console.log('Datos enviados');
      this.usuariosService.setUsuarios(this.oUsuario).then();
      this.resetFormulario();
      this.formUsuario.reset();
    }

    private resetFormulario() {
      // tslint:disable-next-line:max-line-length
      this.oUsuario = {nombre: '', apellidos: '', email: '', sexo: '', preferencias: {deportes: false, cultura: false, aventura: false}, sugerencia: ''};
    }

  }
