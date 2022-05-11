import { Component, Input, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CourseDataService } from '../course-data.service';
import {signin} from '../firebasemodules/signinmodule';
import {GetCourses} from '../firebasemodules/getingdatamodule'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
    
    GetCourses()
    if(mess=="error")
    {
      this.dialog.open(dialogg,{data:{
        problem:"invalid input"
      }});
    }
    else{
      if(mess["type"]=="admin")
    {
      this.courseData.setIsAdmin(true);
      console.log("admin")
      this.router.navigate(['/all-user-details']);
    }
    else if(mess["type"]=="faculty")
    {
      this.courseData.setIsFaculty(true);
      console.log("faculity")
      this.router.navigate(['/mainMenu']);
    }
    else
    {
      console.log("student")
      this.router.navigate(['/mainMenu']);
    }
    this.courseData.login(mess);
    
  }
}


}

@Component({
  selector: 'dialogg',
  templateUrl: 'dialog.html',
})
export class dialogg {
  message:string=""; 
  title:string="";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
 ) { }

  ngOnInit(): void {
    if(this.data.problem=="invalid input"){
      this.title="Invalid Input";
      this.message="Please insert valid data";
    }

    if(this.data.problem=="pending"){
      this.title="Pending Approval";
      this.message="Your account is pending approval from the admin";
    }
  }
  
}
