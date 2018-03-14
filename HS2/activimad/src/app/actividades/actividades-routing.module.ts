import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadesComponent } from './actividades.component';
import { ActividadesDetailsComponent } from './actividades-details/actividades-details.component';

const routes: Routes = [
  { path: '', component: ActividadesComponent },
  { path: ':id', component: ActividadesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadesRoutingModule { }
