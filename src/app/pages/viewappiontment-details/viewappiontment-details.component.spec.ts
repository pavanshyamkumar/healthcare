import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappiontmentDetailsComponent } from './viewappiontment-details.component';

describe('ViewappiontmentDetailsComponent', () => {
  let component: ViewappiontmentDetailsComponent;
  let fixture: ComponentFixture<ViewappiontmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewappiontmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewappiontmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
