import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPrecriptionsComponent } from './doctor-precriptions.component';

describe('DoctorPrecriptionsComponent', () => {
  let component: DoctorPrecriptionsComponent;
  let fixture: ComponentFixture<DoctorPrecriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPrecriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPrecriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
