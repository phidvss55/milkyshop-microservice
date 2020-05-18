import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  data: any;
  private baseUrl = 'http://localhost:8000/home';

  constructor(
    private httpClient: HttpClient,
    private Token: TokenService
  ) { }

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  signup(data) {
    return this.httpClient.post(`${this.baseUrl}/signup`, data);
  }
  
  login(data) {
    return this.httpClient.post(`${this.baseUrl}/login`, data);
  }

  resetPassword(data) {
    return this.httpClient.post(`${this.baseUrl}/change-password`, data);
  }
}
