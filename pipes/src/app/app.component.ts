import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre = "Jose";
  nombre2 = "jose jesus ibañez cantos"
  arreglo = [0,1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a:number = 0.234;
  dolar:number = 1234.5;

  heroe={
    nombre:"Logan",
    clave:"Lobezno",
    edad:500,
    direccion:{
      calle:"Primera",
      casa:"19"
    }
  }

  valorPromesa = new Promise( (res,rej)=>{
    setTimeout(() => res('llego la data'), 5000);
  });

  fecha= new Date();
}
