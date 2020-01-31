import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTalentComponent } from './create-talent.component';

describe('CreateTalentComponent', () => {
  let component: CreateTalentComponent;
  let fixture: ComponentFixture<CreateTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
