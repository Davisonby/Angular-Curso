import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})


export class HeroeComponent{
    nombre:string ='Capitan America'
    edad:number = 95;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    ObtenerNombre():String{
        return `${this.nombre}- ${this.edad}`;
    }
    cambiarNombre():void{
        this.nombre = 'Spiderman';
         
    }
    cambiarEdad():void{
        this.edad = 67;
         
    }
}
