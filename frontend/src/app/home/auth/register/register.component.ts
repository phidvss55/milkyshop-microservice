import { TokenService } from './../../../services/token.service';
import { AuthService } from './../../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    email: null, 
    name: null,
    phone: null,
    password: null
  }

  public error: any;

  constructor(
    private authService: AuthService,
    private token: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.token.handleEmail(data.user.email); //save to localstorage
    this.token.handle(data.access_token);
    this.authService.changeAuthStatus(true);
    this.router.navigateByUrl('/home');
  }

  handleError(error) {
    this.error = error.error.errors.email;
  }
}
