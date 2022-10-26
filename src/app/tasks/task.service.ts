import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { TaskItem } from './task.dto';
import {NewTask} from './newTask.dto';

export class TaskService {

  constructor() { }

  private tasks = new BehaviorSubject([
    new TaskItem("Visit Ann"),
    new TaskItem("Call Dad"),
    new TaskItem("Go to the gym"),
    new TaskItem("Wash the dishes"),
    new TaskItem("Shop for the party")
  ])

  getAllTasks(): Observable<TaskItem[]>{
    return this.tasks;
  }

  addTask(newTask: NewTask) {
    const updatedTasks = this.tasks.value.concat(new TaskItem(newTask.title));
    this.tasks.next(updatedTasks)
  }

  removeTask(existingTask: TaskItem) { 
    const updatedTasks = this.tasks.value.filter(task => task !== existingTask)
    this.tasks.next(updatedTasks)
  }
}
