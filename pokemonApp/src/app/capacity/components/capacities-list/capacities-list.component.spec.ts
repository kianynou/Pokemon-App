import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitiesListComponent } from './capacities-list.component';

describe('CapacitiesListComponent', () => {
  let component: CapacitiesListComponent;
  let fixture: ComponentFixture<CapacitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
