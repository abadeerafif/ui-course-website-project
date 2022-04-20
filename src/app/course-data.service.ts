import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  constructor() { }

  getCourseNames(){
    return[
      'Data Structure', 
      'OOP', 
      'Algorithms', 
      'UID', 
      'Web Development'
    ];
  }
}
