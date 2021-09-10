import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() name = ''
  @Input() message = ''
  constructor(public activeModal: NgbActiveModal) {}
  
  ngOnInit(): void {
  }

  confirm(){
    this.activeModal.close('confirm');
  }
  cancel(){
    this.activeModal.close('cancel');
  }
}
