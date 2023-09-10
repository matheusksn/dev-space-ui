import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'complete-profile', component: CompleteProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
