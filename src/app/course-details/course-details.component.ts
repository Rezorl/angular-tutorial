import { Component, OnInit } from '@angular/core';
import {Course, DataBaseService} from "../services/data-base/data-base.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;

  constructor(private dbService: DataBaseService, private  route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) =>{
      this.course = this.dbService.getCourseById(param.get('id'));
    });
  }

}
