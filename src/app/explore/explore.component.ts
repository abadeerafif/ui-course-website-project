import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDataService } from '../course-data.service';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor(private route:Router, public courseData: CourseDataService) { }

  public courses: string[] = [];
  public faculties: string[] = [];
  async ngOnInit(): Promise<void> {
    this.courses=await this.courseData.getCourseNames();
    this.faculties=await this.courseData.GetfacultyNames();  
  }

  goto(simple_route:string) {
    console.log(simple_route);
    this.route.navigateByUrl(simple_route);
  }
  
}
