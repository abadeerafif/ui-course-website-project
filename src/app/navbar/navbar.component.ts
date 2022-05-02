import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDataService } from '../course-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, public courseData: CourseDataService) {}

  ngOnInit(): void {}

  onFacultyLoginClick(isFac: boolean) {
    this.courseData.setIsFaculty(isFac);
  }
  loginlogout() {
    if (this.courseData.AuthedUser) {
      this.courseData.logout();
    } else {
      this.router.navigate(['/login']);
    }
  }
}
