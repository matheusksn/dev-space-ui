import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  }

  constructor(private userService: UserService,
    private snackBar: MatSnackBar ) { }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  register() {
    this.userService.register(this.user).subscribe(
      data => {
        console.log('Usuário registrado:', data);
        this.snackBar.open('Cadastro concluído com sucesso!', 'Fechar', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
      },
      error => {
        console.log('Erro:', error);
        this.snackBar.open('Por favor, verifique os dados e tente novamente.', 'Fechar', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }

}

