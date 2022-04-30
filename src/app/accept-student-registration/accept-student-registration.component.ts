import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../course-data.service';
@Component({
  selector: 'app-accept-student-registration',
  templateUrl: './accept-student-registration.component.html',
  styleUrls: ['./accept-student-registration.component.css'],
})
export class AcceptStudentRegistrationComponent implements OnInit {
  constructor(private courseData: CourseDataService) {}
  public data: string[] = [];
  ngOnInit(): void {
    this.data =
      this.courseData.getAuthedUserAdmin().student_registration_pending_approval;
  }
}
