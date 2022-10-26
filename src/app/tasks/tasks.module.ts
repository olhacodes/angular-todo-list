import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from './task-list.component';
import {TaskService} from './task.service';

@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule
  ],
  providers: [TaskService],
  declarations: [TaskListComponent],
  exports: [TaskListComponent]
})
export class TasksModule { }
