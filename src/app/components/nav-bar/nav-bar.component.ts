import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <a [routerLink]="['/']">Početna</a>
    <a [routerLink]="['/list-contacts']">Kontakti</a>
    <a [routerLink]="['/add-new-contact']">Dodavanje kontakta</a>
    <div class="outer-outlet">
      <router-outlet></router-outlet>
    </div>
  `
})
export class NavBarComponent implements OnInit {
	
	title = 'app works!';
  constructor() { }

  ngOnInit() {
  }

}
