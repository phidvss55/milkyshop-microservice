import { TokenService } from 'src/app/services/token.service';
import { AuthService } from './../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  }

  public error = null;

  constructor(
    private authService: AuthService,
    private token: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.loginAdmin(this.form).subscribe( 
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.token.handleTokenAdmin(data.access_token); //handle token when login success
    this.authService.adminChangeAuthStatus(true);
    this.router.navigateByUrl('/admin');
  }

  handleError(error) {
    this.error = error.error.message;
  }
}
