import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDataService } from '../course-data.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],
})
export class CourseContentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private courseData: CourseDataService
  ) {}
  courses: any[] = [];
  ngOnInit(): void {
    this.courses = this.courseData.getCourses();
    console.log(this.courses.length, this.courseData.getCourses());
  }
  ngAfterContentInit() {
    this.getCourseByID();
  }
  selectedCourseName="Course 1";
  selected_id = this.route.snapshot.paramMap.get('id');
  selectedCourse: any = null;
  getCourseByID() {
    for (let i = 0; i < this.courses.length; i++) {
      console.log(this.courses[i]);
      if (this.courses[i].id === this.selected_id) {
        this.selectedCourse = this.courses[i];
      }
    }
  }
}
