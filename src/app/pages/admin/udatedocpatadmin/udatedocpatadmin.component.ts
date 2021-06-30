import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-udatedocpatadmin',
  templateUrl: './udatedocpatadmin.component.html',
  styleUrls: ['./udatedocpatadmin.component.css']
})
export class UdatedocpatadminComponent implements OnInit {

  constructor(private r:ActivatedRoute,private ser:UserserviceService,private rr:Router) { }
Id=0;
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


  ngOnInit(): void {
    this.Id=this.r.snapshot.params.id;
    this.ser.getdocidid(this.Id).subscribe((data)=>{
      this.updatedata=data;
      
    })
  }

  formSubmit()
  {
    
    this.ser.update(this.updatedata).subscribe((data)=>{
      Swal.fire("Sucess !!","Successfully Updated",'success');
    })
  }
}
