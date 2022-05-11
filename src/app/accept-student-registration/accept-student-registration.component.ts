import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseDataService } from '../course-data.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-accept-student-registration',
  templateUrl: './accept-student-registration.component.html',
  styleUrls: ['./accept-student-registration.component.css'],
})
export class AcceptStudentRegistrationComponent implements OnInit {
  constructor(private courseData: CourseDataService) {}
  displayedColumns: string[] = ['name', 'email', 'id'];
  public data: any[] = [];
  public dataSource: any = null;
  public selected: any[] = [];
  parentSelector: boolean = false;
  usersToBeRemoved: string[] = [];
 async ngOnInit(): Promise<void> {
    this.data = await this.courseData.getAllUsersWaitingApproval();
    this.selected = this.data.map((d) => ({ selected: false, ...d }));
    this.dataSource = new MatTableDataSource(this.selected);
  }
  Accept(username: string) {
    console.log("abaaaaaaaaaaaaaaa",username);
    
  }
  Decline(username: string) {
    console.log(username);
  }

  searchstring: string = '';
  search(searchstring: string) {
    console.log(searchstring);
    let arr: any[] = [];
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i].email.includes(searchstring));
      if (this.data[i].email.split('@')[0].includes(searchstring)) {
        arr.push(this.data[i]);
      }
    }
    this.dataSource = new MatTableDataSource(arr);
    console.log(this.selected);
  }
  updateSelected($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.selected = this.selected.map((d) => {
      if (d.name === id) {
        d.selected = isChecked;
        this.parentSelector = false;
        return d;
      }
      if (id == -1) {
        d.selected = this.parentSelector;
        return d;
      }
      return d;
    });
    console.log(this.selected);
  }
  removeUser() {
    this.selected.map((user) => {
      if (user.selected) {
        this.usersToBeRemoved.push(user.email);
      }
    });

    console.log(this.usersToBeRemoved);
    
    
    
    this.usersToBeRemoved = [];
  }
  acceptUser() {
    this.selected.map((user) => {
      if (user.selected) {
        this.usersToBeRemoved.push(user.email);
      }
    });

    console.log(this.usersToBeRemoved);
    
    
    this.courseData.acceptuser(this.usersToBeRemoved)
    this.usersToBeRemoved = [];
  }
}
