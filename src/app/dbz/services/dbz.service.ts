import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{
    private _personajes:Personaje[]=[
        { nombre:'Goku',
         poder:15000},
         { nombre:'Vegueta',
         poder:7500},
         { nombre:'Krillin',
         poder:0},
         { nombre:'Picolo',
         poder:25000}
       ];

       get personajes():Personaje[] {
           return [...this._personajes];
       }


    constructor(){
        console.log('Servicio DBZ inicializado');
    }
    agregarNuevoPersonaje(argumento:Personaje){
        // debugger;//deterne jecucion
        console.log('Main page component');
        this._personajes.push(argumento);
      }

    

}