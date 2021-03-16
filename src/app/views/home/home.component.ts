import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  userName: string
  loggedIn: boolean
  
  constructor(private kc_service: KeycloakService) { }


  ngOnInit() {
    this.kc_service
            .isLoggedIn()
            .then( result => {
                this.loggedIn = result;
                this.userName = this.loggedIn
                    ? this.kc_service.getUsername()
                    : '';
            } )
            .catch( reason => console.log( reason ) );
  }

}