import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { AppointmentDetailPopupComponent } from '../appointment-detail-popup/appointment-detail-popup.component';
import { Appointment } from '../models/Appointment';
import { AppointmentService } from '../services/appointment.service';
import { PractitionerService } from '../services/practitioner.service';

@Component({
  selector: 'app-practitioner-data',
  templateUrl: './practitioner-data.component.html',
  styleUrls: ['./practitioner-data.component.scss']
})
export class PractitionerDataComponent {

  public PractitionerList  : Array<any> = [];
  public AppointmentList   : Array<Appointment> = [];
  public AppointmentSummary: Array<Appointment> = [];

  loadingIndicator = true;
  columnMode = ColumnMode;
  sortType = SortType;

  public title : string = "";
  public PracId: number = 0;

  constructor(
    private fb        : UntypedFormBuilder,
    private actRoute  : ActivatedRoute,
    private router    : Router,
    private appSrv : AppointmentService,
    private prtSrv : PractitionerService,
    private dialog: MatDialog,
   
  ) {

  }

  ngOnInit(): void {

    this.PracId = this.actRoute.snapshot.params['id'];

    if(this.PracId > 0) { 
        this.getPractionerData(this.PracId); 
      }

    // this.PracId = 2;
    // this.getPractionerData(this.PracId);
  }


  ngAfterViewInit() {

    //List of Partitioners
    this.prtSrv.GetAll().subscribe(res => {
      if (res.length > 0) {
        this.PractitionerList = res;

        var name = this.PractitionerList.filter(o => o.id == this.PracId)[0].name;
        this.title = "Practitioner : " + name;
      }
      else {
        console.log("Error : " + res.statusCode + ":" + res.exceptionMessage);
      }
    });

    this.appSrv.GetGroupById(this.PracId, new Date(), new Date(), true).subscribe(res => {
      if (res.length > 0) {
        this.AppointmentSummary = res;
      }
    });
  }

  getPractionerData(Id : number){
      //this.appSrv.GetByID

      this.appSrv.GetByID(Id).subscribe(res=>{
        if (res.length>0) {
           this.AppointmentList = res;
        }
        else {
          console.log("Error : " + res.statusCode + ":" + res.exceptionMessage);
        }
      });
  }

  getNameByID(ID: any) {
    return this.PractitionerList.filter(o => o.id == ID)[0].name;
  }

  openPopUp(data: any = {}) {
    debugger
    let title = 'Appointment Details';
    let dialogRef: MatDialogRef<any> = this.dialog.open(AppointmentDetailPopupComponent, {
      width: '720px',
      disableClose: true,
      data: { title: title, payload: data }
    })
    dialogRef.afterClosed()
      .subscribe(res => {
        if (!res) {
          // If user press cancel
          return;
        }
        
        if (true) {

        }
        else {
          // this.loader.open('Updating Company');
          // this.compSrv.SaveData(res)

          //   .subscribe((resp: any) => {
          //     if (resp.isSuccess) {
                
          //       this.loader.close();
          //       this.updateItem(res.id, res);
          //       this.snack.open('Company Updated!', 'X', { duration: 4000 })
          //     }
          //     else {
          //       this.loader.close();
          //       this.snack.open('Error: ' + resp.statusCode + " : " + resp.message, 'X', 
          //                           { panelClass: 'error', verticalPosition: 'top', duration: 4000 })
          //     }
          //   })
        }
      }
      )
  }
}
