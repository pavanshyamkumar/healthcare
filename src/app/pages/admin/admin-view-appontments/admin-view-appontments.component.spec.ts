import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAppontmentsComponent } from './admin-view-appontments.component';

describe('AdminViewAppontmentsComponent', () => {
  let component: AdminViewAppontmentsComponent;
  let fixture: ComponentFixture<AdminViewAppontmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewAppontmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAppontmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
