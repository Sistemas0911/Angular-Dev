import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // para filtrar datos

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log( 'Spotify Service Listo' );
  }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCaanH7JMm4W7k0v03KkinOgUuSFpETlf6t6vTas40TAR4Tov5QBPYCb9j8Y6pL9Yq5ygFEBgq9HBolx2Q'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQBxNM_ebq1LhKVCIx-OWIHgJzk7bRrclALdweKPTe40Rr4epE1SzkZGZ5g-RljHWDHeofEiI8eIWbb6ofM'
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //               .pipe( map(data => data['albums'].items));

    return this.getQuery('browse/new-releases')
    .pipe( map(data => data['albums'].items));
  }

  getArtistas(termino: string) {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQBxNM_ebq1LhKVCIx-OWIHgJzk7bRrclALdweKPTe40Rr4epE1SzkZGZ5g-RljHWDHeofEiI8eIWbb6ofM'
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
    // .pipe( map(data => data['artists'].items));
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe( map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`);
    // .pipe( map(data => data['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map( data => data['tracks']));
  }
}
