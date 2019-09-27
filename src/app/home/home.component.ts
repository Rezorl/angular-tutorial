import { Component, OnInit } from '@angular/core';
import {Course, DataBaseService} from "../services/data-base/data-base.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private course: Course;

  constructor(private dbService: DataBaseService, private router: Router) { }

  ngOnInit() {
    this.course = this.dbService.getRandomCourse();
  }

  getCourse() {
    this.router.navigate(['/courses/', this.course.id]).then(r => {
      console.log(r);
    });
  }
}
