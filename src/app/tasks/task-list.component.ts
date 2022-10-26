import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import { TaskItem } from './task.dto';
import { NewTask } from './newTask.dto';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  newTask: NewTask = new NewTask();

  ngOnInit(): void {
    const date = this.route.snapshot.params['date'];
    this.newTask = new NewTask(this.newTask.title, new Date(date))
  }

  tasks: TaskItem[] = [
    new TaskItem("Visit Ann"),
    new TaskItem("Call Dad"),
    new TaskItem("Go to the gym"),
    new TaskItem("Wash the dishes"),
    new TaskItem("Shop for the party")
  ]

  add(taskNgForm: NgForm) {
    if (taskNgForm.touched === false) {
      return
    }

    this.tasks.push(new TaskItem(this.newTask.title))
    taskNgForm.reset({date: this.newTask.date})
  }

  remove(existingTask: TaskItem) {
    let userConfirmed = confirm('Are you sure you want to remove the following task: ' + existingTask.title)
    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task !== existingTask)
    }
  }
}