import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../course-data.service';
@Component({
  selector: 'app-faculty-my-courses',
  templateUrl: './faculty-my-courses.component.html',
  styleUrls: ['./faculty-my-courses.component.css']
})
export class FacultyMyCoursesComponent implements OnInit {

  constructor(private courseData: CourseDataService) { }

  public courses: string [] = [];

  ngOnInit(): void {
    this.courses=this.courseData.getCourseNames();
  }

}
