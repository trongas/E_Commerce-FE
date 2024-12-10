import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/_services/product/product.service';
import { PaginatedResponse } from 'src/app/shared/models/response/paginated-response.model';
import { ProductResponse } from 'src/app/shared/models/response/product-response.model';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: ProductResponse[] = [];
  name: string = '';
  status: boolean = true;
  pageNumber: number = 0;
  pageSize: number = 10;
  totalPages: number = 0; // Add this property
  totalItems: number = 0; // Add this property

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService
      .getAllProducts(this.name, this.status, this.pageNumber, this.pageSize)
      .subscribe((response: PaginatedResponse<ProductResponse>) => {
        this.products = response.content; // Assuming "content" contains the list of products
        this.totalPages = response.totalPages; // Optional: Use for pagination controls
        this.totalItems = response.totalElements; // Optional: Use for display purposes
        console.log(this.products);
      });
  }

  onSearch(): void {
    this.loadProducts();
  }

  onPageChange(page: number): void {
    if (page < 0 || page >= this.totalPages) return; // Prevent out-of-bounds navigation
    this.pageNumber = page;
    this.loadProducts();
  }
  

  getNumVisible(): number {
    const width = window.innerWidth;
    if (width >= 1280) return 4; // Large desktop
    if (width >= 1024) return 3; // Desktop
    if (width >= 768) return 2;  // Tablet
    return 1; // Mobile
  }
  

  navigateToProductDetails(product: any) {
    if (!product || !product.id) {
      this.toastr.error('Product details are unavailable.');
      return;
    }

    // Điều hướng sang ProductDetailComponent với ID sản phẩm
    this.router.navigate(['/product-details', product.id]);
  }

  // addToWishlist(product: ProductResponse): void {
  //   if (!product) {
  //     this.toastr.error('Unable to add to wishlist. Product is missing.');
  //     return;
  //   }
  //   // Call a wishlist service or update local state
  //   this.wishlist.removeFromWishlist(product); // Assuming `wishlist` is a service or component handling wishlists
  //   this.toastr.success(`${product.productName} has been added to your wishlist!`);
  // }
  
}
