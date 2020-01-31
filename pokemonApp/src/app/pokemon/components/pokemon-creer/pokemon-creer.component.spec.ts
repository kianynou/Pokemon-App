import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCreerComponent } from './pokemon-creer.component';

describe('PokemonCreerComponent', () => {
  let component: PokemonCreerComponent;
  let fixture: ComponentFixture<PokemonCreerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonCreerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
