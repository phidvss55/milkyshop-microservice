import { TokenService } from './../services/token.service';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userId: any;
  userData: any;
  dataArr: any;
  p: number = 1;

  constructor(
    private dataService: DataService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    var id = this.tokenService.getEmail();
    this.dataService.getOneUser(id).subscribe(
      data => this.handleData(data),
      error => console.log(error)
    )
  }

  handleData(data) {
    this.userData = data;
    this.userId = this.userData.id;
    this.getUserTransaction(this.userId);
  }

  getUserTransaction(id) {
    this.dataService.getUserTransaction(id).subscribe( res => {
      this.dataArr = res;
    });
  }
}
