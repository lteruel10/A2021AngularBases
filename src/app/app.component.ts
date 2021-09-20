import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<span>Luigi</span>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Contador App';
  titulo:string = 'Contador App';
  valor:number = 10;

  // sumar(){
  //   this.valor+=1;
  // }
  //   restar(){
  //   this.valor-=1;
  // }
  public base:number=5;
  acumular(numero:number){
    this.valor+=numero;
    /// base:number =5;

  }
}

