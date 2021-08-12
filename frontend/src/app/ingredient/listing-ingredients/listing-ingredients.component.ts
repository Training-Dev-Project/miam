import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientServiceService } from '../ingredient-service.service';
 
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogBoxComponent } from '../../global/dialog-box/dialog-box.component'; 
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';
import { AppContextService } from 'src/app/app.service';

@Component({
  selector: 'app-listing-ingredients',
  templateUrl: './listing-ingredients.component.html',
  styleUrls: ['./listing-ingredients.component.scss']
})
export class ListingIngredientsComponent implements OnInit {
  @ViewChild('ingredientForm')
  private ingredientForm!: TemplateRef<IngredientFormComponent>;
  
  ingredients: Array<Ingredient> = [];
  faAddressCard = faPlusCircle;

  constructor(private ingredientService: IngredientServiceService, private modalService: NgbModal, private appCtx: AppContextService ) {
  }

  ngOnInit(): void {
   this.ingredientService.onGetAllIngredients().subscribe(data => {
      this.ingredients = data;
      this.appCtx.setIngredientsObservable(this.ingredients);
   });
  }

  deleteById(id: number) {
  this.ingredientService.onDeleteById(id).subscribe(() => {
       this.ingredients = this.ingredients.filter(i => i.id !== id);
       this.appCtx.setIngredientsObservable(this.ingredients);
    }, error =>{});
  }
  openModalIngredient(){
    const modal=this.modalService.open(DialogBoxComponent);
    modal.componentInstance.name= "Ajouter un nouveau ingrédient"
    modal.componentInstance.bodyTemplate = this.ingredientForm; 
  }
}