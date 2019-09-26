import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  inputText = 'Tekst';
  maxLength = 5;
  colorClass = 'color';
  logoUrl = '';
  proffesion = '';
  skill = '';

  isDisable = true;

  constructor() {
    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
  }

  change() {
    this.inputText = 'Zmiana koloru i tekstu';
    this.maxLength = 30;
    this.colorClass = 'color2';
    this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular_solidBlack.svg';
  }

  onFocus() {
    this.colorClass = 'color2';
  }

  onCLick(event) {
    console.log(event);
  }

  onMouseMove(event) {
    console.log(event);
  }

  onPaste(event) {
    console.log(event);
  }

  onInput(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
