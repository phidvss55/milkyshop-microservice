import { HomeService } from './../services/home/home.service';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  totalProduct: any;
  totalMoney: number = 0;
  totalInMoney: number = 0;

  constructor(
    private dataService: DataService,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getTransaction();
    this.getProducts();
  }

  getTransaction() {
    this.dataService.getTransaction().subscribe(
      data => this.getTotalInMoney(data),
      error => console.log(error) 
    )
  }

  getTotalInMoney(data) {
    data.forEach(ele => {
      this.totalInMoney += ele.tr_total;
    });
  }

  getProducts() {
    this.dataService.getProduct().subscribe(
      data => this.handleData(data),
      error => console.log(error),
    );
  }
  handleData(data) {
    this.totalProduct = data.length;
    data.forEach(ele => {
      this.totalMoney += ele.pro_price * ele.pro_number;
    });
  }
}
