import { Component } from "@angular/core";

@Component ({
    selector    : 'app-heroe',
    templateUrl :'./heroe.component.html'
})
export class HeroeComponent{
    nombre  :string='Ironman';
    edad    :number =45;

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    get nombreCapitalizado():string{//simula ser una propiedad pero es un getter
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        console.log('heyyy');  
        this.nombre='Spiderman'
    }

    cambiarEdad():void{
        this.edad=50;
    }

}