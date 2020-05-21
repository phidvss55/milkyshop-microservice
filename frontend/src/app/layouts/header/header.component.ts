import { DataService } from './../../services/data.service';
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
  suppliersArr: any;
  categoriesArr: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private token: TokenService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getSupplier();
    this.getCategories();
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  getSupplier() {
    this.dataService.getSupplier().subscribe(
      data => this.passSupplier(data),
      error => console.log(error)
    )
  }

  passSupplier(data) {
    this.suppliersArr = data;
  }
  
  getCategories() {
    this.dataService.getCategory().subscribe(
      data => this.passCategory(data),
      error => console.log(error)
    )
  }

  passCategory(data) {
    this.categoriesArr = data;
  }

  logout(event : MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/home');
  }
}
