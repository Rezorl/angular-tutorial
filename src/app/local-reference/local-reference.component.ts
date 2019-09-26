import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AddTaskComponent} from "../add-task/add-task.component";

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css']
})
//lepiej tego nie robic, lepiej uzywac bindowania chyba, ze nie mamy innej opcji
export class LocalReferenceComponent implements OnInit {

  @ViewChild('childRef',{static: false})
  childComponent: AddTaskComponent;

  @ViewChild('inputText',{static: false})
  inputText: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  add(inputText: HTMLInputElement) {
    console.log(inputText.value);
    console.log(this.childComponent.newTask);
    console.log(this.inputText.nativeElement.value);
  }
}
