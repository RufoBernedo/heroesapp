import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '..interfaces/heroe.interface'
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL : string = "https://heroesapp-c8e0f.firebaseio.com/heroes.json";

  constructor( private http : Http ) { }


  nuevoHeroe(heroe : Heroe){

    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.post( this.HeroesURL, body, { headers })
           .map( res => {
             console.log(res.json());
             return res.json();
           });
  }
}
