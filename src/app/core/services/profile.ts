import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Profile {
  private apiUrl =
    'http://localhost:4000/api/profile';

  constructor(
    private http: HttpClient
  ) {}

  getProfile() {

    return this.http.get(
      this.apiUrl
    );

  }

  saveProfile(data:any) {

    return this.http.post(
      this.apiUrl,
      data
    );

  }
}
