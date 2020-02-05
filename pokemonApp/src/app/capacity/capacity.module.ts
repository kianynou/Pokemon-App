import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapacityRoutingModule } from './capacity-routing.module';
import { CapacityComponent } from './capacity.component';
import { CreateCapacityPageComponent } from './pages/create-capacity-page/create-capacity-page.component';
import { CreateCapacityComponent } from './components/create-capacity/create-capacity.component';
import { CapacitiesListComponent } from './components/capacities-list/capacities-list.component';
import { CapacitiesPageComponent } from './pages/capacities-page/capacities-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    CapacityComponent,
    CreateCapacityPageComponent,
    CreateCapacityComponent,
    CapacitiesListComponent, 
    CapacitiesPageComponent
  ],
  imports: [
    CommonModule,
    CapacityRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
    ]
})
export class CapacityModule { }
