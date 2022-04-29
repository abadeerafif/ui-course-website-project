import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyMyCoursesComponent } from './faculty-my-courses.component';

describe('FacultyMyCoursesComponent', () => {
  let component: FacultyMyCoursesComponent;
  let fixture: ComponentFixture<FacultyMyCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyMyCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyMyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
