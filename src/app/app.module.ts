import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { LearningObjectiveComponent } from './learning-objective/learning-objective.component';
import { InstructorComponent } from './instructor/instructor.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CourseDataService } from './course-data.service';
import { FooterComponent } from './footer/footer.component';
import { ExploreComponent } from './explore/explore.component';
import { VideoComponent } from './video/video.component';
import { AcceptStudentRegistrationComponent } from './accept-student-registration/accept-student-registration.component';
import { AllUsersDetailsComponent } from './all-users-details/all-users-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddCourseVideoDialogComponent } from './add-course-video-dialog/add-course-video-dialog.component';
import { AddCourseQuizDialogComponent } from './add-course-quiz-dialog/add-course-quiz-dialog.component';
import { AddCourseReadingsDialogComponent } from './add-course-readings-dialog/add-course-readings-dialog.component';
import { FacultyMyCoursesComponent } from './faculty-my-courses/faculty-my-courses.component';







import { AddUserToSystemComponent } from './add-user-to-system/add-user-to-system.component';
import { CalendarComponent } from './calendar/calendar.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CourseContentComponent,
    LearningObjectiveComponent,
    InstructorComponent,
    SyllabusComponent,
    MainMenuComponent,
    FooterComponent,
    ExploreComponent,
    VideoComponent,
    AcceptStudentRegistrationComponent,
    AllUsersDetailsComponent,
    AddCourseVideoDialogComponent,
    AddCourseQuizDialogComponent,
    AddCourseReadingsDialogComponent,
    FacultyMyCoursesComponent,
    AddUserToSystemComponent,
    CalendarComponent,
    QuizComponent,
    QuizQuestionComponent,
    CourseCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
  ],
  providers: [CourseDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
