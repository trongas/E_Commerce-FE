import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/_services/wishlist/wishlist.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss'],
})
export class BestSellerComponent {
  wishlist: any[] = [];
  products = [
    {
      id: 1,
      image: 'assets/image/products/coat.png',
      name: 'The North Coat',
      salePrice: 360,
      originalPrice: 260,
      rating: 4.5,
      totalRatings: 200,
    },
    {
      id: 2,
      image: 'assets/image/products/bag.png',
      name: 'Gucci duffle bag',
      salePrice: 1160,
      originalPrice: 960,
      rating: 4,
      totalRatings: 200,
    },
    {
      id: 3,
      image: 'assets/image/products/CPU.png',
      name: 'RGB liquid CPU Cooler',
      salePrice: 170,
      originalPrice: 170,
      rating: 4.7,
      totalRatings: 100,
    },
    {
      id: 4,
      image: 'assets/image/products/bookself.png',
      name: 'Small BookSelf',
      salePrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.7,
      totalRatings: 200,
    },
  ];

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private wishlistService: WishlistService
  ) {}
  
  navigateToProductDetails(product: any) {
    if (!product || !product.id) {
      this.toastr.error('Product details are unavailable.');
      return;
    }

    // Điều hướng sang ProductDetailComponent với ID sản phẩm
    this.router.navigate(['/product-details', product.id]);
  }
  loadWishlist(): void {
    // Load the wishlist for the user from the WishlistService
    this.wishlistService.getWishlist().subscribe((wishlist) => {
      this.wishlist = wishlist;
    });
  }

  addToWishlist(product: any): void {
    const exists = this.wishlist.some(item => item.id === product.id);
    if (!exists) {
      this.wishlist.push(product);
      alert(`${product.name} has been added to your wishlist!`);
      this.router.navigate(['/wishlist', product.id]);
    } else {
      alert(`${product.name} is already in your wishlist.`);
    }
  }
  getNumVisible() {
    if (window.innerWidth >= 1024) {
      return 4; // 4 products visible for large screens
    } else if (window.innerWidth >= 768) {
      return 2; // 2 products for tablets
    } else {
      return 1; // 1 product for mobile
    }
  }
  
  
}
