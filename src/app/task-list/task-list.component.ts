import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  date: Date = new Date();

  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params['date']);
  }

  tasks: Task[] = [
    new Task("Visit Ann"),
    new Task("Call Dad"),
    new Task("Go to the gym"),
    new Task("Wash the dishes"),
    new Task("Shop for the party")
  ]

  add(newTask: string) {
    this.tasks.push(new Task(newTask))
  }

  remove(existingTask: Task) {
    let userConfirmed = confirm('Are you sure you want to remove the following task: ' + existingTask.title)
    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task !== existingTask)
    }
  }
}

class Task {
  constructor(public title: string) {
  
  }

  toggleIsDone() {
    this.isDone = !this.isDone;
  }

  public isDone = false;
}
