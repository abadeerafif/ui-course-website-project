import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
  @Input() course = '';
  goToRoute(courseName: string) {
    return `course-content/${courseName}`;
  }
  goto(simple_route: string) {
    console.log(simple_route);
    this.route.navigateByUrl(simple_route);
  }
}
