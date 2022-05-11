import { Component, OnInit, Input } from '@angular/core';
import { CourseDataService } from '../course-data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  constructor(private route: Router, public courseData: CourseDataService ) {}

  @Input() number=0;

  notAuthed=false;

  ngOnInit(): void {
    if(!this.courseData.AuthedUser){
      this.notAuthed=true;
    }
  }
  @Input() course = '';
  goToRoute(courseName: string) {
    return `course-content/${courseName}`;
  }
  goto(simple_route: string) {
    console.log(simple_route);
    this.route.navigateByUrl(simple_route);
  }
}
