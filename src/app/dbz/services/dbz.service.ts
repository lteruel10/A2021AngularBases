import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{
    personajes:Personaje[]=[
        { nombre:'Goku',
         poder:15000},
         { nombre:'Vegueta',
         poder:7500},
         { nombre:'Krillin',
         poder:0},
         { nombre:'Picolo',
         poder:25000}
       ];
    constructor(){
        console.log('Servicio DBZ inicializado');
    }

}