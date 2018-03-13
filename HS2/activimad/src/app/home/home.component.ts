import { Component, OnInit } from '@angular/core';
import { ActivimadService } from '../services/activimad.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="principal">
      <ul>
        <li *ngFor="let event of aEvents">{{event}}</li>
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
    this.activS.getAllEventos().then((response: any) => this.aEvents = response);
  }

}
