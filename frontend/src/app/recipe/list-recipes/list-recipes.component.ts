import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppContextService } from 'src/app/app.service';
import { DialogBoxComponent } from 'src/app/global/dialog-box/dialog-box.component';
import { Recipe } from 'src/app/models/recipe';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.scss']
})
export class ListRecipesComponent implements OnInit {

  @ViewChild('recipeForm')
  private recipeForm!: TemplateRef<RecipeFormComponent>;

  recipes : Array<Recipe> = [];
  alertVisibility = false;
  currentDelete : string ="";
  faAddressCard = faPlusCircle;
  
  constructor(private recipeService: RecipeServiceService, private modalService: NgbModal, private appCtx: AppContextService) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(data => { 
      this.recipes = data;
      this.appCtx.setRecipesObservable(this.recipes);
    })
   //console.log(this.recipes)
  }

  deleteById(id: number, name: string) {
      this.recipeService.deleteById(id).subscribe(() => {
        this.recipes= this.recipes.filter(i => i.id !== id);
        this.currentDelete = name;
        this.alertVisibility = true;
        this.appCtx.setRecipesObservable(this.recipes);
      });
    }
  
  openModalRecipe(){
    const modal=this.modalService.open(DialogBoxComponent);
    modal.componentInstance.name= "Ajouter une nouvelle recette"
    modal.componentInstance.bodyTemplate = this.recipeForm; 
  }
}
