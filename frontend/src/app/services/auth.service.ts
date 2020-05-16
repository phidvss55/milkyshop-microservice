import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data: any;
  private baseUrl = 'http://localhost:8000/api/home';

  constructor(
    private httpClient: HttpClient
  ) { }

  signup(data) {
    return this.httpClient.post(`${this.baseUrl}/signup`, data);
  }
  
  login(data) {
    return this.httpClient.post(`${this.baseUrl}/login`, data);
  }
}
