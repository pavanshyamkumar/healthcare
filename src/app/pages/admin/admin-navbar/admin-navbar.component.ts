import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import { AddpatientComponent } from '../addpatient/addpatient.component';


@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})


export class AdminNavbarComponent implements OnInit{
  constructor(public login:LoginService, private r:Router,private dia:MatDialog) { }
  getdata:any={
     username:''
  }
  
  ngOnInit():void {
    this.getdata=this.login.currentuser().subscribe((data)=>{
      this.getdata=data;
      console.log(data);
    },
    (error)=>{
      console.log("error");
    });

  }
 
  logout()
  {
    this.login.islogout()
    this.r.navigate(['login']);

  }

  open()
  {
    this.dia.open(AddDoctorComponent)
  }
  openpat()
  {
    this.dia.open(AddpatientComponent);
  }
  
  
 

 
}


