import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  constructor(private r:ActivatedRoute,private ser:UserserviceService,private rr:Router) { }

  Id=0;
getdata:any={
  username:'',
  firstname:'',
  lastname:'',
  email:'',
  mobilenumber:''

}

updatedata:any={
  id:'',
 firstname:'',
  lastname:'',
  email:'',
  mobilenumber:''
}
  ngOnInit(): void {
    this.Id=this.r.snapshot.params.id;
    this.ser.getdata(this.Id).subscribe((data)=>{
      this.getdata=data;
      this.updatedata.firstname=this.getdata.firstname;
      this.updatedata.lastname=this.getdata.lastname;
      this.updatedata.email=this.getdata.email;
      this.updatedata.mobilenumber=this.getdata.mobilenumber;
      this.updatedata.id=this.getdata.id;
    })
  }

  formSubmit()
  {
    this.ser.update(this.updatedata).subscribe((data)=>{
      this.rr.navigate(['/admin']);
      Swal.fire("sucess !!","updated","success");
    },
    (error)=>{
      Swal.fire("Error !!","not updated",'error');
    })
  }
}





