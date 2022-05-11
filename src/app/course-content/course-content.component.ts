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
  ngOnInit(): void {}
  selectedCourse: any = null;
  async ngAfterContentInit() {

    this.selectedCourse =this.courseData.allCourse[0]
    // await this.courseData.GetCourseDetails(
    //   this.route.snapshot.paramMap.get('id')
    // );
    console.log()
  }
}
