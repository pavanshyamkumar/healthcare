import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { UserserviceService } from 'src/app/service/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-editprofile',
  templateUrl: './patient-editprofile.component.html',
  styleUrls: ['./patient-editprofile.component.css']
})
export class PatientEditprofileComponent implements OnInit {
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
  constructor(private lo:LoginService, private ser:UserserviceService,private r:Router) { }

  ngOnInit(): void {
    this.lo.currentuser().subscribe((data)=>{
      this.getdata=data;
      this.updatedata.firstname=this.getdata.firstname;
      this.updatedata.lastname=this.getdata.lastname;
      this.updatedata.email=this.getdata.email;
      this.updatedata.mobilenumber=this.getdata.mobilenumber;
      this.updatedata.id=this.getdata.id;
    },
    (error)=>{
      console.log("error");
    })
  }
  formSubmit()
  {
    this.ser.updateprofile(this.updatedata).subscribe((data)=>{
      this.r.navigate(['/patient']);
      Swal.fire("sucess !!","updated","success");
    },
    (error)=>{
      Swal.fire("Error !!","not updated",'error');
    })
  }

}
