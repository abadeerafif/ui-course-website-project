import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDataService } from '../course-data.service';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css'],
})
export class SyllabusComponent implements OnInit {
  readMore = false;
  constructor(private route: Router, private courseData: CourseDataService) {}

  content: any[] = [];
  vidCount = 0;
  readCount = 0;
  ngOnInit(): void {
    this.content = this.courseData.content;
    this.vidCount = this.content.filter((obj) => obj.type == 'video').length;
    this.readCount = this.content.filter(
      (obj) => obj.type == 'readings'
    ).length;
  }

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete =
      this.content != null && this.content.every((t) => t.completed);
  }
  @Input() data = '';

  goto(simple_route: string) {
    console.log(simple_route);
    this.route.navigateByUrl(simple_route);
  }
  navigateToQuiz() {
    this.route.navigateByUrl('/quiz/' + this.data);
  }
}
