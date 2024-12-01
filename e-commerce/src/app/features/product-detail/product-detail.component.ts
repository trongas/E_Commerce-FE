import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  relatedItems: any[] = [];
  quantity: number = 1;
  selectedColor: string | null = null;
  selectedSize: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.loadProductDetails(productId);
    this.loadRelatedItems();
  }

  loadProductDetails(productId: string | null): void {
    // Giả lập dữ liệu sản phẩm
    this.product = {
      id: productId,
      name: 'Havic HV G-92 Gamepad',
      price: 192.0,
      originalPrice: null,
      rating: 4,
      totalReviews: 160,
      inStock: true,
      description:
        'PlayStation 5 Controller Skin. High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.',
      image: 'assets/image/products/Gamepad.png',

      additionalImages: [
        'assets/image/products/Gamepad.png',
        'assets/image/products/Gamepad.png',
        'assets/image/products/Gamepad.png'
      ],
      colors: ['#fff', '#000', '#ff0000'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
    };
  }

  loadRelatedItems(): void {
    this.relatedItems = [
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
  }

  selectImage(img: string): void {
    this.product.image = img;
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart(): void {
    console.log('Product added to cart:', this.product, this.quantity);
  }
}
