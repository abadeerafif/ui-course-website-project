import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() data: any;
}
