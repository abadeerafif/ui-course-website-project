import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-course-video-dialog',
  templateUrl: './add-course-video-dialog.component.html',
  styleUrls: ['./add-course-video-dialog.component.css'],
})
export class AddCourseVideoDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  videoEmbedCode: string = '';
}
