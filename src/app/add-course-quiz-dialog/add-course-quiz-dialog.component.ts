import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-course-quiz-dialog',
  templateUrl: './add-course-quiz-dialog.component.html',
  styleUrls: ['./add-course-quiz-dialog.component.css'],
})
export class AddCourseQuizDialogComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

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

  returnQuiz: any = null;
  saveForm() {
    this.returnQuiz = {
      questionOne: {
        questionOne: this.courseQuiz.value.questionOne,
        questionOneAnswerOne: this.courseQuiz.value.questionOneAnswerOne,
        questionOneAnswerTwo: this.courseQuiz.value.questionOneAnswerTwo,
        questionOneAnswerThree: this.courseQuiz.value.questionOneAnswerThree,
        questionOneAnswer: this.courseQuiz.value.questionOneAnswer,
      },
      questionTwo: {
        questionTwo: this.courseQuiz.value.questionTwo,
        questionTwoAnswerOne: this.courseQuiz.value.questionTwoAnswerOne,
        questionTwoAnswerTwo: this.courseQuiz.value.questionTwoAnswerTwo,
        questionTwoAnswerThree: this.courseQuiz.value.questionTwoAnswerThree,
        questionTwoAnswer: this.courseQuiz.value.questionTwoAnswer,
      },
      questionThree: {
        questionThree: this.courseQuiz.value.questionThree,
        questionThreeAnswerOne: this.courseQuiz.value.questionThreeAnswerOne,
        questionThreeAnswerTwo: this.courseQuiz.value.questionThreeAnswerTwo,
        questionThreeAnswerThree:
          this.courseQuiz.value.questionThreeAnswerThree,
        questionThreeAnswer: this.courseQuiz.value.questionThreeAnswer,
      },
      questionFour: {
        questionFour: this.courseQuiz.value.questionFour,
        questionFourAnswerOne: this.courseQuiz.value.questionFourAnswerOne,
        questionFourAnswerTwo: this.courseQuiz.value.questionFourAnswerTwo,
        questionFourAnswerThree: this.courseQuiz.value.questionFourAnswerThree,
        questionFourAnswer: this.courseQuiz.value.questionFourAnswer,
      },
      questionFive: {
        questionFive: this.courseQuiz.value.questionFive,
        questionFiveAnswerOne: this.courseQuiz.value.questionFiveAnswerOne,
        questionFiveAnswerTwo: this.courseQuiz.value.questionFiveAnswerTwo,
        questionFiveAnswerThree: this.courseQuiz.value.questionFiveAnswerThree,
        questionFiveAnswer: this.courseQuiz.value.questionFiveAnswer,
      },
    };

    console.log(this.courseQuiz.value);
    return this.returnQuiz;
  }
}
