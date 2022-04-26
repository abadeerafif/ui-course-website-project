import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {

  readMore=false;
  constructor() { }

  ngOnInit(): void {
  }

//   showText() {
//     this.isReadMore = !this.isReadMore
//  }

}
