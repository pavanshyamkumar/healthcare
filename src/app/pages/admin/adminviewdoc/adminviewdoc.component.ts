import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-adminviewdoc',
  templateUrl: './adminviewdoc.component.html',
  styleUrls: ['./adminviewdoc.component.css']
})
export class AdminviewdocComponent implements OnInit {

  constructor(private ro:ActivatedRoute,private ser:UserserviceService) { }

  Id=0;
  getd:any={
 

  }

  ngOnInit(): void {
    this.Id=this.ro.snapshot.params.id;
    this.ser.getdocidid(this.Id).subscribe((data)=>{
      this.getd=data;
    },
    (error)=>{
      console.log("error");
    })

  }

}
