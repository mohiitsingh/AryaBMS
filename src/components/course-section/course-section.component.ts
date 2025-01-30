import { Component } from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-section',
  imports: [CourseComponent, CommonModule],
  templateUrl: './course-section.component.html',
  styleUrl: './course-section.component.css'
})
export class CourseSectionComponent {
  courses = [
    {
      heading: 'Angular Basics',
      description: 'Learn the fundamentals of Angular, including components, modules, and services.',
    },
    {
      heading: 'Advanced JavaScript',
      description: 'Dive deep into JavaScript concepts like closures, promises, and async/await.',
    },
  ];
}
