import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = {
    nome: '',
    email: '',
    username: '',
    password: '',
    cpfCnpj: '',
    phone: '',
  };
  showPassword = false; 

  ngOnInit() {
    console.log("vasco")
  }

  constructor(private userService: UserService) { }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  register() {
    this.userService.register(this.user).subscribe(
      data => {
        console.log('Usuário registrado:', data);
      },
      error => {
        console.log('Erro:', error);
      }
    );
  }

}

