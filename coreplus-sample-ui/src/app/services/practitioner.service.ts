import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PractitionerService {


  constructor(public http: HttpClient, private datePipe: DatePipe,) {
  }

  GetAll() {
    let url = 'Practitioner';

    return this.http.get<any>(environment.apiURL + url)
      .pipe(map(data => { return data; }),
        catchError((error) => { return throwError(error.message); })
      );
  }

  GetSupervisor() {
    let url = 'supervisors';

    return this.http.get<any>(environment.apiURL + url)
      .pipe(map(data => { return data; }),
        catchError((error) => { return throwError(error.message); })
      );
  }

  GetBelow() {
    let url = 'belowSupervisors';

    return this.http.get<any>(environment.apiURL + url)
      .pipe(map(data => { return data; }),
        catchError((error) => { return throwError(error.message); })
      );
  }

}


