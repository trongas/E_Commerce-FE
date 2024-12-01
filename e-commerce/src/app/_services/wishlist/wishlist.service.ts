import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private apiUrl = 'https://api.example.com/wishlist'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  addProductToWishlist(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, product);
  }

  getWishlist(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  removeProductFromWishlist(productId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove/${productId}`);
  }
}
