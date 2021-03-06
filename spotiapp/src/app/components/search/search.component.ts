import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private spotify:SpotifyService) { }

  artistas: any[]=[];
  loading:boolean;
  buscar(termino:string){
    this.loading = true;
    this.spotify.getArtista(termino)
            .subscribe((data:any) => {
              this.artistas = data;
              this.loading = false;
          });
  }
  ngOnInit() {
  }

}
