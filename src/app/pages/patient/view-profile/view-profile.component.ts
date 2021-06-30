import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor(private ser:LoginService) { }
  get:any={
    email:'',
    username:'',
    authorities:[{
      authority:''
    }],
    mobilenumber:'',
    enabled:''

  }
  ngOnInit(): void {
    this.ser.currentuser().subscribe((data)=>{
      this.get=data;
    })
  }

}
