import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { AsideComponent } from './aside/aside.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EventComponent,
    AsideComponent
  ],
  declarations: [EventComponent, AsideComponent]
})
export class ComponentsModule { }
