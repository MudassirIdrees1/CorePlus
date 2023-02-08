import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerDataComponent } from './practitioner-data.component';

describe('PractitionerDataComponent', () => {
  let component: PractitionerDataComponent;
  let fixture: ComponentFixture<PractitionerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractitionerDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
