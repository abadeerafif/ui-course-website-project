import { CourseDataService } from '../course-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
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
  range=new FormGroup({
    start:new FormControl(),
    end:new FormControl()
  });
  constructor(
    private courseData: CourseDataService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}
  loading: boolean = true;
  public courses: string[] = [];
  public AuthedUser: any = null;
  printRange(){
    console.log(this.range.value); //use range.value.start & .end
  }
  async ngOnInit(): Promise<void> {
    var coursesobj = await this.courseData.getCourses();
    this.AuthedUser = this.courseData.getAuthedUser();
    console.log(this.AuthedUser);
    if (this.AuthedUser.type === 'faculty') {
      this.addCourseForm.controls['facultyCourse'].setValue(this.AuthedUser.name);
      for (var i = 0; i < coursesobj.length; i++) {
        if (coursesobj[i]['facultyCourse'] == this.AuthedUser.name) {
          this.courses.push(coursesobj[i]['courseName']);
        }
      }
    } else if (this.AuthedUser.type == 'admin') {
      this.courses = await this.courseData.getCourseNames();
    }

    this.loading = false;
  }
  ngAfterContentInit() {
    this.AuthedUser = this.courseData.getAuthedUser();
    console.log(this.AuthedUser);
    if (this.AuthedUser.type === 'faculty')
      this.addCourseForm.controls['facultyCourse'].setValue('FCIS');
  }

  addCourseForm = this.formBuilder.group({
    facultyCourse: [''],
    courseName: [''],
    pre: [''],
    obj: [''],
    learningObjectives: [[]],
    prerequisite: [[]],
    courseDesc: [''],
    courseVideos: [[]],
    courseReadings: [[]],
    courseQuizzes: [[]],
    numberOfHouesToComplete: [''],
  });
  addCoursePrerequisite() {
    if (this.addCourseForm.value.pre === '') {
      alert('please enter prerequisite first');
      return;
    }
    this.addCourseForm.value.prerequisite.push(this.addCourseForm.value.pre);
    this.addCourseForm.controls['pre'].setValue('');
  }
  addCourseObjective() {
    if (this.addCourseForm.value.obj === '') {
      alert('please enter objective first');
      return;
    }
    this.addCourseForm.value.learningObjectives.push(
      this.addCourseForm.value.obj
    );
    this.addCourseForm.controls['obj'].setValue('');
  }
  async saveForm() {
    console.log("abadeer",this.addCourseForm.value['courseReadings']);
    await this.courseData.uploadreadingfile(this.addCourseForm.value['courseName'],this.addCourseForm.value['courseReadings']);
    const readingnamearr : string[]=[];
    for(let i=0;i<this.addCourseForm.value['courseReadings'].length;i++)
    {
      readingnamearr.push(this.addCourseForm.value['courseReadings'][i]["name"])

    }
    this.addCourseForm.value['courseReadings']=readingnamearr

    
    console.log('saving', this.addCourseForm.value);

    this.addCourseForm.value['courseQuizzes'] =
    this.addCourseForm.value['courseQuizzes'][0];
    console.log('saving1', this.addCourseForm.value);
  
    this.courseData.addcoursetodatabase(this.addCourseForm.value,this.range.value.start,this.range.value.end);
  }
  openQuizDialog() {
    let dialogRef = this.dialog.open(AddCourseQuizDialogComponent);
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res)
      if (res) {
        this.addCourseForm.value.courseQuizzes.push(res);
      }
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
      console.log(res);
    });
  }
  selectedCourse: string = '';
  async display(courseName: string) {
    this.selectedCourse = courseName;
    let courseDetails = await this.courseData.GetCourseDetails(courseName);
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
