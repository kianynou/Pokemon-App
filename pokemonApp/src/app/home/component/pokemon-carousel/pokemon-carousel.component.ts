import { Component, OnInit } from '@angular/core';
import { NgxHmCarouselBreakPointUp } from 'ngx-hm-carousel';
import { PokemonService } from 'src/app/core/shared/pokemon.service';
import { Pokemon } from 'src/app/core/shared/pokemon';


@Component({
  selector: 'app-pokemon-carousel',
  templateUrl: './pokemon-carousel.component.html',
  styleUrls: ['./pokemon-carousel.component.scss']
})
export class PokemonCarouselComponent implements OnInit {

  pokemons: Pokemon[] = []

  currentIndex = 0;
  speed = 5000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '123456789123456'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`
    };
  });

  breakpoint: NgxHmCarouselBreakPointUp[] = [
    {
      width: 500,
      number: 1
    },
    {
      width: 800,
      number: 2
    },
    {
      width: 1024,
      number: 4
    },
  ];


  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemons()
    .subscribe(pokemons => {
      this.pokemons = this.shuffle(pokemons);
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
