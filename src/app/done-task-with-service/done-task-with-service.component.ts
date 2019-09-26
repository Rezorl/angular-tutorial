import { Component, OnInit } from '@angular/core';
import {TasksService} from "../services/tasks/tasks.service";
import {Task} from "../models/task";

@Component({
  selector: 'app-done-task-with-service',
  templateUrl: './done-task-with-service.component.html',
  styleUrls: ['./done-task-with-service.component.css']
})
export class DoneTaskWithServiceComponent implements OnInit {
  private tasksDone: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    tasksService.getTaskDoneObs().subscribe((tasksDone: Array<Task>)=>{
      this.tasksDone = tasksDone;
    });
  }

  ngOnInit() {
  }

}
