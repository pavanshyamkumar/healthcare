import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { UserserviceService } from 'src/app/service/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-edit-profile',
  templateUrl: './doctor-edit-profile.component.html',
  styleUrls: ['./doctor-edit-profile.component.css']
})
export class DoctorEditProfileComponent implements OnInit {

  constructor(private ser:UserserviceService,private lodin:LoginService) { }
  updatedata:any={
    name:'',
    firstname:'',
    lastname:'',
    sex:'',
    age:'',
    mobilenumber:'',
    degignation:'',
    decpription:'',
    qualification:'',
    experience:'',
    department:'',
    locality:''
  }
  deg:any=[
    {value:'Cardiologist',viewValue:'Cardiologist'},
    {value:'ENT specialist',viewValue:'ENT specialist'},
    {value:' Gynaecologist',viewValue:' Gynaecologist'},
    {value:'Orthopaedic surgeon',viewValue:'Orthopaedic surgeon'},
    {value:'Paediatrician',viewValue:'Paediatrician'},
    {value:'Psychiatrists',viewValue:'Psychiatrists'},
    {value:'Nephrologist',viewValue:'Nephrologist'},
    {value:'Radiologist',viewValue:'Radiologist'},
    {value:'Pulmonologist',viewValue:'Pulmonologist'},
    {value:'Endocrinologist',viewValue:'Endocrinologist'},
    {value:'Cardiothoracic surgeon',viewValue:'Cardiothoracic surgeon'},
    {value:'Neurologist',viewValue:'Neurologist'},
  
  ]
  cue:any={}
  
  ngOnInit(): void {
    this.cue=this.lodin.getuser()
    this.ser.getdocidid(this.cue.id).subscribe((data)=>{
      this.updatedata=data
    })

  }

  formSubmit()
  {
    
    this.ser.update(this.updatedata).subscribe((data)=>{
      Swal.fire("Sucess !!","Successfully Updated",'success');
    })
  }

}
