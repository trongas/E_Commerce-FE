import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserEnviroment } from 'src/app/enviroments/enviroment';
import { Product } from 'src/app/shared/models/product.model';
import { ProductResponse } from 'src/app/shared/models/response/product-response.model';
import { PaginatedResponse } from 'src/app/shared/models/response/paginated-response.model';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = `${UserEnviroment.apiUrl}/products`;

  constructor(private http: HttpClient) {}
  getHttpOptions() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
      withCredentials: true,
    };
  }
  
  // Lấy tất cả sản phẩm
  getAllProducts(
    name: string,
    status: boolean,
    pageNumber: number,
    pageSize: number
  ): Observable<PaginatedResponse<ProductResponse>> {
    const params = {
      name: name || '',
      status: status.toString(),
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString(),
      sortField: 'productName',
      sortDirection: 'ASC',
    };

    return this.http.get<PaginatedResponse<ProductResponse>>(this.apiUrl, {
      params,
      ...this.getHttpOptions(),
    });
  }
  // Tìm sản phẩm theo id
  getProductById(id: number): Observable<Product> {
    return this.http
      .get<Product>(`${this.apiUrl}/${id}`, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  // Thêm sản phẩm
  addProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>(this.apiUrl, product, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  // Cập nhật sản phẩm
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http
      .put<Product>(`${this.apiUrl}/${id}`, product, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  // Xóa sản phẩm
  deleteProduct(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  // Error handler
  private handleError(error: any): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server returned code: ${error.status}, message: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
  
}
