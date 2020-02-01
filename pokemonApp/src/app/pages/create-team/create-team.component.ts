import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pokemon } from 'src/app/core/shared/pokemon';
import { PokemonService } from 'src/app/core/shared/pokemon.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/core/shared/team.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/shared/user';
import { UserService } from 'src/app/core/shared/user.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateTeamComponent implements OnInit {

  pokemons: Pokemon[] = [];

  pokemons1: Pokemon[] = [];
  pokemons2: Pokemon[] = [];
  pokemons3: Pokemon[] = [];
  pokemons4: Pokemon[] = [];
  pokemons5: Pokemon[] = [];
  pokemons6: Pokemon[] = [];
  connectedUser: User;

  teamForm: FormGroup = this.fb.group({
    teamName: [''],
    pokemon1: [''],
    pokemon2: [''],
    pokemon3: [''],
    pokemon4: [''],
    pokemon5: [''],
    pokemon6: [''],
  });

  constructor(
    private pokemonService: PokemonService,
    private fb: FormBuilder,
    private teamService: TeamService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemons()
    .subscribe(pokemons => {
      this.pokemons = pokemons;
      console.log(this.pokemons2)
    })
    this.connectedUser  = this.userService.connectedUser;

  }

  getPokemons1() {
    return this.pokemons.filter(p => 
      p.id !== this.teamForm.get('pokemon2').value &&
      p.id !== this.teamForm.get('pokemon3').value && 
      p.id !== this.teamForm.get('pokemon4').value &&
      p.id !== this.teamForm.get('pokemon5').value &&
      p.id !== this.teamForm.get('pokemon6').value
      )
  }

  getPokemons2() {
    return this.pokemons.filter(p => 
      p.id !== this.teamForm.get('pokemon1').value && 
      p.id !== this.teamForm.get('pokemon3').value &&
      p.id !== this.teamForm.get('pokemon4').value &&
      p.id !== this.teamForm.get('pokemon5').value &&
      p.id !== this.teamForm.get('pokemon6').value
    )
  }

  getPokemons3() {
    return this.pokemons.filter(p => 
      p.id !== this.teamForm.get('pokemon1').value && 
      p.id !== this.teamForm.get('pokemon2').value &&
      p.id !== this.teamForm.get('pokemon4').value &&
      p.id !== this.teamForm.get('pokemon5').value &&
      p.id !== this.teamForm.get('pokemon6').value
      )
  }

  getPokemons4() {
    return this.pokemons.filter(p => 
      p.id !== this.teamForm.get('pokemon1').value && 
      p.id !== this.teamForm.get('pokemon2').value &&
      p.id !== this.teamForm.get('pokemon3').value &&
      p.id !== this.teamForm.get('pokemon5').value &&
      p.id !== this.teamForm.get('pokemon6').value
      )
  }

  getPokemons5() {
    return this.pokemons.filter(p => 
      p.id !== this.teamForm.get('pokemon1').value && 
      p.id !== this.teamForm.get('pokemon2').value &&
      p.id !== this.teamForm.get('pokemon3').value &&
      p.id !== this.teamForm.get('pokemon4').value &&
      p.id !== this.teamForm.get('pokemon6').value
      )
  }

  getPokemons6() {
    return this.pokemons.filter(p => 
      p.id !== this.teamForm.get('pokemon1').value && 
      p.id !== this.teamForm.get('pokemon2').value &&
      p.id !== this.teamForm.get('pokemon3').value &&
      p.id !== this.teamForm.get('pokemon4').value &&
      p.id !== this.teamForm.get('pokemon5').value 
      )
  }


  addTeam(){
    console.log( this.teamForm.value.image)
    let newTeam = {
      name: this.teamForm.value.teamName,
      user_id: this.connectedUser.id,
      pokemon1: this.teamForm.value.pokemon1,
      pokemon2: this.teamForm.value.pokemon2,
      pokemon3: this.teamForm.value.pokemon3,
      pokemon4: this.teamForm.value.pokemon4,
      pokemon5: this.teamForm.value.pokemon5,
      pokemon6: this.teamForm.value.pokemon6,
    }
    this.teamService.addTeam(newTeam).subscribe(
      result=>{
        console.log(result);
        this.router.navigateByUrl('/pokemon/pokedex');
      });
    (err) => console.log(err)


  }

}


