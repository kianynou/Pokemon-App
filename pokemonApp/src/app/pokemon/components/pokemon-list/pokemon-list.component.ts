import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Pokemon } from 'src/app/core/shared/pokemon';
import { PokemonService } from 'src/app/core/shared/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons
  @Output() pokemonClick = new EventEmitter<Pokemon>();

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemons()
    .subscribe(pokemons => {
      this.pokemons = pokemons
    })
  }

  onPokemonClick(pokemon: Pokemon) {
    this.pokemonClick.emit(pokemon)
  };

}
