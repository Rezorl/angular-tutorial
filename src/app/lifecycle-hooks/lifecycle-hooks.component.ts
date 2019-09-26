import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("Constructor LifecycleHooks!")
  }


  // Pochodzi z interfejsu OnChanges
  // Uruchamia się na poczatku, przed ngOnInit
  // Sprawdza czy zmieniły się zbindowane pola komponentu czyli pola @Input()
  // Obserwuje Inputy!!
  // Musi zmienić się referencja
  // Jak zmieniamy pola w modelu to ta metoda się nie wywoła, ale gdy zmienimy referencje do obiektu (np. stworzymy nowy obiekt) to wtedy się uruchomi
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - uruchomione! - #1');
    console.log(changes);
  }

  // Uruchamie się jeden raz podczas inicjalizacji komponnetu
  // Uruchamia się po konstruktorze i po ngOnChanges
  ngOnInit() {
    console.log("ngOnInit - uruchomione! - #2");
  }

  // Uruchamia się przy każdej zmianie, wywołania eventu
  // nawet jak zmieniam pole w obiekcie to wywoluje sie ta metoda (przy zmianie obiektu tez sie wykona)
  ngDoCheck(): void {
    console.log("ngDoCheck - uruchomione! - #3");
  }

  // Uruchamia się po inicjalizacji np <ng-content>
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit - uruchomione! - #4");
  }

  // Uruchamia się po kazdej zmianie np <ng-content>
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked - uruchomione! - #5");
  }

  // Uruchamia się po inicjalizacji widoku
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit - uruchomione! - #6");
  }

  // Uruchamia się po kazdej zmianie w widoku
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked - uruchomione! - #7");
  }

  // Wywołuje się gdy nasz komponent ulegnie zniszczeniu
  ngOnDestroy(): void {
    console.log("ngOnDestroy - uruchomione! - #8");
  }


}
