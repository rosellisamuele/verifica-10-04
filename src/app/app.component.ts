import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegisterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appRoselli';

  signUpOption : boolean = false;
  loginOption : boolean = true;

  popSignUpForm() : void {
    this.signUpOption = true;
    this.loginOption = false;
  }

  popLoginForm() : void {
    this.loginOption = true;
    this.signUpOption = false;
  }
}
