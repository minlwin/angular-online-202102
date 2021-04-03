import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[phone]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true }
  ]
})
export class PhoneValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!(new RegExp("^09\\d([- ' ']\\d{4}){2}")).test(control.value)) {
      return { phone: true }
    }
    return null
  }

}
