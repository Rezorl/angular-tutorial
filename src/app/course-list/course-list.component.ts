import { Component, OnInit } from '@angular/core';
import {Course, DataBaseService} from "../services/data-base/data-base.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Array<Course>;

  constructor(private dbService: DataBaseService) { }

  ngOnInit() {
    this.dbService.getCourses().subscribe(courses =>{
      this.courses = courses;
    });
  }

}
