import { TestBed } from '@angular/core/testing';

import { IngredientServiceService } from './ingredient-service.service';

describe('IngredientServiceService', () => {
  let service: IngredientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
