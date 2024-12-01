import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  // Carousel items
  carouselItems = [
    {
      image: 'assets/image/ip14.png',
      title: 'iPhone 14 Series',
      description: 'Up to 10% off Voucher',
      link: '/iphone-14',
      icon: 'pi pi-apple ',
    },

    {
      image: 'assets/image/ip15.jpeg',
      title: 'iPhone 15 Series',
      description: 'Up to 15% off Voucher',
      link: '/iphone-15',
      icon: 'pi pi-apple ',
    },

    {
      image: 'assets/image/headphone.jpeg',
      title: 'Premium Headphones Sale',
      description: 'Up to 20% off Voucher',
      link: '/',
      icon: 'pi pi-headphones',
    },

    {
      image: 'assets/image/ip16.jpeg',
      title: 'iPhone 16 Series',
      description: 'Up to 16% off Voucher',
      link: '/iphone-16',
      icon: 'pi pi-apple ',
    },

    {
      image: 'assets/image/pc.jpeg',
      title: 'Super Fast PC Deals',
      description: 'Up to 30% off Desktops',
      link: '/pc-deals',
      icon: 'pi pi-desktop',
    },
  ];

  // Handle click on a carousel item
  onItemClick(item: any): void {
    console.log('Clicked item:', item);
    window.location.href = item.link; // Navigate to the item's link
  }
}
