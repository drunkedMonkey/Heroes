import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA9x0r5sKZan0M_TOzPoffpUJMyCEuodv_VaWOsrZ3jkY5Y8gBbr3kIM1_lpVxKtDNM0tTJbpxEFJRKUe8'
    
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers});
  }
}
