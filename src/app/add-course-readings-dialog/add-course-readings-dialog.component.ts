import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course-readings-dialog',
  templateUrl: './add-course-readings-dialog.component.html',
  styleUrls: ['./add-course-readings-dialog.component.css'],
})
export class AddCourseReadingsDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ReadingContent: String = '';
}
