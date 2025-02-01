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
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      this.formData = JSON.parse(savedData);
    }
  }

  onSubmit(event: Event) {
    event.preventDefault(); 

    localStorage.setItem('contactFormData', JSON.stringify(this.formData));

    console.log('Form data saved to localStorage:', this.formData);

    this.formData = { email: '', phone: '', message: '' };
  }
}


