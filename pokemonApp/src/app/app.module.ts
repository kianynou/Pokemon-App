import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListPageComponent } from './pages/pokemon-list-page/pokemon-list-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateTalentComponent } from './components/create-talent/create-talent.component';
import { TalentComponent } from './pages/talent/talent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth-interceptor';
import { CreateTeamComponent } from './pages/create-team/create-team.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { TeamSearchComponent } from './pages/team-search/team-search.component';
import { AuthGuard } from './auth.guard';
import { TypeComponent } from './pages/type/type.component';



@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailsComponent,
    NavbarComponent,
    PokemonListComponent,
    PokemonListPageComponent,
    CreateTalentComponent,
    TalentComponent,
    CreateTeamComponent,
    ProfilComponent,
    TeamSearchComponent,
    TypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  AuthGuard,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
