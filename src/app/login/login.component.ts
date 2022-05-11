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
    console.log(mess)
    this.courseData.setAuthedUser(mess.user)
    
    GetCourses()
    if(mess["state"]=="error")
    {
      this.dialog.open(dialogg,{data:mess["message"]});
    }
  else{
       if(mess["user"]["type"]=="admin")
     {
       this.courseData.setIsAdmin(true);
       this.courseData.AuthedUser.type="admin";
       console.log(this.courseData.AuthedUser)
       this.router.navigate(['/accept-student-registration']);
     }
     else if(mess["user"]["type"]=="faculty")
     {
       this.courseData.setIsFaculty(true);
       this.courseData.AuthedUser.type="faculty";
       console.log("faculity")
       this.router.navigate(['/mainMenu']);
     }
     else
     {
       console.log("student");
       this.courseData.AuthedUser.type="student";
       console.log(this.courseData.AuthedUser)
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
    
      this.title="sorry";
      this.message=this.data;
  }
  
}
