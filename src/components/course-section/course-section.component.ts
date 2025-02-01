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
      heading: 'Building Management Systems (BMS) Certification Program',
      description: "Learn core BMS concepts with hands-on training on real systems. Gain industry-relevant skills and secure internship opportunities to kickstart your career.",
    },
    {
      heading: 'Advanced BMS Systems & Automation Training',
      description: 'Specialize in advanced BMS technologies and automation. Master system integration and troubleshooting to advance your career in the BMS industry.',
    },
  ];
}
