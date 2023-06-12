import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './auth/email-verification/email-verification.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'email-verification', component: EmailVerificationComponent},
  {path: 'buttons', component: ButtonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
