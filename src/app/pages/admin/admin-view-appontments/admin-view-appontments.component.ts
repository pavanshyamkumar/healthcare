import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-view-appontments',
  templateUrl: './admin-view-appontments.component.html',
  styleUrls: ['./admin-view-appontments.component.css']
})
export class AdminViewAppontmentsComponent implements OnInit {

  constructor(private ser:AppointmentService,private ro:ActivatedRoute) { }
  Id=0
  appdata:any=[

  ]
  ngOnInit(): void {
    this.Id=this.ro.snapshot.params.id;
    this.ser.getappointments(this.Id).subscribe((data)=>{
      this.appdata=data;
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
            this.appdata=this.appdata.filter((appdata:any)=>appdata.apid!=apid)
            Swal.fire("sucess..!!",'Deleted Succesfully','success');
          });
        
       
       
      } 
    })

  }

}
