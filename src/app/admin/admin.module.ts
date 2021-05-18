import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';



@NgModule({
  declarations: [
    AdminloginComponent,
    AdmindashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
  ,
  exports:[
    AdminloginComponent
  ]
})
export class AdminModule { }
