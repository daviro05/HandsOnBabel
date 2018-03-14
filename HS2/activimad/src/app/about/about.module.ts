import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule
  ],
  providers: [UsuariosService],
  exports: [AboutComponent, FormularioComponent],
  declarations: [AboutComponent, DesarrolladorComponent, FormularioComponent]
})
export class AboutModule { }
