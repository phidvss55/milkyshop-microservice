import { Observable } from 'rxjs';
import { TokenService } from './../token.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate {

  constructor(
    private token: TokenService,
    private router: Router,
    private location: Location,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    if(!this.token.loggedIn()) {
      return !this.token.loggedIn();
    } else {
      this.location.replaceState('/');
      alert(" Bạn đã đăng nhập nên không thể thực hiện hoạt động này. ");
      this.router.navigate(['/home']);
      return !this.token.loggedIn();
    }
    
  }
}
