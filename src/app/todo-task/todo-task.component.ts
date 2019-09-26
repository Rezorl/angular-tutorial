import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input()
  taskList: Array<string>;

  @Output()
  emitDone = new EventEmitter<number>();

  @Output()
  emitRemove = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  remove(index: number) {
    this.emitRemove.emit(index);
  }

  done(index: number) {
    this.emitDone.emit(index);
  }

  getColor(): string {
    return this.taskList.length >= 5 ? 'red' : 'green';
  }
}
