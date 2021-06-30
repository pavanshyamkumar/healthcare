import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-adminviewpat',
  templateUrl: './adminviewpat.component.html',
  styleUrls: ['./adminviewpat.component.css']
})
export class AdminviewpatComponent implements OnInit {

  constructor(private ro:ActivatedRoute,private ser:UserserviceService) { }

  Id=0;
  getd:any={
 

  }

  ngOnInit(): void {
    this.Id=this.ro.snapshot.params.id;
    this.ser.getdata(this.Id).subscribe((data)=>{
      this.getd=data;
    })
    
  }

}
