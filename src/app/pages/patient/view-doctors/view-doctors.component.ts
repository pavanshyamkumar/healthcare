import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent implements OnInit {

  constructor(private doc:DoctorService,public datepipe: DatePipe) { }

  getdata:any=[

  ]


   
  
    
   


  ngOnInit(): void {
   


    this.doc.getalldoc().subscribe((data)=>{
      this.getdata=data;
    },
    (error)=>{
      Swal.fire("Error!!","Somthing went wrong",'error');
    })
  }

}
