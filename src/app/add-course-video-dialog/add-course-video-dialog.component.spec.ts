import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseVideoDialogComponent } from './add-course-video-dialog.component';

describe('AddCourseVideoDialogComponent', () => {
  let component: AddCourseVideoDialogComponent;
  let fixture: ComponentFixture<AddCourseVideoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseVideoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseVideoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
