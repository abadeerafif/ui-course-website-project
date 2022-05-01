import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDataService } from '../course-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, public courseData: CourseDataService) {}

  gotoRegister() {
    this.router.navigate(['/register']);
  }

  isFaculty = false;

  courses: string[] = [
    'Data Structure',
    'OOP',
    'Algorithms',
    'UID',
    'Web Development',
  ];

  ngOnInit(): void {
    this.isFaculty = this.courseData.isFaculty;
  }
  login() {
    this.courseData.setIsAdmin(true);
    this.router.navigate(['/all-user-details']);
  }
}
