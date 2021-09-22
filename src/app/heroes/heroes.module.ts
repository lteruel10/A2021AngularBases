import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListaComponent
    ],
    exports: [
        ListaComponent
    ],
    imports: [//solo modulos se colocan en los imports
        CommonModule//si usamos ngIf ngFor entre otras cosas (directivas personalizadas de angular)
    ]

})
export class HeroesModule{

}