import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TypeService } from 'src/app/core/shared/type.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Type } from 'src/app/core/shared/type';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TypeComponent implements OnInit {

  private baseUrl = 'http://localhost:3000';
  newType: Type;
  types: Type[]=[];

  typeForm: FormGroup = this.fb.group({
    name: [''],
    image: [''],
  });

  constructor(
    private fb: FormBuilder, 
    private typeService: TypeService, 
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.getType();
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.typeForm.get('image').setValue(file);
    }
  }

  addType(){
    console.log( this.typeForm.value.image)
    const formData = new FormData();
    formData.append('image', this.typeForm.get('image').value);
    this.http.post<any>(`${this.baseUrl}/types/upload-image`, formData).subscribe(
      (res) => {
        let newType = {
          name: this.typeForm.value.name,
          image: res.data.name,
        }
        this.typeService.addType(newType).subscribe(
          result=>{
            console.log(result)
          });
          this.getType();
          this.typeForm.reset({
            'name': '',
            'image': '',
          });
        (err) => console.log(err)
      }
    );
    this.getType();
  }

  getType(){
    this.typeService.getTypes()
      .subscribe((types) => {
        this.types = types
      })
  }

}
