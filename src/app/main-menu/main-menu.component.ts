import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDataService } from '../course-data.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  constructor(private route: Router, private courseData: CourseDataService) {}

  public courses: string[] = [];

  async ngOnInit(): Promise<void> {
    this.courses = await this.courseData.getCourseNames();
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
