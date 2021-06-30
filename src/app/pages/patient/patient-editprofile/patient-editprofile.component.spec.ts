import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditprofileComponent } from './patient-editprofile.component';

describe('PatientEditprofileComponent', () => {
  let component: PatientEditprofileComponent;
  let fixture: ComponentFixture<PatientEditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
