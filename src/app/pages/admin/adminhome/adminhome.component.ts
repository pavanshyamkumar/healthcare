import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentService } from 'src/app/service/appointment.service';
import { DoctorService } from 'src/app/service/doctor.service';
import { LoginService } from 'src/app/service/login.service';
import { UserserviceService } from 'src/app/service/userservice.service';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import { AddpatientComponent } from '../addpatient/addpatient.component';
import { AdminviewdocComponent } from '../adminviewdoc/adminviewdoc.component';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private dia:MatDialog, private doc:DoctorService,private app:AppointmentService) { }
 
doctors:any=[]
patients:any=[]
d=0;
p=0;
appointments:any=[]
a=0
  ngOnInit(): void {

this.doc.getalldoc().subscribe((data)=>{
  this.doctors=data;
  this.d=this.doctors.length
})

this.doc.getallpat().subscribe((data)=>{
  this.patients=data;
  this.p=this.patients.length
})
this.app.getall().subscribe((data)=>{
  console.log(data);
  this.appointments=data;
  this.a=this.appointments.length;
})
   

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
