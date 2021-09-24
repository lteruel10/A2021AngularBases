import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{
  // @Input('dataPersonajes') personajes:Personaje[]=[];
  @Input('dataNuevo') nuevo:Personaje={
    nombre:'',
    poder:0
  }

  @Output() onNewPersonaje:EventEmitter<Personaje>= new EventEmitter

agregar(){ 
  //validacion
  if (this.nuevo.nombre.trim().length===0){   return; }//salte de este metodo
    console.log(this.nuevo);
    // this.personajes.push(this.nuevo);
    this.onNewPersonaje.emit(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
}

}
