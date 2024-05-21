import { Component } from '@angular/core';
import { BackEndApiService } from '../../API/BackEndApi.service';
import { login } from '../../class/Login';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailLogin:string;
  passwordLogin:string;
  constructor(private api:BackEndApiService,private route:Router){}
  Login(){
    console.log(this.emailLogin +" "+ this.passwordLogin);
    const credentials: login = {
      email: this.emailLogin,
      password: this.passwordLogin
    };
    this.api.login(credentials).subscribe(
      Response=>{
        const token=Response.token;
        localStorage.setItem('token',token);
        this.route.navigate(['/supplyChaine']);
        console.log("token : "+token);
      },error=>{
        console.log("error : "+error)
      }
    )
  }

}
