import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-view-appointments',
  templateUrl: './doctor-view-appointments.component.html',
  styleUrls: ['./doctor-view-appointments.component.css']
})
export class DoctorViewAppointmentsComponent implements OnInit {

  constructor(private ser:AppointmentService,private log:LoginService) { }


  getdata:any=[]
  cur:any={}
  appobyid:any={}
  update:any={}

  kk:boolean=true
  ngOnInit(): void {
    this.cur=this.log.getuser()

    this.ser.getappointmentsofdoc(this.cur.id).subscribe((data)=>{
      this.getdata=data;
    })
  }

  accept(id:any)
  {
    
    this.ser.getbyid(id).subscribe((data)=>{
      this.appobyid=data
      this.appobyid.status=true
      this.ser.update(this.appobyid).subscribe((data)=>{
       this.kk=false;
        this.update=data;
      })
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
