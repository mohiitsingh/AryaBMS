import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { HeroComponent } from "../components/hero/hero.component";
import { AboutComponent } from "../components/about/about.component";
import { CourseSectionComponent } from "../components/course-section/course-section.component";
import { CourseComponent } from '../components/course/course.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, AboutComponent, CourseSectionComponent, CourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AryaBMS';
}
