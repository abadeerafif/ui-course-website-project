import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ExploreComponent } from './explore/explore.component';
import { VideoComponent } from './video/video.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AcceptStudentRegistrationComponent } from './accept-student-registration/accept-student-registration.component';
import { AllUsersDetailsComponent } from './all-users-details/all-users-details.component';
import { FacultyMyCoursesComponent } from './faculty-my-courses/faculty-my-courses.component';
const routes: Routes = [
  { path: 'mainMenu', component: MainMenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'addCourse', component: AddCourseComponent },
  {
    path: 'accept-student-registration',
    component: AcceptStudentRegistrationComponent,
  },
  {
    path: 'all-user-details',
    component: AllUsersDetailsComponent,
  },
  { path: 'my-faculty-course', component: FacultyMyCoursesComponent },
  { path: 'addCourse', component: AddCourseComponent },
  { path: 'course-content/:id', component: CourseContentComponent },
  { path: 'videos/:id', component: VideoComponent },
  { path: '', redirectTo: '/mainMenu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
