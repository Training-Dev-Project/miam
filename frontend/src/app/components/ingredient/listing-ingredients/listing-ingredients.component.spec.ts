import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingIngredientsComponent } from './listing-ingredients.component';

describe('ListingIngredientsComponent', () => {
  let component: ListingIngredientsComponent;
  let fixture: ComponentFixture<ListingIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingIngredientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
