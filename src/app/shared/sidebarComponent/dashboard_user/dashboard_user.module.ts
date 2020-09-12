import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent }from './user.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';

@NgModule({
  declarations: [
    UserComponent,
    CarritoComprasComponent
  ],
  imports: [ 
    CommonModule 
  ],
  exports: [
    UserComponent,
    CarritoComprasComponent
  ],
  providers: [],
})
export class Dashboard_userModule { }
