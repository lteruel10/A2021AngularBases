import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent  {
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
 
  nuevo:Personaje={
    nombre:"maestro Roshi",
    poder:750}


cambiarNombre(event:any){ 
  console.log(event.data); 
  console.log(event.target.value); 

}
}
