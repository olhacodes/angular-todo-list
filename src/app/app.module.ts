import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from './calendar/calendar.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    CalendarModule,
  ],
  declarations: [	AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
