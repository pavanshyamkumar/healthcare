import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { authInterceptorProviders } from './service/auth.interceptor';
import { PatienthomeComponent } from './pages/patienthome/patienthome.component';
import { DoctorhomeComponent } from './pages/doctor/doctorhome/doctorhome.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminNavbarComponent } from './pages/admin/admin-navbar/admin-navbar.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { AdminviewdocComponent } from './pages/admin/adminviewdoc/adminviewdoc.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { EditprogileComponent } from './pages/admin/editprogile/editprogile.component';
import { AddDoctorComponent } from './pages/admin/add-doctor/add-doctor.component';
import { VieDoctorComponent } from './pages/admin/vie-doctor/vie-doctor.component';
import { AddpatientComponent } from './pages/admin/addpatient/addpatient.component';
import { ViewpatientComponent } from './pages/admin/viewpatient/viewpatient.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { UdatedocpatadminComponent } from './pages/admin/udatedocpatadmin/udatedocpatadmin.component';
import { EditProfileComponent } from './pages/admin/edit-profile/edit-profile.component';
import { HomeComponent } from './pages/patient/home/home.component';
import { PatientNavbarComponent } from './pages/patient/patient-navbar/patient-navbar.component';
import { UpdatePatientComponent } from './pages/admin/update-patient/update-patient.component';
import { PatientEditprofileComponent } from './pages/patient/patient-editprofile/patient-editprofile.component';
import { ViewProfileComponent } from './pages/patient/view-profile/view-profile.component';
import { ViewDoctorsComponent } from './pages/patient/view-doctors/view-doctors.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {DpDatePickerModule} from 'ng2-date-picker';
import { BookAppointmentComponent } from './pages/patient/book-appointment/book-appointment.component';
import { DatePipe } from '@angular/common';
import { ViewAppointmentsComponent } from './pages/patient/view-appointments/view-appointments.component';
import { AdminviewpatComponent } from './pages/admin/adminviewpat/adminviewpat.component';
import { AdminViewAppontmentsComponent } from './pages/admin/admin-view-appontments/admin-view-appontments.component';
import { ViewappiontmentDetailsComponent } from './pages/viewappiontment-details/viewappiontment-details.component';
import { DoctorViewAppointmentsComponent } from './pages/doctor/doctor-view-appointments/doctor-view-appointments.component';
import { DoctorprofileComponent } from './pages/doctor/doctorprofile/doctorprofile.component';
import { DoctorNavbarComponent } from './pages/doctor/doctor-navbar/doctor-navbar.component';
import { DoctorEditProfileComponent } from './pages/doctor/doctor-edit-profile/doctor-edit-profile.component';
import { DoctorViewAppointmentDetailsComponent } from './pages/doctor/doctor-view-appointment-details/doctor-view-appointment-details.component';
import { DoctorPrecriptionsComponent } from './pages/doctor/doctor-precriptions/doctor-precriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    PatienthomeComponent,
    DoctorhomeComponent,
    AdminhomeComponent,
    AdminNavbarComponent,
    AdminviewdocComponent,
    EditprogileComponent,
    AddDoctorComponent,
    VieDoctorComponent,

    AddpatientComponent,
    ViewpatientComponent,
    ProfileComponent,
    UdatedocpatadminComponent,
    EditProfileComponent,
    HomeComponent,
    PatientNavbarComponent,
    UpdatePatientComponent,
    PatientEditprofileComponent,
    ViewProfileComponent,
    ViewDoctorsComponent,
    BookAppointmentComponent,
    ViewAppointmentsComponent,
    AdminviewpatComponent,
    AdminViewAppontmentsComponent,
    ViewappiontmentDetailsComponent,
    DoctorViewAppointmentsComponent,
    DoctorprofileComponent,
    DoctorNavbarComponent,
    DoctorEditProfileComponent,
    DoctorViewAppointmentDetailsComponent,
    DoctorPrecriptionsComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DpDatePickerModule,
  

    
  ],
  providers: [authInterceptorProviders,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
