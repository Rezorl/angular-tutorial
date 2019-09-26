import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Task} from "../../models/task";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private taskList: Array<Task> = [];
  private tasksDone: Array<Task> = [];

  //  BehaviorSubject dziala w taki sposob, ze nawet jezeli juz cos zostlao wrzucone a pozniej my zasubkrybowalismy
  // to i tak dostaniemy informacje o istniejacych elementach
  // z racje tego, ze services wsatje przed componentem to constructor serwisu jest wczensiej odpalany niż constructor componentu
  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private taskDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.taskList = [
      {name: 'zadanie1', createDate: new Date()},
      {name: 'zadanie2', createDate: new Date()},
      {name: 'zadanie3', createDate: new Date()},
      {name: 'zadanie4', createDate: new Date()}
    ];
    this.taskListObs.next(this.taskList);
  }

  add(newTask: Task) {
    this.taskList.push(newTask);
    this.taskListObs.next(this.taskList);
  }

  remove(task: Task) {
    //this.taskList.splice(index, 1);
    this.taskList = this.taskList.filter(e => e !== task);
    this.taskListObs.next(this.taskList);
  }

  done(task: Task) {
    this.tasksDone.push(task);
    this.taskDoneObs.next(this.tasksDone);
    this.remove(task);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  getTaskDoneObs(): Observable<Array<Task>> {
    return this.taskDoneObs.asObservable();
  }
}
