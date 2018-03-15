import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() event: any;
  @Input() resumen: boolean;
  ruta: string;
  imagenes: string;

  constructor() { }

  ngOnInit() {
    this.imagenes = './assets/fotos/';
    this.imgAleatoria();
  }

  imgAleatoria() {
    let x = Math.floor((Math.random() * 13) + 1);
    this.ruta = this.imagenes + x + '.jpg';
  }

}
