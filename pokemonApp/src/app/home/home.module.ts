import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HomeRoutingModule } from './home-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HomeCarouselComponent } from './component/home-carousel/home-carousel.component';
import { HomeComponent } from './pages/home/home.component';
import 'hammerjs';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonCarouselComponent } from './component/pokemon-carousel/pokemon-carousel.component';
import { ScrollToTopComponent } from './component/scroll-to-top/scroll-to-top.component';


@NgModule({
  declarations: [
    HomeComponent, 
    HomeCarouselComponent, PokemonCarouselComponent, ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxHmCarouselModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule
  ]
})
export class HomeModule { }
