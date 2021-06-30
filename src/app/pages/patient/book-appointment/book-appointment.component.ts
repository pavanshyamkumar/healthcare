import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment.service';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  constructor(private r: ActivatedRoute, private ser: AppointmentService, private snack: MatSnackBar, private log: LoginService) { }
  k: boolean = false;
  getdata: any = {
    date: '',
    doctor: {
      did: ''
    }

  }
  appdata: any = [
  ]


  saveappdata: any = {
    doctor: {
      did: ''
    },
    patient: {
      pid: ''
    },
    name: '',
    age: '',
    weigth: '',
    sex: '',
    problem: '',
    decription: '',
    precription: '',
    date: '',
    slot1: '',
    slot2: '',
    slot3: '',
    slot4: '',

  }

  slots: any = {
    slot: ''
  }

  s1 = 0;
  s2 = 0;
  s3 = 0;
  s4 = 0;


  currentuser: any = {}

  dId = 0;
  ngOnInit(): void {

    this.dId = this.r.snapshot.params.did;
    this.getdata.doctor['did'] = this.dId;
    this.saveappdata.doctor['did'] = this.dId

    this.log.currentuser().subscribe((data) => {
      this.currentuser = data;
      this.saveappdata.patient['pid'] = this.currentuser.id;
    })


  }

  check() {
    if (this.getdata.date == '') {
      this.k = false;
      this.snack.open("Please Select the Date", "ok", { duration: 3000, verticalPosition: 'top', horizontalPosition: 'center' })
    }
    else if (this.getdata.doctor.did == '') {
      this.k = false;
      this.snack.open("Something Went Wrong", "ok", { duration: 3000, verticalPosition: 'top', horizontalPosition: 'center' })
    }
    else {



      this.ser.check(this.getdata).subscribe((data) => {
        this.slots.slot = '';
        this.saveappdata.date = this.getdata.date;
        this.appdata = data;
        this.k = true;
        this.s1 = 0;
        this.s2 = 0;
        this.s3 = 0;
        this.s4 = 0;
        for (let i = 0; i < this.appdata.length; i++) {
          if (this.appdata[i].slot1) {
            this.s1 = 1

          }
          if (this.appdata[i].slot2) {
            this.s2 = 1;

          }
          if (this.appdata[i].slot3) {
            this.s3 = 1

          }
          if (this.appdata[i].slot4) {
            this.s4 = 1

          }
        }

        console.log(this.s1, this.s2, this.s3, this.s4);
      },
        (error) => {
          Swal.fire("Error!!", "error occur", 'error');
        })
    }
  }


  submit() {
    if (this.slots.slot == '' || this.slots.slot.trim() == '') {
      this.snack.open("Please select the slots !!", "ok", { duration: 3000, verticalPosition: 'top', horizontalPosition: 'center' })
    }
    else if (this.saveappdata.name == '' || this.saveappdata.name.trim() == '') {
      this.snack.open("Name is Required !!", "ok", { duration: 3000, verticalPosition: 'top', horizontalPosition: 'center' })
    }
    else if (this.saveappdata.age == '' || this.saveappdata.age.trim() == '') {
      this.snack.open("Age is Required !!", "ok", { duration: 3000, verticalPosition: 'top', horizontalPosition: 'center' })
    }
    else if (this.saveappdata.sex == '' || this.saveappdata.sex.trim() == '') {
      this.snack.open("Gender is Required !!", "ok", { duration: 3000, verticalPosition: 'top', horizontalPosition: 'center' })
    }
    else if (this.saveappdata.problem == '' || this.saveappdata.problem.trim() == '') {
      this.snack.open("Problem is Required !!", "ok", { duration: 3000, verticalPosition: 'top', horizontalPosition: 'center' })
    }
    else if (this.saveappdata.decription == '') {
      this.snack.open("phone number is Required !!", "ok", { duration: 3000, verticalPosition: 'top', horizontalPosition: 'center' })
    }
    else if (this.saveappdata.weight == '' || this.saveappdata.weight.trim() == '') {
      this.snack.open("Email is Required !!", "ok", { duration: 3000, verticalPosition: 'top', horizontalPosition: 'center' })
    }
    else {
      if (this.slots.slot == "slot1") {
        this.saveappdata.slot1 = true;
      }
      else if (this.slots.slot == "slot2") {
        this.saveappdata.slot2 = true;
      }
      else if (this.slots.slot == "slot3") {
        this.saveappdata.slot3 = true;
      }
      else if (this.slots.slot == "slot4") {
        this.saveappdata.slot4 = true;
      }

      this.ser.saveappotintment(this.saveappdata).subscribe((data) => {
        Swal.fire("sucess", "appointment is booked", 'success');
        this.saveappdata.name= '',
        this.saveappdata.age= '',
        this.saveappdata.weigth= '',
        this.saveappdata.sex= '',
        this.saveappdata.problem= '',
        this.saveappdata.decription= '',
        this.saveappdata.precription= '',
        this.saveappdata.date= '',
        this.saveappdata.slot1= '',
        this.saveappdata.slot2= '',
        this.saveappdata.slot3= '',
        this.saveappdata.slot4= '',
        this.slots.slot=''


      },
      (error)=>{
        Swal.fire("Opps !!","something went wrong ",'error')
      })



    }





  }

}
