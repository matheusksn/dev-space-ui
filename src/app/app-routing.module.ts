import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { AuthGuard } from './guards/auth.guard';
import { LabDashComponent } from './components/lab-dash/lab-dash.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'complete-profile', component: CompleteProfileComponent },
  { path: 'pomodoro', component: PomodoroComponent, canActivate: [AuthGuard]  },
  { path: 'labs', component: LabDashComponent, canActivate: [AuthGuard]  },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
