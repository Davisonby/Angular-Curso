import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

 heroes:string[] = ['Spiderman','Thor','Capitan America','IronMan','Pantera'];
  heroeborrado:string = '';
borrarHeroe() {

const heroeBorrado = this.heroes.shift()||'';
this.heroeborrado = heroeBorrado;
}

}
