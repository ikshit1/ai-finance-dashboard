import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private apiUrl =
    'http://localhost:4000/api/auth';

  constructor(
    private http: HttpClient
  ) {}

  register(data: {
    name: string;
    email: string;
    password: string;
  }): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/register`,
      data
    );

  }

  login(data: {
    email: string;
    password: string;
  }): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/login`,
      data
    );

  }

  getMe(): Observable<User> {

    return this.http.get<User>(
      `${this.apiUrl}/me`
    );

  }

  saveToken(token: string): void {

    localStorage.setItem(
      'token',
      token
    );

  }

  getToken(): string | null {

    return localStorage.getItem(
      'token'
    );

  }

  isLoggedIn(): boolean {

    return !!this.getToken();

  }

  logout(): void {

    localStorage.removeItem(
      'token'
    );

  }
}
