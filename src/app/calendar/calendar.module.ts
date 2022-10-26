import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule
  ],
  declarations: [CalendarComponent],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
