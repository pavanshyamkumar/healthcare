import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprogileComponent } from './editprogile.component';

describe('EditprogileComponent', () => {
  let component: EditprogileComponent;
  let fixture: ComponentFixture<EditprogileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprogileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprogileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
