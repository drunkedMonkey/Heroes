import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA9x0r5sKZan0M_TOzPoffpUJMyCEuodv_VaWOsrZ3jkY5Y8gBbr3kIM1_lpVxKtDNM0tTJbpxEFJRKUe8'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){    
    return this.getQuery('browse/new-releases?limit=20')
              .pipe(map(data => data['albums'].items));    
  }

  getArtista(termino:string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe(map (data => data['artists'].items));
  }
}
