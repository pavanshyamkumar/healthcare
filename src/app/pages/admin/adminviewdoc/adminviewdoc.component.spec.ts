import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewdocComponent } from './adminviewdoc.component';

describe('AdminviewdocComponent', () => {
  let component: AdminviewdocComponent;
  let fixture: ComponentFixture<AdminviewdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewdocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
