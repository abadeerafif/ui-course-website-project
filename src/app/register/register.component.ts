import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {signup} from '../firebasemodules/signupmodule'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  submitsignup(email:string,password:string,fullname:string)
  {
    signup(email,password,fullname);
    

  }

  gotoLogin() {
    this.router.navigate(['/login']);
    
    
  }

}
