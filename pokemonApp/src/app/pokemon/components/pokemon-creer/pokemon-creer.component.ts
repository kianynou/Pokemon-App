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

  pokemonForm: FormGroup = this.fb.group({
    number: [''],
    name: [''],
    image: [''],
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
      const file = event.target.files[0];
      this.pokemonForm.get('image').setValue(file);
    }
  }

  addPokemon(){
    console.log( this.pokemonForm.value.image)
    const formData = new FormData();
    formData.append('image', this.pokemonForm.get('image').value);
    this.http.post<any>(`${this.baseUrl}/pokemons/upload-image`, formData).subscribe(
      (res) => {
        let newPokemon = {
          number: this.pokemonForm.value.number,
          name: this.pokemonForm.value.name,
          image: res.data.name,
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
