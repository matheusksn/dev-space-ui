import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, public dialog: MatDialog) {
    console.log(this.router.config);
  }
  title = 'DevSpace';
  isUserLoggedIn = false; 
}




