import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  currentIndex: number = 0;
  reviews = [
    { name: "John Doe", image: "assets/student1.jpg", review: "This institute has transformed my learning experience. The instructors are excellent and the courses are very engaging!" },
    { name: "Jane Smith", image: "assets/student2.jpg", review: "I have learned so much during my time here. The hands-on experience and supportive environment made all the difference!" },
    { name: "Michael Brown", image: "assets/student3.jpg", review: "Fantastic place to study! The instructors are friendly and the atmosphere is welcoming. I highly recommend this institute." },
    { name: "Emily White", image: "assets/student4.jpg", review: "The best decision I ever made! The curriculum is well-structured, and I feel confident about my career after finishing here." }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goToPrevious(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.reviews.length - 2; // If at the beginning, jump to the second last review.
    }
  }

  goToNext(): void {
    if (this.currentIndex < this.reviews.length - 2) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // If at the last, jump back to the first review.
    }
  }
}
