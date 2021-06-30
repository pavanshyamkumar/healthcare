import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-doctor-navbar',
  templateUrl: './doctor-navbar.component.html',
  styleUrls: ['./doctor-navbar.component.css']
})
export class DoctorNavbarComponent implements OnInit {
  getdata:any={
    username:''
 }
  constructor(public login:LoginService, private r:Router) { }

  ngOnInit(): void {
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

}
