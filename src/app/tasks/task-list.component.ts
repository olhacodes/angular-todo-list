import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TaskItem } from './task.dto';
import { NewTask } from './newTask.dto';
import { TaskService } from './task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { } 

  tasks = this.taskService.getAllTasks();

  newTask: NewTask = new NewTask();

  ngOnInit(): void {
    const date = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(date))
  }

  add(taskNgForm: NgForm) {
    if (taskNgForm.touched === false) {
      return
    }
    
    this.taskService.addTask(this.newTask)
    taskNgForm.reset({date: this.newTask.date})
  }

  remove(existingTask: TaskItem) {
    let userConfirmed = confirm('Are you sure you want to remove the following task: ' + existingTask.title)
    if (userConfirmed) {
      this.taskService.removeTask(existingTask)
    }
  }
}