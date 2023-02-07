import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  constructor(public http: HttpClient, private datePipe: DatePipe,) {
  }


  GetAllGroup(): Observable<any> {
    let url = 'GetAllGroup/';
    return this.http.get<Appointment>(environment.apiURL + url);
  }

  GetGroupById(PracId: number, FromDate: Date, ToDate: Date, IsAll: boolean): Observable<any> {

    var fromDate = this.datePipe.transform(FromDate, 'dd-MMM-yyyy');
    var toDate = this.datePipe.transform(ToDate, 'dd-MMM-yyyy');

    let url = 'GetGroupById/' + PracId + '/' + fromDate + '/' + toDate + '/' + IsAll;

    return this.http.get<Appointment>(environment.apiURL + url);
  }

  GetByID(PracId: number): Observable<any> {
    let url = 'GetByID/' + PracId;
    return this.http.get<Appointment>(environment.apiURL + url);
  }


}


