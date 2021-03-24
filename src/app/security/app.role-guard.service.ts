import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { KeycloakService } from "keycloak-angular";
import decode from 'jwt-decode';
import { AuthGuardService } from "./app.auth-guard.service";

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(
    private auth: AuthGuardService,
    private kc_service: KeycloakService, 
    public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    if(this.kc_service.isLoggedIn()) {
      return this.kc_service.getUserRoles().includes(expectedRole)
    }
    this.router.navigate(['']);
    return false;
  }
}