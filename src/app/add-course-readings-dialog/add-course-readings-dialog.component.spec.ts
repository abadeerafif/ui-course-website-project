import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseReadingsDialogComponent } from './add-course-readings-dialog.component';

describe('AddCourseReadingsDialogComponent', () => {
  let component: AddCourseReadingsDialogComponent;
  let fixture: ComponentFixture<AddCourseReadingsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseReadingsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseReadingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
