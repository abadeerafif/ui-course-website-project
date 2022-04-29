import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseQuizDialogComponent } from '../add-course-quiz-dialog/add-course-quiz-dialog.component';
import { AddCourseVideoDialogComponent } from '../add-course-video-dialog/add-course-video-dialog.component';
import { AddCourseReadingsDialogComponent } from '../add-course-readings-dialog/add-course-readings-dialog.component';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {}

  ggonSubmit(
    desc: string,
    obj: string,
    vid: string,
    read: string,
    quiz: string,
    hrs: string
  ) {
    console.log(desc, obj, vid, read, quiz, hrs);
  }
  addCourseForm = this.formBuilder.group({
    facultyCourse: [''],
    courseName: [''],
    learningObjectives: [''],
    courseDescription: [''],
    courseVideos: [[]],
    courseReadings: [[]],
    courseQuizzes: [[]],
    numberOfHouesToComplete: [''],
  });

  saveForm() {
    console.log('saving', this.addCourseForm.value);
  }
  openQuizDialog() {
    let dialogRef = this.dialog.open(AddCourseQuizDialogComponent);
    dialogRef.afterClosed().subscribe((res) => {
      this.addCourseForm.value.courseQuizzes.push(res);
    });
  }
  openVideoDialog() {
    let dialogRef = this.dialog.open(AddCourseVideoDialogComponent);
    dialogRef.afterClosed().subscribe((res) => {
      this.addCourseForm.value.courseVideos.push(res);
    });
  }
  openReadingDialog() {
    let dialogRef = this.dialog.open(AddCourseReadingsDialogComponent);
    dialogRef.afterClosed().subscribe((res) => {
      this.addCourseForm.value.courseReadings.push(res);
    });
  }
}
