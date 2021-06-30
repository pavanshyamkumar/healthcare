import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/service/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {


  constructor(private use:UserserviceService, private kk:MatSnackBar) { }
  getdata:any={
    email:'',
    password:'',
    username:''
  }
  hide = true;

  ngOnInit(): void {
  }
  submit(){
    if((this.getdata.username=='' || this.getdata.username.trim()=='') && 
    (this.getdata.password=='' || this.getdata.password.trim()=='') &&
    (this.getdata.email=='' || this.getdata.email.trim()=='')){
      this.kk.open("Below Fields are Mandatory","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    } 
    else if(this.getdata.username=='' || this.getdata.username.trim()==''){
      this.kk.open("EmailId Field Can't Be Empty","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else if(this.getdata.password=='' || this.getdata.password.trim()==''){
      this.kk.open("Password Field Can't Be Empty","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else if(this.getdata.email=='' || this.getdata.email.trim()==''){
      this.kk.open("UserName Fiels Can't Be Empty","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else{
    this.use.createpat(this.getdata).subscribe((data)=>{
      Swal.fire("Sucess..!!","Patient Added Successfully",'success');
      this.getdata.username='';
      this.getdata.email='';
      this.getdata.password='';
    },(error)=>{
      console.log("error");
      Swal.fire("Oops..!!","An Error Occured",'error');
    });
  }
 }
  
  

}
