import { Component, Input, TemplateRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent{

  @Input()
  bodyTemplate!: TemplateRef<any>;
  @Input()
  name = ''
  constructor(public activeModal: NgbActiveModal) {}
}
