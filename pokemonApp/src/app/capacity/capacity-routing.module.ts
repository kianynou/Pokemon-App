import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapacityComponent } from './capacity.component';
import { CreateCapacityPageComponent } from './pages/create-capacity-page/create-capacity-page.component';
import { CapacitiesPageComponent } from './pages/capacities-page/capacities-page.component';

const routes: Routes = [
  { path: '', component: CapacitiesPageComponent },
  { path: 'create', component: CreateCapacityPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapacityRoutingModule { }
