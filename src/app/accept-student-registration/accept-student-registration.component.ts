import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accept-student-registration',
  templateUrl: './accept-student-registration.component.html',
  styleUrls: ['./accept-student-registration.component.css'],
})
export class AcceptStudentRegistrationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() data: any;
}
