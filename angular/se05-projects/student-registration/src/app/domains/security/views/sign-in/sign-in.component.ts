import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../../services/sign-in.service';

@Component({
  templateUrl: './sign-in.component.html',
  styles: [
  ]
})
export class SignInComponent {

  form: FormGroup

  constructor(builder: FormBuilder, private service: SignInService, private router: Router) {
    this.form = builder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  signIn(): void {
    this.service.signIn(this.form.value).subscribe(role => {
      switch (role.name) {
        case 'Admin':
        case 'Teacher':
          this.router.navigate(['/teacher'])
          break;
        case 'Student':
          this.router.navigate(['/student'])
          break;
        default:
          this.router.navigate(['/public/forbidden'])
          break;
      }
    })
  }

}
