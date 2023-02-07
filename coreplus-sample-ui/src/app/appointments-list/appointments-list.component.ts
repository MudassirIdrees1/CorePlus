import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { Appointment } from '../models/Appointment';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent {

  loadingIndicator = true;
  columnMode = ColumnMode;
  sortType = SortType;

  public AppointmentList   : Array<Appointment> = [];
  public AppointmentListAll: Array<Appointment> = [];

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
        debugger
        this.AppointmentList = res.data;
        this.AppointmentListAll = res.data;
      }
      else {
        console.log("Error : " + res.statusCode + ":" + res.exceptionMessage);
      }
    });

  }

  applyFilter(val: any) {

  }

}
