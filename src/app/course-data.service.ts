import { Injectable } from '@angular/core';

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

  getCourseNames() {
    return ['Data Structure', 'OOP', 'Algorithms', 'UID', 'Web Development'];
  }
  getCourses() {
    return [
      {
        id: '1',
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
          {
            title: 'week 2',
            numberOfVideos: 7,
            toReadNumber: 5,
            quizzes: 1,
            estimatedTime: 14,
          },
          {
            title: 'week 3',
            numberOfVideos: 9,
            toReadNumber: 7,
            quizzes: 1,
            estimatedTime: 16,
          },
          {
            title: 'week 4',
            numberOfVideos: 3,
            toReadNumber: 1,
            quizzes: 0,
            estimatedTime: 4,
          },
        ],
      },
    ];
  }
  getAuthedUserAdmin() {
    return {
      name: 'Ain Shams University',
      email: 'asd@gmail.com',
      type: 'admin',
      all_courses: ['OOP', 'ALGO'],
      all_system_users: ['FCIS', 'Abadeer Afif'],
      student_registration_pending_approval: [
        {
          student_name: 'Abadeer Afif',
          course_name: 'System Design and Architecture',
        },
        {
          student_name: 'Peter George',
          course_name: 'Vue Js',
        },
        {
          student_name: 'Peter Magdy',
          course_name: 'Introduction to Programming',
        },
      ],
    };
  }
  AuthedUser = {
    name: 'asd',
    email: 'asd@gmail.com',
    type: /*one of ['admin', 'faculty','student']*/ 'student',
    enrolledCourses: ['da', 'asd', 'asd'], //if student
    allCourses: ['da', 'asd', 'asd'], //if faculty or admin,
    allUsersOfSystem: ['da', 'asd', 'asd'], //if admin -> array of users [they have the type attribute]
    registering_course_pending_approval: 'msh 3aref hateb2a 3amla ezay', //users me2adimin 3ala course
  };
}
