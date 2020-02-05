import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitiesPageComponent } from './capacities-page.component';

describe('CapacitiesPageComponent', () => {
  let component: CapacitiesPageComponent;
  let fixture: ComponentFixture<CapacitiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
