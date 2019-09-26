import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent implements OnInit {

  // property wystawione na zewnątrz
  // mozemy uzywac aliasu czyli dac @Input('tasksProp') i wtedy uzywamy property tasksProp a nie tasks
  // ale nie należy tak robić
  @Input()
  tasks: Array<string>;

  // tworzymy event, ktory złapie rodzic i będzie wiedział, że User kliknął
  // w button obok takiego taska
  @Output()
  eventTask = new EventEmitter<string>();

  constructor() { }

  select(task: string) {
    // emitujemy/wysyłamy info, że ktoś kliknął w button obok takiego taska
    this.eventTask.emit(task);
  }

  ngOnInit() {
  }

}
