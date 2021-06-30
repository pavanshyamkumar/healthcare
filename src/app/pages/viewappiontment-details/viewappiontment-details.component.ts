import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-viewappiontment-details',
  templateUrl: './viewappiontment-details.component.html',
  styleUrls: ['./viewappiontment-details.component.css']
})
export class ViewappiontmentDetailsComponent implements OnInit {

  constructor(private ser:AppointmentService,private r:ActivatedRoute) { }

  getdata:any={}
  Id=0
  ngOnInit(): void {
    this.Id=this.r.snapshot.params.apid
    this.ser.getbyid(this.Id).subscribe((data)=>{
      this.getdata=data;
    })
  }

}
