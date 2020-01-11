import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDPzrygCT8oJE6LsCGDdT6e7uveQx9PflY6AOmz2xtuASscMAIzk2Oh1RFF6KGzAGcOt7na-c9L3JhuJqc'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers})
      .subscribe( data =>{
        console.log(data);
      });
  }
}
