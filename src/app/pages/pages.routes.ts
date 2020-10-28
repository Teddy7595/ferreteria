import { RouterModule, Routes } from '@angular/router';

//paginas
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';
import { ProgressComponent } from './progress/progress.component';

//paginas del dashboard
import { ProductosBodegonComponent } from './productos/productos-bodegon.component';
import { ProductosFerreteriaComponent } from './productos/productos-ferreteria.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { CertificadoUserComponent } from './certificados/certificado-user.component';
import { ReportesComponent } from './reportes/reportes.component';



const pagesRoutes: Routes = [
    
    {
        path: '', 
        component: PageComponent,
        children:
        [
            {path:'', component: HomeComponent},
            {path:'progress', component: ProgressComponent},
        ]    
    },
    {
        path: 'dashboard', 
        component: PageComponent,
        children:
        [
            {path:'productos/bodegon', component: ProductosBodegonComponent},
            {path:'productos/ferreteria', component: ProductosFerreteriaComponent},
            {path:'categorias', component: CategoriasComponent},
            {path:'certificados/agregar', component: CertificadosComponent},
            {path:'certificados', component: CertificadoUserComponent},
            {path:'reportes', component: ReportesComponent}
        ]    
    },
    {path: '', redirectTo:'/', pathMatch: 'full'}

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);