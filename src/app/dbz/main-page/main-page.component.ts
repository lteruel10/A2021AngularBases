import { Component } from '@angular/core';

interface Personaje{ 
  nombre:string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent  {
nuevo:Personaje={
  nombre:'Trucks',
  poder:14000
}


// agregar(event:any){ 
//   event.preventDefault(); 
//   console.log(event);
// }
agregar(){ 
  console.log(this.nuevo);
}
cambiarNombre(event:any){ 
  console.log(event.data); 
  console.log(event.target.value); 
}
}