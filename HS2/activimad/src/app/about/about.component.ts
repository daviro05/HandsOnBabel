import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1 class="titleSection">About</h1>
    <app-desarrollador [idD] ='0'></app-desarrollador>
    <app-desarrollador [idD] ='1'></app-desarrollador>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
