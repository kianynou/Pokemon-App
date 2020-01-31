import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import { Talent } from './talent';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  talent: Set<Talent> = new Set<Talent>();
  pokemon: Pokemon;

  private talentURL = 'http://localhost:3000'
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

//recépurération de la liste des talents  
  getTalent(): Observable<Talent[]>{
    return this.http.get<Talent[]>(`${this.talentURL}/talent`)
  }

//ajout d'un nouveau talent dans la base de donnée

  addTalent(newTalent: Talent): Observable<any> {
    return this.http.post<any>(`${this.talentURL}/talent`, newTalent)
  }

}
