import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {CourseContentComponent} from './course-content/course-content.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ExploreComponent } from './explore/explore.component';
const routes: Routes = [
  {path:'mainMenu',component:MainMenuComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'explore',component:ExploreComponent},
  {path:'course-content/:id',component:CourseContentComponent},
  {path:'',redirectTo:'/mainMenu',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
