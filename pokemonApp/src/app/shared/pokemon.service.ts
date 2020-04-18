import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon: Pokemon;

  private typeApi = 'https://pokeapi.co/api/v2/type/'
  private pokemonApi = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }

  getPokemons(offset) : Observable<any> {
    return this.http.get(`${this.pokemonApi}?offset=${offset}`);
  }
  
  getType(): Observable<any>{
    return this.http.get(this.typeApi)
  }

  getPokemon(url): Observable<any> {
    return this.http.get(url);
  }

}
