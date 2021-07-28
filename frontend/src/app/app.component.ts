import { Component } from '@angular/core';
import { faHamburger, faCocktail, faTv, faCarrot, faClipboardList, faCannabis, faAddressCard, faBookReader } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'miam-frontend';
  faHamburger = faHamburger;
  faCarrot = faCarrot;
  faTv = faTv;
  faCocktail = faCocktail;
  faCannabis = faCannabis;
  faAddressCard = faAddressCard;
  faClipboardList = faClipboardList;
  faBookReader = faBookReader;
}
