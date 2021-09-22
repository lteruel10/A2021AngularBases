import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  heroeBorrado:string='';
  heroes: string[]=['Spiderman','Hulk', 'Godzilla','Wolverine'];
  borrarHeroe(){ 
    // this.heroes.splice(0, 1);
    
   this.heroeBorrado =this.heroes.shift()|| '';
    console.log('Borrando! ', this.heroeBorrado);
  }

  constructor() {
   }

  ngOnInit(): void {

  }

}
