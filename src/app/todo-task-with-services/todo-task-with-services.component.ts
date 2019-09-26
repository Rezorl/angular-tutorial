import { Component, OnInit } from '@angular/core';
import {TasksService} from "../services/tasks/tasks.service";
import {Task} from "../models/task";

@Component({
  selector: 'app-todo-task-with-services',
  templateUrl: './todo-task-with-services.component.html',
  styleUrls: ['./todo-task-with-services.component.css']
})
export class TodoTaskWithServicesComponent implements OnInit {
  taskList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskListObs().subscribe((tasks:Array<Task>) => {
      //slice zmienia referencje i angular wie, ze ma odswiezyc widok w przypadku sortowania pipe
      this.taskList = tasks.slice();
    })
  }

  ngOnInit() {
  }

  getColor() {
    return this.taskList.length >= 5 ? 'red' : 'green';
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    task.endDate = new Date();
    this.tasksService.done(task);
  }
}
