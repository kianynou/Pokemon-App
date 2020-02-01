import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonListPageComponent } from './pages/pokemon-list-page/pokemon-list-page.component';
import { TalentComponent } from './pages/talent/talent.component';
import { CreateTeamComponent } from './pages/create-team/create-team.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { TeamSearchComponent } from './pages/team-search/team-search.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: "pokedex", component: PokemonListPageComponent },
  { path: "talent", component: TalentComponent },
  { path: "create-team", component: CreateTeamComponent, canActivate: [AuthGuard] },
  { path: "search-team", component: TeamSearchComponent },
  { path: "profil", component: ProfilComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'pokemon', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
