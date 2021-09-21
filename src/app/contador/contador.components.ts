import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <!-- <h1>Hola Mundo!</h1> -->
        <h1>{{titulo}}</h1>
        <!-- 
        <button (click)="valor=valor+1;">+1</button>
        <span> {{valor}} </span>
        <button (click)="valor=valor-1;">-1</button> -->
        <h3>La base es {{base}}</h3>

       <button (click)="acumular(-base);">-{{base}}</button>
        <span> {{valor}} </span>
        <button (click)="acumular(base);">+{{base}}</button>

    `
})
export class ContadorComponent {
     // title = 'Contador App';
    titulo:string = 'Contador App';
    valor:number = 10;
    public base:number=5;
    acumular(numero:number){
        this.valor+=numero;
    }
}