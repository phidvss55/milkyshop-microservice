import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {

  constructor(
    private token: TokenService,
    private router: Router,
    private location: Location,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this.token.loggedIn()) {
      return this.token.loggedIn();
    } else {
      this.location.replaceState('/');
      alert(" Bạn phải đăng nhập trước khi thực hiện hoạt động này. ");
      this.router.navigate(['/home']);
      return this.token.loggedIn();
    }
  }
}
