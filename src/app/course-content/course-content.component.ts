import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css'],
})
export class CourseContentComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
  courses = [
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
  selected_id = this.route.snapshot.paramMap.get('id');
  selectedCourse=this.courses.filter((course) => course.id === this.selected_id);
  
}
