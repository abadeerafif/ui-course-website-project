import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [CourseDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
