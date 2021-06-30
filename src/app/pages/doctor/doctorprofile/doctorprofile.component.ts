import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {

  constructor(private ser:UserserviceService,private lodin:LoginService) { }
  Id=0;
  cue:any={}
  get:any={}
  ngOnInit(): void {
    this.cue=this.lodin.getuser()
    this.Id=this.cue.id
    this.ser.getdocidid(this.cue.id).subscribe((data)=>{
      this.get=data
    })

  }

}
