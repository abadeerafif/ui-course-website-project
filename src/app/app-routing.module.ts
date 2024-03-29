import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ExploreComponent } from './explore/explore.component';
import { VideoComponent } from './video/video.component';
import { AcceptStudentRegistrationComponent } from './accept-student-registration/accept-student-registration.component';
import { AllUsersDetailsComponent } from './all-users-details/all-users-details.component';
import { FacultyMyCoursesComponent } from './faculty-my-courses/faculty-my-courses.component';
import { CalendarComponent } from './calendar/calendar.component';
import { QuizComponent } from './quiz/quiz.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { FacultyGuard } from './faculty.guard';
import { StudentGuard } from './student.guard';

const routes: Routes = [
  { path: 'mainMenu', component: MainMenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'calendar', component: CalendarComponent, canActivate:[StudentGuard] },
  {
    path: 'accept-student-registration',
    component: AcceptStudentRegistrationComponent,
    canActivate: [AdminGuardGuard]
  },
  {
    path: 'all-user-details',
    component: AllUsersDetailsComponent,
    canActivate: [AdminGuardGuard]
  },
  
  { path: 'my-faculty-course', component: FacultyMyCoursesComponent},
  { path: 'add-course', component: FacultyMyCoursesComponent, canActivate: [AdminGuardGuard] },
  { path: 'course-content/:id', component: CourseContentComponent, canActivate:[StudentGuard] },
  { path: 'quiz/:id', component: QuizComponent, canActivate:[StudentGuard] },
  { path: 'videos/:id', component: VideoComponent, canActivate:[StudentGuard] },
  { path: '', redirectTo: '/mainMenu', pathMatch: 'full' },
  { path: '**', redirectTo: '/mainMenu'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling:'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
