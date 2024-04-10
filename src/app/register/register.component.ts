import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRegisterService } from '../login-register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  data : any = null;
  msg : string = "";

  constructor(private registerService : LoginRegisterService){};

  register(form : any) : void {
    let userData = JSON.stringify(form.value);
    console.log(userData);

    this.registerService.register(userData).subscribe(remoteData => {
      this.data = remoteData;

      console.log(this.data);
      this.msg = "Signed up successfully!";
    })

  }
}
