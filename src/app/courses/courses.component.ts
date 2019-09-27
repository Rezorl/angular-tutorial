import { Component, OnInit } from '@angular/core';
import {Course, DataBaseService} from "../services/data-base/data-base.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  ngOnInit(): void {
  }


}
