import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(): Observable<any>{
    return this.http.get(`${this.baseUrl}/pokemons`)
  }

  addPokemon(pokemon): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/pokemons`, pokemon);
  }
}
