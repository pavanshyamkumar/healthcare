import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginsnack:MatSnackBar, private k:UserserviceService, private r:Router) {

   }
    hide = true;
  getdata:any={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    mobilenumber:'',
    
  }
  con:any={
    confirmpass:'',
  }
  ngOnInit(): void {
  }
  
  formSubmit()
  {
    
    if((this.getdata.username=='' || this.getdata.username.trim()=='') && (this.getdata.password=='' || this.getdata.password.trim()=='') 
    && (this.getdata.firstname=='' || this.getdata.firstname.trim()=='') && (this.getdata.lastname=='' || this.getdata.lastname.trim()=='')
    && (this.getdata.email=='' || this.getdata.email.trim()=='') && (this.getdata.mobilenumber=='' || this.getdata.mobilenumber.trim()=='')
    && (this.con.confirmpass=='' || this.con.confirmpass.trim()=='')){
      this.loginsnack.open("Below Fields are Mandatory","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else if(this.getdata.email=='' || this.getdata.email.trim()=='')
    {
      this.loginsnack.open("UserName is Required","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else if(this.getdata.firstname=='' || this.getdata.firstname.trim()==''){
      this.loginsnack.open("FirstName is Required","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else if(this.getdata.lasttname=='' || this.getdata.lastname.trim()==''){
      this.loginsnack.open("LastName is Required","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else if(this.getdata.mobilenumber=='' || this.getdata.mobilenumber.trim()==''){
      this.loginsnack.open("Mobile Number is Required","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else if(this.getdata.username=='' || this.getdata.username.trim()==''){
      this.loginsnack.open("Email is Required","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else if(this.getdata.password=='' || this.getdata.password.trim()==''){
      this.loginsnack.open("Password is Required","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else if(this.con.confirmpass=='' || this.con.confirmpass.trim()==''){
      this.loginsnack.open("Password is Required","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else if(this.getdata.password!=this.con.confirmpass){
      this.loginsnack.open("Password Mismatch","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else{
    this.k.createuser(this.getdata).subscribe((data)=>{
      Swal.fire("Success","Registered Successfully",'success');
      this.getdata.username='';
      this.getdata.password='';
      this.getdata.firstname='';
      this.getdata.lastname='';
      this.getdata.email='';
      this.getdata.mobilenumber='';
      this.con.confirmpass='';
      this.r.navigate(['login'])

    },
    (error)=>{
      Swal.fire("Oops!! Soory","An Error Occurred",'error')
    })
  }
  }
}
