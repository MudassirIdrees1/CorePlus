import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  constructor(public http: HttpClient, private datePipe: DatePipe,) {
  }

  GetAllGroup() {
    let url = 'GetAllGroup/';

    return this.http.get<any>(environment.apiURL + url)
      .pipe(map(data => { return data; }),
        catchError((error) => { return throwError(error.message); })
      );
  }

  GetGroupById(PracId: number, FromDate: Date, ToDate: Date, IsAll: boolean): Observable<any> {

    var fromDate = this.datePipe.transform(FromDate, 'dd-MMM-yyyy');
    var toDate = this.datePipe.transform(ToDate, 'dd-MMM-yyyy');

    let url = 'GetGroupById/' + PracId + '/' + fromDate + '/' + toDate + '/' + IsAll;

    return this.http.get<any>(environment.apiURL + url)
      .pipe(map(data => { return data; }),
        catchError((error) => { return throwError(error.message); })
      );
  }

  GetByID(PracId: number): Observable<any> {
    let url = 'GetByID/' + PracId;

    return this.http.get<any>(environment.apiURL + url)
      .pipe(map(data => { return data; }),
        catchError((error) => { return throwError(error.message); })
      );
  }


}


