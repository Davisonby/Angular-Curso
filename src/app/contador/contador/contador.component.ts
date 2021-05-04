import {Component} from '@angular/core'

@Component({
        selector: 'app-contador',
        template: ` 
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong> 5</strong> </h3>
        
        
        
        <button (click)="acumular(0)"> +1 </button>
        
        <span>{{numero}}</span>
        
        <button (click)="acumular(-5)"> -1 </button>
        `
})

export class  contadorComponent{
        titulo:string = 'Contador App';
        numero:number =5;
       
        acumular(valor:number){
         this.numero+= valor+5;
}
}