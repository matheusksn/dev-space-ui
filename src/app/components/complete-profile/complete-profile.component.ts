
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss']
})
export class CompleteProfileComponent {
  user = {
    // campos adicionais aqui
  };

  constructor(private userService: UserService) { }

  completeProfile() {
    this.userService.completeProfile(this.user).subscribe(
      data => {
        console.log('Perfil completo:', data);
      },
      error => {
        console.log('Erro:', error);
      }
    );
  }
}
