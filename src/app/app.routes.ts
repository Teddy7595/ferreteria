import { RouterModule ,Routes } from '@angular/router';

import { Page404Component } from './pages/page404/page404.component';
import { RegisterComponent} from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
//import { Dashboard_aComponent } from './pages/dashboard_a/dashboard_a.component';

const appRoutes: Routes = 
[
    
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    //{path:'dashboard', component: Dashboard_aComponent},
    {path: '**', component: Page404Component}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});