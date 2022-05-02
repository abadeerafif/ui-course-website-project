import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../course-data.service';
@Component({
  selector: 'app-all-users-details',
  templateUrl: './all-users-details.component.html',
  styleUrls: ['./all-users-details.component.css'],
})
export class AllUsersDetailsComponent implements OnInit {
  constructor(private courseData: CourseDataService) {}
  public data: string[] = [];
  ngOnInit(): void {
    this.data = this.courseData.GetAllSystemUsernames();
  }
  removeUser(username: string) {
    console.log(username);
  }
}
