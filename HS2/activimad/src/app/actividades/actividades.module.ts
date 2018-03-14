import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivimadService } from '../services/activimad.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { ActividadesRoutingModule } from './actividades-routing.module';
import { ActividadesComponent } from './actividades.component';
import { FormsModule } from '@angular/forms';
import { ActividadesDetailsComponent } from './actividades-details/actividades-details.component';

@NgModule({
  imports: [
    CommonModule,
    ActividadesRoutingModule,
    HttpClientModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [
    ActividadesComponent,
    ActividadesDetailsComponent
  ],
  providers: [
    ActivimadService
  ],
  declarations: [ActividadesComponent, ActividadesDetailsComponent]
})
export class ActividadesModule { }
