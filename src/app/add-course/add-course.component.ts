import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  ggonSubmit(desc:string,obj:string,vid:string,read:string,quiz:string,hrs:string){
    console.log(desc,obj,vid,read,quiz,hrs);
  }
}
