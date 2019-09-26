import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list2',
  templateUrl: './task-list2.component.html',
  styleUrls: ['./task-list2.component.css']
})
export class TaskList2Component implements OnInit {

  taskList: Array<string> = [];
  tasksDone: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.taskList = ['zadanie1', 'zadanie2', 'zadanie3', 'zadanie4'];
  }

  add(newTask: string) {
    this.taskList.push(newTask);
  }

  remove(index: number) {
    this.taskList.splice(index, 1);
    // this.taskList = this.taskList.filter(e => e !== task);
  }

  done(index: number) {
    this.tasksDone.push(this.taskList[index]);
    this.remove(index);
  }

}
