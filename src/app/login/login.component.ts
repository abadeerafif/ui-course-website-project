import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDataService } from '../course-data.service';
import {signin} from '../firebasemodules/signinmodule';
import {GetCourses} from '../firebasemodules/getingdatamodule'
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
    
    
    const mess= await signin(email,password);
    this.courseData.setAuthedUser(mess)
    if(mess["type"]=="admin")
    {
      this.courseData.setIsAdmin(true);
      console.log("admin")
    }
    else if(mess["type"]=="faculty")
    {
      this.courseData.setIsFaculty(true);
      console.log("faculity")
    }
    else
    {
      console.log("student")
    }
    GetCourses()
    if(mess=="error")
    {
      this.dialog.open(dialogg);
    }
    else{
    this.courseData.login(mess);
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
