import { Component, OnInit } from '@angular/core';
import { Capacity } from 'src/app/core/shared/capacity';
import { TypeService } from 'src/app/core/shared/type.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Type } from '@angular/compiler/src/core';
import { CapacityService } from 'src/app/core/shared/capacity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-capacity',
  templateUrl: './create-capacity.component.html',
  styleUrls: ['./create-capacity.component.scss']
})
export class CreateCapacityComponent implements OnInit {

  newCapacity: Capacity;
  types: Type;

  capacityForm: FormGroup = this.fb.group({
    name : [''],
    description : [''],
    power : [''],
    accuracy : [''],
    type_id : [''],
    category : [''],
    pp : [''],
  });


  constructor(    
    private fb: FormBuilder, 
    private typeService: TypeService,
    private capacityService: CapacityService,
    private router: Router
  ) { }


  ngOnInit() {
    this.typeService.getTypes()
      .subscribe(types => this.types = types)
  }

  addCapacity(){
    let newCapacity = {
      name : this.capacityForm.value.name,
      description : this.capacityForm.value.description,
      power : this.capacityForm.value.power,
      accuracy : this.capacityForm.value.accuracy,
      type_id : this.capacityForm.value.type_id,
      category : this.capacityForm.value.category,
      pp : this.capacityForm.value.pp,
    }
    this.capacityService.addCapacity(newCapacity).subscribe(
      result=>{
        console.log(result);
        this.router.navigateByUrl('/capacity')
      }
    )
  }

}
