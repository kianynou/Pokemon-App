import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/core/shared/pokemon.service';
import { Pokemon } from 'src/app/core/shared/pokemon';
import { TalentService } from 'src/app/core/shared/talent.service';
import { Talent } from 'src/app/core/shared/talent';

@Component({
  selector: 'app-pokemon-creer',
  templateUrl: './pokemon-creer.component.html',
  styleUrls: ['./pokemon-creer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PokemonCreerComponent implements OnInit {

  private baseUrl = 'http://localhost:3000';
  newPokemon: Pokemon;
  files = [];
  talents: Talent[] = [];
  pokemons: Pokemon[] =  [];

  pokemonForm: FormGroup = this.fb.group({
    numero: [''],
    name: [''],
    artwork : [''],
    sprite : [''],
    spriteshiny : [''],
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
    private router: Router,
    private talentService: TalentService,
  ) { }

  ngOnInit() {
    this.talentService.getTalent().subscribe((talents) => {
      this.talents = talents;
    });
    // this.pokemonService.getPokemons().subscribe((pokemons) => {
    //   this.pokemons = pokemons;
    //   console.log(this.pokemons)
    // })
  }

  onFileSelect(event) {
    
    if (event.target.files.length > 0) {
      this.files.push(event.target.files[0]);
      this.pokemonForm.get('artwork').setValue(this.files[0]);
      this.pokemonForm.get('sprite').setValue(this.files[1]);
      this.pokemonForm.get('spriteshiny').setValue(this.files[2]);
      console.log(this.files);
      console.log(this.pokemonForm.value.artwork);
      console.log(this.pokemonForm.value.sprite);
      console.log(this.pokemonForm.value.spriteshiny)
    }
  }

  getTalent1() {
    return this.talents.filter(p => 
      p.id !== this.pokemonForm.get('talent2').value &&
      p.id !== this.pokemonForm.get('talent3').value 
    )
  }

  getTalent2() {
    return this.talents.filter(p => 
      p.id !== this.pokemonForm.get('talent1').value && 
      p.id !== this.pokemonForm.get('talent3').value
    )
  }

  getTalent3() {
    return this.talents.filter(p => 
      p.id !== this.pokemonForm.get('talent1').value && 
      p.id !== this.pokemonForm.get('talent2').value
    )
  }

  getPrevoluton(){
    return this.pokemons.filter(p => 
      p.id !== this.pokemonForm.get('evolution').value
    )
  }

  getEvoluton(){
    return this.pokemons.filter(p => 
      p.id !== this.pokemonForm.get('prevolution').value
    )
  }

  addPokemon(){
    const formData = new FormData();
    console.log(formData)
    formData.append('artwork', this.pokemonForm.get('artwork').value);
    formData.append('sprite', this.pokemonForm.get('sprite').value);
    formData.append('spriteshiny', this.pokemonForm.get('spriteshiny').value);
    this.http.post<any>(`${this.baseUrl}/pokemons/upload-image`, formData).subscribe(
      (res) => {
        let newPokemon = {
          numero: this.pokemonForm.value.numero,
          name: this.pokemonForm.value.name,
          artwork : res.artwork.name,
          sprite : res.sprite.name,
          spriteshiny : res.spriteshiny.name,
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
    // this.pokemonService.getPokemons();
    setTimeout( () => {this.router.navigateByUrl('/pokemon/pokedex')}, 1000);
  }

}
