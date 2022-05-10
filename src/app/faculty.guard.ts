import { Injectable } from '@angular/core';
import { CourseDataService } from './course-data.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyGuard implements CanActivate {
  constructor(private route: Router, private courseData: CourseDataService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.courseData.AuthedUser.type!="faculty"){
      alert('You are not allowed to view this page');
      return false;
    }
    return true;
  }
  
}
