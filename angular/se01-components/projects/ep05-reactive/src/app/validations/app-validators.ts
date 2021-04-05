import { AbstractControl, ValidationErrors } from "@angular/forms";

export class AppValidators {

    static phone(control: AbstractControl): ValidationErrors | null {

        const regx = new RegExp('^0\\d{2}([- ]\\d{4}){2}')

        if (!regx.test(control.value)) {
            return {
                phone: "Invalid Phone Number"
            }
        }

        return null
    }
}