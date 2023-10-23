import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    login: '',
    password: ''
  };

  constructor(private userService: UserService,
    private router: Router) { }

  login() {
    this.userService.login(this.credentials).subscribe(
      (response) => {
        this.router.navigate(['/home']); 
      },
      (error) => {
      }
    );
  }

}
