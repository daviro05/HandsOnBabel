import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SugerenciasRoutingModule } from './sugerencias-routing.module';
import { SugerenciasComponent } from './sugerencias.component';
import { AboutModule } from '../about/about.module';
import { UsuariosService } from '../services/usuarios.service';

@NgModule({
  imports: [
    CommonModule,
    SugerenciasRoutingModule,
    AboutModule
  ],
  exports: [SugerenciasComponent],
  providers: [UsuariosService],
  declarations: [SugerenciasComponent]
})
export class SugerenciasModule { }
