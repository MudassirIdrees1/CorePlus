import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { AppointmentService } from './services/appointment.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

class CustomDateAdapter extends MomentDateAdapter {
  override getDayOfWeekNames(style: 'long' | 'short' | 'narrow') { return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; }
}

export const MATERIAL_DATEPICKER_FORMATS = {
  parse: {
    dateInput: 'DD/MMM/YYYY', 
  },
  display: {
    dateInput         : 'DD-MMM-YYYY',
    monthYearLabel    : 'MMM YYYY',
    dateA11yLabel     : 'DD/MMM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  imports: [
    //BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,

    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    TranslateModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,

    //ToastrModule.forRoot({ progressBar: true }),
    RouterModule.forRoot([
      ///{ path: '', component: AppointmentsListComponent },
      { path: 'appointment', component: AppointmentsListComponent },
    ])
    
  ],
  providers: [DatePipe, AppointmentService,

    {provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MATERIAL_DATEPICKER_FORMATS}
  

  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, NavMenuComponent, AppointmentsListComponent],
})
export class AppModule { }
