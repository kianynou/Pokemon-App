import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pokemon } from 'src/app/core/shared/pokemon';
import { UserService } from 'src/app/core/shared/user.service';
import { User } from 'src/app/core/shared/user';

@Component({
  selector: 'app-pokemon-list-page',
  templateUrl: './pokemon-list-page.component.html',
  styleUrls: ['./pokemon-list-page.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class PokemonListPageComponent implements OnInit {

  pokemonDetail: Pokemon;
  connectedUser: User;
  
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    if(!this.userService.connectedUser){
      this.connectedUser = {
        id: 5,
        username: "visiteur",
        email: "visiteur@visteur.com",
        password: "visiteur",
        role: "visiteur"
      };
      console.log(this.connectedUser)
    }else{
    this.connectedUser = this.userService.connectedUser;
    console.log(this.connectedUser)
    }
  }

  onPokemonSelect(selectedPokemon: Pokemon){
    this.pokemonDetail = selectedPokemon;
  };

}
