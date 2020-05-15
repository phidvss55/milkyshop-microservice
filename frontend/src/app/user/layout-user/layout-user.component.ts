import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.css']
})
export class LayoutUserComponent implements OnInit {

  constructor( private elementRef: ElementRef ) { }

  ngOnInit(): void {
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
