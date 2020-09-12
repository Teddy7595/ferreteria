import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//ROUTES
import { APP_ROUTES } from './app.routes';
import { PagesModule } from './pages/pages.module';
import { PAGES_ROUTES } from './pages/pages.routes';

//TEMPORAL




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PAGES_ROUTES,
    PagesModule,
    FormsModule,
    //Dashboard_aModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
