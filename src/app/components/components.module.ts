import { NgModule } from "@angular/core";
import { IncrementatorComponent } from './incrementator/incrementator.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ChartsModule } from 'ng2-charts';
import { FomularioComponent } from './fomulario.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegistroCategoriasComponent } from './registro-categorias.component';
import { ServicesModule } from "../services/services.module";
import { SelectorCategoriasComponent } from './selector-categorias.component';
import { IndividualComponent } from './individual.component';
import { CertificadoComponent } from './certificado.component';

@NgModule({
    declarations:[
        IncrementatorComponent,
        FomularioComponent,
        RegistroCategoriasComponent,
        SelectorCategoriasComponent,
        IndividualComponent,
        CertificadoComponent,
    ],
    exports:
    [
        IncrementatorComponent,
        FomularioComponent,
        RegistroCategoriasComponent,
        SelectorCategoriasComponent,
        IndividualComponent,
        CertificadoComponent,
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserModule,
        ChartsModule,
        NgSelectModule,
        ServicesModule
    ],
    providers:[
        ServicesModule
    ]
})

export class ComponentsModule { };