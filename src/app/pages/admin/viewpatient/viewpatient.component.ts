import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';
import { UserserviceService } from 'src/app/service/userservice.service';
import Swal from 'sweetalert2';
import { AddpatientComponent } from '../addpatient/addpatient.component';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent implements OnInit {

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

  
  delete(id:any,autho:any){
    Swal.fire({
      icon:'info',
      title: 'Do you want to Delete?',
      showCancelButton: true,
      confirmButtonText: `Yes`,
    }
    ).then((result) => {
      
      if (result.isConfirmed) {
        if(autho=="PATIENT")
        {
          this.ser.deletepat(id).subscribe((data)=>{
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
    this.di.open(AddpatientComponent)
  }
 

}
