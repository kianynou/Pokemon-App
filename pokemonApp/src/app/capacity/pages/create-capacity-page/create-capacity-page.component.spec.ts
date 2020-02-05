import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCapacityPageComponent } from './create-capacity-page.component';

describe('CreateCapacityPageComponent', () => {
  let component: CreateCapacityPageComponent;
  let fixture: ComponentFixture<CreateCapacityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCapacityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCapacityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
