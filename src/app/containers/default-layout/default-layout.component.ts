import {Component} from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { navItems } from '../../_nav';
import decode from 'jwt-decode';

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
          if(this.loggedIn){
            this.kc_service.getToken().then(res => {
              const tokenPayload = decode(res);
              const givenName = tokenPayload["given_name"] ? tokenPayload["given_name"] : '';
              const familyName = tokenPayload["family_name"] ? tokenPayload["family_name"] : ''; 
              this.userName =  givenName + " " + familyName;
            });
          }else{
            this.userName = this.kc_service.getUsername();
          }
      })
      .catch( reason => console.log( reason ) );
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.kc_service.logout();
  }

}
