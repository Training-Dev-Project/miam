import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import * as icons from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent implements OnInit {
  @Input() menus:Menu[] = []
  icons = icons;

  constructor() { }

  ngOnInit(): void {
  }

}
