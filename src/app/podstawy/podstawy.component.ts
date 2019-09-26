import { Component, OnInit } from '@angular/core';

class Dog {
  constructor(public name: string, public age: number) {
  }
}

@Component({
  selector: 'app-podstawy',
  templateUrl: './podstawy.component.html',
  styleUrls: ['./podstawy.component.css']
})
export class PodstawyComponent implements OnInit {

  title = 'anglar-kurs';
  pi = Math.PI;
  date = new Date();
  dog = new Dog('Reksio', 4);

  days: string[] = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];


  dogs: Array<Dog> = new Array<Dog>();

  constructor() {
    this.fillDogs();
  }

  fillDogs() {
    this.dogs.push(new Dog('Reksio', 1), new Dog('Łatek', 10), new Dog('Maksiu', 3),
      new Dog('Lili', 7), new Dog('Bary', 8), new Dog('Kajtek', 5), new Dog('Mala', 4));
  }


  showDog() {
    return 'Mój pies ma na imie: ' + this.dog.name + ' ' + 'i ma ' + this.dog.age + ' lata';
  }

  addDogs() {
    if (this.dogs.length === 0) {
      this.dogs.push(new Dog('Reksio', 1), new Dog('Łatek', 10), new Dog('Maksiu', 3),
        new Dog('Lili', 7), new Dog('Bary', 8), new Dog('Kajtek', 5), new Dog('Mala', 4));
    }
  }

  removeDogs() {
    this.dogs = new Array<Dog>();
  }

  ngOnInit() {
  }

}
