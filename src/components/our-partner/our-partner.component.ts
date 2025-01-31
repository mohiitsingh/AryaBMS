import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-our-partner',
  imports: [CommonModule],
  templateUrl: './our-partner.component.html',
  styleUrl: './our-partner.component.css'
})
export class OurPartnerComponent {
  partnerImages: string[] = [
    // '/public/logo/logo1.jpg',
    // 'assets/partner2.jpg',
    // '/public/logo/logo1.jpg',
    // 'assets/partner4.jpg',
  ];

  @ViewChild('scrollingContainer') scrollingContainer: ElementRef | undefined;

  ngOnInit(): void {
    const imagesClone = [...this.partnerImages];
    this.partnerImages = [...this.partnerImages, ...imagesClone];
  }

  ngAfterViewInit(): void {
    if (this.scrollingContainer) {
      const scrollerElement: HTMLElement = this.scrollingContainer.nativeElement;
      const images: NodeListOf<HTMLImageElement> = scrollerElement.querySelectorAll('img');

      images.forEach((image: HTMLImageElement) => {
        const clonedImage: HTMLImageElement = image.cloneNode(true) as HTMLImageElement;
        scrollerElement.appendChild(clonedImage);
      });
    } else {
      console.error('Scrolling container not found!');
    }
  }

}
