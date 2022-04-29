import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../course-data.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  constructor(private courseData: CourseDataService) {}
  public authedUser: any = null;
  ngOnInit(): void {
    this.authedUser = this.courseData.getAuthedUserAdmin();
  }
}
