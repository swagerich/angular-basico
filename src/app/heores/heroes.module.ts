import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule //es importante CommonModule ya que eso sirve para utilizar ngIf ngFor
       
    ]

})
export class HeroesModule{

}