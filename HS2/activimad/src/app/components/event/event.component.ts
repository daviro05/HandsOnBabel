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
    this.event.dtstart = this.event.dtstart.substring(0, this.event.dtstart.length - 5);
    this.event.dtend = this.event.dtend.substring(0, this.event.dtend.length - 5);
  }

  imgAleatoria() {
    const x = Math.floor((Math.random() * 13) + 1);
    this.ruta = this.imagenes + x + '.jpg';
  }

}
