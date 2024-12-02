import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
    @Input() wishlist: any[] = [];

    removeFromWishlist(product: any): void {
      const index = this.wishlist.findIndex(item => item.id === product.id);
      if (index > -1) {
        this.wishlist.splice(index, 1);
      }
    }
}
