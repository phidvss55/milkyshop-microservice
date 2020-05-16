import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://localhost:8000/api/home/login',
    signup: 'http://localhost:8000/api/home/signup'
  }

  constructor() { }

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

  loggedIn() {
    return this.isValid();
  }
}
