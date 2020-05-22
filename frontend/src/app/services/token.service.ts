import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://localhost:8000/home/login',
    signup: 'http://localhost:8000/home/signup'
  }

  constructor( ) { }

  handleEmail(email) {
    localStorage.setItem('user_email', email);
  }

  getEmail() {
    return localStorage.getItem('user_email');
  }

  handle(token) {
    this.set(token);
    // console.log(this.payload(token));
    // console.log(this.isValid());
  }

  set(token) {
    localStorage.setItem('token_user', token);
  }
  
  get() {
    return localStorage.getItem('token_user');
  }

  remove() {
    localStorage.removeItem('user_email')
    localStorage.removeItem('token_user');
  }

  isValid() {
    const token = this.get();
    if(token) {
      const payload = this.payload(token);
      if(payload) {
        // return (payload.iss === 'http://localhost:8000/api/home/login') ? true : false;
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() { //đã login
    return this.isValid();
  }

  ///////////////////////////////ADMIN
  handleTokenAdmin(token) {
    localStorage.setItem('token_admin', token);
  }

  getTokenAdmin() {
    return localStorage.getItem('token_admin');
  }

  removeTokenAdmin() {
    localStorage.removeItem('token_admin');
  }

  adminLoggedIn() { //đã login
    // return this.adminIsValid();
    const token = this.getTokenAdmin();
    if(token) {
      return true;
    }
    return false;
  }

  adminIsValid() {
    const token = this.getTokenAdmin();
    if(token) {
      const payload = this.adminPayload(token);
      if(payload) {
        // return (payload.iss === 'http://localhost:8000/api/home/login') ? true : false;
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  adminPayload(token) {
    const payload = token.split('.')[1];
    return this.adminDecode(payload);
  }

  adminDecode(payload) {
    return JSON.parse(atob(payload));
  }
}
