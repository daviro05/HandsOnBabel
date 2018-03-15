import { Component, OnInit } from '@angular/core';
import { ActivimadService } from '../services/activimad.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  aEvents: Array<any>;
  search: string;

  constructor(public activS: ActivimadService) { }

  ngOnInit() {
    this.search = '';
    this.activS.getAllEventos().then(
      response =>  this.aEvents = response
    );
  }

  getEventsContains() {
    this.activS.getAllEventsContains(this.search).then(
      response =>  this.aEvents = response
    );
  }

}
