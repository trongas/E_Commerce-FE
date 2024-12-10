import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    return !!user;
  }

  // Save JWT token to sessionStorage or localStorage
  public saveToken(token: string): void {
    window.sessionStorage.setItem(TOKEN_KEY, token);
    // or window.localStorage.setItem(TOKEN_KEY, token); for persistence
  }
  getToken() {
      const token = localStorage.getItem('token');
      console.log('Token from JWT cookie:', token);
      return token;
  }
  

  // Remove the JWT token from storage
  public removeToken(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    // or window.localStorage.removeItem(TOKEN_KEY); for persistence
  }

  // // Check if the JWT token is valid (not expired)
  // public isTokenValid(): boolean {
  //   const token = this.getToken();
  //   if (token) {
  //     const payload = this.decodeJwt(token);
  //     if (payload) {
  //       const currentTime = Math.floor(new Date().getTime() / 1000); // Current time in seconds
  //       return payload.exp > currentTime; // Check if token is still valid
  //     }
  //   }
  //   return false;
  // }

  // Decode JWT token (without verifying signature)
  private decodeJwt(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error('Error decoding JWT token', e);
      return null;
    }
  }
}
