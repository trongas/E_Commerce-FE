import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/_services/wishlist/wishlist.service';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss'],
})
export class OurProductsComponent implements OnInit {
  wishlist: any[] = [];
  chunkedProducts: any[][] = []; // Chunked product list for carousel

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
  ngOnInit(): void {
    this.chunkedProducts = this.chunkArray(this.products, 8);
  }

  chunkArray(array: any[], size: number): any[][] {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  }
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
    const exists = this.wishlist.some((item) => item.id === product.id);
    if (!exists) {
      this.wishlist.push(product);
      alert(`${product.name} has been added to your wishlist!`);
      this.router.navigate(['/wishlist', product.id]);
    } else {
      alert(`${product.name} is already in your wishlist.`);
    }
  }
  getNumVisible(): number {
    const width = window.innerWidth;
    if (width >= 1024) return 5; // Desktop
    if (width >= 768) return 3; // Tablet
    return 5; // Mobile
  }
}
