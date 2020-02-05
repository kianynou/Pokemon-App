import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListPageComponent } from './pages/pokemon-list-page/pokemon-list-page.component';
import { TalentComponent } from './pages/talent/talent.component';
import { CreateTeamComponent } from './pages/create-team/create-team.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { TeamSearchComponent } from './pages/team-search/team-search.component';
import { AuthGuard } from './auth.guard';
import { TypeComponent } from './pages/type/type.component';


const routes: Routes = [
  { path: "", loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: "pokedex", component: PokemonListPageComponent },
  { path: "talent", component: TalentComponent },
  { path: "create-team", component: CreateTeamComponent, canActivate: [AuthGuard] },
  { path: "search-team", component: TeamSearchComponent },
  { path: "profil", component: ProfilComponent },
  { path: "type", component: TypeComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'pokemon', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: 'capacity', loadChildren: () => import('./capacity/capacity.module').then(m => m.CapacityModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
