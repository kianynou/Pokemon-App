import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { PokemonService } from 'src/app/core/shared/pokemon.service';
import { Pokemon } from 'src/app/core/shared/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  pokemons: Pokemon[] = []

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit() {
    AOS.init();
    this.pokemonService.getPokemons()
    .subscribe(pokemons => {
      this.pokemons = this.shuffle(pokemons);
      this.pokemons = this.pokemons.slice(0,10)
    })
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

}
