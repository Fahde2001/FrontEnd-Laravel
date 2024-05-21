import { Component } from '@angular/core';
import { BackEndApiService } from '../../API/BackEndApi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  nameRegister:string;
  emailRegister:string;
  passwordRegister:string;
  passwordConfirm:string;
  error:string="";
  constructor(private api:BackEndApiService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  Register(){
    this.error="";
    console.log("password : "+this.passwordRegister)
    console.log("password confirme : "+this.passwordConfirm)
    if(this.passwordConfirm!=this.passwordRegister){
      this.error="password is not match"
    }if(this.passwordRegister==null && this.nameRegister==null && this.emailRegister==null ){
      this.error="please enter all information "
    }else{
      console.log("name : "+this.nameRegister+"\nemail : "+this.emailRegister+"\npasssword : "+this.passwordRegister);
      this.api.register(this.nameRegister,this.emailRegister,this.passwordRegister).subscribe(
        Response=>{
          console.log("Response : "+Response);
          if (Response.status === 409) {
            console.log("Email already exists. Status updated.");
            this.error="Email already exists. Status updated."
          } else {
            console.log("User created successfully");
          }
        },error=>{
          console.log("error : "+error);
        }
      )
    }

  }

}
