import { Component, OnInit, Input, Inject } from '@angular/core';
@Component({
  selector: 'app-all-users-details',
  templateUrl: './all-users-details.component.html',
  styleUrls: ['./all-users-details.component.css'],
})
export class AllUsersDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() data: any;
}
