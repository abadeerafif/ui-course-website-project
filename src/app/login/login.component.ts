import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  myForm:FormGroup = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required]]
    })

    
  constructor(private router: Router, public courseData: CourseDataService,public dialog: MatDialog,private formBuilder:FormBuilder) {}
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

  ngOnInit() {
    this.isFaculty = this.courseData.isFaculty;
    // this.myForm=
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
      
       this.router.navigate(['/accept-student-registration']);
     }
     else if(mess["user"]["type"]=="faculty")
     {
      
       this.router.navigate(['/mainMenu']);
     }
     else
     {
       
       this.router.navigate(['/mainMenu']);
     }
     this.courseData.login(mess.user);
    
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
