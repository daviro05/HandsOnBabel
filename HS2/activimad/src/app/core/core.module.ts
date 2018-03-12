import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MenuComponent, HeaderComponent, FooterComponent],
  declarations: [MenuComponent, HeaderComponent, FooterComponent]
})
export class CoreModule { }
