import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ContadorComponent } from './contador/contador.components';


@NgModule({
    declarations:[
        ContadorComponent
        ],
    exports: [
        ContadorComponent        
    ],
    imports: [//solo modulos se colocan en los imports
        //CommonModule//si usamos ngIf ngFor entre otras cosas (directivas personalizadas de angular)
    ]

})
export class ContadorModule{

}