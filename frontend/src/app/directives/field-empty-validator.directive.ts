import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[fieldEmptyValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: FieldEmptyValidator, multi: true}]
})
export class FieldEmptyValidator implements Validator{
  @Input()
  public fieldEmptyValidator = 'Le champ ne peut etre vide';

  constructor() {}
/**
 * 
 * @param control 
 * @returns 
 */
  validate(control: AbstractControl): ValidationErrors | null {
    let verifyValue = !this.isEmptyInput(control.value);
    const message = {
      'emptyField': {
          'message': this.fieldEmptyValidator
      }
    };
    return verifyValue ? null : message;
  }
/**
 * 
 * @param value 
 * @returns 
 */
  isEmptyInput(value: string) {
    let contrValue = value;
    if (value && contrValue.length > 0) {
        value = contrValue.split(' ').join('');
    }
    return value === '' || value === null ? true : false;
  }

}
