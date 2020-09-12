
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaService } from './categoria.service';
import { ProductoService } from './producto.service';

@NgModule({
    imports:[
        HttpClientModule,
        CommonModule
    ],
    exports:[
    ],
    providers: 
    [
        UsuarioService,
        CategoriaService,
        ProductoService
    ],
})
export class ServicesModule {}