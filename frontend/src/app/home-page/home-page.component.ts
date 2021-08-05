import { Component, OnInit } from '@angular/core';
import { faHamburger, faCocktail, faTv, faCarrot, faClipboardList, faCannabis, faAddressCard, faBookReader } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  title = 'miam-frontend';
  faHamburger = faHamburger;
  faCarrot = faCarrot;
  faTv = faTv;
  faCocktail = faCocktail;
  faCannabis = faCannabis;
  faAddressCard = faAddressCard;
  faClipboardList = faClipboardList;
  faBookReader = faBookReader;
  constructor() { }

  ngOnInit(): void {
  }

}
