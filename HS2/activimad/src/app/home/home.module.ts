import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ActivimadService } from '../services/activimad.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { EventComponent } from '../components/event/event.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [
    ActivimadService
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
