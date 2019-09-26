import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent-input.component.html',
  styleUrls: ['./parent-input.component.css']
})
export class ParentInputComponent implements OnInit {

  tasksList: Array<string> = ['zadanie1', 'zadanie2'];

  constructor() { }

  selected(task: string): void {
    console.log('Rodzic dostał info, że kliknięto: ' + task);
  }

  ngOnInit() {
  }

}
