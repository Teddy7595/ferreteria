import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { GestionComponent } from './gestion/gestion.component';
import { AdminComponent } from './admin.component';

@NgModule({
    declarations: [
        ProductosComponent,
        GestionComponent,
        AdminComponent
    ],
    imports: [ 
        CommonModule 
    ],
    exports: [
        AdminComponent
    ],
    providers: [],
})
export class Dashboard_adminModule {}