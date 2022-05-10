import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import {GetCourses,Getuseraccepted,Getuserspending,GetCoursesname} from '../app/firebasemodules/getingdatamodule'
import {signin} from '../app/firebasemodules/signinmodule'

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
  constructor() {}

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
      courseVideos: [[]],
      courseReadings: [[]],
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
    {
      prerequisite: [],
      courseVideos: [[]],
      courseReadings: [[]],
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
      courseName: 'DataStructure',
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
    {
      prerequisite: ['DataStructure'],
      courseVideos: [[]],
      courseReadings: [[]],
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
      courseName: 'Algorithms',
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
    {
      prerequisite: ['WebDevelopment'],
      courseVideos: [[]],
      courseReadings: [[]],
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
      courseName: 'UID',
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
    {
      prerequisite: [],
      courseVideos: [[]],
      courseReadings: [[]],
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
      courseName: 'WebDevelopment',
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
    const Courses=await GetCourses()
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

  AuthedUser: any = {
    name: 'Ain Shams University',
    email: 'ASU@gmail.com',
    type: 'student',
    courses: ['WebDevelopment', 'DataStructure'],
  };

  /*Authentication */
  setAuthedUser(authedUser: any) {
    this.AuthedUser = authedUser;
  }
  getAuthedUser() {
    return this.AuthedUser;
  }
  login(authedUser: any) {
    this.setAuthedUser(authedUser);
  }
  logout() {
    this.setAuthedUser(null);
    console.log(this.AuthedUser);
  }

  /*Courses */
  async getCourseNames() {
    const names= await GetCoursesname()
    return names;
  }
  GetCourseDetails(courseName: any): any {
    for (let i = 0; i < this.allCourse.length; i++) {
      if (courseName === this.allCourse[i].courseName) return this.allCourse[i];
    }
    return null;
  }

  coursesAfterTheseOne(courseNames: string[]) {
    let courses = new Set();
    for (let j = 0; j < courseNames.length; j++) {
      for (let i = 0; i < this.allCourse.length; i++) {
        if (this.allCourse[i].prerequisite.length < 2) {
          if (
            this.allCourse[i].courseName !== courseNames[j] &&
            this.allCourse[i].prerequisite.includes(courseNames[j])
          ) {
            courses.add(this.allCourse[i].courseName);
            console.log(this.allCourse[i].courseName);
          }
        } else {
          let allFound = true;
          for (let k = 0; k < this.allCourse[i].prerequisite.length; k++) {
            allFound = courseNames.includes(this.allCourse[i].prerequisite[k]);
          }
          if (allFound) {
            courses.add(this.allCourse[i].courseName);
            console.log(this.allCourse[i].courseName);
          }
        }
      }
    }

    return Array.from(courses);
  }
  /*Manage Users */
  async GetAllSystemUsernames() :Promise<string[]>{
    const output=await Getuseraccepted()

    return output;
  }
  async getAllUsersWaitingApproval() :Promise<string[]>{
    const output=await Getuserspending()
    return output;
  }
}