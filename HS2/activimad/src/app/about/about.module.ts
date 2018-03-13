import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [AboutComponent],
  declarations: [AboutComponent, DesarrolladorComponent]
})
export class AboutModule { }
