import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivimadService } from '../services/activimad.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { ActividadesRoutingModule } from './actividades-routing.module';
import { ActividadesComponent } from './actividades.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ActividadesRoutingModule,
    HttpClientModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [
    ActividadesComponent
  ],
  providers: [
    ActivimadService
  ],
  declarations: [ActividadesComponent]
})
export class ActividadesModule { }
