import { Component, OnInit } from '@angular/core'; 
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menus: Menu[] =[
  {
    href: 'ingredients',
    title: 'Ingrédients',
    description: 'Ajouter ou Parcourir les ingrédients...',
    viewUri: 'workflow-ingredients/list-ingredients',
    viewButtonText: 'Voir liste',
    addUri:'workflow-ingredients/create-ingredient',
    addButtonText:"Ajouter un ingrédient"
}
,  {
    href: 'recipe',
    title: 'Recettes',
    description: 'Ajouter ou Parcourir nos recettes...',
    viewUri: 'workflow-recipes/list-recipes',
    viewButtonText: 'Voir liste',
    addUri:'workflow-recipes/recipe',
    addButtonText:"Créer"
}

] 

  ngOnInit(): void {
  }

}
