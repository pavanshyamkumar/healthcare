import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdatedocpatadminComponent } from './udatedocpatadmin.component';

describe('UdatedocpatadminComponent', () => {
  let component: UdatedocpatadminComponent;
  let fixture: ComponentFixture<UdatedocpatadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdatedocpatadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdatedocpatadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
