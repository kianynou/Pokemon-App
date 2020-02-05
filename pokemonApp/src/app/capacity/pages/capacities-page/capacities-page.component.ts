import { Component, OnInit } from '@angular/core';
import { CapacityService } from 'src/app/core/shared/capacity.service';
import { Capacity } from 'src/app/core/shared/capacity';

@Component({
  selector: 'app-capacities-page',
  templateUrl: './capacities-page.component.html',
  styleUrls: ['./capacities-page.component.scss']
})
export class CapacitiesPageComponent implements OnInit {

  capacities: Capacity[] = []

  constructor(
    private capacityService : CapacityService
  ) { }

  ngOnInit() {
    this.capacityService.getCapacities()
      .subscribe((capacities) => {
        this.capacities = capacities;
        console.log(this.capacities)
      })
  }

}
