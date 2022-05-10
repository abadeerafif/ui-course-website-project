import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css'],
})
export class QuizQuestionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() data: any;
  @Input() index: any;
  @Output() answer = new EventEmitter();
  submitAnswerForQuestion(question:number,answer: string) {
    let AnswerObject={
      question,answer
    }
    this.answer.emit(AnswerObject);
  }
}
