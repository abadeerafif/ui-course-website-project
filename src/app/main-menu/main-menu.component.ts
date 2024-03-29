import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDataService } from '../course-data.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  constructor(private route: Router, public courseData: CourseDataService) {}

  public courses: string[] = [];
  public studentCourses: string[] = [];
  public availablePrerequisitedCourses: any[] = [];
  public finishedCourses: any[] = [];
  loading:boolean=true;
  async ngOnInit(): Promise<void> {
    this.courses = await this.courseData.getCourseNames();
    if (this.courseData.AuthedUser) {
      this.studentCourses = this.courseData.AuthedUser.courses;
      let allCourses = await this.courseData.getCourses();
      if (
        this.courseData.AuthedUser &&
        this.courseData.AuthedUser.type === 'student'
      ) {
        this.availablePrerequisitedCourses =
          this.courseData.coursesAfterTheseOne(this.studentCourses, allCourses);
        this.finishedCourses = this.courseData.AuthedUser.finshedcourses;
      }
    }
    console.log('asdsadas', this.courseData.AuthedUser);
    
    this.loading=false;
  }
  goset(emaill: string) {
    this.courseData.setEmail(emaill);
  }
  goToRoute(courseName: string) {
    return `course-content/${courseName}`;
  }
  goto(simple_route: string) {
    console.log(simple_route);
    this.route.navigateByUrl(simple_route);
  }
  netImage: any = '../assets/images/coursera.png';
  courseImage: any = '../assets/images/courseimg.png';
}
