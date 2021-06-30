import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';
import { UserserviceService } from 'src/app/service/userservice.service';
import Swal from 'sweetalert2';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';

@Component({
  selector: 'app-vie-doctor',
  templateUrl: './vie-doctor.component.html',
  styleUrls: ['./vie-doctor.component.css']
})
export class VieDoctorComponent implements OnInit {

  constructor(private ser:UserserviceService ,public login:LoginService,private di:MatDialog) { }
  showFiller = false;

  getalldata:any=[{
    authorities: [{authority:''}],

  }]
  ngOnInit(): void {
    this.ser.allusers().subscribe((data)=>{
      this.getalldata=data;
      console.log(data);
    
    },
    (error)=>{
      console.log("error");
    })
  }

  
  delete(id:any,authority:any){
    console.log(authority);
    Swal.fire({
      icon:'info',
      title: 'Do you want to Delete?',
      showCancelButton: true,
      confirmButtonText: `Yes`,
    }
    ).then((result) => {
      
      if (result.isConfirmed) {
        if(authority=="DOCTOR")
        {
          this.ser.detetedoctor(id).subscribe((data)=>{
            console.log("sucess");
          })
          this.ser.deleteuser(id).subscribe((data)=>{
            this.getalldata=this.getalldata.filter((allUsers:any)=>allUsers.id!=id)
            Swal.fire("sucess..!!",'Deleted Succesfully','success');
          });
          
        }
        else{
          this.ser.deleteuser(id).subscribe((data)=>{
            this.getalldata=this.getalldata.filter((allUsers:any)=>allUsers.id!=id)
            Swal.fire("sucess..!!",'Deleted Succesfully','success');
          });
        }
        
      } 
    })

   
  }

  opendialog(){
    this.di.open(AddDoctorComponent)
  }
 

}
