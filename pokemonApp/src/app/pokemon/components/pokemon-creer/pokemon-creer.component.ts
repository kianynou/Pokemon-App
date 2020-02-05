import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/core/shared/pokemon.service';
import { Pokemon } from 'src/app/core/shared/pokemon';

@Component({
  selector: 'app-pokemon-creer',
  templateUrl: './pokemon-creer.component.html',
  styleUrls: ['./pokemon-creer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PokemonCreerComponent implements OnInit {

  private baseUrl = 'http://localhost:3000';
  newPokemon: Pokemon;
  files = []

  pokemonForm: FormGroup = this.fb.group({
    number: [''],
    name: [''],
    artwork : [''],
    sprite : [''],
    spriteShiny : [''],
    description : [''],
    talent1 : [''],
    talent2 : [''],
    talent3 : [''],
    type1 : [''],
    type2 : [''],
    evolution : [''],
    prevolution : [''],
    hp : [''],
    atk : [''],
    def : [''],
    atkspe : [''],
    defspe : [''],
    speed : [''],
    special : [''],
  });

  constructor(
    private fb: FormBuilder, 
    private pokemonService: PokemonService, 
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onFileSelect(event) {
    
    if (event.target.files.length > 0) {
      this.files.push(event.target.files[0]);
      this.pokemonForm.get('artwork').setValue(this.files[0]);
      this.pokemonForm.get('sprite').setValue(this.files[1]);
      this.pokemonForm.get('spriteShiny').setValue(this.files[2]);
      console.log(this.files)
    }
  }

  addPokemon(){
    const formData = new FormData();
    formData.append('artwork', this.pokemonForm.get('artwork').value);
    formData.append('sprite', this.pokemonForm.get('sprite').value);
    formData.append('spriteShiny', this.pokemonForm.get('spriteShiny').value);
    this.http.post<any>(`${this.baseUrl}/pokemons/upload-image`, formData).subscribe(
      (res) => {
        let newPokemon = {
          number: this.pokemonForm.value.number,
          name: this.pokemonForm.value.name,
          image: res.artwork.name,
          artwork : res.artwork.name,
          sprite : res.sprite.name,
          spriteShiny : res.spriteShiny.name,
          description : this.pokemonForm.value.description,
          talent1 : this.pokemonForm.value.talent1,
          talent2 : this.pokemonForm.value.talent2,
          talent3 : this.pokemonForm.value.talent3,
          type1 : this.pokemonForm.value.type1,
          type2 : this.pokemonForm.value.type2,
          evolution : this.pokemonForm.value.evolution,
          prevolution : this.pokemonForm.value.prevolution,
          hp : this.pokemonForm.value.hp,
          atk : this.pokemonForm.value.atk,
          def : this.pokemonForm.value.def,
          atkspe : this.pokemonForm.value.atkspe,
          defspe : this.pokemonForm.value.defspe,
          speed : this.pokemonForm.value.speed,
          special : this.pokemonForm.value.special,
        }
        this.pokemonService.addPokemon(newPokemon).subscribe(
          result=>{
            console.log(result)
          });
        (err) => console.log(err)
      }
    );
    this.pokemonService.getPokemons();
    setTimeout( () => {this.router.navigateByUrl('/pokemon/pokedex')}, 1000);
  }

}
