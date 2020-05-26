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
  userListArr: any;
  p: number = 1;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getTransactions();
    this.getUserList();
    this.getUserData();
  }

  getUserList() {
    this.dataService.getUser().subscribe ( res => {
      this.userListArr = res;
    })
  }

  resolveProblem(id) {
    var obj = {
      "id": id
    }
    this.dataService.resolveTransaction(obj).subscribe( res => {
      this.getTransactions();
    });
  }

  deleteTran(id) {
    this.dataService.deleteTransaction(id).subscribe( res => {
      this.getTransactions();
    })
  }

  getUserData() {
    this.dataService.getUser().subscribe(
      data => this.handleUserData(data),
      error => console.log(error),
    );
  }

  handleUserData(data) {
    this.userArr = data;
  }

  getTransactions() {
    this.dataService.getTransaction().subscribe(
      data => this.handleData(data),
      error => console.log(error)
    );
  }
  handleData(data) {
    this.dataArr = data;
  }
}
