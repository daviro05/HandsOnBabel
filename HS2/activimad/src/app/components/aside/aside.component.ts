import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivimadService } from '../../services/activimad.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  title: string;
  aEvents: Array<any>;
  muestra: boolean;

  @Output() cambio: EventEmitter<any>;

  constructor(public activS: ActivimadService) { }

  ngOnInit() {
    this.muestra = true;
    this.title = 'Próximos 5 eventos';
    this.getNext5Events();
  }

  getNext5Events() {
    this.activS.getNextEvents(5, true).then(
      response => this.aEvents = response
    );
    this.title = 'Próximos 5 eventos';
  }

  getNext10Events() {
    this.activS.getNextEvents(10, true).then(
      response => this.aEvents = response
    );
    this.title = 'Próximos 10 eventos';
  }

  getNext15Events() {
    this.activS.getNextEvents(15, true).then(
      response => this.aEvents = response
    );
    this.title = 'Próximos 15 eventos';
  }

  btnEvent() {
    console.dir(this.aEvents);
  }

  muestraAside() {
    if (this.muestra) {
      this.muestra = false;
    } else {
      this.muestra = true;
    }

  }


}
