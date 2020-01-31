import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PokemonService } from 'src/app/shared/pokemon.service';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemon: any;
  offset: number = 0;
  pageIndex:number = 0;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons(this.offset);
  }
  
  @Input() pokemons
  @Output() pokemonClick = new EventEmitter<Pokemon>();

  getPokemons(offset) {
    this.pokemonService.getPokemons(offset)
      .subscribe(response => {
        this.pokemons = response.results;
        for (let p of response.results) {
          p.pokemon = this.pokemonService.getPokemon(p.url);
        }
        this.offset = offset;
      });
  };

  getOffset(event){
    if(event.pageIndex === this.pageIndex + 1){
      this.offset += 20;
      this.getPokemons(this.offset)
    } else if (event.pageIndex === this.pageIndex - 1){
      this.offset -= 20;
      this.getPokemons(this.offset)
    }
    this.pageIndex = event.pageIndex;
  };

  onPokemonClick(pokemon: Pokemon) {
    this.pokemonClick.emit(pokemon)
    console.log(this.pokemon)
  };


}
