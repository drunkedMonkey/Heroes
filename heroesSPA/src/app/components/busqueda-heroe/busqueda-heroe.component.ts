import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from "../../services/heroes.service";


@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styleUrls: ['./busqueda-heroe.component.css']
})
export class BusquedaHeroeComponent implements OnInit {
  
  heroes:any[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,private router:Router, private _heroesService:HeroesService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

  verHeroe(idx:number){
    this.router.navigate (['/heroe', idx]);
  }

}
