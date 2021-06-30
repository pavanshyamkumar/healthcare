import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {

  getdata:any=[
    {
      firstname:"shyam",
      lastname:"kumar",
      degignation:'ent'
    },
    {
      firstname:"shyam",
      lastname:"kumar",
      degignation:'ent'
    },
    {
      firstname:"shyam",
      lastname:"kumar",
      degignation:'ent'
    },
    {
      firstname:"shyam",
      lastname:"kumar",
      degignation:'ent'
    }

   

  ]

  appdata:any=[

  ]

 

  current:any={}
pi=0;

  constructor(private ser:AppointmentService,private login:LoginService) { }

  ngOnInit(): void {

    this.current=this.login.getuser()
    this.pi=this.current.id
    this.ser.getappointments(this.pi).subscribe((data)=>{
      this.appdata=data;
    })
 

    
  }

}
