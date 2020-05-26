import { AuthService } from './../../services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.css']
})
export class LayoutUserComponent implements OnInit {

  dataArr: any;
  imageDirectoryPath = 'http://localhost:8000/image/user/';

  constructor( 
    private elementRef: ElementRef,
    private token: TokenService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    var obj = {
      "email": this.token.getEmail()
    }
    this.auth.getDataUser(obj).subscribe( 
      data => this.handleData(data),
      error => console.log(error),
    );
  }

  handleData(data) {
    this.dataArr = data;
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
