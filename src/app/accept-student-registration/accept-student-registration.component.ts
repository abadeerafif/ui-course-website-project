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
 async ngOnInit(): Promise<void> {
    this.data = await this.courseData.getAllUsersWaitingApproval();
  }
  Accept(username: string) {
    console.log(username);
  }
  Decline(username: string) {
    console.log(username);
  }
}
