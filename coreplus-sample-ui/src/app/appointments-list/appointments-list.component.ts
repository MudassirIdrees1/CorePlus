import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { Appointment } from '../models/Appointment';
import { AppointmentService } from '../services/appointment.service';
import { PractitionerService } from '../services/practitioner.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent {

  loadingIndicator = true;
  columnMode = ColumnMode;
  sortType = SortType;


  form!: UntypedFormGroup;

  public PractitionerList  : Array<any> = [];
  public PractitionerListAll  : Array<any> = [];

  public AppointmentList   : Array<Appointment> = [];
  public AppointmentListAll: Array<Appointment> = [];

  constructor(
    public datePipe: DatePipe, 
    private service : AppointmentService,
    private prtSrv : PractitionerService,
    private fb     : UntypedFormBuilder,
  ) 
  {}


  ngOnInit() {
    this.CreateForm();

    this.form.get('fromDate')?.disable();
    this.form.get('toDate')?.disable();

    this.form.get('TypeId')?.disable();
    this.form.get('PracId')?.disable();
  } 

  CreateForm(id?: any) {

    this.form = this.fb.group({

      TypeId    : [id ? id.TypeId : 0],
      IsAllType : [id ? id.IsAllType : true],

      PracId    : [id ? id.PracId   : 0],
      IsAllPrac : [id ? id.IsAllPrac: true],

      fromDate  : [id ? id.fromDate  : ''],
      toDate    : [id ? id.toDate    : ''],
      IsAllDate : [id ? id.IsAllDate : true]
    
    });

  }

  ngAfterViewInit() {

    //List of Partitioners
    this.prtSrv.GetAll().subscribe(res=>{
      if (res.length>0) {
         this.PractitionerList = res;
         this.PractitionerListAll = res;
      }
      else {
        console.log("Error : " + res.statusCode + ":" + res.exceptionMessage);
      }
    });

    // this.service.GetAllGroup().subscribe(res=>{
    //   if (res.length>0) {
    //      this.AppointmentList = res;
    //      this.AppointmentListAll = res;
    //   }
    //   else {
    //     console.log("Error : " + res.statusCode + ":" + res.exceptionMessage);
    //   }
    // });

  }

  getGroupById(){
    debugger
    var res = this.form.value;

    if(res.PracId > 0){
      var frmDate = res.fromDate == null ? new Date() : res.fromDate;
      var toDate = res.toDate == null ? new Date() : res.toDate;
      this.service.GetGroupById(res.PracId, frmDate, toDate, res.IsAllDate).subscribe(res=>{
        if (res.length>0) {
           this.AppointmentList = res;
           this.AppointmentListAll = res;
        }
        else {
          console.log("Error : " + res.statusCode + ":" + res.exceptionMessage);
        }
      });
    }
    else{
      this.service.GetAllGroup().subscribe(res=>{
        if (res.length>0) {
           this.AppointmentList = res;
           this.AppointmentListAll = res;
        }
        else {
          console.log("Error : " + res.statusCode + ":" + res.exceptionMessage);
        }
      });
    }

    
  }

  getNameByID(ID: any) {
    return this.PractitionerListAll.filter(o => o.id == ID)[0].name;
  }


  onCheckboxType(val : any){
    if(val.checked){
      this.form.get('TypeId')?.disable();
    }
    else{
      this.form.get('TypeId')?.enable();
    }
  }

  onCheckboxPrac(val : any){
    if(val.checked){
      this.form.get('PracId')?.disable();
    }
    else{
      this.form.get('PracId')?.enable();
    }
  }

  onCheckboxDate(val : any){
    if(val.checked){ 
      this.form.get('fromDate')?.disable();
      this.form.get('toDate')?.disable();
    }
    else{
      this.form.get('fromDate')?.enable();
      this.form.get('toDate')?.enable();
    }
  }

  onChangeType(e : any){
    if(e == "1"){
      this.prtSrv.GetSupervisor().subscribe(res=>{
        if (res.length>0) {
           this.PractitionerList = res;
        }
        else {
          console.log("Error : " + res.statusCode + ":" + res.exceptionMessage);
        }
      });
    }
    if(e == "2"){
      this.prtSrv.GetBelow().subscribe(res=>{
        if (res.length>0) {
           this.PractitionerList = res;
        }
        else {
          console.log("Error : " + res.statusCode + ":" + res.exceptionMessage);
        }
      });
    }
    else{
      this.prtSrv.GetAll().subscribe(res=>{
        if (res.length>0) {
           this.PractitionerList = res;
        }
        else {
          console.log("Error : " + res.statusCode + ":" + res.exceptionMessage);
        }
      });
    }
  }
  // onChangeCountry(e) {
  //   this.provinceList = this.data.provinceData.filter(o => o.countryId == e);
  // }
}
