import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/_services/wishlist/wishlist.service';

@Component({
  selector: 'app-flash-sales',
  templateUrl: './flash-sales.component.html',
  styleUrls: ['./flash-sales.component.scss'],
})
export class FlashSalesComponent implements OnInit {
  selectedProduct: any;
  isModalOpen = false;

  timer = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  endTime = new Date('2024-12-02T23:59:59');
  products = [
    {
      id: 1,
      image: 'assets/image/products/Gamepad.png',
      name: 'HAVIT HV-G92 Gamepad',
      salePrice: 120,
      originalPrice: 160,
      discount: 40,
      rating: 4.5,
      totalRatings: 200,
    },
    {
      id: 2,
      image: 'assets/image/products/Ak-900Keyboard.png',
      name: 'AK-900 Wired Keyboard',
      salePrice: 60,
      originalPrice: 100,
      discount: 35,
      rating: 4,
      totalRatings: 200,
    },
    {
      id: 3,
      image: 'assets/image/products/IPSLCDGamingMonitor.png',
      name: 'IPS LCD Gaming Monitor',
      salePrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.7,
      totalRatings: 200,
    },
    {
      id: 4,
      image: 'assets/image/products/Chair.png',
      name: 'IPS LCD Gaming Monitor',
      salePrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.7,
      totalRatings: 200,
    },
    {
      id: 5,
      image: 'assets/image/products/Gamepad.png',
      name: 'Iphone 14 Pro Max ds as  aewfssdgasgda af',
      salePrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5,
      totalRatings: 200,
    },
    {
      Id: 6,
      image: 'assets/image/products/IPSLCDGamingMonitor.png',
      name: 'IPS LCD Gaming Monitor',
      salePrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.7,
      totalRatings: 200,
    },
    {
      id: 7,
      image: 'assets/image/products/Chair.png',
      name: 'IPS LCD Gaming Monitor',
      salePrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.7,
      totalRatings: 200,
    },
    {
      id: 8,
      image: 'assets/image/products/Gamepad.png',
      name: 'Iphone 14 Pro Max',
      salePrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5,
      totalRatings: 200,
    },
    {
      id: 9,
      image: 'assets/image/products/Chair.png',
      name: 'IPS LCD Gaming Monitor',
      salePrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.7,
      totalRatings: 200,
    },
    {
      id: 10,
      image: 'assets/image/ip14.png',
      name: 'Iphone 14 Pro Max',
      salePrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5,
      totalRatings: 200,
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 2,
      numScroll: 1,
    },
  ];

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private wishlistService: WishlistService
  ) {}
  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    setInterval(() => {
      const now = new Date().getTime();
      const timeDiff = this.endTime.getTime() - now;

      if (timeDiff > 0) {
        this.timer.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        this.timer.hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.timer.minutes = Math.floor(
          (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.timer.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      } else {
        this.timer = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    }, 1000); // Update every second
  }

  navigateToProductDetails(product: any) {
    if (!product || !product.id) {
      this.toastr.error('Product details are unavailable.');
      return;
    }
  
    // Điều hướng sang ProductDetailComponent với ID sản phẩm
    this.router.navigate(['/product-details', product.id]);
  }
  

  closeModal() {
    this.isModalOpen = false;
    this.selectedProduct = null;
    console.log('Modal closed.');
  }

  addToWishlist(product: any) {
    if (!product) {
      this.toastr.error('Unable to add to wishlist.');
      return;
    }
  
    // Example of adding to a wishlist (could be a service call)
    console.log('Added to wishlist:', product);
    this.toastr.success(`${product.name} added to your wishlist!`);
  }
  

  // Example logic to open a modal (optional)
  openModal() {
    // Modal implementation (could use a library like ngx-bootstrap, Angular Material, or custom modal)
    console.log('Opening modal for:', this.selectedProduct);
  }
}
