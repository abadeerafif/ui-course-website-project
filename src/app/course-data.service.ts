import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import {
  GetCourses,
  Getuseraccepted,
  Getuserspending,
  GetCoursesname,
  deleteuser,
  approveeuser,
  addcourse,
} from '../app/firebasemodules/getingdatamodule';
import { signin } from '../app/firebasemodules/signinmodule';

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  constructor(private router: Router) {}

  email = 'petergeoorge@gmail.com';

  setEmail(emai: string) {
    this.email = emai;
    console.log(this.email);
  }
  isStudentLoggedIn = false;
  isFacultyLoggedIn = false;
  isLoggedIn = false;
  isFaculty = false;
  isStudent = false;
  isAdmin = false;
  setIsFaculty(isFaculty: boolean) {
    this.isFaculty = isFaculty;
    this.isLoggedIn = true;
  }

  setIsAdmin(isAdmin: boolean) {
    this.isAdmin = isAdmin;
    this.isLoggedIn = true;
  }

  allCourse = [
    {
      prerequisite: ['DataStructure', 'Algorithms'],
      courseVideos: [
        '<iframe width="894" height="503" src="https://www.youtube.com/embed/SU8CIjgyKmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="894" height="503" src="https://www.youtube.com/embed/SU8CIjgyKmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="894" height="503" src="https://www.youtube.com/embed/SU8CIjgyKmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="894" height="503" src="https://www.youtube.com/embed/SU8CIjgyKmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      ],
      courseReadings: ['asdasda', 'sadasd', 'asdsad', 'asdasdsa'],
      courseQuizzes: [
        {
          question: 'How many Letters in the alphabet',
          questionAnswerOne: '1',
          questionAnswerTwo: '2',
          questionAnswerThree: '12',
          questionAnswer: '28',
        },
        {
          question: 'q',
          questionAnswerOne: 'q',
          questionAnswerTwo: 'q',
          questionAnswerThree: 'q',
          questionAnswer: 'q',
        },
        {
          question: 'q',
          questionAnswerOne: 'q',
          questionAnswerTwo: 'q',
          questionAnswerThree: 'q',
          questionAnswer: 'q',
        },
        {
          question: 'q',
          questionAnswerOne: 'q',
          questionAnswerTwo: 'q',
          questionAnswerThree: 'q',
          questionAnswer: 'q',
        },
        {
          question: 'q',
          questionAnswerOne: 'q',
          questionAnswerTwo: 'q',
          questionAnswerThree: 'q',
          questionAnswer: 'q',
        },
      ],
      courseName: 'OOP',
      facultyCourse: 'FCIS',
      courseDesc:
        'This course provides a broad overview of the fundamental concepts, principles, and practices of mindfulness. With interactive exercises to help students explore their own attitudes, mental habits and behaviors, Foundations of Mindfulness offers a pathway for living with more freedom, authenticity and ease. Featured components of the course include experiential exercises, guided meditations, personal reflection and interactive discussions.',
      learningObjectives: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ut unde doloremque soluta voluptatem quas minus quidem consectetur ratione cumque?',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ut unde doloremque soluta voluptatem quas minus quidem consectetur ratione cumque?',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ut unde doloremque soluta voluptatem quas minus quidem consectetur ratione cumque?',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ut unde doloremque soluta voluptatem quas minus quidem consectetur ratione cumque?',
      ],
      instructorDetails: {
        isSchool: 'inst',
        Name: 'Peter Iskander',
        Position: 'CTO SW Architect, Founder of Google and Microsoft',
      },
      institutionDetails: {
        isSchool: 'school',
        Name: 'YALE',
        Position:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ut unde doloremque soluta voluptatem quas minus quidem consectetur ratione cumque?',
      },
      weeks: [
        {
          title: 'week 1',
          numberOfVideos: 5,
          toReadNumber: 3,
          quizzes: 1,
          estimatedTime: 12,
        },
      ],
      numberOfHouesToComplete: 24,
    },
  ];

  content = [
    {
      type: 'video',
      title: 'Meet the Professor  4m',
      completed: false,
    },
    {
      type: 'video',
      title: 'Course Introduction  2m',
      completed: false,
    },
    {
      type: 'readings',
      title: 'Course Information and Keys to Success  10m',
      completed: false,
    },
    {
      type: 'readings',
      title: 'Discussion Forum Guidelines  2m',
      completed: false,
    },
    {
      type: 'readings',
      title: 'Accessibility and Accommodations Statement  1m',
      completed: false,
    },
  ];

  async getCourses() {
    const Courses = await GetCourses();
    return Courses;
  }

  getAuthedUserAdmin() {
    return {
      name: 'Ain Shams University',
      email: 'asd@gmail.com',
      type: 'admin',
      all_courses: this.getCourseNames(),
      all_system_users: ['FCIS', 'Abadeer Afif'],
      student_registration_pending_approval: [
        'Abadeer Afif',
        'Peter George',
        'Peter Magdy',
      ],
    };
  }

  // AuthedUser: any = {
  //   name: 'Ain Shams University',
  //   email: 'asd@gmail.com',
  //   type: 'faculty',
  // };
  AuthedUser: any = null;

  /*Authentication */
  setAuthedUser(authedUser: any) {
    this.AuthedUser = authedUser;
  }
  getAuthedUser() {
    console.log(this.AuthedUser);
    return this.AuthedUser;
  }
  login(authedUser: any) {
    this.setAuthedUser(authedUser);
  }
  logout() {
    this.setAuthedUser(null);
    console.log(this.AuthedUser);
    this.router.navigate(['/mainMenu']);
  }

  /*Courses */
  async getCourseNames() {
    const names = await GetCoursesname();
    return names;
  }
  async GetCourseDetails(courseName: any): Promise<any> {
    const co = await this.getCourses();
    for (let i = 0; i < co.length; i++) {
      if (courseName === co[i].courseName) return co[i];
    }
    return null;
  }
  async deleteusers(uNames: string[]): Promise<void> {
    const co = await this.getCourses();
    for (let i = 0; i < uNames.length; i++) {
      deleteuser(uNames[i]);
    }
  }

  coursesAfterTheseOne(courseNames: string[], allCourse: any[]) {
    console.log('pre', courseNames, allCourse);
    let courses = new Set();
    for (let j = 0; j < courseNames.length; j++) {
      for (let i = 0; i < allCourse.length; i++) {
        if (allCourse[i].prerequisite.length < 2) {
          if (
            allCourse[i].courseName !== courseNames[j] &&
            allCourse[i].prerequisite.includes(courseNames[j])
          ) {
            courses.add(allCourse[i].courseName);
            console.log(allCourse[i].courseName);
          }
        } else {
          let allFound = true;
          for (let k = 0; k < allCourse[i].prerequisite.length; k++) {
            allFound = courseNames.includes(allCourse[i].prerequisite[k]);
          }
          if (allFound) {
            courses.add(allCourse[i].courseName);
            console.log(allCourse[i].courseName);
          }
        }
      }
    }
    for (let i = 0; i < allCourse.length; i++) {
      if (
        allCourse[i].prerequisite.length === 0 &&
        !courseNames.includes(allCourse[i].courseName)
      ) {
        courses.add(allCourse[i].courseName);
        console.log(allCourse[i].courseName);
      }
    }
    return Array.from(courses);
  }
  /*Manage Users */
  async GetAllSystemUsernames(): Promise<string[]> {
    const output = await Getuseraccepted();

    return output;
  }
  async getAllUsersWaitingApproval(): Promise<string[]> {
    const output = await Getuserspending();
    return output;
  }
  async acceptuser(mails: string[]) {
    for (let j = 0; j < mails.length; j++) {
      approveeuser(mails[j]);
    }
  }
  async addcoursetodatabase(cour: any) {
    await addcourse(cour);
  }
}
