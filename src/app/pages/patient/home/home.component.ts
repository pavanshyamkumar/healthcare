import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private doc:DoctorService) { }

  getdata:any=[
    {
      sex:''
    }
    
  ]

  ngOnInit(): void {
    this.doc.getalldoc().subscribe((data)=>{
      this.getdata=data;
    },(error)=>{
      Swal.fire("Error!!","error occur",'error');
    })
    
  }

}
