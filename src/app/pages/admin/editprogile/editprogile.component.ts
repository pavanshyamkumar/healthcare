import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { UserserviceService } from 'src/app/service/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editprogile',
  templateUrl: './editprogile.component.html',
  styleUrls: ['./editprogile.component.css']
})
export class EditprogileComponent implements OnInit {

  constructor(private lo:LoginService, private ser:UserserviceService,private r:Router) { }
  value = 'Clear me';
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
    this.ser.update(this.updatedata).subscribe((data)=>{
      this.r.navigate(['/admin']);
      Swal.fire("sucess !!","updated","success");
    },
    (error)=>{
      Swal.fire("Error !!","not updated",'error');
    })
  }



}
