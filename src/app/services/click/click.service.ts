import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {LogService} from "../log/log.service";

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  private sumClicks : number = 0;
  //
  private sum = new Subject<number>();


  constructor(private log: LogService) { }

  addClicks(): void{
    this.sumClicks +=1;
    this.sum.next(this.sumClicks);
    this.log.logger("Suma w serwisie: " + this.sumClicks);
  }

  // zwracamy obserwator
  getSum(): Observable<number>{
    return this.sum.asObservable();
  }
}
