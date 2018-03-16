import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-desarrollador',
  templateUrl: './desarrollador.component.html',
  styleUrls: ['./desarrollador.component.css']
})
export class DesarrolladorComponent implements OnInit {
  @Input() idD: number;
  nombre: string;
  informacion: string;
  imagen: string;
  datos: Array<any>;

  constructor() { }

  ngOnInit() {
    this.datos = [
      {
      nombre: 'Carlos López',
      // tslint:disable-next-line:max-line-length
      informacion: 'Vivió durante 6 años en México en la ciudad de La Chingada desarrollando día y noche la página web de Madelman el muñeco de acción. Aunque puso todo su esfuerzo en ello no  pudo evitar que la empresa quebrará. Ahora en su tiempo libre se dedica a  la pesca y colecciona sellos de personajes famosos. Podrás encontrarle en  Wallapop con el nombre de usuario:el_sellitos95. Actualmente trabaja como becario en Babel Sistemas de Información. Frase típica:La Chingada me cambió la vida',
      imagen: '/assets/des1.jpg'
      },
      {
      nombre: 'David Rodríguez',
      // tslint:disable-next-line:max-line-length
      informacion: 'Después de varios años viviendo en Honolulu David decidió apartarse del sol, el surf y los chiringuitos de playa. Después de estar varios meses desarrollando una aplicación para lograr hablar con las medusas, decidió apartar ese proyecto para mejorar en nuevas tecnologías en Babel Sistemas de Información. Ahora quiere ampliar su proyecto para conseguir comunicarse con cualquier criatura marina. En su tiempo libre le gusta ver documentales indios. En versión original. Frase típica: Si hablaras con las medusas entenderías porque te pican...',
      imagen: '/assets/des2.jpg' }
  ];
    this.nombre = this.datos[this.idD].nombre;
    this.informacion = this.datos[this.idD].informacion;
    this.imagen = this.datos[this.idD].imagen;

  }

}
