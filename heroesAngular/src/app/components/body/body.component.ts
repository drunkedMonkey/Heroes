import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar =true;

    frase:any ={
        mensaje: 'Un gran poder conlleva una gran reponsabilidad',
        autor: 'Ben Parker'
    };

    personajes: string[] = ['Spiderman','Venom','Dr. Octopus'];
}

