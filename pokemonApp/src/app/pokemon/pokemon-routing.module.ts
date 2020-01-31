import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonComponent } from './pokemon.component';
import { PokemonCreerComponent } from './components/pokemon-creer/pokemon-creer.component';
import { PokemonListPageComponent } from './pages/pokemon-list-page/pokemon-list-page.component';

const routes: Routes = [
  { path: '', component: PokemonComponent },
  { path: 'pokedex', component: PokemonListPageComponent },
  { path: 'créer', component: PokemonCreerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
