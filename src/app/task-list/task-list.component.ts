import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  newTask: string;
  taskList: Array<string> = [];
  tasksDone: Array<string> = [];

  constructor() { }

  add() {
    this.taskList.push(this.newTask);
    console.log(this.taskList);
    this.newTask = '';
  }

  remove(index: number) {
    this.taskList.splice(index, 1);
    // this.taskList = this.taskList.filter(e => e !== task);
  }

  done(index: number) {
    this.tasksDone.push(this.taskList[index]);
    this.remove(index);
  }

  ngOnInit() {
  }

}
