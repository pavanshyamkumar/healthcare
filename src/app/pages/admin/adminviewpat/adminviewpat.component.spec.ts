import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewpatComponent } from './adminviewpat.component';

describe('AdminviewpatComponent', () => {
  let component: AdminviewpatComponent;
  let fixture: ComponentFixture<AdminviewpatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewpatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewpatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
