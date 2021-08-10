import { TestBed } from '@angular/core/testing';

import { RecipeServiceService } from './recipe-service.service';

describe('recipeServiceService', () => {
  let service: RecipeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
