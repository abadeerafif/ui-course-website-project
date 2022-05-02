import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserToSystemComponent } from './add-user-to-system.component';

describe('AddUserToSystemComponent', () => {
  let component: AddUserToSystemComponent;
  let fixture: ComponentFixture<AddUserToSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserToSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserToSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
