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
  public AuthedUser: any = null;
  ngOnInit(): void {
    this.courses = this.courseData.getCourseNames();
    this.AuthedUser = this.courseData.getAuthedUser();
  }
  ngAfterContentInit() {
    if (this.AuthedUser.type === 'faculty')
      this.addCourseForm.controls['facultyCourse'].setValue('FCIS');
  }

  addCourseForm = this.formBuilder.group({
    facultyCourse: [''],
    courseName: [''],
    learningObjectives: [''],
    courseDesc: [''],
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
    let courseDetails = this.courseData.GetCourseDetails(courseName);
    if (courseDetails) {
      this.addCourseForm.controls['facultyCourse'].setValue(
        courseDetails.facultyCourse
      );
      this.addCourseForm.controls['courseName'].setValue(
        courseDetails.courseName
      );
      this.addCourseForm.controls['learningObjectives'].setValue(
        courseDetails.learningObjectives
      );
      this.addCourseForm.controls['courseDesc'].setValue(
        courseDetails.courseDesc
      );
      this.addCourseForm.controls['courseVideos'].setValue(
        courseDetails.courseVideos
      );
      this.addCourseForm.controls['courseReadings'].setValue(
        courseDetails.courseReadings
      );
      this.addCourseForm.controls['courseQuizzes'].setValue(
        courseDetails.courseQuizzes
      );
      this.addCourseForm.controls['numberOfHouesToComplete'].setValue(
        courseDetails.numberOfHouesToComplete
      );
    }
  }
}
