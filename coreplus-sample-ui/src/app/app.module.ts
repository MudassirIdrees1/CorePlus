import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { AppointmentService } from './services/appointment.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxDatatableModule,

    ToastrModule.forRoot({ progressBar: true }),
    RouterModule.forRoot([
      { path: '', component: AppointmentsListComponent },
      { path: 'appointment', component: AppointmentsListComponent },
      //{ path: 'dept', component: DepartmentComponent, canActivate:[AuthGuard]},
    ])
  ],
  providers: [DatePipe, AppointmentService],
  bootstrap: [AppComponent],
  declarations: [AppComponent, NavMenuComponent, AppointmentsListComponent],
})
export class AppModule { }
