import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityContext } from '../../services/security.context';
import { SignInService } from '../../services/sign-in.service';

@Component({
  templateUrl: './sign-in.component.html',
  styles: [
  ]
})
export class SignInComponent {

  form: FormGroup

  constructor(builder: FormBuilder, private service: SignInService, private security: SecurityContext) {
    this.form = builder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  signIn(): void {
    this.service.signIn(this.form.value).subscribe(role => {
      console.log(role)
      console.log(this.security.role)
      console.log(this.security.user)
    })
  }

}
