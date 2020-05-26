import { TokenService } from 'src/app/services/token.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  name: any;

  constructor(
    private elementRef: ElementRef,
    private authService: AuthService,
    private token: TokenService,
    private router: Router,
    private auth: AuthService

  ) { }

  ngOnInit(): void {
    this.getAdmin();
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.token.removeTokenAdmin();
    this.auth.adminChangeAuthStatus(false);
    this.router.navigateByUrl('/admin/login');
  }

  getAdmin() {
    this.authService.getAdmin(this.token.getTokenAdmin()).subscribe(res => {
      this.name = res;
    });
  }

  ngAfterViewInit() {
    this.importnprogressCss();
    this.importGreenCss();
    this.importbootstrapProgressbarCss();
    this.importMyCss();
    this.importCustomCss();
  }

  importCustomCss() {
    var style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = './assets/theme_admin/css/custom.min.css';
    this.elementRef.nativeElement.appendChild(style);
  }

  importGreenCss() {
    var style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = './assets/theme_admin/css/green.css';
    this.elementRef.nativeElement.appendChild(style);
  }

  importMyCss() {
    var style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = './assets/theme_admin/css/mycss.css';
    this.elementRef.nativeElement.appendChild(style);
  }

  importnprogressCss() {
    var style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = './assets/theme_admin/css/nprogress.css';
    this.elementRef.nativeElement.appendChild(style);
  }

  importbootstrapProgressbarCss() {
    var style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = './assets/theme_admin/css/bootstrap-progressbar-3.3.4.min.css';
    this.elementRef.nativeElement.appendChild(style);
  }

}
