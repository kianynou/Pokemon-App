import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PokemonService } from 'src/app/shared/pokemon.service';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  pokemonDetail: Pokemon;
  types: any;

  constructor(public pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getType()
    .subscribe(response => {
      this.types = response.results
    })
  };

  onPokemonSelect(selectedPokemon: Pokemon){
    this.pokemonDetail = selectedPokemon;
  };



}
