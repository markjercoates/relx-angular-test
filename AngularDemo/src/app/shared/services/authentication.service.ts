// Angular Modules
import { Injectable } from '@angular/core';

// Internal Modules
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authTokenKey = 'authToken';
  private isAuthenticated$ = new BehaviorSubject<boolean>(this.hasToken());

  constructor() { }

  // Check if token exists
  private hasToken(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  // Observable to get authentication status
  public get isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  // Method to authenticate and set token
  public login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') { // Mock login
      localStorage.setItem(this.authTokenKey, 'mock-token');
      this.isAuthenticated$.next(true);
      return true;
    }
    return false;
  }

  // Logout method to clear token
  public logout() {
    localStorage.removeItem(this.authTokenKey);
    this.isAuthenticated$.next(false);
  }
}
