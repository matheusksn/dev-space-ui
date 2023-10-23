import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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

