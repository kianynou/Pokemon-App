import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCreerComponent } from './components/pokemon-creer/pokemon-creer.component';
import { MatButtonModule, MatFormFieldModule,  MatInputModule,  MatPaginatorModule, MatSelectModule} from '@angular/material';
import { PokemonListPageComponent } from './pages/pokemon-list-page/pokemon-list-page.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';


@NgModule({
  declarations: [
    PokemonComponent, 
    PokemonListComponent, 
    PokemonCreerComponent, PokemonListPageComponent, PokemonDetailsComponent
  ],

  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
  ]
})
export class PokemonModule { }
