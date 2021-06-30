import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-doctor-view-appointment-details',
  templateUrl: './doctor-view-appointment-details.component.html',
  styleUrls: ['./doctor-view-appointment-details.component.css']
})
export class DoctorViewAppointmentDetailsComponent implements OnInit {

  constructor(private ser:AppointmentService,private log:LoginService) { }

  getdata:any=[]
  cur:any={}

  ngOnInit(): void {
    this.cur=this.log.getuser()

    this.ser.getappointmentsofdoc(this.cur.id).subscribe((data)=>{
      this.getdata=data;
    })
  }

  del(apid:any)
  {

    Swal.fire({
      icon:'info',
      title: 'Do you want to Delete?',
      showCancelButton: true,
      confirmButtonText: `Yes`,
    }
    ).then((result) => {
      
      if (result.isConfirmed) {
       
        

          this.ser.del(apid).subscribe((data)=>{
            this.getdata=this.getdata.filter((getdata:any)=>getdata.apid!=apid)
            Swal.fire("sucess..!!",'Deleted Succesfully','success');
          });
        
       
       
      } 
    })

  }

  

}
