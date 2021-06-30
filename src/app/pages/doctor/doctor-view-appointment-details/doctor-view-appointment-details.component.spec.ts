import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewAppointmentDetailsComponent } from './doctor-view-appointment-details.component';

describe('DoctorViewAppointmentDetailsComponent', () => {
  let component: DoctorViewAppointmentDetailsComponent;
  let fixture: ComponentFixture<DoctorViewAppointmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorViewAppointmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorViewAppointmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
