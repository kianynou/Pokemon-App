import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Talent } from 'src/app/core/shared/talent';
import { TalentService } from 'src/app/core/shared/talent.service';

@Component({
  selector: 'app-create-talent',
  templateUrl: './create-talent.component.html',
  styleUrls: ['./create-talent.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateTalentComponent implements OnInit {

  newTalent: Talent;
  talentList: Talent[] = [];

  talentForm = this.fb.group({
    name: [''],
    description: ['']
  });

  constructor(private fb: FormBuilder, private talentService: TalentService) { }

  ngOnInit() {
    this.getTalent();
  }

//appelle de la liste des talents dans le service

  getTalent(){
    this.talentService.getTalent()
    .subscribe(result => result.map(value =>
      this.talentList.push(value)));
      return this.talentList;
  };

//appelle de la fonction dans le service et injection d'un nouveau talent

  addTalent(){
    this.newTalent = new Talent(this.talentForm.value.name, this.talentForm.value.description);
    this.talentService.addTalent(this.newTalent).subscribe(response => {
      console.log(response);
    });
    this.clearForm();
  };

  clearForm() {
    this.talentForm.reset({
      'name': '',
      'description': ''
    });
  };
}
