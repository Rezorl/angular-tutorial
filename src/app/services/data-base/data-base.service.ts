import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  COURSES: Array<Course> = [
    new Course('1','Kursa 1', 'Opis kursu1'),
    new Course('2','Kursa 2', 'Opis kursu2'),
    new Course('3','Kursa 3', 'Opis kursu3'),
    new Course('4','Kursa 4', 'Opis kursu4'),
  ];

  getCourses(): Observable<Array<Course>>{
    return of(this.COURSES);
  }

  getCourseById(id: string){
    return this.COURSES.find(e => e.id===id);
  }

  getRandomCourse(): Course{
    const n = Math.floor(Math.random() * 3);
    return this.COURSES[n];
  }

}

export class Course {


  constructor(public id: string, public title: string, public content: string) {
  }
}
