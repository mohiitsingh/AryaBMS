import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us-section',
  imports: [CommonModule],
  templateUrl: './why-us-section.component.html',
  styleUrl: './why-us-section.component.css'
})
export class WhyUsSectionComponent {
  activeContent: string = 'facilities'; 

  showContent(content: string): void {
    this.activeContent = content;
  }
}
