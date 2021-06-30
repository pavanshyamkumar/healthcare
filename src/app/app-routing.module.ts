import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './pages/admin/add-doctor/add-doctor.component';
import { AdminNavbarComponent } from './pages/admin/admin-navbar/admin-navbar.component';
import { AdminViewAppontmentsComponent } from './pages/admin/admin-view-appontments/admin-view-appontments.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { AdminviewdocComponent } from './pages/admin/adminviewdoc/adminviewdoc.component';
import { AdminviewpatComponent } from './pages/admin/adminviewpat/adminviewpat.component';
import { EditprogileComponent } from './pages/admin/editprogile/editprogile.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { UdatedocpatadminComponent } from './pages/admin/udatedocpatadmin/udatedocpatadmin.component';
import { UpdatePatientComponent } from './pages/admin/update-patient/update-patient.component';
import { VieDoctorComponent } from './pages/admin/vie-doctor/vie-doctor.component';
import { ViewpatientComponent } from './pages/admin/viewpatient/viewpatient.component';
import { DoctorEditProfileComponent } from './pages/doctor/doctor-edit-profile/doctor-edit-profile.component';
import { DoctorNavbarComponent } from './pages/doctor/doctor-navbar/doctor-navbar.component';
import { DoctorViewAppointmentDetailsComponent } from './pages/doctor/doctor-view-appointment-details/doctor-view-appointment-details.component';
import { DoctorViewAppointmentsComponent } from './pages/doctor/doctor-view-appointments/doctor-view-appointments.component';
import { DoctorhomeComponent } from './pages/doctor/doctorhome/doctorhome.component';
import { DoctorprofileComponent } from './pages/doctor/doctorprofile/doctorprofile.component';
import { LoginComponent } from './pages/login/login.component';
import { BookAppointmentComponent } from './pages/patient/book-appointment/book-appointment.component';
import { HomeComponent } from './pages/patient/home/home.component';
import { PatientEditprofileComponent } from './pages/patient/patient-editprofile/patient-editprofile.component';
import { PatientNavbarComponent } from './pages/patient/patient-navbar/patient-navbar.component';
import { ViewAppointmentsComponent } from './pages/patient/view-appointments/view-appointments.component';
import { ViewDoctorsComponent } from './pages/patient/view-doctors/view-doctors.component';
import { ViewProfileComponent } from './pages/patient/view-profile/view-profile.component';
import { PatienthomeComponent } from './pages/patienthome/patienthome.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewappiontmentDetailsComponent } from './pages/viewappiontment-details/viewappiontment-details.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AdminGuard } from './service/admin.guard';
import { DoctorGuard } from './service/doctor.guard';
import { PatientGuard } from './service/patient.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path:'patient',
    component:PatientNavbarComponent,
    canActivate:[PatientGuard],
    children:[
      {
        path:'edit-profile',
        component:PatientEditprofileComponent
      },
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'view-profile',
        component:ViewProfileComponent
      },
      {
        path:'view-doctors',
        component:ViewDoctorsComponent
      },
      {
        path:'book-appointment/:did',
        component:BookAppointmentComponent
      },
      {
        path:'view-appointments',
        component:ViewAppointmentsComponent
      },
      {
        path:'view-appointment-details/:apid',
        component:ViewappiontmentDetailsComponent
      }
    ]
  
  },
  {
    path:'admin',
    component:AdminNavbarComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:"alldoctors",
        component:VieDoctorComponent
      },
      {
        path:'add-doctor',
        component:AddDoctorComponent
      },
      {
        path:"viewdoc/:id",
        component:AdminviewdocComponent
      },
      {
        path:'viewpat/:id',
        component:AdminviewpatComponent

      },
      {
        path:"editprofile",
        component:EditprogileComponent
      },
      {
      path:"allpatient",
      component:ViewpatientComponent
      },
      {
        path:'',
        component:AdminhomeComponent
      },
      {
        path:"profile",
        component:ProfileComponent
      },
      {
        path:"update/:id",
        component:UdatedocpatadminComponent
      },
      {
        path:"update-patient/:id",
        component:UpdatePatientComponent
      },
      {
        path:'viewpatient-appointments/:id',
        component:AdminViewAppontmentsComponent
      },
     
     
    ]
    
  },
  {
    path:'doctor',
    component:DoctorNavbarComponent,
    canActivate:[DoctorGuard],
    children:[
      {
        path:'',
        component:DoctorhomeComponent
      },
      {
        path:'view-profile',
        component:DoctorprofileComponent
      },
      {
        path:'update-profile',
        component:DoctorEditProfileComponent
      },
      {
        path:'all-appointments',
        component:DoctorViewAppointmentsComponent
      },
      {
        path:'accepted-appointments',
        component:DoctorViewAppointmentDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
