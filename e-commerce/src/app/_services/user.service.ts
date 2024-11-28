import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service'; // Import StorageService to get the token

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  private getAuthHeaders(): HttpHeaders {
    // Get the JWT token from storage (sessionStorage/localStorage)
    const token = this.storageService.getToken();

    // If token exists, create Authorization header
    if (token) {
      return new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
    }

    // If no token, return an empty header
    return new HttpHeaders();
  }

  getPublicContent(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(API_URL + 'all', {
      headers,
      withCredentials: true,
      responseType: 'text',
    });
  }

  getUserBoard(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(API_URL + 'user', {
      headers,
      withCredentials: true,
      responseType: 'text',
    });
  }

  getModeratorBoard(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(API_URL + 'mod', {
      headers,
      withCredentials: true,
      responseType: 'text',
    });
  }

  getAdminBoard(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(API_URL + 'admin', {
      headers,
      withCredentials: true,
      responseType: 'text',
    });
  }
}
