import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { GroceryList } from 'src/app/models/grocery-list';
import { DataManagementService } from 'src/app/services/data-management.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit, AfterViewChecked{
  faShoppingCart = faShoppingCart;
  totalDishes = 0;
  groceryList!: GroceryList;

  constructor(
    private datas: DataManagementService, 
    private cdRef:ChangeDetectorRef,
    private router: Router 
    ) {
    this.groceryList = this.datas.getAll();
  }
 
  ngAfterViewChecked(): void {
    this.groceryList = this.datas.getAll();
    this.totalDishes =this.datas.countAll();
    this.cdRef.detectChanges();
   }

  ngOnInit(): void {}

  resetBagde($event: boolean){
   if($event){
    this.totalDishes = 0;
   }
  }

  navigateToURL(){
    this.router.navigate(['/grocery-list-operation']);
  }
}
