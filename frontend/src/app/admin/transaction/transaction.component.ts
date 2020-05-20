import { DataService } from './../../services/data.service';
import { HomeService } from './../../services/home/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  dataArr: any;
  userArr: any;

  constructor(
    private homeService: HomeService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getTransactions();
    this.getUserData();
  }

  getUserData() {
    this.dataService.getUser().subscribe(
      data => this.handleUserData(data),
      error => console.log(error),
    );
  }

  handleUserData(data) {
    console.log(data);
    this.userArr = data;
  }

  getTransactions() {
    this.homeService.getTransaction().subscribe(
      data => this.handleData(data),
      error => console.log(error)
    );
  }
  handleData(data) {
    console.log(data);
    this.dataArr = data;
  }
}
