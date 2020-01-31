import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pokemon } from 'src/app/core/shared/pokemon';

@Component({
  selector: 'app-pokemon-list-page',
  templateUrl: './pokemon-list-page.component.html',
  styleUrls: ['./pokemon-list-page.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class PokemonListPageComponent implements OnInit {

  pokemonDetail: Pokemon;
  
  constructor() { }

  ngOnInit() {
  }

  onPokemonSelect(selectedPokemon: Pokemon){
    this.pokemonDetail = selectedPokemon;
  };

}
