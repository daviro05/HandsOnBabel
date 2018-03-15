import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'sugerencias', loadChildren: './sugerencias/sugerencias.module#SugerenciasModule' },
  { path: 'actividades', loadChildren: './actividades/actividades.module#ActividadesModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
