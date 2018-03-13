import { Component, OnInit, ViewChild, Output, EventEmitter  } from '@angular/core';
import { Usuario } from '../../modelos/usuarios';

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

  constructor() {
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
      this.resetFormulario();
      this.formUsuario.reset();
    }

    private resetFormulario() {
      this.oUsuario = {nombre: '', apellidos: '', email: '', sugerencia: ''};
    }

  }
