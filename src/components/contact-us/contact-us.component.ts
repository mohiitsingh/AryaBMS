import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
  
})
export class ContactUsComponent {
  formData = {
    email: '',
    phone: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
    // Check if there's data in localStorage and populate the form fields
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      this.formData = JSON.parse(savedData);
    }
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission

    // Save form data to localStorage
    localStorage.setItem('contactFormData', JSON.stringify(this.formData));

    // Optionally, show a success message or reset the form
    console.log('Form data saved to localStorage:', this.formData);

    // Optionally, reset the form after submission
    this.formData = { email: '', phone: '', message: '' };
  }
}


