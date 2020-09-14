import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

//PAGINAS
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { PageComponent } from './page.component';
import { FerreteriaComponent } from './home/ferreteria/ferreteria.component';
import { BodegonComponent } from './home/bodegon/bodegon.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProgressComponent } from './progress/progress.component';
import { ProductosFerreteriaComponent } from './productos/productos-ferreteria.component';
import { ProductosBodegonComponent } from './productos/productos-bodegon.component';
import { IndividualComponent } from '../components/individual.component';


//RUTAS
import { PAGES_ROUTES } from './pages.routes';
import { ServicesModule } from '../services/services.module';
import { CategoriasComponent } from './categorias/categorias.component';


@NgModule({
  declarations: [
    HomeComponent,
    Page404Component,
    PageComponent,
    FerreteriaComponent,
    BodegonComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    ProgressComponent,
    ProductosFerreteriaComponent,
    ProductosBodegonComponent,
    CategoriasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    ServicesModule
  ],
  exports:[
    HomeComponent,
    PageComponent
  ],
  providers:[
    ServicesModule
  ]
})

export class PagesModule { }
