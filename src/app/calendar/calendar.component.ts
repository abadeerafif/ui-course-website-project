import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../course-data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public courseList: string[] = [];
  public allAvailableCourses: any[] = [];
  loading:boolean=true;
  public filteredCourses: any[] = [];
  constructor(public courseData: CourseDataService) { }



  async ngOnInit(): Promise<void> {
    this.allAvailableCourses = await this.courseData.getCourses();
    this.courseList=await this.courseData.AuthedUser.courses;

    for(var course of this.courseList){
      for(var allcourse of this.allAvailableCourses){
        if(course==allcourse.courseName){
          this.filteredCourses.push(allcourse);
          break;
        }
      }
    }

    for(var mycourse of this.filteredCourses){
      var date = mycourse.start.toDate().toDateString();
      mycourse.start=date;
      var enddate = mycourse.end.toDate().toDateString();
      mycourse.end=enddate;
    }
    this.loading=false;
  }
  

}
