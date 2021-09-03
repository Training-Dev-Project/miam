import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { GroceryList } from 'src/app/models/grocery-list';
import { DataManagementService } from 'src/app/services/data-management.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit, AfterViewChecked{
  faShoppingBag = faShoppingBag;
  totalDishes = 0;
  groceryList!: GroceryList;

  constructor(private datas: DataManagementService, private cdRef:ChangeDetectorRef) {
    this.groceryList = this.datas.getAll();
  }
 
  ngAfterViewChecked(): void {
    this.groceryList = this.datas.getAll();
    if(this.datas.countAll()){
       this.totalDishes =this.datas.countAll();
    }
    this.cdRef.detectChanges();
   }

  ngOnInit(): void {}

  resetBagde($event: boolean){
   if($event){
    this.totalDishes = 0;
   }
  }
}
