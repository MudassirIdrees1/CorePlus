import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Appointment } from '../models/Appointment';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent {

  public AppointmentList   : Array<Appointment> = [];

  constructor(
    public datePipe: DatePipe, 
    private service : AppointmentService,
  ) 
  {}


  ngOnInit() {

  } 

  ngAfterViewInit() {
    this.service.GetAllGroup().subscribe((res: any) => {
      if (res.isSuccess) {
        this.AppointmentList = res.data;
      }
      else {
        console.log("Error : " + res.statusCode + ":" + res.exceptionMessage);
      }
    });

  }

}
