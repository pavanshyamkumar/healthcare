
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginsnack:MatSnackBar, private service:LoginService, private r:Router) { 
  }
  hide = true;
  logindata={
    username:'',
    password:''
  };

  ngOnInit(): void {
  }

  formSubmit(){
      
    if((this.logindata.username.trim()=='' || this.logindata.username=='') && (this.logindata.password.trim()=='' || this.logindata.password=='')){
      this.loginsnack.open("Below Fields are Mandatory","ok",{duration: 3000, verticalPosition: 'top', horizontalPosition:'center'})
    }
    else if(this.logindata.username.trim()=='' || this.logindata.username==''){
        this.loginsnack.open("Username is Mandatory","ok",{duration:3000, verticalPosition: 'top', horizontalPosition:'center'})
    }
    else if(this.logindata.password.trim()=='' || this.logindata.password==''){
      this.loginsnack.open("Password is Mandatory","ok",{duration: 3000, verticalPosition: 'top', horizontalPosition:'center'})
    }
    else{
      this.service.generate(this.logindata).subscribe((data:any)=>{
        this.service.loginuser(data.token);
        this.service.currentuser().subscribe((user)=>{
          this.service.setuser(user);
          if(this.service.getrole()=="PATIENT"){
            this.r.navigate(['patient'])
          }
          if(this.service.getrole()=='ADMIN'){
            this.r.navigate(['admin'])
          }
          if(this.service.getrole()=='DOCTOR'){
            this.r.navigate(['doctor'])
          }
        
        })
      },
      (error)=>{
        this.loginsnack.open("Inavlid Cridentials","ok",{duration:3000,verticalPosition:"top",horizontalPosition:"center"})
      }
      )
    }


      

  }


}
