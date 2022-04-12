import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  netImage:any = "../assets/images/image1.png";
  courseImage:any = "../assets/images/courseimg.png";
}
