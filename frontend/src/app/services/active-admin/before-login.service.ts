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

    if(!this.token.adminLoggedIn()) {
      return !this.token.adminLoggedIn();
    } else {
      this.location.replaceState('/');
      this.router.navigate(['/admin/login']);
      return !this.token.adminLoggedIn();
    }
    
  }
}
