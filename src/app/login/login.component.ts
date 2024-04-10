import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRegisterService } from '../login-register.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService : LoginRegisterService){};

  data : any = null;
  msg : string = "";

  login(form : any) : void {
    let userData = JSON.stringify(form.value);

    this.loginService.login(userData).subscribe(remoteData => {
      this.data = remoteData;

      if(this.data.valid == true){
        this.msg = "Welcome!";
      }else{
        this.msg = "Wrong credentials";
      }
    });

    

    

  }
}
