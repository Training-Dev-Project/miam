import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientServiceService } from '../ingredient-service.service';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit {
  ingredient : Ingredient = {name:""}; 
  
  constructor(private ingredientService: IngredientServiceService) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ingredientService.onSubmitIngredient(this.ingredient).subscribe( response => {console.log(response)})
    // console.log("Submit ingredient" ,  rep)
  }

}
