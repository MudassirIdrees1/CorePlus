import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDetailPopupComponent } from './appointment-detail-popup.component';

describe('AppointmentDetailPopupComponent', () => {
  let component: AppointmentDetailPopupComponent;
  let fixture: ComponentFixture<AppointmentDetailPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentDetailPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
