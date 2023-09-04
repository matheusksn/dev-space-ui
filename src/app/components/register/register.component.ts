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
    password: '',
    cpfCnpj: '',
    phone: '',
  };

  ngOnInit() {
    console.log("vasco")
  }

  constructor(private userService: UserService) { }

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

