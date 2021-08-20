import {Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective, FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'error-input',
  templateUrl: './error-input.component.html',
  styleUrls: ['./error-input.component.scss']
})
export class ErrorInputComponent{
  @Input()type!: string;
  @Input()control!: AbstractControlDirective | AbstractControl;
  
  get hasErrors(): boolean | null {
    return this.control &&
            this.control.errors &&
            (this.control.dirty || this.control.touched);
  }

  errorMessages(): string[] {
    let error:string[] = [];
    if(this.control && this.control.errors){
      error= Object.values(this.control.errors); 
    }
    return error;
  }

  public static inValid(form: FormGroup | NgForm) {
    Object.keys(form.controls).map((field) => {
        form.controls[field].markAsTouched();
        if (form.controls[field] instanceof FormControl) {
            form.controls[field].markAsTouched();
        }
        else if (form.controls[field] instanceof FormGroup) {
            const controlGroup = (form.controls[field]) as FormGroup;
            Object.keys(controlGroup['controls']).map((fieldGroup) => {
              controlGroup['controls'][fieldGroup].markAsTouched();
            });
        } 
        else if (form.controls[field] instanceof FormArray) {
            const controlArray = (form.controls[field]) as FormArray;
            Object.keys(controlArray['controls']).map((fieldArray) => {
              controlArray['controls'][Number(fieldArray)].markAsTouched();
            });
        }
    });
}

}
