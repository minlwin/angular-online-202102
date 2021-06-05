import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityContext } from 'src/app/domains/security/services/security.context';
import { SignOutService } from 'src/app/domains/security/services/sign-out.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styles: [
  ]
})
export class TeacherComponent {

  constructor(
    private service: SignOutService,
    private security: SecurityContext,
    private router: Router
  ) { }

  signOut() {
    this.service.logOut().subscribe(resp => {
      this.security.clear()
      this.router.navigate(['/public'])
    })
  }

  get admin() {
    return this.security.authority === 'Admin'
  }

}
