import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCapacityComponent } from './create-capacity.component';

describe('CreateCapacityComponent', () => {
  let component: CreateCapacityComponent;
  let fixture: ComponentFixture<CreateCapacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCapacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
