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
      href: '',
      title: 'Ajouter une recette',
      description: '',
      uri: 'ingredients/create-ingredient',
      buttonText: 'Ajouter'
  },
  {
    href: '',
    title: 'Liste d\'ingrédients',
    description: '',
    uri: 'ingredients/list-ingredients',
    buttonText: 'Voir liste'
}
,
  {
    href: '',
    title: 'Créer un ingrédient',
    description: '',
    uri: 'ingredients/create-ingredient',
    buttonText: 'Créer'
}
,
  {
    href: '',
    title: 'Mon compte',
    description: '',
    uri: '',
    buttonText: 'Gérer'
}
,
  {
    href: '',
    title: 'Menus existants',
    description: '',
    uri: '',
    buttonText: 'Voir'
}
] 

  ngOnInit(): void {
  }

}
