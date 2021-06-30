import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieDoctorComponent } from './vie-doctor.component';

describe('VieDoctorComponent', () => {
  let component: VieDoctorComponent;
  let fixture: ComponentFixture<VieDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
