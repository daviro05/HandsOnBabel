import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    EventComponent
  ],
  declarations: [EventComponent]
})
export class ComponentsModule { }