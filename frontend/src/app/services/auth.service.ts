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

  private adminLoggedIn = new BehaviorSubject<boolean>(this.Token.adminLoggedIn());
  adminAuthStatus = this.adminLoggedIn.asObservable();

  data: any;

  private baseHomeUrl = 'http://localhost:8000/home';
  private baseAdminUrl = 'http://localhost:8000/admin';

  constructor(
    private httpClient: HttpClient,
    private Token: TokenService
  ) { }

  //AUTHENTICATION FOR HOME
  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  //AUTHENTICATION FOR ADMIN
  adminChangeAuthStatus(value: boolean) {
    this.adminLoggedIn.next(value);
  }

  getDataUser(email) {
    return this.httpClient.post(`${this.baseHomeUrl}/get`, email);
  }

  signup(data) {
    return this.httpClient.post(`${this.baseHomeUrl}/signup`, data);
  }
  
  login(data) {
    return this.httpClient.post(`${this.baseHomeUrl}/login`, data);
  }

  resetPassword(data) {
    return this.httpClient.post(`${this.baseHomeUrl}/change-password`, data);
  }

  updateInfor(id, data) {
    return this.httpClient.post(`${this.baseHomeUrl}/update/` + id, data);
  }

  //AUTHENTICATION FOR ADMIN
  loginAdmin(data) {
    return this.httpClient.post(`${this.baseAdminUrl}/login`, data);
  }

  getAdmin(token) {
    return this.httpClient.get(`${this.baseAdminUrl}/get/` + token);
  }
}
