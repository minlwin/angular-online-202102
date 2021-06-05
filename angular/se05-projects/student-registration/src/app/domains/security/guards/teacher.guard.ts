import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { SecurityContext } from '../services/security.context';

@Injectable({
  providedIn: 'root'
})
export class TeacherGuard implements CanActivate, CanActivateChild {

  constructor(private security: SecurityContext) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.security.canRoute('Admin', 'Teacher');
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.security.canRoute('Admin', 'Teacher');
  }


}
