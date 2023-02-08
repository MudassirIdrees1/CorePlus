import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntypedFormBuilder, Validators, UntypedFormGroup, FormControl } from '@angular/forms';
import { Appointment } from '../models/Appointment';

@Component({
  selector: 'app-appointment-detail-popup',
  templateUrl: './appointment-detail-popup.component.html',
  styleUrls: ['./appointment-detail-popup.component.scss']
})
export class AppointmentDetailPopupComponent {

  public itemForm!: UntypedFormGroup;
  public cmpList: Appointment[] = [];
  public UserInfo: any;
  IsDisable : boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: any,
    public dialogRef: MatDialogRef<AppointmentDetailPopupComponent>,
    private fb: UntypedFormBuilder
  ) { }

  ngOnInit() {
    
    this.buildItemForm(this.data.payload)
    debugger
    var res = this.itemForm;
  }


  buildItemForm(item : any) {
debugger
    this.itemForm = this.fb.group({
      id  : [item.id    || 0],
      practitioner_id  : [item.practitioner_id    || 0],

      date        : [item.date        || null],
      client_name : [item.client_name || ''],
      duration    : [item.duration    || 0],

      cost    : [item.cost    || 0],
      revenue : [item.revenue || 0],

      appointment_type: [item.appointment_type|| ''],
      
    })
  }

  submit() {
    //this.dialogRef.close(this.itemForm.value)
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) 
  {
    if (event.keyCode === 27) {
      this.dialogRef.close(false);
    }
  }
}


