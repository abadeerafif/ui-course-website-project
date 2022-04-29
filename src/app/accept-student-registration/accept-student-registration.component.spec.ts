import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptStudentRegistrationComponent } from './accept-student-registration.component';

describe('AcceptStudentRegistrationComponent', () => {
  let component: AcceptStudentRegistrationComponent;
  let fixture: ComponentFixture<AcceptStudentRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptStudentRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptStudentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
