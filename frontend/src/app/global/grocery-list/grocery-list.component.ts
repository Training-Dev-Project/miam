import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DataManagementService} from 'src/app/services/data-management.service';
import {GroceryList} from "../../models/grocery-list";
import {Ingredient} from "../../models/ingredient";
import {IngredientServiceService} from "../../ingredient/ingredient-service.service";
import {NotificationComponent} from "../notification/notification.component";
import {Entity} from "../../types";
import {Recipe} from "../../models/recipe";
import {jsPDF} from "jspdf";
import html2canvas from "html2canvas";





@Component({
    selector: 'app-grocery-list',
    templateUrl: './grocery-list.component.html',
    styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {

    @Input() grocery!: GroceryList;
    icons = icons;
    computedGroceryList: Map<string, number> = new Map();
    memoryIngredients: Map<string, Ingredient> = new Map();

    constructor(
        private datas: DataManagementService,
        private modalService: NgbModal,
        private ingredientService: IngredientServiceService
    ) {
    }

    ngOnInit(): void {
        this.grocery = this.datas.getAll();

    }

    @ViewChild('content')
    content!: ElementRef;

    delete(element: Entity, type: string) {

        if (confirm("Confirmez-vous la suppression?")) {
            this.datas.delete(element, type);
        }
        /*
     const modal=this.modalService.open(NotificationComponent);
     modal.componentInstance.name= element.name;
     modal.componentInstance.message= MessageError.CONFIRM_MESSAGE
     modal.result.then((value)=>{
        if(value=='confirm'){
            this.datas.delete(element, type);
        }
     }).catch(e =>{});
     */

    }

    update(element: Entity, type: string, increment?: boolean) {
        try {
            this.datas.update(element, type, increment);
        } catch (e) {
            const modal = this.modalService.open(NotificationComponent);
            modal.componentInstance.name = element.name;
            modal.componentInstance.message = e.messageLog();
            modal.result.then((value) => {
                if (value == 'confirm') {
                    this.datas.delete(element, type);
                }
            })
        }
    }

    clearCache() {
        this.grocery.ingredients = [];
        this.grocery.dishes = [];
        localStorage.clear();
        this.grocery = this.datas.getAll();
    }




    addIngredientToComputedGroceryList(name: string, quantity: number) {
        if (this.computedGroceryList.get(name)) {
            this.computedGroceryList.set(name, (this.computedGroceryList.get(name) || 0) + quantity)
        } else {
            this.computedGroceryList.set(name, quantity)
        }
    }

    generateComputedGroceryList() {
        this.computedGroceryList.clear()
        this.grocery.ingredients.forEach(listIngredient => this.addIngredientToComputedGroceryList(listIngredient.ingredient.name, listIngredient.quantity))
        this.grocery.dishes.forEach(dish => this.addDishToComputedGroceryList(dish.recipe, dish.quantity))

    }

    addDishToComputedGroceryList(recipe: Recipe, quantity: number) {
        let ratio = quantity / recipe.peopleNumber
        for (const ingredientId in recipe.ingredients) {
            const memoryIngredient = this.memoryIngredients.get(ingredientId)
            if (memoryIngredient) {
                this.addIngredientToComputedGroceryList(memoryIngredient.name, recipe.ingredients[ingredientId] * ratio)
            } else {
                this.ingredientService.onGetIngredientById(ingredientId).subscribe(dbIngredient => {
                    this.memoryIngredients.set(ingredientId, dbIngredient)
                    this.addIngredientToComputedGroceryList(dbIngredient.name, recipe.ingredients[ingredientId] * ratio)
                });
            }
        }
    }

    public export(): void {
        html2canvas(this.content.nativeElement).then(canvas => {
            let fileWidth = 208;
            let fileHeight = canvas.height * fileWidth / canvas.width;
            const FILEURI = canvas.toDataURL('image/png')
            let PDF = new jsPDF('p', 'mm', 'a4');
            PDF.text("Ma liste de courses",70,10)
            let position = 30;
            PDF.addImage(FILEURI, 'PNG', 15, position, fileWidth/2, fileHeight/2)
            PDF.save('listeCourses.pdf');
        });

    }
}