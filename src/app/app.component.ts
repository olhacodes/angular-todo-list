import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list'
  tasks = [
    "Visit Ann",
    "Call Dad",
    "Go to the gym",
    "Wash the dishes",
    "Shop for the party"
  ]
  add(newTask: string) {
    this.tasks.push(newTask)
  }
  remove(existingTask: string) {
    let userConfirmed = confirm('Are you sure you want to remove the following task: ' + existingTask)
    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task !== existingTask)
    }
  }
}

