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

  title = 'dev-space-ui';
  isUserLoggedIn = false; 
  userName = ''; 


  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isUserLoggedIn = true; 
      this.userName = 'Nome do Usuário'; 
    });
  }

  logout(): void {
    this.isUserLoggedIn = false;
  }
}




