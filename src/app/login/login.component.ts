import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDataService } from '../course-data.service';
import {signin} from '../firebasemodules/signinmodule'
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, public courseData: CourseDataService,public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(dialogg);
  }

  gotoRegister() {
    this.router.navigate(['/register']);
  }

  isFaculty = false;

  courses: string[] = [
    'Data Structure',
    'OOP',
    'Algorithms',
    'UID',
    'Web Development',
  ];

  ngOnInit(): void {
    this.isFaculty = this.courseData.isFaculty;
  }
  async login(email:string,password:string) {
    this.courseData.setIsAdmin(true);
    const mess= await signin(email,password);
    if(mess=="error")
    {
      this.dialog.open(dialogg);
    }
    else{
    this.courseData.login({
      name: 'Ain Shams University',
      email: 'ASU@gmail.com',
      type: 'admin',
    });
    this.router.navigate(['/all-user-details']);
  }
  }
}

@Component({
  selector: 'dialogg',
  templateUrl: 'dialog.html',
})
export class dialogg {
  message:string="please insert valid data"; 
  
  
  
  
}
