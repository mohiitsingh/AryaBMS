import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { HeroComponent } from "../components/hero/hero.component";
import { AboutComponent } from "../components/about/about.component";
import { CourseSectionComponent } from "../components/course-section/course-section.component";
import { CourseComponent } from '../components/course/course.component';
import { WhyUsSectionComponent } from "../components/why-us-section/why-us-section.component";
import { OurPartnerComponent } from "../components/our-partner/our-partner.component";
import { FooterComponent } from "../components/footer/footer.component";
import { ContactUsComponent } from "../components/contact-us/contact-us.component";
import { ReviewComponent } from "../components/review/review.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, AboutComponent, CourseSectionComponent, CourseComponent, WhyUsSectionComponent, OurPartnerComponent, FooterComponent, ContactUsComponent, ReviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AryaBMS';
}
