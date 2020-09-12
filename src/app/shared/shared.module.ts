import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard_adminModule } from './sidebarComponent/dashboard_admin/dashboard_admin.module';

//COMPONENTES COMPARTIDOS
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatgBodegonComponent } from './sidebarComponent/catg-bodegon/catg-bodegon.component';
import { CatgFerreteriaComponent } from './sidebarComponent/catg-ferreteria/catg-ferreteria.component';
import { PagesComponent } from './sidebarComponent/pages/pages.component';
import { CertificatesComponent } from './sidebarComponent/certificates/certificates.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { Dashboard_userModule } from './sidebarComponent/dashboard_user/dashboard_user.module';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    CatgBodegonComponent,
    CatgFerreteriaComponent,
    PagesComponent,
    CertificatesComponent,
    CarrouselComponent,
  ],
  imports: [
    CommonModule,
    Dashboard_adminModule,
    Dashboard_userModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    CarrouselComponent,
    Dashboard_adminModule,
    Dashboard_userModule
  ]
})
export class SharedModule { }
