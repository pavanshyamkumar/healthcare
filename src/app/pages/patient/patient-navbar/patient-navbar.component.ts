import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-patient-navbar',
  templateUrl: './patient-navbar.component.html',
  styleUrls: ['./patient-navbar.component.css']
})
export class PatientNavbarComponent implements OnInit {
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
