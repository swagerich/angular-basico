import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template:`

        <h1>{{titulo}}</h1>

        <h3>la base : <strong>{{base}}</strong></h3>

        <button (click)="acumular(+ base)"> + {{base}} </button>

        <span > {{contador}} </span>

        <button (click)="acumular(- base)"> - {{base}}</button>
    `
  })
export class ContadorComponent{
    titulo = 'Contador App';
    contador: number = 10;
  
    base : number = 5 ;
  
  
      acumular(valor:number ):void{
      this.contador+=valor;
      }
  

}