import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {

  readMore=false;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goto(simple_route:string) {
    console.log(simple_route);
    this.route.navigateByUrl(simple_route);
  }

}
