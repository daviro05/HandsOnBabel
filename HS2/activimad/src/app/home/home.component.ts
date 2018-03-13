import { Component, OnInit } from '@angular/core';
import { ActivimadService } from '../services/activimad.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="principal">
      <ul>
        <li *ngFor="let eventI of aEvents">
         <app-event [event]="eventI"></app-event>
        </li>
      </ul>
    </div>
  `,
  styles: [],
  providers: [ActivimadService]
})
export class HomeComponent implements OnInit {
  aEvents: Array<any>;

  constructor(public activS: ActivimadService) { }

  ngOnInit() {
    this.activS.getAllEventos().then(
      response =>  this.aEvents = response
    );
    /* this.activS.getAllEventos().then((response: any) => this.aEvents = response); */
    /* this.aEvents = [
      { title: 'Evento1', date: '14/03/2018', location: 'Madrid', info: 'Este es el evento1' },
      { title: 'Evento2', date: '14/03/2018', location: 'Palencia', info: 'Este es el evento2' },
      { title: 'Evento3', date: '14/03/2018', location: 'Zamora', info: 'Este es el evento3' }
    ]; */
  }

}
