import { HomeService } from './../../../services/home/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  dataArr: any;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
  
  }
}
