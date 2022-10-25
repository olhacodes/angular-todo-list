import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from './calendar/calendar.module';
import { TaskListModule } from './task-list/task-list.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskListModule,
    CalendarModule,
  ],
  declarations: [	AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
