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
    title: 'Liste d\'ingrédients',
    description: 'Selection et verifier la liste de vos ingredients ..',
    uri: 'workflow-ingredients/list-ingredients',
    buttonText: 'Voir liste'
}
,
  {
    href: 'ingredient',
    title: 'Créer un ingrédient',
    description: 'Ajouter de nouvel ingrédient...',
    uri: 'workflow-ingredients/create-ingredient',
    buttonText: 'Créer'
},
{
  href: 'recipe',
  title: 'Ajouter une recette',
  description: 'Préparer vos recttes favoris...',
  uri: 'workflow-recipes/recipe',
  buttonText: 'Ajouter'
},
  {
    href: 'recipes',
    title: 'Liste des recettes',
    description: 'Lister et afficher toutes vos recttes déjà réalisées...',
    uri: 'workflow-recipes/list-recipes',
    buttonText: 'Voir'
}
,
  {
    href: 'vegan',
    title: 'Vegan? par ici',
    description: 'Vous avez une préférence pour de la nourriture Végan...',
    uri: '',
    buttonText: 'Gérer'
}
] 

  ngOnInit(): void {
  }

}
