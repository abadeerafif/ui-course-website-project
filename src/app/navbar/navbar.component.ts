import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../course-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public courseData: CourseDataService) {}

  ngOnInit(): void {}

  onFacultyLoginClick(isFac: boolean) {
    this.courseData.setIsFaculty(isFac);
  }
}
