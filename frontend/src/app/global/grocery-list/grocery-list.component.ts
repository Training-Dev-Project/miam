import { Component, Input, OnInit, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataManagementService } from 'src/app/services/data-management.service';
import { Entity } from 'src/app/types';
import { MessageError } from 'src/app/utils/message-error';
import { GroceryList } from "../../models/grocery-list";
import { NotificationComponent } from '../notification/notification.component'; 

@Component({
    selector: 'app-grocery-list',
    templateUrl: './grocery-list.component.html',
    styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {
    
    @Input() grocery!: GroceryList;
    icons = icons;

    constructor(
        private datas: DataManagementService,
        private modalService: NgbModal,
        ) {
    }


    ngOnInit(): void {
        this.grocery = this.datas.getAll();
    }

    delete(element: Entity,  type: string){
     const modal=this.modalService.open(NotificationComponent);
     modal.componentInstance.name= element.name;
     modal.componentInstance.message= MessageError.CONFIRM_MESSAGE
     modal.result.then((value)=>{
        if(value=='confirm'){
            this.datas.delete(element, type);
        }
     }).catch(e =>{});
    }

    update(element: Entity, type: string, increment?: boolean){
        try{
            this.datas.update(element, type, increment);
        }
        catch(e){
            const modal=this.modalService.open(NotificationComponent);
            modal.componentInstance.name= element.name;
            modal.componentInstance.message= e.messageLog();
            modal.result.then((value) => {
               if(value=='confirm'){
                    this.datas.delete(element, type);
               }
            }).catch(e =>{});
        }
    }
    
    clearCache(){
        this.grocery.ingredients = [];
        this.grocery.dishes = [];
        localStorage.clear();
        this.grocery = this.datas.getAll();
    }
}
