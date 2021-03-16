import {Component} from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  userName: string
  loggedIn: boolean

  constructor(private kc_service: KeycloakService) { }


  ngOnInit() {
    this.kc_service
      .isLoggedIn()
      .then( result => {
          this.loggedIn = result;
          this.userName = this.loggedIn
              ? this.kc_service.getUsername().toLocaleUpperCase()
              : '';
      } )
      .catch( reason => console.log( reason ) );
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.kc_service.logout();
  }

}
