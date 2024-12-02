import { Component } from '@angular/core';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.scss'],
})
export class CategoryGridComponent {
  categories = [
    { name: 'Phones', icon: 'pi-mobile', active: false },
    { name: 'Computers', icon: 'pi-desktop', active: false },
    { name: 'SmartWatch', icon: 'pi-clock', active: false },
    { name: 'Camera', icon: 'pi-camera', active: true },
    { name: 'HeadPhones', icon: 'pi-headphones', active: false },
    { name: 'Phones', icon: 'pi-mobile', active: false },
    { name: 'Computers', icon: 'pi-desktop', active: false },
    { name: 'SmartWatch', icon: 'pi-clock', active: false },
    { name: 'HeadPhones', icon: 'pi-headphones', active: false },
  ];

  scrollLeft() {
    const grid = document.querySelector('.flex.overflow-x-auto') as HTMLElement;
    grid.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    const grid = document.querySelector('.flex.overflow-x-auto') as HTMLElement;
    grid.scrollBy({ left: 200, behavior: 'smooth' });
  }
}
