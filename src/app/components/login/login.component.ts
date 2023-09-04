// login.component.ts
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private userService: UserService) { }

 login() { }
    /* this.userService.login(this.credentials).subscribe(
      data => {
        console.log('Login bem-sucedido:', data);
      },
      error => {
        console.log('Erro:', error);
      }
    );
  } */
}
