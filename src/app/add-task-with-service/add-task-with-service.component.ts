import {Component, OnInit} from '@angular/core';
import {TasksService} from "../services/tasks/tasks.service";
import {Task} from "../models/task";

@Component({
  selector: 'app-add-task-with-service',
  templateUrl: './add-task-with-service.component.html',
  styleUrls: ['./add-task-with-service.component.css']
})
export class AddTaskWithServiceComponent implements OnInit {

  newTask: string;

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
  }

  add() {
    const task: Task = {
      name: this.newTask,
      createDate: new Date()
    };
    this.tasksService.add(task);
    this.newTask = "";
  }

}
