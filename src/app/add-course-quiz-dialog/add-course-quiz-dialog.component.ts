import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-course-quiz-dialog',
  templateUrl: './add-course-quiz-dialog.component.html',
  styleUrls: ['./add-course-quiz-dialog.component.css'],
})
export class AddCourseQuizDialogComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddCourseQuizDialogComponent>
  ) {}

  ngOnInit(): void {}
  numberOfQuestion: number = 0;
  courseQuiz = this.formBuilder.group({
    questionOne: ['q'],
    questionOneAnswerOne: ['q'],
    questionOneAnswerTwo: ['q'],
    questionOneAnswerThree: ['q'],
    questionOneAnswer: ['q'],
    questionTwo: ['q'],
    questionTwoAnswerOne: ['q'],
    questionTwoAnswerTwo: ['q'],
    questionTwoAnswerThree: ['q'],
    questionTwoAnswer: ['q'],
    questionThree: ['q'],
    questionThreeAnswerOne: ['q'],
    questionThreeAnswerTwo: ['q'],
    questionThreeAnswerThree: ['q'],
    questionThreeAnswer: ['q'],
    questionFour: ['q'],
    questionFourAnswerOne: ['q'],
    questionFourAnswerTwo: ['q'],
    questionFourAnswerThree: ['q'],
    questionFourAnswer: ['q'],
    questionFive: ['q'],
    questionFiveAnswerOne: ['q'],
    questionFiveAnswerTwo: ['q'],
    questionFiveAnswerThree: ['q'],
    questionFiveAnswer: ['q'],
  });

  returnQuiz: any = '';
  saveForm() {
    this.returnQuiz = [
      {
        question: this.courseQuiz.value.questionOne,
        questionAnswerOne: this.courseQuiz.value.questionOneAnswerOne,
        questionAnswerTwo: this.courseQuiz.value.questionOneAnswerTwo,
        questionAnswerThree: this.courseQuiz.value.questionOneAnswerThree,
        questionAnswer: this.courseQuiz.value.questionOneAnswer,
      },
      {
        question: this.courseQuiz.value.questionTwo,
        questionAnswerOne: this.courseQuiz.value.questionTwoAnswerOne,
        questionAnswerTwo: this.courseQuiz.value.questionTwoAnswerTwo,
        questionAnswerThree: this.courseQuiz.value.questionTwoAnswerThree,
        questionAnswer: this.courseQuiz.value.questionTwoAnswer,
      },
      {
        question: this.courseQuiz.value.questionThree,
        questionAnswerOne: this.courseQuiz.value.questionThreeAnswerOne,
        questionAnswerTwo: this.courseQuiz.value.questionThreeAnswerTwo,
        questionAnswerThree:
          this.courseQuiz.value.questionThreeAnswerThree,
        questionAnswer: this.courseQuiz.value.questionThreeAnswer,
      },
      {
        question: this.courseQuiz.value.questionFour,
        questionAnswerOne: this.courseQuiz.value.questionFourAnswerOne,
        questionAnswerTwo: this.courseQuiz.value.questionFourAnswerTwo,
        questionAnswerThree: this.courseQuiz.value.questionFourAnswerThree,
        questionAnswer: this.courseQuiz.value.questionFourAnswer,
      },
      {
        question: this.courseQuiz.value.questionFive,
        questionAnswerOne: this.courseQuiz.value.questionFiveAnswerOne,
        questionAnswerTwo: this.courseQuiz.value.questionFiveAnswerTwo,
        questionAnswerThree: this.courseQuiz.value.questionFiveAnswerThree,
        questionAnswer: this.courseQuiz.value.questionFiveAnswer,
      },
    ];

    this.dialogRef.close(this.returnQuiz);
  }
}
