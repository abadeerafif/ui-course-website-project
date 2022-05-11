import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { CourseDataService } from '../course-data.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private courseData: CourseDataService
  ) {}

  async ngOnInit(): Promise<void> {
    this.quiz = await this.courseData.GetCourseDetails(this.route.snapshot.paramMap.get('id'))
    this.coursename=this.quiz.courseName;
    console.log("abaaaaaaaaa",this.quiz)
    this.quiz=this.quiz.courseQuizzes;
  }
  quizName: string = 'coming from route';
  quiz: any = [];
  coursename:string="";
  answers: any[] = [
    { question: 1, answer: '' },
    { question: 2, answer: '' },
    { question: 3, answer: '' },
    { question: 4, answer: '' },
    { question: 5, answer: '' },
  ];
  addAnswer(newAnswer: any) {
    let found = false;
    this.answers.filter((answer) =>
      answer.question === newAnswer.question
        ? ((answer.answer = newAnswer.answer), (found = true))
        : null
    );
    if (!found) {
      this.answers.push(newAnswer);
    }
  }
  graded = false;
  grade = 0;
  evaluate() {
    this.graded = true;
    for (let i = 0; i < 5; i++) {
      if (this.answers[i].answer === this.quiz[i].questionAnswer) {
        this.grade++;
      }
    }
    if(this.grade>4)
    {
      this.courseData.finishcour(this.coursename)
    }
  }
}
