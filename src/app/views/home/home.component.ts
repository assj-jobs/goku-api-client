import { Component } from '@angular/core';
@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  userName: string
  loggedIn: boolean
  
  constructor() { }
}