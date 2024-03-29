import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {signup} from '../firebasemodules/signupmodule'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm:FormGroup = this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    pass:['',[Validators.required]]
  })
  error:boolean=false;

  constructor(private router: Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  submitsignup(email:string,password:string,fullname:string)
  {
    this.error=false
    signup(email,password,fullname).catch((error)=>{this.error=true});
    

  }

  gotoLogin() {
    this.router.navigate(['/login']);
    
    
  }

}
