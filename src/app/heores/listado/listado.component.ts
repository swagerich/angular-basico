import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  heroes:string[]=['speiderman','heroman','thor','goku'];
  heroeBorrados:string='';

  //BORRAR HEROE DINAMICAMENTE
  borrarHeroe(){
  console.log('borrando....');
  //borramos con shift de un arreglo or|| devolver un blanco;
  this.heroeBorrados =this.heroes.shift() || '';
  if(this.heroeBorrados !== ''){
    this.heroeBorrados;
  }
 
    }

}

