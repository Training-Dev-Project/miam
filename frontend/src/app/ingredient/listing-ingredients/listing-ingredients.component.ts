import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientServiceService } from '../ingredient-service.service';
 
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogBoxComponent } from '../../global/dialog-box/dialog-box.component'; 
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';
import { AppContextService } from 'src/app/app.service';
import { MessageError } from 'src/app/utils/message-error';
import { DataManagementService } from 'src/app/services/data-management.service';

@Component({
  selector: 'app-listing-ingredients',
  templateUrl: './listing-ingredients.component.html',
  styleUrls: ['./listing-ingredients.component.scss']
})
export class ListingIngredientsComponent implements OnInit {
  @ViewChild('ingredientForm')private ingredientForm!: TemplateRef<IngredientFormComponent>;
  @ViewChild('addIngredientTemplate')private addIngredientTemplate!: TemplateRef<any>;
  @ViewChild('footerTemplate') private footerTemplate!: TemplateRef<any>;
  
  ingredients: Array<Ingredient> = [];
  currentIngredient!: Ingredient;
  faAddressCard = faPlusCircle;
  isUsed : boolean = false;
  messageError: string = ''; 
  quantity = 1;
  messageLog = '';

  constructor(
    private ingredientService: IngredientServiceService, 
    public modalService: NgbModal, 
    private appCtx: AppContextService,
    private datas: DataManagementService) 
    {
  }

  ngOnInit(): void {
   this.ingredientService.onGetAllIngredients().subscribe(data => {
      this.ingredients = data;
      this.appCtx.setIngredientsObservable(this.ingredients);
   });
  }

  deleteById(id: number, name: string) {
  this.ingredientService.onDeleteById(id).subscribe(() => {
      this.isUsed = false;
       this.ingredients = this.ingredients.filter(i => i.id !== id);
       this.appCtx.setIngredientsObservable(this.ingredients);
    }, error =>{ 
      if(error.error.message === "INGREDIENT_USED"){
        this.isUsed = true
        this.messageError = MessageError.INGREDIENT_USED(name)
      }
      
    });
  }

  addIngredient(ingredient:Ingredient){
    this.currentIngredient = ingredient;
    this.messageLog = '';
    const modal = this.modalService.open(DialogBoxComponent);
    modal.componentInstance.name = this.currentIngredient.name;
    modal.componentInstance.bodyTemplate = this.addIngredientTemplate;
    modal.componentInstance.footerTemplate= this.footerTemplate;
  }


  openModalIngredient(){
    const modal=this.modalService.open(DialogBoxComponent);
    modal.componentInstance.name= ""
    modal.componentInstance.bodyTemplate = this.ingredientForm; 
  }

  submit(){
    try{
      this.datas.create({ quantity: this.quantity, ingredient: this.currentIngredient}, 'ingredients');
      this.modalService.dismissAll();
    }
  catch(e){
    this.messageLog = e.messageLog();
  }
}

onGetSearchedIngredients(name: String) {
  this.ingredientService.onGetSearchedIngredients(name).subscribe(data => {
    this.ingredients = data;
    this.appCtx.setIngredientsObservable(this.ingredients);
  })
}
  }
