
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private use:UserserviceService, private kk:MatSnackBar,private rote:Router) { }
  deg:any=[
    {value:'Cardiologist',viewValue:'Cardiologist'},
    {value:'ENT specialist',viewValue:'ENT specialist'},
    {value:'Gynaecologist',viewValue:' Gynaecologist'},
    {value:'Orthopaedic surgeon',viewValue:'Orthopaedic surgeon'},
    {value:'Paediatrician',viewValue:'Paediatrician'},
    {value:'Psychiatrists',viewValue:'Psychiatrists'},
    {value:'Nephrologist',viewValue:'Nephrologist'},
    {value:'Radiologist',viewValue:'Radiologist'},
    {value:'Pulmonologist',viewValue:'Pulmonologist'},
    {value:'Endocrinologist',viewValue:'Endocrinologist'},
   
    {value:'Neurologist',viewValue:'Neurologist'},
  
  ]
  updatedata:any={
    email:'',
    password:'',
    username:'',
    firstname:'',
    lastname:'',
    sex:'',
    mobilenumber:'',
    designation:'',
    qualification:'',
    experience:'',
    department:'',
    locality:''
  }


  hide = true;
  getdata:any={
   
  }
  ngOnInit(): void {
     
  }
submit(){
  
  this.use.createdoc(this.updatedata).subscribe((data)=>{
    Swal.fire("Sucess..!!","Doctor Added Successfully you must update the doctor",'success');
    this.updatedata.username='';
    this.updatedata.email='';
    this.updatedata.password='';
    this.updatedata.firstname='',
    this.updatedata.lastname='',
    this.updatedata.sex='',
    this.updatedata.mobilenumber='',
    this.updatedata.designation='',
    this.updatedata.qualification='',
    this.updatedata.experience='',
    this.updatedata.department='',
    this.updatedata.locality=''
  },(error)=>{
    Swal.fire("Oops..!!","An Error Occured",'error');
  })
}


}
