import { TokenService } from './../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedIn: boolean;

  constructor(
    private auth: AuthService,
    private router: Router,
    private token: TokenService
  ) { }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event : MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/home');
  }
}
