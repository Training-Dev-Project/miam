import { Component, OnInit, Input } from '@angular/core';
import { IngredientServiceService } from '../ingredient-service.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  quantity = 0 ; 
  @Input() name : string = "";
  id : number = 0;
  
  constructor(
    private ingredientService: IngredientServiceService){}

  ngOnInit(): void {
  }

  onAddOne(){
    this.quantity += 1 ;
  }

  onRemoveOne(){
    if (this.quantity>0)
      this.quantity -= 1 ;
  }
}
