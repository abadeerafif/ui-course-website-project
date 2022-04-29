import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseQuizDialogComponent } from './add-course-quiz-dialog.component';

describe('AddCourseQuizDialogComponent', () => {
  let component: AddCourseQuizDialogComponent;
  let fixture: ComponentFixture<AddCourseQuizDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseQuizDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseQuizDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
