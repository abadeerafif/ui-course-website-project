import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-learning-objective',
  templateUrl: './learning-objective.component.html',
  styleUrls: ['./learning-objective.component.css']
})
export class LearningObjectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() data: any;
}
