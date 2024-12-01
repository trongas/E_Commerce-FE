import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  wishlistItems = [
    // Sample items (replace with data from a service or API)
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a sample product',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is another sample product',
      image: 'https://via.placeholder.com/150',
    },
  ];

  removeFromWishlist(item: any) {
    this.wishlistItems = this.wishlistItems.filter(i => i.id !== item.id);
    console.log('Removed from wishlist:', item);
  }
}
