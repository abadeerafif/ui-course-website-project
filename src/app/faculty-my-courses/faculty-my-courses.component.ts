import { CourseDataService } from '../course-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseQuizDialogComponent } from '../add-course-quiz-dialog/add-course-quiz-dialog.component';
import { AddCourseVideoDialogComponent } from '../add-course-video-dialog/add-course-video-dialog.component';
import { AddCourseReadingsDialogComponent } from '../add-course-readings-dialog/add-course-readings-dialog.component';
@Component({
  selector: 'app-faculty-my-courses',
  templateUrl: './faculty-my-courses.component.html',
  styleUrls: ['./faculty-my-courses.component.css'],
})
export class FacultyMyCoursesComponent implements OnInit {
  constructor(
    private courseData: CourseDataService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  public courses: string[] = [];

  ngOnInit(): void {
    this.courses = this.courseData.getCourseNames();
  }
  public coursesDetails = [
    {
      facultyCourse: 'FCIS',
      courseName: 'OOP',
      learningObjectives: 'lorem 20',
      courseDescription: 'lorem 20',
      courseVideos: ['lorem'],
      courseReadings: ['lorem'],
      courseQuizzes: [],
      numberOfHouesToComplete: 24,
    },
  ];
  addCourseForm = this.formBuilder.group({
    facultyCourse: ['FCIS'],
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
  selectedCourse: string = '';
  display(courseName: string) {
    this.selectedCourse = courseName;
    for (let i = 0; i < this.coursesDetails.length; i++) {
      if (this.coursesDetails[i].courseName === courseName) {
       
        this.addCourseForm.controls['courseName'].setValue(
          this.coursesDetails[i].courseName
        );
        this.addCourseForm.controls['learningObjectives'].setValue(
          this.coursesDetails[i].learningObjectives
        );
        this.addCourseForm.controls['courseDescription'].setValue(
          this.coursesDetails[i].courseDescription
        );
        this.addCourseForm.controls['courseVideos'].setValue(
          this.coursesDetails[i].courseVideos
        );
        this.addCourseForm.controls['courseReadings'].setValue(
          this.coursesDetails[i].courseReadings
        );
        this.addCourseForm.controls['courseQuizzes'].setValue(
          this.coursesDetails[i].courseQuizzes
        );
        this.addCourseForm.controls['numberOfHouesToComplete'].setValue(
          this.coursesDetails[i].numberOfHouesToComplete
        );
        break;
      }
    }
  }
}
