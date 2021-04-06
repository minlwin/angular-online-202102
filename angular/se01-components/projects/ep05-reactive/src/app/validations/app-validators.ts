import { AbstractControl, ValidationErrors } from "@angular/forms";

export class AppValidators {

    static phone(control: AbstractControl): ValidationErrors | null {

        const regx = new RegExp("^09([ -]\\d{3}){3}$")

        if (!regx.test(control.value)) {
            return {
                phone: "Invalid Phone Number"
            }
        }

        return null
    }
}