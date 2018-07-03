import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  // paises: any[] = [];

  // constructor( private http: HttpClient ) {

  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //   .subscribe( (respuesta: any) => {
  //     this.paises = respuesta;
  //   });

  // }
nuevasCanciones: any[] = [];
loading: boolean;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }
}
